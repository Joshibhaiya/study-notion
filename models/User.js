// user model schema 
const mongoose = require ("mongoose")

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true
        },
        Email:{
            type:String,
            required:true,
            trim:true
        },
        contactNumber:{
            type:String,
            required:true,
            trim:true
        },
        password:{
            type:String,
            required:true,
            trim:true
        },
        accountType:{
            type:String,
            enum : ["Admin","Student", "Instructor"],
            required:true,
        },
        additionalDetails:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"Profile",
        },
        courses:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"Course"
            }
        ],
        image:{
            type:String,
            required:true,
        },
        courseProgress:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"CourseProgress",
            }
        ],
        
        
});

module.exports = mongoose.model("User",userSchema);