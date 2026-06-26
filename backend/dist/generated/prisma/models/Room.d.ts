import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RoomModel = runtime.Types.Result.DefaultSelection<Prisma.$RoomPayload>;
export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null;
    _min: RoomMinAggregateOutputType | null;
    _max: RoomMaxAggregateOutputType | null;
};
export type RoomMinAggregateOutputType = {
    id: string | null;
    apartmentId: string | null;
    name: string | null;
    createdAt: Date | null;
};
export type RoomMaxAggregateOutputType = {
    id: string | null;
    apartmentId: string | null;
    name: string | null;
    createdAt: Date | null;
};
export type RoomCountAggregateOutputType = {
    id: number;
    apartmentId: number;
    name: number;
    createdAt: number;
    _all: number;
};
export type RoomMinAggregateInputType = {
    id?: true;
    apartmentId?: true;
    name?: true;
    createdAt?: true;
};
export type RoomMaxAggregateInputType = {
    id?: true;
    apartmentId?: true;
    name?: true;
    createdAt?: true;
};
export type RoomCountAggregateInputType = {
    id?: true;
    apartmentId?: true;
    name?: true;
    createdAt?: true;
    _all?: true;
};
export type RoomAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RoomWhereInput;
    orderBy?: Prisma.RoomOrderByWithRelationInput | Prisma.RoomOrderByWithRelationInput[];
    cursor?: Prisma.RoomWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RoomCountAggregateInputType;
    _min?: RoomMinAggregateInputType;
    _max?: RoomMaxAggregateInputType;
};
export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
    [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRoom[P]> : Prisma.GetScalarType<T[P], AggregateRoom[P]>;
};
export type RoomGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RoomWhereInput;
    orderBy?: Prisma.RoomOrderByWithAggregationInput | Prisma.RoomOrderByWithAggregationInput[];
    by: Prisma.RoomScalarFieldEnum[] | Prisma.RoomScalarFieldEnum;
    having?: Prisma.RoomScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RoomCountAggregateInputType | true;
    _min?: RoomMinAggregateInputType;
    _max?: RoomMaxAggregateInputType;
};
export type RoomGroupByOutputType = {
    id: string;
    apartmentId: string;
    name: string;
    createdAt: Date;
    _count: RoomCountAggregateOutputType | null;
    _min: RoomMinAggregateOutputType | null;
    _max: RoomMaxAggregateOutputType | null;
};
export type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RoomGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RoomGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RoomGroupByOutputType[P]>;
}>>;
export type RoomWhereInput = {
    AND?: Prisma.RoomWhereInput | Prisma.RoomWhereInput[];
    OR?: Prisma.RoomWhereInput[];
    NOT?: Prisma.RoomWhereInput | Prisma.RoomWhereInput[];
    id?: Prisma.UuidFilter<"Room"> | string;
    apartmentId?: Prisma.UuidFilter<"Room"> | string;
    name?: Prisma.StringFilter<"Room"> | string;
    createdAt?: Prisma.DateTimeFilter<"Room"> | Date | string;
    apartment?: Prisma.XOR<Prisma.ApartmentScalarRelationFilter, Prisma.ApartmentWhereInput>;
    issues?: Prisma.IssueListRelationFilter;
};
export type RoomOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    apartmentId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    apartment?: Prisma.ApartmentOrderByWithRelationInput;
    issues?: Prisma.IssueOrderByRelationAggregateInput;
};
export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.RoomWhereInput | Prisma.RoomWhereInput[];
    OR?: Prisma.RoomWhereInput[];
    NOT?: Prisma.RoomWhereInput | Prisma.RoomWhereInput[];
    apartmentId?: Prisma.UuidFilter<"Room"> | string;
    name?: Prisma.StringFilter<"Room"> | string;
    createdAt?: Prisma.DateTimeFilter<"Room"> | Date | string;
    apartment?: Prisma.XOR<Prisma.ApartmentScalarRelationFilter, Prisma.ApartmentWhereInput>;
    issues?: Prisma.IssueListRelationFilter;
}, "id">;
export type RoomOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    apartmentId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.RoomCountOrderByAggregateInput;
    _max?: Prisma.RoomMaxOrderByAggregateInput;
    _min?: Prisma.RoomMinOrderByAggregateInput;
};
export type RoomScalarWhereWithAggregatesInput = {
    AND?: Prisma.RoomScalarWhereWithAggregatesInput | Prisma.RoomScalarWhereWithAggregatesInput[];
    OR?: Prisma.RoomScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RoomScalarWhereWithAggregatesInput | Prisma.RoomScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Room"> | string;
    apartmentId?: Prisma.UuidWithAggregatesFilter<"Room"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Room"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Room"> | Date | string;
};
export type RoomCreateInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    apartment: Prisma.ApartmentCreateNestedOneWithoutRoomsInput;
    issues?: Prisma.IssueCreateNestedManyWithoutRoomInput;
};
export type RoomUncheckedCreateInput = {
    id?: string;
    apartmentId: string;
    name: string;
    createdAt?: Date | string;
    issues?: Prisma.IssueUncheckedCreateNestedManyWithoutRoomInput;
};
export type RoomUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    apartment?: Prisma.ApartmentUpdateOneRequiredWithoutRoomsNestedInput;
    issues?: Prisma.IssueUpdateManyWithoutRoomNestedInput;
};
export type RoomUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    apartmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issues?: Prisma.IssueUncheckedUpdateManyWithoutRoomNestedInput;
};
export type RoomCreateManyInput = {
    id?: string;
    apartmentId: string;
    name: string;
    createdAt?: Date | string;
};
export type RoomUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RoomUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    apartmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RoomListRelationFilter = {
    every?: Prisma.RoomWhereInput;
    some?: Prisma.RoomWhereInput;
    none?: Prisma.RoomWhereInput;
};
export type RoomOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RoomCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    apartmentId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RoomMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    apartmentId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RoomMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    apartmentId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RoomScalarRelationFilter = {
    is?: Prisma.RoomWhereInput;
    isNot?: Prisma.RoomWhereInput;
};
export type RoomCreateNestedManyWithoutApartmentInput = {
    create?: Prisma.XOR<Prisma.RoomCreateWithoutApartmentInput, Prisma.RoomUncheckedCreateWithoutApartmentInput> | Prisma.RoomCreateWithoutApartmentInput[] | Prisma.RoomUncheckedCreateWithoutApartmentInput[];
    connectOrCreate?: Prisma.RoomCreateOrConnectWithoutApartmentInput | Prisma.RoomCreateOrConnectWithoutApartmentInput[];
    createMany?: Prisma.RoomCreateManyApartmentInputEnvelope;
    connect?: Prisma.RoomWhereUniqueInput | Prisma.RoomWhereUniqueInput[];
};
export type RoomUncheckedCreateNestedManyWithoutApartmentInput = {
    create?: Prisma.XOR<Prisma.RoomCreateWithoutApartmentInput, Prisma.RoomUncheckedCreateWithoutApartmentInput> | Prisma.RoomCreateWithoutApartmentInput[] | Prisma.RoomUncheckedCreateWithoutApartmentInput[];
    connectOrCreate?: Prisma.RoomCreateOrConnectWithoutApartmentInput | Prisma.RoomCreateOrConnectWithoutApartmentInput[];
    createMany?: Prisma.RoomCreateManyApartmentInputEnvelope;
    connect?: Prisma.RoomWhereUniqueInput | Prisma.RoomWhereUniqueInput[];
};
export type RoomUpdateManyWithoutApartmentNestedInput = {
    create?: Prisma.XOR<Prisma.RoomCreateWithoutApartmentInput, Prisma.RoomUncheckedCreateWithoutApartmentInput> | Prisma.RoomCreateWithoutApartmentInput[] | Prisma.RoomUncheckedCreateWithoutApartmentInput[];
    connectOrCreate?: Prisma.RoomCreateOrConnectWithoutApartmentInput | Prisma.RoomCreateOrConnectWithoutApartmentInput[];
    upsert?: Prisma.RoomUpsertWithWhereUniqueWithoutApartmentInput | Prisma.RoomUpsertWithWhereUniqueWithoutApartmentInput[];
    createMany?: Prisma.RoomCreateManyApartmentInputEnvelope;
    set?: Prisma.RoomWhereUniqueInput | Prisma.RoomWhereUniqueInput[];
    disconnect?: Prisma.RoomWhereUniqueInput | Prisma.RoomWhereUniqueInput[];
    delete?: Prisma.RoomWhereUniqueInput | Prisma.RoomWhereUniqueInput[];
    connect?: Prisma.RoomWhereUniqueInput | Prisma.RoomWhereUniqueInput[];
    update?: Prisma.RoomUpdateWithWhereUniqueWithoutApartmentInput | Prisma.RoomUpdateWithWhereUniqueWithoutApartmentInput[];
    updateMany?: Prisma.RoomUpdateManyWithWhereWithoutApartmentInput | Prisma.RoomUpdateManyWithWhereWithoutApartmentInput[];
    deleteMany?: Prisma.RoomScalarWhereInput | Prisma.RoomScalarWhereInput[];
};
export type RoomUncheckedUpdateManyWithoutApartmentNestedInput = {
    create?: Prisma.XOR<Prisma.RoomCreateWithoutApartmentInput, Prisma.RoomUncheckedCreateWithoutApartmentInput> | Prisma.RoomCreateWithoutApartmentInput[] | Prisma.RoomUncheckedCreateWithoutApartmentInput[];
    connectOrCreate?: Prisma.RoomCreateOrConnectWithoutApartmentInput | Prisma.RoomCreateOrConnectWithoutApartmentInput[];
    upsert?: Prisma.RoomUpsertWithWhereUniqueWithoutApartmentInput | Prisma.RoomUpsertWithWhereUniqueWithoutApartmentInput[];
    createMany?: Prisma.RoomCreateManyApartmentInputEnvelope;
    set?: Prisma.RoomWhereUniqueInput | Prisma.RoomWhereUniqueInput[];
    disconnect?: Prisma.RoomWhereUniqueInput | Prisma.RoomWhereUniqueInput[];
    delete?: Prisma.RoomWhereUniqueInput | Prisma.RoomWhereUniqueInput[];
    connect?: Prisma.RoomWhereUniqueInput | Prisma.RoomWhereUniqueInput[];
    update?: Prisma.RoomUpdateWithWhereUniqueWithoutApartmentInput | Prisma.RoomUpdateWithWhereUniqueWithoutApartmentInput[];
    updateMany?: Prisma.RoomUpdateManyWithWhereWithoutApartmentInput | Prisma.RoomUpdateManyWithWhereWithoutApartmentInput[];
    deleteMany?: Prisma.RoomScalarWhereInput | Prisma.RoomScalarWhereInput[];
};
export type RoomCreateNestedOneWithoutIssuesInput = {
    create?: Prisma.XOR<Prisma.RoomCreateWithoutIssuesInput, Prisma.RoomUncheckedCreateWithoutIssuesInput>;
    connectOrCreate?: Prisma.RoomCreateOrConnectWithoutIssuesInput;
    connect?: Prisma.RoomWhereUniqueInput;
};
export type RoomUpdateOneRequiredWithoutIssuesNestedInput = {
    create?: Prisma.XOR<Prisma.RoomCreateWithoutIssuesInput, Prisma.RoomUncheckedCreateWithoutIssuesInput>;
    connectOrCreate?: Prisma.RoomCreateOrConnectWithoutIssuesInput;
    upsert?: Prisma.RoomUpsertWithoutIssuesInput;
    connect?: Prisma.RoomWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RoomUpdateToOneWithWhereWithoutIssuesInput, Prisma.RoomUpdateWithoutIssuesInput>, Prisma.RoomUncheckedUpdateWithoutIssuesInput>;
};
export type RoomCreateWithoutApartmentInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    issues?: Prisma.IssueCreateNestedManyWithoutRoomInput;
};
export type RoomUncheckedCreateWithoutApartmentInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    issues?: Prisma.IssueUncheckedCreateNestedManyWithoutRoomInput;
};
export type RoomCreateOrConnectWithoutApartmentInput = {
    where: Prisma.RoomWhereUniqueInput;
    create: Prisma.XOR<Prisma.RoomCreateWithoutApartmentInput, Prisma.RoomUncheckedCreateWithoutApartmentInput>;
};
export type RoomCreateManyApartmentInputEnvelope = {
    data: Prisma.RoomCreateManyApartmentInput | Prisma.RoomCreateManyApartmentInput[];
    skipDuplicates?: boolean;
};
export type RoomUpsertWithWhereUniqueWithoutApartmentInput = {
    where: Prisma.RoomWhereUniqueInput;
    update: Prisma.XOR<Prisma.RoomUpdateWithoutApartmentInput, Prisma.RoomUncheckedUpdateWithoutApartmentInput>;
    create: Prisma.XOR<Prisma.RoomCreateWithoutApartmentInput, Prisma.RoomUncheckedCreateWithoutApartmentInput>;
};
export type RoomUpdateWithWhereUniqueWithoutApartmentInput = {
    where: Prisma.RoomWhereUniqueInput;
    data: Prisma.XOR<Prisma.RoomUpdateWithoutApartmentInput, Prisma.RoomUncheckedUpdateWithoutApartmentInput>;
};
export type RoomUpdateManyWithWhereWithoutApartmentInput = {
    where: Prisma.RoomScalarWhereInput;
    data: Prisma.XOR<Prisma.RoomUpdateManyMutationInput, Prisma.RoomUncheckedUpdateManyWithoutApartmentInput>;
};
export type RoomScalarWhereInput = {
    AND?: Prisma.RoomScalarWhereInput | Prisma.RoomScalarWhereInput[];
    OR?: Prisma.RoomScalarWhereInput[];
    NOT?: Prisma.RoomScalarWhereInput | Prisma.RoomScalarWhereInput[];
    id?: Prisma.UuidFilter<"Room"> | string;
    apartmentId?: Prisma.UuidFilter<"Room"> | string;
    name?: Prisma.StringFilter<"Room"> | string;
    createdAt?: Prisma.DateTimeFilter<"Room"> | Date | string;
};
export type RoomCreateWithoutIssuesInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    apartment: Prisma.ApartmentCreateNestedOneWithoutRoomsInput;
};
export type RoomUncheckedCreateWithoutIssuesInput = {
    id?: string;
    apartmentId: string;
    name: string;
    createdAt?: Date | string;
};
export type RoomCreateOrConnectWithoutIssuesInput = {
    where: Prisma.RoomWhereUniqueInput;
    create: Prisma.XOR<Prisma.RoomCreateWithoutIssuesInput, Prisma.RoomUncheckedCreateWithoutIssuesInput>;
};
export type RoomUpsertWithoutIssuesInput = {
    update: Prisma.XOR<Prisma.RoomUpdateWithoutIssuesInput, Prisma.RoomUncheckedUpdateWithoutIssuesInput>;
    create: Prisma.XOR<Prisma.RoomCreateWithoutIssuesInput, Prisma.RoomUncheckedCreateWithoutIssuesInput>;
    where?: Prisma.RoomWhereInput;
};
export type RoomUpdateToOneWithWhereWithoutIssuesInput = {
    where?: Prisma.RoomWhereInput;
    data: Prisma.XOR<Prisma.RoomUpdateWithoutIssuesInput, Prisma.RoomUncheckedUpdateWithoutIssuesInput>;
};
export type RoomUpdateWithoutIssuesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    apartment?: Prisma.ApartmentUpdateOneRequiredWithoutRoomsNestedInput;
};
export type RoomUncheckedUpdateWithoutIssuesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    apartmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RoomCreateManyApartmentInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
};
export type RoomUpdateWithoutApartmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issues?: Prisma.IssueUpdateManyWithoutRoomNestedInput;
};
export type RoomUncheckedUpdateWithoutApartmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issues?: Prisma.IssueUncheckedUpdateManyWithoutRoomNestedInput;
};
export type RoomUncheckedUpdateManyWithoutApartmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RoomCountOutputType = {
    issues: number;
};
export type RoomCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    issues?: boolean | RoomCountOutputTypeCountIssuesArgs;
};
export type RoomCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomCountOutputTypeSelect<ExtArgs> | null;
};
export type RoomCountOutputTypeCountIssuesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IssueWhereInput;
};
export type RoomSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    apartmentId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    apartment?: boolean | Prisma.ApartmentDefaultArgs<ExtArgs>;
    issues?: boolean | Prisma.Room$issuesArgs<ExtArgs>;
    _count?: boolean | Prisma.RoomCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["room"]>;
