const handler = async (m, {conn, participants, usedPrefix, command, isAdmin}) => {
  if (!m.mentionedJid[0] && !m.quoted) return;
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
  else who = m.chat;
  const users = global.db.data.users;
  users[who].muto = true;
var oiko = `@${who.split('@')[0]} mutato/a ✓`
  m.reply(oiko, null, { mentions: [who] });
};
handler.command = /^muta$/i;
handler.admin = true;
export default handler;

