function TreeConstructor(strArr) { 
    let hijo = {};
    let padre = {};
    for (let i = 0; i < strArr.length; i++){
        let str = strArr[i].split('');
        str.pop();
        str.shift();
        let par = str.join('').replace(", ", ",").split(',');
        hijo[par[0]] = (hijo[par[0]] || 0) + 1;
        if (hijo[par[0]] > 1) return false;
        padre[par[1]] = (padre[par[1]] || 0) + 1;
        if (padre[par[1]] > 2) return false;
    }
    return true; 
  }
     
  // keep this function call here 
  console.log(TreeConstructor(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]));