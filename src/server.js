//require('dotenv').config({path:''}) //  isko likhne se code me consistency nhi aa rhi to hum ise nhi likh rhe h

//As early as possible in your application, import and configure dotenv: means jitni jldi hmari application load ho utni jldi are env hr jagah available ho jane chahiye
// agr mainfile me availabe ho gye to sari files ko excess mil jaye
// import dotenv from "dotenv" // iswale syntax ko use krne ke liye  hum package.json me scrpits me -r dotenv/config so isse env direct load ho jayenge aur config environment load ho rha h. lekin hme ek experimental feature use krna pdega
import connectDB from "./db/index.js"
// dotenv.config({path: './.env'}) // ye usko solve krke likha gya h
connectDB()
console.log(process.env.MONGODB_URI);







// import mongoose from "mongoose"
// import { DB_NAME} from "./constants";
// import express from "express"
// const app = express()

// ( async()=>{
//     try{
//       await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//       app.on("errror",(error)=>{console.log("err:",error) // jo app h vo kai event ko listen kr skti h unme se ek h errror
//         throw error
//     })
//     app.listen(process.env.PORT , ()=>{console.log(`app is listening on port${process.env.PORT}`)})
//  } catch (error){
//         console.error("Error:" , error);
//         throw err;
//     }
// })()