require('../main.js')  
 //require("../main")(conn, m, chatUpdate, mek, color, msgs) 
 const fs = require("fs") 
 const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('../libs/fuctions.js');  
 const path = require("path") 

 const chalk = require("chalk"); 
 const moment = require('moment-timezone')  
 const gradient = require('gradient-string')  
 const fetch = require('node-fetch')  
 const axios = require('axios') 
 const cheerio = require('cheerio') 
 const Jimp = require('jimp') 
 const os = require('os') 
  
 let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])] 
 for (let jid of mentionUser) { 
 let user = global.db.data.users[jid] 
 if (!user) continue 
 let afkTime = user.afkTime 
 if (!afkTime || afkTime < 0) continue 
 let reason = user.afkReason || '' 
 m.reply(`💤 𝙽𝙾 𝙻𝙾𝚂 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴 💤\n𝙴𝚜𝚝𝚎 𝚞𝚜𝚞𝚊𝚛𝚒𝚘 𝚚𝚞𝚎 𝚖𝚎𝚗𝚌𝚒𝚘𝚗𝚊𝚜 𝚎𝚜𝚝𝚊 𝙰𝙵𝙺\n\n${reason ? '🔸️ *𝚁𝙰𝚉𝙾𝙽* : ' + reason : '🔸️ *𝚁𝙰𝚉𝙾𝙽* : 𝚂𝚒𝚗 𝚛𝚊𝚣𝚘𝚗'}\n🔸️ *𝙴𝚂𝚃𝚄𝚅𝙾 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙾 𝙳𝚄𝚁𝙰𝙽𝚃𝙴 : ${clockString(new Date - afkTime)}`.trim())} 
 if (global.db.data.users[m.sender].afkTime > -1) { 
 let user = global.db.data.users[m.sender] 
 m.reply(`╭━─━─━─≪☣️≫─━─━─━╮\n┃𝙳𝙴𝙹𝙰𝚂𝚃𝙴 𝙳𝙴 𝙴𝚂𝚃𝙰 𝙰𝙵𝙺\n┃${user.afkReason ? '\n┃🔸️ *𝚁𝙰𝚉𝙾𝙽 :* ' + user.afkReason : ''}\n┃🔸 *𝙴𝚂𝚃𝚄𝚅𝙾 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙾 𝙳𝚄𝚁𝙰𝙽𝚃𝙴* ${clockString(new Date - user.afkTime)}\n╰━─━─━─≪☣️≫─━─━─━╯`.trim()) 
 user.afkTime = -1 
 user.afkReason = ''  
 } 
  
 async function reg(conn, m, sender, text, fkontak) {  
  let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i  
  let user = global.db.data.users[m.sender]  
  if (user.registered === true) return reply(`*Ya estas registrado 🧐*`)   
  if (!Reg.test(text)) return reply(`*❎ Incorrecto*\nUse de esta forma\nEjemplo: ${prefix}reg nombre.edad`)   
  let [_, name, splitter, age] = text.match(Reg)  
  if (!name) return reply('El nombre no puede estar vacio')   
  if (!age) return reply('La edad no puede esta vaciar (Numeros)')   
  age = parseInt(age)  
  if (age > 100) return reply('Que viejo (。-`ω´-)')   
  if (age < 5) return reply('🚼  Basado, los bebes saben escribir.✍️😳')   
  if (name.length >= 30) return reply('🐈 Fua que basado, el nombre es muy largo que quiere un puente como nombre😹')   
  user.name = name.trim()  
  user.age = age  
  user.regTime = + new Date  
  user.registered = true  
  // let sn = createHash('md5').update(m.sender).digest('hex')  
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender  
  const date = moment.tz('America/Bogota').format('DD/MM/YYYY')  
  const time = moment.tz('America/Argentina/Buenos_Aires').format('LT')  
  global.db.data.users[m.sender].limit += 2  
  global.db.data.users[m.sender].exp += 200  
  conn.sendMessage(m.chat, { text: `*[ ✅ REGISTRO COMPLETADO ]*\n◉ *Nombre:* ${name}\n◉ *Edad:* ${age}\n◉ *Hora:* ${time}\n◉ *Fecha:* ${date}\n◉ *Número:* wa.me/${sender.split("@")[0]}\n\n🎁 Recompensa\n◉ 2 diamante 💎\n◉ 200 exp\n\n*Para ver los comandos del bot usar:*\n\n${prefix}menu`,  
  contextInfo:{  
  mentionedJid:[name],  
  forwardingScore: 9999999,  
  isForwarded: true,   
  "externalAdReply": {  
  "showAdAttribution": true,  
  "containsAutoReply": true,  
  "title": `${botname}`,  
  "body": `${name}`,  
  "previewType": "PHOTO",  
  "thumbnailUrl": ``,  
  "thumbnail": imagen1,   
  "sourceUrl": md}}},  
  { quoted: m})} 
  async function levelxd(conn, m, sender, text, fkontak) {  
  //const {canLevelUp, xpRange} = "../libs/fuctions2.js";    
  let who;   
     if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;   
     else who = m.sender;   
      if (!(who in global.db.data.users)) return m.reply(`✳️ ᴇʟ ᴜsᴜᴀʀɪᴏ ɴᴏ sᴇ ᴇɴᴄᴜᴇɴᴛʀᴀ ᴇɴ ᴍɪ ʙᴀsᴇ ᴅᴇ ᴅᴀᴛᴏs`)    
   let user = global.db.data.users[m.sender]; 
   if (!canLevelUp(user.level, user.exp, global.multiplier)) { 
     let {min, xp, max} = xpRange(user.level, global.multiplier); 
     return m.reply(` 
 ╔════ *NIVEL* 
 ➢ 👥 Nombre : @${who.split('@')[0]} 
 ➢ 🧰 Nivel : *${user.level}*
 ➢ 👑 XP : *${`${ConvertMiles(user.exp - min)}`} / ${`${ConvertMiles(xp)}`}* 
 ╚══════════════ 
 Te falta *${`${ConvertMiles(max - user.exp)}`}* de *XP* para subir de nivel 
  
 ${wm} 
 `);
   } 
   let before = user.level * 1; 
   while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++; 
   if (before !== user.level) { 
     let teks = `🎊 Bien hecho @${who.split('@')[0]} Nivel:

 ╔════  *LEVEL UP* 
 ➢ 👥 Nivel anterior : *${before}* 
 ➢ 🧰 Nivel actual : *${user.level}* 
 ╚══════════════ 
 *_Cuanto más interactúes con los bots, mayor será tu nivel_* 
  
 ${wm} 
 `.trim(); 
     try { 
       m.reply(teks)

     } catch (e) { 
       m.reply(str); 
     } 
   } }
 async function rob(conn, m, sender, fkontak) { 
   // let _user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;

    const user = global.db.data.users[m.sender];  
  let time = global.db.data.users[m.sender].lastrob+ 7200000;   
     if (new Date() - global.db.data.users[m.sender].lastrob < 7200000)   
       return m.reply(`*𝙴𝚜𝚝𝚊𝚜 𝚌𝚊𝚗𝚜𝚊𝚍𝚘, 𝚍𝚎𝚋𝚎𝚜 𝚍𝚎𝚜𝚌𝚊𝚗𝚜𝚊𝚛 𝚌𝚘𝚖𝚘 𝚖𝚒𝚗𝚒𝚖𝚘 ${msToTime(time - new Date())} 𝚙𝚊𝚛𝚊 𝚟𝚘𝚕𝚟𝚎𝚛 𝚊 robar!*`);   
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;  
  else who = m.chat;  
    if (!who) {  
      return m.reply('⚠️ Debes etiquetar a la persona que quieres robar');  
    }  
    try {  
      if (!(who in global.db.data.users)) {  
        return m.reply('⚠️ El usuario no se encuentra en mi base de datos.');  
      }  
      if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender);      
        //  if (_user.startsWith(conn.user.jid.split`@`[0])) return m.reply("No puedes saquear a la bot :I");  
      const targetUser = global.db.data.users[who];  
      const dolares = Math.floor(Math.random() * 15) + 10;  
      const limit = Math.floor(Math.random() * 5) + 3;  
      const rob = Math.floor(Math.random() * 500);  
      if (targetUser.limit < 10) {  
        return m.reply('[😹] El usuario no tiene suficientes recursos, talvez tiene el dinero en su banco!'
);  
      }  
      if (targetUser.dolares < 2) {  
        return m.reply('[😹] El usuario no tiene suficientes recursos, talvez tiene el dinero en su banco!');  
      }  
      user.dolares += dolares;  
      user.limit += limit;  
      targetUser.dolares -= dolares;  
      targetUser.limit -= limit;  
      await conn.sendMessage(  
        m.chat,  
        {  
          text: `Has saqueado a @${who.split('@')[0]}:  
          - Dinero: ${dolares}  
          - Diamante: ${limit}  
          Robado por: @${m.sender.split('@')[0]} 
  
 Rob By DEV.DIEGO-OFC`,  
          mentions: [who, m.sender]  
        },  
        { quoted: m }  
      );  
      global.db.data.users[m.sender].lastrob = new Date() * 1;   
    } catch {  
      await m.reply(  
        '❕ ERROR, POR FAVOR INTÉNTELO DE NUEVO, SEGURAMENTE EL USUARIO ESTÁ AFK'  
      );  
  
    }} 
  
 async function bal(conn, m, sender, fkontak) { 
  let who;  
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;  
    else who = m.sender;  
     if (!(who in global.db.data.users)) return m.reply(`✳️ ᴇʟ ᴜsᴜᴀʀɪᴏ ɴᴏ sᴇ ᴇɴᴄᴜᴇɴᴛʀᴀ ᴇɴ ᴍɪ ʙᴀsᴇ ᴅᴇ ᴅᴀᴛᴏs`)  
  //  let name = conn.getName(who);  
    let db = await conn.profilePictureUrl(who, "image").catch((_) => "https://telegra.ph/file/e01c177fb1c61f453c659.jpg");  
    let bank = `╭━━━━ 𝐁𝐀𝐍𝐂𝐎 🏦 ━━━╾•  
  ❍ *Nombre:* @${who.split('@')[0]} 
  ❍ *Diamantes:* ${global.db.data.users[who].limit} 💎  
  ❍ *Dolares:* $${global.db.data.users[who].dolares} 💸  
 ❍ *Banco:* ${global.db.data.users[who].bank}  
  ╰━━━━━━━━━━━━╾•`.trim();  
    conn.sendMessage(  
      m.chat,  
      {  
        image: {  
          url: "https://telegra.ph/file/e01c177fb1c61f453c659.jpg",  
        },  
        caption: bank,  
        contextInfo: {  
          mentionedJid: [m.sender],  
          externalAdReply: {  
            title: `RPG - BANK`,  
            sourceUrl: "http://paypal.me/DorratBotOficial",  
            mediaType: 1,  
            showAdAttribution: true,  
            thumbnailUrl: "https://telegra.ph/file/e01c177fb1c61f453c659.jpg",  
          },  
        },  
      },  
      {  
        quoted: m,  
      }  
    );  
  } 
 async function work(conn, m, sender, fkontak) { 
   let d = Math.floor(Math.random() * 20);      
    let time = global.db.data.users[m.sender].lastwork + 600000;      
    if (new Date() - global.db.data.users[m.sender].lastwork < 600000) {  
      return m.reply(`*𝙴𝚜𝚝𝚊𝚜 𝚌𝚊𝚗𝚜𝚊𝚍𝚘, 𝚍𝚎𝚋𝚎𝚜 𝚍𝚎𝚜𝚌𝚊𝚗𝚜𝚊𝚛 𝚌𝚘𝚖𝚘 𝚖𝚒𝚗𝚒𝚖𝚘 ${msToTime(time - new Date())} 𝚙𝚊𝚛𝚊 𝚟𝚘𝚕𝚟𝚎𝚛 𝚊 𝚝𝚛𝚊𝚋𝚊𝚓𝚊𝚛!*`);  
    }      
    //let pp = "galeria/menudorrat3.jpg";      
    m.reply(`*${pickRandom(global.work)} $${d}* *DOLARES*`);      
    global.db.data.users[m.sender].dolares += d * 1;   
     global.db.data.users[m.sender].lastwork = new Date() * 1;   
  };   
  
 async function mine(conn, m, sender, fkontak) { 
 if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra) 
 const date = global.db.data.users[m.sender].lastmiming + 600000; 
 if (new Date - global.db.data.users[m.sender].lastmiming < 600000) return m.reply(`*[ ⏳ ] Espera ${msToTime(date - new Date())} min para volver a minar*`)  
 const exp = Math.floor(Math.random() * 1000) 
 global.db.data.users[m.sender].exp += exp; 
 m.reply(`*Genial minaste ${exp} XP*`) 
 global.db.data.users[m.sender].lastmiming = new Date * 1; 
 } 
  
 async function buy(conn, m, sender, args, command, replace, fkontak) { 
 if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra) 
 let count = command.replace(/^buy/i, ''); 
 count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / 450) : parseInt(count) : args[0] ? parseInt(args[0]) : 1; 
 count = Math.max(1, count); 
 if (global.db.data.users[m.sender].exp >= 450 * count) { 
 global.db.data.users[m.sender].exp -= 450 * count; 
 global.db.data.users[m.sender].limit += count; 
 m.reply(`╔═❖ *ɴᴏᴛᴀ ᴅᴇ ᴘᴀɢᴏ*\n║‣ *ʜᴀs ᴄᴏᴍᴘʀᴀᴅᴏ :* ${count}💎\n║‣ *ʜᴀs ɢᴀsᴛᴀᴅᴏ :* ${450 * count} XP\n╚═══════════════`); 
 } else m.reply(`🔶 ɴᴏ ᴛɪᴇɴᴇ sᴜғɪᴄɪᴇɴᴛᴇ xᴘ ᴘᴀʀᴀ ᴄᴏᴍᴘʀᴀʀ *${count}* ᴅɪᴀᴍᴀɴᴛᴇ 💎 ᴘᴜᴇᴅᴇs ᴄᴏɴsᴇɢᴜɪʀ *xᴘ* ᴜsᴀɴᴅᴏ ᴇʟ ᴄᴏᴍᴀɴᴅᴏs #minar`) 
 } 
  
 async function afk(conn, m, sender, args, pushname, text) { 
 if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra) 
 let user = global.db.data.users[m.sender] 
 user.afkTime = + new Date 
 user.afkReason = text 
 m.reply(`╭━─━─━─≪ 𝙰𝙺𝙵 ≫─━─━─━╮ 
 ┃ 𝙴𝚂𝚃𝙴 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 ${pushname} 
 ┃ 𝙴𝚂𝚃𝙰 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙾 😴 
 ┃ ≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋ 
 ┃ 💤 𝙽𝙾 𝙻𝙾𝚂 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴 💤 
 ┃ ☣️ 𝙼𝙾𝚃𝙸𝚅𝙾𝚂 : ${text ? text : ''} 
 ╰━─━─━─≪ ${vs} ≫─━─━─━╯`)} 
  
 async function claim(conn, m, sender) { 
 const free = 5000;  
  const prem = 20000; 
  let time = global.db.data.users[m.sender].lastclaim + 86400000;  
  if (new Date() - global.db.data.users[m.sender].lastclaim < 86400000)  
  return m.reply( `🎁 *Ya recogiste tu recompensa diaria*\n\n🕚 Vuelve en *${msToTime(time - new Date())}* `); 
  global.db.data.users[m.sender].exp += free; 
  m.reply(`  
  🎁 *RECOMPENSA DIARIA*  
  💥 *Has recibido:*  
  🆙 *XP* : +${free}`);  
  global.db.data.users[m.sender].lastclaim = new Date() * 1;  
  };
