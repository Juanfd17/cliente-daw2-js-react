let array = [];

for (let i = 0; i < 50; i++) {
    array.push(0);
}

console.log(array)

let array2 = new Array(50);
array2.fill(0,0,50)
console.log(array2)

let array3 = new Array(50);

for (let i = 0; i < array3.length; i++) {
    array3[i] = 0
}

console.log(array3)