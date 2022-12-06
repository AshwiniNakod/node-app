import express from "express";
import { auth } from "../middleware/auth.js";
import { getAllMovies, createMovies, getMovieByID, deleteMovieById, updateMovieById } from "./dbQuery.js";

const router =express.Router();

router.get('/',auth, async(req, res) => {
      //db.movies.find({})
      console.log(req.query);
        if(req.query.rating){
          req.query.rating = +req.query.rating;
        }
  
      const movies = await getAllMovies(req)
      // console.log("Movies:"+movies)
        res.send(movies)
})
    
  
router.post('/',async(req, res) => {
      const data=req.body
      // console.log(data)
  
      //db.movies.insertMany(data)
      //db.movies.insertOne(data)   for one movie

      const result = await createMovies(data)
      res.send(result)
})
  
  
router.get('/:id',auth,async(req, res) => {
      const {id} = req.params;
      // console.log(req.params)
  
      // const movie=movies.find(mv => mv.id===id)
  
      const movie = await getMovieByID(id)
      // console.log(movie)
  
      movie ?  res.send(movie) : res.status(404).send({'msg':'movie not found'})
      
})
  
  
router.delete('/:id',auth,async(req, res) => {
      const {id} = req.params;
      // console.log(req.params)
  
      // const movie=db.movies.deleleOne({id:100})
  
      const result = await deleteMovieById(id)
      // console.log(result)
  
      result.deletedCount > 0 ? 
      res.send({'msg':'movie deleted successfully.'}) : 
      res.status(404).send({'msg':'movie not found'})
      
})
  
  
    router.put('/:id',async(req, res) => {
      const{id} = req.params
      // console.log(req.params)
      const data=req.body
      // console.log(data)
  
      //db.movies.insertMany(data)
      const result = await updateMovieById(id, data);
      res.send(result)
    })
  
export const moviesRouter = router


