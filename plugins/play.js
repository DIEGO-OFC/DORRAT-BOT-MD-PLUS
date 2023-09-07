const {youtubedl, youtubedlv2} = require("@bochilteam/scraper");
const search = require("yt-search");
const {generateWAMessageFromContent} = require("@whiskeysockets/baileys");
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, searchAndFilterVideos, formatNumber} = require('../libs/fuctions.js')

const play = async (conn, m, command, text) => {

  if (!text) return m.reply(`Ejemplo: *${prefix + command}* la mamá de liam cantando`)

  const vid = await searchAndFilterVideos(text);
  if (!vid) throw "Video Not Found, Try Another Title";

  const {title, thumbnail, timestamp, views, ago, url} = vid;
  const dla = "Downloading audio please wait";
  const dls = "Downloading audio succes";
  const captvid = `📺 *Title:* ${title ? title : 'tidak diketahui'}
⌛ *Duration:* ${timestamp ? timestamp : 'tidak diketahui'}
👀 *Views:* ${formatNumber(views) ? formatNumber(views) : 'tidak diketahui'}
📅 *Upload:* ${ago ? ago : 'tidak diketahui'}
🔗 *Link:* ${url}

`;
  const ytthumb = imagen1
  const msg = await generateWAMessageFromContent(
    m.chat,
    {
      extendedTextMessage: {
        text: captvid,
        jpegThumbnail: ytthumb,
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
            body: dla,
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: url,
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceId: "WudySoft",
            sourceType: "PDF",
            previewType: "PDF",
            sourceUrl: url,
            thumbnail: ytthumb,
            thumbnailUrl: thumbnail,
            title: "©-SħȺđøwɃøŧ-V༂̆̆̆̆̆̆̆̆̆̆̆̊̆̆̆̆̆̂̆̆̆̂̆̆̆̆̆̆̆̊̆̆̆̆̆̆̆̆̆̆̆̆̆̆̆̆̆̆̆̆̆̆̂̊̆̆̆̆̆̆̆̆̂̆̆̆̆̆̆̆̆̆̆̆̆̆̆̆̆̆̆̆5-MĐ"
          }
        }
      },
    },
    {
      quoted: m
    }
  );
  await conn.relayMessage(m.chat, msg.message, {});
  const yt = await youtubedl(url);
  if (command == "playmp4") {
    const link = await yt.video["144p"].download() ||
      await yt.video["240p"].download() ||
      await yt.video["360p"].download() ||
      await yt.video["480p"].download() ||
      await yt.video["720p"].download() ||
      await yt.video["1080p"].download() ||
      await yt.video["auto"].download();
    const doc = {
      video: {
        url: link
      },
      mimetype: "video/mp4",
      caption: title,
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          mediaType: 2,
          mediaUrl: url,
          title: title,
          body: dls,
          sourceUrl: url,
          thumbnail: ytthumb
        }
      }
    };

    await conn.sendMessage(m.chat, doc, {
      quoted: m
    });
  } else {
    const link = await yt.audio["128kbps"].download();
    const doc = {
      audio: {url: link},
      mimetype: "audio/mp4",
      fileName: title,
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          mediaType: 2,
          mediaUrl: url,
          title: title,
          body: dls,
          sourceUrl: url,
          thumbnail: ytthumb
        }
      }
    };

    await conn.sendMessage(m.chat, doc, {
      quoted: m
    });
  }
};

module.exports = { play };