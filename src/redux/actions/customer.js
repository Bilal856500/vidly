import {GET_CUSTOMERS} from '../constants/customerConst';
export const getCustomers = (payload) => {
    return {
        type: GET_CUSTOMERS,
        payload
    }
};