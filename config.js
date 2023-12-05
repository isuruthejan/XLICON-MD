const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "94740571407"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'Isuruthejan20068@gmail.com'
global.github = ''
global.location = 'asia/colombo'
global.gurl = '' // add your username
global.sudo = process.env.SUDO || '94740571407' 
global.devs = '94740571407';
global.website = '' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0JvZjMxWTdJWTF3Vlo3VnRwK3QvUUNNYlpjWUxmWVBjdnBGNTcySGNYWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU9PZG8yeVBVK3BHZ2RCZG04OEZIeEpHVitKaEF4K243M3ozYkpwdlB5TT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxRlBsU3BCWXRGSVNZMExCeXQvbG1sY21GQXdrYWRZMmQvSkZQN3VIYVhRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyZ2Z1eWJHUWZyS1VpazhoMStPY3U3ajQ2b1BjTzZYSGlXNmdLMDhwT25jPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1LVlltVjBvNUtQVFdoOHgzV2lHNk5HSzZjTUZJaDB1ZFFiYWRVc0wyMFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlIycmxqMzVTamJESjVNNFVmSW9ZdFZFV2ZtVFhhVjlsMW01d1dzOVNYaTA9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJWjB6TVh1SklMWldTa2VnVVo1QWRkekdLN0xXcHVmTTlQWFY5b2lVNUVuZE9CZy9jSWI1VEwvOHBNZFB2N3BaUWFEZTdYejZiR1JsYW1YWGFjZGZodz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjQ4LCJhZHZTZWNyZXRLZXkiOiJuVHhVUVVBdWUzSUxsS3NOY0cwSlE4cDB0eTkrenFYTG9velZLN3lPWjdBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJiOTc2ZjBuT1JHcXVsNUxhMXVsRGxnIiwicGhvbmVJZCI6ImRmNmRhZjQzLWNmMDUtNDIwMi1hYmE1LWM5ZGYzYTJhYTUzMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkSHppSmlQcjg0V01rcm5hbUoxbHBwQlQ3eDA9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1ZWTRGcVBtZFB6YSt2eXBvcStTMkZjYlJOST0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xib2hQTUVFS1B0dktzR0dCaz0iLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoid0o0NEJNWjR3TkZneGIwQUpLQnA5d3NMQ2NEaWEwaHN2Zmp5V3hsVmtHYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoidFdpMXpSVStTcHQrTmlrd1M2bnpob3NHS1M2MEN3UC9rSWF4Y1RYcGZrZGJXanBCblk3WVJ0UUVGVk83UjNtS1dzYVd4ODNSSzlyS2NUNkFFYndNQnc9PSIsImRldmljZVNpZ25hdHVyZSI6InpvdU8rU2t6YS9aWVNoUmhnZ1JFcC8ybC9WK1RsVTc1aUljYkZoZFpFZ0tkNzcyUnBMTENBN1drZ29KdVEwQ2ZJcDQ0b3pQOWppYWRwWkZrcitMamdBPT0ifSwibWUiOnsiaWQiOiI5NDc0MDU3MTQwNzo5OEBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc0MDU3MTQwNzo5OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjQ2VPQVRHZU1EUllNVzlBQ1NnYWZjTEN3bkE0bXRJYkwzNDhsc1pWWkJuIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzAxNzg3MzAzfQ==",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '@𝙼𝚁 Isuru',
  packname:  process.env.PACK_NAME || '𝙼𝚁 Isuru',
   
  botname:   process.env.BOT_NAME === undefined ? "𝙼𝚁 Isuru" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? '𝙼𝚁 Isuru' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'Hi_ I Am Online' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
