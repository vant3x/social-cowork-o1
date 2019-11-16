const nodemailer = require('nodemailer');
const juice = require('juice');
const htmlToText = require('html-to-text');
const util = require('util');
const emailConfig = require('../config/email');

let transport = nodemailer.createTransport({
    host: emailConfig.host,
    port: emailConfig.port,
    auth: {
        user: emailConfig.user,
        pass: emailConfig.pass
    }
});

let mailOptions = {
    from: 'Social Cowork <no-reply@socialcowork.com>',
    to: 'correo@correo.com',
    subject: "Reestablecer Password",
    text: "Hola, Yuli",
    html: "<b>Hola, Yuli</b>"
};

transport.sendMail(mailOptions);