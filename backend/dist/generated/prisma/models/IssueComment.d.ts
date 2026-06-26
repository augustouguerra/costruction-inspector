import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type IssueCommentModel = runtime.Types.Result.DefaultSelection<Prisma.$IssueCommentPayload>;
export type AggregateIssueComment = {
    _count: IssueCommentCountAggregateOutputType | null;
    _min: IssueCommentMinAggregateOutputType | null;
    _max: IssueCommentMaxAggregateOutputType | null;
};
export type IssueCommentMinAggregateOutputType = {
    id: string | null;
    issueId: string | null;
    authorId: string | null;
    body: string | null;
    createdAt: Date | null;
};
export type IssueCommentMaxAggregateOutputType = {
    id: string | null;
    issueId: string | null;
    authorId: string | null;
    body: string | null;
    createdAt: Date | null;
};
export type IssueCommentCountAggregateOutputType = {
    id: number;
    issueId: number;
    authorId: number;
    body: number;
    createdAt: number;
    _all: number;
};
export type IssueCommentMinAggregateInputType = {
    id?: true;
    issueId?: true;
    authorId?: true;
    body?: true;
    createdAt?: true;
};
export type IssueCommentMaxAggregateInputType = {
    id?: true;
    issueId?: true;
    authorId?: true;
    body?: true;
    createdAt?: true;
};
export type IssueCommentCountAggregateInputType = {
    id?: true;
    issueId?: true;
    authorId?: true;
    body?: true;
    createdAt?: true;
    _all?: true;
};
export type IssueCommentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IssueCommentWhereInput;
    orderBy?: Prisma.IssueCommentOrderByWithRelationInput | Prisma.IssueCommentOrderByWithRelationInput[];
    cursor?: Prisma.IssueCommentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | IssueCommentCountAggregateInputType;
    _min?: IssueCommentMinAggregateInputType;
    _max?: IssueCommentMaxAggregateInputType;
};
export type GetIssueCommentAggregateType<T extends IssueCommentAggregateArgs> = {
    [P in keyof T & keyof AggregateIssueComment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateIssueComment[P]> : Prisma.GetScalarType<T[P], AggregateIssueComment[P]>;
};
export type IssueCommentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IssueCommentWhereInput;
    orderBy?: Prisma.IssueCommentOrderByWithAggregationInput | Prisma.IssueCommentOrderByWithAggregationInput[];
    by: Prisma.IssueCommentScalarFieldEnum[] | Prisma.IssueCommentScalarFieldEnum;
    having?: Prisma.IssueCommentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: IssueCommentCountAggregateInputType | true;
    _min?: IssueCommentMinAggregateInputType;
    _max?: IssueCommentMaxAggregateInputType;
};
export type IssueCommentGroupByOutputType = {
    id: string;
    issueId: string;
    authorId: string;
    body: string;
    createdAt: Date;
    _count: IssueCommentCountAggregateOutputType | null;
    _min: IssueCommentMinAggregateOutputType | null;
    _max: IssueCommentMaxAggregateOutputType | null;
};
export type GetIssueCommentGroupByPayload<T extends IssueCommentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<IssueCommentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof IssueCommentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], IssueCommentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], IssueCommentGroupByOutputType[P]>;
}>>;
export type IssueCommentWhereInput = {
    AND?: Prisma.IssueCommentWhereInput | Prisma.IssueCommentWhereInput[];
    OR?: Prisma.IssueCommentWhereInput[];
    NOT?: Prisma.IssueCommentWhereInput | Prisma.IssueCommentWhereInput[];
    id?: Prisma.UuidFilter<"IssueComment"> | string;
    issueId?: Prisma.UuidFilter<"IssueComment"> | string;
    authorId?: Prisma.UuidFilter<"IssueComment"> | string;
    body?: Prisma.StringFilter<"IssueComment"> | string;
    createdAt?: Prisma.DateTimeFilter<"IssueComment"> | Date | string;
    issue?: Prisma.XOR<Prisma.IssueScalarRelationFilter, Prisma.IssueWhereInput>;
    author?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type IssueCommentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    issueId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    issue?: Prisma.IssueOrderByWithRelationInput;
    author?: Prisma.UserOrderByWithRelationInput;
};
export type IssueCommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.IssueCommentWhereInput | Prisma.IssueCommentWhereInput[];
    OR?: Prisma.IssueCommentWhereInput[];
    NOT?: Prisma.IssueCommentWhereInput | Prisma.IssueCommentWhereInput[];
    issueId?: Prisma.UuidFilter<"IssueComment"> | string;
    authorId?: Prisma.UuidFilter<"IssueComment"> | string;
    body?: Prisma.StringFilter<"IssueComment"> | string;
    createdAt?: Prisma.DateTimeFilter<"IssueComment"> | Date | string;
    issue?: Prisma.XOR<Prisma.IssueScalarRelationFilter, Prisma.IssueWhereInput>;
    author?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type IssueCommentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    issueId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.IssueCommentCountOrderByAggregateInput;
    _max?: Prisma.IssueCommentMaxOrderByAggregateInput;
    _min?: Prisma.IssueCommentMinOrderByAggregateInput;
};
export type IssueCommentScalarWhereWithAggregatesInput = {
    AND?: Prisma.IssueCommentScalarWhereWithAggregatesInput | Prisma.IssueCommentScalarWhereWithAggregatesInput[];
    OR?: Prisma.IssueCommentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.IssueCommentScalarWhereWithAggregatesInput | Prisma.IssueCommentScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"IssueComment"> | string;
    issueId?: Prisma.UuidWithAggregatesFilter<"IssueComment"> | string;
    authorId?: Prisma.UuidWithAggregatesFilter<"IssueComment"> | string;
    body?: Prisma.StringWithAggregatesFilter<"IssueComment"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"IssueComment"> | Date | string;
};
export type IssueCommentCreateInput = {
    id?: string;
    body: string;
    createdAt?: Date | string;
    issue: Prisma.IssueCreateNestedOneWithoutCommentsInput;
    author: Prisma.UserCreateNestedOneWithoutIssueCommentsInput;
};
export type IssueCommentUncheckedCreateInput = {
    id?: string;
    issueId: string;
    authorId: string;
    body: string;
    createdAt?: Date | string;
};
export type IssueCommentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issue?: Prisma.IssueUpdateOneRequiredWithoutCommentsNestedInput;
    author?: Prisma.UserUpdateOneRequiredWithoutIssueCommentsNestedInput;
};
export type IssueCommentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    issueId?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IssueCommentCreateManyInput = {
    id?: string;
    issueId: string;
    authorId: string;
    body: string;
    createdAt?: Date | string;
};
export type IssueCommentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IssueCommentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    issueId?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IssueCommentListRelationFilter = {
    every?: Prisma.IssueCommentWhereInput;
    some?: Prisma.IssueCommentWhereInput;
    none?: Prisma.IssueCommentWhereInput;
};
export type IssueCommentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type IssueCommentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    issueId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type IssueCommentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    issueId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type IssueCommentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    issueId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type IssueCommentCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.IssueCommentCreateWithoutAuthorInput, Prisma.IssueCommentUncheckedCreateWithoutAuthorInput> | Prisma.IssueCommentCreateWithoutAuthorInput[] | Prisma.IssueCommentUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.IssueCommentCreateOrConnectWithoutAuthorInput | Prisma.IssueCommentCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.IssueCommentCreateManyAuthorInputEnvelope;
    connect?: Prisma.IssueCommentWhereUniqueInput | Prisma.IssueCommentWhereUniqueInput[];
};
export type IssueCommentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.IssueCommentCreateWithoutAuthorInput, Prisma.IssueCommentUncheckedCreateWithoutAuthorInput> | Prisma.IssueCommentCreateWithoutAuthorInput[] | Prisma.IssueCommentUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.IssueCommentCreateOrConnectWithoutAuthorInput | Prisma.IssueCommentCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.IssueCommentCreateManyAuthorInputEnvelope;
    connect?: Prisma.IssueCommentWhereUniqueInput | Prisma.IssueCommentWhereUniqueInput[];
};
export type IssueCommentUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.IssueCommentCreateWithoutAuthorInput, Prisma.IssueCommentUncheckedCreateWithoutAuthorInput> | Prisma.IssueCommentCreateWithoutAuthorInput[] | Prisma.IssueCommentUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.IssueCommentCreateOrConnectWithoutAuthorInput | Prisma.IssueCommentCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.IssueCommentUpsertWithWhereUniqueWithoutAuthorInput | Prisma.IssueCommentUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.IssueCommentCreateManyAuthorInputEnvelope;
    set?: Prisma.IssueCommentWhereUniqueInput | Prisma.IssueCommentWhereUniqueInput[];
    disconnect?: Prisma.IssueCommentWhereUniqueInput | Prisma.IssueCommentWhereUniqueInput[];
    delete?: Prisma.IssueCommentWhereUniqueInput | Prisma.IssueCommentWhereUniqueInput[];
    connect?: Prisma.IssueCommentWhereUniqueInput | Prisma.IssueCommentWhereUniqueInput[];
    update?: Prisma.IssueCommentUpdateWithWhereUniqueWithoutAuthorInput | Prisma.IssueCommentUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.IssueCommentUpdateManyWithWhereWithoutAuthorInput | Prisma.IssueCommentUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.IssueCommentScalarWhereInput | Prisma.IssueCommentScalarWhereInput[];
};
export type IssueCommentUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.IssueCommentCreateWithoutAuthorInput, Prisma.IssueCommentUncheckedCreateWithoutAuthorInput> | Prisma.IssueCommentCreateWithoutAuthorInput[] | Prisma.IssueCommentUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.IssueCommentCreateOrConnectWithoutAuthorInput | Prisma.IssueCommentCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.IssueCommentUpsertWithWhereUniqueWithoutAuthorInput | Prisma.IssueCommentUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.IssueCommentCreateManyAuthorInputEnvelope;
    set?: Prisma.IssueCommentWhereUniqueInput | Prisma.IssueCommentWhereUniqueInput[];
    disconnect?: Prisma.IssueCommentWhereUniqueInput | Prisma.IssueCommentWhereUniqueInput[];
    delete?: Prisma.IssueCommentWhereUniqueInput | Prisma.IssueCommentWhereUniqueInput[];
    connect?: Prisma.IssueCommentWhereUniqueInput | Prisma.IssueCommentWhereUniqueInput[];
    update?: Prisma.IssueCommentUpdateWithWhereUniqueWithoutAuthorInput | Prisma.IssueCommentUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.IssueCommentUpdateManyWithWhereWithoutAuthorInput | Prisma.IssueCommentUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.IssueCommentScalarWhereInput | Prisma.IssueCommentScalarWhereInput[];
};
export type IssueCommentCreateNestedManyWithoutIssueInput = {
    create?: Prisma.XOR<Prisma.IssueCommentCreateWithoutIssueInput, Prisma.IssueCommentUncheckedCreateWithoutIssueInput> | Prisma.IssueCommentCreateWithoutIssueInput[] | Prisma.IssueCommentUncheckedCreateWithoutIssueInput[];
    connectOrCreate?: Prisma.IssueCommentCreateOrConnectWithoutIssueInput | Prisma.IssueCommentCreateOrConnectWithoutIssueInput[];
    createMany?: Prisma.IssueCommentCreateManyIssueInputEnvelope;
    connect?: Prisma.IssueCommentWhereUniqueInput | Prisma.IssueCommentWhereUniqueInput[];
};
export type IssueCommentUncheckedCreateNestedManyWithoutIssueInput = {
    create?: Prisma.XOR<Prisma.IssueCommentCreateWithoutIssueInput, Prisma.IssueCommentUncheckedCreateWithoutIssueInput> | Prisma.IssueCommentCreateWithoutIssueInput[] | Prisma.IssueCommentUncheckedCreateWithoutIssueInput[];
    connectOrCreate?: Prisma.IssueCommentCreateOrConnectWithoutIssueInput | Prisma.IssueCommentCreateOrConnectWithoutIssueInput[];
    createMany?: Prisma.IssueCommentCreateManyIssueInputEnvelope;
    connect?: Prisma.IssueCommentWhereUniqueInput | Prisma.IssueCommentWhereUniqueInput[];
};
export type IssueCommentUpdateManyWithoutIssueNestedInput = {
    create?: Prisma.XOR<Prisma.IssueCommentCreateWithoutIssueInput, Prisma.IssueCommentUncheckedCreateWithoutIssueInput> | Prisma.IssueCommentCreateWithoutIssueInput[] | Prisma.IssueCommentUncheckedCreateWithoutIssueInput[];
    connectOrCreate?: Prisma.IssueCommentCreateOrConnectWithoutIssueInput | Prisma.IssueCommentCreateOrConnectWithoutIssueInput[];
    upsert?: Prisma.IssueCommentUpsertWithWhereUniqueWithoutIssueInput | Prisma.IssueCommentUpsertWithWhereUniqueWithoutIssueInput[];
    createMany?: Prisma.IssueCommentCreateManyIssueInputEnvelope;
    set?: Prisma.IssueCommentWhereUniqueInput | Prisma.IssueCommentWhereUniqueInput[];
    disconnect?: Prisma.IssueCommentWhereUniqueInput | Prisma.IssueCommentWhereUniqueInput[];
    delete?: Prisma.IssueCommentWhereUniqueInput | Prisma.IssueCommentWhereUniqueInput[];
    connect?: Prisma.IssueCommentWhereUniqueInput | Prisma.IssueCommentWhereUniqueInput[];
    update?: Prisma.IssueCommentUpdateWithWhereUniqueWithoutIssueInput | Prisma.IssueCommentUpdateWithWhereUniqueWithoutIssueInput[];
    updateMany?: Prisma.IssueCommentUpdateManyWithWhereWithoutIssueInput | Prisma.IssueCommentUpdateManyWithWhereWithoutIssueInput[];
    deleteMany?: Prisma.IssueCommentScalarWhereInput | Prisma.IssueCommentScalarWhereInput[];
};
export type IssueCommentUncheckedUpdateManyWithoutIssueNestedInput = {
    create?: Prisma.XOR<Prisma.IssueCommentCreateWithoutIssueInput, Prisma.IssueCommentUncheckedCreateWithoutIssueInput> | Prisma.IssueCommentCreateWithoutIssueInput[] | Prisma.IssueCommentUncheckedCreateWithoutIssueInput[];
    connectOrCreate?: Prisma.IssueCommentCreateOrConnectWithoutIssueInput | Prisma.IssueCommentCreateOrConnectWithoutIssueInput[];
    upsert?: Prisma.IssueCommentUpsertWithWhereUniqueWithoutIssueInput | Prisma.IssueCommentUpsertWithWhereUniqueWithoutIssueInput[];
    createMany?: Prisma.IssueCommentCreateManyIssueInputEnvelope;
    set?: Prisma.IssueCommentWhereUniqueInput | Prisma.IssueCommentWhereUniqueInput[];
    disconnect?: Prisma.IssueCommentWhereUniqueInput | Prisma.IssueCommentWhereUniqueInput[];
    delete?: Prisma.IssueCommentWhereUniqueInput | Prisma.IssueCommentWhereUniqueInput[];
    connect?: Prisma.IssueCommentWhereUniqueInput | Prisma.IssueCommentWhereUniqueInput[];
    update?: Prisma.IssueCommentUpdateWithWhereUniqueWithoutIssueInput | Prisma.IssueCommentUpdateWithWhereUniqueWithoutIssueInput[];
    updateMany?: Prisma.IssueCommentUpdateManyWithWhereWithoutIssueInput | Prisma.IssueCommentUpdateManyWithWhereWithoutIssueInput[];
    deleteMany?: Prisma.IssueCommentScalarWhereInput | Prisma.IssueCommentScalarWhereInput[];
};
export type IssueCommentCreateWithoutAuthorInput = {
    id?: string;
    body: string;
    createdAt?: Date | string;
    issue: Prisma.IssueCreateNestedOneWithoutCommentsInput;
};
export type IssueCommentUncheckedCreateWithoutAuthorInput = {
    id?: string;
    issueId: string;
    body: string;
    createdAt?: Date | string;
};
export type IssueCommentCreateOrConnectWithoutAuthorInput = {
    where: Prisma.IssueCommentWhereUniqueInput;
    create: Prisma.XOR<Prisma.IssueCommentCreateWithoutAuthorInput, Prisma.IssueCommentUncheckedCreateWithoutAuthorInput>;
};
export type IssueCommentCreateManyAuthorInputEnvelope = {
    data: Prisma.IssueCommentCreateManyAuthorInput | Prisma.IssueCommentCreateManyAuthorInput[];
    skipDuplicates?: boolean;
};
export type IssueCommentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.IssueCommentWhereUniqueInput;
    update: Prisma.XOR<Prisma.IssueCommentUpdateWithoutAuthorInput, Prisma.IssueCommentUncheckedUpdateWithoutAuthorInput>;
    create: Prisma.XOR<Prisma.IssueCommentCreateWithoutAuthorInput, Prisma.IssueCommentUncheckedCreateWithoutAuthorInput>;
};
export type IssueCommentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.IssueCommentWhereUniqueInput;
    data: Prisma.XOR<Prisma.IssueCommentUpdateWithoutAuthorInput, Prisma.IssueCommentUncheckedUpdateWithoutAuthorInput>;
};
export type IssueCommentUpdateManyWithWhereWithoutAuthorInput = {
    where: Prisma.IssueCommentScalarWhereInput;
    data: Prisma.XOR<Prisma.IssueCommentUpdateManyMutationInput, Prisma.IssueCommentUncheckedUpdateManyWithoutAuthorInput>;
};
export type IssueCommentScalarWhereInput = {
    AND?: Prisma.IssueCommentScalarWhereInput | Prisma.IssueCommentScalarWhereInput[];
    OR?: Prisma.IssueCommentScalarWhereInput[];
    NOT?: Prisma.IssueCommentScalarWhereInput | Prisma.IssueCommentScalarWhereInput[];
    id?: Prisma.UuidFilter<"IssueComment"> | string;
    issueId?: Prisma.UuidFilter<"IssueComment"> | string;
    authorId?: Prisma.UuidFilter<"IssueComment"> | string;
    body?: Prisma.StringFilter<"IssueComment"> | string;
    createdAt?: Prisma.DateTimeFilter<"IssueComment"> | Date | string;
};
export type IssueCommentCreateWithoutIssueInput = {
    id?: string;
    body: string;
    createdAt?: Date | string;
    author: Prisma.UserCreateNestedOneWithoutIssueCommentsInput;
};
export type IssueCommentUncheckedCreateWithoutIssueInput = {
    id?: string;
    authorId: string;
    body: string;
    createdAt?: Date | string;
};
export type IssueCommentCreateOrConnectWithoutIssueInput = {
    where: Prisma.IssueCommentWhereUniqueInput;
    create: Prisma.XOR<Prisma.IssueCommentCreateWithoutIssueInput, Prisma.IssueCommentUncheckedCreateWithoutIssueInput>;
};
export type IssueCommentCreateManyIssueInputEnvelope = {
    data: Prisma.IssueCommentCreateManyIssueInput | Prisma.IssueCommentCreateManyIssueInput[];
    skipDuplicates?: boolean;
};
export type IssueCommentUpsertWithWhereUniqueWithoutIssueInput = {
    where: Prisma.IssueCommentWhereUniqueInput;
    update: Prisma.XOR<Prisma.IssueCommentUpdateWithoutIssueInput, Prisma.IssueCommentUncheckedUpdateWithoutIssueInput>;
    create: Prisma.XOR<Prisma.IssueCommentCreateWithoutIssueInput, Prisma.IssueCommentUncheckedCreateWithoutIssueInput>;
};
export type IssueCommentUpdateWithWhereUniqueWithoutIssueInput = {
    where: Prisma.IssueCommentWhereUniqueInput;
    data: Prisma.XOR<Prisma.IssueCommentUpdateWithoutIssueInput, Prisma.IssueCommentUncheckedUpdateWithoutIssueInput>;
};
export type IssueCommentUpdateManyWithWhereWithoutIssueInput = {
    where: Prisma.IssueCommentScalarWhereInput;
    data: Prisma.XOR<Prisma.IssueCommentUpdateManyMutationInput, Prisma.IssueCommentUncheckedUpdateManyWithoutIssueInput>;
};
export type IssueCommentCreateManyAuthorInput = {
    id?: string;
    issueId: string;
    body: string;
    createdAt?: Date | string;
};
export type IssueCommentUpdateWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issue?: Prisma.IssueUpdateOneRequiredWithoutCommentsNestedInput;
};
export type IssueCommentUncheckedUpdateWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    issueId?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IssueCommentUncheckedUpdateManyWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    issueId?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IssueCommentCreateManyIssueInput = {
    id?: string;
    authorId: string;
    body: string;
    createdAt?: Date | string;
};
export type IssueCommentUpdateWithoutIssueInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    author?: Prisma.UserUpdateOneRequiredWithoutIssueCommentsNestedInput;
};
export type IssueCommentUncheckedUpdateWithoutIssueInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IssueCommentUncheckedUpdateManyWithoutIssueInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IssueCommentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    issueId?: boolean;
    authorId?: boolean;
    body?: boolean;
    createdAt?: boolean;
    issue?: boolean | Prisma.IssueDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["issueComment"]>;
