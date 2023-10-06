const handler = async (m, {conn, participants, usedPrefix, command, isAdmin}) => {
  if (!m.mentionedJid[0] && !m.quoted) return;
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
  else who = m.chat;
  const users = global.db.data.users;
  users[who].muto = false;
var oiko = `@${who.split('@')[0]} smutato/a ✓`
  m.reply(oiko, null, { mentions: [who] });
};
handler.command = /^smuta$/i;
handler.admin = true;
export default handler;