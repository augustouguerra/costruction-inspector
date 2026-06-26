import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ApartmentModel = runtime.Types.Result.DefaultSelection<Prisma.$ApartmentPayload>;
export type AggregateApartment = {
    _count: ApartmentCountAggregateOutputType | null;
    _min: ApartmentMinAggregateOutputType | null;
    _max: ApartmentMaxAggregateOutputType | null;
};
export type ApartmentMinAggregateOutputType = {
    id: string | null;
    floorId: string | null;
    identifier: string | null;
    createdAt: Date | null;
};
export type ApartmentMaxAggregateOutputType = {
    id: string | null;
    floorId: string | null;
    identifier: string | null;
    createdAt: Date | null;
};
export type ApartmentCountAggregateOutputType = {
    id: number;
    floorId: number;
    identifier: number;
    createdAt: number;
    _all: number;
};
export type ApartmentMinAggregateInputType = {
    id?: true;
    floorId?: true;
    identifier?: true;
    createdAt?: true;
};
export type ApartmentMaxAggregateInputType = {
    id?: true;
    floorId?: true;
    identifier?: true;
    createdAt?: true;
};
export type ApartmentCountAggregateInputType = {
    id?: true;
    floorId?: true;
    identifier?: true;
    createdAt?: true;
    _all?: true;
};
export type ApartmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApartmentWhereInput;
    orderBy?: Prisma.ApartmentOrderByWithRelationInput | Prisma.ApartmentOrderByWithRelationInput[];
    cursor?: Prisma.ApartmentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ApartmentCountAggregateInputType;
    _min?: ApartmentMinAggregateInputType;
    _max?: ApartmentMaxAggregateInputType;
};
export type GetApartmentAggregateType<T extends ApartmentAggregateArgs> = {
    [P in keyof T & keyof AggregateApartment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateApartment[P]> : Prisma.GetScalarType<T[P], AggregateApartment[P]>;
};
export type ApartmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApartmentWhereInput;
    orderBy?: Prisma.ApartmentOrderByWithAggregationInput | Prisma.ApartmentOrderByWithAggregationInput[];
    by: Prisma.ApartmentScalarFieldEnum[] | Prisma.ApartmentScalarFieldEnum;
    having?: Prisma.ApartmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ApartmentCountAggregateInputType | true;
    _min?: ApartmentMinAggregateInputType;
    _max?: ApartmentMaxAggregateInputType;
};
export type ApartmentGroupByOutputType = {
    id: string;
    floorId: string;
    identifier: string;
    createdAt: Date;
    _count: ApartmentCountAggregateOutputType | null;
    _min: ApartmentMinAggregateOutputType | null;
    _max: ApartmentMaxAggregateOutputType | null;
};
export type GetApartmentGroupByPayload<T extends ApartmentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ApartmentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ApartmentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ApartmentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ApartmentGroupByOutputType[P]>;
}>>;
export type ApartmentWhereInput = {
    AND?: Prisma.ApartmentWhereInput | Prisma.ApartmentWhereInput[];
    OR?: Prisma.ApartmentWhereInput[];
    NOT?: Prisma.ApartmentWhereInput | Prisma.ApartmentWhereInput[];
    id?: Prisma.UuidFilter<"Apartment"> | string;
    floorId?: Prisma.UuidFilter<"Apartment"> | string;
    identifier?: Prisma.StringFilter<"Apartment"> | string;
    createdAt?: Prisma.DateTimeFilter<"Apartment"> | Date | string;
    floor?: Prisma.XOR<Prisma.FloorScalarRelationFilter, Prisma.FloorWhereInput>;
    rooms?: Prisma.RoomListRelationFilter;
};
export type ApartmentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    floorId?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    floor?: Prisma.FloorOrderByWithRelationInput;
    rooms?: Prisma.RoomOrderByRelationAggregateInput;
};
export type ApartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    floorId_identifier?: Prisma.ApartmentFloorIdIdentifierCompoundUniqueInput;
    AND?: Prisma.ApartmentWhereInput | Prisma.ApartmentWhereInput[];
    OR?: Prisma.ApartmentWhereInput[];
    NOT?: Prisma.ApartmentWhereInput | Prisma.ApartmentWhereInput[];
    floorId?: Prisma.UuidFilter<"Apartment"> | string;
    identifier?: Prisma.StringFilter<"Apartment"> | string;
    createdAt?: Prisma.DateTimeFilter<"Apartment"> | Date | string;
    floor?: Prisma.XOR<Prisma.FloorScalarRelationFilter, Prisma.FloorWhereInput>;
    rooms?: Prisma.RoomListRelationFilter;
}, "id" | "floorId_identifier">;
export type ApartmentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    floorId?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ApartmentCountOrderByAggregateInput;
    _max?: Prisma.ApartmentMaxOrderByAggregateInput;
    _min?: Prisma.ApartmentMinOrderByAggregateInput;
};
export type ApartmentScalarWhereWithAggregatesInput = {
    AND?: Prisma.ApartmentScalarWhereWithAggregatesInput | Prisma.ApartmentScalarWhereWithAggregatesInput[];
    OR?: Prisma.ApartmentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ApartmentScalarWhereWithAggregatesInput | Prisma.ApartmentScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Apartment"> | string;
    floorId?: Prisma.UuidWithAggregatesFilter<"Apartment"> | string;
    identifier?: Prisma.StringWithAggregatesFilter<"Apartment"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Apartment"> | Date | string;
};
export type ApartmentCreateInput = {
    id?: string;
    identifier: string;
    createdAt?: Date | string;
    floor: Prisma.FloorCreateNestedOneWithoutApartmentsInput;
    rooms?: Prisma.RoomCreateNestedManyWithoutApartmentInput;
};
export type ApartmentUncheckedCreateInput = {
    id?: string;
    floorId: string;
    identifier: string;
    createdAt?: Date | string;
    rooms?: Prisma.RoomUncheckedCreateNestedManyWithoutApartmentInput;
};
export type ApartmentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    floor?: Prisma.FloorUpdateOneRequiredWithoutApartmentsNestedInput;
    rooms?: Prisma.RoomUpdateManyWithoutApartmentNestedInput;
};
export type ApartmentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    floorId?: Prisma.StringFieldUpdateOperationsInput | string;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rooms?: Prisma.RoomUncheckedUpdateManyWithoutApartmentNestedInput;
};
export type ApartmentCreateManyInput = {
    id?: string;
    floorId: string;
    identifier: string;
    createdAt?: Date | string;
};
export type ApartmentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApartmentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    floorId?: Prisma.StringFieldUpdateOperationsInput | string;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApartmentListRelationFilter = {
    every?: Prisma.ApartmentWhereInput;
    some?: Prisma.ApartmentWhereInput;
    none?: Prisma.ApartmentWhereInput;
};
export type ApartmentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ApartmentFloorIdIdentifierCompoundUniqueInput = {
    floorId: string;
    identifier: string;
};
export type ApartmentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    floorId?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ApartmentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    floorId?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ApartmentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    floorId?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ApartmentScalarRelationFilter = {
    is?: Prisma.ApartmentWhereInput;
    isNot?: Prisma.ApartmentWhereInput;
};
export type ApartmentCreateNestedManyWithoutFloorInput = {
    create?: Prisma.XOR<Prisma.ApartmentCreateWithoutFloorInput, Prisma.ApartmentUncheckedCreateWithoutFloorInput> | Prisma.ApartmentCreateWithoutFloorInput[] | Prisma.ApartmentUncheckedCreateWithoutFloorInput[];
    connectOrCreate?: Prisma.ApartmentCreateOrConnectWithoutFloorInput | Prisma.ApartmentCreateOrConnectWithoutFloorInput[];
    createMany?: Prisma.ApartmentCreateManyFloorInputEnvelope;
    connect?: Prisma.ApartmentWhereUniqueInput | Prisma.ApartmentWhereUniqueInput[];
};
export type ApartmentUncheckedCreateNestedManyWithoutFloorInput = {
    create?: Prisma.XOR<Prisma.ApartmentCreateWithoutFloorInput, Prisma.ApartmentUncheckedCreateWithoutFloorInput> | Prisma.ApartmentCreateWithoutFloorInput[] | Prisma.ApartmentUncheckedCreateWithoutFloorInput[];
    connectOrCreate?: Prisma.ApartmentCreateOrConnectWithoutFloorInput | Prisma.ApartmentCreateOrConnectWithoutFloorInput[];
    createMany?: Prisma.ApartmentCreateManyFloorInputEnvelope;
    connect?: Prisma.ApartmentWhereUniqueInput | Prisma.ApartmentWhereUniqueInput[];
};
export type ApartmentUpdateManyWithoutFloorNestedInput = {
    create?: Prisma.XOR<Prisma.ApartmentCreateWithoutFloorInput, Prisma.ApartmentUncheckedCreateWithoutFloorInput> | Prisma.ApartmentCreateWithoutFloorInput[] | Prisma.ApartmentUncheckedCreateWithoutFloorInput[];
    connectOrCreate?: Prisma.ApartmentCreateOrConnectWithoutFloorInput | Prisma.ApartmentCreateOrConnectWithoutFloorInput[];
    upsert?: Prisma.ApartmentUpsertWithWhereUniqueWithoutFloorInput | Prisma.ApartmentUpsertWithWhereUniqueWithoutFloorInput[];
    createMany?: Prisma.ApartmentCreateManyFloorInputEnvelope;
    set?: Prisma.ApartmentWhereUniqueInput | Prisma.ApartmentWhereUniqueInput[];
    disconnect?: Prisma.ApartmentWhereUniqueInput | Prisma.ApartmentWhereUniqueInput[];
    delete?: Prisma.ApartmentWhereUniqueInput | Prisma.ApartmentWhereUniqueInput[];
    connect?: Prisma.ApartmentWhereUniqueInput | Prisma.ApartmentWhereUniqueInput[];
    update?: Prisma.ApartmentUpdateWithWhereUniqueWithoutFloorInput | Prisma.ApartmentUpdateWithWhereUniqueWithoutFloorInput[];
    updateMany?: Prisma.ApartmentUpdateManyWithWhereWithoutFloorInput | Prisma.ApartmentUpdateManyWithWhereWithoutFloorInput[];
    deleteMany?: Prisma.ApartmentScalarWhereInput | Prisma.ApartmentScalarWhereInput[];
};
export type ApartmentUncheckedUpdateManyWithoutFloorNestedInput = {
    create?: Prisma.XOR<Prisma.ApartmentCreateWithoutFloorInput, Prisma.ApartmentUncheckedCreateWithoutFloorInput> | Prisma.ApartmentCreateWithoutFloorInput[] | Prisma.ApartmentUncheckedCreateWithoutFloorInput[];
    connectOrCreate?: Prisma.ApartmentCreateOrConnectWithoutFloorInput | Prisma.ApartmentCreateOrConnectWithoutFloorInput[];
    upsert?: Prisma.ApartmentUpsertWithWhereUniqueWithoutFloorInput | Prisma.ApartmentUpsertWithWhereUniqueWithoutFloorInput[];
    createMany?: Prisma.ApartmentCreateManyFloorInputEnvelope;
    set?: Prisma.ApartmentWhereUniqueInput | Prisma.ApartmentWhereUniqueInput[];
    disconnect?: Prisma.ApartmentWhereUniqueInput | Prisma.ApartmentWhereUniqueInput[];
    delete?: Prisma.ApartmentWhereUniqueInput | Prisma.ApartmentWhereUniqueInput[];
    connect?: Prisma.ApartmentWhereUniqueInput | Prisma.ApartmentWhereUniqueInput[];
    update?: Prisma.ApartmentUpdateWithWhereUniqueWithoutFloorInput | Prisma.ApartmentUpdateWithWhereUniqueWithoutFloorInput[];
    updateMany?: Prisma.ApartmentUpdateManyWithWhereWithoutFloorInput | Prisma.ApartmentUpdateManyWithWhereWithoutFloorInput[];
    deleteMany?: Prisma.ApartmentScalarWhereInput | Prisma.ApartmentScalarWhereInput[];
};
export type ApartmentCreateNestedOneWithoutRoomsInput = {
    create?: Prisma.XOR<Prisma.ApartmentCreateWithoutRoomsInput, Prisma.ApartmentUncheckedCreateWithoutRoomsInput>;
    connectOrCreate?: Prisma.ApartmentCreateOrConnectWithoutRoomsInput;
    connect?: Prisma.ApartmentWhereUniqueInput;
};
export type ApartmentUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: Prisma.XOR<Prisma.ApartmentCreateWithoutRoomsInput, Prisma.ApartmentUncheckedCreateWithoutRoomsInput>;
    connectOrCreate?: Prisma.ApartmentCreateOrConnectWithoutRoomsInput;
    upsert?: Prisma.ApartmentUpsertWithoutRoomsInput;
    connect?: Prisma.ApartmentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ApartmentUpdateToOneWithWhereWithoutRoomsInput, Prisma.ApartmentUpdateWithoutRoomsInput>, Prisma.ApartmentUncheckedUpdateWithoutRoomsInput>;
};
export type ApartmentCreateWithoutFloorInput = {
    id?: string;
    identifier: string;
    createdAt?: Date | string;
    rooms?: Prisma.RoomCreateNestedManyWithoutApartmentInput;
};
export type ApartmentUncheckedCreateWithoutFloorInput = {
    id?: string;
    identifier: string;
    createdAt?: Date | string;
    rooms?: Prisma.RoomUncheckedCreateNestedManyWithoutApartmentInput;
};
export type ApartmentCreateOrConnectWithoutFloorInput = {
    where: Prisma.ApartmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApartmentCreateWithoutFloorInput, Prisma.ApartmentUncheckedCreateWithoutFloorInput>;
};
export type ApartmentCreateManyFloorInputEnvelope = {
    data: Prisma.ApartmentCreateManyFloorInput | Prisma.ApartmentCreateManyFloorInput[];
    skipDuplicates?: boolean;
};
export type ApartmentUpsertWithWhereUniqueWithoutFloorInput = {
    where: Prisma.ApartmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.ApartmentUpdateWithoutFloorInput, Prisma.ApartmentUncheckedUpdateWithoutFloorInput>;
    create: Prisma.XOR<Prisma.ApartmentCreateWithoutFloorInput, Prisma.ApartmentUncheckedCreateWithoutFloorInput>;
};
export type ApartmentUpdateWithWhereUniqueWithoutFloorInput = {
    where: Prisma.ApartmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.ApartmentUpdateWithoutFloorInput, Prisma.ApartmentUncheckedUpdateWithoutFloorInput>;
};
export type ApartmentUpdateManyWithWhereWithoutFloorInput = {
    where: Prisma.ApartmentScalarWhereInput;
    data: Prisma.XOR<Prisma.ApartmentUpdateManyMutationInput, Prisma.ApartmentUncheckedUpdateManyWithoutFloorInput>;
};
export type ApartmentScalarWhereInput = {
    AND?: Prisma.ApartmentScalarWhereInput | Prisma.ApartmentScalarWhereInput[];
    OR?: Prisma.ApartmentScalarWhereInput[];
    NOT?: Prisma.ApartmentScalarWhereInput | Prisma.ApartmentScalarWhereInput[];
    id?: Prisma.UuidFilter<"Apartment"> | string;
    floorId?: Prisma.UuidFilter<"Apartment"> | string;
    identifier?: Prisma.StringFilter<"Apartment"> | string;
    createdAt?: Prisma.DateTimeFilter<"Apartment"> | Date | string;
};
export type ApartmentCreateWithoutRoomsInput = {
    id?: string;
    identifier: string;
    createdAt?: Date | string;
    floor: Prisma.FloorCreateNestedOneWithoutApartmentsInput;
};
export type ApartmentUncheckedCreateWithoutRoomsInput = {
    id?: string;
    floorId: string;
    identifier: string;
    createdAt?: Date | string;
};
export type ApartmentCreateOrConnectWithoutRoomsInput = {
    where: Prisma.ApartmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApartmentCreateWithoutRoomsInput, Prisma.ApartmentUncheckedCreateWithoutRoomsInput>;
};
export type ApartmentUpsertWithoutRoomsInput = {
    update: Prisma.XOR<Prisma.ApartmentUpdateWithoutRoomsInput, Prisma.ApartmentUncheckedUpdateWithoutRoomsInput>;
    create: Prisma.XOR<Prisma.ApartmentCreateWithoutRoomsInput, Prisma.ApartmentUncheckedCreateWithoutRoomsInput>;
    where?: Prisma.ApartmentWhereInput;
};
export type ApartmentUpdateToOneWithWhereWithoutRoomsInput = {
    where?: Prisma.ApartmentWhereInput;
    data: Prisma.XOR<Prisma.ApartmentUpdateWithoutRoomsInput, Prisma.ApartmentUncheckedUpdateWithoutRoomsInput>;
};
export type ApartmentUpdateWithoutRoomsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    floor?: Prisma.FloorUpdateOneRequiredWithoutApartmentsNestedInput;
};
export type ApartmentUncheckedUpdateWithoutRoomsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    floorId?: Prisma.StringFieldUpdateOperationsInput | string;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApartmentCreateManyFloorInput = {
    id?: string;
    identifier: string;
    createdAt?: Date | string;
};
export type ApartmentUpdateWithoutFloorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rooms?: Prisma.RoomUpdateManyWithoutApartmentNestedInput;
};
export type ApartmentUncheckedUpdateWithoutFloorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rooms?: Prisma.RoomUncheckedUpdateManyWithoutApartmentNestedInput;
};
export type ApartmentUncheckedUpdateManyWithoutFloorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApartmentCountOutputType = {
    rooms: number;
};
export type ApartmentCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rooms?: boolean | ApartmentCountOutputTypeCountRoomsArgs;
};
export type ApartmentCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApartmentCountOutputTypeSelect<ExtArgs> | null;
};
export type ApartmentCountOutputTypeCountRoomsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RoomWhereInput;
};
export type ApartmentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    floorId?: boolean;
    identifier?: boolean;
    createdAt?: boolean;
    floor?: boolean | Prisma.FloorDefaultArgs<ExtArgs>;
    rooms?: boolean | Prisma.Apartment$roomsArgs<ExtArgs>;
    _count?: boolean | Prisma.ApartmentCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["apartment"]>;
