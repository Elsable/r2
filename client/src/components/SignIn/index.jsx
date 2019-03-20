/*import React, { Fragment, useState,useEffect } from 'react';
import { Form, Icon, Input, Button } from 'antd';

import { SIGNIN_USER } from '../../queries';
import {withRouter} from 'react-router-dom'

import { Mutation } from 'react-apollo';
import { Error } from '../Error';
export default withRouter (function Entrar(props){
	const [newUsuario, setNewUsuario]=useState({
		username:'',
		password: ''
})
function validateForm ()  {
	const { username,  password } = newUsuario;
	const isInvalid = !username || !password ;
	return isInvalid;
};
async function handleSubmit  (event, signinUser) {
	event.preventDefault();
	signinUser()=(async({data}) => {

			console.log(data);
			localStorage.setItem('token',data.signinUser.token);
			await  props.refetch();
			clearState();
			props.history.push('/');
		});
	}
function clearState  () {
	this.setState( newUsuario({	username:'',
	password: ''}));
};
	return(
			<div className="container ">
				<Fragment>
					<h2 className="App">Iniciar Sesion</h2>
					<Mutation mutation={SIGNIN_USER} variables={{newUsuario}}>
					{(signinUser, { data, loading, error }) => {
							return (
								<Form onSubmit={(event) => handleSubmit(event, signinUser)}>
									<Form.Item>
										<Input
											prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
											value={newUsuario.username}
											placeholder="Username"
											name="username"
											onChange={e=>setNewUsuario({...newUsuario,username:e.currentTarget.value})}
										/>
									</Form.Item>
									<Form.Item>
										<Input
											value={newUsuario.password}
											prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
											name="password"
											onChange={e=>setNewUsuario({...newUsuario,password:e.currentTarget.value})}
											type="password"
											placeholder="Password"
										/>
									</Form.Item>
									<Form.Item>
										<Button
											type="primary"
											htmlType="submit"
											disabled={ validateForm()}
											onClick={handleSubmit}
										>
											Registrate
										</Button>
										{error && <Error error={error} />}
									</Form.Item>
									</Form>
							);
							}}	
						</Mutation>
				</Fragment>
			</div>
		
	)
})*/
import React, { Fragment, useState } from 'react';
import { Form, Icon, Input, Button } from 'antd';

import { SIGNIN_USER } from '../../queries';
import {withRouter} from 'react-router-dom'

import { Mutation } from 'react-apollo';
import { Error } from '../Error';
const initialState = {
	username: '',
	password: ''
};

 class  Entrar extends React.Component {
	state = { ...initialState };

	clearState = () => {
		this.setState({ ...initialState });
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	handleSubmit = (event, signinUser) => {
		event.preventDefault();
		signinUser().then(async({data}) => {
			console.log(data);
			localStorage.setItem('token',data.signinUser.token);
			await this.props.refetch();
			this.clearState();
			this.props.history.push('/');
		});
	};

	validateForm = () => {
		const { username,  password } = this.state;
		const isInvalid = !username || !password ;
		return isInvalid;
	};
	render() {
		const { username,  password } = this.state;
		return (
			<div className="container ">
				<Fragment>
					<h2 className="App">Iniciar Sesion</h2>
					<Mutation mutation={SIGNIN_USER} variables={{ username, password }}>
						{(signinUser, { data, loading, error }) => {
							return (
								<Form onSubmit={(event) => this.handleSubmit(event, signinUser)}>
									<Form.Item>
										<Input
											prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
											value={username}
											placeholder="Username"
											name="username"
											onChange={this.handleChange}
										/>
									</Form.Item>
									<Form.Item>
										<Input
											value={password}
											prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
											name="password"
											onChange={this.handleChange}
											type="password"
											placeholder="Password"
										/>
									</Form.Item>
									<Form.Item>
										<Button
											type="primary"
											htmlType="submit"
											disabled={loading || this.validateForm()}
										>
											Registrate
										</Button>
										{error && <Error error={error} />}
									</Form.Item>
								</Form>
							);
						}}
					</Mutation>
				</Fragment>
			</div>
		);
	}
}
export default  withRouter(Entrar)

