import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type IssuePhotoModel = runtime.Types.Result.DefaultSelection<Prisma.$IssuePhotoPayload>;
export type AggregateIssuePhoto = {
    _count: IssuePhotoCountAggregateOutputType | null;
    _min: IssuePhotoMinAggregateOutputType | null;
    _max: IssuePhotoMaxAggregateOutputType | null;
};
export type IssuePhotoMinAggregateOutputType = {
    id: string | null;
    issueId: string | null;
    storagePath: string | null;
    uploadedBy: string | null;
    createdAt: Date | null;
};
export type IssuePhotoMaxAggregateOutputType = {
    id: string | null;
    issueId: string | null;
    storagePath: string | null;
    uploadedBy: string | null;
    createdAt: Date | null;
};
export type IssuePhotoCountAggregateOutputType = {
    id: number;
    issueId: number;
    storagePath: number;
    uploadedBy: number;
    createdAt: number;
    _all: number;
};
export type IssuePhotoMinAggregateInputType = {
    id?: true;
    issueId?: true;
    storagePath?: true;
    uploadedBy?: true;
    createdAt?: true;
};
export type IssuePhotoMaxAggregateInputType = {
    id?: true;
    issueId?: true;
    storagePath?: true;
    uploadedBy?: true;
    createdAt?: true;
};
export type IssuePhotoCountAggregateInputType = {
    id?: true;
    issueId?: true;
    storagePath?: true;
    uploadedBy?: true;
    createdAt?: true;
    _all?: true;
};
export type IssuePhotoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IssuePhotoWhereInput;
    orderBy?: Prisma.IssuePhotoOrderByWithRelationInput | Prisma.IssuePhotoOrderByWithRelationInput[];
    cursor?: Prisma.IssuePhotoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | IssuePhotoCountAggregateInputType;
    _min?: IssuePhotoMinAggregateInputType;
    _max?: IssuePhotoMaxAggregateInputType;
};
export type GetIssuePhotoAggregateType<T extends IssuePhotoAggregateArgs> = {
    [P in keyof T & keyof AggregateIssuePhoto]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateIssuePhoto[P]> : Prisma.GetScalarType<T[P], AggregateIssuePhoto[P]>;
};
export type IssuePhotoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IssuePhotoWhereInput;
    orderBy?: Prisma.IssuePhotoOrderByWithAggregationInput | Prisma.IssuePhotoOrderByWithAggregationInput[];
    by: Prisma.IssuePhotoScalarFieldEnum[] | Prisma.IssuePhotoScalarFieldEnum;
    having?: Prisma.IssuePhotoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: IssuePhotoCountAggregateInputType | true;
    _min?: IssuePhotoMinAggregateInputType;
    _max?: IssuePhotoMaxAggregateInputType;
};
export type IssuePhotoGroupByOutputType = {
    id: string;
    issueId: string;
    storagePath: string;
    uploadedBy: string;
    createdAt: Date;
    _count: IssuePhotoCountAggregateOutputType | null;
    _min: IssuePhotoMinAggregateOutputType | null;
    _max: IssuePhotoMaxAggregateOutputType | null;
};
export type GetIssuePhotoGroupByPayload<T extends IssuePhotoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<IssuePhotoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof IssuePhotoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], IssuePhotoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], IssuePhotoGroupByOutputType[P]>;
}>>;
export type IssuePhotoWhereInput = {
    AND?: Prisma.IssuePhotoWhereInput | Prisma.IssuePhotoWhereInput[];
    OR?: Prisma.IssuePhotoWhereInput[];
    NOT?: Prisma.IssuePhotoWhereInput | Prisma.IssuePhotoWhereInput[];
    id?: Prisma.UuidFilter<"IssuePhoto"> | string;
    issueId?: Prisma.UuidFilter<"IssuePhoto"> | string;
    storagePath?: Prisma.StringFilter<"IssuePhoto"> | string;
    uploadedBy?: Prisma.UuidFilter<"IssuePhoto"> | string;
    createdAt?: Prisma.DateTimeFilter<"IssuePhoto"> | Date | string;
    issue?: Prisma.XOR<Prisma.IssueScalarRelationFilter, Prisma.IssueWhereInput>;
    uploader?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type IssuePhotoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    issueId?: Prisma.SortOrder;
    storagePath?: Prisma.SortOrder;
    uploadedBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    issue?: Prisma.IssueOrderByWithRelationInput;
    uploader?: Prisma.UserOrderByWithRelationInput;
};
export type IssuePhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.IssuePhotoWhereInput | Prisma.IssuePhotoWhereInput[];
    OR?: Prisma.IssuePhotoWhereInput[];
    NOT?: Prisma.IssuePhotoWhereInput | Prisma.IssuePhotoWhereInput[];
    issueId?: Prisma.UuidFilter<"IssuePhoto"> | string;
    storagePath?: Prisma.StringFilter<"IssuePhoto"> | string;
    uploadedBy?: Prisma.UuidFilter<"IssuePhoto"> | string;
    createdAt?: Prisma.DateTimeFilter<"IssuePhoto"> | Date | string;
    issue?: Prisma.XOR<Prisma.IssueScalarRelationFilter, Prisma.IssueWhereInput>;
    uploader?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type IssuePhotoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    issueId?: Prisma.SortOrder;
    storagePath?: Prisma.SortOrder;
    uploadedBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.IssuePhotoCountOrderByAggregateInput;
    _max?: Prisma.IssuePhotoMaxOrderByAggregateInput;
    _min?: Prisma.IssuePhotoMinOrderByAggregateInput;
};
export type IssuePhotoScalarWhereWithAggregatesInput = {
    AND?: Prisma.IssuePhotoScalarWhereWithAggregatesInput | Prisma.IssuePhotoScalarWhereWithAggregatesInput[];
    OR?: Prisma.IssuePhotoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.IssuePhotoScalarWhereWithAggregatesInput | Prisma.IssuePhotoScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"IssuePhoto"> | string;
    issueId?: Prisma.UuidWithAggregatesFilter<"IssuePhoto"> | string;
    storagePath?: Prisma.StringWithAggregatesFilter<"IssuePhoto"> | string;
    uploadedBy?: Prisma.UuidWithAggregatesFilter<"IssuePhoto"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"IssuePhoto"> | Date | string;
};
export type IssuePhotoCreateInput = {
    id?: string;
    storagePath: string;
    createdAt?: Date | string;
    issue: Prisma.IssueCreateNestedOneWithoutPhotosInput;
    uploader: Prisma.UserCreateNestedOneWithoutIssuePhotosInput;
};
export type IssuePhotoUncheckedCreateInput = {
    id?: string;
    issueId: string;
    storagePath: string;
    uploadedBy: string;
    createdAt?: Date | string;
};
export type IssuePhotoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storagePath?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issue?: Prisma.IssueUpdateOneRequiredWithoutPhotosNestedInput;
    uploader?: Prisma.UserUpdateOneRequiredWithoutIssuePhotosNestedInput;
};
export type IssuePhotoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    issueId?: Prisma.StringFieldUpdateOperationsInput | string;
    storagePath?: Prisma.StringFieldUpdateOperationsInput | string;
    uploadedBy?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IssuePhotoCreateManyInput = {
    id?: string;
    issueId: string;
    storagePath: string;
    uploadedBy: string;
    createdAt?: Date | string;
};
export type IssuePhotoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storagePath?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IssuePhotoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    issueId?: Prisma.StringFieldUpdateOperationsInput | string;
    storagePath?: Prisma.StringFieldUpdateOperationsInput | string;
    uploadedBy?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IssuePhotoListRelationFilter = {
    every?: Prisma.IssuePhotoWhereInput;
    some?: Prisma.IssuePhotoWhereInput;
    none?: Prisma.IssuePhotoWhereInput;
};
export type IssuePhotoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type IssuePhotoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    issueId?: Prisma.SortOrder;
    storagePath?: Prisma.SortOrder;
    uploadedBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type IssuePhotoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    issueId?: Prisma.SortOrder;
    storagePath?: Prisma.SortOrder;
    uploadedBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type IssuePhotoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    issueId?: Prisma.SortOrder;
    storagePath?: Prisma.SortOrder;
    uploadedBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type IssuePhotoCreateNestedManyWithoutUploaderInput = {
    create?: Prisma.XOR<Prisma.IssuePhotoCreateWithoutUploaderInput, Prisma.IssuePhotoUncheckedCreateWithoutUploaderInput> | Prisma.IssuePhotoCreateWithoutUploaderInput[] | Prisma.IssuePhotoUncheckedCreateWithoutUploaderInput[];
    connectOrCreate?: Prisma.IssuePhotoCreateOrConnectWithoutUploaderInput | Prisma.IssuePhotoCreateOrConnectWithoutUploaderInput[];
    createMany?: Prisma.IssuePhotoCreateManyUploaderInputEnvelope;
    connect?: Prisma.IssuePhotoWhereUniqueInput | Prisma.IssuePhotoWhereUniqueInput[];
};
export type IssuePhotoUncheckedCreateNestedManyWithoutUploaderInput = {
    create?: Prisma.XOR<Prisma.IssuePhotoCreateWithoutUploaderInput, Prisma.IssuePhotoUncheckedCreateWithoutUploaderInput> | Prisma.IssuePhotoCreateWithoutUploaderInput[] | Prisma.IssuePhotoUncheckedCreateWithoutUploaderInput[];
    connectOrCreate?: Prisma.IssuePhotoCreateOrConnectWithoutUploaderInput | Prisma.IssuePhotoCreateOrConnectWithoutUploaderInput[];
    createMany?: Prisma.IssuePhotoCreateManyUploaderInputEnvelope;
    connect?: Prisma.IssuePhotoWhereUniqueInput | Prisma.IssuePhotoWhereUniqueInput[];
};
export type IssuePhotoUpdateManyWithoutUploaderNestedInput = {
    create?: Prisma.XOR<Prisma.IssuePhotoCreateWithoutUploaderInput, Prisma.IssuePhotoUncheckedCreateWithoutUploaderInput> | Prisma.IssuePhotoCreateWithoutUploaderInput[] | Prisma.IssuePhotoUncheckedCreateWithoutUploaderInput[];
    connectOrCreate?: Prisma.IssuePhotoCreateOrConnectWithoutUploaderInput | Prisma.IssuePhotoCreateOrConnectWithoutUploaderInput[];
    upsert?: Prisma.IssuePhotoUpsertWithWhereUniqueWithoutUploaderInput | Prisma.IssuePhotoUpsertWithWhereUniqueWithoutUploaderInput[];
    createMany?: Prisma.IssuePhotoCreateManyUploaderInputEnvelope;
    set?: Prisma.IssuePhotoWhereUniqueInput | Prisma.IssuePhotoWhereUniqueInput[];
    disconnect?: Prisma.IssuePhotoWhereUniqueInput | Prisma.IssuePhotoWhereUniqueInput[];
    delete?: Prisma.IssuePhotoWhereUniqueInput | Prisma.IssuePhotoWhereUniqueInput[];
    connect?: Prisma.IssuePhotoWhereUniqueInput | Prisma.IssuePhotoWhereUniqueInput[];
    update?: Prisma.IssuePhotoUpdateWithWhereUniqueWithoutUploaderInput | Prisma.IssuePhotoUpdateWithWhereUniqueWithoutUploaderInput[];
    updateMany?: Prisma.IssuePhotoUpdateManyWithWhereWithoutUploaderInput | Prisma.IssuePhotoUpdateManyWithWhereWithoutUploaderInput[];
    deleteMany?: Prisma.IssuePhotoScalarWhereInput | Prisma.IssuePhotoScalarWhereInput[];
};
export type IssuePhotoUncheckedUpdateManyWithoutUploaderNestedInput = {
    create?: Prisma.XOR<Prisma.IssuePhotoCreateWithoutUploaderInput, Prisma.IssuePhotoUncheckedCreateWithoutUploaderInput> | Prisma.IssuePhotoCreateWithoutUploaderInput[] | Prisma.IssuePhotoUncheckedCreateWithoutUploaderInput[];
    connectOrCreate?: Prisma.IssuePhotoCreateOrConnectWithoutUploaderInput | Prisma.IssuePhotoCreateOrConnectWithoutUploaderInput[];
    upsert?: Prisma.IssuePhotoUpsertWithWhereUniqueWithoutUploaderInput | Prisma.IssuePhotoUpsertWithWhereUniqueWithoutUploaderInput[];
    createMany?: Prisma.IssuePhotoCreateManyUploaderInputEnvelope;
    set?: Prisma.IssuePhotoWhereUniqueInput | Prisma.IssuePhotoWhereUniqueInput[];
    disconnect?: Prisma.IssuePhotoWhereUniqueInput | Prisma.IssuePhotoWhereUniqueInput[];
    delete?: Prisma.IssuePhotoWhereUniqueInput | Prisma.IssuePhotoWhereUniqueInput[];
    connect?: Prisma.IssuePhotoWhereUniqueInput | Prisma.IssuePhotoWhereUniqueInput[];
    update?: Prisma.IssuePhotoUpdateWithWhereUniqueWithoutUploaderInput | Prisma.IssuePhotoUpdateWithWhereUniqueWithoutUploaderInput[];
    updateMany?: Prisma.IssuePhotoUpdateManyWithWhereWithoutUploaderInput | Prisma.IssuePhotoUpdateManyWithWhereWithoutUploaderInput[];
    deleteMany?: Prisma.IssuePhotoScalarWhereInput | Prisma.IssuePhotoScalarWhereInput[];
};
export type IssuePhotoCreateNestedManyWithoutIssueInput = {
    create?: Prisma.XOR<Prisma.IssuePhotoCreateWithoutIssueInput, Prisma.IssuePhotoUncheckedCreateWithoutIssueInput> | Prisma.IssuePhotoCreateWithoutIssueInput[] | Prisma.IssuePhotoUncheckedCreateWithoutIssueInput[];
    connectOrCreate?: Prisma.IssuePhotoCreateOrConnectWithoutIssueInput | Prisma.IssuePhotoCreateOrConnectWithoutIssueInput[];
    createMany?: Prisma.IssuePhotoCreateManyIssueInputEnvelope;
    connect?: Prisma.IssuePhotoWhereUniqueInput | Prisma.IssuePhotoWhereUniqueInput[];
};
export type IssuePhotoUncheckedCreateNestedManyWithoutIssueInput = {
    create?: Prisma.XOR<Prisma.IssuePhotoCreateWithoutIssueInput, Prisma.IssuePhotoUncheckedCreateWithoutIssueInput> | Prisma.IssuePhotoCreateWithoutIssueInput[] | Prisma.IssuePhotoUncheckedCreateWithoutIssueInput[];
    connectOrCreate?: Prisma.IssuePhotoCreateOrConnectWithoutIssueInput | Prisma.IssuePhotoCreateOrConnectWithoutIssueInput[];
    createMany?: Prisma.IssuePhotoCreateManyIssueInputEnvelope;
    connect?: Prisma.IssuePhotoWhereUniqueInput | Prisma.IssuePhotoWhereUniqueInput[];
};
export type IssuePhotoUpdateManyWithoutIssueNestedInput = {
    create?: Prisma.XOR<Prisma.IssuePhotoCreateWithoutIssueInput, Prisma.IssuePhotoUncheckedCreateWithoutIssueInput> | Prisma.IssuePhotoCreateWithoutIssueInput[] | Prisma.IssuePhotoUncheckedCreateWithoutIssueInput[];
    connectOrCreate?: Prisma.IssuePhotoCreateOrConnectWithoutIssueInput | Prisma.IssuePhotoCreateOrConnectWithoutIssueInput[];
    upsert?: Prisma.IssuePhotoUpsertWithWhereUniqueWithoutIssueInput | Prisma.IssuePhotoUpsertWithWhereUniqueWithoutIssueInput[];
    createMany?: Prisma.IssuePhotoCreateManyIssueInputEnvelope;
    set?: Prisma.IssuePhotoWhereUniqueInput | Prisma.IssuePhotoWhereUniqueInput[];
    disconnect?: Prisma.IssuePhotoWhereUniqueInput | Prisma.IssuePhotoWhereUniqueInput[];
    delete?: Prisma.IssuePhotoWhereUniqueInput | Prisma.IssuePhotoWhereUniqueInput[];
    connect?: Prisma.IssuePhotoWhereUniqueInput | Prisma.IssuePhotoWhereUniqueInput[];
    update?: Prisma.IssuePhotoUpdateWithWhereUniqueWithoutIssueInput | Prisma.IssuePhotoUpdateWithWhereUniqueWithoutIssueInput[];
    updateMany?: Prisma.IssuePhotoUpdateManyWithWhereWithoutIssueInput | Prisma.IssuePhotoUpdateManyWithWhereWithoutIssueInput[];
    deleteMany?: Prisma.IssuePhotoScalarWhereInput | Prisma.IssuePhotoScalarWhereInput[];
};
export type IssuePhotoUncheckedUpdateManyWithoutIssueNestedInput = {
    create?: Prisma.XOR<Prisma.IssuePhotoCreateWithoutIssueInput, Prisma.IssuePhotoUncheckedCreateWithoutIssueInput> | Prisma.IssuePhotoCreateWithoutIssueInput[] | Prisma.IssuePhotoUncheckedCreateWithoutIssueInput[];
    connectOrCreate?: Prisma.IssuePhotoCreateOrConnectWithoutIssueInput | Prisma.IssuePhotoCreateOrConnectWithoutIssueInput[];
    upsert?: Prisma.IssuePhotoUpsertWithWhereUniqueWithoutIssueInput | Prisma.IssuePhotoUpsertWithWhereUniqueWithoutIssueInput[];
    createMany?: Prisma.IssuePhotoCreateManyIssueInputEnvelope;
    set?: Prisma.IssuePhotoWhereUniqueInput | Prisma.IssuePhotoWhereUniqueInput[];
    disconnect?: Prisma.IssuePhotoWhereUniqueInput | Prisma.IssuePhotoWhereUniqueInput[];
    delete?: Prisma.IssuePhotoWhereUniqueInput | Prisma.IssuePhotoWhereUniqueInput[];
    connect?: Prisma.IssuePhotoWhereUniqueInput | Prisma.IssuePhotoWhereUniqueInput[];
    update?: Prisma.IssuePhotoUpdateWithWhereUniqueWithoutIssueInput | Prisma.IssuePhotoUpdateWithWhereUniqueWithoutIssueInput[];
    updateMany?: Prisma.IssuePhotoUpdateManyWithWhereWithoutIssueInput | Prisma.IssuePhotoUpdateManyWithWhereWithoutIssueInput[];
    deleteMany?: Prisma.IssuePhotoScalarWhereInput | Prisma.IssuePhotoScalarWhereInput[];
};
export type IssuePhotoCreateWithoutUploaderInput = {
    id?: string;
    storagePath: string;
    createdAt?: Date | string;
    issue: Prisma.IssueCreateNestedOneWithoutPhotosInput;
};
export type IssuePhotoUncheckedCreateWithoutUploaderInput = {
    id?: string;
    issueId: string;
    storagePath: string;
    createdAt?: Date | string;
};
export type IssuePhotoCreateOrConnectWithoutUploaderInput = {
    where: Prisma.IssuePhotoWhereUniqueInput;
    create: Prisma.XOR<Prisma.IssuePhotoCreateWithoutUploaderInput, Prisma.IssuePhotoUncheckedCreateWithoutUploaderInput>;
};
export type IssuePhotoCreateManyUploaderInputEnvelope = {
    data: Prisma.IssuePhotoCreateManyUploaderInput | Prisma.IssuePhotoCreateManyUploaderInput[];
    skipDuplicates?: boolean;
};
export type IssuePhotoUpsertWithWhereUniqueWithoutUploaderInput = {
    where: Prisma.IssuePhotoWhereUniqueInput;
    update: Prisma.XOR<Prisma.IssuePhotoUpdateWithoutUploaderInput, Prisma.IssuePhotoUncheckedUpdateWithoutUploaderInput>;
    create: Prisma.XOR<Prisma.IssuePhotoCreateWithoutUploaderInput, Prisma.IssuePhotoUncheckedCreateWithoutUploaderInput>;
};
export type IssuePhotoUpdateWithWhereUniqueWithoutUploaderInput = {
    where: Prisma.IssuePhotoWhereUniqueInput;
    data: Prisma.XOR<Prisma.IssuePhotoUpdateWithoutUploaderInput, Prisma.IssuePhotoUncheckedUpdateWithoutUploaderInput>;
};
export type IssuePhotoUpdateManyWithWhereWithoutUploaderInput = {
    where: Prisma.IssuePhotoScalarWhereInput;
    data: Prisma.XOR<Prisma.IssuePhotoUpdateManyMutationInput, Prisma.IssuePhotoUncheckedUpdateManyWithoutUploaderInput>;
};
export type IssuePhotoScalarWhereInput = {
    AND?: Prisma.IssuePhotoScalarWhereInput | Prisma.IssuePhotoScalarWhereInput[];
    OR?: Prisma.IssuePhotoScalarWhereInput[];
    NOT?: Prisma.IssuePhotoScalarWhereInput | Prisma.IssuePhotoScalarWhereInput[];
    id?: Prisma.UuidFilter<"IssuePhoto"> | string;
    issueId?: Prisma.UuidFilter<"IssuePhoto"> | string;
    storagePath?: Prisma.StringFilter<"IssuePhoto"> | string;
    uploadedBy?: Prisma.UuidFilter<"IssuePhoto"> | string;
    createdAt?: Prisma.DateTimeFilter<"IssuePhoto"> | Date | string;
};
export type IssuePhotoCreateWithoutIssueInput = {
    id?: string;
    storagePath: string;
    createdAt?: Date | string;
    uploader: Prisma.UserCreateNestedOneWithoutIssuePhotosInput;
};
export type IssuePhotoUncheckedCreateWithoutIssueInput = {
    id?: string;
    storagePath: string;
    uploadedBy: string;
    createdAt?: Date | string;
};
export type IssuePhotoCreateOrConnectWithoutIssueInput = {
    where: Prisma.IssuePhotoWhereUniqueInput;
    create: Prisma.XOR<Prisma.IssuePhotoCreateWithoutIssueInput, Prisma.IssuePhotoUncheckedCreateWithoutIssueInput>;
};
export type IssuePhotoCreateManyIssueInputEnvelope = {
    data: Prisma.IssuePhotoCreateManyIssueInput | Prisma.IssuePhotoCreateManyIssueInput[];
    skipDuplicates?: boolean;
};
export type IssuePhotoUpsertWithWhereUniqueWithoutIssueInput = {
    where: Prisma.IssuePhotoWhereUniqueInput;
    update: Prisma.XOR<Prisma.IssuePhotoUpdateWithoutIssueInput, Prisma.IssuePhotoUncheckedUpdateWithoutIssueInput>;
    create: Prisma.XOR<Prisma.IssuePhotoCreateWithoutIssueInput, Prisma.IssuePhotoUncheckedCreateWithoutIssueInput>;
};
export type IssuePhotoUpdateWithWhereUniqueWithoutIssueInput = {
    where: Prisma.IssuePhotoWhereUniqueInput;
    data: Prisma.XOR<Prisma.IssuePhotoUpdateWithoutIssueInput, Prisma.IssuePhotoUncheckedUpdateWithoutIssueInput>;
};
export type IssuePhotoUpdateManyWithWhereWithoutIssueInput = {
    where: Prisma.IssuePhotoScalarWhereInput;
    data: Prisma.XOR<Prisma.IssuePhotoUpdateManyMutationInput, Prisma.IssuePhotoUncheckedUpdateManyWithoutIssueInput>;
};
export type IssuePhotoCreateManyUploaderInput = {
    id?: string;
    issueId: string;
    storagePath: string;
    createdAt?: Date | string;
};
export type IssuePhotoUpdateWithoutUploaderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storagePath?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issue?: Prisma.IssueUpdateOneRequiredWithoutPhotosNestedInput;
};
export type IssuePhotoUncheckedUpdateWithoutUploaderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    issueId?: Prisma.StringFieldUpdateOperationsInput | string;
    storagePath?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IssuePhotoUncheckedUpdateManyWithoutUploaderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    issueId?: Prisma.StringFieldUpdateOperationsInput | string;
    storagePath?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IssuePhotoCreateManyIssueInput = {
    id?: string;
    storagePath: string;
    uploadedBy: string;
    createdAt?: Date | string;
};
export type IssuePhotoUpdateWithoutIssueInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storagePath?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    uploader?: Prisma.UserUpdateOneRequiredWithoutIssuePhotosNestedInput;
};
export type IssuePhotoUncheckedUpdateWithoutIssueInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storagePath?: Prisma.StringFieldUpdateOperationsInput | string;
    uploadedBy?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IssuePhotoUncheckedUpdateManyWithoutIssueInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storagePath?: Prisma.StringFieldUpdateOperationsInput | string;
    uploadedBy?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IssuePhotoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    issueId?: boolean;
    storagePath?: boolean;
    uploadedBy?: boolean;
    createdAt?: boolean;
    issue?: boolean | Prisma.IssueDefaultArgs<ExtArgs>;
    uploader?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["issuePhoto"]>;
