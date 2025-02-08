import mongoose from "mongoose";
import nodemailer from 'nodemailer'


const fileSchema=new mongoose.Schema(
    {
        name:
        {
            type:String,
            required:true
        },

        imageUrl:
        {
            type:String
        },
        tags:
        {
            type:String
        },
        email:
        {
            type:String
        }
    }
);



//we are creating the post middleware....
fileSchema.post("save",async function (docs) {
    try
    {
    //   console.log("DOC",docs);



      /*
      DOC {
  name: 'Sajal',
  imageUrl: 'https://res.cloudinary.com/dysru4q7n/image/upload/v1738738983/CodeHelp/wp6267104-venom-8k-wallpapers.jpg.jpg',
  tags: 'material',
  email: 'sajal))@gmail.com',
  _id: new ObjectId('67a6ec812edc1131de0e4ced'),
  __v: 0
}
      */


    //jo bhi entry database main create hui hai uski ko doc bol rhe hai...

    //we will create transporter..
    let transporter=nodemailer.createTransport(
        {
            host:process.env.MAIL_HOST,
            auth:
            {
               user:process.env.MAIL_USER,
               pass:process.env.MAIL_PASS
            }
        }
    );



    //send mail
    let info=await transporter.sendMail({
        from:`prajapatisajal00@gmail.com`,
        to:`prajapatisajal101@gmail.com`,
        subject:"New File Uploaded on Cloudinary",
        html:``
    })


   console.log(info);

    }

    catch(error)
    {
      console.error(error);
    
    }
    
})
const File=mongoose.model("File",fileSchema);
export default File;