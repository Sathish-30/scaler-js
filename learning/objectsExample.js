// In Js Objects are in key value pairs

// const person = {
//     name: {
//         firstName : "steve",
//         secondName : "rogers",
//     },
//     age : 100,
//     gender : "male",
//     city : "Brooklyn",
// }
//
// const captainAmerica = {
//     details : person,
//     superPower : "super soldier",
//     friends : ["bucky" , "tony stark" , "bruce banner"]
// }
//
// captainAmerica.movies = ["Age of ultron" , "civil war" , "First avenger","End game" , "infinity war"];
//
// delete captainAmerica.movies;
//
// console.log(captainAmerica);

function checkAge(data){
    if(data === {age : 18}){
        console.log("Adult");
    }else{
        console.log("Not an adult");
    }
}

checkAge({age : 18});