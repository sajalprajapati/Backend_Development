import File from "../models/File.js";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Local File Upload Handler Function
export const localFileUpload = async (req, res) => {
    try {
        // Fetching the file
        const file = req.files.file;
        console.log("File received:", file);

        // Define storage path
        let path = `${__dirname}/files/${Date.now()}.${file.name.split('.').pop()}`;
        console.log("File will be saved at:", path);

        // Move file to the specified location
        await file.mv(path);

        res.json({
            success: true,
            message: "Local File Uploaded Successfully"
        });

    } catch (error) {
        console.log("Error while uploading:", error);

        res.status(500).json({
            success: false,
            message: "Local File Upload Unsuccessful",
            error: error.message
        });
    }
};
