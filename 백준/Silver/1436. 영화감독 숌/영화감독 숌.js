const n = parseInt(require("fs").readFileSync('/dev/stdin').toString())

let num = 666
let cnt = 1
while (cnt < n) {
    num++
    if (String(num).includes("666")) cnt++
}
console.log(num)