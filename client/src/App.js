import React, { useState, Fragment } from 'react';

import { ApolloProvider, Query } from 'react-apollo';

import { ApolloProvider as ApolloProviderHooks } from 'react-apollo-hooks';

import Routes from './Routes';
import client from './apolloClient';
import { HolaMundo } from './queries';

function App() {
	// const [ count, setCount ] = useState(0);
	return (
		<ApolloProvider client={client}>
			<ApolloProviderHooks client={client}>
				<Query query={HolaMundo}>
					{({ loading, data, error }) => {
					{/**	console.log(data); */}
						if (loading) return 'loading';
						if (error) return 'algo salio mal';

						return (
							<Fragment>
								{/*{data.greeting}
	      
	      <p>You clicked {count} times</p>
<button onClick={() => setCount(count + 1)}>
        Click me
</button>
      componentes*/}
								<Routes />
							</Fragment>
						);
					}}
				</Query>
			</ApolloProviderHooks>
		</ApolloProvider>
	);
}

export default App;
