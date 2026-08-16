//require('dotenv').config({path:'./env'}) //  isko likhne se code me consistency nhi aa rhi to hum ise nhi likh rhe h. isko use krte h toh run hoga usme dikkat nhi aayegi

// As early as possible in your application, import and configure dotenv: means jitni jldi hmari application load ho utni jldi are env hr jagah available ho jane chahiye
// agr mainfile me availabe ho gye to sari files ko excess mil jaye
import dotenv from "dotenv" // iswale syntax ko use krne ke liye  hum package.json me scrpits me -r dotenv/config so isse env direct load ho jayenge aur config environment load ho rha h. lekin hme ek experimental feature use krna pdega
import connectDB from "./db/index.js"
// dotenv.config({path: './env'}) // ye usko solve krke likha gya h
connectDB()
.then(()=>{
   app.listen(()=>{app.listen(process.env.port||8000,()=>{console.log(`server is running:${process.env.port}`)})
   app.on((error)=>{console.log(`the error is occured:${error}`)})
})
})
.catch((err)=>{console.log("mongodb connection failed :",err)
})
















// import mongoose from "mongoose"
// import { DB_NAME} from "./constants";
// import express from "express"
// const app = express()
// //hum function bnaenge using iife wha hum async use krenge aur try catch bhi. iife always start with ;. iife ek anonymous function hai
// ( async()=>{
//     try{
//       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) // await ka mtlb jb tk databse connect nhi ho jata tb tk niche ka code execute mt kro . agr await nhi lgaya aur server run ho gya to routes database use krte waqt fail ho jaaega
//       app.on("errror",(error)=>{console.log("err:",error) // yah errror koi event h .app.on object pr hone wale kai event ko listen kr skta h to app.on error handler ki tarah work kr rha h yha woh error return kr dega jaise ki MongoDB connection fail ho gaya, route ke andar exception aa gaya,ya port already busy hai,to ye sab automatically app.on("error") me nahi aayega wo catch me aayega but cases ke lie server.on(),mongoose.connection.on. use krenge app. on bss jo events pr error aayenge unke error through krega
//         throw error // iska mtlb ye error aaage bhej do ye lgana jruri h taki aage ki process na chale server ko pta ;g haye error h
//     })
//     app.listen(process.env.PORT , ()=>{console.log(`app is listening on port${process.env.PORT}`)})
//  } catch (error){
//         console.error("Error:" , error);
//         throw err;
//     }
// })()