/*Investigando como resolver el problema y viendo que la razon tarea era estilo matematico, busque como hacer eso y me aparecio una pagina
https://math.stackexchange.com/questions/2753289/how-to-calculate-all-possible-combinations-of-brackets-order
en la que nos dice que los numeros catalanes resuelven esto; la formula es : (2n)!/(n+1)!n!
 */
const readline = require('readline');


function BracketCombinations(num) { 
    num = (factorial(2*num))/(factorial(num+1)*factorial(num));
    return num; 
  }
  
  function factorial(n) {
    return n==0 ? 1:n*factorial(n-1);
  }


  // keep this function call here 
  console.log(BracketCombinations(2));

