// var myScore = 92;
//
// if(myScore > 90){
//     console.log("Yayyyy got my bicycle");
// }else{
//     console.log("Oops didn't get it this time!");
// }

// Student grade checking with mark
// 90 - 100 -> A
// 80 - 89 -> B
// 70 - 79 -> C
// 60 - 69 -> D
let mark = 80;

if(mark >= 90){
    console.log("Grade is A");
}else if(mark >= 80 && mark < 90){
    console.log("Grade is B");
}else if(mark >= 70 && mark < 80){
    console.log("Grade is C");
}else if(mark >= 60 && mark < 70){
    console.log("Grade is D")
}else{
    console.log("Failed");
}