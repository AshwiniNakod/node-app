 const dbl = (n) => n*2

//  console.log("hello 😀"+dbl(10));



//  console.log("hello 😀"+dbl(process.argv[2]));
// console.log(process.argv[2]);

const [, , num] =process.argv;

//  console.log("hello 😀"+dbl(num));


 const sum = (a,b) => a+b

 const [, , a1,b1]=process.argv
 console.log(sum(+a1,+b1))