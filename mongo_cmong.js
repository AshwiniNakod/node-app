// show dbs

// use db

// show collection

db.movies.insertMany([
    {
      "id": "100",
      "poster": "https://www.filmibeat.com/ph-big/2021/06/rrr_16249644106.jpg",
      "name": "RRR ",
      "rating": 7.3,
      "summary": "A tale of two legendary revolutionaries and their journey far away from home. After their journey they return home to start fighting back against British colonialists in the 1920s.",
      "trailer": "https://www.youtube.com/embed/NgBoMJy386M"
    },
    {
      "id": "101",
      "poster": "https://assets.gadgets360cdn.com/pricee/assets/product/202202/Prithviraj_Movie-_Poster_1644608993.jpg",
      "name": "Samrat Prithviraj",
      "rating": 8.8,
      "summary": "The heroism of the fearless King Prithviraj Chauhan as he faces off against Muhammad of Ghor.",
      "trailer": "https://www.youtube.com/embed/33-CQdPHyjw"
    },
    {
      "id": "103",
      "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN9nPaLnJ5w4jtPUfG7lGy9GHyCrunJn20R_1_537kvrKbU5v1zzJbpeHxBdkOG74DLaY&usqp=CAU",
      "name": "Attack",
      "rating": 9.0,
      "summary": "A cyber soldier who has lost everything puts his life on the line to serve his nation, willing to make the ultimate sacrifice.",
      "trailer": "https://www.youtube.com/embed/Ma3Y-qekYos"
    },
    {
      "id": "104",
      "poster": "https://sm.ign.com/ign_in/photo/default/brahmastra-button-1651104268947_g7zt.jpg",
      "name": "BRAHMASTRA",
      "rating": 7,
      "summary": "A young man on the brink of falling in love gets his world turned upside down when he discovers he has the power to control fire and a connection to a secret society of guardians.",
      "trailer": "https://www.youtube.com/embed/g7dTjZuwlAM"
    },
    {
      "id": "105",
      "poster": "https://themarketactivity.com/wp-content/uploads/2020/08/thor4-990x1467.jpg",
      "name": "Thor: Love and Thunder",
      "rating": 8,
      "summary": "Thor: Love and Thunder is a 2022 American superhero film based on Marvel Comics featuring the character Thor, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures. It is the sequel to Thor: Ragnarok and the 29th film in the Marvel Cinematic Universe. The film is directed by Taika Waititi, who co-wrote the script with Jennifer Kaytin Robinson, and stars Chris Hemsworth as Thor alongside Christian Bale, Tessa Thompson, Jaimie Alexander, Waititi, Russell Crowe, and Natalie Portman. In the film, Thor attempts to find inner peace, but must return to action and recruit Valkyrie, Korg, and Jane Foster —who is now the Mighty Thor—to stop Gorr the God Butcher from eliminating all gods.",
      "trailer": "https://www.youtube.com/embed/8p9IVwLBnpo"
    },
    {
      "id": "106",
      "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN9nPaLnJ5w4jtPUfG7lGy9GHyCrunJn20R_1_537kvrKbU5v1zzJbpeHxBdkOG74DLaY&usqp=CAU",
      "name": "Attack 2",
      "rating": 9.0,
      "summary": "A cyber soldier who has lost everything puts his life on the line to serve his nation, willing to make the ultimate sacrifice.",
      "trailer": "https://www.youtube.com/embed/Ma3Y-qekYos"
    },
    {
      "id": "107",
      "poster": "https://imgk.timesnownews.com/media/ram_setu.png",
      "name": "Ram Setu",
      "rating": 3,
      "summary": "It is the story of an archaeologist, who has set out to check out whether the Ram Setu bridge is a myth or a reality.",
      "trailer": "www.youtube.com/embed/wFmKU79BW9g"
    }
  ])

db.movies.find({})
  
db.movies.find({}).pretty()

db.movies.find({}).count

db.movies.find({rating:7}).pretty()


db.movies.find({rating : {$gt:7}}).pretty()


//inclusion
db.movies.find({},{name:1,poster:1,rating:1}).pretty()

//exclusion
db.movies.find({},{poster:0,rating:0}).pretty()

//only mix with _id
db.movies.find({},{_id:0,poster:1,rating:1}).pretty()


//sorting -ascending
db.movies.find({}).sort({rating:1}).pretty()
db.movies.find({},{name:1}).sort({name:1}).pretty()
db.movies.find({},{name:1,rating:1}).sort({name:1}).pretty()
db.movies.find({},{name:1,rating:1}).sort({name:1,rating:1}).pretty()


//descending
db.movies.find({}).sort({rating:-1}).pretty()
db.movies.find({}).sort({name:-1,rating:-1}).pretty()
db.movies.find({},{name:1}).sort({name:-1,rating:-1}).pretty()


db.movies.find({},{name:1}).sort({name:-1,rating:-1}).pretty().limit(2)
db.movies.find({},{name:1}).sort({name:-1,rating:-1}).pretty().limit(2).skip(2)




db.orders.insertMany([
  { _id:0,productName:"Steel beam", status:"new", quantity:10},
  { _id:1,productName:"Steel beam", status:"urgent", quantity:20},
  { _id:2,productName:"Steel beam", status:"urgent", quantity:30},
  { _id:3,productName:"Iron rod", status:"new", quantity:15},
  { _id:4,productName:"Iron rod", status:"urgent", quantity:50},
  { _id:5,productName:"Iron rod", status:"urgent", quantity:10},
])

db.orders.find({})

db.orders.aggregate([{
  $match:{status:"urgent"}
}])

db.orders.aggregate([{
  $match:{status:"urgent"}},
  {$group:{_id:"$productName", totalUrgentQuantity:{$sum:"$quantity"}}}
])




