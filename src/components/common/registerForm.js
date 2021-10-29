import React  from 'react';
import Form from "./form";
import Joi from "joi-browser";
import Input from "./input";

class RegisterForm extends Form {
    state = {
        data :{username:"",password:"",name:""},
        errors :{}
    };
    schema = {
        username: Joi.string().required().email().label("Username"),
        password :Joi.string().required().min(5).label("Password"),
        name : Joi.string().required().label("Username")
};
doSubmit(){
  console.log("Submitted")
};



    render() {
        const {data ,errors}=this.state
        return (
            <div>
                <h1>Register Form</h1>
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

                    <Input
                        type = "text"
                        name ="name"
                        value={data.name}
                        label="name"
                        onChange={this.handleChange}
                    />
                    <h4>{errors.name}</h4>
                    {this.buttonField("Register")}
                </form>

            </div>
        );
    }
}

export default RegisterForm;