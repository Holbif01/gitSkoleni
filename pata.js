SKOLENI JAVA SCRIPTU

First lesson

const myFirstConst = 'skoleni'
console.log(myFirstConst)
const mySecondConst = 'Patka'
console.log(myFirstConst+mySecondConst)
let myFirstLet = 'style'
console.log(myFirstLet)
myFirstLet = 'England'
console.log(myFirstLet)
var myFirstVar = 'Not style'
console.log(myFirstVar)
myFirstVar = 'Ireland'
console.log(myFirstVar)//Var is outdated, should not be used anymore

-----------functions-----------

 1. function myFirstFunction(){
    console.log('hello')
  }
  console.log(myFirstFunction())
  
 2. function obvodTrojuhelniku(a,b,c){    //o = a+b+c
   
  return a+b+c
  }
  console.log(obvodTrojuhelniku(1,2,3))

 3. function hello(name){
    let myPozdrav = 'ahoj '
    return myPozdrav + name
    
    }    
    console.log(hello('Filip'))

-------------------------------
//homework c.1//    
function PhytagorasTheorem(a,b){   //c^2 = a^2 + b^2

      let triangle = a*a + b*b  
      return triangle
      }
      console.log(PhytagorasTheorem(6,8))

-------------------------------------------------------------------------------------------------------------------------------------

Second lesson

  function getUserChoise (userInput){
         let result;
         userInput = userInput.toLowerCase()
         if(userInput === 'rock'|| userInput ==='paper'||userInput ==='scissors'){
         return userInput
         }
         else {
         throw new Error('this is not valid point');
        }}
         //console.log (getUserChoise('scissors'))
         
         function getComputerChoise(){
            let number = getRandomInt(3);
           if(number === 0){
           return 'rock'
           }
            else if (number === 1){
           return 'paper'
           }
         else if (number === 2){
           return 'scissors'}
           }
         
         function getRandomInt(max) {
           return Math.floor(Math.random() * max);
         }
         
         //console.log(getComputerChoise())
         
         function determineWiner(userChoise,computerChoise ){
            console.log('userSelected: ',userChoise)
           console.log('computerSelected: ',computerChoise)
           
           if(userChoise === computerChoise){
           return 'tie'
           }
           
           if((userChoise === 'rock' && computerChoise === 'scissors')||(userChoise === 'scissors' &&     computerChoise === 'paper')||(userChoise === 'paper' && computerChoise === 'rock')){
           return 'user has won'
           }
           else {
           return 'computer has won'
           }
           
         
         }
         console.log(determineWiner(getUserChoise('rock'),getComputerChoise()))

  //HomeWork c.2//
   video od Patky , gitHub ucet zalozit, dnesni praci pushnu do GitHubu a link do confluence

   ----------------------------------------------------------------------------------------------------------------------------

   Third lesson

