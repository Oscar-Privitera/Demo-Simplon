const txtAnim = document.querySelector('h1');

new Typewriter(txtAnim , {
    deleteSpeed:50
    
})
.changeDelay(50)
.typeString('<span style="color:white;">Moi c\' est Oscar Privitera</span>')
.pauseFor(300)
.typeString('<strong><span style="color:white;">, apprentis développeur</span></strong> !')
.pause(800)
.deleteChars(2)
.typeString('<span style="color: #ffa500;"> HTML !</span> ')
.pauseFor(800)
.deleteChars(7)
.typeString('<span style="color:#3485ff ;"> CSS !</span> ')
.pauseFor(800)
.deleteChars(7)
.typeString('<span style="color: #ea93ff;"> PHP !</span> ')
.pauseFor(800)
.deleteChars(6)
.typeString('<span style="color:#ffa500;"> HTML, </span> <span style="color:#3485ff;"> CSS, </span> <span style="color:#ea93ff;"> PHP </span> <span style="color:#fff;"> !</span>')
.start()


