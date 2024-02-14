import categoryModel from "../modals/category.model.js";


export const AddCategory = async(req,res)=>{
    try {
        const{category_name,description} = req.body;
        

        const image = req.file.path;



        const addData = new categoryModel({
            category_name,description,image
        })
        await addData.save();

        

        res.status(201).json(addData)
    } catch (error) {
        return res.status(500).json({success:false,message:error})
    }
}

export const GetAllCat = async(req,res)=>{
    try {
        const category = await categoryModel.find({});
        if(category.length){
            return res.status(200).json({message:"categories found..",category:category,success:true})
        }
        return res.status(404).json({success:false,message:"categories not found"})
    } catch (error) {
        return res.status(500).json({success:false,message:error})
    }
}

export const DeleteCategory = async(req,res)=>{
    try {
        const {ids} = req.body;
        await categoryModel.deleteMany({_id:{$in:ids}})
        

       

        return res.status(200).json({success:true,message:"category deleted successfully"})
    } catch (error) {
        return res.status(500).json({success:false,message:error})
    }
}