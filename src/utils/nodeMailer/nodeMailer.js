const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");


class SendMail{

    static transporter = nodemailer.createTransport({
        service: "gmail",
        user: "smto.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "criscoder2023@gmail.com",
            pass: "bcffchezzhqutgai"
        }
    });

    static restorePass = (receiver) => {
    
        const token = jwt.sign({email: receiver}, "secretMail", {expiresIn: "1h"});
    
    
        let link = `http://localhost:8080/restorePassword/${token}`;
        
        const mailOptions = {
            from: "criscoder2023@gmail.com",
            to: receiver,
            subject: "Prueba",
            html: `<a href=${link}><input type="button" value="Click para recuperar contraseña"></a>`
        };
        
        this.transporter.sendMail(mailOptions, (error, info) => {
            if(error) return console.log(error);
            console.log(`Mail enviado: ${info.response}`)
        })
    }
    
    static inactiveUser = (receiver) => {
        const mailOptions = {
            from: "criscoder2023@gmail.com",
            to: receiver,
            subject: "Prueba",
            text: "Su cuenta fue desactivada por inactividad"
        };
        
        this.transporter.sendMail(mailOptions, (error, info) => {
            if(error) return console.log(error);
            console.log(`Mail enviado: ${info.response}`)
        })

    }

    static productDeleted = (receiver, product) => {
        const mailOptions = {
            from: "criscoder2023@gmail.com",
            to: receiver,
            subject: "Prueba",
            text: `Su producto ${product} fue eliminado de la tienda`
        };
        
        this.transporter.sendMail(mailOptions, (error, info) => {
            if(error) return console.log(error);
            console.log(`Mail enviado: ${info.response}`)
        })

    }
}

module.exports = SendMail;
