/* The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

To learn about the way promises workand how you can use them, we advise you to read Using promises first.*/

// const promise = new Promise((resolve,reject) =>{
//     setTimeout(() =>{
//         console.log("we got the data");
//         resolve({user:"souhail"});
//     },3000);
// })

// promise.then((e)=>{
//     console.log(e);
// })

const promise = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        console.log("we got the data");
        reject(new Error('Big L'));
    },3000);
})

promise.then((e)=>{
    console.log(e);
}).catch((e) => {
    console.log(e.message);
});