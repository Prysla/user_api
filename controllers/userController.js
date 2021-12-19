const res = require('express/lib/response');
const userModel = require('../models/userModel');

async function addUser(req,res){
    try {
       const newuser = await userModel.create(req.body);
       res.status(200).json(newuser);
    } catch(e){
        console.log("Something went wrong",res.status(403));
    }
}
async function getAllUser(req,res){
   try{
       const fetchAll = await userModel.find();
       res.status(200).json(fetchAll);
   } catch(e){
       console.log("Something went wrong",res.status(400));
       ;
   }
}

async function getUserbyId(req,res){
    try{
        const fetchuser = await userModel.findById(req.params.userId);
        res.status(200).json(fetchuser);
    }catch(e){
        console.log(e.message);
        res.status(400);
        
    }
}

async function updateById(req,res){
   try{
    const update = await userModel.findByIdAndUpdate(req.params.userId,req.body);
    res.status(200).json(update);
   } catch(e){
       console.log("Invalid Request".e.message);
       res.status(400);
   }
}
async function deleteById(req,res){
    try{
    await userModel.findByIdAndDelete(req.params.userId);
    res.status(200).json({message:"user deleted"});

    }catch(e){
        console.log(e.message);
        res.status(401).json();
    }

}

module.exports ={
    addUser,
    getAllUser,
    updateById,
    deleteById,
    getUserbyId,
}