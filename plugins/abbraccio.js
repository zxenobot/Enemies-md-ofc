let handler = async (m, { conn, command, text }) => {
let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
let love = `*@${m.sender.split('@')[0]} ha abbracciato @${who.split('@')[0]} 🤗*`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(abbraccio)$/i
export default handler
