const { readFileSync, writeFileSync } = require("fs")

const first = readFileSync('./content/first.txt', "utf8")
const test = readFileSync('./content/subfolder/test.txt', "utf8")


// to overwrite
writeFileSync("content/result-sync.txt", `here is result = ${first}, ${test}`)
// to just append
writeFileSync("content/result-sync.txt", `here is result = ${first}, ${test}`, {flag:"a"})