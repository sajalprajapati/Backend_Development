// import File from "../models/File.js";
// import { dirname } from 'path';
// import { fileURLToPath } from 'url';
// import { v2 as cloudinary } from 'cloudinary';


// //if we use require method then i don't need to do above import....
// const __dirname = dirname(fileURLToPath(import.meta.url));

// // Local File Upload Handler Function
// export const localFileUpload = async (req, res) => {
//     try {
//         // Step 1: Fetching the file from request.
//         const file = req.files.file;
//         console.log("File received:", file);
//         // console.log(file);




//         // Step 2:  Define storage path
//         let path = `${__dirname}/files/${Date.now()}.${file.name.split('.').pop()}`;
//         // console.log("File will be saved at:", path);

//         //Step 3:  Move file to the specified location
//         await file.mv(path);



//         res.json({
//             success: true,
//             message: "Local File Uploaded Successfully"
//         });



//     } catch (error) {
//         console.log("Error while uploading:", error);

//         res.status(500).json({
//             success: false,
//             message: "Local File Upload Unsuccessful",
//             error: error.message
//         });
//     }
// };







// function isFileTypeSupported(type,supportedTypes)
// {
//     return supportedTypes.includes(type);
// }




// async function uploadFiletoCloudinary(file,folder,filename)
// {
//     /*
//     Cloudinary By default, don't know which folder to use to upload the photo to hands when we passed the name of our folder with named as cold hell
//     It would not directly upload the photo into that folder rather, we have to tell within an creation of an variable Options.
//     */
//     // const options={folder}
//     const options={folder};
//     options.resource_type="auto";

//     return await cloudinary.uploader.upload(file.tempFilePath,{folder,public_id:filename,
//         unique_filename:false
//     });
// }




// //image upload ka handler....
// export const imageUpload=async(req,res)=>
// {
//     try
//     {
//      //Ste p1 : 
//      const {name,tags,email}=req.body;
//      console.log(name,tags,email);


//      const file=req.files.imageFile;
//      console.log(file);


//      //Step p2: Validation:
//      supportedTypes = ["jpg", "jpeg", "png", "gif", "bmp", "tiff", "webp", "heif", "heic", "svg", "eps", "ai", "raw", "psd", "ico"];

//      const fileType=`${file.name.split('.').pop().toLowerCase()}` //<----this will provide me the filetype...
//      const fileName=`${file.name}`;
//      console.log(fileType);



      
//      if(!isFileTypeSupported(fileType,supportedTypes))
//      {
//         return res.status(401).json({
//             message:"File Type Not Supported",
//             success:false
//         })
//      }


//      //Step #: File format supported hai....
//     //  console.log("Uploading to codehelp cloudinary ...")
//      const response=await uploadFiletoCloudinary(file,"CodeHelp",fileName);
//     //  console.log(response);



//      //Step $: Database creation....
//      const fileData=await File.create({
//         name,tags,email,imageUrl:response.secure_url
//      })


//     res.status(201).json({
//         success:true,
//         imageUrl:response.secure_url,
//         message:"Image Successfully Uploaded"
//     })


//     }

//     catch(error)
//     {
//         res.status(401).json({
//             success:false,
//             message:"Image  UnSuccessfully ",
//             error:error.message
//         })
//     }
// }












// const MAX_FILE_SIZE=5*1024*1024;

// //video upload ka handler....
// export const videoUpload=async(req,res)=>
// {
//     try
//     {
//        //Ste p1 : 
//      const {name,tags,email}=req.body;
//     //  console.log(name,tags,email);

//      const file=req.files.videoFile;
//      console.log(file);


//      if(file.size>MAX_FILE_SIZE)
//      {
//         return res.status(400).json({
//             message: "File size exceeds the 5MB limit",
//             success: false
//         });
//      }

//      supportedTypes = ["mp4","mov"];

//      const fileType=`${file.name.split('.').pop().toLowerCase()}` //<----this will provide me the filetype...
//      const fileName=`${file.name}`;
//      console.log(fileType);



