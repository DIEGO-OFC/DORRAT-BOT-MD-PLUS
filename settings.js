//Bot echo desde 0 por favor deja crédito rata 
 const fs = require('fs')  
 const path = require('path') 
const baileys = require('@whiskeysockets/baileys'); 
 const axios = require('axios');
 const moment = require('moment-timezone')
 const {getBuffer, getSizeMedia} = require('./libs/fuctions.js')
 const chalk = require('chalk')  
  
 global.owner = [ 
 ["584125778026", "Owner", true] 
   ] 
  
 global.botname = "𝐒𝐡𝐚𝐝𝐨𝐰𝐁𝐨𝐭-𝐕𝟓-𝐌𝐃" 
 global.wm = 'SħȺđøwɃøŧ-V5-MĐ 💫' 
 global.vs = '1.0.0' 
 global.place = 'America/Bogota' // Aquí puede encontrar su ubicación https://momentjs.com/timezone/ 
global.baileys = baileys
global.axios = axios
global.getBuffer = getBuffer
global.getSizeMedia = getSizeMedia
global.moment = moment
 global.language = 'es' // Aquí puede encontrar su idioma https://cloud.google.com/translate/docs/languages?hl=es-419 
 global.keyp7 = ['HVYBvnPn']
 global.lolkeysapi = 'GataDios' //api lohum 
global.keyxy = ['4ZFZiZK2Vw']
 global.imagen1 = fs.readFileSync('./media/menu.jpg') 
global.query = imagen1
 global.imagen2 = fs.readFileSync('./media/menu2.jpg') 
 global.imagen3 = fs.readFileSync('./media/menu3.jpg') 
 global.noperfil = fs.readFileSync('./media/sinfoto.jpg') 
 global.md = 'https://github.com/elrebelde21' 
 global.yt = 'https://www.youtube.com/@LoliBot' 
 global.nn = 'https://chat.whatsapp.com/KlqNmoUcVnsGJxIfATIDrK' //Update  
 global.nnn = 'https://chat.whatsapp.com/KNzpnA8SJArLUXY4unzjgk' //LoliBot 
 global.nna2 = 'DTfzshW01Jt943BfCw3wov' 
 const ctxd = [ 
"AF",  "AX",   "AL", "DZ",  "AS",   "AD",  "AO",   "AI",  "AQ", "AG", "AR", "AM", "AW", "AU",  "AT", 
       "AZ", 
       "BS", 
       "BH", 
       "BD", 
       "BB", 
       "BY", 
       "BE", 
       "BZ", 
       "BJ", 
       "BM", 
       "BT", 
       "BO", 
       "BQ", 
       "BA", 
       "BW", 
       "BV", 
       "BR", 
       "IO", 
       "BN", 
       "BG", 
       "BF", 
       "BI", 
       "KH", 
       "CM", 
       "CA", 
       "CV", 
       "KY", 
       "CF", 
       "TD", 
       "CL", 
       "CN", 
       "CX", 
       "CC", 
       "CO", 
       "KM", 
       "CG", 
       "CD", 
       "CK", 
       "CR", 
       "CI", 
       "HR", 
       "CU", 
       "CW", 
       "CY", 
       "CZ", 
       "DK", 
       "DJ", 
       "DM", 
       "DO", 
       "EC", 
       "EG", 
       "SV", 
       "GQ", 
       "ER", 
       "EE", 
       "ET", 
       "FK", 
       "FO", 
       "FJ", 
       "FI", 
       "FR", 
       "GF", 
       "PF", 
       "TF", 
       "GA", 
       "GM", 
       "GE", 
       "DE", 
       "GH", 
       "GI", 
       "GR", 
       "GL", 
       "GD", 
       "GP", 
       "GU", 
       "GT", 
       "GG", 
       "GN", 
       "GW", 
       "GY", 
       "HT", 
       "HM", 
       "VA", 
       "HN", 
       "HK", 
       "HU", 
       "IS", 
       "IN", 
       "ID", 
       "IR", 
       "IQ", 
       "IE", 
       "IM", 
       "IL", 
       "IT", 
       "JM", 
       "JP", 
       "JE", 
       "JO", 
       "KZ", 
       "KE", 
       "KI", 
       "KP", 
       "KR", 
       "XK", 
       "KW", 
       "KG", 
       "LA", 
       "LV", 
       "LB", 
       "LS", 
       "LR", 
       "LY", 
       "LI", 
       "LT", 
       "LU", 
       "MO", 
       "MK", 
       "MG", 
       "MW", 
       "MY", 
       "MV", 
       "ML", 
       "MT", 
       "MH", 
       "MQ", 
       "MR", 
       "MU", 
       "YT", 
       "MX", 
       "FM", 
       "MD", 
       "MC", 
       "MN", 
       "ME", 
       "MS", 
       "MA", 
       "MZ", 
       "MM", 
       "NA", 
       "NR", 
       "NP", 
       "NL", 
       "AN", 
       "NC", 
       "NZ", 
       "NI", 
       "NE", 
       "NG", 
       "NU", 
       "NF", 
       "MP", 
       "NO", 
       "OM", 
       "PK", 
       "PW", 
       "PS", 
       "PA", 
       "PG", 
       "PY", 
       "PE", 
       "PH", 
       "PN", 
       "PL", 
       "PT", 
       "PR", 
       "QA", 
       "RS", 
       "RE", 
       "RO", 
       "RU", 
       "RW", 
       "BL", 
       "SH", 
       "KN", 
       "LC", 
       "MF", 
       "PM", 
       "VC", 
       "WS", 
       "SM", 
       "ST", 
       "SA", 
       "SN", 
       "CS", 
       "SC", 
       "SL", 
       "SG", 
       "SX", 
       "SK", 
       "SI", 
       "SB", 
       "SO", 
       "ZA", 
       "GS", 
       "SS", 
       "ES", 
       "LK", 
       "SD", 
       "SR", 
       "SJ", 
       "SZ", 
       "SE", 
       "CH", 
       "SY", 
       "TW", 
       "TJ", 
       "TZ", 
       "TH", 
       "TL", 
       "TG", 
       "TK", 
       "TO", 
       "TT", 
       "TN", 
       "TR", 
       "XT", 
       "TM", 
       "TC", 
       "TV", 
       "UG", 
       "UA", 
       "AE", 
       "GB", 
       "US", 
       "UM", 
       "UY", 
       "UZ", 
       "VU", 
       "VE", 
       "VN", 
       "VG", "VI", "WF", "EH",  "YE", "ZM", "ZW"]; 
