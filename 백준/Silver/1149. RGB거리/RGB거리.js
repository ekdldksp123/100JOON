const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let [n, ...arr] = input

n = parseInt(n)
arr = arr.map(e => e.split(' ').map(v => parseInt(v)))

for(let i=1; i < n; i++) {
   arr[i][0] += Math.min(arr[i-1][1], arr[i-1][2])
   arr[i][1] += Math.min(arr[i-1][0], arr[i-1][2])
   arr[i][2] += Math.min(arr[i-1][0], arr[i-1][1])
}

console.log(Math.min(...arr[n-1]))