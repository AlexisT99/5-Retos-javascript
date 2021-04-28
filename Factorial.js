function FirstFactorial(num) { 
        return num==0 ? 1:num*FirstFactorial(num-1);
      }
     
  // keep this function call here 
  console.log(FirstFactorial(8));