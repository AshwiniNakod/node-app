const fs = require("fs")
const quote ="Have a nice day😀";

// fs.writeFile("./awsome.html",quote,(err)=>{
//     console.log("completed writing")
//     console.log(err)
// })
// for (let i = 1; i <= 10; i++) {
//     fs.writeFile(`./backup/text-${i}.html`,quote,(err)=>{
//         console.log(`completed writing ${i}`)
//         // console.log(err)
//     })
    
    
// }

// 


// fs.readFile("./backup/textFile-1.html","utf-8",(err,data)=>{
//         console.log(data);
// })

//  const quote2 ="Good morning"
// fs.appendFile("./backup/textFile-1.html","\n"+quote2,(err)=>{
//     console.log("completed writing");
// })


fs.unlink("./backup/text-3.html",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("file deleted...")
    }
})