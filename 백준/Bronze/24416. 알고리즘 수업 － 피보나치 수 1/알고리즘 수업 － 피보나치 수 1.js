const n = parseInt(require("fs").readFileSync('/dev/stdin').toString())
    
const solution = (n) => {
    let cnt = 0
    const fib = (n) => {
        if(n === 1 || n === 2) {
            cnt++
            return 1
        } else return fib(n-1) + fib(n-2)
    }
    fib(n)
    console.log(cnt)
    
    cnt = 0
    const f = [0,1,1]
    const fibonacci = (n) => {
       
        for(let i=3; i<=n; i++) {
            cnt++
            f[i] = f[i - 1] + f[i - 2]
        }
        return f[n]
    }
    fibonacci(n)
    console.log(cnt)
}

solution(n)