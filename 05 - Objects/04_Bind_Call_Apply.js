const user = {
    name: "sou",
    lastname : "hail",
    sayhi(){
        console.log(this.name + this.lastname);
    }
}

function userinto(country,lang){
    this.sayhi();
    console.log(country + ' ' + lang);
}

//bind
const userinfo = userinto.bind(user);
// userinfo("maroc","en");

//call
userinto.call(user,"maroc","en");

//apply

userinto.apply(user,["maroc","en"]);

// Bind Call Apply :  The bind() method creates a new function that, when called, has its this 
// keyword set to the provided value, with a given sequence of arguments preceding any provided when the 
// new function is called.The call() method calls the function with a given this value and arguments provided 
// individually. The apply() method calls the specified function with a given this value, and arguments provided 
// as an array (or an array-like object).