import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Module,
  Res,
  HttpStatus,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { MongoClient } from "mongodb";
import { diskStorage } from "multer";

@Controller("photos")
export class PhotosController {
  @Post("upload")
  @UseInterceptors(
    FileInterceptor("photo", {
      dest: "/uploads",
      storage: diskStorage({
        destination: "./uploads/",
        filename: function(req, file, cb) {
          file.filename;
          cb(null, (file.filename = file.originalname));
        },
      }),
    })
  )
  uploadSingle(@Res() res, @UploadedFile() file: Express.Multer.File) {
    console.log(file);
    if (!file) {
      return res
        .status(HttpStatus.OK)
        .json({ OK: false, message: "no file selected" });
    }
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient.connect(uri, function(err, db) {
      if (err) throw err;
      const dbo = db.db("cms");
      dbo.collection("photos").insertOne(file, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
      });
      return res
        .status(HttpStatus.OK)
        .json({ OK: true, filename: file.filename });
    });

    // var fs = require("fs");
    // fs.rename(
    //   "/uploads/" + file.filename,
    //   "/uploads/" + file.originalname,
    //   function(err) {
    //     if (err) throw err;
    //     console.log("file renamed");
    //   }
    // );

    // console.log(file);
    // console.log(file.originalname);
  }
}
