import React, { Fragment } from "react"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Nabvar from './components/Nabvar';


import { Layout } from 'antd';
import Registrar from "./components/SignUp";
import Entrar from "./components/SignIn";

const { Content, Footer } = Layout;


const Root = () => (

	<Router>
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/Sign_up" component={Registrar} />
			<Route path="/Sign_in" component={Entrar} />
			<Redirect path ="/" />
		</Switch>
	</Router>

)




export default function Rutas() {

	return (
		<Fragment>
	{/*}		<Layout className="layout">


				<Nabvar />

				<Content style={{ padding: '0 35px' }}>



	content*/}
		<Root />


{/*}
				</Content>
				<Footer style={{ textAlign: 'center' }}>
					Ant Design ©2018 Created by Ant UED
    </Footer>
			</Layout>
*/}





		</Fragment>
	)

}
