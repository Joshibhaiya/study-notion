// const mongoose = require("mongoose")

// const profileSchema = new mongoose.Schema({
//     gender:{
//         type: String,
//     },
//     dateOfBirth:{
//         type:String
//     },
//     about:{
//         type:String,
//         trim:true
//     },
//     contactNumber:{
//         type:String,
//         trim:true,
//     }
// })

// module.exports = mongoose.model("Profile",profileSchema)


const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Non-binary', 'Other'], // Add valid gender options
        required: true, // If gender is required
    },
    dateOfBirth: {
        type: Date,
        required: true, // If dateOfBirth is required
    },
    about: {
        type: String,
        trim: true,
        maxlength: 500, // Optional: Limit the length of the 'about' field
    },
    contactNumber: {
        type: String,
        trim: true,
        match: [/^\+?[1-9]\d{1,14}$/, 'Please enter a valid phone number'], // Simple regex for international phone numbers
    }
}, {
    timestamps: true, // Automatically add createdAt and updatedAt fields
});

module.exports = mongoose.model("Profile", profileSchema);
