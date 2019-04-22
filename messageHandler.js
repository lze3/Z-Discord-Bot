Client.on("message", (message) => {
    if (message.channel.name.includes("commands")) {
        message.channel.bulkDelete(100).catch(err => console.log(err.toString()))
    }
})