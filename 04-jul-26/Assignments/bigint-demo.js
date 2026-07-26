let max = Number.MAX_SAFE_INTEGER;
console.log(max);
console.log(max + 1);
console.log(max + 2);
console.log(max + 3);
let bigInt = 9007199254740991n;
console.log(bigInt);
console.log(bigInt + 1n);
console.log(bigInt + 2n);
console.log(bigInt + 3n);
console.log("TypeOf BigInt: ", typeof bigInt);
try{
console.log(max + bigInt);
}catch (error) {
    console.log("Error: ", error.message);
}

