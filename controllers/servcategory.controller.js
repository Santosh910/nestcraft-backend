import servCatModel from "../modals/servCat.model.js";

export const ViewserCat = async(req,res)=>{
    try {
        const {services,category,price,duration,gender} = req.body.serCat;
        
        const serCategory = new servCatModel({
            services,category,price,duration,gender
        })
        await serCategory.save()

        return res.status(201).json({success:true,message:"service category added successfully..."})
    } catch (error) {
        return res.status(500).json({success:false,message:error})
    }
}

export const GetServCat = async(req,res)=>{
    try {
        const serCategory = await servCatModel.find({});
          
        if(serCategory.length){
            return res.status(200).json({message:"categories found..",serCategory:serCategory,success:true})
        }

        return res.status(404).json({success:false,message:"categories not found"})
    } catch (error) {
        return res.status(500).json({success:false,message:error})
    }
}

export const UpdateCategory = async (req,res)=>{
    try{
        const {services,category,price,duration,gender,_id} = req.body.categoryData;
        
        await servCatModel.findByIdAndUpdate(_id,{services,category,price,duration,gender})

        return res.status(200).json({success:true,message:"category updated successfully.."})
    }catch(error){
        return res.status(500).json({success:false,message:error})
    }
}

export const DeleteCat = async (req,res)=>{
   try {
        const {_id} = req.query;
        if(!_id)return res.status(401).json({message:"id not found",success:false})

        await servCatModel.findByIdAndDelete(_id)

        return res.status(200).json({success:true,message:"category deleted successfully"})
   } catch (error) {
    return res.status(500).json({success:false,message:error})
   }
}