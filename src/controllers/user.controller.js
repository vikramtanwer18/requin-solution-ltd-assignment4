const user_model = require("../models/user.model")

const handleUser = (req,res)=>{
        res.render("index")
}

const handleFetchingUser=(req, res) => {
    res.render('register');
  }

const handleCreateUser = async(req,res)=>{
    const { username, password, role } = req.body;

   try{
    const user = await user_model.create({
        username : username,
        password:password,
        role:role
    })
   if(user){
    res.render("deshboard")
   }

   }catch(err){
    console.log("err while register the user")
   }
    

}  
const handleAdmin = (req,res)=>{
    res.render('admin_dashboard')
    
}


const handleEditor = (req,res)=>{
    res.render('editor_dashboard')
}

const handleViwer = (req,res)=>{
    res.render('viwer_dashboard')
}

module.exports = {
    handleUser,
    handleFetchingUser,
    handleCreateUser,handleAdmin,
    handleEditor,
    handleViwer
}
