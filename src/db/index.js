
import mongoose from "mongoose"
import { DB_NAME } from  "../constants.js";
const connectDB = async () =>{
    try{
     const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
     console.log(`\n MongoDB connected!! DB HOST:${connectionInstance.connection.host}`); //  isse kya hoga jo pura mongodb ka url hai to vo url vo lele jha pr connection ho rha h // ye isliye kraya jata h taki agr me production ki jagah kisi aur server pe connect ho jau to mujhe pta rhe ki me konse host pr connect hu kyunki production,development,testing ka alg hota h
    }
    catch(error){
        console.log("mongodb connection error or failed",error);
       // process ko hum exit bhi krwa skte hai jo ki ek method hai
        process.exit(1) // process kya h jo ye current application chl rhi h na uska refernce hai. exit kya h ek method h kya krega  instantly application ko process se bahr kr dega agr error hoga toh
        // Operating system ko batane ke liye ki program success se khatam hua ya error ke saath, ek number return kiya jata hai ye hota h exit code -> success means 0 and failure means >0
        //Node recommend karta hai ki process ko naturally exit hone do age directly bnd kr diya to kuch incomplete rh jayenge
    }
}
//console.log(connectionInstance)
export default connectDB





















