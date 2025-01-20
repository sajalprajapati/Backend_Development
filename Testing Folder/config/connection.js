import mongoose from "mongoose";

export const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed. Please check the connection details.");
        console.error("Error details:", error.message);
        process.exit(1); // Exit the application on failure
    }
};
