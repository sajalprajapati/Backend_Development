import File from "../models/File.js";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { v2 as cloudinary } from 'cloudinary';


//if we use require method then i don't need to do above import....
const __dirname = dirname(fileURLToPath(import.meta.url));

// Local File Upload Handler Function
export const localFileUpload = async (req, res) => {
    try {
        // Step 1: Fetching the file from request.
        const file = req.files.file;
        console.log("File received:", file);
        // console.log(file);




        // Step 2:  Define storage path
        let path = `${__dirname}/files/${Date.now()}.${file.name.split('.').pop()}`;
        // console.log("File will be saved at:", path);

        //Step 3:  Move file to the specified location
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







function isFileTypeSupported(type,supportedTypes)
{
    return supportedTypes.includes(type);
}




async function uploadFiletoCloudinary(file,folder,filename)
{
    /*
    Cloudinary By default, don't know which folder to use to upload the photo to hands when we passed the name of our folder with named as cold hell
    It would not directly upload the photo into that folder rather, we have to tell within an creation of an variable Options.
    */
    // const options={folder}
    return await cloudinary.uploader.upload(file.tempFilePath,{folder,public_id:filename,
        unique_filename:false
    });
}

//image upload ka handler....
export const imageUpload=async(req,res)=>
{
    try
    {
     //Ste p1 : 
     const {name,tags,email}=req.body;
     console.log(name,tags,email);


     const file=req.files.imageFile;
     console.log(file);


     //Step p2: Validation:
     supportedTypes = ["jpg", "jpeg", "png", "gif", "bmp", "tiff", "webp", "heif", "heic", "svg", "eps", "ai", "raw", "psd", "ico"];

     const fileType=`${file.name.split('.').pop().toLowerCase()}` //<----this will provide me the filetype...
     const fileName=`${file.name}`;
     console.log(fileType);



      
     if(!isFileTypeSupported(fileType,supportedTypes))
     {
        return res.status(401).json({
            message:"File Type Not Supported",
            success:false
        })
     }


     //Step #: File format supported hai....
    //  console.log("Uploading to codehelp cloudinary ...")
     const response=await uploadFiletoCloudinary(file,"CodeHelp",fileName);
    //  console.log(response);



     //Step $: Database creation....
     const fileData=await File.create({
        name,tags,email,imageUrl:response.secure_url
     })


    res.status(201).json({
        success:true,
        imageUrl:response.secure_url,
        message:"Image Successfully Uploaded"
    })


    }

    catch(error)
    {
        res.status(401).json({
            success:false,
            message:"Image  UnSuccessfully ",
            error:error.message
        })
    }
}