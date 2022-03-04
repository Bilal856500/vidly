import {API_ERROR} from '../constants/errorConst';
export const apiError = (payload) => {
    return {
        type: API_ERROR,
        payload
    }
};