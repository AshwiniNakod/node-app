import { client } from "../index.js";

export async function updateMovieById(id, data) {
    return await client.db("ashwini").collection("movies").updateOne({ id: id }, { $set: data });
}
export async function deleteMovieById(id) {
    return await client.db("ashwini").collection("movies").deleteOne({ id: id });
}
export async function getMovieByID(id) {
    return await client.db("ashwini").collection("movies").findOne({ id: id });
}
export async function createMovies(data) {
    return await client.db("ashwini").collection("movies").insertMany(data);
}
export async function getAllMovies(req) {
    return await client.db("ashwini").collection("movies").find(req.query).toArray();
}
