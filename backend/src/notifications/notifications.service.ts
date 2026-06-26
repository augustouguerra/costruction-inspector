import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterTokenDto } from './dto/register-token.dto';

@Injectable()
export class NotificationsService {
  private readonly logger = new Logger(NotificationsService.name);

  constructor(private prisma: PrismaService) {}

  async registerToken(userId: string, dto: RegisterTokenDto) {
    return this.prisma.fcmToken.upsert({
      where: { token: dto.token },
      create: { userId, token: dto.token, platform: dto.platform },
      update: { userId, platform: dto.platform },
    });
  }

  async removeToken(token: string) {
    return this.prisma.fcmToken.delete({ where: { token } });
  }

  async notifyTrade(issueId: string, trade: string, title: string) {
    const tradespeople = await this.prisma.user.findMany({
      where: { role: 'tradesperson', trade: trade as any },
      include: { fcmTokens: true },
    });

    const tokens = tradespeople.flatMap((u) => u.fcmTokens.map((t) => t.token));
    if (tokens.length === 0) return;

    const body = `New ${trade} task: ${title}`;
    const payload = {
      registration_ids: tokens,
      notification: { title: `New ${trade} task`, body: title },
      data: { issue_id: issueId, trade, click_action: 'FLUTTER_NOTIFICATION_CLICK' },
    };

    try {
      const res = await fetch('https://fcm.googleapis.com/fcm/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `key=${process.env.FCM_SERVER_KEY}`,
        },
        body: JSON.stringify(payload),
      });
      const result = await res.json();

      await Promise.all(
        tradespeople.map((u) =>
          u.fcmTokens.length > 0
            ? this.prisma.notificationLog.create({
                data: {
                  issueId,
                  recipientId: u.id,
                  fcmToken: u.fcmTokens[0].token,
                  title: `New ${trade} task`,
                  body,
                  status: 'sent',
                },
              })
            : null,
        ),
      );

      return result;
    } catch (err) {
      this.logger.error('FCM send failed', err);
    }
  }
}
