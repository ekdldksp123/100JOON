const input = require("fs").readFileSync('/dev/stdin').toString().split('\n')

const condition = input.shift().split(' ')
const set = new Set(input.slice(0, parseInt(condition[0])))
const strs = input.slice(parseInt(condition[0]))

let count = 0
for(const e of strs) {
    if(set.has(e)) count++
}
console.log(count)
