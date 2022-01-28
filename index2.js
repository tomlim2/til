let result = [];
for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    result.push(i + "+" + j + "=" + i * j);
  }
}

let filtered = "";

for (let offset = 0; offset < 2; offset++) {
  let limit = result.length / 2;
  for (let row = 0; row <= 9; row++) {
    for (let index = limit * offset; index < limit * (offset + 1); index++) {
      if (index % 9 === row) {
        filtered += result[index] + " ";
      }
    }
    filtered += "\n";
  }
  filtered += "\n";
}

console.log(filtered);
