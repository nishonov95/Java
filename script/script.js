
// if (4==7){
//     console.log("ok")
// } else {
//     console.log("xato");
// }





// let num =25

// switch (num){
//     case 20:
//         console.log("ok")
//         break
//     case 30:
//         console.log("not ok")
//         break
//     default:
//         console.log("default case")
        
// }



//Funksiyalar
"use strict"
// function gettext(){
//     console.log("hello world");
// }
// gettext()

// function calc(a,b){
//     return a+b
// }

// console.log(calc(5,4))

// function returnNumber(){
//     let number = 8
//     return number
// }

// let num = returnNumber()
// console.log(num);


function playFootbol(player, callback){
    console.log(`Name of player ${player}`)
    callback()
}

playFootbol("MoSalah", function(){
    console.log("his shot 100 gools")
})



let text = "hello world"

console.log(text.toUpperCase());
console.log(text.indexOf("d"));
