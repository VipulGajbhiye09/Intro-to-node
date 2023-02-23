//introduction to node.js

const fs = require("fs")

// destination text file will be created or overwritten by default.
fs.copyFileSync('text1.txt', 'text2.txt')
