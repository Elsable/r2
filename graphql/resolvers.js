const jwt =require( 'jsonwebtoken')
const User = require('./../models/User');
const gravatar = function (size) {
	if (!this.size) size = 200;
	if (!this.email) {
		return 'https://gravatar.com/avatar/?s' + size + '&d=retro';
	} else {
		var md5 = crypto.createHash('md5').update(this.email).digest('hex');
		return 'https://gravatar.com/avatar/' + md5 + '?s' + size + '&d=retro';
	}

}
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
        const allRecipes = await Recipe.find().sort({ createdDate: "desc" });
        if (allRecipes) {
            return allRecipes;
        }

        return null;
    }, 
    getRecipe: async (root, { _id }, { Recipe }) => {
        const recipe = await Recipe.findOne({ _id });
        return recipe;
      },
    getCurrentUser: async (root, args, { currentUser, User }) => {
        if (!currentUser) {
          return null;
        }
        const user = await User.findOne({
          username: currentUser.username
        }).populate({
          path: "favorites",
          model: "Recipe"
        });
        return user;
      }
    
        },

Mutation:{


    addRecipe: async (root, { name, description, category, instructions, username }, { Recipe }) => {
        const newRecipe = await new Recipe({
            name,
            description,
            category,
            instructions,
            username
        }).save();
        return newRecipe;

},

    signinUser: async(root,{username,password},{User})=>{
        const user=await User.findOne({username});
        if(!user){
            throw new Error('Usuario no encontrado');
        }
        const isValidPassword=await user.comparePassword(password,user.password);
        if(!isValidPassword){
            throw new Error('Contraseña invalida');
        }
        return  {token:createToken(user,process.env.SECRET,'1hr')}
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
        })
     
        
        .save();
        return {token:createToken(newUser,process.env.SECRET,'1hr')}
    }


}

};
