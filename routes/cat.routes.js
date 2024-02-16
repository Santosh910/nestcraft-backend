import { Router } from "express";
import { AddCategory, DeleteCategory, GetAllCat, SearchCat } from "../controllers/category.controller.js";
import { upload } from "../middlewares/multer.middleware.js";



const router = Router();

router.post("/add-cat",upload.single('image'),AddCategory)
router.get("/get-all",GetAllCat)

router.delete("/delete-item",DeleteCategory)
router.get('/search',SearchCat)

router.post('/upload',upload.single('image'),(req,res)=>{
    if(!req.file){
        return res.status(400).send('No files were uploaded.');
    }

    const data = {
        category: req.body.category,
        description: req.body.description,
        imageUrl: req.file.path
      };

      res.json(data);
})

export default router