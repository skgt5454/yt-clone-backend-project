class ApiError extends Error{
    constructor(
        statuscode,
        message = "something went wrong",
        errors = [],
        statck = ""
    ){
        super(message)
        this.statuscode = statuscode;
        this.data = null //ye data property hai object ke andar. in case of success reponse data property hai
        //in case of error response isme data property nhi hai  to isse accha data me null bheje to dono case me same hi structure rhega
        // success response means user mil gya,error reponse means user nhi mila
//Ek line me yaad rakh: Backend me response ka “shape” (structure) same rakhne ke liye data property define ki jaati hai. Success me data hota hai, error me null hota hai
//Jab tum bolte ho "user hi nahi mila", uska matlab hai database se user data nahi mila, na ki poora request fail ho gaya
     this.message = message
     this.success = false
     this.errors = errors

     if(statck){
        this.stack = statck  //isse kya hota h jo backend likh rha h na use ek stacktrace mil jaye ki kon konsi files me dikkat h
     }
     else{
Error.captureStackTrace(this,this.constructor);
     }
// is code ki hme jrurat nhi h

    }
}
export {ApiError} 