export type IssuePhotoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    issueId?: boolean;
    storagePath?: boolean;
    uploadedBy?: boolean;
    createdAt?: boolean;
    issue?: boolean | Prisma.IssueDefaultArgs<ExtArgs>;
    uploader?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["issuePhoto"]>;
export type IssuePhotoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    issueId?: boolean;
    storagePath?: boolean;
    uploadedBy?: boolean;
    createdAt?: boolean;
    issue?: boolean | Prisma.IssueDefaultArgs<ExtArgs>;
    uploader?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["issuePhoto"]>;
export type IssuePhotoSelectScalar = {
    id?: boolean;
    issueId?: boolean;
    storagePath?: boolean;
    uploadedBy?: boolean;
    createdAt?: boolean;
};
export type IssuePhotoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "issueId" | "storagePath" | "uploadedBy" | "createdAt", ExtArgs["result"]["issuePhoto"]>;
export type IssuePhotoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    issue?: boolean | Prisma.IssueDefaultArgs<ExtArgs>;
    uploader?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type IssuePhotoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    issue?: boolean | Prisma.IssueDefaultArgs<ExtArgs>;
    uploader?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type IssuePhotoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    issue?: boolean | Prisma.IssueDefaultArgs<ExtArgs>;
    uploader?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $IssuePhotoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "IssuePhoto";
    objects: {
        issue: Prisma.$IssuePayload<ExtArgs>;
        uploader: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        issueId: string;
        storagePath: string;
        uploadedBy: string;
        createdAt: Date;
    }, ExtArgs["result"]["issuePhoto"]>;
    composites: {};
};
export type IssuePhotoGetPayload<S extends boolean | null | undefined | IssuePhotoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$IssuePhotoPayload, S>;
export type IssuePhotoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<IssuePhotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: IssuePhotoCountAggregateInputType | true;
};
export interface IssuePhotoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['IssuePhoto'];
        meta: {
            name: 'IssuePhoto';
        };
    };
    findUnique<T extends IssuePhotoFindUniqueArgs>(args: Prisma.SelectSubset<T, IssuePhotoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__IssuePhotoClient<runtime.Types.Result.GetResult<Prisma.$IssuePhotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends IssuePhotoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, IssuePhotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__IssuePhotoClient<runtime.Types.Result.GetResult<Prisma.$IssuePhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends IssuePhotoFindFirstArgs>(args?: Prisma.SelectSubset<T, IssuePhotoFindFirstArgs<ExtArgs>>): Prisma.Prisma__IssuePhotoClient<runtime.Types.Result.GetResult<Prisma.$IssuePhotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends IssuePhotoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, IssuePhotoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__IssuePhotoClient<runtime.Types.Result.GetResult<Prisma.$IssuePhotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends IssuePhotoFindManyArgs>(args?: Prisma.SelectSubset<T, IssuePhotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IssuePhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends IssuePhotoCreateArgs>(args: Prisma.SelectSubset<T, IssuePhotoCreateArgs<ExtArgs>>): Prisma.Prisma__IssuePhotoClient<runtime.Types.Result.GetResult<Prisma.$IssuePhotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends IssuePhotoCreateManyArgs>(args?: Prisma.SelectSubset<T, IssuePhotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends IssuePhotoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, IssuePhotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IssuePhotoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends IssuePhotoDeleteArgs>(args: Prisma.SelectSubset<T, IssuePhotoDeleteArgs<ExtArgs>>): Prisma.Prisma__IssuePhotoClient<runtime.Types.Result.GetResult<Prisma.$IssuePhotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends IssuePhotoUpdateArgs>(args: Prisma.SelectSubset<T, IssuePhotoUpdateArgs<ExtArgs>>): Prisma.Prisma__IssuePhotoClient<runtime.Types.Result.GetResult<Prisma.$IssuePhotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends IssuePhotoDeleteManyArgs>(args?: Prisma.SelectSubset<T, IssuePhotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends IssuePhotoUpdateManyArgs>(args: Prisma.SelectSubset<T, IssuePhotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends IssuePhotoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, IssuePhotoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IssuePhotoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends IssuePhotoUpsertArgs>(args: Prisma.SelectSubset<T, IssuePhotoUpsertArgs<ExtArgs>>): Prisma.Prisma__IssuePhotoClient<runtime.Types.Result.GetResult<Prisma.$IssuePhotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends IssuePhotoCountArgs>(args?: Prisma.Subset<T, IssuePhotoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], IssuePhotoCountAggregateOutputType> : number>;
    aggregate<T extends IssuePhotoAggregateArgs>(args: Prisma.Subset<T, IssuePhotoAggregateArgs>): Prisma.PrismaPromise<GetIssuePhotoAggregateType<T>>;
    groupBy<T extends IssuePhotoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: IssuePhotoGroupByArgs['orderBy'];
    } : {
        orderBy?: IssuePhotoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, IssuePhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIssuePhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: IssuePhotoFieldRefs;
}
export interface Prisma__IssuePhotoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    issue<T extends Prisma.IssueDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.IssueDefaultArgs<ExtArgs>>): Prisma.Prisma__IssueClient<runtime.Types.Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    uploader<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface IssuePhotoFieldRefs {
    readonly id: Prisma.FieldRef<"IssuePhoto", 'String'>;
    readonly issueId: Prisma.FieldRef<"IssuePhoto", 'String'>;
    readonly storagePath: Prisma.FieldRef<"IssuePhoto", 'String'>;
    readonly uploadedBy: Prisma.FieldRef<"IssuePhoto", 'String'>;
    readonly createdAt: Prisma.FieldRef<"IssuePhoto", 'DateTime'>;
}
export type IssuePhotoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IssuePhotoSelect<ExtArgs> | null;
    omit?: Prisma.IssuePhotoOmit<ExtArgs> | null;
    include?: Prisma.IssuePhotoInclude<ExtArgs> | null;
    where: Prisma.IssuePhotoWhereUniqueInput;
};
export type IssuePhotoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IssuePhotoSelect<ExtArgs> | null;
    omit?: Prisma.IssuePhotoOmit<ExtArgs> | null;
    include?: Prisma.IssuePhotoInclude<ExtArgs> | null;
    where: Prisma.IssuePhotoWhereUniqueInput;
};
export type IssuePhotoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type IssuePhotoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type IssuePhotoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type IssuePhotoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IssuePhotoSelect<ExtArgs> | null;
    omit?: Prisma.IssuePhotoOmit<ExtArgs> | null;
    include?: Prisma.IssuePhotoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IssuePhotoCreateInput, Prisma.IssuePhotoUncheckedCreateInput>;
};
export type IssuePhotoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.IssuePhotoCreateManyInput | Prisma.IssuePhotoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type IssuePhotoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IssuePhotoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.IssuePhotoOmit<ExtArgs> | null;
    data: Prisma.IssuePhotoCreateManyInput | Prisma.IssuePhotoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.IssuePhotoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type IssuePhotoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IssuePhotoSelect<ExtArgs> | null;
    omit?: Prisma.IssuePhotoOmit<ExtArgs> | null;
    include?: Prisma.IssuePhotoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IssuePhotoUpdateInput, Prisma.IssuePhotoUncheckedUpdateInput>;
    where: Prisma.IssuePhotoWhereUniqueInput;
};
export type IssuePhotoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.IssuePhotoUpdateManyMutationInput, Prisma.IssuePhotoUncheckedUpdateManyInput>;
    where?: Prisma.IssuePhotoWhereInput;
    limit?: number;
};
export type IssuePhotoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IssuePhotoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.IssuePhotoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IssuePhotoUpdateManyMutationInput, Prisma.IssuePhotoUncheckedUpdateManyInput>;
    where?: Prisma.IssuePhotoWhereInput;
    limit?: number;
    include?: Prisma.IssuePhotoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type IssuePhotoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IssuePhotoSelect<ExtArgs> | null;
    omit?: Prisma.IssuePhotoOmit<ExtArgs> | null;
    include?: Prisma.IssuePhotoInclude<ExtArgs> | null;
    where: Prisma.IssuePhotoWhereUniqueInput;
    create: Prisma.XOR<Prisma.IssuePhotoCreateInput, Prisma.IssuePhotoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.IssuePhotoUpdateInput, Prisma.IssuePhotoUncheckedUpdateInput>;
};
export type IssuePhotoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IssuePhotoSelect<ExtArgs> | null;
    omit?: Prisma.IssuePhotoOmit<ExtArgs> | null;
    include?: Prisma.IssuePhotoInclude<ExtArgs> | null;
    where: Prisma.IssuePhotoWhereUniqueInput;
};
export type IssuePhotoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IssuePhotoWhereInput;
    limit?: number;
};
export type IssuePhotoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IssuePhotoSelect<ExtArgs> | null;
    omit?: Prisma.IssuePhotoOmit<ExtArgs> | null;
    include?: Prisma.IssuePhotoInclude<ExtArgs> | null;
};
