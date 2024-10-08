require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router")
const serviceRoute = require("./router/service-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const adminRoute = require("./router/admin-router");


// let's tackle cors
const corsOptions = {
    // origin: "http://localhost:5173",
    origin: (origin, callback) => {
      const allowedOrigins = [
        process.env.FRONTEND_URL,
      ];
      const isAllowed = allowedOrigins.includes(origin);
      callback(null, isAllowed ? origin : false);
    },
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
  };
  
  app.use(cors(corsOptions));
  app.use(express.json());
  app.get("/",(req,res)=>{
    res.json({success : "Hello users.."})
  })

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);
app.use("/api/admin", adminRoute);

app.use(errorMiddleware);

const PORT = 5000;
connectDb().then(() => {
    app.listen(PORT, () => { 
        console.log(`Server is running on port ${PORT}`);
    });
});

