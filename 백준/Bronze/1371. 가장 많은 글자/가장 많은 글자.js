const input = require("fs").readFileSync('/dev/stdin').toString().split('\n');

const map = new Map()

const strs = input.join('').replace(/\n/g, "").replace(/ /gi,"").replace(); 

for(let i=0; i<strs.length; i++) {
    if(map.has(strs[i])) map.set(strs[i], map.get(strs[i]) + 1)
    else map.set(strs[i], 1)
}

let maxCount = 0
for(const [key,value] of map) {
    maxCount = Math.max(value, maxCount)
}

const result = []
for(const [key,value] of map) {
   if(value === maxCount) result.push(key)
}

result.sort()

console.log(result.join(''))