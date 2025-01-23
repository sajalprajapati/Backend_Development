import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: 
    {
        type: String,
        required: [true, "Name is required."],
        maxLength: [50, "Name cannot exceed 50 characters."],
        trim: true,
        unique: true, // Ensure names are unique
    },


    email: 
    {
        type: String,
        required: [true, "Email is required."],
        lowercase: true,
        unique: true, // Ensure emails are unique
        validate: 
        {
            validator: function (value) 
            {
                // Regular expression for validating email format
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: "Please enter a valid email address.",
        },
    },
});


const USER=mongoose.model("user",userSchema);
export default USER;