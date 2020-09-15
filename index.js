// ⭐️ Example ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * counter one and counter two provide the same result.  However in counter two let count is being define in the *global scope. 
 *    
 * 2. Which of the two uses a closure? How can you tell?
 * 
 *Counter1 used global scope.  You can tell becaus the let count in enclosed within the function. 
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 * counter1 once would be preferable in all cases I can think of.  Because counter2 count can be broken anywhere else in the code. 
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    return count++;
    
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning() {
let home = Math.floor(Math.random() * Math.floor(3));
    away = Math.floor(Math.random() * Math.floor(3));
return {"Home":home,  "Away":away};
}
console.log(inning());
inning();
// console.log(inning()[0]);

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 
console.log(inning().Home);
console.log(inning().Away);

function finalScore(fun, num){
  return {"Home": fun.Home * num,
  "Away": fun.Away * num
}}
finalScore(inning(), 9);
console.log(finalScore(inning(), 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function getInningScore(fun, num){
  for (let i = 1; i < num; i++)

return "Inning "+ i +" Home Team " + fun.Home + " - Away Team " + fun.Away;
}
console.log(getInningScore(inning(), 9));


    
//   }
  
//   for(let i = 0; i < num; i++){
//     fun1(fun2, i){
//       return {"Home Team": inning().Home * i,
//               "Away Team": inning().Away * i
//   }
// }




// function scoreboard(fun1, fun2, num) {
  
  
  
//   }
// }



// }


