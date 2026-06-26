import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type NotificationLogModel = runtime.Types.Result.DefaultSelection<Prisma.$NotificationLogPayload>;
export type AggregateNotificationLog = {
    _count: NotificationLogCountAggregateOutputType | null;
    _min: NotificationLogMinAggregateOutputType | null;
    _max: NotificationLogMaxAggregateOutputType | null;
};
export type NotificationLogMinAggregateOutputType = {
    id: string | null;
    issueId: string | null;
    recipientId: string | null;
    fcmToken: string | null;
    title: string | null;
    body: string | null;
    sentAt: Date | null;
    status: string | null;
};
export type NotificationLogMaxAggregateOutputType = {
    id: string | null;
    issueId: string | null;
    recipientId: string | null;
    fcmToken: string | null;
    title: string | null;
    body: string | null;
    sentAt: Date | null;
    status: string | null;
};
export type NotificationLogCountAggregateOutputType = {
    id: number;
    issueId: number;
    recipientId: number;
    fcmToken: number;
    title: number;
    body: number;
    sentAt: number;
    status: number;
    _all: number;
};
export type NotificationLogMinAggregateInputType = {
    id?: true;
    issueId?: true;
    recipientId?: true;
    fcmToken?: true;
    title?: true;
    body?: true;
    sentAt?: true;
    status?: true;
};
export type NotificationLogMaxAggregateInputType = {
    id?: true;
    issueId?: true;
    recipientId?: true;
    fcmToken?: true;
    title?: true;
    body?: true;
    sentAt?: true;
    status?: true;
};
export type NotificationLogCountAggregateInputType = {
    id?: true;
    issueId?: true;
    recipientId?: true;
    fcmToken?: true;
    title?: true;
    body?: true;
    sentAt?: true;
    status?: true;
    _all?: true;
};
export type NotificationLogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationLogWhereInput;
    orderBy?: Prisma.NotificationLogOrderByWithRelationInput | Prisma.NotificationLogOrderByWithRelationInput[];
    cursor?: Prisma.NotificationLogWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | NotificationLogCountAggregateInputType;
    _min?: NotificationLogMinAggregateInputType;
    _max?: NotificationLogMaxAggregateInputType;
};
export type GetNotificationLogAggregateType<T extends NotificationLogAggregateArgs> = {
    [P in keyof T & keyof AggregateNotificationLog]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateNotificationLog[P]> : Prisma.GetScalarType<T[P], AggregateNotificationLog[P]>;
};
export type NotificationLogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationLogWhereInput;
    orderBy?: Prisma.NotificationLogOrderByWithAggregationInput | Prisma.NotificationLogOrderByWithAggregationInput[];
    by: Prisma.NotificationLogScalarFieldEnum[] | Prisma.NotificationLogScalarFieldEnum;
    having?: Prisma.NotificationLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NotificationLogCountAggregateInputType | true;
    _min?: NotificationLogMinAggregateInputType;
    _max?: NotificationLogMaxAggregateInputType;
};
export type NotificationLogGroupByOutputType = {
    id: string;
    issueId: string | null;
    recipientId: string;
    fcmToken: string;
    title: string;
    body: string;
    sentAt: Date;
    status: string;
    _count: NotificationLogCountAggregateOutputType | null;
    _min: NotificationLogMinAggregateOutputType | null;
    _max: NotificationLogMaxAggregateOutputType | null;
};
export type GetNotificationLogGroupByPayload<T extends NotificationLogGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<NotificationLogGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof NotificationLogGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], NotificationLogGroupByOutputType[P]> : Prisma.GetScalarType<T[P], NotificationLogGroupByOutputType[P]>;
}>>;
export type NotificationLogWhereInput = {
    AND?: Prisma.NotificationLogWhereInput | Prisma.NotificationLogWhereInput[];
    OR?: Prisma.NotificationLogWhereInput[];
    NOT?: Prisma.NotificationLogWhereInput | Prisma.NotificationLogWhereInput[];
    id?: Prisma.UuidFilter<"NotificationLog"> | string;
    issueId?: Prisma.UuidNullableFilter<"NotificationLog"> | string | null;
    recipientId?: Prisma.UuidFilter<"NotificationLog"> | string;
    fcmToken?: Prisma.StringFilter<"NotificationLog"> | string;
    title?: Prisma.StringFilter<"NotificationLog"> | string;
    body?: Prisma.StringFilter<"NotificationLog"> | string;
    sentAt?: Prisma.DateTimeFilter<"NotificationLog"> | Date | string;
    status?: Prisma.StringFilter<"NotificationLog"> | string;
    issue?: Prisma.XOR<Prisma.IssueNullableScalarRelationFilter, Prisma.IssueWhereInput> | null;
    recipient?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type NotificationLogOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    issueId?: Prisma.SortOrderInput | Prisma.SortOrder;
    recipientId?: Prisma.SortOrder;
    fcmToken?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    issue?: Prisma.IssueOrderByWithRelationInput;
    recipient?: Prisma.UserOrderByWithRelationInput;
};
export type NotificationLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.NotificationLogWhereInput | Prisma.NotificationLogWhereInput[];
    OR?: Prisma.NotificationLogWhereInput[];
    NOT?: Prisma.NotificationLogWhereInput | Prisma.NotificationLogWhereInput[];
    issueId?: Prisma.UuidNullableFilter<"NotificationLog"> | string | null;
    recipientId?: Prisma.UuidFilter<"NotificationLog"> | string;
    fcmToken?: Prisma.StringFilter<"NotificationLog"> | string;
    title?: Prisma.StringFilter<"NotificationLog"> | string;
    body?: Prisma.StringFilter<"NotificationLog"> | string;
    sentAt?: Prisma.DateTimeFilter<"NotificationLog"> | Date | string;
    status?: Prisma.StringFilter<"NotificationLog"> | string;
    issue?: Prisma.XOR<Prisma.IssueNullableScalarRelationFilter, Prisma.IssueWhereInput> | null;
    recipient?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type NotificationLogOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    issueId?: Prisma.SortOrderInput | Prisma.SortOrder;
    recipientId?: Prisma.SortOrder;
    fcmToken?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    _count?: Prisma.NotificationLogCountOrderByAggregateInput;
    _max?: Prisma.NotificationLogMaxOrderByAggregateInput;
    _min?: Prisma.NotificationLogMinOrderByAggregateInput;
};
export type NotificationLogScalarWhereWithAggregatesInput = {
    AND?: Prisma.NotificationLogScalarWhereWithAggregatesInput | Prisma.NotificationLogScalarWhereWithAggregatesInput[];
    OR?: Prisma.NotificationLogScalarWhereWithAggregatesInput[];
    NOT?: Prisma.NotificationLogScalarWhereWithAggregatesInput | Prisma.NotificationLogScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"NotificationLog"> | string;
    issueId?: Prisma.UuidNullableWithAggregatesFilter<"NotificationLog"> | string | null;
    recipientId?: Prisma.UuidWithAggregatesFilter<"NotificationLog"> | string;
    fcmToken?: Prisma.StringWithAggregatesFilter<"NotificationLog"> | string;
    title?: Prisma.StringWithAggregatesFilter<"NotificationLog"> | string;
    body?: Prisma.StringWithAggregatesFilter<"NotificationLog"> | string;
    sentAt?: Prisma.DateTimeWithAggregatesFilter<"NotificationLog"> | Date | string;
    status?: Prisma.StringWithAggregatesFilter<"NotificationLog"> | string;
};
export type NotificationLogCreateInput = {
    id?: string;
    fcmToken: string;
    title: string;
    body: string;
    sentAt?: Date | string;
    status: string;
    issue?: Prisma.IssueCreateNestedOneWithoutNotificationLogsInput;
    recipient: Prisma.UserCreateNestedOneWithoutNotificationLogsInput;
};
export type NotificationLogUncheckedCreateInput = {
    id?: string;
    issueId?: string | null;
    recipientId: string;
    fcmToken: string;
    title: string;
    body: string;
    sentAt?: Date | string;
    status: string;
};
export type NotificationLogUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fcmToken?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    sentAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    issue?: Prisma.IssueUpdateOneWithoutNotificationLogsNestedInput;
    recipient?: Prisma.UserUpdateOneRequiredWithoutNotificationLogsNestedInput;
};
export type NotificationLogUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    issueId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recipientId?: Prisma.StringFieldUpdateOperationsInput | string;
    fcmToken?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    sentAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type NotificationLogCreateManyInput = {
    id?: string;
    issueId?: string | null;
    recipientId: string;
    fcmToken: string;
    title: string;
    body: string;
    sentAt?: Date | string;
    status: string;
};
export type NotificationLogUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fcmToken?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    sentAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type NotificationLogUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    issueId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recipientId?: Prisma.StringFieldUpdateOperationsInput | string;
    fcmToken?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    sentAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type NotificationLogListRelationFilter = {
    every?: Prisma.NotificationLogWhereInput;
    some?: Prisma.NotificationLogWhereInput;
    none?: Prisma.NotificationLogWhereInput;
};
export type NotificationLogOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type NotificationLogCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    issueId?: Prisma.SortOrder;
    recipientId?: Prisma.SortOrder;
    fcmToken?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type NotificationLogMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    issueId?: Prisma.SortOrder;
    recipientId?: Prisma.SortOrder;
    fcmToken?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type NotificationLogMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    issueId?: Prisma.SortOrder;
    recipientId?: Prisma.SortOrder;
    fcmToken?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type NotificationLogCreateNestedManyWithoutRecipientInput = {
    create?: Prisma.XOR<Prisma.NotificationLogCreateWithoutRecipientInput, Prisma.NotificationLogUncheckedCreateWithoutRecipientInput> | Prisma.NotificationLogCreateWithoutRecipientInput[] | Prisma.NotificationLogUncheckedCreateWithoutRecipientInput[];
    connectOrCreate?: Prisma.NotificationLogCreateOrConnectWithoutRecipientInput | Prisma.NotificationLogCreateOrConnectWithoutRecipientInput[];
    createMany?: Prisma.NotificationLogCreateManyRecipientInputEnvelope;
    connect?: Prisma.NotificationLogWhereUniqueInput | Prisma.NotificationLogWhereUniqueInput[];
};
export type NotificationLogUncheckedCreateNestedManyWithoutRecipientInput = {
    create?: Prisma.XOR<Prisma.NotificationLogCreateWithoutRecipientInput, Prisma.NotificationLogUncheckedCreateWithoutRecipientInput> | Prisma.NotificationLogCreateWithoutRecipientInput[] | Prisma.NotificationLogUncheckedCreateWithoutRecipientInput[];
    connectOrCreate?: Prisma.NotificationLogCreateOrConnectWithoutRecipientInput | Prisma.NotificationLogCreateOrConnectWithoutRecipientInput[];
    createMany?: Prisma.NotificationLogCreateManyRecipientInputEnvelope;
    connect?: Prisma.NotificationLogWhereUniqueInput | Prisma.NotificationLogWhereUniqueInput[];
};
export type NotificationLogUpdateManyWithoutRecipientNestedInput = {
    create?: Prisma.XOR<Prisma.NotificationLogCreateWithoutRecipientInput, Prisma.NotificationLogUncheckedCreateWithoutRecipientInput> | Prisma.NotificationLogCreateWithoutRecipientInput[] | Prisma.NotificationLogUncheckedCreateWithoutRecipientInput[];
    connectOrCreate?: Prisma.NotificationLogCreateOrConnectWithoutRecipientInput | Prisma.NotificationLogCreateOrConnectWithoutRecipientInput[];
    upsert?: Prisma.NotificationLogUpsertWithWhereUniqueWithoutRecipientInput | Prisma.NotificationLogUpsertWithWhereUniqueWithoutRecipientInput[];
    createMany?: Prisma.NotificationLogCreateManyRecipientInputEnvelope;
    set?: Prisma.NotificationLogWhereUniqueInput | Prisma.NotificationLogWhereUniqueInput[];
    disconnect?: Prisma.NotificationLogWhereUniqueInput | Prisma.NotificationLogWhereUniqueInput[];
    delete?: Prisma.NotificationLogWhereUniqueInput | Prisma.NotificationLogWhereUniqueInput[];
    connect?: Prisma.NotificationLogWhereUniqueInput | Prisma.NotificationLogWhereUniqueInput[];
    update?: Prisma.NotificationLogUpdateWithWhereUniqueWithoutRecipientInput | Prisma.NotificationLogUpdateWithWhereUniqueWithoutRecipientInput[];
    updateMany?: Prisma.NotificationLogUpdateManyWithWhereWithoutRecipientInput | Prisma.NotificationLogUpdateManyWithWhereWithoutRecipientInput[];
    deleteMany?: Prisma.NotificationLogScalarWhereInput | Prisma.NotificationLogScalarWhereInput[];
};
export type NotificationLogUncheckedUpdateManyWithoutRecipientNestedInput = {
    create?: Prisma.XOR<Prisma.NotificationLogCreateWithoutRecipientInput, Prisma.NotificationLogUncheckedCreateWithoutRecipientInput> | Prisma.NotificationLogCreateWithoutRecipientInput[] | Prisma.NotificationLogUncheckedCreateWithoutRecipientInput[];
    connectOrCreate?: Prisma.NotificationLogCreateOrConnectWithoutRecipientInput | Prisma.NotificationLogCreateOrConnectWithoutRecipientInput[];
    upsert?: Prisma.NotificationLogUpsertWithWhereUniqueWithoutRecipientInput | Prisma.NotificationLogUpsertWithWhereUniqueWithoutRecipientInput[];
    createMany?: Prisma.NotificationLogCreateManyRecipientInputEnvelope;
    set?: Prisma.NotificationLogWhereUniqueInput | Prisma.NotificationLogWhereUniqueInput[];
    disconnect?: Prisma.NotificationLogWhereUniqueInput | Prisma.NotificationLogWhereUniqueInput[];
    delete?: Prisma.NotificationLogWhereUniqueInput | Prisma.NotificationLogWhereUniqueInput[];
    connect?: Prisma.NotificationLogWhereUniqueInput | Prisma.NotificationLogWhereUniqueInput[];
    update?: Prisma.NotificationLogUpdateWithWhereUniqueWithoutRecipientInput | Prisma.NotificationLogUpdateWithWhereUniqueWithoutRecipientInput[];
    updateMany?: Prisma.NotificationLogUpdateManyWithWhereWithoutRecipientInput | Prisma.NotificationLogUpdateManyWithWhereWithoutRecipientInput[];
    deleteMany?: Prisma.NotificationLogScalarWhereInput | Prisma.NotificationLogScalarWhereInput[];
};
export type NotificationLogCreateNestedManyWithoutIssueInput = {
    create?: Prisma.XOR<Prisma.NotificationLogCreateWithoutIssueInput, Prisma.NotificationLogUncheckedCreateWithoutIssueInput> | Prisma.NotificationLogCreateWithoutIssueInput[] | Prisma.NotificationLogUncheckedCreateWithoutIssueInput[];
    connectOrCreate?: Prisma.NotificationLogCreateOrConnectWithoutIssueInput | Prisma.NotificationLogCreateOrConnectWithoutIssueInput[];
    createMany?: Prisma.NotificationLogCreateManyIssueInputEnvelope;
    connect?: Prisma.NotificationLogWhereUniqueInput | Prisma.NotificationLogWhereUniqueInput[];
};
export type NotificationLogUncheckedCreateNestedManyWithoutIssueInput = {
    create?: Prisma.XOR<Prisma.NotificationLogCreateWithoutIssueInput, Prisma.NotificationLogUncheckedCreateWithoutIssueInput> | Prisma.NotificationLogCreateWithoutIssueInput[] | Prisma.NotificationLogUncheckedCreateWithoutIssueInput[];
    connectOrCreate?: Prisma.NotificationLogCreateOrConnectWithoutIssueInput | Prisma.NotificationLogCreateOrConnectWithoutIssueInput[];
    createMany?: Prisma.NotificationLogCreateManyIssueInputEnvelope;
    connect?: Prisma.NotificationLogWhereUniqueInput | Prisma.NotificationLogWhereUniqueInput[];
};
export type NotificationLogUpdateManyWithoutIssueNestedInput = {
    create?: Prisma.XOR<Prisma.NotificationLogCreateWithoutIssueInput, Prisma.NotificationLogUncheckedCreateWithoutIssueInput> | Prisma.NotificationLogCreateWithoutIssueInput[] | Prisma.NotificationLogUncheckedCreateWithoutIssueInput[];
    connectOrCreate?: Prisma.NotificationLogCreateOrConnectWithoutIssueInput | Prisma.NotificationLogCreateOrConnectWithoutIssueInput[];
    upsert?: Prisma.NotificationLogUpsertWithWhereUniqueWithoutIssueInput | Prisma.NotificationLogUpsertWithWhereUniqueWithoutIssueInput[];
    createMany?: Prisma.NotificationLogCreateManyIssueInputEnvelope;
    set?: Prisma.NotificationLogWhereUniqueInput | Prisma.NotificationLogWhereUniqueInput[];
    disconnect?: Prisma.NotificationLogWhereUniqueInput | Prisma.NotificationLogWhereUniqueInput[];
    delete?: Prisma.NotificationLogWhereUniqueInput | Prisma.NotificationLogWhereUniqueInput[];
    connect?: Prisma.NotificationLogWhereUniqueInput | Prisma.NotificationLogWhereUniqueInput[];
    update?: Prisma.NotificationLogUpdateWithWhereUniqueWithoutIssueInput | Prisma.NotificationLogUpdateWithWhereUniqueWithoutIssueInput[];
    updateMany?: Prisma.NotificationLogUpdateManyWithWhereWithoutIssueInput | Prisma.NotificationLogUpdateManyWithWhereWithoutIssueInput[];
    deleteMany?: Prisma.NotificationLogScalarWhereInput | Prisma.NotificationLogScalarWhereInput[];
};
export type NotificationLogUncheckedUpdateManyWithoutIssueNestedInput = {
    create?: Prisma.XOR<Prisma.NotificationLogCreateWithoutIssueInput, Prisma.NotificationLogUncheckedCreateWithoutIssueInput> | Prisma.NotificationLogCreateWithoutIssueInput[] | Prisma.NotificationLogUncheckedCreateWithoutIssueInput[];
    connectOrCreate?: Prisma.NotificationLogCreateOrConnectWithoutIssueInput | Prisma.NotificationLogCreateOrConnectWithoutIssueInput[];
    upsert?: Prisma.NotificationLogUpsertWithWhereUniqueWithoutIssueInput | Prisma.NotificationLogUpsertWithWhereUniqueWithoutIssueInput[];
    createMany?: Prisma.NotificationLogCreateManyIssueInputEnvelope;
    set?: Prisma.NotificationLogWhereUniqueInput | Prisma.NotificationLogWhereUniqueInput[];
    disconnect?: Prisma.NotificationLogWhereUniqueInput | Prisma.NotificationLogWhereUniqueInput[];
    delete?: Prisma.NotificationLogWhereUniqueInput | Prisma.NotificationLogWhereUniqueInput[];
    connect?: Prisma.NotificationLogWhereUniqueInput | Prisma.NotificationLogWhereUniqueInput[];
    update?: Prisma.NotificationLogUpdateWithWhereUniqueWithoutIssueInput | Prisma.NotificationLogUpdateWithWhereUniqueWithoutIssueInput[];
    updateMany?: Prisma.NotificationLogUpdateManyWithWhereWithoutIssueInput | Prisma.NotificationLogUpdateManyWithWhereWithoutIssueInput[];
    deleteMany?: Prisma.NotificationLogScalarWhereInput | Prisma.NotificationLogScalarWhereInput[];
};
export type NotificationLogCreateWithoutRecipientInput = {
    id?: string;
    fcmToken: string;
    title: string;
    body: string;
    sentAt?: Date | string;
    status: string;
    issue?: Prisma.IssueCreateNestedOneWithoutNotificationLogsInput;
};
export type NotificationLogUncheckedCreateWithoutRecipientInput = {
    id?: string;
    issueId?: string | null;
    fcmToken: string;
    title: string;
    body: string;
    sentAt?: Date | string;
    status: string;
};
export type NotificationLogCreateOrConnectWithoutRecipientInput = {
    where: Prisma.NotificationLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.NotificationLogCreateWithoutRecipientInput, Prisma.NotificationLogUncheckedCreateWithoutRecipientInput>;
};
export type NotificationLogCreateManyRecipientInputEnvelope = {
    data: Prisma.NotificationLogCreateManyRecipientInput | Prisma.NotificationLogCreateManyRecipientInput[];
    skipDuplicates?: boolean;
};
export type NotificationLogUpsertWithWhereUniqueWithoutRecipientInput = {
    where: Prisma.NotificationLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.NotificationLogUpdateWithoutRecipientInput, Prisma.NotificationLogUncheckedUpdateWithoutRecipientInput>;
    create: Prisma.XOR<Prisma.NotificationLogCreateWithoutRecipientInput, Prisma.NotificationLogUncheckedCreateWithoutRecipientInput>;
};
export type NotificationLogUpdateWithWhereUniqueWithoutRecipientInput = {
    where: Prisma.NotificationLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.NotificationLogUpdateWithoutRecipientInput, Prisma.NotificationLogUncheckedUpdateWithoutRecipientInput>;
};
export type NotificationLogUpdateManyWithWhereWithoutRecipientInput = {
    where: Prisma.NotificationLogScalarWhereInput;
    data: Prisma.XOR<Prisma.NotificationLogUpdateManyMutationInput, Prisma.NotificationLogUncheckedUpdateManyWithoutRecipientInput>;
};
export type NotificationLogScalarWhereInput = {
    AND?: Prisma.NotificationLogScalarWhereInput | Prisma.NotificationLogScalarWhereInput[];
    OR?: Prisma.NotificationLogScalarWhereInput[];
    NOT?: Prisma.NotificationLogScalarWhereInput | Prisma.NotificationLogScalarWhereInput[];
    id?: Prisma.UuidFilter<"NotificationLog"> | string;
    issueId?: Prisma.UuidNullableFilter<"NotificationLog"> | string | null;
    recipientId?: Prisma.UuidFilter<"NotificationLog"> | string;
    fcmToken?: Prisma.StringFilter<"NotificationLog"> | string;
    title?: Prisma.StringFilter<"NotificationLog"> | string;
    body?: Prisma.StringFilter<"NotificationLog"> | string;
    sentAt?: Prisma.DateTimeFilter<"NotificationLog"> | Date | string;
    status?: Prisma.StringFilter<"NotificationLog"> | string;
};
export type NotificationLogCreateWithoutIssueInput = {
    id?: string;
    fcmToken: string;
    title: string;
    body: string;
    sentAt?: Date | string;
    status: string;
    recipient: Prisma.UserCreateNestedOneWithoutNotificationLogsInput;
};
export type NotificationLogUncheckedCreateWithoutIssueInput = {
    id?: string;
    recipientId: string;
    fcmToken: string;
    title: string;
    body: string;
    sentAt?: Date | string;
    status: string;
};
export type NotificationLogCreateOrConnectWithoutIssueInput = {
    where: Prisma.NotificationLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.NotificationLogCreateWithoutIssueInput, Prisma.NotificationLogUncheckedCreateWithoutIssueInput>;
};
export type NotificationLogCreateManyIssueInputEnvelope = {
    data: Prisma.NotificationLogCreateManyIssueInput | Prisma.NotificationLogCreateManyIssueInput[];
    skipDuplicates?: boolean;
};
export type NotificationLogUpsertWithWhereUniqueWithoutIssueInput = {
    where: Prisma.NotificationLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.NotificationLogUpdateWithoutIssueInput, Prisma.NotificationLogUncheckedUpdateWithoutIssueInput>;
    create: Prisma.XOR<Prisma.NotificationLogCreateWithoutIssueInput, Prisma.NotificationLogUncheckedCreateWithoutIssueInput>;
};
export type NotificationLogUpdateWithWhereUniqueWithoutIssueInput = {
    where: Prisma.NotificationLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.NotificationLogUpdateWithoutIssueInput, Prisma.NotificationLogUncheckedUpdateWithoutIssueInput>;
};
export type NotificationLogUpdateManyWithWhereWithoutIssueInput = {
    where: Prisma.NotificationLogScalarWhereInput;
    data: Prisma.XOR<Prisma.NotificationLogUpdateManyMutationInput, Prisma.NotificationLogUncheckedUpdateManyWithoutIssueInput>;
};
export type NotificationLogCreateManyRecipientInput = {
    id?: string;
    issueId?: string | null;
    fcmToken: string;
    title: string;
    body: string;
    sentAt?: Date | string;
    status: string;
};
export type NotificationLogUpdateWithoutRecipientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fcmToken?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    sentAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    issue?: Prisma.IssueUpdateOneWithoutNotificationLogsNestedInput;
};
export type NotificationLogUncheckedUpdateWithoutRecipientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    issueId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fcmToken?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    sentAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type NotificationLogUncheckedUpdateManyWithoutRecipientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    issueId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fcmToken?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    sentAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type NotificationLogCreateManyIssueInput = {
    id?: string;
    recipientId: string;
    fcmToken: string;
    title: string;
    body: string;
    sentAt?: Date | string;
    status: string;
};
export type NotificationLogUpdateWithoutIssueInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fcmToken?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    sentAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    recipient?: Prisma.UserUpdateOneRequiredWithoutNotificationLogsNestedInput;
};
export type NotificationLogUncheckedUpdateWithoutIssueInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recipientId?: Prisma.StringFieldUpdateOperationsInput | string;
    fcmToken?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    sentAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type NotificationLogUncheckedUpdateManyWithoutIssueInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recipientId?: Prisma.StringFieldUpdateOperationsInput | string;
    fcmToken?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    sentAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type NotificationLogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    issueId?: boolean;
    recipientId?: boolean;
    fcmToken?: boolean;
    title?: boolean;
    body?: boolean;
    sentAt?: boolean;
    status?: boolean;
    issue?: boolean | Prisma.NotificationLog$issueArgs<ExtArgs>;
    recipient?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["notificationLog"]>;
