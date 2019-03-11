import {
	Form, Icon, Input, Button,
} from 'antd';

import React, { Fragment, useState } from 'react';

import {SIGNUP_USER} from '../../queries'

import {Mutation} from 'react-apollo';
import { Error } from '../Error';
const initialState = {
	username: "",
	email: "",
	password: "",
	passwordConfirmation: ""
  };
  

export default class Registrar extends React.Component {
	
	  state = { ...initialState };

	  clearState = () => {
		this.setState({ ...initialState });
	  };
	
	  handleChange = event => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	  };

		handleSubmit=(event,signupUser)=>{
			event.preventDefault();
			signupUser().then(data=>{
				console.log(data);
			localStorage.setItem('token',data.signupUser.token);
				this.clearState();
			});
		}
	  
  validateForm = () => {
    const { username, email, password, passwordConfirmation } = this.state;
    const isInvalid =
      !username || !email || !password || password !== passwordConfirmation;
    return isInvalid;
  };
	render() {
		const {username,email,password,passwordConfirmation}=this.state;
		return (
			<div className="container ">
				<Fragment>
					<h2 className="App">
						Registrate
					</h2>
			<Mutation mutation={SIGNUP_USER} variables={{ username,email, password }}>
			{(signupUser,{data,loading,error})=>{


			return(		<Form onSubmit={event=>this.handleSubmit(event,signupUser)}>
						<Form.Item
						>
							<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
								value={username} placeholder="Username" name="username" onChange={this.handleChange} />
						</Form.Item>
						<Form.Item>
							<Input value={email} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} onChange={this.handleChange}  name="email" placeholder="Email Address" />

						</Form.Item>
						<Form.Item>
							<Input value={password} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} name="password" onChange={this.handleChange} type="password" placeholder="Password" />

						</Form.Item>
						<Form.Item>
							<Input value={passwordConfirmation} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} name="passwordConfirmation" onChange={this.handleChange} type="password" placeholder="Confirmation password" />

						</Form.Item>
						<Form.Item>
							<Button
								type="primary"
								htmlType="submit"
								disabled={loading|| this.validateForm()}
							>
								Registrate
          </Button>
					{error&&<Error error={error}/>}
					
						</Form.Item>
					</Form>
			)}}
			</Mutation>

				</Fragment>
			</div>



		)

	}
}
