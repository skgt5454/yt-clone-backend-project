
import mongoose from "mongoose"
import { DB_NAME } from  "../constants.js";
const connectDB = async () =>{
    try{
     const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
     console.log(`\n MongoDB connected!! DB HOST:${connectionInstance.connection.host}`); // connection ek property hai connectionInstance ki to ye host ka name return kr degi
    }
    catch(error){
        console.log("mongodb connection error or failed",error)
       // process ko hum exit bhi krwa skte hai jo ki ek method hai
        process.exit(1) //node.js excess deta h process ka. process kya h jo ye current application chl rhi h na uska refernce hai. exit kya h ek method h kya krega  instantly application ko process se bahr kr dega agr error hoga toh
        // Operating system ko batane ke liye ki program success se khatam hua ya error ke saath, ek number return kiya jata hai ye hota h exit code -> success means 0 and failure means >0
        //Node recommend karta hai ki process ko naturally exit hone do age directly bnd kr diya to kuch incomplete rh jayenge
    }
}
export default connectDB
// jo humne code likha h database se baat krne ke liye isko baar baar use krnege kyu na hum ise ek function me likhkar ek utility me daal de

// age connectioInstance ko print krwaunga toh dega yeh
// Mongoose {
//   connections: [ ... ],
//   models: { },
//   connection: NativeConnection {
//     host: '127.0.0.1',
//     port: 27017,
//     name: 'youtube',
//     readyState: 1,
//     ...
//   },
//   ...
// }













