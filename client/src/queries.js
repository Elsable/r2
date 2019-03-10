import gql from "graphql-tag";

export const HolaMundo = gql`
  {
    greeting
  }
`;
export const GetAllRecipes=gql`
{

getAllRecipes{
	name
	description
	instructions
	category
	likes
	createdDate
}

}
`
