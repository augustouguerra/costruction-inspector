import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type FcmTokenModel = runtime.Types.Result.DefaultSelection<Prisma.$FcmTokenPayload>;
export type AggregateFcmToken = {
    _count: FcmTokenCountAggregateOutputType | null;
    _min: FcmTokenMinAggregateOutputType | null;
    _max: FcmTokenMaxAggregateOutputType | null;
};
export type FcmTokenMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    token: string | null;
    platform: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FcmTokenMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    token: string | null;
    platform: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FcmTokenCountAggregateOutputType = {
    id: number;
    userId: number;
    token: number;
    platform: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type FcmTokenMinAggregateInputType = {
    id?: true;
    userId?: true;
    token?: true;
    platform?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FcmTokenMaxAggregateInputType = {
    id?: true;
    userId?: true;
    token?: true;
    platform?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FcmTokenCountAggregateInputType = {
    id?: true;
    userId?: true;
    token?: true;
    platform?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type FcmTokenAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FcmTokenWhereInput;
    orderBy?: Prisma.FcmTokenOrderByWithRelationInput | Prisma.FcmTokenOrderByWithRelationInput[];
    cursor?: Prisma.FcmTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FcmTokenCountAggregateInputType;
    _min?: FcmTokenMinAggregateInputType;
    _max?: FcmTokenMaxAggregateInputType;
};
export type GetFcmTokenAggregateType<T extends FcmTokenAggregateArgs> = {
    [P in keyof T & keyof AggregateFcmToken]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFcmToken[P]> : Prisma.GetScalarType<T[P], AggregateFcmToken[P]>;
};
export type FcmTokenGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FcmTokenWhereInput;
    orderBy?: Prisma.FcmTokenOrderByWithAggregationInput | Prisma.FcmTokenOrderByWithAggregationInput[];
    by: Prisma.FcmTokenScalarFieldEnum[] | Prisma.FcmTokenScalarFieldEnum;
    having?: Prisma.FcmTokenScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FcmTokenCountAggregateInputType | true;
    _min?: FcmTokenMinAggregateInputType;
    _max?: FcmTokenMaxAggregateInputType;
};
export type FcmTokenGroupByOutputType = {
    id: string;
    userId: string;
    token: string;
    platform: string;
    createdAt: Date;
    updatedAt: Date;
    _count: FcmTokenCountAggregateOutputType | null;
    _min: FcmTokenMinAggregateOutputType | null;
    _max: FcmTokenMaxAggregateOutputType | null;
};
export type GetFcmTokenGroupByPayload<T extends FcmTokenGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FcmTokenGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FcmTokenGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FcmTokenGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FcmTokenGroupByOutputType[P]>;
}>>;
export type FcmTokenWhereInput = {
    AND?: Prisma.FcmTokenWhereInput | Prisma.FcmTokenWhereInput[];
    OR?: Prisma.FcmTokenWhereInput[];
    NOT?: Prisma.FcmTokenWhereInput | Prisma.FcmTokenWhereInput[];
    id?: Prisma.UuidFilter<"FcmToken"> | string;
    userId?: Prisma.UuidFilter<"FcmToken"> | string;
    token?: Prisma.StringFilter<"FcmToken"> | string;
    platform?: Prisma.StringFilter<"FcmToken"> | string;
    createdAt?: Prisma.DateTimeFilter<"FcmToken"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FcmToken"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type FcmTokenOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    platform?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type FcmTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    token?: string;
    AND?: Prisma.FcmTokenWhereInput | Prisma.FcmTokenWhereInput[];
    OR?: Prisma.FcmTokenWhereInput[];
    NOT?: Prisma.FcmTokenWhereInput | Prisma.FcmTokenWhereInput[];
    userId?: Prisma.UuidFilter<"FcmToken"> | string;
    platform?: Prisma.StringFilter<"FcmToken"> | string;
    createdAt?: Prisma.DateTimeFilter<"FcmToken"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FcmToken"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "token">;
export type FcmTokenOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    platform?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.FcmTokenCountOrderByAggregateInput;
    _max?: Prisma.FcmTokenMaxOrderByAggregateInput;
    _min?: Prisma.FcmTokenMinOrderByAggregateInput;
};
export type FcmTokenScalarWhereWithAggregatesInput = {
    AND?: Prisma.FcmTokenScalarWhereWithAggregatesInput | Prisma.FcmTokenScalarWhereWithAggregatesInput[];
    OR?: Prisma.FcmTokenScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FcmTokenScalarWhereWithAggregatesInput | Prisma.FcmTokenScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"FcmToken"> | string;
    userId?: Prisma.UuidWithAggregatesFilter<"FcmToken"> | string;
    token?: Prisma.StringWithAggregatesFilter<"FcmToken"> | string;
    platform?: Prisma.StringWithAggregatesFilter<"FcmToken"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"FcmToken"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"FcmToken"> | Date | string;
};
export type FcmTokenCreateInput = {
    id?: string;
    token: string;
    platform: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutFcmTokensInput;
};
export type FcmTokenUncheckedCreateInput = {
    id?: string;
    userId: string;
    token: string;
    platform: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FcmTokenUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutFcmTokensNestedInput;
};
export type FcmTokenUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FcmTokenCreateManyInput = {
    id?: string;
    userId: string;
    token: string;
    platform: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FcmTokenUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FcmTokenUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FcmTokenListRelationFilter = {
    every?: Prisma.FcmTokenWhereInput;
    some?: Prisma.FcmTokenWhereInput;
    none?: Prisma.FcmTokenWhereInput;
};
export type FcmTokenOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FcmTokenCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    platform?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FcmTokenMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    platform?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FcmTokenMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    platform?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FcmTokenCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.FcmTokenCreateWithoutUserInput, Prisma.FcmTokenUncheckedCreateWithoutUserInput> | Prisma.FcmTokenCreateWithoutUserInput[] | Prisma.FcmTokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.FcmTokenCreateOrConnectWithoutUserInput | Prisma.FcmTokenCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.FcmTokenCreateManyUserInputEnvelope;
    connect?: Prisma.FcmTokenWhereUniqueInput | Prisma.FcmTokenWhereUniqueInput[];
};
export type FcmTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.FcmTokenCreateWithoutUserInput, Prisma.FcmTokenUncheckedCreateWithoutUserInput> | Prisma.FcmTokenCreateWithoutUserInput[] | Prisma.FcmTokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.FcmTokenCreateOrConnectWithoutUserInput | Prisma.FcmTokenCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.FcmTokenCreateManyUserInputEnvelope;
    connect?: Prisma.FcmTokenWhereUniqueInput | Prisma.FcmTokenWhereUniqueInput[];
};
export type FcmTokenUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.FcmTokenCreateWithoutUserInput, Prisma.FcmTokenUncheckedCreateWithoutUserInput> | Prisma.FcmTokenCreateWithoutUserInput[] | Prisma.FcmTokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.FcmTokenCreateOrConnectWithoutUserInput | Prisma.FcmTokenCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.FcmTokenUpsertWithWhereUniqueWithoutUserInput | Prisma.FcmTokenUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.FcmTokenCreateManyUserInputEnvelope;
    set?: Prisma.FcmTokenWhereUniqueInput | Prisma.FcmTokenWhereUniqueInput[];
    disconnect?: Prisma.FcmTokenWhereUniqueInput | Prisma.FcmTokenWhereUniqueInput[];
    delete?: Prisma.FcmTokenWhereUniqueInput | Prisma.FcmTokenWhereUniqueInput[];
    connect?: Prisma.FcmTokenWhereUniqueInput | Prisma.FcmTokenWhereUniqueInput[];
    update?: Prisma.FcmTokenUpdateWithWhereUniqueWithoutUserInput | Prisma.FcmTokenUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.FcmTokenUpdateManyWithWhereWithoutUserInput | Prisma.FcmTokenUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.FcmTokenScalarWhereInput | Prisma.FcmTokenScalarWhereInput[];
};
export type FcmTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.FcmTokenCreateWithoutUserInput, Prisma.FcmTokenUncheckedCreateWithoutUserInput> | Prisma.FcmTokenCreateWithoutUserInput[] | Prisma.FcmTokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.FcmTokenCreateOrConnectWithoutUserInput | Prisma.FcmTokenCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.FcmTokenUpsertWithWhereUniqueWithoutUserInput | Prisma.FcmTokenUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.FcmTokenCreateManyUserInputEnvelope;
    set?: Prisma.FcmTokenWhereUniqueInput | Prisma.FcmTokenWhereUniqueInput[];
    disconnect?: Prisma.FcmTokenWhereUniqueInput | Prisma.FcmTokenWhereUniqueInput[];
    delete?: Prisma.FcmTokenWhereUniqueInput | Prisma.FcmTokenWhereUniqueInput[];
    connect?: Prisma.FcmTokenWhereUniqueInput | Prisma.FcmTokenWhereUniqueInput[];
    update?: Prisma.FcmTokenUpdateWithWhereUniqueWithoutUserInput | Prisma.FcmTokenUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.FcmTokenUpdateManyWithWhereWithoutUserInput | Prisma.FcmTokenUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.FcmTokenScalarWhereInput | Prisma.FcmTokenScalarWhereInput[];
};
export type FcmTokenCreateWithoutUserInput = {
    id?: string;
    token: string;
    platform: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FcmTokenUncheckedCreateWithoutUserInput = {
    id?: string;
    token: string;
    platform: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FcmTokenCreateOrConnectWithoutUserInput = {
    where: Prisma.FcmTokenWhereUniqueInput;
    create: Prisma.XOR<Prisma.FcmTokenCreateWithoutUserInput, Prisma.FcmTokenUncheckedCreateWithoutUserInput>;
};
export type FcmTokenCreateManyUserInputEnvelope = {
    data: Prisma.FcmTokenCreateManyUserInput | Prisma.FcmTokenCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type FcmTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.FcmTokenWhereUniqueInput;
    update: Prisma.XOR<Prisma.FcmTokenUpdateWithoutUserInput, Prisma.FcmTokenUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.FcmTokenCreateWithoutUserInput, Prisma.FcmTokenUncheckedCreateWithoutUserInput>;
};
export type FcmTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.FcmTokenWhereUniqueInput;
    data: Prisma.XOR<Prisma.FcmTokenUpdateWithoutUserInput, Prisma.FcmTokenUncheckedUpdateWithoutUserInput>;
};
export type FcmTokenUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.FcmTokenScalarWhereInput;
    data: Prisma.XOR<Prisma.FcmTokenUpdateManyMutationInput, Prisma.FcmTokenUncheckedUpdateManyWithoutUserInput>;
};
export type FcmTokenScalarWhereInput = {
    AND?: Prisma.FcmTokenScalarWhereInput | Prisma.FcmTokenScalarWhereInput[];
    OR?: Prisma.FcmTokenScalarWhereInput[];
    NOT?: Prisma.FcmTokenScalarWhereInput | Prisma.FcmTokenScalarWhereInput[];
    id?: Prisma.UuidFilter<"FcmToken"> | string;
    userId?: Prisma.UuidFilter<"FcmToken"> | string;
    token?: Prisma.StringFilter<"FcmToken"> | string;
    platform?: Prisma.StringFilter<"FcmToken"> | string;
    createdAt?: Prisma.DateTimeFilter<"FcmToken"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FcmToken"> | Date | string;
};
export type FcmTokenCreateManyUserInput = {
    id?: string;
    token: string;
    platform: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FcmTokenUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FcmTokenUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FcmTokenUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FcmTokenSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    token?: boolean;
    platform?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["fcmToken"]>;
export type FcmTokenSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    token?: boolean;
    platform?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["fcmToken"]>;
export type FcmTokenSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    token?: boolean;
    platform?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["fcmToken"]>;
export type FcmTokenSelectScalar = {
    id?: boolean;
    userId?: boolean;
    token?: boolean;
    platform?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type FcmTokenOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "token" | "platform" | "createdAt" | "updatedAt", ExtArgs["result"]["fcmToken"]>;
export type FcmTokenInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type FcmTokenIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type FcmTokenIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $FcmTokenPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "FcmToken";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        token: string;
        platform: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["fcmToken"]>;
    composites: {};
};
export type FcmTokenGetPayload<S extends boolean | null | undefined | FcmTokenDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FcmTokenPayload, S>;
export type FcmTokenCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FcmTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FcmTokenCountAggregateInputType | true;
};
export interface FcmTokenDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['FcmToken'];
        meta: {
            name: 'FcmToken';
        };
    };
    findUnique<T extends FcmTokenFindUniqueArgs>(args: Prisma.SelectSubset<T, FcmTokenFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FcmTokenClient<runtime.Types.Result.GetResult<Prisma.$FcmTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FcmTokenFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FcmTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FcmTokenClient<runtime.Types.Result.GetResult<Prisma.$FcmTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FcmTokenFindFirstArgs>(args?: Prisma.SelectSubset<T, FcmTokenFindFirstArgs<ExtArgs>>): Prisma.Prisma__FcmTokenClient<runtime.Types.Result.GetResult<Prisma.$FcmTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FcmTokenFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FcmTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FcmTokenClient<runtime.Types.Result.GetResult<Prisma.$FcmTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FcmTokenFindManyArgs>(args?: Prisma.SelectSubset<T, FcmTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FcmTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FcmTokenCreateArgs>(args: Prisma.SelectSubset<T, FcmTokenCreateArgs<ExtArgs>>): Prisma.Prisma__FcmTokenClient<runtime.Types.Result.GetResult<Prisma.$FcmTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FcmTokenCreateManyArgs>(args?: Prisma.SelectSubset<T, FcmTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends FcmTokenCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FcmTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FcmTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends FcmTokenDeleteArgs>(args: Prisma.SelectSubset<T, FcmTokenDeleteArgs<ExtArgs>>): Prisma.Prisma__FcmTokenClient<runtime.Types.Result.GetResult<Prisma.$FcmTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FcmTokenUpdateArgs>(args: Prisma.SelectSubset<T, FcmTokenUpdateArgs<ExtArgs>>): Prisma.Prisma__FcmTokenClient<runtime.Types.Result.GetResult<Prisma.$FcmTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FcmTokenDeleteManyArgs>(args?: Prisma.SelectSubset<T, FcmTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FcmTokenUpdateManyArgs>(args: Prisma.SelectSubset<T, FcmTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends FcmTokenUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FcmTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FcmTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends FcmTokenUpsertArgs>(args: Prisma.SelectSubset<T, FcmTokenUpsertArgs<ExtArgs>>): Prisma.Prisma__FcmTokenClient<runtime.Types.Result.GetResult<Prisma.$FcmTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FcmTokenCountArgs>(args?: Prisma.Subset<T, FcmTokenCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FcmTokenCountAggregateOutputType> : number>;
    aggregate<T extends FcmTokenAggregateArgs>(args: Prisma.Subset<T, FcmTokenAggregateArgs>): Prisma.PrismaPromise<GetFcmTokenAggregateType<T>>;
    groupBy<T extends FcmTokenGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FcmTokenGroupByArgs['orderBy'];
    } : {
        orderBy?: FcmTokenGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FcmTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFcmTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FcmTokenFieldRefs;
}
export interface Prisma__FcmTokenClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FcmTokenFieldRefs {
    readonly id: Prisma.FieldRef<"FcmToken", 'String'>;
    readonly userId: Prisma.FieldRef<"FcmToken", 'String'>;
    readonly token: Prisma.FieldRef<"FcmToken", 'String'>;
    readonly platform: Prisma.FieldRef<"FcmToken", 'String'>;
    readonly createdAt: Prisma.FieldRef<"FcmToken", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"FcmToken", 'DateTime'>;
}
export type FcmTokenFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FcmTokenSelect<ExtArgs> | null;
    omit?: Prisma.FcmTokenOmit<ExtArgs> | null;
    include?: Prisma.FcmTokenInclude<ExtArgs> | null;
    where: Prisma.FcmTokenWhereUniqueInput;
};
export type FcmTokenFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FcmTokenSelect<ExtArgs> | null;
    omit?: Prisma.FcmTokenOmit<ExtArgs> | null;
    include?: Prisma.FcmTokenInclude<ExtArgs> | null;
    where: Prisma.FcmTokenWhereUniqueInput;
};
export type FcmTokenFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FcmTokenFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FcmTokenFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FcmTokenCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FcmTokenSelect<ExtArgs> | null;
    omit?: Prisma.FcmTokenOmit<ExtArgs> | null;
    include?: Prisma.FcmTokenInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FcmTokenCreateInput, Prisma.FcmTokenUncheckedCreateInput>;
};
export type FcmTokenCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FcmTokenCreateManyInput | Prisma.FcmTokenCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FcmTokenCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FcmTokenSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FcmTokenOmit<ExtArgs> | null;
    data: Prisma.FcmTokenCreateManyInput | Prisma.FcmTokenCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.FcmTokenIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type FcmTokenUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FcmTokenSelect<ExtArgs> | null;
    omit?: Prisma.FcmTokenOmit<ExtArgs> | null;
    include?: Prisma.FcmTokenInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FcmTokenUpdateInput, Prisma.FcmTokenUncheckedUpdateInput>;
    where: Prisma.FcmTokenWhereUniqueInput;
};
export type FcmTokenUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FcmTokenUpdateManyMutationInput, Prisma.FcmTokenUncheckedUpdateManyInput>;
    where?: Prisma.FcmTokenWhereInput;
    limit?: number;
};
export type FcmTokenUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FcmTokenSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FcmTokenOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FcmTokenUpdateManyMutationInput, Prisma.FcmTokenUncheckedUpdateManyInput>;
    where?: Prisma.FcmTokenWhereInput;
    limit?: number;
    include?: Prisma.FcmTokenIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type FcmTokenUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FcmTokenSelect<ExtArgs> | null;
    omit?: Prisma.FcmTokenOmit<ExtArgs> | null;
    include?: Prisma.FcmTokenInclude<ExtArgs> | null;
    where: Prisma.FcmTokenWhereUniqueInput;
    create: Prisma.XOR<Prisma.FcmTokenCreateInput, Prisma.FcmTokenUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FcmTokenUpdateInput, Prisma.FcmTokenUncheckedUpdateInput>;
};
export type FcmTokenDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FcmTokenSelect<ExtArgs> | null;
    omit?: Prisma.FcmTokenOmit<ExtArgs> | null;
    include?: Prisma.FcmTokenInclude<ExtArgs> | null;
    where: Prisma.FcmTokenWhereUniqueInput;
};
export type FcmTokenDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FcmTokenWhereInput;
    limit?: number;
};
export type FcmTokenDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FcmTokenSelect<ExtArgs> | null;
    omit?: Prisma.FcmTokenOmit<ExtArgs> | null;
    include?: Prisma.FcmTokenInclude<ExtArgs> | null;
};
