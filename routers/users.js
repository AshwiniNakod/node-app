import express from "express";
import bcrypt from 'bcrypt'
import {createUsers, getUserByName } from "./dbQuery.js";
import  jwt  from "jsonwebtoken";

const router =express.Router();

async function genHashedPassword(password){
    const  no_of_rounds =10;
    const salt = await bcrypt.genSalt(no_of_rounds)
    const hashedPassword = await bcrypt.hash(password,salt)
    return hashedPassword;
}    


  
router.post('/signup',async(req, res) => {
      const {username,password}=req.body

      const userFromDb =await getUserByName(username)
      console.log(userFromDb)

      if(userFromDb){
        res.status(400).send({message:"user already exists"})
      }
      else if(password.length < 8){
        res.status(400).send({message:"password must be atleast 8 character"})

      }
      else{      
      const hashedPassword = await genHashedPassword(password)
      console.log(hashedPassword)
  
      //db.movies.insertMany(data)
      //db.movies.insertOne(data)   for one movie

      const result = await createUsers({
        username: username,
        password: hashedPassword,
      })
      res.send(result)
    }
})
  
router.post('/login',async(req, res) => {
  const {username,password,_id}=req.body

  const userFromDb =await getUserByName(username)
  console.log(userFromDb)

  if(!userFromDb){
    res.status(401).send({message:"Invalid credentials"})
  }
  else{
    const storedPassword =userFromDb.password;
    const isPasswordMatch = await bcrypt.compare(password,storedPassword);
    console.log(isPasswordMatch);
    if(isPasswordMatch){
      const token = jwt.sign({ id:userFromDb._id},process.env.SECRET_KEY)
      res.send({message:"successful login",token:token})
    }else{
      res.status(401).send({message:"Invalid credentials"})
    }
  }
  
});
export const usersRouter = router


