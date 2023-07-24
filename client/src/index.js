const { faker } = require('@faker-js/faker');
const axios = require("axios");

async function main() {

    const user = {
        name: faker.person.fullName(),
        email: faker.internet.email().toLowerCase(),
        gender: faker.person.gender(),
        age: Math.ceil((Math.random() * 100))
    }

    /*
    * user: { name: string, email: string, gender: string, age: number }
    * */

    const rest = await axios.post("http://localhost:3000", user);

}

main()


