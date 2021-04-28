function MinWindowSubstring(strArr) {
  let a = strArr[0];
  let b = strArr[1];
  let ini = 0;
  let fin = 0;
  a = a.split("");
  b = b.split("");

    for(let i=0;i<a.length-b.length;i++){
        if(b.includes(a[i])){
            let temp = a.slice(i+1,a.length+1);
            let temp2 = b.slice();
            quitar(temp2,a[i]);
            for(let j=0;j<temp.length;j++){
                if(temp2.includes(temp[j])){
                    quitar(temp2,temp[j]);
                }
                if(temp2.length==0){
                    if(ini==0&&fin==0){
                        ini=i;
                        fin=j+i+1; //para emparejarlo con la cadena inicial
                    }
                    else if((fin-ini)>((j+i+1)-i)){
                        ini=i;
                        fin=j+i+1; //para emparejarlo con la cadena inicial
                    }
                }
            }
        }
    }
    strArr= a.slice(ini,fin+1)
  return strArr;
}
function quitar(arreglo,elem) {
    for(let i=0;i<arreglo.length;i++){
        if(arreglo[i]==elem){arreglo.splice(i,1);return arreglo;}
    }
}
// keep this function call here
console.log(MinWindowSubstring(["ahffaksfajeeubsne", "jefaa"]));
console.log(MinWindowSubstring(["aaffhkksemckelloe", "fhea"]));