import {
   GET_CUSTOMERS
} from '../constants/customerConst';
const initState = {
    data: []
}
const customers = (state = initState, action) => {
    switch (action.type) {
        
        case GET_CUSTOMERS:
            return {
                ...state,
                data: action.payload
            }
    
      
        default:
            return state;
    }
}
export default customers;