//      if(!isFileTypeSupported(fileType,supportedTypes))
//         {
//            return res.status(401).json({
//                message:"File Type Not Supported",
//                success:false
//            })
//         }
   

//         // console.log("Uploading to codehelp cloudinary ...")
//         const response=await uploadFiletoCloudinary(file,"CodeHelp",fileName);
//         console.log(response);
   
   
   
//         //Step $: Database creation....
//         const fileData=await File.create({
//            name,tags,email,imageUrl:response.secure_url
//         })
   
   
//        res.status(201).json({
//            success:true,
//            imageUrl:response.secure_url,
//            message:"Video Successfully Uploaded"
//        })
   
     
//     }

//     catch(error)
//     {
//         res.status(400).json({
//             success:false,
//             message:"Video UnSuccessfully ",
//             error:error.message
//         })
//     }
// }




// const MAX_IMAGE_SIZE=7*1024*1024;



// export const imageSizeReducer=async(req,res)=>
// {
//     try
//     {
//      //Ste p1 : 
//      const {name,tags,email}=req.body;
//      console.log(name,tags,email);


//      const file=req.files.imageFile;
//      console.log(file);


//      if(file.size>MAX_IMAGE_SIZE)
//      {
//         return res.status(400).json({
//             message: "File size exceeds the 5MB limit",
//             success: false
//         });
//      }

//      //Step p2: Validation:
//      supportedTypes = ["jpg", "jpeg", "png", "gif", "bmp", "tiff", "webp", "heif", "heic", "svg", "eps", "ai", "raw", "psd", "ico"];

//      const fileType=`${file.name.split('.').pop().toLowerCase()}` //<----this will provide me the filetype...
//      const fileName=`${file.name}`;
//      console.log(fileType);



      
//      if(!isFileTypeSupported(fileType,supportedTypes))
//      {
//         return res.status(401).json({
//             message:"File Type Not Supported",
//             success:false
//         })
//      }


//      //Step #: File format supported hai....
//     //  console.log("Uploading to codehelp cloudinary ...")

//     //compress karke upload karna hai..


//     //change the quality or height and width of image..
//      const response=await uploadFiletoCloudinary(file,"CodeHelp",fileName);
//     //  console.log(response);



//      //Step $: Database creation....
//      const fileData=await File.create({
//         name,tags,email,imageUrl:response.secure_url
//      })


//     res.status(201).json({
//         success:true,
//         imageUrl:response.secure_url,
//         message:"Image Successfully Uploaded"
//     })


//     }

//     catch(error)
//     {
//         res.status(401).json({
//             success:false,
//             message:"Image  UnSuccessfully ",
//             error:error.message
//         })
//     }
// }







import File from "../models/File.js";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { v2 as cloudinary } from 'cloudinary';

// Define __dirname for ES Module compatibility
const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Local File Upload Handler
 * - Receives a file from request
 * - Saves it to the local filesystem
 * - Responds with success or failure message
 */
export const localFileUpload = async (req, res) => {
    try {
        // Step 1: Fetching the file from request
        const file = req.files.file;
        console.log("File received:", file);

        // Step 2: Define storage path
        let path = `${__dirname}/files/${Date.now()}.${file.name.split('.').pop()}`;

        // Step 3: Move file to the specified location
        await file.mv(path);

        res.json({
            success: true,
            message: "Local File Uploaded Successfully"
        });

    } catch (error) {
        console.error("Error while uploading:", error);
        res.status(500).json({
            success: false,
            message: "Local File Upload Unsuccessful",
            error: error.message
        });
    }
};

/**
 * Checks if a file type is supported
 * @param {string} type - The file type (extension)
 * @param {Array} supportedTypes - Array of supported file types
 * @returns {boolean} - Whether the file type is supported
 */
function isFileTypeSupported(type, supportedTypes) {
    return supportedTypes.includes(type);
}

/**
 * Uploads a file to Cloudinary
 * @param {Object} file - The file object
 * @param {string} folder - The target folder on Cloudinary
 * @param {string} filename - The filename for storage
 * @returns {Promise<Object>} - Cloudinary response object
 */
