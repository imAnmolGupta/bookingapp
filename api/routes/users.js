import express  from "express";
import { updateUser,deleteUser,getUser,getUsers } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router=express.Router();

// router.get("/checkAuthentication",verifyToken,(req,res,next)=>{
//     res.send("Hello user,you are logged in!")
// });

// router.get("/checkUser/:id", verifyUser,(req,res,next)=>{
//     res.send("Hello user,you are logged in and can delete your account!")
// });

// router.get("/checkadmin/:id", verifyAdmin,(req,res,next)=>{
//     res.send("Hello Admin,you are logged in and can delete all accounts!")
// });

//update
router.put("/:id",verifyUser ,updateUser);

//delete
router.delete("/:id",verifyUser,deleteUser); 

//get
router.get("/:id",verifyUser, getUser);

//getall
router.get("/",verifyAdmin, getUsers); 

export default router; 