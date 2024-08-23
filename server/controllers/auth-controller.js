const User = require("../models/user-model");
const bcrypt = require("bcryptjs");




const home = async(req, res) => {
    try{
        res.status(200).send("Welcome to My portfolio using router");
    }catch(err){
        console.log(error);
    }
};

//User-Register Logic:

const register = async(req, res) => {
    try{
       console.log(req.body);
       const{username, email, phone, password} = req.body;

       const userExits = await User.findOne({email: email })

       if(userExits){
        return res.status(400).json({error: "User already exists with that email"})
       }

       //hash the password
        //const saltRound = 10;
        //const hash_password = await bcrypt.hash(password, saltRound);

       const userCreated = await User.create({username, email, phone, password});

       
        res.status(201).json({message:"Regestration Successful", token : await userCreated.generateToken(), userId: userCreated._id.toString(),});
    }catch(err){
        res.status(500).json({message: "internal server error"});
    }
};

//User-Register Logic:

const login = async(req, res) => {
    try{
       const{email, password} = req.body;

       const userExits = await User.findOne({email });
       console.log(userExits);

       if(!userExits){
        return res.status(400).json({error: "Invalid Credentials"})
       }

       //const newUser = await bcrypt.compare(password, userExits.password);
       const newUser = await userExits.comparePassword(password);

       if(newUser){
        res.status(200).json({message:"Login Successful", token : await userExits.generateToken(), userId: userExits._id.toString(),});
       }else{
        res.status(401).json({message: "Invalid Email or Password"})
       }  
    }catch(err){
        res.status(500).json({message: "internal server error"});
    }
};

//to send  user data User Logic:
const user = async (req, res) => {
    try {
      const userData = req.user;
      console.log(userData);
      return res.status(200).json({ userData });
    } catch (error) {
      console.log(`error from the user route ${error}`);
    }
  };


module.exports = {home , register, login, user};