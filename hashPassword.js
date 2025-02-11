const bcrypt = require("bcryptjs");

const plainPassword = "emilyspass";
const hashedPassword = bcrypt.hashSync(plainPassword, 10);

console.log("Hashed Password:", hashedPassword);
