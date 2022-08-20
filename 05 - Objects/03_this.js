const user = {
    name: "Souhail",
    sayhi(){
        console.log(`Nmae : ${this.name}`);
    }
} 

user.sayhi();


// - 03 this : A property of an execution context (global, function or eval) that, in non–strict mode, is 
// always a reference to an object and in strict mode can be any value.Global context, In the global execution 
// context (outside of any function), this refers to the global object whether in strict mode or not.Inside a 
// function, the value of this depends on how the function is called. Since the following code is not in strict 
// mode, and because the value of this is not set by the call, this will default to the global object, which is 
// window in a browser.In strict mode, however, if the value of this is not set when entering an execution context,
//  it remains as undefined, as shown in the following example:
