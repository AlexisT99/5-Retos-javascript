function FindIntersection(strArr) {
  let a = strArr[0].split(", ");
  let b = strArr[1].split(", ");
  let c = [];

  for (let i = 0; i < a.length; i++) {
    if (b.includes(a[i])) {
      c.push(a[i]);
    }
  }
  c = c.filter((item, index) => { //quitar duplicados
    return c.indexOf(item) === index;
  });
  return c;
}

// keep this function call here
console.log(FindIntersection(["1, 3, 4, 4, 7, 13", "1, 2, 4, 13, 15"]));
