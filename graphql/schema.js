exports.typeDefs=`
type Query{
greeting: String

getAllRecipes: [Recipe]


getCurrentUser: User
}

type Recipe{
	_id: ID
	name: String!
	category: String!
	description: String!
	instructions: String!
	createdDate: String!
	likes: Int
	username: String

}

type Token{
	token:String!
}
type User{
	_id: ID
	username: String!
	password: String!
	email: String!
	joinDate:  String
	picture: String 
	favorites: [Recipe]
}



type Mutation{
		

		addRecipe(name: String!, description: String!, category: String!, instructions: String!, username: String ): Recipe
		signinUser(username:String!, password:String!):Token
		signupUser(username:String!, email:String!, password:String!): Token
	}	
`
