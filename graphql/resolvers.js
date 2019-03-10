const jwt =require( 'jsonwebtoken')
const User = require('./../models/User');

const createToken=(user,secret,expiresIn)=>{

    const{username,email}=user;
    return jwt.sign({
        username,email
    }, secret,{
        expiresIn
    });
}
exports.resolvers={

	Query:{
                greeting:()=>'hola mundo',
		
		getAllRecipes: async (root, args, { Recipe }) => {
        const allRecipes = await Recipe.find();
        if (allRecipes) {
          return allRecipes;
        }

        return null;
    }
        },

	Mutation:{


        addRecipe: async (root, { name, description, category, instructions, username }, { Recipe }) => {
            user.picture = User.gravatar();
            const newRecipe = await new Recipe({
                name,
                description,
                category,
                instructions,
                username
            }).save();
            return newRecipe;

	 	
    },
    signupUser: async (root,{username,email,password},{User})=>{
        const user= await User.findOne({username});
        if(user){
            throw new Error('El usuario ya existe');
        }
        const newUser=await new User({
            username,
            email,
            password
        }).save();
        return {token:createToken(newUser,process.env.SECRET,'1hr')}
    }


}

};
