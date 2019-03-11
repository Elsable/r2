import ApolloClient from "apollo-boost";

const client = new ApolloClient({
	// uri: "http://localhost:4000"
	uri: "http://192.168.0.100:4000/graphql",
	fetchOptions:{
		credentials:'include'
	},
	request: opertation=>{
		const token=localStorage.getItem('token');
		opertation.setContext({
			headers:{
				authorization:token
			}
		})
	},
	onError:({networkError})=>{
		if(networkError){
			console.log('Network Error',networkError);
		}
	}
});

export default client;
