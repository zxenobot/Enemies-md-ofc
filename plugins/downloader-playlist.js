import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command, text }) => {
if (!text) throw `riprova`
try {
const { video } = await youtubeSearch(text)
const listSections = []
let teks = [...video ].map(v => {
switch (v.type) {
case 'video': {
listSections.push([`${v.title}`, [
['Video 🎥', `${usedPrefix}ytmp4 ${v.title}`],
['Videodoc 🎥', `${usedPrefix}ytmp4doc`, `${v.title}`],    
['Audio 🎧', `${usedPrefix}ytmp3 ${v.title}`],
['Audiodoc 🎧', `${usedPrefix}ytmp3doc ${v.title}`]
]])
}}}).filter(v => v).join('\n\n========================\n\n')
conn.sendList(m.chat, 'Musica trovata', `musica per: ${args.join(" ")}`, 'scegli una opzione', 'risultati', listSections, m)
} catch {
try {     
let get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)
let get_result2 = get_result.result 
const listSerch = []
const listSerch2 = []
const listSerch3 = []
const listSerch4 = []
let teskd = `Musica per: ${args.join(" ")}`
const sections = [{ title: `|－－－－－{ ａｕｄｉｏ }－－－－－|`, rows: listSerch }, { title: `|－－－－－{ ＶＩＤＥＯ }－－－－－|`, rows: listSerch2 }, { title: `|－－{ ＤＯＣＵＭＥＮＴＯ  ＭＰ３ }－－|`, rows: listSerch3 }, { title: `|－－{ ＤＯＣＵＭＥＮＴＯ  ＭＰ４ }－－|`, rows: listSerch4 }]
for (let x of get_result2) {
listSerch.push({title: x.title, description: null, rowId: `${usedPrefix}ytmp3 http://www.youtube.com/watch?v=${x.videoId}`})
listSerch2.push({title: x.title, description: null, rowId: `${usedPrefix}ytmp4 http://www.youtube.com/watch?v=${x.videoId}`})
listSerch3.push({title: x.title, description: null, rowId: `${usedPrefix}ytmp3doc http://www.youtube.com/watch?v=${x.videoId}`})
listSerch4.push({title: x.title, description: null, rowId: `${usedPrefix}ytmp4doc http://www.youtube.com/watch?v=${x.videoId}`})}
const listMessage = { text: teskd, footer: 'scegli una opzione', title: "Musica trovata", buttonText: "risultati", sections }
conn.sendMessage(m.chat, listMessage, { quoted: m })    
} catch {    
await m.reply('errore')
}}}
handler.command = /^playlist|playlist2$/i
export default handler
async function fetchJson(url, options) {
try {
options ? options : {}
const res = await axios({ method: 'GET', url: url, headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'}, ...options })
return res.data
} catch (err) {
return err
}}
