//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUlPejRqZElGYWJqa1hES2xuM2ZwTXJrbTR1K2c5VEhlUkZLQkxxZXdtcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYVpEZk1TQlhEK0d0VXM3ZTdCTEFsQjFTUEIweG9VSFdROUo3N01BSitIND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3QllUQmNYU1JUSUU5RS85MGR6MEZ2N3ZpZ1paUkZCVFpBS3M1NmR2VzNvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJZG85NW9ZRkpwSmNON1V1d1VydFpmSjlEY1lKRmZxZnA5RHFkdm9zZVE0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9ES3VybXpTaXFqQmlDWi9KakNIWERKS0w2Zm5kVmRwaFp6bWJzR3JNV0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtUYUxYa3Fic0VGVExJK1EwcThyN1IrdVYzRWswTFdDcXN5VGwwRGp6VlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0s5aDBoS2N1Nmw5VTJmVzVvS0FPbGlkTFJyOHZ6VGlQV3NqMkFiemJGWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWmh0MjFiV3lFeXlTZ3QreStLaElQTjJBc1dBODRka2Y1K3I4dC9nVFQzOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5LWXdvaFFqRUhLVGcyNWEydUplamZaVm5PbnBXQ3lXME52OUJ0T0NKbklSaUNsNkZKcHpFMkoxdHVCelJhaFNOVHlCNG9hT1BaN2pRTEZ2aTNadEJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjUsImFkdlNlY3JldEtleSI6ImxTbVhsb29tSkNacGl5dC9kSEtybml1aHFXeWRvalFxSnZmcGZRbEx0cXM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NDA4MTc3MzRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMUYyNkEzOUZFOEJCN0UzMkE0RDYyOEM2RDcwQzI4OTYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTkzNTA4NX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NDA4MTc3MzRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiN0ZGOUE0MzREMTRGODE4MzU0NDZCOUI4NzhGQjIyNEEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTkzNTA4NX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoidElUcGNRdzNUenFBcHVBNVhQSTlTZyIsInBob25lSWQiOiIxZWVlNjRkYS00NWNhLTQ4MjEtOTZkOS1hYjYxZWM3YjI1OTQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNGxlR1lzeUl4UWdTVmRKNTkzbG5ldkJZT0NZPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxDVVlhRWlWYW9XRm42YzRMUlJlY0h5QjFaRT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI3RkpOSjE5SiIsIm1lIjp7ImlkIjoiOTQ3NDA4MTc3MzQ6NEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjIwOTg2NTU3NDIwMzQ1ODo0QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUEsvaElFRkVOemlwY1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVytSMnVySTN1cTM3dFNCcE81SVBkNEVZTEFvWjRDY3B0aGpDVlNkdXZGST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSE5XVTkyalJabC9mYmRFQU05R1VkdS9uK2JjTGFIL2RaY3hmZk1KWmw5OXRYSEc0dDdvMk5JeUtpV3phMXI5TTJoWkhQSlNndUc0cUthQktuZmw3Q0E9PSIsImRldmljZVNpZ25hdHVyZSI6IitUR1dNN3M0UEoyMzJYY1hyQS8ySFExVmQ5dWQzYzZrODRILzFudEVtZHg5TzN5Q3pSUXB4QkJ1YkJCYjdWWmhmVElDTUlDbUlDclE4K3ZLZnFxTkJnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NDA4MTc3MzQ6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWdmtkcnF5TjdxdCs3VWdhVHVTRDNlQkdDd0tHZUFuS2JZWXdsVW5icnhTIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTU5MzUwODEsImxhc3RQcm9wSGFzaCI6IjFLNGhINCIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSGdWIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94740817734",
  PASSWORD: 
    process.env.PASSWORD || "10c2c@#1310",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
