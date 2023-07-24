const { MongoClient } = require('mongodb');
const {publish} = require("./publisher");

async function main() {

    const dbOptions = {
        url: "mongodb://localhost:27017/",
        db: {
            name: "nup_app",
            collections: {
                logs: "logs",
                users: "users"
            }
        }
    }

    const client = new MongoClient(dbOptions.url);

    await client.connect();
    console.log('Connected successfully to server');

    const db = client.db(dbOptions.db.name);

    const logsCol = db.collection(dbOptions.db.collections.logs);
    const usersCol = db.collection(dbOptions.db.collections.users);

    return {
        logsCol,
        usersCol,
        client
    }

}

async function saveToMongo(content) {

    /*
    * user: { name: string, email: string, gender: string, age: number }
    * */

    const { usersCol, client } = await main();

    const { insertedId } = await usersCol.insertOne(content);

    await client.close();

    publish(JSON.stringify({ ...content, insertedId }));

}


module.exports.saveToMongo = saveToMongo;
