import React from "react";
import Input from "./common/input";
import  Joi from 'joi-browser';
import Form from "./common/form";
class  LoginForm extends Form {
    state ={
        data : {username: '', password : '' },
        errors : {}
    };
    schema = {
        username:Joi.string().required().label('Username'),
        password :Joi.string().required().label('Password')
    }

    doSubmit = ()=>{
        console.log("Submitted")
    }
    render() {
        const {data,errors}= this.state;

        return (
        <div>
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
                <Input
                    autoFocus
                    type = "text"
                    name ="username"
                    value={data.username}
                    label="username"
                    onChange={this.handleChange}
                />

                <h4>{errors.username}</h4>
                <Input
                    type = "password"
                    name ="password"
                    value={data.password}
                    label="password"
                    onChange={this.handleChange}
                />
                <h4>{errors.password}</h4>
                {this.buttonField("Login")}
            </form>
        </div> );

    }
}
export default  LoginForm;
