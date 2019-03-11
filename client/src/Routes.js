import React, { Fragment } from "react"
import { Layout } from 'antd';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Search from "antd/lib/transfer/search";
import withSession from './components/withSession'
import Home from "./components/Home";
import Nabvar from './components/Nabvar';
import Entrar from "./components/SignIn";
import Registrar from "./components/SignUp";

const { Content, Footer } = Layout;


const Root = () => (

	<Router>
		
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/Signup" render={()=><Registrar />} />
			<Route path="/Signin" render={()=><Entrar />}/>
			<Route path="/search" component={Search} />
			<Redirect path ="/" />
		</Switch>
	</Router>

)
const RootWithSession=withSession(Root);



export default function Rutas() {

	return (
		<Fragment>
			
	{/*}		<Layout className="layout">


				<Nabvar />

				<Content style={{ padding: '0 35px' }}>



	content*/}
		<Nabvar/>
		<RootWithSession />
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
