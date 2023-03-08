let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true
m.reply('chat bloccata con successo')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat$/i
handler.rowner = true
export default handler
