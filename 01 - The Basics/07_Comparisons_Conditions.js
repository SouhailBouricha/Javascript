//Equal to

// 5 == 5 True
// 5 == 4 False

//Not Equal

// 5 != 4 True
// 5 != 5 False

// 5 > 10 False
// 10 > 6 True
//10 >= 10 True

//Never Ever Use Double Equals Use The Doubles

const acsses = true;
const age = 18;
const bank = 150;

if(acsses){
    console.log("Hey i have access");
}

if(age >= 18 && bank >= 150){
    console.log("Yeah you are rich");
}
else if(age <= 18 || acsses === false){
    console.log("you are broke");
}
else{
    console.log("Error");
}