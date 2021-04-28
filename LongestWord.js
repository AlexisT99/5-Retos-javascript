function LongestWord(sen) { 

    sen=sen.split(" ");
    let mayor=sen[0];
    for(let i=0;i<sen.length;i++){
        if(sen[i].length>mayor.length){mayor=sen[i];}
    }
    return mayor;
  }
     
  // keep this function call here 
  console.log(LongestWord("fun&!! time"));