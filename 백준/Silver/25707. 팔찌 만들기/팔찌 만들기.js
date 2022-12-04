const input = require("fs").readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0])
const arr = input[1].split(' ').map(Number).sort((x,y)=> x-y)

let res;
if(n % 2 === 1) {
    const halfIndex = Math.floor(n / 2)
    res = [...arr.slice(halfIndex + 1), arr[halfIndex], ...arr.slice(0, halfIndex)]
} else {
    const halfIndex = n / 2 - 1
    res = [...arr.slice(halfIndex),...arr.slice(0,halfIndex)]
}

let sum = Math.abs(arr[0] - arr[n-1])
for(let i=0; i<n-1; i++) {
    sum += Math.abs(arr[i]-arr[i+1])
}

console.log(sum)