import Todo from "../models/Todo.js";
import mongoose from "mongoose";

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid ID",
      });
    }

    // Attempt to delete the todo
    const answer = await Todo.findByIdAndDelete(id);

    if (!answer) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    // Success response
    res.status(200).json({
      success: true,
      message: "Todo Deleted",
    });
  } catch (error) {
    console.error("Error deleting todo:", error.message);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
