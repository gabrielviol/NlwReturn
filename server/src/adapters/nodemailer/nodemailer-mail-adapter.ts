import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter"

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "2b10fa40f46611",
      pass: "b771e0473d5c04"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData){
        await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Gabriel Oliveira <gabrielviol00@hotmail.com>',
        subject,
        html: body,            
    });
  }
}