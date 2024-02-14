import { Router } from "express";
import catRoutes from './cat.routes.js'
import serCatRoutes from './serCat.routes.js'

const router = Router();

router.use("/categories",catRoutes)
router.use("/sercategory",serCatRoutes)

export default router