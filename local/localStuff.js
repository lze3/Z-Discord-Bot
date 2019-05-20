Client.on("message", async (message) => {
    if (message.guild.id === "541026385649729536") {
        if (message.channel.id === "544999797665431562") {
            console.log("wew!")
            if (message.content.includes("development")) {
                console.log("wew!!")
                await message.react("🛠")
            }
        }
    }
})

fs.readdir("./commands/local", (err, files) => {
    let moduleName = "Local"; // Module name

    if (err) throw new Error("ERROR: [ " + err.toString() + " ]."); // 
    let jsFile = files.filter(f => f.split(".").pop() === "js")
    
    if (files.length <= 0) {
        console.log("ERROR: No local commands loaded.")
        return;
    }

    jsFile.forEach((f, i) => {
        let props = require(`../commands/local/${f}`);
        if (props.help.active || props.help.active === null) {
            Client.commands.set(props.help.name, props)
        }

        if (props.help.active === null || props.help.active === undefined) {
            console.log(`[${f}] This command does not have an 'active' boolean in the help section - WARN.`)
            console.log("")
        }
    })
    console.log(`[${moduleName}] module loaded.`)
});