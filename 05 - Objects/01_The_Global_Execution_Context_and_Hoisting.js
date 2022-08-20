// befor even your js code runs something named The Global Execution Context been created and inside it there is the global object
// wich mean window in the browser and diff thing in node js and 'this' keyword and take all of your functions and store theme in a spote in memory
// so you can accses to theme before the declare and this named Hoisting, this tow diff parts people call them cretion phase and excution phase

sayhi();


function sayhi(){
    console.log("hiii")
}