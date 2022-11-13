const n = parseInt(require("fs").readFileSync('/dev/stdin').toString())

const dp = Array.from({length: n}, (_, i) => i+1)
dp[0] = 1 // 혼자서는 악수를 할 수 없다 -> 악수를 하지 않는 경우만
dp[1] = 2 // 둘이서는 악수를 하거나, 하지 않을수 있다

for(let i=2; i < n; i++) {
    dp[i] = (dp[i-1] + dp[i-2]) % 10
}

console.log(dp[n-1])