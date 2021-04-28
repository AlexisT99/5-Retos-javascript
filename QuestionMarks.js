
function QuestionsMarks(str) { 
    res = false;
    let re = /(.*[?]){3}/;
    for(let i=0; i<str.length; i++){
        for(let j=i+1; j<str.length; j++){
            if(Number(str[i]) + Number(str[j])=== 10){
                res = true;
                let temp=str.substring(i,j);
                if(!re.test(temp)) return false;
            }  
        }
    }
    return res;
}
     
  // keep this function call here 
  console.log(QuestionsMarks("acc?7??sss?3rr1??????5"));
  console.log(QuestionsMarks("aa6?9"));