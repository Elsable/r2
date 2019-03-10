import React,{Fragment} from 'react';
import {GetAllRecipes} from "./../../queries";
import {Query} from "react-apollo";




export default function Home () {


return(
	<Fragment>
		<h2>Home</h2>
	<Query query={GetAllRecipes}>
	{({data,loading,error})=>{
		if(loading) return <div>Loading</div>
		if(error) return <div>Error</div>
		console.log(data);
		return(<p>Recipes</p>)
	}}

	</Query>
	</Fragment>
)
}