const growth = Math.pow(Math.PI / Math.E, 1.618) * Math.E * 0.75; 
function xpRange(level, multiplier = global.multiplier || 1) { 
   if (level < 0) throw new TypeError("level cannot be negative value"); 
   level = Math.floor(level); 
   let min = level === 0 ? 0 : Math.round(Math.pow(level, growth) * multiplier) + 1; 
   let max = Math.round(Math.pow(++level, growth) * multiplier); 
   return { 
     min, 
     max, 
     xp: max - min, 
   }; 
 } 
 function findLevel(xp, multiplier = global.multiplier || 1) { 
   if (xp === Infinity) return Infinity; 
   if (isNaN(xp)) return NaN; 
   if (xp <= 0) return -1; 
   let level = 0; 
   do level++; 
   while (xpRange(level, multiplier).min <= xp); 
   return --level; 
 } 
function canLevelUp(level, xp, multiplier = global.multiplier || 1) { 
   if (level < 0) return false; 
   if (xp === Infinity) return true; 
   if (isNaN(xp)) return false; 
   if (xp <= 0) return false; 
   return level < findLevel(xp, multiplier); 
 }
 //función pickrandow 
 function pickRandom(list) { 
 return list[Math.floor(list.length * Math.random())] 
 } 
 //temporarily 
    function ConvertMiles(number) { 
   const exp = /(\d)(?=(\d{3})+(?!\d))/g; 
   const rep = "$1."; 
   let arr = number.toString().split("."); 
   arr[0] = arr[0].replace(exp, rep); 
   return arr[1] ? arr.join(".") : arr[0]; 
 }   
 function msToTime(duration) {  
    var milliseconds = parseInt((duration % 1000) / 100),  
    seconds = Math.floor((duration / 1000) % 60),  
    minutes = Math.floor((duration / (1000 * 60)) % 60),  
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);  
    hours = hours < 10 ? "0" + hours : hours;  
    minutes = minutes < 10 ? "0" + minutes : minutes;  
    seconds = seconds < 10 ? "0" + seconds : seconds;  
    return minutes + " m y " + seconds + " s ";  
 } 
 module.exports = { rob, reg, bal, work, mine, afk, buy, claim, levelxd} 
  
 let file = require.resolve(__filename) 
 fs.watchFile(file, () => { 
         fs.unwatchFile(file) 
         console.log(chalk.redBright(`Update ${__filename}`)) 
         delete require.cache[file] 
         require(file) 
 })