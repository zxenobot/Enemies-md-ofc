import { youtubeSearch } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `riprova`
try {
let vid = (await youtubeSearch(text)).video[0]
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const urll = 'http://www.youtube.com/watch?v=' + videoId
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]
const buttons = [
{ buttonId: `.ytmp3doc ${urll}`, buttonText: { displayText: '🎵 Audio' }, type: 1 },
{ buttonId: `.ytmp4doc ${urll}`, buttonText: { displayText: '🎥 Video' }, type: 1 },
{ buttonId: `.playlist ${text}`, buttonText: { displayText: 'PIÙ RISULTATI' }, type: 1 }, ] 
let texto1 = `*⌈🔊 𝐏𝐋𝐀𝐘 🔊⌋*\n
📌 Titolo: ${title}
📆 Risale a: ${publishedTime}
⌚ Durata: ${durationH}
👀 Views: ${viewH}`.trim()
let buttonMessage = { "document": { url: "http://wa.me/5219992095479" }, "fileName": 'player yt', "mimetype": 'application/vnd.ms-excel', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "buttons": buttons, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `${title}`, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch(thumbnail)).buffer(), "mediaUrl": `${urll}`, "sourceUrl": `http://github.com/BrunoSobrino/TheMystic-Bot-MD` }}} 
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
} catch {
try {  
let vid2 = await (await fetch(`http://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)).json()
let { videoId, title, views, published, thumbnail } = await vid2.result[0]
const url = 'http://www.youtube.com/watch?v=' + videoId
let ytLink = await fetch(`http://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
let jsonn = await ytLink.json()
let aud = await jsonn.result.audio
let capt = `Titolo: ${title}\nRisale a: ${published}\nViews: ${views}`
const buttons = [{buttonId: `.playlist ${title}`, buttonText: {displayText: 'PIÙ RISULTATI'}, type: 1}]
const buttonMessage = { image: {url: thumbnail}, caption: capt, footer: 'solo un momento', buttons: buttons, headerType: 4 }
let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
conn.sendMessage(m.chat, { document: { url: aud }, mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, {quoted: msg})
} catch {  
throw 'errore'}}}
handler.help = ['playdoc', 'play3'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play3|playdoc?$/i
export default handler
