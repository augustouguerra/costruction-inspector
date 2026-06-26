import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: any;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: any;
export declare const JsonNull: any;
export declare const AnyNull: any;
export declare const ModelName: {
    readonly User: "User";
    readonly FcmToken: "FcmToken";
    readonly Project: "Project";
    readonly ProjectMember: "ProjectMember";
    readonly Floor: "Floor";
    readonly Apartment: "Apartment";
    readonly Room: "Room";
    readonly Issue: "Issue";
    readonly IssuePhoto: "IssuePhoto";
    readonly IssueComment: "IssueComment";
    readonly NotificationLog: "NotificationLog";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: any;
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly password: "password";
    readonly fullName: "fullName";
    readonly role: "role";
    readonly trade: "trade";
    readonly avatarUrl: "avatarUrl";
    readonly phone: "phone";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const FcmTokenScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly token: "token";
    readonly platform: "platform";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FcmTokenScalarFieldEnum = (typeof FcmTokenScalarFieldEnum)[keyof typeof FcmTokenScalarFieldEnum];
export declare const ProjectScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly address: "address";
    readonly description: "description";
    readonly ownerId: "ownerId";
    readonly coverImageUrl: "coverImageUrl";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum];
export declare const ProjectMemberScalarFieldEnum: {
    readonly projectId: "projectId";
    readonly userId: "userId";
    readonly role: "role";
    readonly joinedAt: "joinedAt";
};
export type ProjectMemberScalarFieldEnum = (typeof ProjectMemberScalarFieldEnum)[keyof typeof ProjectMemberScalarFieldEnum];
export declare const FloorScalarFieldEnum: {
    readonly id: "id";
    readonly projectId: "projectId";
    readonly number: "number";
    readonly label: "label";
    readonly createdAt: "createdAt";
};
export type FloorScalarFieldEnum = (typeof FloorScalarFieldEnum)[keyof typeof FloorScalarFieldEnum];
export declare const ApartmentScalarFieldEnum: {
    readonly id: "id";
    readonly floorId: "floorId";
    readonly identifier: "identifier";
    readonly createdAt: "createdAt";
};
export type ApartmentScalarFieldEnum = (typeof ApartmentScalarFieldEnum)[keyof typeof ApartmentScalarFieldEnum];
export declare const RoomScalarFieldEnum: {
    readonly id: "id";
    readonly apartmentId: "apartmentId";
    readonly name: "name";
    readonly createdAt: "createdAt";
};
export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum];
export declare const IssueScalarFieldEnum: {
    readonly id: "id";
    readonly roomId: "roomId";
    readonly createdBy: "createdBy";
    readonly assignedTrade: "assignedTrade";
    readonly assignedTo: "assignedTo";
    readonly status: "status";
    readonly title: "title";
    readonly description: "description";
    readonly audioFileUrl: "audioFileUrl";
    readonly transcriptionRaw: "transcriptionRaw";
    readonly detectionConfidence: "detectionConfidence";
    readonly priority: "priority";
    readonly resolvedAt: "resolvedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type IssueScalarFieldEnum = (typeof IssueScalarFieldEnum)[keyof typeof IssueScalarFieldEnum];
export declare const IssuePhotoScalarFieldEnum: {
    readonly id: "id";
    readonly issueId: "issueId";
    readonly storagePath: "storagePath";
    readonly uploadedBy: "uploadedBy";
    readonly createdAt: "createdAt";
};
export type IssuePhotoScalarFieldEnum = (typeof IssuePhotoScalarFieldEnum)[keyof typeof IssuePhotoScalarFieldEnum];
export declare const IssueCommentScalarFieldEnum: {
    readonly id: "id";
    readonly issueId: "issueId";
    readonly authorId: "authorId";
    readonly body: "body";
    readonly createdAt: "createdAt";
};
export type IssueCommentScalarFieldEnum = (typeof IssueCommentScalarFieldEnum)[keyof typeof IssueCommentScalarFieldEnum];
export declare const NotificationLogScalarFieldEnum: {
    readonly id: "id";
    readonly issueId: "issueId";
    readonly recipientId: "recipientId";
    readonly fcmToken: "fcmToken";
    readonly title: "title";
    readonly body: "body";
    readonly sentAt: "sentAt";
    readonly status: "status";
};
export type NotificationLogScalarFieldEnum = (typeof NotificationLogScalarFieldEnum)[keyof typeof NotificationLogScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
