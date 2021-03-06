import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
} from "../_constants/user.constants";

const auth = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { username: action.payload };
        case LOGOUT:
        case LOGIN_FAILURE:
            return { errorMessage: action.payload };
        case REGISTER_SUCCESS:
            return { username: action.payload };
        case REGISTER_FAILURE:
            return { errorMessage: action.payload };
        default:
            return state;
    }
};

export default auth;