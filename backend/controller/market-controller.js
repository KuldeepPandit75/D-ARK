import Item from "../models/item.js"
import User from "../models/user.js";


export const buyItems=async(req,res)=>{
    try {
        const{username,item}=req.body;

        const buyProd=await Item.findOne({name:item});

        await User.findOneAndUpdate()
        
    } catch (error) {
        return res.status(500).json({msg:"error buying items"})
    }
}

export const addStock=(req,res)=>{
    try {
        const{username, item}=req.body;

    } catch (error) {
        return res.status(500).json({msg:"error buying items"})
    }
}

export const getStock=(req,res)=>{
    try {
        const{username, item}=req.body;

    } catch (error) {
        return res.status(500).json({msg:"error buying items"})
    }
}