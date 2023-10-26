const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

//dotenv configuration
dotenv.config();
 

// rest objects 
const app = express();

// middleware
app.use(cors());
app.use(express.json());

//  //routes
//  app.get('/',(req,res) =>{
//     res.send('<h1> Welcome To Node server </h1>');
//  } )
    app.use('/api/v1/portfolio',require('./routes/portfollioRoutes'));

 //port
 const PORT=process.env.PORT ||8080

 //listen
app.listen(PORT ,()=>{
    console.log("Server running On port " + PORT);
})

