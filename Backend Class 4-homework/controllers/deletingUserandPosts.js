import USER from "../models/User.js";
import BLOG from "../models/Blog.js";

// Delete all posts
export const deleteAllthePosts = async (req, res) => {
  try {
    const response = await BLOG.deleteMany({}); // Deletes all posts

    res.status(200).json({
      success: true,
      data: response,
      message: "All posts deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: "An error occurred while deleting all posts.",
    });
  }
};

// Delete a single post
export const deleteAsinglePosts = async (req, res) => {
  try {
    const { id } = req.params; // Extract the ID from route parameters

    const deletePost = await BLOG.findByIdAndDelete(id);

    if (!deletePost) {
      return res.status(404).json({
        success: false,
        message: "Post not found. Unable to delete.",
      });
    }

    res.status(200).json({
      success: true,
      data: deletePost,
      message: "Post deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: "An error occurred while deleting the post.",
    });
  }
};

// Delete all users
export const deleteAlltheUsers = async (req, res) => {
  try {
    const response = await USER.deleteMany({}); // Deletes all users

    res.status(200).json({
      success: true,
      data: response,
      message: "All users deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: "An error occurred while deleting all users.",
    });
  }
};

// Delete a single user
export const deleteAsingleUser = async (req, res) => {
  try {
    const { id } = req.params; // Extract the ID from route parameters

    const deleteUser = await USER.findByIdAndDelete(id);

    if (!deleteUser) {
      return res.status(404).json({
        success: false,
        message: "User not found. Unable to delete.",
      });
    }

    res.status(200).json({
      success: true,
      data: deleteUser,
      message: "User deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: "An error occurred while deleting the user.",
    });
  }
};
