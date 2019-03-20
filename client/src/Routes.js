import React, { Fragment } from "react"
import { Layout } from 'antd';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Search from "antd/lib/transfer/search";
import withSession from './components/withSession'
import Home from "./components/Home";

import Entrar from "./components/SignIn";
import Registrar from "./components/SignUp";
import Profile from "./components/Profile";
import AddRecipe from "./components/Recipe/AddRecipe";
import Navbar from "./components/Nabvar";
import  RecipePage  from "./components/Home/RecipePage";

const { Content, Footer } = Layout;

const Root = ({ refetch, session }) => (
	<Router>
	  <Fragment>
		<Navbar session={session} />
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/Signup" render={()=><Registrar refetch={refetch} />} />
			<Route path="/Signin" render={()=><Entrar refetch={refetch}/>}/>
			<Route path="/search" component={Search} />
			<Route path="/profile" component={Profile} />
			<Route path="/recipe/add" component={AddRecipe} />
			<Route path="/recipes/:_id" component={RecipePage} />
			<Redirect to='/' />
		</Switch>
		</Fragment>
	</Router>

)
const RootWithSession=withSession(Root);



export default function Rutas() {

	return (
		<Fragment>
		<RootWithSession />
		</Fragment>
)

}
