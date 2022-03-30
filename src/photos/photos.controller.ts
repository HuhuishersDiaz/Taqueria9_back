import { Controller, Post, UseInterceptors, UploadedFile,Module } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { MongoClient } from 'mongodb';


@Controller('photos')
export class PhotosController {

    @Post("upload")
    @UseInterceptors(
        FileInterceptor("photo",{
            dest: "/var/www/html/taqueria9/uploads",
            fileFilter: function(req, file, cb){
                file.filename = file.originalname;
                cb(null,true);
            },
        })
    )
    uploadSingle(@UploadedFile() file) {
           const uri = "mongodb://localhost:27017";
        const client = new MongoClient.connect(uri, function(err, db){
            if (err) throw err;
            const dbo = db.db("cms");
            dbo.collection("photos").insertOne(file, function(err, res) {
               if (err) throw err;
               console.log("1 document inserted");
             //  db.close();
            });
        });
        
        var fs = require('fs');
fs.rename('/var/www/html/taqueria9/uploads/'+ file.filename, '/var/www/html/taqueria9/uploads/'+file.originalname , function(err) {
    if (err) throw err;
    console.log("file renamed");
}); 

        console.log(file);
        console.log(file.originalname);
    }
  
}
