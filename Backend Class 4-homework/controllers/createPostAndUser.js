import BLOG from "../models/Blog.js";
import USER from "../models/User.js";



export const createPost = async (req, res) => {
    try {
        const { title, category, content, authorEmail, comments = [] } = req.body;

        // Validate required fields
        if (!title || !category || !content || !authorEmail) {
            return res.status(400).json({
                success: false,
                message: "Please provide all required fields: title, category, content, and authorEmail.",
            });
        }

        if (title.length > 50 || category.length > 20 || content.length > 500) {
            return res.status(400).json({
                success: false,
                message: "One or more fields exceed maximum allowed length.",
            });
        }

        if (!Array.isArray(comments)) {
            return res.status(400).json({
                success: false,
                message: "Comments should be an array.",
            });
        }

        // Validate authorEmail format
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(authorEmail)) {
            return res.status(400).json({
                success: false,
                message: "Invalid email format.",
            });
        }

        // Find the author
        const author = await USER.findOne({ email: authorEmail });
        if (!author) {
            return res.status(404).json({
                success: false,
                message: "Author not found. Please create a user first.",
            });
        }

        // Create blog post
        const response = await BLOG.create({
            title,
            category,
            content,
            author: author._id,
            comments,
        });

        res.status(201).json({
            success: true,
            data: response,
            message: "The blog has been posted.",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error.",
            error: error.message,
        });
    }
};

export const createUser = async (req, res) => {
    try {
        const { name, email } = req.body;

        // Validate email format
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            return res.status(400).json({
                success: false,
                message: "Invalid email format.",
            });
        }

        // Check if the user already exists
        const existingUser = await USER.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "A user with this email already exists.",
            });
        }

        // Create new user
        const response = await USER.create({ name, email });
        res.status(201).json({
            success: true,
            data: response,
            message: "The author details have been created.",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error.",
            error: error.message,
        });
    }
};
