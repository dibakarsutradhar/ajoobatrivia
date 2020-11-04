import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";

// REGISTER USER
export const registerUser = (userData, history) => dispatch => {
    axios
        .post("/api/users/register", userData)
        // re-directing now to succesful registraion page
        .then(res => history.push("/successful")) // re-direct to login on succesful register
        .catch(err =>
            dispatch ({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// LOGIN - @GET user token
export const loginUser = userData => dispatch => {
    axios
        .post("/api/users/login", userData)
        .then(res => {
            // Save to localStorage

            // Set token to localStorage
            const { token } = res.data;
            localStorage.setItem("jwtToken", token);
            
            // Set token to Auth Header
            setAuthToken(token);

            // Decode token to get user data
            const decoded = jwt_decode(token);

            // Set current user
            dispatch(setCurrentUser(decoded));
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })    
        );
};

// Set logged in User
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

// User Loading
export const setUserLoading = () => {
    return {
        type: USER_LOADING
    };
};

// Log User out
export const logoutUser = () => dispatch => {
    // Remove token from localStorage
    localStorage.removeItem("jwtToken");
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to empty object {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
};