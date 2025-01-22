const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *MAFIA-ADEEL👑*

> *MAFIA MD REPO:*
*|* *https://github.com/MAFIA-ADEEL/MAFIA-MD-BOT*

> *SUPPORT CHANNEL:*
*|* *https://whatsapp.com/channel/0029VakJs4YJkK7BYQF1Wp1g*
*╰──────────────●●►*

> *MAFIA-MD*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363300351654980@newsletter',
      newsletterName: "MAFIA-ADEEL👑",
      serverMessageId: 144
    },
externalAdReply: { 
title: 'MAFIA MD',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/MAFIA-ADEEL/MAFIA-MD-BOT" ,
thumbnailUrl: "https://i.ibb.co/hc1P121/Manul-Ofc-X.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
