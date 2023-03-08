import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict } = global.db.data.settings[conn.user.jid] || {}
const { autoread } = global.opts
let old = performance.now()
let neww = performance.now()
let speed = neww - old
let info = `
🛡️⃟🏴‍☠𝐌ΞИ𝐔🛡️⃟🏴‍☠

┌──⭓ *Gruppo*
│⭔ .link
│⭔ .kick / addio / ban @
│⭔ .kicknum +92
│⭔ .listanum +1
│⭔ .attiva/disabilita benvenuto
│⭔ .attiva/disabilita antilink
│⭔ .attiva/disabilita antilinkhttps
│⭔ .attiva/disabilita detect
│⭔ .attiva/disabilita antielimina
│⭔ .attiva/disabilita antiviewonce
│⭔ .attiva/disabilita antitrava
│⭔ .attiva/disabilita antipaki
│⭔ .attiva/disabilita modoadmin
│⭔ .reimposta
│⭔ .hidetag 
│⭔ .tagall / marcar
│⭔ .promuovi / mettiadmin @
│⭔ .retrocedi / togliadmin @
│⭔ .gruppo aperto / chiuso
│⭔ .setwelcome
│⭔ .setbye
│⭔ .inattivi
│⭔ .admins
│⭔ .infogruppo
│⭔ .ping
│⭔ .menu
└───────⭓

▀▄▀▄▀▄ 🛡️⃟🏴‍☠️ ▄▀▄▀▄▀

┌──⭓ *Media*
│⭔ .attp (testo)
│⭔ .ttp (testo)
│⭔ .gtts (testo)
│⭔ .dado
│⭔ .sticker / s
│⭔ .wm
│⭔ .emojimix (emoji+emoji)
│⭔ .play (canzone)
│⭔ .playdoc (canzone)
│⭔ .pinterest / cerca
│⭔ .whatmusic 
│⭔ .qrcode (testo)
│⭔ .styletext (testo)
│⭔ .destrava
│⭔ .tovideo
│⭔ .togif
│⭔ .togifaud
│⭔ .tomp3
│⭔ .toaudio
│⭔ .toptt
│⭔ .tourl
└───────⭓

▀▄▀▄▀▄ 🛡️⃟🏴‍☠️ ▄▀▄▀▄▀

┌──⭓ *Speciali*
│⭔ .gay @
│⭔ .puttana @
│⭔ .puttaniere @
│⭔ .lesbica @
│⭔ .dox @
│⭔ .topgays
│⭔ .topnazi
│⭔ .calc (1+1)
│⭔ .fusoorario
│⭔ .abdul
│⭔ .drix
│⭔ .roax
│⭔ .poison
│⭔ .maschere
│⭔ .drasy
│⭔ .polter
│⭔ .fidcat
│⭔ .giada
│⭔ .meli
│⭔ .autoadmin
└───────⭓

▀▄▀▄▀▄ 🛡️⃟🏴‍☠️ ▄▀▄▀▄▀

┌──⭓ *Proprietario*
│⭔ .attiva/disabilita restrict
│⭔ .attiva/disabilita antiprivato
│⭔ .banuser @
│⭔ .unbanuser @
│⭔ .block @
│⭔ .unblock @
│⭔ .out
│⭔ .cleartmp
│⭔ .blocklist
│⭔ .banlist
│⭔ .banchat
│⭔ .unbanchat
└───────⭓
`.trim() 
conn.reply(m.chat, info, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝙸𝙽𝙵𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃',
body: 'ᴛʜᴇ ᴍʏsᴛɪᴄ ﹣ ʙᴏᴛ',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/BrunoSobrino/TheMystic-Bot-MD`}}})
}
handler.help = ['menu']
handler.tags = ['menu']
handler.command = /^(menu)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}