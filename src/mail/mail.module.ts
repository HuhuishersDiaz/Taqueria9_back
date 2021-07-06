import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { MailService } from './mail.service';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'p3plzcpnl469083.prod.phx3.secureserver.net',
        secure: false,
        auth: {
          user: 'referencias@tutitrueque.com',
          pass: 'Referencias@2021',
        },
      },
      defaults: {
        from: '"No Reply" <noreply@example.com',
      },
    })
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
