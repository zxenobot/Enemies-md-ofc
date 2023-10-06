import {readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch, rmSync, promises as fs} from 'fs';
import path, {join} from 'path';

const handler = async (m, {conn}, args) => {
  const parentw = conn;
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  const uniqid = `${who.split`@`[0]}`;

  if (global.conn.user.jid !== conn.user.jid) {
    return;
  } else {
    await conn.sendMessage(m.chat, {text: 'ok'}, {quoted: m});
  }

  try {
    const sessionPath = './MysticSession/';
    const files = await fs.readdir(sessionPath);
    for (const file of files) {
      await fs.unlink(path.join(sessionPath, file));
    };
  } catch (err) {
    return;
  }
};

handler.help = ['deletebot'];
handler.tags = ['jadibot'];
handler.command = /^(fix)$/i;
handler.owner = true;
export default handler;