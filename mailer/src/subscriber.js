const Redis = require("ioredis");
const {mailer} = require("./mailer");

module.exports.subscribe = function() {

    const redis = new Redis();

    redis.subscribe("nup_app_channel", (err) => {
        if (err) console.log(err);
    })

    redis.on("message", async (ch, msg) => {

        await mailer(msg);

    })

}

