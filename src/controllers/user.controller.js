import { asynchandler } from "../utils/asynchandler.js";
import {ApiError} from "../utils/apiError.js"
import {users} from "../models/user.models.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import {apiResponse} from "../utils/apiResponse.js"
const registerUser = asynchandler(async(req,res)=>{
  
    const { fullname,username,email,password } = req.body
    // console.log("email : ",email)
    if
    (
        [fullname,email,username,password].some((field)=>field?.trim() === "")
    )
    {
        throw new ApiError(400,"All fields are required")
    }

    const existedUser = User.findOne({
        $or:[{username},{email}]
    })
    if(existedUser)
    {
        throw new ApiError(409,"user with email or username is already exist")
    }

    const avatarlocalpath = req.files?.avatar[0]?.path
    const coverImagelocalpath = req.files?.coverImage[0]?.path

    if(!avatarlocalpath)
    {
        throw new ApiError(400,"avatar file is required");
    }
   const avatar= await uploadOnCloudinary(avatarlocalpath)
   const coverImage =  await uploadOnCloudinary(coverImagelocalpath)
    
   if(!avatar)
   {
    throw new ApiError(400,"avatar file is required");
   }

   User.create({
    fullname,
    avatar:avatar.url,
    coverImage:coverImage?.url || " ",
    email,
    password,
    username:username.toLowerCase()
   })
   
   const createdUser = await User.findById(user._id).select("-password -refreshToken")
if(!createdUser){throw new ApiError(500,"something went wrong whle register the user")}

return res.status(200).json(
    (new apiResponse(200,createdUser,"user registerd succesfully"))
)
return res.status(201).json({})
})

export { registerUser }









