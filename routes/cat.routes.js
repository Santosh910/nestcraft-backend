import { Router } from "express";
import { AddCategory, DeleteCategory, GetAllCat, SearchCat } from "../controllers/category.controller.js";
import { upload } from "../middlewares/multer.middleware.js";



const router = Router();

router.post("/add-cat",upload.single('image'),AddCategory)
router.get("/get-all",GetAllCat)

router.delete("/delete-item",DeleteCategory)
router.get('/search',SearchCat)

export default router