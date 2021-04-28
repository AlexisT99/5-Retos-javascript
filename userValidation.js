/*
1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.
*/



function CodelandUsernameValidation(str) { 
    let re = /^[A-Za-z]\w+[A-Za-z0-9]$/;//^=empieza; \w+ significa los alfanumericos mas el subrayado n numero de veces;$ significa final de la linea
    if(str.length<4||str.length>25){return false;}
    return re.test(str);

  }
     
  // keep this function call here 
  console.log(CodelandUsernameValidation("u__hello_world123_"));