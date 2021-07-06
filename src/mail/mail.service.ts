import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
    constructor(private mailerService: MailerService){}

    async sendUserConfirmation(){
        return await this.mailerService.sendMail({
            to: "geniushkr81@gmail.com",
            subject: 'Welcome to Nice App Confirm your Email',
            
        })
    }
}
