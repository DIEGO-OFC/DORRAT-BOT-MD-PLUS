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
const menu = (main, prefix, pushname, sender, m) => {


let user = global.db.data.users[m.sender]
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
const date = moment.tz('America/Bogota').format('DD/MM/YYYY')
const time = moment.tz('America/Argentina/Buenos_Aires').format('LT')
/*const d = new Date(new Date + 3600000);
const locale = 'es';
const week = d.toLocaleDateString(locale, {weekday: 'long'});
const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});*/
let wa = m.key.id.length > 21 ? 'Android' : m.key.id.substring(0, 2) == '3A' ? 'IOS' : 'whatsapp web'

return `*╭━━❍𝐃𝐎𝐑𝐑𝐀𝐓-𝐁𝐎𝐓-𝐌𝐃❍━━╮* 
 *┣━━━▢ ❤𝐇𝐎𝐋𝐀, @${sender.split("@")[0]} ❤*• 
 *┃╭━━━━━━━━━━━━━━━━╾•* 
 *┃┃  ❍ ${time} ❍* 
 *┃┣━━━━━━━━━━━━━━━━╾•* 
 *┃┃ ⋄ NUMERO DEL CREADOR: wa.me/528442286089 (𝐍𝐎 𝐁𝐎𝐓)* 
 *┃┃ ⋄ VERSION » ${vs}* 
 *┃┃ ⋄ FECHA » ${date}* 
 *┃┃ ⋄ TIEMPO ACTIVO » ${runtime(process.uptime())}
 *┃┃ ⋄ LIBRERIA » Bailleys*
 *┃┃ ⋄ USUARIOS » ${Object.keys(global.db.data.users).length}*
 *┃┃ ⋄ MODO » ${conn.public ? 'publico' : 'privado'}*
 *┃╰━━━━━━━━━━━━━━━━╾•* 
 *╰━━━╼𝐃𝐎𝐑𝐑𝐀𝐓-𝐁𝐎𝐓-𝐌𝐃╾━━━╯* 

 ▧ 「 *I N F O R M A C I O N* 」  
 │ ‣ ︎ _${usedPrefix}grupos_ 
 │ ‣  _${usedPrefix}estado_ 
 │ ‣ ︎ _${usedPrefix}terminos_ 
 │ ‣  _${usedPrefix}instalarbot_ 
 │ ‣  _${usedPrefix}infobot_ 
 │ ‣  _${usedPrefix}grouplist_ 
 │ ‣  _${usedPrefix}owner_ 
 │ ‣  _${usedPrefix}script_ 
 │ ‣  _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜) 
 └──···

 ╔═════════════╗  
 ║ *<UNE UN BOT A TU GRUPO/>* 
 ║══════════════════ 
 ║ ➱_${usedPrefix}join *link del grupo*_  
 ║ ➱_*minimo 30 miembros*_ 
 ╚════ ≪ •❈• ≫ ════╝ 
  
 ╔═════ JADIBOT 🤖 ═════╗  
 ║ ❒ ︎_${usedPrefix}serbot_ 
 ║ ❒ ︎_${usedPrefix}jadibot_
 ║ ❒ ︎_${usedPrefix}stop_ 
 ║ ❒ ︎_${usedPrefix}bots_ 
 ╚════ ≪ •❈• ≫ ════╝ 
 
  ┌─「💻𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑」 
 ├➢${usedPrefix}videodocumento <enlace / link / url 
 ├➢${usedPrefix}fb <enlace / link / url 
 ├➢${usedPrefix}twitter *<enlace / link / url>*_
 ├➢${usedPrefix}xnxxdl *<enlace / link / url>*
 ├➢${usedPrefix}xvideosdl *<enlace / link / url>*
 ├➢${usedPrefix}instagram <enlace / link / url 
 ├➢${usedPrefix}mediafire <enlace / link / url 
 ├➢${usedPrefix}gdrive *<enlace / link / url>*
 ├➢${usedPrefix}gitclone <enlace / link / url 
 ├➢${usedPrefix}tiktok <enlace / link / url 
 ├➢${usedPrefix}ytmp3 <enlace / link / url 
 ├➢${usedPrefix}video <enlace / link / url 
 ├➢${usedPrefix}play.1 <texto / enlace / link / url 
 ├➢${usedPrefix}play.2 <texto / enlace / link / url 
 ├➢${usedPrefix}play <texto 
 ├➢${usedPrefix}spotify <texto 
 ├➢${usedPrefix}imagen <texto 
 ├➢${usedPrefix}pinteret <texto 
 ├➢${usedPrefix}wallpaper <texto 
 ├➢${usedPrefix}wallpaper2 <texto 
 ├➢${usedPrefix}pptiktok <nombre de usuario 
 ├➢${usedPrefix}igstalk <nombre de usuario 
 ├➢${usedPrefix}igstory *<nombre de usuario>*_
 ├➢${usedPrefix}tiktokstalk <nombre de usuario 
 └────ׂ─ׂ─ׂ─ׂ── 

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*🔰⃐ＧＲＵＰＯＳ*️⃟ᬽ፝֟━*
├❥ᰰຼ ❏ ${prefix}antilink _(Elimina a los que manda link de otro grupo)_
├❥ᰰຼ ❏ ${prefix}antifake _(eliminar a los números virtuales)_
├❥ᰰຼ ❏ ${prefix}antiarabe _(eliminar a los numero arabe)_
├❥ᰰຼ ❏ ${prefix}welcome _(dar las bienvenida)_
├❥ᰰຼ ❏ ${prefix}detect _(detectan las funciones del Grupo)_
├❥ᰰຼ ❏ ${prefix}kick _(@tag)_
├❥ᰰຼ ❏ ${prefix}add _(@tag)_
├❥ᰰຼ ❏ ${prefix}invita _(@tag)_
├❥ᰰຼ ❏ ${prefix}promote _(@tag)_
├❥ᰰຼ ❏ ${prefix}demote _(@tag)_
├❥ᰰຼ ❏ ${prefix}grupo close/open 
├❥ᰰຼ ❏ ${prefix}setppname _(cambia el nombre del grupo)_
├❥ᰰຼ ❏ ${prefix}setdesc _(cambia la descripción del Grupo)_
├❥ᰰຼ ❏ ${prefix}setppgroup _(cambia la foto del Grupo)_
├❥ᰰຼ ❏ ${prefix}hidetag _(etiqueta a todos el un mensaje)_
├❥ᰰຼ ❏ ${prefix}tagall _(etiqueta a todos el una listas)_
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*🔎⃐ＢＵＳＣＡＤＯＲＥＳ*️⃟ᬽ፝֟━*
├❥ᰰຼ ❏ ${prefix}google 
├❥ᰰຼ _(ingresa nombre de que quiera buscar)_
├❥ᰰຼ ❏ ${prefix}cosplay
├❥ᰰຼ ❏ ${prefix}ia 
├❥ᰰຼ _(ingresa el texto de que quiera buscar con la (IA)_
├❥ᰰຼ ❏ ${prefix}imagen
├❥ᰰຼ _ingresa texto de la imagen que quiere buscar_
├❥ᰰຼ ❏ ${prefix}pinterest
├❥ᰰຼ ❏ ${prefix}otakudesu (ingresa un texto)
├❥ᰰຼ ❏ ${prefix}ss 
├❥ᰰຼ _(ingresa un link para manda captura)_
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐👾ＪＵＥＧＯＳ*️⃟ᬽ፝֟━*
├❥ᰰຼ ❏ ${prefix}simi 
├❥ᰰຼ _(Hablar con el bot)_
├❥ᰰຼ ❏ ${prefix}ppt
├❥ᰰຼ _(Esta mantenimiento funciona pero responde cuando quiere xd)_
├❥ᰰຼ ❏ ${prefix}fake
├❥ᰰຼ _(Ingresa el texto + tag para joder a alguien con chat fake😹)_
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐🥵COMANDO +18*️⃟ᬽ፝֟━*
├❥ᰰຼ  *Activa con (antiNsfw on)*
├ *✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:
├❥ᰰຼ ❏ ${prefix}waifu
├❥ᰰຼ ❏ ${prefix}pussy
├❥ᰰຼ ❏ ${prefix}nsfwloli
├❥ᰰຼ ❏ ${prefix}hentai
├❥ᰰຼ ❏ ${prefix}lewd'
├❥ᰰຼ ❏ ${prefix}feed'
├❥ᰰຼ ❏ ${prefix}gasm
├❥ᰰຼ ❏ ${prefix}anal	    	
├❥ᰰຼ ❏ ${prefix}holo	    	
├❥ᰰຼ ❏ ${prefix}tits	    	
├❥ᰰຼ ❏ ${prefix}kuni
├❥ᰰຼ ❏ ${prefix}kiss
├❥ᰰຼ ❏ ${prefix}erok
├❥ᰰຼ ❏ ${prefix}smug
├❥ᰰຼ ❏ ${prefix}solog
├❥ᰰຼ ❏ ${prefix}feetg
├❥ᰰຼ ❏ ${prefix}lewdk    
├❥ᰰຼ ❏ ${prefix}femdom
├❥ᰰຼ ❏ ${prefix}cuddle
├❥ᰰຼ ❏ ${prefix}eroyuri
├❥ᰰຼ ❏ ${prefix}cum	    
├❥ᰰຼ ❏ ${prefix}blowjob
├❥ᰰຼ ❏ ${prefix}holoero
├❥ᰰຼ ❏ ${prefix}erokemo
├❥ᰰຼ ❏ ${prefix}fox_girl
├❥ᰰຼ ❏ ${prefix}futanari
├❥ᰰຼ ❏ ${prefix}wallpaper	   
├❥ᰰຼ *Nota: usarlo baja tu responsabilidad*
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫* 	
	
*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐🪙 ＥＣＯＮＯＭＩＡ*️⃟ᬽ፝֟━*
├❥ᰰຼ ❏ ${prefix}minar _(para minar exp)_
├❥ᰰຼ ❏ ${prefix}robar
├❥ᰰຼ ❏ ${prefix}claim
├❥ᰰຼ ❏ ${prefix}rob 
├❥ᰰຼ ❏ ${prefix}dep
├❥ᰰຼ ❏ ${prefix}beg
├❥ᰰຼ ❏ ${prefix}crimen
├❥ᰰຼ ❏ ${prefix}trabajar
├❥ᰰຼ ❏ ${prefix}work _(trabajar y ganar dólares)_
├❥ᰰຼ ❏ ${prefix}buy _(comprar mas diamante (limit)_
├❥ᰰຼ ❏ ${prefix}afk
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐👽ＳＴＩＣＫＥＲ*️⃟ᬽ፝֟━*
├❥ᰰຼ ❏ ${prefix}s
├❥ᰰຼ ❏ ${prefix}sticker 
├❥ᰰຼ ❏ ${prefix}wm
├❥ᰰຼ ❏ ${prefix}attp
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐✳️ Herramientas *️⃟ᬽ፝֟━*
├❥ᰰຼ ❏ ${prefix}hd (responda a una imagen)
├❥ᰰຼ ❏ ${prefix}emojimix
├❥ᰰຼ ❏ ${prefix}jpg (responda a un sticker)
├❥ᰰຼ ❏ ${prefix}toqr
├❥ᰰຼ ❏ ${prefix}ofuscar
├❥ᰰຼ ❏ ${prefix}nowa
├❥ᰰຼ ❏ ${prefix}traducir
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐👑ＯＷＮＥＲ*️⃟ᬽ፝֟━*
├❥ _(Comlando explusivo para propietario/owner del bot)_
├ *✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:
├❥ᰰຼ ❏ ${prefix}anticall
├❥ᰰຼ ❏ ${prefix}modojadibot
├❥ᰰຼ ❏ ${prefix}autoadmin 
├❥ᰰຼ ❏ ${prefix}bc (difusión a todos los chat)
├❥ᰰຼ ❏ ${prefix}bcgc (difusión solo a grupos)
├❥ᰰຼ ❏ ${prefix}join 
├❥ᰰຼ ❏ ${prefix}setppbot (cambia la foto del bot) 
├❥ᰰຼ ❏ ${prefix}public (modo público) 
├❥ᰰຼ ❏ ${prefix}privado (modo privado) 
├❥ᰰຼ ❏ ${prefix}getcase
├❥ᰰຼ ❏ $
├❥ᰰຼ ❏ >
├❥ᰰຼ ❏ => 
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*`
}

module.exports = { menu }

function pickRandom(list) {

    return list[Math.floor(list.length * Math.random())]

}

 let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
