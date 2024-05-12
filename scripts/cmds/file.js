const fs = require('fs');

module.exports = {
  config: {
    name: "file",
    version: "1.0",
    author: "OtinXShiva",
    countDown: 5,
    role: 0,
    shortDescription: "Send bot script",
    longDescription: "Send bot specified file ",
    category: "owner",
    guide: "{pn} file name. Ex: .{pn} filename"
  },

  onStart: async function ({ message, args, api, event }) {
    const permission = ["100089690164634"];
    if (!permission.includes(event.senderID)) {
      return api.sendMessage("💢dєsσlé sαuf 巛ᗰᗩᗪᗩᖇᗩ ᑌᑕᕼIᗯᗩ〖ホ〗pєut utulísєr cєttє cσmmαndє⌨", event.threadID, event.messageID);
    }
    
    const fileName = args[0];
    if (!fileName) {
      return api.sendMessage("svp mαítrє dσnnєr mσí justє lє nσm du fíchєr❖.", event.threadID, event.messageID);
    }

    const filePath = __dirname + `/${fileName}.js`;
    if (!fs.existsSync(filePath)) {
      return api.sendMessage(`dєsσlєr 😔 cєttє cσmmαmdє n'єхístє pαs [✖] dαns mєs 𝐜𝐦𝐝𝐬 : ${fileName}.js`, event.threadID, event.messageID);
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    api.sendMessage({ body: fileContent }, event.threadID);
  }
};
