import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    password: string | null;
    fullName: string | null;
    role: $Enums.UserRole | null;
    trade: $Enums.TradeType | null;
    avatarUrl: string | null;
    phone: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    password: string | null;
    fullName: string | null;
    role: $Enums.UserRole | null;
    trade: $Enums.TradeType | null;
    avatarUrl: string | null;
    phone: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    password: number;
    fullName: number;
    role: number;
    trade: number;
    avatarUrl: number;
    phone: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    fullName?: true;
    role?: true;
    trade?: true;
    avatarUrl?: true;
    phone?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    fullName?: true;
    role?: true;
    trade?: true;
    avatarUrl?: true;
    phone?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    fullName?: true;
    role?: true;
    trade?: true;
    avatarUrl?: true;
    phone?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    email: string;
    password: string;
    fullName: string;
    role: $Enums.UserRole;
    trade: $Enums.TradeType | null;
    avatarUrl: string | null;
    phone: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.UuidFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    password?: Prisma.StringFilter<"User"> | string;
    fullName?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumUserRoleFilter<"User"> | $Enums.UserRole;
    trade?: Prisma.EnumTradeTypeNullableFilter<"User"> | $Enums.TradeType | null;
    avatarUrl?: Prisma.StringNullableFilter<"User"> | string | null;
    phone?: Prisma.StringNullableFilter<"User"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    ownedProjects?: Prisma.ProjectListRelationFilter;
    projectMemberships?: Prisma.ProjectMemberListRelationFilter;
    createdIssues?: Prisma.IssueListRelationFilter;
    assignedIssues?: Prisma.IssueListRelationFilter;
    issuePhotos?: Prisma.IssuePhotoListRelationFilter;
    issueComments?: Prisma.IssueCommentListRelationFilter;
    fcmTokens?: Prisma.FcmTokenListRelationFilter;
    notificationLogs?: Prisma.NotificationLogListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    trade?: Prisma.SortOrderInput | Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    ownedProjects?: Prisma.ProjectOrderByRelationAggregateInput;
    projectMemberships?: Prisma.ProjectMemberOrderByRelationAggregateInput;
    createdIssues?: Prisma.IssueOrderByRelationAggregateInput;
    assignedIssues?: Prisma.IssueOrderByRelationAggregateInput;
    issuePhotos?: Prisma.IssuePhotoOrderByRelationAggregateInput;
    issueComments?: Prisma.IssueCommentOrderByRelationAggregateInput;
    fcmTokens?: Prisma.FcmTokenOrderByRelationAggregateInput;
    notificationLogs?: Prisma.NotificationLogOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    password?: Prisma.StringFilter<"User"> | string;
    fullName?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumUserRoleFilter<"User"> | $Enums.UserRole;
    trade?: Prisma.EnumTradeTypeNullableFilter<"User"> | $Enums.TradeType | null;
    avatarUrl?: Prisma.StringNullableFilter<"User"> | string | null;
    phone?: Prisma.StringNullableFilter<"User"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    ownedProjects?: Prisma.ProjectListRelationFilter;
    projectMemberships?: Prisma.ProjectMemberListRelationFilter;
    createdIssues?: Prisma.IssueListRelationFilter;
    assignedIssues?: Prisma.IssueListRelationFilter;
    issuePhotos?: Prisma.IssuePhotoListRelationFilter;
    issueComments?: Prisma.IssueCommentListRelationFilter;
    fcmTokens?: Prisma.FcmTokenListRelationFilter;
    notificationLogs?: Prisma.NotificationLogListRelationFilter;
}, "id" | "email">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    trade?: Prisma.SortOrderInput | Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    password?: Prisma.StringWithAggregatesFilter<"User"> | string;
    fullName?: Prisma.StringWithAggregatesFilter<"User"> | string;
    role?: Prisma.EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole;
    trade?: Prisma.EnumTradeTypeNullableWithAggregatesFilter<"User"> | $Enums.TradeType | null;
    avatarUrl?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    phone?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    role: $Enums.UserRole;
    trade?: $Enums.TradeType | null;
    avatarUrl?: string | null;
    phone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ownedProjects?: Prisma.ProjectCreateNestedManyWithoutOwnerInput;
    projectMemberships?: Prisma.ProjectMemberCreateNestedManyWithoutUserInput;
    createdIssues?: Prisma.IssueCreateNestedManyWithoutCreatorInput;
    assignedIssues?: Prisma.IssueCreateNestedManyWithoutAssigneeInput;
    issuePhotos?: Prisma.IssuePhotoCreateNestedManyWithoutUploaderInput;
    issueComments?: Prisma.IssueCommentCreateNestedManyWithoutAuthorInput;
    fcmTokens?: Prisma.FcmTokenCreateNestedManyWithoutUserInput;
    notificationLogs?: Prisma.NotificationLogCreateNestedManyWithoutRecipientInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    role: $Enums.UserRole;
    trade?: $Enums.TradeType | null;
    avatarUrl?: string | null;
    phone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ownedProjects?: Prisma.ProjectUncheckedCreateNestedManyWithoutOwnerInput;
    projectMemberships?: Prisma.ProjectMemberUncheckedCreateNestedManyWithoutUserInput;
    createdIssues?: Prisma.IssueUncheckedCreateNestedManyWithoutCreatorInput;
    assignedIssues?: Prisma.IssueUncheckedCreateNestedManyWithoutAssigneeInput;
    issuePhotos?: Prisma.IssuePhotoUncheckedCreateNestedManyWithoutUploaderInput;
    issueComments?: Prisma.IssueCommentUncheckedCreateNestedManyWithoutAuthorInput;
    fcmTokens?: Prisma.FcmTokenUncheckedCreateNestedManyWithoutUserInput;
    notificationLogs?: Prisma.NotificationLogUncheckedCreateNestedManyWithoutRecipientInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    trade?: Prisma.NullableEnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ownedProjects?: Prisma.ProjectUpdateManyWithoutOwnerNestedInput;
    projectMemberships?: Prisma.ProjectMemberUpdateManyWithoutUserNestedInput;
    createdIssues?: Prisma.IssueUpdateManyWithoutCreatorNestedInput;
    assignedIssues?: Prisma.IssueUpdateManyWithoutAssigneeNestedInput;
    issuePhotos?: Prisma.IssuePhotoUpdateManyWithoutUploaderNestedInput;
    issueComments?: Prisma.IssueCommentUpdateManyWithoutAuthorNestedInput;
    fcmTokens?: Prisma.FcmTokenUpdateManyWithoutUserNestedInput;
    notificationLogs?: Prisma.NotificationLogUpdateManyWithoutRecipientNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    trade?: Prisma.NullableEnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ownedProjects?: Prisma.ProjectUncheckedUpdateManyWithoutOwnerNestedInput;
    projectMemberships?: Prisma.ProjectMemberUncheckedUpdateManyWithoutUserNestedInput;
    createdIssues?: Prisma.IssueUncheckedUpdateManyWithoutCreatorNestedInput;
    assignedIssues?: Prisma.IssueUncheckedUpdateManyWithoutAssigneeNestedInput;
    issuePhotos?: Prisma.IssuePhotoUncheckedUpdateManyWithoutUploaderNestedInput;
    issueComments?: Prisma.IssueCommentUncheckedUpdateManyWithoutAuthorNestedInput;
    fcmTokens?: Prisma.FcmTokenUncheckedUpdateManyWithoutUserNestedInput;
    notificationLogs?: Prisma.NotificationLogUncheckedUpdateManyWithoutRecipientNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    role: $Enums.UserRole;
    trade?: $Enums.TradeType | null;
    avatarUrl?: string | null;
    phone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    trade?: Prisma.NullableEnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    trade?: Prisma.NullableEnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    trade?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    trade?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    trade?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type UserNullableScalarRelationFilter = {
    is?: Prisma.UserWhereInput | null;
    isNot?: Prisma.UserWhereInput | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole;
};
export type NullableEnumTradeTypeFieldUpdateOperationsInput = {
    set?: $Enums.TradeType | null;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type UserCreateNestedOneWithoutFcmTokensInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutFcmTokensInput, Prisma.UserUncheckedCreateWithoutFcmTokensInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutFcmTokensInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutFcmTokensNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutFcmTokensInput, Prisma.UserUncheckedCreateWithoutFcmTokensInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutFcmTokensInput;
    upsert?: Prisma.UserUpsertWithoutFcmTokensInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutFcmTokensInput, Prisma.UserUpdateWithoutFcmTokensInput>, Prisma.UserUncheckedUpdateWithoutFcmTokensInput>;
};
export type UserCreateNestedOneWithoutOwnedProjectsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOwnedProjectsInput, Prisma.UserUncheckedCreateWithoutOwnedProjectsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOwnedProjectsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutOwnedProjectsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOwnedProjectsInput, Prisma.UserUncheckedCreateWithoutOwnedProjectsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOwnedProjectsInput;
    upsert?: Prisma.UserUpsertWithoutOwnedProjectsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutOwnedProjectsInput, Prisma.UserUpdateWithoutOwnedProjectsInput>, Prisma.UserUncheckedUpdateWithoutOwnedProjectsInput>;
};
export type UserCreateNestedOneWithoutProjectMembershipsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutProjectMembershipsInput, Prisma.UserUncheckedCreateWithoutProjectMembershipsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutProjectMembershipsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutProjectMembershipsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutProjectMembershipsInput, Prisma.UserUncheckedCreateWithoutProjectMembershipsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutProjectMembershipsInput;
    upsert?: Prisma.UserUpsertWithoutProjectMembershipsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutProjectMembershipsInput, Prisma.UserUpdateWithoutProjectMembershipsInput>, Prisma.UserUncheckedUpdateWithoutProjectMembershipsInput>;
};
export type UserCreateNestedOneWithoutCreatedIssuesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCreatedIssuesInput, Prisma.UserUncheckedCreateWithoutCreatedIssuesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCreatedIssuesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutAssignedIssuesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAssignedIssuesInput, Prisma.UserUncheckedCreateWithoutAssignedIssuesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAssignedIssuesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutCreatedIssuesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCreatedIssuesInput, Prisma.UserUncheckedCreateWithoutCreatedIssuesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCreatedIssuesInput;
    upsert?: Prisma.UserUpsertWithoutCreatedIssuesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCreatedIssuesInput, Prisma.UserUpdateWithoutCreatedIssuesInput>, Prisma.UserUncheckedUpdateWithoutCreatedIssuesInput>;
};
export type UserUpdateOneWithoutAssignedIssuesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAssignedIssuesInput, Prisma.UserUncheckedCreateWithoutAssignedIssuesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAssignedIssuesInput;
    upsert?: Prisma.UserUpsertWithoutAssignedIssuesInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAssignedIssuesInput, Prisma.UserUpdateWithoutAssignedIssuesInput>, Prisma.UserUncheckedUpdateWithoutAssignedIssuesInput>;
};
export type UserCreateNestedOneWithoutIssuePhotosInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutIssuePhotosInput, Prisma.UserUncheckedCreateWithoutIssuePhotosInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutIssuePhotosInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutIssuePhotosNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutIssuePhotosInput, Prisma.UserUncheckedCreateWithoutIssuePhotosInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutIssuePhotosInput;
    upsert?: Prisma.UserUpsertWithoutIssuePhotosInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutIssuePhotosInput, Prisma.UserUpdateWithoutIssuePhotosInput>, Prisma.UserUncheckedUpdateWithoutIssuePhotosInput>;
};
export type UserCreateNestedOneWithoutIssueCommentsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutIssueCommentsInput, Prisma.UserUncheckedCreateWithoutIssueCommentsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutIssueCommentsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutIssueCommentsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutIssueCommentsInput, Prisma.UserUncheckedCreateWithoutIssueCommentsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutIssueCommentsInput;
    upsert?: Prisma.UserUpsertWithoutIssueCommentsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutIssueCommentsInput, Prisma.UserUpdateWithoutIssueCommentsInput>, Prisma.UserUncheckedUpdateWithoutIssueCommentsInput>;
};
export type UserCreateNestedOneWithoutNotificationLogsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutNotificationLogsInput, Prisma.UserUncheckedCreateWithoutNotificationLogsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutNotificationLogsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutNotificationLogsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutNotificationLogsInput, Prisma.UserUncheckedCreateWithoutNotificationLogsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutNotificationLogsInput;
    upsert?: Prisma.UserUpsertWithoutNotificationLogsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutNotificationLogsInput, Prisma.UserUpdateWithoutNotificationLogsInput>, Prisma.UserUncheckedUpdateWithoutNotificationLogsInput>;
};
export type UserCreateWithoutFcmTokensInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    role: $Enums.UserRole;
    trade?: $Enums.TradeType | null;
    avatarUrl?: string | null;
    phone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ownedProjects?: Prisma.ProjectCreateNestedManyWithoutOwnerInput;
    projectMemberships?: Prisma.ProjectMemberCreateNestedManyWithoutUserInput;
    createdIssues?: Prisma.IssueCreateNestedManyWithoutCreatorInput;
    assignedIssues?: Prisma.IssueCreateNestedManyWithoutAssigneeInput;
    issuePhotos?: Prisma.IssuePhotoCreateNestedManyWithoutUploaderInput;
    issueComments?: Prisma.IssueCommentCreateNestedManyWithoutAuthorInput;
    notificationLogs?: Prisma.NotificationLogCreateNestedManyWithoutRecipientInput;
};
export type UserUncheckedCreateWithoutFcmTokensInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    role: $Enums.UserRole;
    trade?: $Enums.TradeType | null;
    avatarUrl?: string | null;
    phone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ownedProjects?: Prisma.ProjectUncheckedCreateNestedManyWithoutOwnerInput;
    projectMemberships?: Prisma.ProjectMemberUncheckedCreateNestedManyWithoutUserInput;
    createdIssues?: Prisma.IssueUncheckedCreateNestedManyWithoutCreatorInput;
    assignedIssues?: Prisma.IssueUncheckedCreateNestedManyWithoutAssigneeInput;
    issuePhotos?: Prisma.IssuePhotoUncheckedCreateNestedManyWithoutUploaderInput;
    issueComments?: Prisma.IssueCommentUncheckedCreateNestedManyWithoutAuthorInput;
    notificationLogs?: Prisma.NotificationLogUncheckedCreateNestedManyWithoutRecipientInput;
};
export type UserCreateOrConnectWithoutFcmTokensInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutFcmTokensInput, Prisma.UserUncheckedCreateWithoutFcmTokensInput>;
};
export type UserUpsertWithoutFcmTokensInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutFcmTokensInput, Prisma.UserUncheckedUpdateWithoutFcmTokensInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutFcmTokensInput, Prisma.UserUncheckedCreateWithoutFcmTokensInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutFcmTokensInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutFcmTokensInput, Prisma.UserUncheckedUpdateWithoutFcmTokensInput>;
};
export type UserUpdateWithoutFcmTokensInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    trade?: Prisma.NullableEnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ownedProjects?: Prisma.ProjectUpdateManyWithoutOwnerNestedInput;
    projectMemberships?: Prisma.ProjectMemberUpdateManyWithoutUserNestedInput;
    createdIssues?: Prisma.IssueUpdateManyWithoutCreatorNestedInput;
    assignedIssues?: Prisma.IssueUpdateManyWithoutAssigneeNestedInput;
    issuePhotos?: Prisma.IssuePhotoUpdateManyWithoutUploaderNestedInput;
    issueComments?: Prisma.IssueCommentUpdateManyWithoutAuthorNestedInput;
    notificationLogs?: Prisma.NotificationLogUpdateManyWithoutRecipientNestedInput;
};
export type UserUncheckedUpdateWithoutFcmTokensInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    trade?: Prisma.NullableEnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ownedProjects?: Prisma.ProjectUncheckedUpdateManyWithoutOwnerNestedInput;
    projectMemberships?: Prisma.ProjectMemberUncheckedUpdateManyWithoutUserNestedInput;
    createdIssues?: Prisma.IssueUncheckedUpdateManyWithoutCreatorNestedInput;
    assignedIssues?: Prisma.IssueUncheckedUpdateManyWithoutAssigneeNestedInput;
    issuePhotos?: Prisma.IssuePhotoUncheckedUpdateManyWithoutUploaderNestedInput;
    issueComments?: Prisma.IssueCommentUncheckedUpdateManyWithoutAuthorNestedInput;
    notificationLogs?: Prisma.NotificationLogUncheckedUpdateManyWithoutRecipientNestedInput;
};
export type UserCreateWithoutOwnedProjectsInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    role: $Enums.UserRole;
    trade?: $Enums.TradeType | null;
    avatarUrl?: string | null;
    phone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    projectMemberships?: Prisma.ProjectMemberCreateNestedManyWithoutUserInput;
    createdIssues?: Prisma.IssueCreateNestedManyWithoutCreatorInput;
    assignedIssues?: Prisma.IssueCreateNestedManyWithoutAssigneeInput;
    issuePhotos?: Prisma.IssuePhotoCreateNestedManyWithoutUploaderInput;
    issueComments?: Prisma.IssueCommentCreateNestedManyWithoutAuthorInput;
    fcmTokens?: Prisma.FcmTokenCreateNestedManyWithoutUserInput;
    notificationLogs?: Prisma.NotificationLogCreateNestedManyWithoutRecipientInput;
};
export type UserUncheckedCreateWithoutOwnedProjectsInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    role: $Enums.UserRole;
    trade?: $Enums.TradeType | null;
    avatarUrl?: string | null;
    phone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    projectMemberships?: Prisma.ProjectMemberUncheckedCreateNestedManyWithoutUserInput;
    createdIssues?: Prisma.IssueUncheckedCreateNestedManyWithoutCreatorInput;
    assignedIssues?: Prisma.IssueUncheckedCreateNestedManyWithoutAssigneeInput;
    issuePhotos?: Prisma.IssuePhotoUncheckedCreateNestedManyWithoutUploaderInput;
    issueComments?: Prisma.IssueCommentUncheckedCreateNestedManyWithoutAuthorInput;
    fcmTokens?: Prisma.FcmTokenUncheckedCreateNestedManyWithoutUserInput;
    notificationLogs?: Prisma.NotificationLogUncheckedCreateNestedManyWithoutRecipientInput;
};
export type UserCreateOrConnectWithoutOwnedProjectsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutOwnedProjectsInput, Prisma.UserUncheckedCreateWithoutOwnedProjectsInput>;
};
export type UserUpsertWithoutOwnedProjectsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutOwnedProjectsInput, Prisma.UserUncheckedUpdateWithoutOwnedProjectsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutOwnedProjectsInput, Prisma.UserUncheckedCreateWithoutOwnedProjectsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutOwnedProjectsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutOwnedProjectsInput, Prisma.UserUncheckedUpdateWithoutOwnedProjectsInput>;
};
export type UserUpdateWithoutOwnedProjectsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    trade?: Prisma.NullableEnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    projectMemberships?: Prisma.ProjectMemberUpdateManyWithoutUserNestedInput;
    createdIssues?: Prisma.IssueUpdateManyWithoutCreatorNestedInput;
    assignedIssues?: Prisma.IssueUpdateManyWithoutAssigneeNestedInput;
    issuePhotos?: Prisma.IssuePhotoUpdateManyWithoutUploaderNestedInput;
    issueComments?: Prisma.IssueCommentUpdateManyWithoutAuthorNestedInput;
    fcmTokens?: Prisma.FcmTokenUpdateManyWithoutUserNestedInput;
    notificationLogs?: Prisma.NotificationLogUpdateManyWithoutRecipientNestedInput;
};
export type UserUncheckedUpdateWithoutOwnedProjectsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    trade?: Prisma.NullableEnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    projectMemberships?: Prisma.ProjectMemberUncheckedUpdateManyWithoutUserNestedInput;
    createdIssues?: Prisma.IssueUncheckedUpdateManyWithoutCreatorNestedInput;
    assignedIssues?: Prisma.IssueUncheckedUpdateManyWithoutAssigneeNestedInput;
    issuePhotos?: Prisma.IssuePhotoUncheckedUpdateManyWithoutUploaderNestedInput;
    issueComments?: Prisma.IssueCommentUncheckedUpdateManyWithoutAuthorNestedInput;
    fcmTokens?: Prisma.FcmTokenUncheckedUpdateManyWithoutUserNestedInput;
    notificationLogs?: Prisma.NotificationLogUncheckedUpdateManyWithoutRecipientNestedInput;
};
export type UserCreateWithoutProjectMembershipsInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    role: $Enums.UserRole;
    trade?: $Enums.TradeType | null;
    avatarUrl?: string | null;
    phone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ownedProjects?: Prisma.ProjectCreateNestedManyWithoutOwnerInput;
    createdIssues?: Prisma.IssueCreateNestedManyWithoutCreatorInput;
    assignedIssues?: Prisma.IssueCreateNestedManyWithoutAssigneeInput;
    issuePhotos?: Prisma.IssuePhotoCreateNestedManyWithoutUploaderInput;
    issueComments?: Prisma.IssueCommentCreateNestedManyWithoutAuthorInput;
    fcmTokens?: Prisma.FcmTokenCreateNestedManyWithoutUserInput;
    notificationLogs?: Prisma.NotificationLogCreateNestedManyWithoutRecipientInput;
};
export type UserUncheckedCreateWithoutProjectMembershipsInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    role: $Enums.UserRole;
    trade?: $Enums.TradeType | null;
    avatarUrl?: string | null;
    phone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ownedProjects?: Prisma.ProjectUncheckedCreateNestedManyWithoutOwnerInput;
    createdIssues?: Prisma.IssueUncheckedCreateNestedManyWithoutCreatorInput;
    assignedIssues?: Prisma.IssueUncheckedCreateNestedManyWithoutAssigneeInput;
    issuePhotos?: Prisma.IssuePhotoUncheckedCreateNestedManyWithoutUploaderInput;
    issueComments?: Prisma.IssueCommentUncheckedCreateNestedManyWithoutAuthorInput;
    fcmTokens?: Prisma.FcmTokenUncheckedCreateNestedManyWithoutUserInput;
    notificationLogs?: Prisma.NotificationLogUncheckedCreateNestedManyWithoutRecipientInput;
};
export type UserCreateOrConnectWithoutProjectMembershipsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutProjectMembershipsInput, Prisma.UserUncheckedCreateWithoutProjectMembershipsInput>;
};
export type UserUpsertWithoutProjectMembershipsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutProjectMembershipsInput, Prisma.UserUncheckedUpdateWithoutProjectMembershipsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutProjectMembershipsInput, Prisma.UserUncheckedCreateWithoutProjectMembershipsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutProjectMembershipsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutProjectMembershipsInput, Prisma.UserUncheckedUpdateWithoutProjectMembershipsInput>;
};
export type UserUpdateWithoutProjectMembershipsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    trade?: Prisma.NullableEnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ownedProjects?: Prisma.ProjectUpdateManyWithoutOwnerNestedInput;
    createdIssues?: Prisma.IssueUpdateManyWithoutCreatorNestedInput;
    assignedIssues?: Prisma.IssueUpdateManyWithoutAssigneeNestedInput;
    issuePhotos?: Prisma.IssuePhotoUpdateManyWithoutUploaderNestedInput;
    issueComments?: Prisma.IssueCommentUpdateManyWithoutAuthorNestedInput;
    fcmTokens?: Prisma.FcmTokenUpdateManyWithoutUserNestedInput;
    notificationLogs?: Prisma.NotificationLogUpdateManyWithoutRecipientNestedInput;
};
export type UserUncheckedUpdateWithoutProjectMembershipsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    trade?: Prisma.NullableEnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ownedProjects?: Prisma.ProjectUncheckedUpdateManyWithoutOwnerNestedInput;
    createdIssues?: Prisma.IssueUncheckedUpdateManyWithoutCreatorNestedInput;
    assignedIssues?: Prisma.IssueUncheckedUpdateManyWithoutAssigneeNestedInput;
    issuePhotos?: Prisma.IssuePhotoUncheckedUpdateManyWithoutUploaderNestedInput;
    issueComments?: Prisma.IssueCommentUncheckedUpdateManyWithoutAuthorNestedInput;
    fcmTokens?: Prisma.FcmTokenUncheckedUpdateManyWithoutUserNestedInput;
    notificationLogs?: Prisma.NotificationLogUncheckedUpdateManyWithoutRecipientNestedInput;
};
export type UserCreateWithoutCreatedIssuesInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    role: $Enums.UserRole;
    trade?: $Enums.TradeType | null;
    avatarUrl?: string | null;
    phone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ownedProjects?: Prisma.ProjectCreateNestedManyWithoutOwnerInput;
    projectMemberships?: Prisma.ProjectMemberCreateNestedManyWithoutUserInput;
    assignedIssues?: Prisma.IssueCreateNestedManyWithoutAssigneeInput;
    issuePhotos?: Prisma.IssuePhotoCreateNestedManyWithoutUploaderInput;
    issueComments?: Prisma.IssueCommentCreateNestedManyWithoutAuthorInput;
    fcmTokens?: Prisma.FcmTokenCreateNestedManyWithoutUserInput;
    notificationLogs?: Prisma.NotificationLogCreateNestedManyWithoutRecipientInput;
};
export type UserUncheckedCreateWithoutCreatedIssuesInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    role: $Enums.UserRole;
    trade?: $Enums.TradeType | null;
    avatarUrl?: string | null;
    phone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ownedProjects?: Prisma.ProjectUncheckedCreateNestedManyWithoutOwnerInput;
    projectMemberships?: Prisma.ProjectMemberUncheckedCreateNestedManyWithoutUserInput;
    assignedIssues?: Prisma.IssueUncheckedCreateNestedManyWithoutAssigneeInput;
    issuePhotos?: Prisma.IssuePhotoUncheckedCreateNestedManyWithoutUploaderInput;
    issueComments?: Prisma.IssueCommentUncheckedCreateNestedManyWithoutAuthorInput;
    fcmTokens?: Prisma.FcmTokenUncheckedCreateNestedManyWithoutUserInput;
    notificationLogs?: Prisma.NotificationLogUncheckedCreateNestedManyWithoutRecipientInput;
};
export type UserCreateOrConnectWithoutCreatedIssuesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCreatedIssuesInput, Prisma.UserUncheckedCreateWithoutCreatedIssuesInput>;
};
export type UserCreateWithoutAssignedIssuesInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    role: $Enums.UserRole;
    trade?: $Enums.TradeType | null;
    avatarUrl?: string | null;
    phone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ownedProjects?: Prisma.ProjectCreateNestedManyWithoutOwnerInput;
    projectMemberships?: Prisma.ProjectMemberCreateNestedManyWithoutUserInput;
    createdIssues?: Prisma.IssueCreateNestedManyWithoutCreatorInput;
    issuePhotos?: Prisma.IssuePhotoCreateNestedManyWithoutUploaderInput;
    issueComments?: Prisma.IssueCommentCreateNestedManyWithoutAuthorInput;
    fcmTokens?: Prisma.FcmTokenCreateNestedManyWithoutUserInput;
    notificationLogs?: Prisma.NotificationLogCreateNestedManyWithoutRecipientInput;
};
export type UserUncheckedCreateWithoutAssignedIssuesInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    role: $Enums.UserRole;
    trade?: $Enums.TradeType | null;
    avatarUrl?: string | null;
    phone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ownedProjects?: Prisma.ProjectUncheckedCreateNestedManyWithoutOwnerInput;
    projectMemberships?: Prisma.ProjectMemberUncheckedCreateNestedManyWithoutUserInput;
    createdIssues?: Prisma.IssueUncheckedCreateNestedManyWithoutCreatorInput;
    issuePhotos?: Prisma.IssuePhotoUncheckedCreateNestedManyWithoutUploaderInput;
    issueComments?: Prisma.IssueCommentUncheckedCreateNestedManyWithoutAuthorInput;
    fcmTokens?: Prisma.FcmTokenUncheckedCreateNestedManyWithoutUserInput;
    notificationLogs?: Prisma.NotificationLogUncheckedCreateNestedManyWithoutRecipientInput;
};
export type UserCreateOrConnectWithoutAssignedIssuesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutAssignedIssuesInput, Prisma.UserUncheckedCreateWithoutAssignedIssuesInput>;
};
export type UserUpsertWithoutCreatedIssuesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCreatedIssuesInput, Prisma.UserUncheckedUpdateWithoutCreatedIssuesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCreatedIssuesInput, Prisma.UserUncheckedCreateWithoutCreatedIssuesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCreatedIssuesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCreatedIssuesInput, Prisma.UserUncheckedUpdateWithoutCreatedIssuesInput>;
};
export type UserUpdateWithoutCreatedIssuesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    trade?: Prisma.NullableEnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ownedProjects?: Prisma.ProjectUpdateManyWithoutOwnerNestedInput;
    projectMemberships?: Prisma.ProjectMemberUpdateManyWithoutUserNestedInput;
    assignedIssues?: Prisma.IssueUpdateManyWithoutAssigneeNestedInput;
    issuePhotos?: Prisma.IssuePhotoUpdateManyWithoutUploaderNestedInput;
    issueComments?: Prisma.IssueCommentUpdateManyWithoutAuthorNestedInput;
    fcmTokens?: Prisma.FcmTokenUpdateManyWithoutUserNestedInput;
    notificationLogs?: Prisma.NotificationLogUpdateManyWithoutRecipientNestedInput;
};
export type UserUncheckedUpdateWithoutCreatedIssuesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    trade?: Prisma.NullableEnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ownedProjects?: Prisma.ProjectUncheckedUpdateManyWithoutOwnerNestedInput;
    projectMemberships?: Prisma.ProjectMemberUncheckedUpdateManyWithoutUserNestedInput;
    assignedIssues?: Prisma.IssueUncheckedUpdateManyWithoutAssigneeNestedInput;
    issuePhotos?: Prisma.IssuePhotoUncheckedUpdateManyWithoutUploaderNestedInput;
    issueComments?: Prisma.IssueCommentUncheckedUpdateManyWithoutAuthorNestedInput;
    fcmTokens?: Prisma.FcmTokenUncheckedUpdateManyWithoutUserNestedInput;
    notificationLogs?: Prisma.NotificationLogUncheckedUpdateManyWithoutRecipientNestedInput;
};
export type UserUpsertWithoutAssignedIssuesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutAssignedIssuesInput, Prisma.UserUncheckedUpdateWithoutAssignedIssuesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutAssignedIssuesInput, Prisma.UserUncheckedCreateWithoutAssignedIssuesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAssignedIssuesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutAssignedIssuesInput, Prisma.UserUncheckedUpdateWithoutAssignedIssuesInput>;
};
export type UserUpdateWithoutAssignedIssuesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    trade?: Prisma.NullableEnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ownedProjects?: Prisma.ProjectUpdateManyWithoutOwnerNestedInput;
    projectMemberships?: Prisma.ProjectMemberUpdateManyWithoutUserNestedInput;
    createdIssues?: Prisma.IssueUpdateManyWithoutCreatorNestedInput;
    issuePhotos?: Prisma.IssuePhotoUpdateManyWithoutUploaderNestedInput;
    issueComments?: Prisma.IssueCommentUpdateManyWithoutAuthorNestedInput;
    fcmTokens?: Prisma.FcmTokenUpdateManyWithoutUserNestedInput;
    notificationLogs?: Prisma.NotificationLogUpdateManyWithoutRecipientNestedInput;
};
export type UserUncheckedUpdateWithoutAssignedIssuesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    trade?: Prisma.NullableEnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ownedProjects?: Prisma.ProjectUncheckedUpdateManyWithoutOwnerNestedInput;
    projectMemberships?: Prisma.ProjectMemberUncheckedUpdateManyWithoutUserNestedInput;
    createdIssues?: Prisma.IssueUncheckedUpdateManyWithoutCreatorNestedInput;
    issuePhotos?: Prisma.IssuePhotoUncheckedUpdateManyWithoutUploaderNestedInput;
    issueComments?: Prisma.IssueCommentUncheckedUpdateManyWithoutAuthorNestedInput;
    fcmTokens?: Prisma.FcmTokenUncheckedUpdateManyWithoutUserNestedInput;
    notificationLogs?: Prisma.NotificationLogUncheckedUpdateManyWithoutRecipientNestedInput;
};
export type UserCreateWithoutIssuePhotosInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    role: $Enums.UserRole;
    trade?: $Enums.TradeType | null;
    avatarUrl?: string | null;
    phone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ownedProjects?: Prisma.ProjectCreateNestedManyWithoutOwnerInput;
    projectMemberships?: Prisma.ProjectMemberCreateNestedManyWithoutUserInput;
    createdIssues?: Prisma.IssueCreateNestedManyWithoutCreatorInput;
    assignedIssues?: Prisma.IssueCreateNestedManyWithoutAssigneeInput;
    issueComments?: Prisma.IssueCommentCreateNestedManyWithoutAuthorInput;
    fcmTokens?: Prisma.FcmTokenCreateNestedManyWithoutUserInput;
    notificationLogs?: Prisma.NotificationLogCreateNestedManyWithoutRecipientInput;
};
export type UserUncheckedCreateWithoutIssuePhotosInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    role: $Enums.UserRole;
    trade?: $Enums.TradeType | null;
    avatarUrl?: string | null;
    phone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ownedProjects?: Prisma.ProjectUncheckedCreateNestedManyWithoutOwnerInput;
    projectMemberships?: Prisma.ProjectMemberUncheckedCreateNestedManyWithoutUserInput;
    createdIssues?: Prisma.IssueUncheckedCreateNestedManyWithoutCreatorInput;
    assignedIssues?: Prisma.IssueUncheckedCreateNestedManyWithoutAssigneeInput;
    issueComments?: Prisma.IssueCommentUncheckedCreateNestedManyWithoutAuthorInput;
    fcmTokens?: Prisma.FcmTokenUncheckedCreateNestedManyWithoutUserInput;
    notificationLogs?: Prisma.NotificationLogUncheckedCreateNestedManyWithoutRecipientInput;
};
export type UserCreateOrConnectWithoutIssuePhotosInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutIssuePhotosInput, Prisma.UserUncheckedCreateWithoutIssuePhotosInput>;
};
export type UserUpsertWithoutIssuePhotosInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutIssuePhotosInput, Prisma.UserUncheckedUpdateWithoutIssuePhotosInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutIssuePhotosInput, Prisma.UserUncheckedCreateWithoutIssuePhotosInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutIssuePhotosInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutIssuePhotosInput, Prisma.UserUncheckedUpdateWithoutIssuePhotosInput>;
};
export type UserUpdateWithoutIssuePhotosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    trade?: Prisma.NullableEnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ownedProjects?: Prisma.ProjectUpdateManyWithoutOwnerNestedInput;
    projectMemberships?: Prisma.ProjectMemberUpdateManyWithoutUserNestedInput;
    createdIssues?: Prisma.IssueUpdateManyWithoutCreatorNestedInput;
    assignedIssues?: Prisma.IssueUpdateManyWithoutAssigneeNestedInput;
    issueComments?: Prisma.IssueCommentUpdateManyWithoutAuthorNestedInput;
    fcmTokens?: Prisma.FcmTokenUpdateManyWithoutUserNestedInput;
    notificationLogs?: Prisma.NotificationLogUpdateManyWithoutRecipientNestedInput;
};
export type UserUncheckedUpdateWithoutIssuePhotosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    trade?: Prisma.NullableEnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ownedProjects?: Prisma.ProjectUncheckedUpdateManyWithoutOwnerNestedInput;
    projectMemberships?: Prisma.ProjectMemberUncheckedUpdateManyWithoutUserNestedInput;
    createdIssues?: Prisma.IssueUncheckedUpdateManyWithoutCreatorNestedInput;
    assignedIssues?: Prisma.IssueUncheckedUpdateManyWithoutAssigneeNestedInput;
    issueComments?: Prisma.IssueCommentUncheckedUpdateManyWithoutAuthorNestedInput;
    fcmTokens?: Prisma.FcmTokenUncheckedUpdateManyWithoutUserNestedInput;
    notificationLogs?: Prisma.NotificationLogUncheckedUpdateManyWithoutRecipientNestedInput;
};
export type UserCreateWithoutIssueCommentsInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    role: $Enums.UserRole;
    trade?: $Enums.TradeType | null;
    avatarUrl?: string | null;
    phone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ownedProjects?: Prisma.ProjectCreateNestedManyWithoutOwnerInput;
    projectMemberships?: Prisma.ProjectMemberCreateNestedManyWithoutUserInput;
    createdIssues?: Prisma.IssueCreateNestedManyWithoutCreatorInput;
    assignedIssues?: Prisma.IssueCreateNestedManyWithoutAssigneeInput;
    issuePhotos?: Prisma.IssuePhotoCreateNestedManyWithoutUploaderInput;
    fcmTokens?: Prisma.FcmTokenCreateNestedManyWithoutUserInput;
    notificationLogs?: Prisma.NotificationLogCreateNestedManyWithoutRecipientInput;
};
export type UserUncheckedCreateWithoutIssueCommentsInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    role: $Enums.UserRole;
    trade?: $Enums.TradeType | null;
    avatarUrl?: string | null;
    phone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ownedProjects?: Prisma.ProjectUncheckedCreateNestedManyWithoutOwnerInput;
    projectMemberships?: Prisma.ProjectMemberUncheckedCreateNestedManyWithoutUserInput;
    createdIssues?: Prisma.IssueUncheckedCreateNestedManyWithoutCreatorInput;
    assignedIssues?: Prisma.IssueUncheckedCreateNestedManyWithoutAssigneeInput;
    issuePhotos?: Prisma.IssuePhotoUncheckedCreateNestedManyWithoutUploaderInput;
    fcmTokens?: Prisma.FcmTokenUncheckedCreateNestedManyWithoutUserInput;
    notificationLogs?: Prisma.NotificationLogUncheckedCreateNestedManyWithoutRecipientInput;
};
export type UserCreateOrConnectWithoutIssueCommentsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutIssueCommentsInput, Prisma.UserUncheckedCreateWithoutIssueCommentsInput>;
};
export type UserUpsertWithoutIssueCommentsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutIssueCommentsInput, Prisma.UserUncheckedUpdateWithoutIssueCommentsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutIssueCommentsInput, Prisma.UserUncheckedCreateWithoutIssueCommentsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutIssueCommentsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutIssueCommentsInput, Prisma.UserUncheckedUpdateWithoutIssueCommentsInput>;
};
export type UserUpdateWithoutIssueCommentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    trade?: Prisma.NullableEnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ownedProjects?: Prisma.ProjectUpdateManyWithoutOwnerNestedInput;
    projectMemberships?: Prisma.ProjectMemberUpdateManyWithoutUserNestedInput;
    createdIssues?: Prisma.IssueUpdateManyWithoutCreatorNestedInput;
    assignedIssues?: Prisma.IssueUpdateManyWithoutAssigneeNestedInput;
    issuePhotos?: Prisma.IssuePhotoUpdateManyWithoutUploaderNestedInput;
    fcmTokens?: Prisma.FcmTokenUpdateManyWithoutUserNestedInput;
    notificationLogs?: Prisma.NotificationLogUpdateManyWithoutRecipientNestedInput;
};
export type UserUncheckedUpdateWithoutIssueCommentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    trade?: Prisma.NullableEnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ownedProjects?: Prisma.ProjectUncheckedUpdateManyWithoutOwnerNestedInput;
    projectMemberships?: Prisma.ProjectMemberUncheckedUpdateManyWithoutUserNestedInput;
    createdIssues?: Prisma.IssueUncheckedUpdateManyWithoutCreatorNestedInput;
    assignedIssues?: Prisma.IssueUncheckedUpdateManyWithoutAssigneeNestedInput;
    issuePhotos?: Prisma.IssuePhotoUncheckedUpdateManyWithoutUploaderNestedInput;
    fcmTokens?: Prisma.FcmTokenUncheckedUpdateManyWithoutUserNestedInput;
    notificationLogs?: Prisma.NotificationLogUncheckedUpdateManyWithoutRecipientNestedInput;
};
export type UserCreateWithoutNotificationLogsInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    role: $Enums.UserRole;
    trade?: $Enums.TradeType | null;
    avatarUrl?: string | null;
    phone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ownedProjects?: Prisma.ProjectCreateNestedManyWithoutOwnerInput;
    projectMemberships?: Prisma.ProjectMemberCreateNestedManyWithoutUserInput;
    createdIssues?: Prisma.IssueCreateNestedManyWithoutCreatorInput;
    assignedIssues?: Prisma.IssueCreateNestedManyWithoutAssigneeInput;
    issuePhotos?: Prisma.IssuePhotoCreateNestedManyWithoutUploaderInput;
    issueComments?: Prisma.IssueCommentCreateNestedManyWithoutAuthorInput;
    fcmTokens?: Prisma.FcmTokenCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutNotificationLogsInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    role: $Enums.UserRole;
    trade?: $Enums.TradeType | null;
    avatarUrl?: string | null;
    phone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ownedProjects?: Prisma.ProjectUncheckedCreateNestedManyWithoutOwnerInput;
    projectMemberships?: Prisma.ProjectMemberUncheckedCreateNestedManyWithoutUserInput;
    createdIssues?: Prisma.IssueUncheckedCreateNestedManyWithoutCreatorInput;
    assignedIssues?: Prisma.IssueUncheckedCreateNestedManyWithoutAssigneeInput;
    issuePhotos?: Prisma.IssuePhotoUncheckedCreateNestedManyWithoutUploaderInput;
    issueComments?: Prisma.IssueCommentUncheckedCreateNestedManyWithoutAuthorInput;
    fcmTokens?: Prisma.FcmTokenUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutNotificationLogsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutNotificationLogsInput, Prisma.UserUncheckedCreateWithoutNotificationLogsInput>;
};
export type UserUpsertWithoutNotificationLogsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutNotificationLogsInput, Prisma.UserUncheckedUpdateWithoutNotificationLogsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutNotificationLogsInput, Prisma.UserUncheckedCreateWithoutNotificationLogsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutNotificationLogsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutNotificationLogsInput, Prisma.UserUncheckedUpdateWithoutNotificationLogsInput>;
};
export type UserUpdateWithoutNotificationLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    trade?: Prisma.NullableEnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ownedProjects?: Prisma.ProjectUpdateManyWithoutOwnerNestedInput;
    projectMemberships?: Prisma.ProjectMemberUpdateManyWithoutUserNestedInput;
    createdIssues?: Prisma.IssueUpdateManyWithoutCreatorNestedInput;
    assignedIssues?: Prisma.IssueUpdateManyWithoutAssigneeNestedInput;
    issuePhotos?: Prisma.IssuePhotoUpdateManyWithoutUploaderNestedInput;
    issueComments?: Prisma.IssueCommentUpdateManyWithoutAuthorNestedInput;
    fcmTokens?: Prisma.FcmTokenUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutNotificationLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    trade?: Prisma.NullableEnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ownedProjects?: Prisma.ProjectUncheckedUpdateManyWithoutOwnerNestedInput;
    projectMemberships?: Prisma.ProjectMemberUncheckedUpdateManyWithoutUserNestedInput;
    createdIssues?: Prisma.IssueUncheckedUpdateManyWithoutCreatorNestedInput;
    assignedIssues?: Prisma.IssueUncheckedUpdateManyWithoutAssigneeNestedInput;
    issuePhotos?: Prisma.IssuePhotoUncheckedUpdateManyWithoutUploaderNestedInput;
    issueComments?: Prisma.IssueCommentUncheckedUpdateManyWithoutAuthorNestedInput;
    fcmTokens?: Prisma.FcmTokenUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCountOutputType = {
    ownedProjects: number;
    projectMemberships: number;
    createdIssues: number;
    assignedIssues: number;
    issuePhotos: number;
    issueComments: number;
    fcmTokens: number;
    notificationLogs: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ownedProjects?: boolean | UserCountOutputTypeCountOwnedProjectsArgs;
    projectMemberships?: boolean | UserCountOutputTypeCountProjectMembershipsArgs;
    createdIssues?: boolean | UserCountOutputTypeCountCreatedIssuesArgs;
    assignedIssues?: boolean | UserCountOutputTypeCountAssignedIssuesArgs;
    issuePhotos?: boolean | UserCountOutputTypeCountIssuePhotosArgs;
    issueComments?: boolean | UserCountOutputTypeCountIssueCommentsArgs;
    fcmTokens?: boolean | UserCountOutputTypeCountFcmTokensArgs;
    notificationLogs?: boolean | UserCountOutputTypeCountNotificationLogsArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountOwnedProjectsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProjectWhereInput;
};
export type UserCountOutputTypeCountProjectMembershipsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProjectMemberWhereInput;
};
export type UserCountOutputTypeCountCreatedIssuesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IssueWhereInput;
};
export type UserCountOutputTypeCountAssignedIssuesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IssueWhereInput;
};
export type UserCountOutputTypeCountIssuePhotosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IssuePhotoWhereInput;
};
export type UserCountOutputTypeCountIssueCommentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IssueCommentWhereInput;
};
export type UserCountOutputTypeCountFcmTokensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FcmTokenWhereInput;
};
export type UserCountOutputTypeCountNotificationLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationLogWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    password?: boolean;
    fullName?: boolean;
    role?: boolean;
    trade?: boolean;
    avatarUrl?: boolean;
    phone?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    ownedProjects?: boolean | Prisma.User$ownedProjectsArgs<ExtArgs>;
    projectMemberships?: boolean | Prisma.User$projectMembershipsArgs<ExtArgs>;
    createdIssues?: boolean | Prisma.User$createdIssuesArgs<ExtArgs>;
    assignedIssues?: boolean | Prisma.User$assignedIssuesArgs<ExtArgs>;
    issuePhotos?: boolean | Prisma.User$issuePhotosArgs<ExtArgs>;
    issueComments?: boolean | Prisma.User$issueCommentsArgs<ExtArgs>;
    fcmTokens?: boolean | Prisma.User$fcmTokensArgs<ExtArgs>;
    notificationLogs?: boolean | Prisma.User$notificationLogsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    password?: boolean;
    fullName?: boolean;
    role?: boolean;
    trade?: boolean;
    avatarUrl?: boolean;
    phone?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    password?: boolean;
    fullName?: boolean;
    role?: boolean;
    trade?: boolean;
    avatarUrl?: boolean;
    phone?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    password?: boolean;
    fullName?: boolean;
    role?: boolean;
    trade?: boolean;
    avatarUrl?: boolean;
    phone?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "password" | "fullName" | "role" | "trade" | "avatarUrl" | "phone" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ownedProjects?: boolean | Prisma.User$ownedProjectsArgs<ExtArgs>;
    projectMemberships?: boolean | Prisma.User$projectMembershipsArgs<ExtArgs>;
    createdIssues?: boolean | Prisma.User$createdIssuesArgs<ExtArgs>;
    assignedIssues?: boolean | Prisma.User$assignedIssuesArgs<ExtArgs>;
    issuePhotos?: boolean | Prisma.User$issuePhotosArgs<ExtArgs>;
    issueComments?: boolean | Prisma.User$issueCommentsArgs<ExtArgs>;
    fcmTokens?: boolean | Prisma.User$fcmTokensArgs<ExtArgs>;
    notificationLogs?: boolean | Prisma.User$notificationLogsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        ownedProjects: Prisma.$ProjectPayload<ExtArgs>[];
        projectMemberships: Prisma.$ProjectMemberPayload<ExtArgs>[];
        createdIssues: Prisma.$IssuePayload<ExtArgs>[];
        assignedIssues: Prisma.$IssuePayload<ExtArgs>[];
        issuePhotos: Prisma.$IssuePhotoPayload<ExtArgs>[];
        issueComments: Prisma.$IssueCommentPayload<ExtArgs>[];
        fcmTokens: Prisma.$FcmTokenPayload<ExtArgs>[];
        notificationLogs: Prisma.$NotificationLogPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        email: string;
        password: string;
        fullName: string;
        role: $Enums.UserRole;
        trade: $Enums.TradeType | null;
        avatarUrl: string | null;
        phone: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    ownedProjects<T extends Prisma.User$ownedProjectsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$ownedProjectsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    projectMemberships<T extends Prisma.User$projectMembershipsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$projectMembershipsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    createdIssues<T extends Prisma.User$createdIssuesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$createdIssuesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    assignedIssues<T extends Prisma.User$assignedIssuesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$assignedIssuesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    issuePhotos<T extends Prisma.User$issuePhotosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$issuePhotosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IssuePhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    issueComments<T extends Prisma.User$issueCommentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$issueCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IssueCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    fcmTokens<T extends Prisma.User$fcmTokensArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$fcmTokensArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FcmTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    notificationLogs<T extends Prisma.User$notificationLogsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$notificationLogsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly password: Prisma.FieldRef<"User", 'String'>;
    readonly fullName: Prisma.FieldRef<"User", 'String'>;
    readonly role: Prisma.FieldRef<"User", 'UserRole'>;
    readonly trade: Prisma.FieldRef<"User", 'TradeType'>;
    readonly avatarUrl: Prisma.FieldRef<"User", 'String'>;
    readonly phone: Prisma.FieldRef<"User", 'String'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$ownedProjectsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSelect<ExtArgs> | null;
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    include?: Prisma.ProjectInclude<ExtArgs> | null;
    where?: Prisma.ProjectWhereInput;
    orderBy?: Prisma.ProjectOrderByWithRelationInput | Prisma.ProjectOrderByWithRelationInput[];
    cursor?: Prisma.ProjectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProjectScalarFieldEnum | Prisma.ProjectScalarFieldEnum[];
};
export type User$projectMembershipsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectMemberSelect<ExtArgs> | null;
    omit?: Prisma.ProjectMemberOmit<ExtArgs> | null;
    include?: Prisma.ProjectMemberInclude<ExtArgs> | null;
    where?: Prisma.ProjectMemberWhereInput;
    orderBy?: Prisma.ProjectMemberOrderByWithRelationInput | Prisma.ProjectMemberOrderByWithRelationInput[];
    cursor?: Prisma.ProjectMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProjectMemberScalarFieldEnum | Prisma.ProjectMemberScalarFieldEnum[];
};
export type User$createdIssuesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IssueSelect<ExtArgs> | null;
    omit?: Prisma.IssueOmit<ExtArgs> | null;
    include?: Prisma.IssueInclude<ExtArgs> | null;
    where?: Prisma.IssueWhereInput;
    orderBy?: Prisma.IssueOrderByWithRelationInput | Prisma.IssueOrderByWithRelationInput[];
    cursor?: Prisma.IssueWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IssueScalarFieldEnum | Prisma.IssueScalarFieldEnum[];
};
export type User$assignedIssuesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IssueSelect<ExtArgs> | null;
    omit?: Prisma.IssueOmit<ExtArgs> | null;
    include?: Prisma.IssueInclude<ExtArgs> | null;
    where?: Prisma.IssueWhereInput;
    orderBy?: Prisma.IssueOrderByWithRelationInput | Prisma.IssueOrderByWithRelationInput[];
    cursor?: Prisma.IssueWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IssueScalarFieldEnum | Prisma.IssueScalarFieldEnum[];
};
export type User$issuePhotosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IssuePhotoSelect<ExtArgs> | null;
    omit?: Prisma.IssuePhotoOmit<ExtArgs> | null;
    include?: Prisma.IssuePhotoInclude<ExtArgs> | null;
    where?: Prisma.IssuePhotoWhereInput;
    orderBy?: Prisma.IssuePhotoOrderByWithRelationInput | Prisma.IssuePhotoOrderByWithRelationInput[];
    cursor?: Prisma.IssuePhotoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IssuePhotoScalarFieldEnum | Prisma.IssuePhotoScalarFieldEnum[];
};
export type User$issueCommentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IssueCommentSelect<ExtArgs> | null;
    omit?: Prisma.IssueCommentOmit<ExtArgs> | null;
    include?: Prisma.IssueCommentInclude<ExtArgs> | null;
    where?: Prisma.IssueCommentWhereInput;
    orderBy?: Prisma.IssueCommentOrderByWithRelationInput | Prisma.IssueCommentOrderByWithRelationInput[];
    cursor?: Prisma.IssueCommentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IssueCommentScalarFieldEnum | Prisma.IssueCommentScalarFieldEnum[];
};
export type User$fcmTokensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FcmTokenSelect<ExtArgs> | null;
    omit?: Prisma.FcmTokenOmit<ExtArgs> | null;
    include?: Prisma.FcmTokenInclude<ExtArgs> | null;
    where?: Prisma.FcmTokenWhereInput;
    orderBy?: Prisma.FcmTokenOrderByWithRelationInput | Prisma.FcmTokenOrderByWithRelationInput[];
    cursor?: Prisma.FcmTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FcmTokenScalarFieldEnum | Prisma.FcmTokenScalarFieldEnum[];
};
export type User$notificationLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationLogSelect<ExtArgs> | null;
    omit?: Prisma.NotificationLogOmit<ExtArgs> | null;
    include?: Prisma.NotificationLogInclude<ExtArgs> | null;
    where?: Prisma.NotificationLogWhereInput;
    orderBy?: Prisma.NotificationLogOrderByWithRelationInput | Prisma.NotificationLogOrderByWithRelationInput[];
    cursor?: Prisma.NotificationLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationLogScalarFieldEnum | Prisma.NotificationLogScalarFieldEnum[];
};
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};
