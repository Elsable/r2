import React,{useState} from 'react';

import './App.css';
import { ApolloProvider, Query}  from "react-apollo";
import { ApolloProvider as ApolloProviderHooks } from "react-apollo-hooks";

import client from "./apolloClient";

import { HolaMundo } from "./queries";

import Routes from "./Routes";

function  App() {
	
  const [count, setCount] = useState(0);	
    return (
           <ApolloProvider client={client}>
         <ApolloProviderHooks client={client}>
	    <div className="App">

	
	
  <Query query={HolaMundo}>
    {({ loading, data, error }) => {
	    console.log(data);
      if (loading) return "loading";
      if (error) return "algo salio mal";
	


      return  (
        <h2>
           {/*{data.greeting}
	      
	      <p>You clicked {count} times</p>
<button onClick={() => setCount(count + 1)}>
        Click me
</button>
      componentes*/}
	      <Routes/>
        </h2>
      );
    }}
  </Query>



	    </div>

	     </ApolloProviderHooks>
      </ApolloProvider>
    );
  
}

export default App;
