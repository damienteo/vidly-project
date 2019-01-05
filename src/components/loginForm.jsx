import React, { Component }  from "react";
import Joi from 'joi-browser';
import Form from './common/form'
import Input from './common/input';

class LoginForm extends Form {

	state = {
		data: { username: '', password: ''},
		errors: {}
	}

	schema = {
		username: Joi.string().required().label('Username'),
		password: Joi.string().required().label('Password')
	}

	// validate = () => {
	// 	const result = Joi.validate(this.state.data, this.schema, { abortEarly: false });
	// 	console.log(result);

	// 	const errors = {};

	// 	const {data} = this.state;

	// 	if(data.username.trim() === '')
	// 		errors.username = 'Username is required';
	// 	if(data.password.trim() === '')
	// 		errors.password = 'Password is required';

	// 	console.log(Object.keys(errors));

	// 	return Object.keys(errors).length === 0 ? null : errors;
	// }
	

	// username = React.createRef();
	//ref={this.username}

	// componentDidMount() {
	// 	this.username.current.focus();
	// }

			// const username = this.username.current.value;


	doSubmit = () => {
		console.log("Submitted");
	}

	// validateProperty = input => {
	// 	if (input.name === 'username') {
	// 		if (input.value.trim() === '') return 'Username is required';
	// 	}
	// 	if (input.name === 'password') {
	// 		if (input.value.trim() === '') return 'Password is required';
	// 	}
	// }

	render() {
		const { data, errors } = this.state;

		return (
			<div>
				<h1>Login</h1>
					<form onSubmit={this.handleSubmit}>
						{this.renderInput('username', 'Username')}
						{this.renderInput('password', 'Password', 'password')}
						{this.renderButton('Login')}
					</form>
			</div>
		)
	}
}

export default LoginForm;

//class is a reserved keyword in javascript, hence className. same for 'for', hence 'htmlFor'

//ref={this.username}