import {
    API_ERROR
 } from '../constants/errorConst';
 const initState = {
     message: '',
     statusCode: 0
 }
 const apiError = (state = initState, action) => {
     switch (action.type) {
         
         case API_ERROR:
             return {
                 ...state,
                 message: action.payload.data.message || 'Not Found',
                 statusCode:action.payload.status
             }
     
       
         default:
             return state;
     }
 }
 export default apiError;