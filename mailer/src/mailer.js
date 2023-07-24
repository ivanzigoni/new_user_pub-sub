require("dotenv").config()
const nodemailer = require("nodemailer");
async function main(msg) {


    const transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: process.env["TRANSPORT_USER"],
            pass: process.env["TRANSPORT_PW"]
        }
    });


    const sentMail = await transport.sendMail({
        from: "app@server.com",
        to: "user@sender.com",
        subject: "Message title",
        html: `<p>${msg.toString()}</p>`
    })

    console.log("mail sent")

}

module.exports.mailer = main
