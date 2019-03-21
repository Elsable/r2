import React,{Fragment} from 'react';
import {GET_ALL_RECIPES} from "../../queries";
import {Query} from "react-apollo";
import Card from './card';




export default function Home () {


return(
	<Fragment>
		<h2>Home</h2>
	<Query query={GET_ALL_RECIPES}>
	{({data,loading,error})=>{
		if(loading) return <div>Loading</div>
		if(error) return <div>Error</div>
		{/*console.log(data); */}
		return data.getAllRecipes.map(recipe=><Card key={recipe._id} {...recipe}/>)
	}}

	</Query>
	</Fragment>
)
}
