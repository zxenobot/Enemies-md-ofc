let linkRegex = /http/i
export async function before(m, { isAdmin, isBotAdmin, text }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const play1 = `ytmp3`
const play2 = `ytmp4`
if (chat.antiLink && isGroupLink && !isAdmin) {
if (m.text.includes(play1)) return
if (m.text.includes(play2)) return
if (isBotAdmin) {
const linkThisGroup = `chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}    
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
let responseb = await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
if (responseb[0].status === "404") return
} else if (!bot.restrict) return 
}
return !0
}
