const Redis = require("ioredis");

const redis = new Redis();

function publish(userId) {
    /*
    * userId: number
    *
    * */


    redis.publish("nup_app_channel", String(userId));

}

module.exports.publish = publish;
