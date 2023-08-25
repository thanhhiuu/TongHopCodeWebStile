import mongoose from "mongoose";


const CommentsSchema = new mongoose.Schema(
   {
        UserId: {
            type: String,
            required: true,
            unique: true
        }, 
        
        UserId: {
            type: String,
            required: true,
            unique: true
        }, 
        
   },
   {timestamps: true}
)

export  default mongoose.model("Comments",CommentsSchema)