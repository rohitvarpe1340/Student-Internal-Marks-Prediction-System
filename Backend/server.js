const express = require('express');
const cors = require('cors')
 const db = require('./db');
 require('dotenv').config();
const studentRoutes= require("./routes/studentRoutes")

const app= express();

app.use(express.json());
app.use(cors());

const port= 3000;

app.use("/api",studentRoutes);

app.listen(port,()=>{
    console.log(`sever is running http://localhost${port}`);
});