import React from "react";
import {connect} from 'react-redux';
 const Rentals = ({data})=> {
     return<div>
         {data && data.length ? data.map((cust, index)=>
     <p key={index}>{cust.body}</p>
 ): null}
     </div> 
 }
 const mapStateToProps = ({customers}) => { // "customers" is called from "CombineReducers". 
    // "customers" here represents the states present inside "customerReducer".
    const {data} = customers; // inside "customerReducer" file we have a state named as "data".
    //  As we only want data field from the initial state.
    return { data }
}
export default connect(mapStateToProps, null)(Rentals);