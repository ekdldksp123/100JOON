const input = Number(require("fs").readFileSync('/dev/stdin').toString())

if(input % 2 === 0) console.log('CY')
else console.log('SK')