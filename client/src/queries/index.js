import gql from "graphql-tag";

export const HolaMundo = gql`
  {
    greeting
  }
`;

export const GET_CURRENT_USER = gql`
  query {
    getCurrentUser {
      username
      joinDate
      email
    }
  }
`;

export const GET_RECIPE = gql`
  query($_id: ID!) {
    getRecipe(_id: $_id) {
    _id
    name
    category
    description
    instructions
    createdDate
    likes
  }
  }
`;

export const GET_ALL_RECIPES=gql`
{
getAllRecipes{
	_id
	name
	category
}
}
`;/* User Mutations */

export const SIGNIN_USER = gql`
  mutation($username: String!, $password: String!) {
	      signinUser(username: $username, password: $password) {
		            token
		          }
	    }
`;


export const SIGNUP_USER = gql`
  mutation($username: String!, $email: String!, $password: String!) {
	      signupUser(username: $username, email: $email, password: $password) {
		            token
		          }
	    }
`;