export type RoomSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    apartmentId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    apartment?: boolean | Prisma.ApartmentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["room"]>;
export type RoomSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    apartmentId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    apartment?: boolean | Prisma.ApartmentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["room"]>;
export type RoomSelectScalar = {
    id?: boolean;
    apartmentId?: boolean;
    name?: boolean;
    createdAt?: boolean;
};
export type RoomOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "apartmentId" | "name" | "createdAt", ExtArgs["result"]["room"]>;
export type RoomInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    apartment?: boolean | Prisma.ApartmentDefaultArgs<ExtArgs>;
    issues?: boolean | Prisma.Room$issuesArgs<ExtArgs>;
    _count?: boolean | Prisma.RoomCountOutputTypeDefaultArgs<ExtArgs>;
};
export type RoomIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    apartment?: boolean | Prisma.ApartmentDefaultArgs<ExtArgs>;
};
export type RoomIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    apartment?: boolean | Prisma.ApartmentDefaultArgs<ExtArgs>;
};
export type $RoomPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Room";
    objects: {
        apartment: Prisma.$ApartmentPayload<ExtArgs>;
        issues: Prisma.$IssuePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        apartmentId: string;
        name: string;
        createdAt: Date;
    }, ExtArgs["result"]["room"]>;
    composites: {};
};
export type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RoomPayload, S>;
export type RoomCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RoomCountAggregateInputType | true;
};
export interface RoomDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Room'];
        meta: {
            name: 'Room';
        };
    };
    findUnique<T extends RoomFindUniqueArgs>(args: Prisma.SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RoomClient<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RoomClient<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RoomFindFirstArgs>(args?: Prisma.SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma.Prisma__RoomClient<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RoomClient<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RoomFindManyArgs>(args?: Prisma.SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RoomCreateArgs>(args: Prisma.SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma.Prisma__RoomClient<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RoomCreateManyArgs>(args?: Prisma.SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RoomCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RoomDeleteArgs>(args: Prisma.SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma.Prisma__RoomClient<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RoomUpdateArgs>(args: Prisma.SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma.Prisma__RoomClient<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RoomDeleteManyArgs>(args?: Prisma.SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RoomUpdateManyArgs>(args: Prisma.SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RoomUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RoomUpsertArgs>(args: Prisma.SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma.Prisma__RoomClient<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RoomCountArgs>(args?: Prisma.Subset<T, RoomCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RoomCountAggregateOutputType> : number>;
    aggregate<T extends RoomAggregateArgs>(args: Prisma.Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>;
    groupBy<T extends RoomGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RoomGroupByArgs['orderBy'];
    } : {
        orderBy?: RoomGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RoomFieldRefs;
}
export interface Prisma__RoomClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    apartment<T extends Prisma.ApartmentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ApartmentDefaultArgs<ExtArgs>>): Prisma.Prisma__ApartmentClient<runtime.Types.Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    issues<T extends Prisma.Room$issuesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Room$issuesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RoomFieldRefs {
    readonly id: Prisma.FieldRef<"Room", 'String'>;
    readonly apartmentId: Prisma.FieldRef<"Room", 'String'>;
    readonly name: Prisma.FieldRef<"Room", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Room", 'DateTime'>;
}
export type RoomFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomSelect<ExtArgs> | null;
    omit?: Prisma.RoomOmit<ExtArgs> | null;
    include?: Prisma.RoomInclude<ExtArgs> | null;
    where: Prisma.RoomWhereUniqueInput;
};
export type RoomFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomSelect<ExtArgs> | null;
    omit?: Prisma.RoomOmit<ExtArgs> | null;
    include?: Prisma.RoomInclude<ExtArgs> | null;
    where: Prisma.RoomWhereUniqueInput;
};
export type RoomFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomSelect<ExtArgs> | null;
    omit?: Prisma.RoomOmit<ExtArgs> | null;
    include?: Prisma.RoomInclude<ExtArgs> | null;
    where?: Prisma.RoomWhereInput;
    orderBy?: Prisma.RoomOrderByWithRelationInput | Prisma.RoomOrderByWithRelationInput[];
    cursor?: Prisma.RoomWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RoomScalarFieldEnum | Prisma.RoomScalarFieldEnum[];
};
export type RoomFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomSelect<ExtArgs> | null;
    omit?: Prisma.RoomOmit<ExtArgs> | null;
    include?: Prisma.RoomInclude<ExtArgs> | null;
    where?: Prisma.RoomWhereInput;
    orderBy?: Prisma.RoomOrderByWithRelationInput | Prisma.RoomOrderByWithRelationInput[];
    cursor?: Prisma.RoomWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RoomScalarFieldEnum | Prisma.RoomScalarFieldEnum[];
};
export type RoomFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomSelect<ExtArgs> | null;
    omit?: Prisma.RoomOmit<ExtArgs> | null;
    include?: Prisma.RoomInclude<ExtArgs> | null;
    where?: Prisma.RoomWhereInput;
    orderBy?: Prisma.RoomOrderByWithRelationInput | Prisma.RoomOrderByWithRelationInput[];
    cursor?: Prisma.RoomWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RoomScalarFieldEnum | Prisma.RoomScalarFieldEnum[];
};
export type RoomCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomSelect<ExtArgs> | null;
    omit?: Prisma.RoomOmit<ExtArgs> | null;
    include?: Prisma.RoomInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RoomCreateInput, Prisma.RoomUncheckedCreateInput>;
};
export type RoomCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RoomCreateManyInput | Prisma.RoomCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RoomCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RoomOmit<ExtArgs> | null;
    data: Prisma.RoomCreateManyInput | Prisma.RoomCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RoomIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RoomUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomSelect<ExtArgs> | null;
    omit?: Prisma.RoomOmit<ExtArgs> | null;
    include?: Prisma.RoomInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RoomUpdateInput, Prisma.RoomUncheckedUpdateInput>;
    where: Prisma.RoomWhereUniqueInput;
};
export type RoomUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RoomUpdateManyMutationInput, Prisma.RoomUncheckedUpdateManyInput>;
    where?: Prisma.RoomWhereInput;
    limit?: number;
};
export type RoomUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RoomOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RoomUpdateManyMutationInput, Prisma.RoomUncheckedUpdateManyInput>;
    where?: Prisma.RoomWhereInput;
    limit?: number;
    include?: Prisma.RoomIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RoomUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomSelect<ExtArgs> | null;
    omit?: Prisma.RoomOmit<ExtArgs> | null;
    include?: Prisma.RoomInclude<ExtArgs> | null;
    where: Prisma.RoomWhereUniqueInput;
    create: Prisma.XOR<Prisma.RoomCreateInput, Prisma.RoomUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RoomUpdateInput, Prisma.RoomUncheckedUpdateInput>;
};
export type RoomDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomSelect<ExtArgs> | null;
    omit?: Prisma.RoomOmit<ExtArgs> | null;
    include?: Prisma.RoomInclude<ExtArgs> | null;
    where: Prisma.RoomWhereUniqueInput;
};
export type RoomDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RoomWhereInput;
    limit?: number;
};
export type Room$issuesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RoomDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomSelect<ExtArgs> | null;
    omit?: Prisma.RoomOmit<ExtArgs> | null;
    include?: Prisma.RoomInclude<ExtArgs> | null;
};