export type ApartmentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    floorId?: boolean;
    identifier?: boolean;
    createdAt?: boolean;
    floor?: boolean | Prisma.FloorDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["apartment"]>;
export type ApartmentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    floorId?: boolean;
    identifier?: boolean;
    createdAt?: boolean;
    floor?: boolean | Prisma.FloorDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["apartment"]>;
export type ApartmentSelectScalar = {
    id?: boolean;
    floorId?: boolean;
    identifier?: boolean;
    createdAt?: boolean;
};
export type ApartmentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "floorId" | "identifier" | "createdAt", ExtArgs["result"]["apartment"]>;
export type ApartmentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    floor?: boolean | Prisma.FloorDefaultArgs<ExtArgs>;
    rooms?: boolean | Prisma.Apartment$roomsArgs<ExtArgs>;
    _count?: boolean | Prisma.ApartmentCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ApartmentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    floor?: boolean | Prisma.FloorDefaultArgs<ExtArgs>;
};
export type ApartmentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    floor?: boolean | Prisma.FloorDefaultArgs<ExtArgs>;
};
export type $ApartmentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Apartment";
    objects: {
        floor: Prisma.$FloorPayload<ExtArgs>;
        rooms: Prisma.$RoomPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        floorId: string;
        identifier: string;
        createdAt: Date;
    }, ExtArgs["result"]["apartment"]>;
    composites: {};
};
export type ApartmentGetPayload<S extends boolean | null | undefined | ApartmentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ApartmentPayload, S>;
export type ApartmentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ApartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ApartmentCountAggregateInputType | true;
};
export interface ApartmentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Apartment'];
        meta: {
            name: 'Apartment';
        };
    };
    findUnique<T extends ApartmentFindUniqueArgs>(args: Prisma.SelectSubset<T, ApartmentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ApartmentClient<runtime.Types.Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ApartmentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ApartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ApartmentClient<runtime.Types.Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ApartmentFindFirstArgs>(args?: Prisma.SelectSubset<T, ApartmentFindFirstArgs<ExtArgs>>): Prisma.Prisma__ApartmentClient<runtime.Types.Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ApartmentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ApartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ApartmentClient<runtime.Types.Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ApartmentFindManyArgs>(args?: Prisma.SelectSubset<T, ApartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ApartmentCreateArgs>(args: Prisma.SelectSubset<T, ApartmentCreateArgs<ExtArgs>>): Prisma.Prisma__ApartmentClient<runtime.Types.Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ApartmentCreateManyArgs>(args?: Prisma.SelectSubset<T, ApartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ApartmentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ApartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ApartmentDeleteArgs>(args: Prisma.SelectSubset<T, ApartmentDeleteArgs<ExtArgs>>): Prisma.Prisma__ApartmentClient<runtime.Types.Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ApartmentUpdateArgs>(args: Prisma.SelectSubset<T, ApartmentUpdateArgs<ExtArgs>>): Prisma.Prisma__ApartmentClient<runtime.Types.Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ApartmentDeleteManyArgs>(args?: Prisma.SelectSubset<T, ApartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ApartmentUpdateManyArgs>(args: Prisma.SelectSubset<T, ApartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ApartmentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ApartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ApartmentUpsertArgs>(args: Prisma.SelectSubset<T, ApartmentUpsertArgs<ExtArgs>>): Prisma.Prisma__ApartmentClient<runtime.Types.Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ApartmentCountArgs>(args?: Prisma.Subset<T, ApartmentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ApartmentCountAggregateOutputType> : number>;
    aggregate<T extends ApartmentAggregateArgs>(args: Prisma.Subset<T, ApartmentAggregateArgs>): Prisma.PrismaPromise<GetApartmentAggregateType<T>>;
    groupBy<T extends ApartmentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ApartmentGroupByArgs['orderBy'];
    } : {
        orderBy?: ApartmentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ApartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ApartmentFieldRefs;
}
export interface Prisma__ApartmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    floor<T extends Prisma.FloorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FloorDefaultArgs<ExtArgs>>): Prisma.Prisma__FloorClient<runtime.Types.Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    rooms<T extends Prisma.Apartment$roomsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Apartment$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ApartmentFieldRefs {
    readonly id: Prisma.FieldRef<"Apartment", 'String'>;
    readonly floorId: Prisma.FieldRef<"Apartment", 'String'>;
    readonly identifier: Prisma.FieldRef<"Apartment", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Apartment", 'DateTime'>;
}
export type ApartmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApartmentSelect<ExtArgs> | null;
    omit?: Prisma.ApartmentOmit<ExtArgs> | null;
    include?: Prisma.ApartmentInclude<ExtArgs> | null;
    where: Prisma.ApartmentWhereUniqueInput;
};
export type ApartmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApartmentSelect<ExtArgs> | null;
    omit?: Prisma.ApartmentOmit<ExtArgs> | null;
    include?: Prisma.ApartmentInclude<ExtArgs> | null;
    where: Prisma.ApartmentWhereUniqueInput;
};
export type ApartmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApartmentSelect<ExtArgs> | null;
    omit?: Prisma.ApartmentOmit<ExtArgs> | null;
    include?: Prisma.ApartmentInclude<ExtArgs> | null;
    where?: Prisma.ApartmentWhereInput;
    orderBy?: Prisma.ApartmentOrderByWithRelationInput | Prisma.ApartmentOrderByWithRelationInput[];
    cursor?: Prisma.ApartmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ApartmentScalarFieldEnum | Prisma.ApartmentScalarFieldEnum[];
};
export type ApartmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApartmentSelect<ExtArgs> | null;
    omit?: Prisma.ApartmentOmit<ExtArgs> | null;
    include?: Prisma.ApartmentInclude<ExtArgs> | null;
    where?: Prisma.ApartmentWhereInput;
    orderBy?: Prisma.ApartmentOrderByWithRelationInput | Prisma.ApartmentOrderByWithRelationInput[];
    cursor?: Prisma.ApartmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ApartmentScalarFieldEnum | Prisma.ApartmentScalarFieldEnum[];
};
export type ApartmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApartmentSelect<ExtArgs> | null;
    omit?: Prisma.ApartmentOmit<ExtArgs> | null;
    include?: Prisma.ApartmentInclude<ExtArgs> | null;
    where?: Prisma.ApartmentWhereInput;
    orderBy?: Prisma.ApartmentOrderByWithRelationInput | Prisma.ApartmentOrderByWithRelationInput[];
    cursor?: Prisma.ApartmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ApartmentScalarFieldEnum | Prisma.ApartmentScalarFieldEnum[];
};
export type ApartmentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApartmentSelect<ExtArgs> | null;
    omit?: Prisma.ApartmentOmit<ExtArgs> | null;
    include?: Prisma.ApartmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ApartmentCreateInput, Prisma.ApartmentUncheckedCreateInput>;
};
export type ApartmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ApartmentCreateManyInput | Prisma.ApartmentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ApartmentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApartmentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ApartmentOmit<ExtArgs> | null;
    data: Prisma.ApartmentCreateManyInput | Prisma.ApartmentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ApartmentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ApartmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApartmentSelect<ExtArgs> | null;
    omit?: Prisma.ApartmentOmit<ExtArgs> | null;
    include?: Prisma.ApartmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ApartmentUpdateInput, Prisma.ApartmentUncheckedUpdateInput>;
    where: Prisma.ApartmentWhereUniqueInput;
};
export type ApartmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ApartmentUpdateManyMutationInput, Prisma.ApartmentUncheckedUpdateManyInput>;
    where?: Prisma.ApartmentWhereInput;
    limit?: number;
};
export type ApartmentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApartmentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ApartmentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ApartmentUpdateManyMutationInput, Prisma.ApartmentUncheckedUpdateManyInput>;
    where?: Prisma.ApartmentWhereInput;
    limit?: number;
    include?: Prisma.ApartmentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ApartmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApartmentSelect<ExtArgs> | null;
    omit?: Prisma.ApartmentOmit<ExtArgs> | null;
    include?: Prisma.ApartmentInclude<ExtArgs> | null;
    where: Prisma.ApartmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApartmentCreateInput, Prisma.ApartmentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ApartmentUpdateInput, Prisma.ApartmentUncheckedUpdateInput>;
};
export type ApartmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApartmentSelect<ExtArgs> | null;
    omit?: Prisma.ApartmentOmit<ExtArgs> | null;
    include?: Prisma.ApartmentInclude<ExtArgs> | null;
    where: Prisma.ApartmentWhereUniqueInput;
};
export type ApartmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApartmentWhereInput;
    limit?: number;
};
export type Apartment$roomsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ApartmentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApartmentSelect<ExtArgs> | null;
    omit?: Prisma.ApartmentOmit<ExtArgs> | null;
    include?: Prisma.ApartmentInclude<ExtArgs> | null;
};
