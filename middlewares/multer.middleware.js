import multer from "multer";
import path from 'path';
import express from 'express'



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,express.static("./public/temp"))
    },
    filename: function (req, file, cb) {
      
      cb(null,file.originalname);
      
    }
  })
  
  export const upload = multer({ storage: storage,
  limits:{
    fileSize : 500 * 1024
  } })