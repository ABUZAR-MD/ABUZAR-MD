const { cmd, commands } = require('../command');
const config = require('../config');

// repo info
cmd({
    pattern: "repo",
    alias: ["sc", "script", "info"],
    desc: "Info about the bot repository",
    category: "main",
    react: "👨‍💻",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `*Hello there MAFIA-MD User! 👋🏻* 

> Simple , Straight Forward But Loaded With Features 🎊, Meet MAFIA-MD WhatsApp Bot.

*Thanks for using MAFIA-MD 🇵🇰* 

> Don't forget to frok the repo ⤵️

https://github.com/MAFIA-ADEEL/MAFIA-MD-BOT`;

        // Send image with caption
        await conn.sendMessage(from, { 
            image: { url: `https://qu.ax/lgTzZ.jpg` }, 
            caption: dec, 
            contextInfo: { 
                mentionedJid: [m.sender], 
                forwardingScore: 999, 
                isForwarded: true, 
                forwardedNewsletterMessageInfo: { 
                    newsletterJid: '120363300351654980@newsletter', 
                    newsletterName: 'ᴍᴀꜰɪᴀ ᴀᴅᴇᴇʟ💝', 
                    serverMessageId: 143 
                } 
            } 
        }, { quoted: mek });

        // Send audio with contextInfo
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/JawadYTX/KHAN-DATA/raw/refs/heads/main/autovoice/repo.m4a' },
            mimetype: 'audio/mp4',
            ptt: true,
            contextInfo: { 
                mentionedJid: [m.sender], 
                forwardingScore: 999, 
                isForwarded: true, 
                forwardedNewsletterMessageInfo: { 
                    newsletterJid: '120363300351654980@newsletter', 
                    newsletterName: 'ᴍᴀꜰɪᴀ ᴀᴅᴇᴇʟ', 
                    serverMessageId: 143 
                } 
            }
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
