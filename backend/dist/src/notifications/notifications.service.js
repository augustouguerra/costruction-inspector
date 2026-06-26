"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NotificationsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let NotificationsService = NotificationsService_1 = class NotificationsService {
    prisma;
    logger = new common_1.Logger(NotificationsService_1.name);
    constructor(prisma) {
        this.prisma = prisma;
    }
    async registerToken(userId, dto) {
        return this.prisma.fcmToken.upsert({
            where: { token: dto.token },
            create: { userId, token: dto.token, platform: dto.platform },
            update: { userId, platform: dto.platform },
        });
    }
    async removeToken(token) {
        return this.prisma.fcmToken.delete({ where: { token } });
    }
    async notifyTrade(issueId, trade, title) {
        const tradespeople = await this.prisma.user.findMany({
            where: { role: 'tradesperson', trade: trade },
            include: { fcmTokens: true },
        });
        const tokens = tradespeople.flatMap((u) => u.fcmTokens.map((t) => t.token));
        if (tokens.length === 0)
            return;
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
            await Promise.all(tradespeople.map((u) => u.fcmTokens.length > 0
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
                : null));
            return result;
        }
        catch (err) {
            this.logger.error('FCM send failed', err);
        }
    }
};
exports.NotificationsService = NotificationsService;
exports.NotificationsService = NotificationsService = NotificationsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], NotificationsService);
//# sourceMappingURL=notifications.service.js.map