async function uploadFiletoCloudinary(file, folder, filename) {
    const options = { folder, resource_type: "auto" };

    return await cloudinary.uploader.upload(file.tempFilePath, {
        folder,
        public_id: filename,
        unique_filename: false
    });
}

/**
 * Image Upload Handler
 * - Validates image type
 * - Uploads image to Cloudinary
 * - Saves metadata in the database
 */
export const imageUpload = async (req, res) => {
    try {
        const { name, tags, email } = req.body;
        console.log(name, tags, email);

        const file = req.files.imageFile;
        console.log(file);

        const supportedTypes = ["jpg", "jpeg", "png", "gif", "bmp", "tiff", "webp", "heif", "heic", "svg", "eps", "ai", "raw", "psd", "ico"];
        const fileType = file.name.split('.').pop().toLowerCase();
        const fileName = file.name;

        if (!isFileTypeSupported(fileType, supportedTypes)) {
            return res.status(401).json({
                message: "File Type Not Supported",
                success: false
            });
        }

        const response = await uploadFiletoCloudinary(file, "CodeHelp", fileName);

        // Save file details in the database
        const fileData = await File.create({ name, tags, email, imageUrl: response.secure_url });

        res.status(201).json({
            success: true,
            imageUrl: response.secure_url,
            message: "Image Successfully Uploaded"
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Image Upload Unsuccessful",
            error: error.message
        });
    }
};

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB limit

/**
 * Video Upload Handler
 * - Validates video file type and size
 * - Uploads video to Cloudinary
 * - Saves metadata in the database
 */
export const videoUpload = async (req, res) => {
    try {
        const { name, tags, email } = req.body;
        const file = req.files.videoFile;

        if (file.size > MAX_FILE_SIZE) {
            return res.status(400).json({
                message: "File size exceeds the 5MB limit",
                success: false
            });
        }

        const supportedTypes = ["mp4", "mov"];
        const fileType = file.name.split('.').pop().toLowerCase();
        const fileName = file.name;

        if (!isFileTypeSupported(fileType, supportedTypes)) {
            return res.status(401).json({
                message: "File Type Not Supported",
                success: false
            });
        }

        const response = await uploadFiletoCloudinary(file, "CodeHelp", fileName);

        // Save file details in the database
        const fileData = await File.create({ name, tags, email, imageUrl: response.secure_url });

        res.status(201).json({
            success: true,
            imageUrl: response.secure_url,
            message: "Video Successfully Uploaded"
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Video Upload Unsuccessful",
            error: error.message
        });
    }
};

const MAX_IMAGE_SIZE = 7 * 1024 * 1024; // 7MB limit

/**
 * Image Compression & Upload Handler
 * - Validates image size and type
 * - (TODO) Compresses image before upload
 * - Uploads image to Cloudinary
 * - Saves metadata in the database
 */
export const imageSizeReducer = async (req, res) => {
    try {
        const { name, tags, email } = req.body;
        const file = req.files.imageFile;

        if (file.size > MAX_IMAGE_SIZE) {
            return res.status(400).json({
                message: "File size exceeds the 7MB limit",
                success: false
            });
        }

        const supportedTypes = ["jpg", "jpeg", "png", "gif", "bmp", "tiff", "webp", "heif", "heic", "svg", "eps", "ai", "raw", "psd", "ico"];
        const fileType = file.name.split('.').pop().toLowerCase();
        const fileName = file.name;

        if (!isFileTypeSupported(fileType, supportedTypes)) {
            return res.status(401).json({
                message: "File Type Not Supported",
                success: false
            });
        }

        // TODO: Implement compression logic before uploading
        const response = await uploadFiletoCloudinary(file, "CodeHelp", fileName);

        // Save file details in the database
        const fileData = await File.create({ name, tags, email, imageUrl: response.secure_url });

        res.status(201).json({
            success: true,
            imageUrl: response.secure_url,
            message: "Image Successfully Uploaded"
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Image Upload Unsuccessful",
            error: error.message
        });
    }
};





