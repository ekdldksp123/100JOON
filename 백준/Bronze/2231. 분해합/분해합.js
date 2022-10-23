const n = require("fs").readFileSync('/dev/stdin').toString();

const start = parseInt(n) - (n.length * 9)
const arr = []

for(let i=start; i < n; i++) {
    let num = i
    let sum = num
    while(num !== 0) {
        sum += parseInt(num % 10)
        num = parseInt(num / 10)
    }
    if(sum === parseInt(n)) arr.push(i)
}

if(arr.length === 0) console.log(0)
else console.log(Math.min(...arr))