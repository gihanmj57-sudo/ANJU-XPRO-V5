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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0liSWNkaUxDeWVxaTZWNDE5VEFFZVB0TXZNcnFTWm1ZbU5EN3BYQ3hFOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUJLSG4yVFB6cEV6MjJrUkI4eUM4V1ZoaUlwWkhhWEJScmRocVBWc0pXVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVQ1VhWVBXZGI5TjAveC8wYk8rd0V3djZWbjRqa3IrcmF0OG5rdW9LMjBrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJRi9hSE1tT1Yva0JjbHA4alY2aGV2RHhTdnVWYjR3TEtRUXU2N3RRVFJRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdBQm50blYxYlRaaGEyV1dLNW94ellwWXF1Nnh4Sm92bzN6NnB5Nyt1bjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBNcm5nOGZpejdqM1RHMFRpMVBnbW5CekRIS1B1eVdTL3JNRHVaWTFVd009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZVBjM2N4aVJYWDFKdUZYOHhWK1dtYi9tU1l3c1FSdzZnelQxOE4xc3YyYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiKzdNYWhUZXBZVDVuY1gzeU50b1hlb2w0dG9FOHp1UG9ub3E4M1BZNGRXcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXL1JOOXBFQXovYWRtVUFxeENNeUZZeHEzcHBKRG4rbHZFdlE4MXdtR0toL0sxaEJFYm0rdWxvUVdoem1KK1J3V3c3K0tOeGo1L3drRVduZ3BNaEN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI4LCJhZHZTZWNyZXRLZXkiOiJSdjI4USszMHFxT2tpMDZhQWw1QXJzcnJFQ2YzZHlSUFdPSmhuNEhZWG9rPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzQwODE3NzM0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkMyOUQzNzA0MzJBMkUyQUUxQkFDODlEREQzOTM1RTg3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTU5OTUyMzN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjhNQ1hlangtUkxxZkszeUpjUWlUSHciLCJwaG9uZUlkIjoiZDcwNzFmOTQtMjJmZS00NWEzLThiNTEtY2FkMjI5Y2M1MzU0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRMNk1KSlhRNlhNSml6NTBRQVkzNXNEZXR6cz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjT2p2MFlpanZOWlczVFIvbXpneGM1bFBoOU09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRUVISkNUOUsiLCJtZSI6eyJpZCI6Ijk0NzQwODE3NzM0OjZAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyMDk4NjU1NzQyMDM0NTg6NkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BTL2hJRUZFTkM0cWNVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlcrUjJ1ckkzdXEzN3RTQnBPNUlQZDRFWUxBb1o0Q2NwdGhqQ1ZTZHV2Rkk9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImdqQitENFJ1OFJkYk5UcVVVTlZqUnUxSlNua0I4UTduWmZJWjVKV0tndGttckdoeS8xWC9mOGNpOWVlckZJV3BQZXdsT1ExTmFzUlVxV0dHcjhpc0FRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJIYmV6WWZyU0tkRWlrdDlrc1U5NUVCU2JHOXZCOStxcG96U2UvR1JSbHBCQkx6dTBVeEtlKytLN3ZJM0pDRkwwa3p1TS84YTBiWVVkZzB4b2tqSXlCUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzQwODE3NzM0OjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVnZrZHJxeU43cXQrN1VnYVR1U0QzZUJHQ3dLR2VBbktiWVl3bFVuYnJ4UyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU1OTk1MjMwLCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU10ciJ9",
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
