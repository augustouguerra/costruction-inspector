"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineExtension = exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.NotificationLogScalarFieldEnum = exports.IssueCommentScalarFieldEnum = exports.IssuePhotoScalarFieldEnum = exports.IssueScalarFieldEnum = exports.RoomScalarFieldEnum = exports.ApartmentScalarFieldEnum = exports.FloorScalarFieldEnum = exports.ProjectMemberScalarFieldEnum = exports.ProjectScalarFieldEnum = exports.FcmTokenScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
const runtime = __importStar(require("@prisma/client/runtime/client"));
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.8.0",
    engine: "3c6e192761c0362d496ed980de936e2f3cebcd3a"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    User: 'User',
    FcmToken: 'FcmToken',
    Project: 'Project',
    ProjectMember: 'ProjectMember',
    Floor: 'Floor',
    Apartment: 'Apartment',
    Room: 'Room',
    Issue: 'Issue',
    IssuePhoto: 'IssuePhoto',
    IssueComment: 'IssueComment',
    NotificationLog: 'NotificationLog'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    password: 'password',
    fullName: 'fullName',
    role: 'role',
    trade: 'trade',
    avatarUrl: 'avatarUrl',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.FcmTokenScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    token: 'token',
    platform: 'platform',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ProjectScalarFieldEnum = {
    id: 'id',
    name: 'name',
    address: 'address',
    description: 'description',
    ownerId: 'ownerId',
    coverImageUrl: 'coverImageUrl',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ProjectMemberScalarFieldEnum = {
    projectId: 'projectId',
    userId: 'userId',
    role: 'role',
    joinedAt: 'joinedAt'
};
exports.FloorScalarFieldEnum = {
    id: 'id',
    projectId: 'projectId',
    number: 'number',
    label: 'label',
    createdAt: 'createdAt'
};
exports.ApartmentScalarFieldEnum = {
    id: 'id',
    floorId: 'floorId',
    identifier: 'identifier',
    createdAt: 'createdAt'
};
exports.RoomScalarFieldEnum = {
    id: 'id',
    apartmentId: 'apartmentId',
    name: 'name',
    createdAt: 'createdAt'
};
exports.IssueScalarFieldEnum = {
    id: 'id',
    roomId: 'roomId',
    createdBy: 'createdBy',
    assignedTrade: 'assignedTrade',
    assignedTo: 'assignedTo',
    status: 'status',
    title: 'title',
    description: 'description',
    audioFileUrl: 'audioFileUrl',
    transcriptionRaw: 'transcriptionRaw',
    detectionConfidence: 'detectionConfidence',
    priority: 'priority',
    resolvedAt: 'resolvedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.IssuePhotoScalarFieldEnum = {
    id: 'id',
    issueId: 'issueId',
    storagePath: 'storagePath',
    uploadedBy: 'uploadedBy',
    createdAt: 'createdAt'
};
exports.IssueCommentScalarFieldEnum = {
    id: 'id',
    issueId: 'issueId',
    authorId: 'authorId',
    body: 'body',
    createdAt: 'createdAt'
};
exports.NotificationLogScalarFieldEnum = {
    id: 'id',
    issueId: 'issueId',
    recipientId: 'recipientId',
    fcmToken: 'fcmToken',
    title: 'title',
    body: 'body',
    sentAt: 'sentAt',
    status: 'status'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map