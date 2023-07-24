const fs = require("fs");
const path = require("path");
const { faker } = require("@faker-js/faker");

module.exports.contractGen = function(user) {

    /*
    * user: { name: string, email: string, gender: string, age: number }
    * */

    const pt = path.resolve(
        process.cwd(), "contracts", `${user.name}@${new Date().getTime()}.txt`
    )

    const contract = faker.lorem.lines({ min: 5, max: 15 })

    const doc = Object.values(user).toString() + "\n" + contract;

    fs.writeFileSync(pt, doc);
}