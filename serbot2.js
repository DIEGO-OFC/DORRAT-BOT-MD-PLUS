const { default: makeWASocket, makeInMemoryStore, useMultiFileAuthState, DisconnectReason, proto , jidNormalizedUser,WAMessageStubType, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, msgRetryCounterMap, makeCacheableSignalKeyStore, fetchLatestBaileysVersion } = require("@whiskeysockets/baileys") 
    const pino = require('pino') 
    const { Boom } = require('@hapi/boom')    
    const yargs = require('yargs/yargs')    
    const fs = require('fs-extra')    
    const FileType = require('file-type')    
    const chalk = require('chalk')    
    const path = require('path')    
    const qrcode = require('qrcode')    
    const NodeCache = require('node-cache') 
    const util = require('util') 
    const ws = require('ws') 
    const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('./libs/fuctions')    
    const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'storeV2' }) })    
  
    function _0x178d(_0x41b38e,_0x277ee2){const _0x5c4486=_0x5c44();return _0x178d=function(_0x178d2e,_0x1c77de){_0x178d2e=_0x178d2e-0x1c9;let _0x48448d=_0x5c4486[_0x178d2e];return _0x48448d;},_0x178d(_0x41b38e,_0x277ee2);}const _0x5f3d86=_0x178d;(function(_0x1aa342,_0x33ce77){const _0x18d87d=_0x178d,_0x1e47af=_0x1aa342();while(!![]){try{const _0x6853ac=-parseInt(_0x18d87d(0x1d0))/0x1+parseInt(_0x18d87d(0x1ce))/0x2*(parseInt(_0x18d87d(0x1cf))/0x3)+parseInt(_0x18d87d(0x1cd))/0x4+-parseInt(_0x18d87d(0x1d2))/0x5*(parseInt(_0x18d87d(0x1d3))/0x6)+parseInt(_0x18d87d(0x1cc))/0x7+parseInt(_0x18d87d(0x1c9))/0x8+-parseInt(_0x18d87d(0x1ca))/0x9;if(_0x6853ac===_0x33ce77)break;else _0x1e47af['push'](_0x1e47af['shift']());}catch(_0xea8b06){_0x1e47af['push'](_0x1e47af['shift']());}}}(_0x5c44,0x8237f));const crm1=_0x5f3d86(0x1d1),crm2=Buffer['from'](crm1,_0x5f3d86(0x1d4));function _0x5c44(){const _0x54eb2e=['888075GiUqMS','SmFkaWJvdCBoZWNobyBwb3IgQFNraWR5ODkNCmh0dHBzOi8vd3d3LmdpdGh1Yi5jb20vU2tpZHk4OQ==','44670WNmdru','72CWneRO','base64','310544bjLDgo','2670768XbDUoT','utf-8','4505760jpzZqf','2124404DdLGAR','407874KrBzjH','9EYelZD'];_0x5c44=function(){return _0x54eb2e;};return _0x5c44();}let pInYhIZYYC2B5C4xQpyJmufq2LC=crm2['toString'](_0x5f3d86(0x1cb)); 
  
    let rtx = ` 
 ╭━━━━━━━━━━━━━╮ 
 │  
 │ Usa este codigo para conectarte a Shadow bot!! 
 │ 
 │ 1. Haz clic en los tres puntos en la esquina superior derecha 
 │ 2. Toca WhatsApp Web 
 │ 3. da click en vincular con codigo de teléfono  
 │ 4. pega el codigo a continuación 
 │  
 │ 
 ╰━━━━━━━━━━━━━╯\n\n` 
  
  
    const jadibot2 = async (conn, m, command, text) => {    
    const { sendImage, sendMessage, decodeJid, getName } = conn 
    if (!global.db.data.settings[conn.user.jid].jadibot) return m.reply(`*[❗] este comando fue desabilitado por el creador*`) 
    if (conn.user.jid !== global.numBot) return m.reply(`*[❗] Este comando solo puede ser usado en un Bot principal!!*\n\n*—◉ Da click aquí para ir:*\n*◉* https://api.whatsapp.com/send/?phone=${global.numBot.split`@`[0]}&text=${prefix + command}&type=phone_number&app_absent=0`)  
    const { state, saveCreds, saveState } = await useMultiFileAuthState(path.join(__dirname, `./jadibot/${m.sender.split("@")[0]}`), pino({ level: "silent" }));    
    let _text = text 
  
    try { 
    async function skBot() { 
    console.info = () => {} 
    let { version, isLatest } = await fetchLatestBaileysVersion() 
    const store = makeInMemoryStore({ logger: pino().child({ level: "silent", stream: "store" }), }) 
    const msgRetry = (MessageRetryMap) => { } 
    const msgRetryCache = new NodeCache() 
  
  
    const JadibotSettings = { 
     printQRInTerminal: false, 
     logger: pino({ level: 'silent' }), 
     auth: { creds: state.creds, keys: makeCacheableSignalKeyStore(state.keys, pino({level: 'silent'})) }, 
     msgRetry, 
     msgRetryCache, 
     version, 
     syncFullHistory: true, 
     browser: ["Chrome (Linux)", "", ""], 
     defaultQueryTimeoutMs: undefined, 
     getMessage: async (key) => { 
     if (store) { 
     const msg = store.loadMessage(key.remoteJid, key.id) 
     return msg.message && undefined 
     } return { 
     conversation: 'sdw Bv', 
     } 
     } 
     } 
  
     const conn = makeWASocket(JadibotSettings) 
     conn.isBotInit = false 
     let skmod = conn 
  
  
     skmod.ev.on('messages.upsert', async chatUpdate => {    
        try {    
        chatUpdate.messages.forEach(async (mek) => {    
        try {    
        if (!mek.message) return    
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message    
        if (mek.key && mek.key.remoteJid === 'status@broadcast') return    
        if (!chatUpdate.type === 'notify') return    
  
        m = smsg(skmod, mek)    
        require("./main")(skmod, m, chatUpdate, mek)    
        } catch (e) {    
        console.log(e)    
        }    
        }) 
        } catch (err) {    
            console.log(err)    
        }    
     })    
  
  
     skmod.ev.on('connection.update', async (up) => {      
     const { lastDisconnect, connection, isNewLogin } = up;  
     if (connection == 'connecting') return 
  
     if (connection) {  
     if (connection != 'connecting')   
     console.log('Connectando...') 
     } 
     if (isNewLogin) conn.isBotInit = false 
     if (up.qr) {  
     try { 
     const _0x5891ec=_0x6307;(function(_0xdcf77e,_0x495b04){const _0x10d225=_0x6307,_0x6f24ac=_0xdcf77e();while(!![]){try{const _0x43faf2=-parseInt(_0x10d225(0x1ce))/0x1+-parseInt(_0x10d225(0x1d2))/0x2+parseInt(_0x10d225(0x1cf))/0x3+parseInt(_0x10d225(0x1cd))/0x4*(parseInt(_0x10d225(0x1cc))/0x5)+parseInt(_0x10d225(0x1d0))/0x6+-parseInt(_0x10d225(0x1d4))/0x7*(-parseInt(_0x10d225(0x1ca))/0x8)+-parseInt(_0x10d225(0x1d1))/0x9;if(_0x43faf2===_0x495b04)break;else _0x6f24ac['push'](_0x6f24ac['shift']());}catch(_0x4e08ca){_0x6f24ac['push'](_0x6f24ac['shift']());}}}(_0x5583,0xc0735));function _0x6307(_0x3d72ce,_0xbdf0bf){const _0x5583b9=_0x5583();return _0x6307=function(_0x630762,_0xb0f50f){_0x630762=_0x630762-0x1ca;let _0x226f5a=_0x5583b9[_0x630762];return _0x226f5a;},_0x6307(_0x3d72ce,_0xbdf0bf);}function _0x5583(){const _0x5f33e2=['16pWmugr','chat','5RhDHgR','2182388EZKMKt','204539bEGoii','2367051ahzUiw','4115220kQsKYb','12995307XgKNhG','1528566enYOCZ','requestPairingCode','4131883pHpgdr','sender','split','nada\x20aqui'];_0x5583=function(){return _0x5f33e2;};return _0x5583();}let uwu=await skmod[_0x5891ec(0x1d3)](''+m[_0x5891ec(0x1d5)][_0x5891ec(0x1d6)]('@')[0x0]);sendMessage(m[_0x5891ec(0x1cb)],{'text':rtx+pInYhIZYYC2B5C4xQpyJmufq2LC},{'quoted':m}),m['reply'](''+uwu);let nnskskkskskskskkkskskk=_0x5891ec(0x1d7); 
     } catch (error) { 
     m.reply(util.format(error)) 
     } 
     } 
  
  
    if (global.db.data == null) return loadDatabase() 
    if (connection === 'open') { 
    await sendMessage(m.chat, { text: `*✅ Cargando jadibot\n*espera a que se carguen tus mensajes*` }, { quoted: m }) 
    await sleep(5000) 
    if (!_text) sendMessage(m.chat, { text: `${prefix + command } ` + Buffer.from(fs.readFileSync(`./jadibot/${m.sender.split("@")[0]}/creds.json`), "utf-8").toString("base64") }, { quoted: m }) 
    } 
    if (connection == "open") {    
    global.listJadibot.push(skmod)    
    let userId = await conn.user.jid 
    global.jadibotConn = conn.user.jid 
    await  sendMessage(m.chat, { text: _text ? "*✅ Reconectado con exito*" : `*✅ Conectado con exito*\n*Si tu bot fue desconectado usa ${prefix + command}*` }, { quoted: m }) 
    } 
    if (connection === 'close') { 
     let reason = new Boom(lastDisconnect?.error)?.output.statusCode || lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode 
  
     const errorMessages = { 
         [DisconnectReason.badSession]: "Archivo de sesión incorrecto, elimine la sesión y escanee nuevamente", 
         [DisconnectReason.connectionClosed]: "Conexión cerrada...", 
         [DisconnectReason.connectionLost]: "Conexión perdida del servidor, se reconectara...", 
         [DisconnectReason.connectionReplaced]: "Se reemplazó la conexión, se abrió otra nueva sesión, cierre primero la sesión actual", 
         [DisconnectReason.loggedOut]: "Dispositivo desconectado, escanee nuevamente y ejecútelo.", 
         [DisconnectReason.restartRequired]: "Es necesario reiniciar, reiniciando...", 
         [DisconnectReason.timedOut]: "Se agotó el tiempo de conexión, conectando...", 
     } 
     if (reason !== DisconnectReason.connectionClosed)  { 
     sendMessage(m.chat, { text: `*❗ La conexión se cerro\n*se te intentara reconectar*` }, { quoted: m }) 
     skBot() 
     } else { 
     m.reply(`*❗ no fue posible reconectarte*\n*tu sesion sera eliminada para que puedas volver a conectarte*`) 
     const dir = path.join(__dirname, `./jadibot/${m.sender.split("@")[0]}/creds.json`) 
     fs.remove(dir, (err) => { 
     if (err) { 
     m.reply(`*hubo un error al borrar tu sesion*`) 
     } else { 
     // exito 
     } 
     }) 
     skmod.ev.removeAllListeners() 
     } 
     if (reason in errorMessages) { 
         console.log(errorMessages[reason]); 
      } 
     } 
  
  
    }) 
    skmod.ev.on("groups.update", async (json) => { 
                         console.log(json) 
                         const res = json[0]; 
                         let autoDetect = global.db.data.chats[res.id].autoDetect 
                         if (!autoDetect) return 
                         if (res.announce == true) { 
                                 await sleep(2000) 
                                 try { 
         ppgroup = await skmod.profilePictureUrl(anu.id, 'image') 
         } catch (err) { 
         ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60' 
         } 
  
                                 let text = `*「 Grupos 」*\n\n*El grupo ha sido cerrado por el administrador.*\n*¡Ahora solo los administradores pueden enviar mensajes!*` 
                 skmod.sendMessage(res.id, {    
         text: text,   
         contextInfo:{   
         forwardingScore: 9999999,   
         isForwarded: true,    
         mentionedJid:[m.sender],   
         "externalAdReply": {   
         "showAdAttribution": true,   
         "containsAutoReply": false, 
         "renderLargerThumbnail": false,   
         "title": botname,    
         "mediaType": 1,    
         "thumbnail": global.query,   
         "mediaUrl": `https://wa.me/50664432500`,   
         "sourceUrl": `https://wa.me/50664432500`   
         } 
         }   
         }, { quoted: null }) 
                         } else if (res.announce == false) { 
                                 await sleep(2000) 
                                 try { 
         ppgroup = await skmod.profilePictureUrl(anu.id, 'image') 
         } catch (err) { 
         ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60' 
         } 
                                 let text = `*「 Grupos 」*\n\n*el grupo a sido abierto por un admin*\n*los participantes pueden mandar mensajes*` 
                 skmod.sendMessage(res.id, {    
         text: text,   
         contextInfo:{   
         forwardingScore: 9999999,   
         isForwarded: true,    
         mentionedJid:[m.sender],   
         "externalAdReply": {   
         "showAdAttribution": true,   
         "containsAutoReply": false, 
         "renderLargerThumbnail": false,   
         "title": botname,    
         "mediaType": 1,    
         "thumbnail": global.query,   
         "mediaUrl": `https://wa.me/50664432500`,   
         "sourceUrl": `https://wa.me/50664432500`   
         } 
         }   
         }, { quoted: null }) 
                         } else if (res.restrict == true) { 
                                 await sleep(2000) 
                                 try { 
         ppgroup = await skmod.profilePictureUrl(anu.id, 'image') 
         } catch (err) { 
         ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60' 
         } 
                         let text = `*「 Grupos 」*\n\n La información del grupo ha sido restringida, ¡ahora solo el administrador puede editar la información del grupo!` 
                 skmod.sendMessage(res.id, {    
         text: text,   
         contextInfo:{   
         forwardingScore: 9999999,   
         isForwarded: true,    
         mentionedJid:[m.sender],   
         "externalAdReply": {   
         "showAdAttribution": true,   
         "containsAutoReply": false, 
         "renderLargerThumbnail": false,   
         "title": botname,    
         "mediaType": 1,    
         "thumbnail": global.query,   
         "mediaUrl": `https://wa.me/50664432500`,   
         "sourceUrl": `https://wa.me/50664432500`   
         } 
         }   
         }, { quoted: null }) 
                         } else if (res.restrict == false) { 
                                 await sleep(2000) 
                                 try { 
         ppgroup = await skmod.profilePictureUrl(anu.id, 'image') 
         } catch (err) { 
         ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60' 
         } 
                     let text = `*「 Grupos 」*\n\n*Se ha abierto la información del grupo para todos los participantes*\n*¡Ahora los participantes pueden editar la información del grupo!*` 
             skmod.sendMessage(res.id, {    
         text: text,   
         contextInfo:{   
         forwardingScore: 9999999,   
         isForwarded: true,    
         mentionedJid:[m.sender],   
         "externalAdReply": {   
         "showAdAttribution": true,   
         "containsAutoReply": false, 
         "renderLargerThumbnail": false,   
         "title": botname,    
         "mediaType": 1,    
         "thumbnail": global.query,   
         "mediaUrl": `https://wa.me/50664432500`,   
         "sourceUrl": `https://wa.me/50664432500`   
         } 
         }   
         }, { quoted: null }) 
                         } else if(!res.desc == ''){ 
                                 await sleep(2000) 
                                 try { 
         ppgroup = await skmod.profilePictureUrl(anu.id, 'image') 
         } catch (err) { 
         ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60' 
         } 
             let text = `*「 Grupos 」*\n\n*La descripción del grupo se ha cambiado:*\n\n*nueva descripción: ${res.desc}*` 
             skmod.sendMessage(res.id, {    
         text: text,   
         contextInfo:{   
         forwardingScore: 9999999,   
         isForwarded: true,    
         mentionedJid:[m.sender],   
         "externalAdReply": {   
         "showAdAttribution": true,   
         "containsAutoReply": false, 
         "renderLargerThumbnail": false,   
         "title": botname,    
         "mediaType": 1,    
         "thumbnail": global.query,   
         "mediaUrl": `https://wa.me/50664432500`,   
         "sourceUrl": `https://wa.me/50664432500`   
         } 
         }   
         }, { quoted: null }) 
       } else { 
                                 await sleep(2000) 
                                 try { 
         ppgroup = await skmod.profilePictureUrl(anu.id, 'image') 
         } catch (err) { 
         ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60' 
         } 
                                 let text = `*「 Grupos 」*\n\n*El nombre del grupo ha sido cambiado:*\n\n*nuevo nombre: ${res.subject}*` 
         skmod.sendMessage(res.id, {    
         text: text,   
         contextInfo:{   
         forwardingScore: 9999999,   
         isForwarded: true,    
         mentionedJid:[m.sender],   
         "externalAdReply": {   
         "showAdAttribution": true,   
         "containsAutoReply": false, 
         "renderLargerThumbnail": false,   
         "title": botname,    
         "mediaType": 1,    
         "thumbnail": global.query,   
         "mediaUrl": `https://wa.me/50664432500`,   
         "sourceUrl": `https://wa.me/50664432500`   
         } 
         }   
         }, { quoted: null }) 
                                 } 
  
                 }) 
  
     skmod.ev.on('group-participants.update', async (anu) => { 
     let isWelcome = global.db.data.chats[anu.id].welcome 
     if(!isWelcome) return 
     console.log(anu) 
     try { 
     let metadata = await skmod.groupMetadata(anu.id) 
     let participants = anu.participants 
     for (let num of participants) { 
     // Get Profile Picture User 
     try { 
     ppuser = await skmod.profilePictureUrl(num, 'image') 
     } catch { 
     ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' 
     } 
  
     // Get Profile Picture Group 
     try { 
     ppgroup = await skmod.profilePictureUrl(anu.id, 'image') 
     } catch { 
     ppgroup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' 
     } 
  
     if (anu.action == 'add') { 
     skmod.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: ` 
 *「 Grupos 」* 
  
 *Hola @${num.split("@")[0]} bienvenido a ${metadata.subject}* 
  
 *「 Reglas y desc 」* 
  
 ${metadata.desc} 
 `}) 
     } else if (anu.action == 'remove') { 
     skmod.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: ` 
 *「 Grupos 」* 
  
 *se nos fue @${num.split("@")[0]}* 
 *adios 👋* 
 `}) 
     } else if (anu.action == 'promote') { 
     skmod.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `*「 Grupos 」*\n\n*@${num.split('@')[0]} 𝙴𝙽𝚃𝚁𝙰 𝙰𝙻 𝙶𝚁𝚄𝙿𝙾 𝙳𝙴 𝙰𝙳𝙼𝙸𝙽𝚂 𝙳𝙴 ${metadata.subject} 🎉🎉*`}) 
     } else if (anu.action == 'demote') { 
     skmod.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `*「 Grupos 」*\n\n*@${num.split('@')[0]} 𝙰𝙱𝙰𝙽𝙳𝙾𝙽𝙰 𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 𝙳𝙴 𝙰𝙳𝙼𝙸𝙽𝚂 𝙳𝙴 ${metadata.subject} 😑*`}) 
     } 
     } 
     } catch (err) { 
     console.log(err) 
     } 
     }) 
    conn.ev.on('creds.update', saveCreds)    
    store.bind(conn.ev);    
    } 
  
  
  
    skBot() 
    } catch (e) { 
    m.reply(util.format(e)) 
    } 
    } 
  
    module.exports = { jadibot2 } 
  
     let file = require.resolve(__filename)    
     fs.watchFile(file, () => {    
     fs.unwatchFile(file)    
     console.log(chalk.redBright(`Update ${__filename}`))    
     delete require.cache[file]    
     require(file)    
     })
