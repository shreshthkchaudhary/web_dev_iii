const os = require("os")

console.log(os.uptime())
console.log(os.userInfo())

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem()
}
console.log(currentOS)