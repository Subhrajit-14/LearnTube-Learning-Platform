const mongoose = require("mongoose");

// const URI = "mongodb://127.0.0.1:27017/mern_admin";
// mongoose.connect(URI);
const URI = process.env.MONGO_DB;

const connectDb = async() => {
    try{
        await mongoose.connect(URI);
        console.log("MongoDB Connected");
    }catch(error){
        console.error("database connection failed");
        process.exit(0)
    }
};


module.exports = connectDb;