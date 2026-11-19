const jwt = require("jsonwebtoken");

const data = {
  _id:"42k234kb24bu2b42sfg"
}

const token = jwt.sign(data,"thisisasecret",{expiresIn:"10d"})
console.log(token)

const decoded = jwt.verify(token,"thisisasecret")
console.log(decoded)

// encryptPassword(password);
// encryptPassword(passwordcopy);