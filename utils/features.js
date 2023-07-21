import jwt from "jsonwebtoken"


export const sendCoookie=(user , res,message,statusCode=200)=>{
    const token = jwt.sign({_id:user._id },process.env.JWT_SECRET);

    
    res.status(statusCode).cookie("token",token,{
        httpOnly:true,
        maxAge:15*60*1000,
        
        sameSite:process.env.Node_ENV === "Development"? "lax":"none",
        secure:process.env.Node_ENV === "Development"? false:true,
      })
    .json({
        success:true,
        message,
    });


   
   };

