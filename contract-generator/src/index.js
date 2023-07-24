const Redis = require("ioredis");
const {contractGen} = require("./contract-gen");

const redis = new Redis();

function main() {

    redis.subscribe("nup_app_channel", (err, msg) => {
        if (err) console.log(err);
    })

    redis.on("message", (ch, msg) => {

        console.log("message from " + ch)

        contractGen(JSON.parse(msg))
    })


}

main();
