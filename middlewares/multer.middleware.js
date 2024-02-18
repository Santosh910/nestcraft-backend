import multer from "multer";
import path from 'path';

import express from 'express'



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,"./public")
    },
    filename: function (req, file, cb) {
      
      const filename = `image-${Date.now()}.${file.originalname}`
      cb(null,filename)
      
    }
  })

  //filter

  const filefilter = (req,file,cb)=>{
    if(file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg"){
      cb(null,true)
    }else{
      cd(null,false)
      return cb(new Error("only .png .jpg & .jpeg formatted allowed"))
    }
  }
  
  export const upload = multer({ storage: storage,
  limits:{
    fileSize : 500 * 1024
  },fileFilter:filefilter })