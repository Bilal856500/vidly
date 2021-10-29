import React, { Component } from "react";
import Joi from "joi-browser";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const options = { abortEarly: false };
    const result = Joi.validate(this.state.data, this.schema, options);
    //this result object in the console will return an error object which has details key which is an array of 2
    // objects this details array contains  an object which  2 properties which we are interested in.1:path property which is
    // an array and its first element has name of our target property.Now we are going to map this array into our
    //error object by using For of loop.//

    if (!result.error) return null; // if their are no errors we are going to return Null//
    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message; //setting the values of an error object//
    // here we are setting the path property which is the target property to
    // an error message.Message property is also available in the details object//
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    //validate method has first parameter as the object,second as the schema//
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    // if this error message is true then we are going to store in  the error object.If the name of the inpit name is username//
    //then we are going to set the username property of the errors object//
    //then it will be stored in username otherwise in the password.We set it to errormessage we get it from validation functiom//
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  buttonField(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  }
}

export default Form;
