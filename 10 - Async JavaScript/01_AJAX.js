// 01 Ajax : Asynchronous JavaScript and XML, while not a technology in itself, is a term coined in 2005 by 
// Jesse James Garrett, that describes a "new" approach to using a number of existing technologies together, 
// including HTML or XHTML, CSS, JavaScript, DOM, XML, XSLT, and most importantly the XMLHttpRequest object. 
// When these technologies are combined in the Ajax model, web applications are able to make quick, incremental
//  updates to the user interface without reloading the entire browser page. This makes the application faster 
//  and more responsive to user actions. Although X in Ajax stands for XML, JSON is preferred over XML nowadays
//   because of its many advantages such as being a part of JavaScript, 
// thus being lighter in size. Both JSON and XML are used for packaging information in the Ajax model.
// let i = 0;
// function ca(){
//     i++;
//     console.log(`${i}`);
//     setTimeout(ca,1000);
// }

// ca();
// console.log(Math.floor(Math.random() * 3));

// window.showOpenFilePicker();
// async function ca(){
//     function doi() {
//         i = 0;
//         while(i<1000000000){
//             i++;
//         }
//         return i;
//     }
//     let i = await doi();
//     console.log(i);
// }

// console.log("hi");
// ca();
// console.log("bey");
// const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// console.log(fetchPromise);

// fetchPromise.then((response) => {
//     console.log(`Received response: ${response.status}`);
//   });

// console.log("Started request…");
// const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// fetchPromise.then((response) => {
//   const jsonPromise = response.json();
//   jsonPromise.then((data) => {
//     console.log(data[0].name);
//   });
// });

// const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// fetchPromise
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data[0].name);
//   });

// async function fetchProducts() {
//     try {
//       // after this line, our function will wait for the `fetch()` call to be settled
//       // the `fetch()` call will either return a Response or throw an error
//       const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
//       if (!response.ok) {
//         throw new Error(`HTTP error: ${response.status}`);
//       }
//       // after this line, our function will wait for the `response.json()` call to be settled
//       // the `response.json()` call will either return the parsed JSON object or throw an error
//       const data = await response.json();
//       console.log(data);
//     }
//     catch (error) {
//       console.error(`Could not get products: ${error}`);
//     }
//   }

// console.log('grgrg');
// fetchProducts();
// console.log('fbbfbf');

async function fetchProducts() {
    try {
      const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      return data;
    }
    catch (error) {
      console.error(`Could not get products: ${error}`);
    }
  }
  
  const promise = fetchProducts();
  console.log(promise.then(data =>{ 
    console.log(data);
  }));   // "promise" is a Promise object, so this will not work