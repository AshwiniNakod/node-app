import { ObjectId } from "mongodb";
import { client } from "../index.js";

export async function updateMovieById(id, data) {
    return await client.db("ashwini").collection("movies").updateOne({ _id: ObjectId(id) }, { $set: data });
}
export async function deleteMovieById(id) {
    return await client.db("ashwini").collection("movies").deleteOne({ _id: ObjectId(id) });
}
export async function getMovieByID(id) {
    return await client.db("ashwini").collection("movies").findOne({ _id:ObjectId(id) });
}
export async function createMovies(data) {
    return await client.db("ashwini").collection("movies").insertOne(data);
}
export async function getAllMovies(req) {
    return await client.db("ashwini").collection("movies").find(req.query).toArray();
}
