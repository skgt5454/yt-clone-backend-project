const asynchandler = (requesthandler)=>{
    (req,res,next)=>{
        Promise.resolve(requesthandler(req,res,next)).catch((err) => next(err))
    }
}

export {asynchandler}
//async handler hum use krenge promises wala 



















// ye try catch wala tha
// const asynchandler =(fn)=> async (req,res,next)=>{
//     try{
//          await fn(req,res,next)
//     }
//     catch(error){
//         res.status(err.code || 500).json({
//             success:false,
//             message:err.message
//         })// ye usually hm status bhej dete hai agr user pass kr rha h to error.code likh dete h varna 500
//     }
// } 
//export {consthandler}