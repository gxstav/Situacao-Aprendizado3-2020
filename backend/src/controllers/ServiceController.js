const nodemailer = require('nodemailer')
const ses = require('nodemailer-ses-transport')
// const aws = require('aws-sdk')
const twilio = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_TOKEN)
module.exports = {
    async mailer(request, response) {
        const { email, text, subject, receiver } = request.body
        
        // aws.config.update({
        //     accessKeyId: process.env.AWS_ACCESS_KEY,
        //     secretAccessKey: process.env.AWS_SECRET,
        //     region: process.env.AWS_REGION
        // });

        const transporter = nodemailer.createTransport(ses({
            accessKeyId: process.env.AWS_ACCESS_KEY,
            secretAccessKey: process.env.AWS_SECRET,
            region: process.env.AWS_REGION
        }))

        // const transporter = nodemailer.createTransport({
        //     SES: new aws.SES({
        //       apiVersion: '2010-12-01'
        //     })
        //   });

        const info = await transporter.sendMail({
            from: email,
            to: receiver,
            subject: `Novo voluntário no projeto '${decodeURI(subject)}'`, 
            text: decodeURI(text), 
            html: `<p>${decodeURI(text)}</p>`
          });

        if (info.messageId) {
            return response.status(200).json({ message: 'E-mail enviado para a ONG.' })
        }
        return response.status(200).json({ message: 'E-mail enviado para a ONG.' })
    },

    async messenger(request, response) {
        const { phone, phoneText, receiver } = request.body
        twilio.messages.create({
                from: `whatsapp:+55${phone}`,
                body: phoneText,
                to: `whatsapp:+55${receiver}`
            })
        .then(message => {
            console.log(message.sid)
            return response.status(200).json({ message: 'Mensagem enviada para ONG.' })
        })
        return response.status(200).json({ message: 'Mensagem enviada para ONG.' })
    }
}