global.ctpro = ctxd;
 global.packname = "𝐒𝐡𝐚𝐝𝐨𝐰𝐁𝐨𝐭-𝐕𝟓-𝐌𝐃" 
 global.author = "By Diego-OFC" 
  
 global.info = { 
 wait: '*⌛ _Cargando | Charging..._ ▬▭▭▭▭▭▭*',  
 waitt: '*⌛ _Cargando | Charging..._ ▬▬▭▭▭*',  
 waittt: '*⌛ _Cargando | Charging..._ ▬▬▬▬▭▭*',  
 waitttt: '*⌛ _Cargando | Charging..._ ▬▬▬▬▬▬▭*',  
 waittttt: '*⌛ _Cargando | Charging..._ ▬▬▬▬▬▬▬*',  
 result: '*✅ Listo*', 
 admin: '*[ ⚠️ ] TU NO ERES ADMINS 🤡 ESTE COMANDO SOLO ES PARA LOS ADMINS DEL GRUPO*', 
 botAdmin: '[ ⚠️ ] *Hey primero el bot (yo) necesito admin para usar este comando*', 
 owner: '*[ ⚠️ ] ESTE COMANDO ES PARA MI JEFE*', 
 group: '[ ⚠️ ] *ESTE COMANDO SOLO SE PUEDE USAR EL GRUPO*', 
 private: '*[ ⚠️ ] ESTE COMANDO SOLO SE PUEDE USAR AL CHAT PRIVADO*', 
 bot: '*[ ⚠️ ] ESTE COMANDO SOLO YO LOS PUEDE USAR*', 
 error: '*[ ⚠️ ] ERROR*',  
 advertencia: `[ ⚠️ ＡＤＶＥＲＴＥＮＣＩＡ ]`,  
 registra: `🟢Hey alto no esta registrado\nregistrate con #reg`,  
 limit: '*1 ᴅɪᴀᴍᴀɴᴛᴇ 💎 ᴜsᴀᴅᴏ*',  
 dolares5: '*5 Dolares usados*',
 AntiNsfw: `*Los comando +18 esta desactivado*\nSi eres admin y quiere activarlos usar:\nantiNsfs on`,  
 endLimit: 'Uff esta pobres no tener mas 💎', 
sindolares: 'Estas pobre, no tienes dolares XD',
 } 
  global.rpg = {   
     emoticon(string) {   
       string = string.toLowerCase();   
       let emot = {   
         tarjeta: "💳 Banesco",   
         level: "🧬 Nivel",   
         limit: "💎 Diamante",   
         bitcoins: "🏵️ BitCoins",   
         dolares: "💵 Dolares",   
         exp: "⚡ Experiencia",   
         bank: "🏦 Banco",   
         diamond: "💎 Diamante",   
         health: "❤️ Salud",   
         kyubi: "🌀 Magia",   
         joincount: "☯️ Token",   
         emerald: "💚 Esmeralda",   
         stamina: "✨ Energía",   
         role: "💪 Rango",   
         premium: "🎟️ Premium",   
         pointxp: "📧 Puntos Exp",   
         gold: "👑 Oro",   
         trash: "🗑 Basura",   
         crystal: "🔮 Cristal",   
         intelligence: "🧠 Inteligencia",   
         string: "🕸️ Cuerda",   
         keygold: "🔑 Llave de Oro",   
         keyiron: "🗝️ Llave de Hierro",   
         emas: "🪅 Piñata",   
         fishingrod: "🎣 Caña de Pescar",   
         gems: "🍀 Gemas",   
         magicwand: "⚕️ Varita Mágica",   
         mana: "🪄 Hechizo",   
         agility: "🤸‍♂️ Agilidad",   
         darkcrystal: "♠️ Cristal Oscuro",   
         iron: "⛓️ Hierro",   
         rock: "🪨 Roca",   
         potion: "🥤 Poción",   
         superior: "💼 Superior",   
         robo: "🚔 Robo",   
         upgrader: "🧰 Aumentar Mejora",   
         wood: "🪵 Madera",   
         strength: "🦹‍ ♀️ Fuerza",   
         arc: "🏹 Arco",   
         armor: "🥼 Armadura",   
         bow: "🏹 Super Arco",   
         pickaxe: "⛏️ Pico",   
         sword: "⚔️ Espada",   
         common: "📦 Caja Común",   
         uncoommon: "🥡 Caja Poco Común",   
         mythic: "🗳️ Caja Mítico",   
         legendary: "🎁 Caja Legendaria",   
         petFood: "🍖 Alimento para Mascota",   
         pet: "🍱 Caja para Mascota",   
         bibitanggur: "🍇 Semilla de Uva",   
         bibitapel: "🍎 Semilla de Manzana",   
         bibitjeruk: "🍊 Semillas de naranja",   
         bibitmangga: "🥭 Semilla de Mango",   
         bibitpisang: "🍌 Semillas de Plátano",   
         ayam: "🐓 Pollo",   
         babi: "🐖 Puerco",   
         Jabali: "🐗 Jabali",   
         bull: "🐃 Toro",   
         buaya: "🐊 Cocodrilo",   
         cat: "🐈 Gato",   
         centaur: "🐐 Centauro",   
         chicken: "🐓 Pollo",   
         cow: "🐄 Vaca",   
         dog: "🐕 Perro",   
         dragon: "🐉 Dragón",   
         elephant: "🐘 Elefante",   
         fox: "🦊 Zorro",   
         giraffe: "🦒 Jirafa",   
         griffin: "🦅 Ave",   
         horse: "🐎 Caballo",   
         kambing: "🐐 Cabra",   
         kerbau: "🐃 Búfalo",   
         lion: "🦁 León",   
         monyet: "🐒 Mono",   
         panda: "🐼 Panda",   
         snake: "🐍 Serpiente",   
         phonix: "🕊️ Fénix",   
         rhinoceros: "🦏 Rinoceronte",   
         wolf: "🐺 Lobo",   
         tiger: "🐅 Tigre",   
         cumi: "🦑 Calamar",   
         udang: "🦐 Camarón",   
         ikan: "🐟 Pez",   
         fideos: "🍝 Fideos",   
         ramuan: "🧪 Ingrediente NOVA",   
         knife: "🔪 Cuchillo",   
       };   
       let results = Object.keys(emot)   
         .map((v) => [v, new RegExp(v, "gi")])   
         .filter((v) => v[1].test(string));   
       if (!results.length) return "";   
       else return emot[results[0][0]];   
     },   
   };   
   global.rpgg = {   
     //Solo emojis   
     emoticon(string) {   
       string = string.toLowerCase();   
       let emott = {   
         tarjeta: "💳 Banesco",   
         level: "🧬",   
         limit: "💎",   
         bitcoins: "🏵️",   
         dolares: "💵 Dolares",   
         exp: "⚡",   
         bank: "🏦",   
         diamond: "💎+",   
         health: "❤️",   
         kyubi: "🌀",   
         joincount: "☯️",   
         emerald: "💚",   
         stamina: "✨",   
         role: "💪",   
         premium: "🎟️",   
         pointxp: "📧",   
         gold: "👑",   
         trash: "🗑",   
         crystal: "🔮",   
         intelligence: "🧠",   
         string: "🕸️",   
         keygold: "🔑",   
         keyiron: "🗝️",   
         emas: "🪅",   
         fishingrod: "🎣",   
         gems: "🍀",   
         magicwand: "⚕️",   
         mana: "🪄",   
         agility: "🤸‍♂️",   
         darkcrystal: "♠️",   
         iron: "⛓️",   
         rock: "🪨",   
         potion: "🥤",   
         superior: "💼",   
         robo: "🚔",   
         upgrader: "🧰",   
         wood: "🪵",   
         strength: "🦹‍ ♀️",   
         arc: "🏹",   
         armor: "🥼",   
         bow: "🏹",   
         pickaxe: "⛏️",   
         sword: "⚔️",   
         common: "📦",   
         uncoommon: "🥡",   
         mythic: "🗳️",   
         legendary: "🎁",   
         petFood: "🍖",   
         pet: "🍱",   
         bibitanggur: "🍇",   
         bibitapel: "🍎",   
         bibitjeruk: "🍊",   
         bibitmangga: "🥭",   
         bibitpisang: "🍌",   
         ayam: "🐓",   
         babi: "🐖",   
         Jabali: "🐗",   
         bull: "🐃",   
         buaya: "🐊",   
         cat: "🐈",   
         centaur: "🐐",   
         chicken: "🐓",   
         cow: "🐄",   
         dog: "🐕",   
         dragon: "🐉",   
         elephant: "🐘",   
         fox: "🦊",   
         giraffe: "🦒",   
         griffin: "🦅",   
         horse: "🐎",   
         kambing: "🐐",   
         kerbau: "🐃",   
         lion: "🦁",   
         monyet: "🐒",   
         panda: "🐼",   
         snake: "🐍",   
         phonix: "🕊️",   
         rhinoceros: "🦏",   
         wolf: "🐺",   
         tiger: "🐅",   
         cumi: "🦑",   
         udang: "🦐",   
         ikan: "🐟",   
         fideos: "🍝",   
         ramuan: "🧪",   
         knife: "🔪",   
       };   
       let results = Object.keys(emott)   
         .map((v) => [v, new RegExp(v, "gi")])   
         .filter((v) => v[1].test(string));   
       if (!results.length) return "";   
       else return emott[results[0][0]];   
     },   
   };   
   global.rpgshop = {   
     //Tienda   
     emoticon(string) {   
       string = string.toLowerCase();   
       let emottt = {   
         tarjeta: "💳 Banesco",   
         exp: "⚡ Experiencia",   
         limit: "💎 Diamante",   
         bitcoins: "🏵️ BitCoins",   
         dolares: "💵 Dolares",   
         diamond: "💎 Diamante",   
         joincount: "☯️ Token",   
         emerald: "💚 Esmeralda",   
         berlian: "♦️ Joya",   
         kyubi: "🌀 Magia",   
         gold: "👑 Oro",   
         tiketcoin: "🎫 Dorrat Tickers",   
         stamina: "✨ Energía",   
         potion: "🥤 Poción",   
         aqua: "💧 Agua",   
         trash: "🗑 Basura",   
         wood: "🪵 Madera",   
         rock: "🪨 Roca",   
         batu: "🥌 Piedra",   
         string: "🕸️ Cuerda",   
         iron: "⛓️ Hierro",   
         coal: "⚱️ Carbón",   
         botol: "🍶 Botella",   
         kaleng: "🥫 Lata",   
         kardus: "🪧 Cartón",   
         eleksirb: "💡 Electricidad",   
         emasbatang: "〽️ Barra de Oro",   
         emasbiasa: "🧭 Oro Común",   
         rubah: "🦊🌫️ Zorro Grande",   
         sampah: "🗑🌫️ Super Basura",   
         serigala: "🐺🌫️ Super Lobo",   
         kayu: "🛷 Super Madera",   
         sword: "⚔️ Espada",   
         umpan: "🪱 Carnada",   
         healtmonster: "💵 Billetes",   
         emas: "🪅 Piñata",   
         pancingan: "🪝 Gancho",   
         pancing: "🎣 Caña de Pescar",   
         common: "📦 Caja Común",   
         uncoommon: "🥡 Caja Poco Común",   
         mythic: "🗳️ Caja Mítica",   
         pet: "📫 Caja de Mascotas", //?   
         gardenboxs: "💐 Caja de Jardinería", //?   
         legendary: "🎁 Caja Legendaria",   
         anggur: "🍇 Uva",   
         apel: "🍎 Manzana",   
         jeruk: "🍊 Naranja",   
         mangga: "🥭 Mango",   
         pisang: "🍌 Platano",   
         bibitanggur: "🌾🍇 Semillas de uva",   
         bibitapel: "🌾🍎 Semillas de manzana",   
         bibitjeruk: "🌾🍊 Semillas de naranja",   
         bibitmangga: "🌾🥭 Semillas de Mango",   
         bibitpisang: "🌾🍌 Semillas de plátano",   
         centaur: "🐐 Centauro",   
         griffin: "🦅 Ave",   
         kucing: "🐈 Gato",   
         naga: "🐉 Dragón",   
         fox: "🦊 Zorro",   
         kuda: "🐎 Caballo",   
         phonix: "🕊️ Fénix",   
         wolf: "🐺 Lobo",   
         anjing: "🐶 Perro",   
         petFood: "🍖 Alimento para Mascota", //?   
         makanancentaur: "🐐🥩 Comida de Centauro",   
         makanangriffin: "🦅🥩 Comida de Ave",   
         makanankyubi: "🌀🥩 Comida Mágica",   
         makanannaga: "🐉🥩 Comida de Dragón",   
         makananpet: "🍱🥩 Alimentos de mascotas",   
         makananphonix: "🕊️🥩 Comida de Fénix",   
       };   
       let results = Object.keys(emottt)   
         .map((v) => [v, new RegExp(v, "gi")])   
         .filter((v) => v[1].test(string));   
       if (!results.length) return "";   
       else return emottt[results[0][0]];   
     },   
   };   
   global.rpgshopp = {   
     //Tienda   
     emoticon(string) {   
       string = string.toLowerCase();   
       let emotttt = {   
         tarjeta: "💳",   
         exp: "⚡",   
         limit: "💎",   
         diamond: "💎+",   
         bitcoins: "🏵️",   
         dolares: "💵",   
         joincount: "☯️",   
         emerald: "💚",   
         berlian: "♦️",   
         kyubi: "🌀",   
         gold: "👑",   
         tiketcoin: "🎫",   
         stamina: "✨",   
         potion: "🥤",   
         aqua: "💧",   
         trash: "🗑",   
         wood: "🪵",   
         rock: "🪨",   
         batu: "🥌",   
         string: "🕸️",   
         iron: "⛓️",   
         coal: "⚱️",   
         botol: "🍶",   
         kaleng: "🥫",   
         kardus: "🪧",   
         eleksirb: "💡",   
         emasbatang: "〽️",   
         emasbiasa: "🧭",   
         rubah: "🦊🌫️",   
         sampah: "🗑🌫️",   
         serigala: "🐺🌫️",   
         kayu: "🛷",   
         sword: "⚔️",   
         umpan: "🪱",   
         healtmonster: "💵",   
         emas: "🪅",   
         pancingan: "🪝",   
         pancing: "🎣",   
         common: "📦",   
         uncoommon: "🥡",   
         mythic: "🗳️",   
         pet: "📫", //?   
         gardenboxs: "💐", //?   
         legendary: "🎁",   
         anggur: "🍇",   
         apel: "🍎",   
         jeruk: "🍊",   
         mangga: "🥭",   
         pisang: "🍌",   
         bibitanggur: "🌾🍇",   
         bibitapel: "🌾🍎",   
         bibitjeruk: "🌾🍊",   
         bibitmangga: "🌾🥭",   
         bibitpisang: "🌾🍌",   
         centaur: "🐐",   
         griffin: "🦅",   
         kucing: "🐈",   
         naga: "🐉",   
         fox: "🦊",   
         kuda: "🐎",   
         phonix: "🕊️",   
         wolf: "🐺",   
         anjing: "🐶",   
         petFood: "🍖", //?   
         makanancentaur: "🐐🥩",   
         makanangriffin: "🦅🥩",   
         makanankyubi: "🌀🥩",   
         makanannaga: "🐉🥩",   
         makananpet: "🍱🥩",   
         makananphonix: "🕊️🥩",   
       };   
       let results = Object.keys(emotttt)   
         .map((v) => [v, new RegExp(v, "gi")])   
         .filter((v) => v[1].test(string));   
       if (!results.length) return "";   
       else return emotttt[results[0][0]];   
     },   
   };  
  global.multiplier = 999; // Cuanto más alto, más difícil subir de nivel | The higher, The harder levelup 
 global.work = [  
    "Trabajas como cortador de galletas y ganas",  
    "Trabaja para una empresa militar privada, ganando",  
    "Organiza un evento de cata de vinos y obtiene",  
    "Te secuestran y te llevan a un coliseo subterráneo donde luchaste contra monstruos con personas que nunca antes habías conocido. Ganas",  
    "Limpias la chimenea y encuentras",  
    "Desarrollas juegos para ganarte la vida y ganas",  
    "¿Por qué este comando se llama trabajo? Ni siquiera estás haciendo nada relacionado con el trabajo. Sin embargo, ganas",  
    "Trabajaste en la oficina horas extras por",  
    "Trabajas como secuestrador de novias y ganas",  
    "Alguien vino y representó una obra de teatro. Por mirar te dieron",  
    "Compraste y vendiste artículos y Ganaste",  
    "Trabajas en el restaurante de la abuela como cocinera y ganas",  
    "Trabajas 10 minutos en un Pizza Hut local. Ganaste",  
    "Trabajas como escritor(a) de galletas de la fortuna y ganas",  
    "Revisas tu bolso y decides vender algunos artículos inútiles que no necesitas. Resulta que toda esa basura valía",  
    "Ves a alguien luchando por subir una caja a su auto, te apresuras a ayudarlo antes de que se lastime. Después de ayudarlos, amablemente te dan",  
    "Desarrollas juegos para ganarte la vida y ganas",  
    "Ganas un concurso de comer chili picante. ¡El premio es",  
    "Trabajas todo el día en la empresa por",  
    "Ayudas a moderar el grupo de Dorrat por",  
    "Diseñaste un logo para *FG* por",  
    "Moderaste el grupo cuando *DIEGO-OFC* no estaba, el pago fue",  
    "¡Trabajó lo mejor que pudo en una imprenta que estaba contratando y ganó su bien merecido!",  
    "Trabajas como podador de arbustos para *Diego-ofc* y ganas",  
    "La demanda de juegos para dispositivos móviles ha aumentado, por lo que creas un nuevo juego lleno de micro-transacciones. Con tu nuevo juego ganas un total de",  
    "Trabajas como actor de voz para Bob Esponja y te las arreglaste para ganar",  
    "Estabas cultivando y Ganaste",  
    "Trabajas como constructor de castillos de arena y ganas",  
    "Trabajaste y Ganaste",  
    "Trabajas como artista callejera y ganas",  
    "¡Hiciste trabajo social por una buena causa! por tu buena causa Recibiste",  
    "Llevas mujeres a la tienda por",  
    "Trabajas como entrenador personal y ayudas a tus clientes a alcanzar sus metas de fitness. Ganaste",  
    "Participaste en una encuesta de opinión sobre productos y recibiste",  
    "Cuidaste mascotas mientras sus dueños estaban de vacaciones y ganaste",  
    "Realizaste tareas de transcripción para una empresa y ganaste",  
    "Trabajaste como guía turístico en tu ciudad y ganaste",  
    "Proporcionaste servicios de consultoría en línea y ganaste",  
    "Realizaste labores de jardinería y embellecimiento en el vecindario y ganaste",  
    "Participaste en un experimento psicológico y recibiste",  
    "Brindaste clases de música a estudiantes y ganaste",  
    "Realizaste labores de limpieza en casas locales y ganaste",  
    "Trabajaste en la organización de un evento benéfico y ganaste",  
  ]; 
  global.beg = [ 
   "Te conviertes en un experto en encontrar monedas perdidas en los sofás y ganas", 
   "Mendigas en línea ofreciendo consejos sobre cómo evitar las tareas del hogar y ganas", 
   "Organizas una competencia de 'cara de cachorro triste' en la calle y los transeúntes te dan", 
   "Llevas una señal que dice 'Mi unicornio necesita alimentos' y sorprendentemente recolectas", 
   "Decides volverte un mendigo gourmet y pides donaciones para tu 'café imaginario', recaudas", 
   "Ofreces un servicio de 'consejos inútiles' en la acera y la gente te gratifica con", 
   "Pones un sombrero en el suelo y te haces pasar por 'artista del suelo', recaudas", 
   "Te haces pasar por un influencer de la mendicidad en las redes sociales y obtienes", 
   "Mendigas en el parque compartiendo chistes malos y ganas", 
   "Vestido como un caballero en desgracia, pides limosnas en el mercado y logras recolectar", 
   "Ofreces 'historias emocionantes' a cambio de monedas en el parque y ganas", 
   "Vendes aire fresco en una bolsa como un 'producto exclusivo' y obtienes", 
   "Colocas un letrero que dice 'El último de los mendigos Jedi necesita ayuda' y la gente te da", 
   "Mendigas como 'consejero de problemas inexistentes' en la calle y ganas", 
   "Ofreces abrazos virtuales y obtienes donaciones por tu 'calidez'", 
   "Realizas un espectáculo de mímica cómica y la gente te recompensa con", 
   "Vestido como un científico loco, pides 'donaciones para experimentos' y logras recolectar", 
   "Mendigas en una esquina disfrazado de unicornio bailarín y ganas", 
   "Ofreces 'predicciones del futuro gratuitas' y obtienes donaciones por tus imaginarias habilidades adivinatorias", 
   "Pones un letrero que dice 'Mi otro trabajo es mendigar en Marte' y la gente te recompensa con", 
   "Mendigas como 'entrenador de pulgares' para ayudar a las personas a hacer clic más rápido y ganas", 
   "Ofreces 'curas imaginarias' para males inexistentes y obtienes donaciones por tus 'poderes de sanación'", 
   "Llevas una caja de cartón que dice 'Espacio para alquilar en mi caja' y la gente te da", 
   "Mendigas disfrazado de pirata y cuentas historias emocionantes de tus aventuras en alta mar, ganando", 
   "Ofreces 'consejos de estilo' con ropa de segunda mano y obtienes donaciones por tu 'exquisito sentido de la moda'", 
   "Haces una competencia de 'baile torpe' en la calle y ganas", 
 ];

 let file = require.resolve(__filename)  
 fs.watchFile(file, () => {  
 fs.unwatchFile(file) 
 const fileName = path.basename(file) 
 console.log(chalk.greenBright.bold(`Update '${fileName}'.`))  
 delete require.cache[file]  
 require(file)  
 })