export type NotificationLogSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    issueId?: boolean;
    recipientId?: boolean;
    fcmToken?: boolean;
    title?: boolean;
    body?: boolean;
    sentAt?: boolean;
    status?: boolean;
    issue?: boolean | Prisma.NotificationLog$issueArgs<ExtArgs>;
    recipient?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["notificationLog"]>;
export type NotificationLogSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    issueId?: boolean;
    recipientId?: boolean;
    fcmToken?: boolean;
    title?: boolean;
    body?: boolean;
    sentAt?: boolean;
    status?: boolean;
    issue?: boolean | Prisma.NotificationLog$issueArgs<ExtArgs>;
    recipient?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["notificationLog"]>;
export type NotificationLogSelectScalar = {
    id?: boolean;
    issueId?: boolean;
    recipientId?: boolean;
    fcmToken?: boolean;
    title?: boolean;
    body?: boolean;
    sentAt?: boolean;
    status?: boolean;
};
export type NotificationLogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "issueId" | "recipientId" | "fcmToken" | "title" | "body" | "sentAt" | "status", ExtArgs["result"]["notificationLog"]>;
export type NotificationLogInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    issue?: boolean | Prisma.NotificationLog$issueArgs<ExtArgs>;
    recipient?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type NotificationLogIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    issue?: boolean | Prisma.NotificationLog$issueArgs<ExtArgs>;
    recipient?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type NotificationLogIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    issue?: boolean | Prisma.NotificationLog$issueArgs<ExtArgs>;
    recipient?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $NotificationLogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "NotificationLog";
    objects: {
        issue: Prisma.$IssuePayload<ExtArgs> | null;
        recipient: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        issueId: string | null;
        recipientId: string;
        fcmToken: string;
        title: string;
        body: string;
        sentAt: Date;
        status: string;
    }, ExtArgs["result"]["notificationLog"]>;
    composites: {};
};
export type NotificationLogGetPayload<S extends boolean | null | undefined | NotificationLogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$NotificationLogPayload, S>;
export type NotificationLogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<NotificationLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: NotificationLogCountAggregateInputType | true;
};
export interface NotificationLogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['NotificationLog'];
        meta: {
            name: 'NotificationLog';
        };
    };
    findUnique<T extends NotificationLogFindUniqueArgs>(args: Prisma.SelectSubset<T, NotificationLogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__NotificationLogClient<runtime.Types.Result.GetResult<Prisma.$NotificationLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends NotificationLogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, NotificationLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__NotificationLogClient<runtime.Types.Result.GetResult<Prisma.$NotificationLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends NotificationLogFindFirstArgs>(args?: Prisma.SelectSubset<T, NotificationLogFindFirstArgs<ExtArgs>>): Prisma.Prisma__NotificationLogClient<runtime.Types.Result.GetResult<Prisma.$NotificationLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends NotificationLogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, NotificationLogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__NotificationLogClient<runtime.Types.Result.GetResult<Prisma.$NotificationLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends NotificationLogFindManyArgs>(args?: Prisma.SelectSubset<T, NotificationLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends NotificationLogCreateArgs>(args: Prisma.SelectSubset<T, NotificationLogCreateArgs<ExtArgs>>): Prisma.Prisma__NotificationLogClient<runtime.Types.Result.GetResult<Prisma.$NotificationLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends NotificationLogCreateManyArgs>(args?: Prisma.SelectSubset<T, NotificationLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends NotificationLogCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, NotificationLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends NotificationLogDeleteArgs>(args: Prisma.SelectSubset<T, NotificationLogDeleteArgs<ExtArgs>>): Prisma.Prisma__NotificationLogClient<runtime.Types.Result.GetResult<Prisma.$NotificationLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends NotificationLogUpdateArgs>(args: Prisma.SelectSubset<T, NotificationLogUpdateArgs<ExtArgs>>): Prisma.Prisma__NotificationLogClient<runtime.Types.Result.GetResult<Prisma.$NotificationLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends NotificationLogDeleteManyArgs>(args?: Prisma.SelectSubset<T, NotificationLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends NotificationLogUpdateManyArgs>(args: Prisma.SelectSubset<T, NotificationLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends NotificationLogUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, NotificationLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends NotificationLogUpsertArgs>(args: Prisma.SelectSubset<T, NotificationLogUpsertArgs<ExtArgs>>): Prisma.Prisma__NotificationLogClient<runtime.Types.Result.GetResult<Prisma.$NotificationLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends NotificationLogCountArgs>(args?: Prisma.Subset<T, NotificationLogCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], NotificationLogCountAggregateOutputType> : number>;
    aggregate<T extends NotificationLogAggregateArgs>(args: Prisma.Subset<T, NotificationLogAggregateArgs>): Prisma.PrismaPromise<GetNotificationLogAggregateType<T>>;
    groupBy<T extends NotificationLogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: NotificationLogGroupByArgs['orderBy'];
    } : {
        orderBy?: NotificationLogGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, NotificationLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: NotificationLogFieldRefs;
}
export interface Prisma__NotificationLogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    issue<T extends Prisma.NotificationLog$issueArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.NotificationLog$issueArgs<ExtArgs>>): Prisma.Prisma__IssueClient<runtime.Types.Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    recipient<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface NotificationLogFieldRefs {
    readonly id: Prisma.FieldRef<"NotificationLog", 'String'>;
    readonly issueId: Prisma.FieldRef<"NotificationLog", 'String'>;
    readonly recipientId: Prisma.FieldRef<"NotificationLog", 'String'>;
    readonly fcmToken: Prisma.FieldRef<"NotificationLog", 'String'>;
    readonly title: Prisma.FieldRef<"NotificationLog", 'String'>;
    readonly body: Prisma.FieldRef<"NotificationLog", 'String'>;
    readonly sentAt: Prisma.FieldRef<"NotificationLog", 'DateTime'>;
    readonly status: Prisma.FieldRef<"NotificationLog", 'String'>;
}
export type NotificationLogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationLogSelect<ExtArgs> | null;
    omit?: Prisma.NotificationLogOmit<ExtArgs> | null;
    include?: Prisma.NotificationLogInclude<ExtArgs> | null;
    where: Prisma.NotificationLogWhereUniqueInput;
};
export type NotificationLogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationLogSelect<ExtArgs> | null;
    omit?: Prisma.NotificationLogOmit<ExtArgs> | null;
    include?: Prisma.NotificationLogInclude<ExtArgs> | null;
    where: Prisma.NotificationLogWhereUniqueInput;
};
export type NotificationLogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type NotificationLogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type NotificationLogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type NotificationLogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationLogSelect<ExtArgs> | null;
    omit?: Prisma.NotificationLogOmit<ExtArgs> | null;
    include?: Prisma.NotificationLogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NotificationLogCreateInput, Prisma.NotificationLogUncheckedCreateInput>;
};
export type NotificationLogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.NotificationLogCreateManyInput | Prisma.NotificationLogCreateManyInput[];
    skipDuplicates?: boolean;
};
export type NotificationLogCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationLogSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.NotificationLogOmit<ExtArgs> | null;
    data: Prisma.NotificationLogCreateManyInput | Prisma.NotificationLogCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.NotificationLogIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type NotificationLogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationLogSelect<ExtArgs> | null;
    omit?: Prisma.NotificationLogOmit<ExtArgs> | null;
    include?: Prisma.NotificationLogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NotificationLogUpdateInput, Prisma.NotificationLogUncheckedUpdateInput>;
    where: Prisma.NotificationLogWhereUniqueInput;
};
export type NotificationLogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.NotificationLogUpdateManyMutationInput, Prisma.NotificationLogUncheckedUpdateManyInput>;
    where?: Prisma.NotificationLogWhereInput;
    limit?: number;
};
export type NotificationLogUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationLogSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.NotificationLogOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NotificationLogUpdateManyMutationInput, Prisma.NotificationLogUncheckedUpdateManyInput>;
    where?: Prisma.NotificationLogWhereInput;
    limit?: number;
    include?: Prisma.NotificationLogIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type NotificationLogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationLogSelect<ExtArgs> | null;
    omit?: Prisma.NotificationLogOmit<ExtArgs> | null;
    include?: Prisma.NotificationLogInclude<ExtArgs> | null;
    where: Prisma.NotificationLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.NotificationLogCreateInput, Prisma.NotificationLogUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.NotificationLogUpdateInput, Prisma.NotificationLogUncheckedUpdateInput>;
};
export type NotificationLogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationLogSelect<ExtArgs> | null;
    omit?: Prisma.NotificationLogOmit<ExtArgs> | null;
    include?: Prisma.NotificationLogInclude<ExtArgs> | null;
    where: Prisma.NotificationLogWhereUniqueInput;
};
export type NotificationLogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationLogWhereInput;
    limit?: number;
};
export type NotificationLog$issueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IssueSelect<ExtArgs> | null;
    omit?: Prisma.IssueOmit<ExtArgs> | null;
    include?: Prisma.IssueInclude<ExtArgs> | null;
    where?: Prisma.IssueWhereInput;
};
export type NotificationLogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationLogSelect<ExtArgs> | null;
    omit?: Prisma.NotificationLogOmit<ExtArgs> | null;
    include?: Prisma.NotificationLogInclude<ExtArgs> | null;
};
