import React, { Fragment, useState } from 'react';
import {
	Form, Icon, Input, Button,
} from 'antd';
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


	  
  validateForm = () => {
    const { username, email, password, passwordConfirmation } = this.state;
    const isInvalid =
      !username || !email || !password || password !== passwordConfirmation;
    return isInvalid;
  };
	render() {
		return (
			<div className="container jumbotron">
				<Fragment>
					<h2 className="App">
						Registrate
					</h2>
					<Form >
						<Form.Item
						>
							<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
								placeholder="Username" name="username" onChange={this.handleChange} />
						</Form.Item>
						<Form.Item>
							<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} onChange={this.handleChange}  name="email" placeholder="Email Address" />

						</Form.Item>
						<Form.Item>
							<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} onChange={this.handleChange} type="password" placeholder="Password" />

						</Form.Item>
						<Form.Item>
							<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} onChange={this.handleChange} type="password" placeholder="Confirmation password" />

						</Form.Item>
						<Form.Item>
							<Button
								type="primary"
								htmlType="submit"

							>
								Log in
          </Button>
						</Form.Item>
					</Form>

				</Fragment>
			</div>



		)

	}
}
