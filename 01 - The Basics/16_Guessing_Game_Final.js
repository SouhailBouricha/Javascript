let value = Math.random();
const number = (value * 10) - ((value * 10) % 1); 


while (true){
    guess = prompt(`Guess a Number : ` + number);
    if(guess == number){
        console.log("Congratulations you win " + number);
        break;
    }
    else if (guess < number){
        alert("your guess is smmaler");
    }
    else{
        alert("your guess is bigger");
    }
}
