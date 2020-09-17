import axios from 'axios'
import jwt_decode from 'jwt-decode'
import setAuthToken from '../helper/setAuthToken'


export const userLoginHelper = (data) => {
    return {
        type: "SET_USERS_DATA",
        payload: data
    }
}

const userLogoutHelper = (data) => {
    return {
        type: "DELETE_USERS_DATA",
        payload: data
    }
}


export const userLogin = (loginCredentials,history) => {
    return async (dispatch) => {
        try {
            const { data } = await axios({
                method: "Post",
                url: "http://ec2-13-233-141-195.ap-south-1.compute.amazonaws.com:3333/sessions",
                data: loginCredentials
            })
            const { token, user } = data
            localStorage.setItem('userJwtToken', token);
            setAuthToken(token);
            dispatch(userLoginHelper(user))
            history.push('/dashboard')
        }
        catch (err) {
            // dispatch({
            //     type: "SET_LOGIN_ERRORS",
            //     payload: err.response.data
            // })
            console.log("Error in userLogin Action", err.message)
        }
    }
}


export const userLogout = () => {
    return (dispatch) => {
        localStorage.removeItem('userJwtToken');
        setAuthToken(false);
        dispatch(userLogoutHelper({}));
    }
}