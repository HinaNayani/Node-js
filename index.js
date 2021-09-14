//while loop
const secret = "babyhippo";
let guess = prompt("What is the secret code?");

 while(secret != guess){
    guess = prompt("what is the secret code");
}
console.log("congrats u cracked the code");


//nested loop
for(i = 0; i <= 10; i++){
    console.log(i);
    for(j = 0; j <=4; j++){
        console.log(j);
    }
}

//prime numbers sum
function isPrime(num) { 
    for(let i = 2; i < num; i++) 
      if(num % i === 0) return false;
     return num > 1;
  } 
  
  function totalPrimeNumbers(array) { 
    return array.reduce((acumulative, numerical) => { 
      if (isPrime(numerical)) { 
        acumulative += numerical;
      }
      return acumulative
    }, 0); 
  } 
  console.log(totalPrimeNumbers([1,5,2,9,3,4,11]));

 

