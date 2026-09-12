// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 1");
//         resolve()
//     },3000)
// })
// promiseOne.then(function(){
//     console.log("Promise One Consumed");
// })


//-----------------------------------------------------------------------------------------------


// const promiseTwo = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     },2000)
// }).then(function(){
//     console.log("Promise Two Consumed");
// })


//-----------------------------------------------------------------------------------------------


// const promiseThree = new Promise(function(res,rej){
//     res({
//         "a":1,
//         "b":2,
//         "c":3
//     })
// }).then(function(user){
//     console.log(user)
//     console.log("Promisse Three Consumed")
// })


//-----------------------------------------------------------------------------------------------


// const promiseFour = new Promise ((res,rej) =>{
//     let error = false
//     if (!error){
//         res({
//             "a":1,
//             "b":2,
//             "c":3
//         })
//     }else{
//         rej("ERROR: Something went wrong")    
//     }
// })

// // promiseFour.then((user)=>{
// //     console.log(user.a)
// // }).catch((error)=>{
// //     console.log(error)
// // })

// promiseFour.then((user)=>{
//     console.log(user)
//     return user.a
// }).then((dataofa)=>{
//     console.log(dataofa)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("Promise is Either resolved or rejected")
// })


//-----------------------------------------------------------------------------------------------


// const promiseFive = new Promise ((res,rej)=>{
//     setTimeout(()=>{
//         let error = true
//         if(!error){
//             res({
//                 "name":"shreshth",
//                 "roll number":2501010080
//             })
//         }else{
//             rej("ERROR: Something went wrong")
//         }
//     },1000)
// });

// let consumePromiseFive= async ()=>{
//     try {
//         const responce= await promiseFive
//         console.log(responce);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()
// // console.log(consumePromiseFive())


//-----------------------------------------------------------------------------------------------


// async function getAllUsers() {
//     try{
//         const responce = await fetch("https://dummyjson.com/users")
//         const data = await responce.json()
//         console.log(data);
//     }catch(error){
//         console.log("E:",error)
//     }
// }

// getAllUsers()


//-----------------------------------------------------------------------------------------------


fetch("https://dummyjson.com/users")
.then((response)=>{
    return response.json()
}).then((userdata)=>{
    console.log(userdata)
}).catch((error)=>{
    console.log("E:",error)
})