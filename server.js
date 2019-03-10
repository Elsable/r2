
const mongoose=require('mongoose');

const User=require('./models/User')

const Recipe=require('./models/Recipe')

const {resolvers}=require('./graphql/resolvers');
const {typeDefs}=require('./graphql/schema');
const { ApolloServer, gql } = require('apollo-server');

//conexion a mlab 
require('dotenv').config({path:'variables.env'});
mongoose.connect(process.env.MONGO_URI).
then(()=>console.log('bd conectada')).
	catch(err=>console.error(err))




const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    Recipe,
    User
  })
});


server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});
