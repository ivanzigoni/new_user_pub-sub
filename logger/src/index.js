const Redis = require("ioredis");
const fs = require("fs");
const path = require("path");

function main() {


    const redis = new Redis();

    redis.subscribe("nup_app_channel", (e) => {
        if(e) console.log(e);
        console.log("connected to nup channel")
    })


    redis.on("message", (ch, msg) => {

        fs.writeFileSync(
            path.resolve(
                process.cwd(), "logs", `${new Date().getTime()}.txt`
            ),
            "user of name " + JSON.parse(msg).name + " created"
        )

    })


}

main();