export type IssueCommentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    issueId?: boolean;
    authorId?: boolean;
    body?: boolean;
    createdAt?: boolean;
    issue?: boolean | Prisma.IssueDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["issueComment"]>;
export type IssueCommentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    issueId?: boolean;
    authorId?: boolean;
    body?: boolean;
    createdAt?: boolean;
    issue?: boolean | Prisma.IssueDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["issueComment"]>;
export type IssueCommentSelectScalar = {
    id?: boolean;
    issueId?: boolean;
    authorId?: boolean;
    body?: boolean;
    createdAt?: boolean;
};
export type IssueCommentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "issueId" | "authorId" | "body" | "createdAt", ExtArgs["result"]["issueComment"]>;
export type IssueCommentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    issue?: boolean | Prisma.IssueDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type IssueCommentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    issue?: boolean | Prisma.IssueDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type IssueCommentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    issue?: boolean | Prisma.IssueDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $IssueCommentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "IssueComment";
    objects: {
        issue: Prisma.$IssuePayload<ExtArgs>;
        author: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        issueId: string;
        authorId: string;
        body: string;
        createdAt: Date;
    }, ExtArgs["result"]["issueComment"]>;
    composites: {};
};
export type IssueCommentGetPayload<S extends boolean | null | undefined | IssueCommentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$IssueCommentPayload, S>;
export type IssueCommentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<IssueCommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: IssueCommentCountAggregateInputType | true;
};
export interface IssueCommentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['IssueComment'];
        meta: {
            name: 'IssueComment';
        };
    };
    findUnique<T extends IssueCommentFindUniqueArgs>(args: Prisma.SelectSubset<T, IssueCommentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__IssueCommentClient<runtime.Types.Result.GetResult<Prisma.$IssueCommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends IssueCommentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, IssueCommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__IssueCommentClient<runtime.Types.Result.GetResult<Prisma.$IssueCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends IssueCommentFindFirstArgs>(args?: Prisma.SelectSubset<T, IssueCommentFindFirstArgs<ExtArgs>>): Prisma.Prisma__IssueCommentClient<runtime.Types.Result.GetResult<Prisma.$IssueCommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends IssueCommentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, IssueCommentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__IssueCommentClient<runtime.Types.Result.GetResult<Prisma.$IssueCommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends IssueCommentFindManyArgs>(args?: Prisma.SelectSubset<T, IssueCommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IssueCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends IssueCommentCreateArgs>(args: Prisma.SelectSubset<T, IssueCommentCreateArgs<ExtArgs>>): Prisma.Prisma__IssueCommentClient<runtime.Types.Result.GetResult<Prisma.$IssueCommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends IssueCommentCreateManyArgs>(args?: Prisma.SelectSubset<T, IssueCommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends IssueCommentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, IssueCommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IssueCommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends IssueCommentDeleteArgs>(args: Prisma.SelectSubset<T, IssueCommentDeleteArgs<ExtArgs>>): Prisma.Prisma__IssueCommentClient<runtime.Types.Result.GetResult<Prisma.$IssueCommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends IssueCommentUpdateArgs>(args: Prisma.SelectSubset<T, IssueCommentUpdateArgs<ExtArgs>>): Prisma.Prisma__IssueCommentClient<runtime.Types.Result.GetResult<Prisma.$IssueCommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends IssueCommentDeleteManyArgs>(args?: Prisma.SelectSubset<T, IssueCommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends IssueCommentUpdateManyArgs>(args: Prisma.SelectSubset<T, IssueCommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends IssueCommentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, IssueCommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IssueCommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends IssueCommentUpsertArgs>(args: Prisma.SelectSubset<T, IssueCommentUpsertArgs<ExtArgs>>): Prisma.Prisma__IssueCommentClient<runtime.Types.Result.GetResult<Prisma.$IssueCommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends IssueCommentCountArgs>(args?: Prisma.Subset<T, IssueCommentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], IssueCommentCountAggregateOutputType> : number>;
    aggregate<T extends IssueCommentAggregateArgs>(args: Prisma.Subset<T, IssueCommentAggregateArgs>): Prisma.PrismaPromise<GetIssueCommentAggregateType<T>>;
    groupBy<T extends IssueCommentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: IssueCommentGroupByArgs['orderBy'];
    } : {
        orderBy?: IssueCommentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, IssueCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIssueCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: IssueCommentFieldRefs;
}
export interface Prisma__IssueCommentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    issue<T extends Prisma.IssueDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.IssueDefaultArgs<ExtArgs>>): Prisma.Prisma__IssueClient<runtime.Types.Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    author<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface IssueCommentFieldRefs {
    readonly id: Prisma.FieldRef<"IssueComment", 'String'>;
    readonly issueId: Prisma.FieldRef<"IssueComment", 'String'>;
    readonly authorId: Prisma.FieldRef<"IssueComment", 'String'>;
    readonly body: Prisma.FieldRef<"IssueComment", 'String'>;
    readonly createdAt: Prisma.FieldRef<"IssueComment", 'DateTime'>;
}
export type IssueCommentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IssueCommentSelect<ExtArgs> | null;
    omit?: Prisma.IssueCommentOmit<ExtArgs> | null;
    include?: Prisma.IssueCommentInclude<ExtArgs> | null;
    where: Prisma.IssueCommentWhereUniqueInput;
};
export type IssueCommentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IssueCommentSelect<ExtArgs> | null;
    omit?: Prisma.IssueCommentOmit<ExtArgs> | null;
    include?: Prisma.IssueCommentInclude<ExtArgs> | null;
    where: Prisma.IssueCommentWhereUniqueInput;
};
export type IssueCommentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type IssueCommentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type IssueCommentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type IssueCommentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IssueCommentSelect<ExtArgs> | null;
    omit?: Prisma.IssueCommentOmit<ExtArgs> | null;
    include?: Prisma.IssueCommentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IssueCommentCreateInput, Prisma.IssueCommentUncheckedCreateInput>;
};
export type IssueCommentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.IssueCommentCreateManyInput | Prisma.IssueCommentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type IssueCommentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IssueCommentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.IssueCommentOmit<ExtArgs> | null;
    data: Prisma.IssueCommentCreateManyInput | Prisma.IssueCommentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.IssueCommentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type IssueCommentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IssueCommentSelect<ExtArgs> | null;
    omit?: Prisma.IssueCommentOmit<ExtArgs> | null;
    include?: Prisma.IssueCommentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IssueCommentUpdateInput, Prisma.IssueCommentUncheckedUpdateInput>;
    where: Prisma.IssueCommentWhereUniqueInput;
};
export type IssueCommentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.IssueCommentUpdateManyMutationInput, Prisma.IssueCommentUncheckedUpdateManyInput>;
    where?: Prisma.IssueCommentWhereInput;
    limit?: number;
};
export type IssueCommentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IssueCommentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.IssueCommentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IssueCommentUpdateManyMutationInput, Prisma.IssueCommentUncheckedUpdateManyInput>;
    where?: Prisma.IssueCommentWhereInput;
    limit?: number;
    include?: Prisma.IssueCommentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type IssueCommentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IssueCommentSelect<ExtArgs> | null;
    omit?: Prisma.IssueCommentOmit<ExtArgs> | null;
    include?: Prisma.IssueCommentInclude<ExtArgs> | null;
    where: Prisma.IssueCommentWhereUniqueInput;
    create: Prisma.XOR<Prisma.IssueCommentCreateInput, Prisma.IssueCommentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.IssueCommentUpdateInput, Prisma.IssueCommentUncheckedUpdateInput>;
};
export type IssueCommentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IssueCommentSelect<ExtArgs> | null;
    omit?: Prisma.IssueCommentOmit<ExtArgs> | null;
    include?: Prisma.IssueCommentInclude<ExtArgs> | null;
    where: Prisma.IssueCommentWhereUniqueInput;
};
export type IssueCommentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IssueCommentWhereInput;
    limit?: number;
};
export type IssueCommentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IssueCommentSelect<ExtArgs> | null;
    omit?: Prisma.IssueCommentOmit<ExtArgs> | null;
    include?: Prisma.IssueCommentInclude<ExtArgs> | null;
};
