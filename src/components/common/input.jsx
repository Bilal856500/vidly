import React from 'react';
const Input =({name,label,value,onChange,type})=>{
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input value ={value}
                   onChange={onChange}
                   type={type}
                   name = {name}
                   id={name}
                   className="form-control"/>
                 </div>
    );
};
export default Input;