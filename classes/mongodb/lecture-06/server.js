const bcrypt = require("bcrypt");

const password = "Jack@1234";
const passwordcopy = "Jack@12345";

const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(2);
  console.log("Salt:", salt);
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log("Hashed Password:", hashedPassword);

  const isMatch = await bcrypt.compare(passwordcopy, hashedPassword)
  console.log("Password Match: ",isMatch);
}



encryptPassword(password);
encryptPassword(passwordcopy);