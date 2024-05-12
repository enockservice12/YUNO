const fs = require("fs-extra");

module.exports = {
	config: {
		name: "restart",
		version: "1.0",
		author: "NTKhang",
		countDown: 5,
		role: 2,
		shortDescription: {
			vi: "Khởi động lại bot",
			en: "𝗣𝗹𝗼𝗻𝗴𝗲́ 𝗱𝗮𝗻𝘀 𝗹𝗲 𝗹𝗶𝗺𝗯𝗲 𝗹𝗲 𝗯𝗼𝘁 𝗿𝗲𝗱𝗲́𝗺𝗮𝗿𝗿𝗲"
		},
		longDescription: {
			vi: "Khởi động lại bot",
			en: "🖐| 𝗥𝗲́𝗽𝘂𝘁𝗮𝘁𝗶𝗼𝗻 𝗰𝗲́𝗹𝗲𝘀𝘁𝗲 𝗹𝗲 𝗯𝗼𝘁 𝗿𝗲𝗱𝗲́𝗺𝗮𝗿𝗿𝗲"
		},
		category: "Owner",
		guide: {
			vi: "   {pn}: Khởi động lại bot",
			en: "   {pn}: 🖐 | 𝗥𝗲́𝗽𝘂𝘁𝗮𝘁𝗶𝗼𝗻 𝗰𝗲́𝗹𝗲𝘀𝘁𝗲 𝗹𝗲 𝗯𝗼𝘁 𝗿𝗲𝗱𝗲́𝗺𝗮𝗿𝗿𝗲",
				
		}
	},

	langs: {
		vi: {
			restartting: "🔄 | Đang khởi động lại bot..."
		},
		en: {
			restartting: "╔╦══• •✠•❀•✠ • •══╦╗   🔌❚ 𝙍𝙚𝙙𝙚𝙢𝙖𝙧𝙖𝙜𝙚 𝙙𝙪 𝙗𝙤𝙩     ■■■□□ 60% ⚪🔵🔴 ╚╩══• •✠•❀•✠ • •══╩╝ "
		}
	},

	onLoad: function ({ api }) {
		const pathFile = `${__dirname}/tmp/restart.txt`;
		if (fs.existsSync(pathFile)) {
			const [tid, time] = fs.readFileSync(pathFile, "utf-8").split(" ");
			api.sendMessage(`●▬▬▬▬๑۩۩๑▬▬▬▬● 𝄞 ❚ 𝙍𝙚𝙙𝙚𝙢𝙖𝙧𝙖𝙜𝙚 𝙩𝙚𝙧𝙢𝙞𝙣é ■■■■■ 100%\n𓃵 ❚ 𝙏𝙚𝙢𝙥𝙨: ${(Date.now() - time) / 1000}s`, tid);
			fs.unlinkSync(pathFile);
		}
	},

	onStart: async function ({ message, event, getLang }) {
		const pathFile = `${__dirname}/tmp/restart.txt`;
		fs.writeFileSync(pathFile, `${event.threadID} ${Date.now()}`);
		await message.reply(getLang("restartting"));
		process.exit(2);
	}
};
