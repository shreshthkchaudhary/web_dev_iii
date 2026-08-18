const data = process.argv;

console.log(data[2], data[3]);
console.log(Number(data[2])+Number(data[3]));

console.log(process.version);
console.log(process.platform);
console.log(process.pid);