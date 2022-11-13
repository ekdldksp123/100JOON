const input = require("fs").readFileSync('/dev/stdin').toString().split('\n')

const bridge = Array.from({length: parseInt(input[0])}, (_, i) => i+1)
const start = parseInt(input[2])
const visited = []

const jumps = input[1].split(' ').map(v => parseInt(v))

const bfs = (pos) => {
    if(pos <= -1 || pos > bridge.length - 1 || visited.includes(pos)) {
       return;
    }
    visited.push(pos)
    bfs(pos - jumps[pos])
    bfs(pos + jumps[pos])
}

bfs(start - 1)

console.log(visited.length)