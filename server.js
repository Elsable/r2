
const mongoose=require('mongoose');
const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require("cors");
const bodyParser = require("body-parser");

const User=require('./models/User')
const Recipe=require('./models/Recipe')



const { ApolloServer, gql }=require( "apollo-server-express");


// const { GraphQLServer } =require('graphql-yoga')

const {resolvers}=require('./graphql/resolvers');
const {typeDefs}=require('./graphql/schema');
// const { ApolloServer, gql } = require('apollo-server');

//conexion a mlab 
require('dotenv').config({path:'variables.env'});

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose.connect(process.env.MONGO_URI).
then(()=>console.log('bd conectada')).
	catch(err=>console.error(err));
 const app = express();
app.use(cors("*"));
app.use(bodyParser.json());


  app.use(async (req, res, next) => {
    const token = req.headers["authorization"];
    if (token !== "null") {
      try {
        const currentUser = await jwt.verify(token, process.env.SECRET);
        req.currentUser = currentUser;
        
      } catch (err) {
        console.error(err);
      }
    }
    next();
  });
  


const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async({ req }) => ({
    Recipe,
    User,
    currentUser: req.currentUser
  }),
  
});
server.applyMiddleware({
  app
});



app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)