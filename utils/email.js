const nodemailer = require('nodemailer');
const pug = require('pug') 

class sendEmail {


    mailOptions = {
        from: `Katleho Makhoba <${process.env.EMAIL_USERNAME}>`,
        to: '',
        subject: '',
        html: '',
        text: ''
    }

    constructor(user, url) {
        this.mailOptions.to = user.email;
        this.name = user.name;
        this.url = url;
    }
    createTransport() {
        return nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD
            }

            //Activate in Gmail "less secure app" options
        })
    }


    async send(template, subject){
        //1) render html based on pug template
        const html = pug.renderFile(`${__dirname}/../public/views/${template}.pug`, {
            name: this.name,
            url: this.url,
            subject
        });

        this.mailOptions.subject = subject;
        this.mailOptions.html = html;

        await this.createTransport().sendMail(this.mailOptions);
    }

    async sendHello(){
        await this.send('hello', 'Send email template');
    }


}

module.exports = sendEmail;