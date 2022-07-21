//═══════════════════════════════════════════════════════//
//
//                              𝙶𝙾𝙹𝙾-𝚂𝙰𝚃𝙾𝚁𝚄 𝓫𝔂 𝓷𝓮𝔁𝓾𝓼𝓝𝔀
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//global api
global.fbapi = 'dd79-1aeb-21a3' // Facebook download 2 api

global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

//customize settings\\
global.owner = ['94763427338']
global.premium = ['94763427338']
global.ownernomer = '94763427338'
global.ownername = 'VIHANGA YT'
global.botname = 'ᴠɪʜͥᴀɴͣɢͫᴀ ᴍᴅ'
global.footer = 'ᴠɪʜͥᴀɴͣɢͫᴀ ᴍᴅ.'
global.ig = 'https://github.com/vihangayt0'
global.region = 'Sri Lanka, Southern Province, Hambanthota'
global.sc = 'https://github.com/vihangayt0'
global.myweb = 'https://chat.whatsapp.com/FAoZjlZ1i7LBKY4EfsIorz'
global.packname = 'ᴠɪʜͥᴀɴͣɢͫᴀ ᴍᴅ'
global.author = 'ᴠɪʜͥᴀɴͣɢͫᴀ ᴍᴅ'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '🔮Done ✓',
    admin: 'මේ කමාන්ඩ් එක ඇඩ්මින්ලට විතරයි සගෝ🥲',
    botAdmin: 'මාව ඇඩ්මින් කෙනෙක් කරන්න අයියෝ!..මාව ඇඩ්මින් කෙනෙක් කරන්න අයියෝ!..',
    owner: 'This Feature Is Only For Owner!',
    group: 'ගෲප් වලදි විතරයි වැඩ!',
    private: 'ඉන්බොක්ස් චැට් වලදි විතරයි වැඩ!',
    bot: 'මේ කමාන්ඩ් එක බොට් ට විතරයි',
    wait: 'ටිකක් ඉන්ටකෝ 🥲...',
    error: 'Error! Maybe Api Key Is Expired🤔!',
    endLimit: 'ඔයාගෙ ඩේලි ලිමිට් එක පැනලා සගෝ..පැය 12කින් ලිමිට් එක රීසෙට් වෙනව එතකොට පුලුවන් ආයෙත් බොට්ගෙන් වැඩ කරන්න..',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/gojo.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
