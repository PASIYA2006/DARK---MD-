const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/PasiYa73/Photo/blob/main/%40r07qxo%20-%20R%E2%A4%93Download.jpeg", 
ALIVE_MSG: process.env.ALIVE_IMG || "HELLO, I AM DARK-MD",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "True",
};
