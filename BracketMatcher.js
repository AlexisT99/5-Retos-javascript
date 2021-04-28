function BracketMatcher(str) { 
  let abrir=0;
  str=str.split('');
  for(let i=0;i<str.length;i++){
    if(str[i]==='(')abrir++;
    if(str[i]===')')abrir--;
    if(abrir<0) return false;
  }
  return abrir!=0 ? false:true;

}
   
// keep this function call here 
console.log(BracketMatcher("())("));
console.log(BracketMatcher("()(())"));