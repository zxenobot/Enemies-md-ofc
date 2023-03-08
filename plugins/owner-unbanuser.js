let handler = async (m, { conn, text}) => {
if (!text) throw 'chi? tagga qualcuno'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw 'chi? tagga qualcuno'
let users = global.db.data.users
users[who].banned = false
conn.reply(m.chat, `sbloccato con successo`, m)
}
handler.help = ['unbanuser']
handler.tags = ['owner']
handler.command = /^unbanuser$/i
handler.rowner = true
export default handler
