import React from "react";
import axios from 'axios';
import {getCustomers} from '../redux/actions';
import {apiError} from '../redux/actions';
import {connect} from 'react-redux';

const  Customers = ({getCustomers, data,message,statusCode,apiError}) => {
    const fetchCustomers = async ()=>{
        try {
            const customers = (await axios.get('https://jsonplaceholder.typicode.com/posts')).data.slice(0,5);
            getCustomers(customers);
        } catch(e){
            const errorMssg = e.response;
            apiError(errorMssg) // {data, status}
            console.log("message:",errorMssg)
        
            // alert('Something went wrong!');
        }
    }
    return (
        <div>
 <h1>Customers</h1>
 {data && data.length ? data.map((cust, index)=>
     <p key={index}>{cust.title}</p>
 ):<p>{message}</p> }
 <button onClick ={fetchCustomers} className="btn btn-primary" >Get Customers</button>
        </div>
    
    )
}


const mapStateToProps = ({customers,apiError}) => { // "customers" is called from "CombineReducers". "customers" here represents the states present inside "customerReducer".
    const {data} = customers; // inside "customerReducer" file we have a state named as "data". As we only want data field from the initial state.
    const {message,statusCode} = apiError;
    
    return { message,statusCode,data }

    // return { data }

}
const mapDispatchToProps = { // those functions that are used to update the state. We get these functions from actions. We can call as many functions as we require from different actions
   getCustomers, // this function is imported from "customersAction" file.
   apiError
}
export default connect(mapStateToProps, mapDispatchToProps)(Customers);