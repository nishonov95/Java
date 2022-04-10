
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


// function playFootbol(player, callback){
//     console.log(`Name of player ${player}`)
//     callback()
// }

// playFootbol("MoSalah", function(){
//     console.log("his shot 100 gools")
// })



// let text = "hello world"

// console.log(text.toUpperCase());
// console.log(text.indexOf("d"));



// const person = {
//     name: `Xolmurod`,
//     lastname: `Nishonov`,
//     age: 25,
//     wishes: [],
//     language: function(){},
//     mather:{
//         name: `Jumagul`,
//         lastname:`Ulmasova`
//     },
// }

// console.log(Object.keys(person).length);

// for (let key in person){
//     if (typeof person[key]=="object"){
//         for (let i in person[key]){
//             console.log(`xususiyati ${key}  miqdori ${person[key][i]}`);
//         }
//     } else{
//         console.log(`xususiyati ${key}  miqdori ${person[key]}`);
//     }    
// }
// let i = 0
// for (let key in person){
// i++
// }
// console.log(i);



// let myFirstMethod={
// makeExempla: function(){
//     console.log(`salom`);
// }
// }
// myFirstMethod.makeExempla()


"use strict"
const arr = [1,2,3,4]
//masivga qo`shish va olib tashlash
//arr.pop() => masivni oxiridan olib tashlaydi.
//arr.push(6) => massivni oxiriga qo`shish.
//arr.unshift(0) => massivni boshiga element qo`shadi.
//arr.shift()   => massivni boshidan olib tashlaydi.

//console.log(arr);

//-------massiv elementlarini alohida olish
//for (let i=0; i<arr.length; i++){
//console.log(arr[i]);
//}

// arr.forEach(function(item, index, arr){
//     console.log(arr);
// })



let questions = prompt('','')

let answers = questions.split('','')

console.log(answers);