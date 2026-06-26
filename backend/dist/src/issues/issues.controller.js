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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuesController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const issues_service_1 = require("./issues.service");
const create_issue_dto_1 = require("./dto/create-issue.dto");
const update_status_dto_1 = require("./dto/update-status.dto");
const add_comment_dto_1 = require("./dto/add-comment.dto");
let IssuesController = class IssuesController {
    issuesService;
    constructor(issuesService) {
        this.issuesService = issuesService;
    }
    findByRoom(roomId) {
        return this.issuesService.findByRoom(roomId);
    }
    create(req, dto) {
        return this.issuesService.create(req.user.id, dto);
    }
    findOne(id) {
        return this.issuesService.findOne(id);
    }
    updateStatus(id, dto) {
        return this.issuesService.updateStatus(id, dto);
    }
    remove(id) {
        return this.issuesService.remove(id);
    }
    processAudio(req, id, file) {
        return this.issuesService.processAudio(id, req.user.id, file);
    }
    addPhoto(req, id, file) {
        return this.issuesService.addPhoto(id, req.user.id, file);
    }
    getPhotos(id) {
        return this.issuesService.getPhotos(id);
    }
    addComment(req, id, dto) {
        return this.issuesService.addComment(id, req.user.id, dto);
    }
};
exports.IssuesController = IssuesController;
__decorate([
    (0, common_1.Get)('rooms/:roomId/issues'),
    __param(0, (0, common_1.Param)('roomId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IssuesController.prototype, "findByRoom", null);
__decorate([
    (0, common_1.Post)('issues'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_issue_dto_1.CreateIssueDto]),
    __metadata("design:returntype", void 0)
], IssuesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('issues/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IssuesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('issues/:id/status'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_status_dto_1.UpdateStatusDto]),
    __metadata("design:returntype", void 0)
], IssuesController.prototype, "updateStatus", null);
__decorate([
    (0, common_1.Delete)('issues/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IssuesController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('issues/:id/process-audio'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('audio', { storage: (0, multer_1.memoryStorage)() })),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", void 0)
], IssuesController.prototype, "processAudio", null);
__decorate([
    (0, common_1.Post)('issues/:id/photos'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('photo', { storage: (0, multer_1.memoryStorage)() })),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", void 0)
], IssuesController.prototype, "addPhoto", null);
__decorate([
    (0, common_1.Get)('issues/:id/photos'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IssuesController.prototype, "getPhotos", null);
__decorate([
    (0, common_1.Post)('issues/:id/comments'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, add_comment_dto_1.AddCommentDto]),
    __metadata("design:returntype", void 0)
], IssuesController.prototype, "addComment", null);
exports.IssuesController = IssuesController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [issues_service_1.IssuesService])
], IssuesController);
//# sourceMappingURL=issues.controller.js.map