import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type FloorModel = runtime.Types.Result.DefaultSelection<Prisma.$FloorPayload>;
export type AggregateFloor = {
    _count: FloorCountAggregateOutputType | null;
    _avg: FloorAvgAggregateOutputType | null;
    _sum: FloorSumAggregateOutputType | null;
    _min: FloorMinAggregateOutputType | null;
    _max: FloorMaxAggregateOutputType | null;
};
export type FloorAvgAggregateOutputType = {
    number: number | null;
};
export type FloorSumAggregateOutputType = {
    number: number | null;
};
export type FloorMinAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    number: number | null;
    label: string | null;
    createdAt: Date | null;
};
export type FloorMaxAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    number: number | null;
    label: string | null;
    createdAt: Date | null;
};
export type FloorCountAggregateOutputType = {
    id: number;
    projectId: number;
    number: number;
    label: number;
    createdAt: number;
    _all: number;
};
export type FloorAvgAggregateInputType = {
    number?: true;
};
export type FloorSumAggregateInputType = {
    number?: true;
};
export type FloorMinAggregateInputType = {
    id?: true;
    projectId?: true;
    number?: true;
    label?: true;
    createdAt?: true;
};
export type FloorMaxAggregateInputType = {
    id?: true;
    projectId?: true;
    number?: true;
    label?: true;
    createdAt?: true;
};
export type FloorCountAggregateInputType = {
    id?: true;
    projectId?: true;
    number?: true;
    label?: true;
    createdAt?: true;
    _all?: true;
};
export type FloorAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FloorWhereInput;
    orderBy?: Prisma.FloorOrderByWithRelationInput | Prisma.FloorOrderByWithRelationInput[];
    cursor?: Prisma.FloorWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FloorCountAggregateInputType;
    _avg?: FloorAvgAggregateInputType;
    _sum?: FloorSumAggregateInputType;
    _min?: FloorMinAggregateInputType;
    _max?: FloorMaxAggregateInputType;
};
export type GetFloorAggregateType<T extends FloorAggregateArgs> = {
    [P in keyof T & keyof AggregateFloor]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFloor[P]> : Prisma.GetScalarType<T[P], AggregateFloor[P]>;
};
export type FloorGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FloorWhereInput;
    orderBy?: Prisma.FloorOrderByWithAggregationInput | Prisma.FloorOrderByWithAggregationInput[];
    by: Prisma.FloorScalarFieldEnum[] | Prisma.FloorScalarFieldEnum;
    having?: Prisma.FloorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FloorCountAggregateInputType | true;
    _avg?: FloorAvgAggregateInputType;
    _sum?: FloorSumAggregateInputType;
    _min?: FloorMinAggregateInputType;
    _max?: FloorMaxAggregateInputType;
};
export type FloorGroupByOutputType = {
    id: string;
    projectId: string;
    number: number;
    label: string;
    createdAt: Date;
    _count: FloorCountAggregateOutputType | null;
    _avg: FloorAvgAggregateOutputType | null;
    _sum: FloorSumAggregateOutputType | null;
    _min: FloorMinAggregateOutputType | null;
    _max: FloorMaxAggregateOutputType | null;
};
export type GetFloorGroupByPayload<T extends FloorGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FloorGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FloorGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FloorGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FloorGroupByOutputType[P]>;
}>>;
export type FloorWhereInput = {
    AND?: Prisma.FloorWhereInput | Prisma.FloorWhereInput[];
    OR?: Prisma.FloorWhereInput[];
    NOT?: Prisma.FloorWhereInput | Prisma.FloorWhereInput[];
    id?: Prisma.UuidFilter<"Floor"> | string;
    projectId?: Prisma.UuidFilter<"Floor"> | string;
    number?: Prisma.IntFilter<"Floor"> | number;
    label?: Prisma.StringFilter<"Floor"> | string;
    createdAt?: Prisma.DateTimeFilter<"Floor"> | Date | string;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
    apartments?: Prisma.ApartmentListRelationFilter;
};
export type FloorOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    project?: Prisma.ProjectOrderByWithRelationInput;
    apartments?: Prisma.ApartmentOrderByRelationAggregateInput;
};
export type FloorWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    projectId_number?: Prisma.FloorProjectIdNumberCompoundUniqueInput;
    AND?: Prisma.FloorWhereInput | Prisma.FloorWhereInput[];
    OR?: Prisma.FloorWhereInput[];
    NOT?: Prisma.FloorWhereInput | Prisma.FloorWhereInput[];
    projectId?: Prisma.UuidFilter<"Floor"> | string;
    number?: Prisma.IntFilter<"Floor"> | number;
    label?: Prisma.StringFilter<"Floor"> | string;
    createdAt?: Prisma.DateTimeFilter<"Floor"> | Date | string;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
    apartments?: Prisma.ApartmentListRelationFilter;
}, "id" | "projectId_number">;
export type FloorOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.FloorCountOrderByAggregateInput;
    _avg?: Prisma.FloorAvgOrderByAggregateInput;
    _max?: Prisma.FloorMaxOrderByAggregateInput;
    _min?: Prisma.FloorMinOrderByAggregateInput;
    _sum?: Prisma.FloorSumOrderByAggregateInput;
};
export type FloorScalarWhereWithAggregatesInput = {
    AND?: Prisma.FloorScalarWhereWithAggregatesInput | Prisma.FloorScalarWhereWithAggregatesInput[];
    OR?: Prisma.FloorScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FloorScalarWhereWithAggregatesInput | Prisma.FloorScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Floor"> | string;
    projectId?: Prisma.UuidWithAggregatesFilter<"Floor"> | string;
    number?: Prisma.IntWithAggregatesFilter<"Floor"> | number;
    label?: Prisma.StringWithAggregatesFilter<"Floor"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Floor"> | Date | string;
};
export type FloorCreateInput = {
    id?: string;
    number: number;
    label: string;
    createdAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutFloorsInput;
    apartments?: Prisma.ApartmentCreateNestedManyWithoutFloorInput;
};
export type FloorUncheckedCreateInput = {
    id?: string;
    projectId: string;
    number: number;
    label: string;
    createdAt?: Date | string;
    apartments?: Prisma.ApartmentUncheckedCreateNestedManyWithoutFloorInput;
};
export type FloorUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutFloorsNestedInput;
    apartments?: Prisma.ApartmentUpdateManyWithoutFloorNestedInput;
};
export type FloorUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    apartments?: Prisma.ApartmentUncheckedUpdateManyWithoutFloorNestedInput;
};
export type FloorCreateManyInput = {
    id?: string;
    projectId: string;
    number: number;
    label: string;
    createdAt?: Date | string;
};
export type FloorUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FloorUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FloorListRelationFilter = {
    every?: Prisma.FloorWhereInput;
    some?: Prisma.FloorWhereInput;
    none?: Prisma.FloorWhereInput;
};
export type FloorOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FloorProjectIdNumberCompoundUniqueInput = {
    projectId: string;
    number: number;
};
export type FloorCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FloorAvgOrderByAggregateInput = {
    number?: Prisma.SortOrder;
};
export type FloorMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FloorMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FloorSumOrderByAggregateInput = {
    number?: Prisma.SortOrder;
};
export type FloorScalarRelationFilter = {
    is?: Prisma.FloorWhereInput;
    isNot?: Prisma.FloorWhereInput;
};
export type FloorCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.FloorCreateWithoutProjectInput, Prisma.FloorUncheckedCreateWithoutProjectInput> | Prisma.FloorCreateWithoutProjectInput[] | Prisma.FloorUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.FloorCreateOrConnectWithoutProjectInput | Prisma.FloorCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.FloorCreateManyProjectInputEnvelope;
    connect?: Prisma.FloorWhereUniqueInput | Prisma.FloorWhereUniqueInput[];
};
export type FloorUncheckedCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.FloorCreateWithoutProjectInput, Prisma.FloorUncheckedCreateWithoutProjectInput> | Prisma.FloorCreateWithoutProjectInput[] | Prisma.FloorUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.FloorCreateOrConnectWithoutProjectInput | Prisma.FloorCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.FloorCreateManyProjectInputEnvelope;
    connect?: Prisma.FloorWhereUniqueInput | Prisma.FloorWhereUniqueInput[];
};
export type FloorUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.FloorCreateWithoutProjectInput, Prisma.FloorUncheckedCreateWithoutProjectInput> | Prisma.FloorCreateWithoutProjectInput[] | Prisma.FloorUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.FloorCreateOrConnectWithoutProjectInput | Prisma.FloorCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.FloorUpsertWithWhereUniqueWithoutProjectInput | Prisma.FloorUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.FloorCreateManyProjectInputEnvelope;
    set?: Prisma.FloorWhereUniqueInput | Prisma.FloorWhereUniqueInput[];
    disconnect?: Prisma.FloorWhereUniqueInput | Prisma.FloorWhereUniqueInput[];
    delete?: Prisma.FloorWhereUniqueInput | Prisma.FloorWhereUniqueInput[];
    connect?: Prisma.FloorWhereUniqueInput | Prisma.FloorWhereUniqueInput[];
    update?: Prisma.FloorUpdateWithWhereUniqueWithoutProjectInput | Prisma.FloorUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.FloorUpdateManyWithWhereWithoutProjectInput | Prisma.FloorUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.FloorScalarWhereInput | Prisma.FloorScalarWhereInput[];
};
export type FloorUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.FloorCreateWithoutProjectInput, Prisma.FloorUncheckedCreateWithoutProjectInput> | Prisma.FloorCreateWithoutProjectInput[] | Prisma.FloorUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.FloorCreateOrConnectWithoutProjectInput | Prisma.FloorCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.FloorUpsertWithWhereUniqueWithoutProjectInput | Prisma.FloorUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.FloorCreateManyProjectInputEnvelope;
    set?: Prisma.FloorWhereUniqueInput | Prisma.FloorWhereUniqueInput[];
    disconnect?: Prisma.FloorWhereUniqueInput | Prisma.FloorWhereUniqueInput[];
    delete?: Prisma.FloorWhereUniqueInput | Prisma.FloorWhereUniqueInput[];
    connect?: Prisma.FloorWhereUniqueInput | Prisma.FloorWhereUniqueInput[];
    update?: Prisma.FloorUpdateWithWhereUniqueWithoutProjectInput | Prisma.FloorUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.FloorUpdateManyWithWhereWithoutProjectInput | Prisma.FloorUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.FloorScalarWhereInput | Prisma.FloorScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type FloorCreateNestedOneWithoutApartmentsInput = {
    create?: Prisma.XOR<Prisma.FloorCreateWithoutApartmentsInput, Prisma.FloorUncheckedCreateWithoutApartmentsInput>;
    connectOrCreate?: Prisma.FloorCreateOrConnectWithoutApartmentsInput;
    connect?: Prisma.FloorWhereUniqueInput;
};
export type FloorUpdateOneRequiredWithoutApartmentsNestedInput = {
    create?: Prisma.XOR<Prisma.FloorCreateWithoutApartmentsInput, Prisma.FloorUncheckedCreateWithoutApartmentsInput>;
    connectOrCreate?: Prisma.FloorCreateOrConnectWithoutApartmentsInput;
    upsert?: Prisma.FloorUpsertWithoutApartmentsInput;
    connect?: Prisma.FloorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FloorUpdateToOneWithWhereWithoutApartmentsInput, Prisma.FloorUpdateWithoutApartmentsInput>, Prisma.FloorUncheckedUpdateWithoutApartmentsInput>;
};
export type FloorCreateWithoutProjectInput = {
    id?: string;
    number: number;
    label: string;
    createdAt?: Date | string;
    apartments?: Prisma.ApartmentCreateNestedManyWithoutFloorInput;
};
export type FloorUncheckedCreateWithoutProjectInput = {
    id?: string;
    number: number;
    label: string;
    createdAt?: Date | string;
    apartments?: Prisma.ApartmentUncheckedCreateNestedManyWithoutFloorInput;
};
export type FloorCreateOrConnectWithoutProjectInput = {
    where: Prisma.FloorWhereUniqueInput;
    create: Prisma.XOR<Prisma.FloorCreateWithoutProjectInput, Prisma.FloorUncheckedCreateWithoutProjectInput>;
};
export type FloorCreateManyProjectInputEnvelope = {
    data: Prisma.FloorCreateManyProjectInput | Prisma.FloorCreateManyProjectInput[];
    skipDuplicates?: boolean;
};
export type FloorUpsertWithWhereUniqueWithoutProjectInput = {
    where: Prisma.FloorWhereUniqueInput;
    update: Prisma.XOR<Prisma.FloorUpdateWithoutProjectInput, Prisma.FloorUncheckedUpdateWithoutProjectInput>;
    create: Prisma.XOR<Prisma.FloorCreateWithoutProjectInput, Prisma.FloorUncheckedCreateWithoutProjectInput>;
};
export type FloorUpdateWithWhereUniqueWithoutProjectInput = {
    where: Prisma.FloorWhereUniqueInput;
    data: Prisma.XOR<Prisma.FloorUpdateWithoutProjectInput, Prisma.FloorUncheckedUpdateWithoutProjectInput>;
};
export type FloorUpdateManyWithWhereWithoutProjectInput = {
    where: Prisma.FloorScalarWhereInput;
    data: Prisma.XOR<Prisma.FloorUpdateManyMutationInput, Prisma.FloorUncheckedUpdateManyWithoutProjectInput>;
};
export type FloorScalarWhereInput = {
    AND?: Prisma.FloorScalarWhereInput | Prisma.FloorScalarWhereInput[];
    OR?: Prisma.FloorScalarWhereInput[];
    NOT?: Prisma.FloorScalarWhereInput | Prisma.FloorScalarWhereInput[];
    id?: Prisma.UuidFilter<"Floor"> | string;
    projectId?: Prisma.UuidFilter<"Floor"> | string;
    number?: Prisma.IntFilter<"Floor"> | number;
    label?: Prisma.StringFilter<"Floor"> | string;
    createdAt?: Prisma.DateTimeFilter<"Floor"> | Date | string;
};
export type FloorCreateWithoutApartmentsInput = {
    id?: string;
    number: number;
    label: string;
    createdAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutFloorsInput;
};
export type FloorUncheckedCreateWithoutApartmentsInput = {
    id?: string;
    projectId: string;
    number: number;
    label: string;
    createdAt?: Date | string;
};
export type FloorCreateOrConnectWithoutApartmentsInput = {
    where: Prisma.FloorWhereUniqueInput;
    create: Prisma.XOR<Prisma.FloorCreateWithoutApartmentsInput, Prisma.FloorUncheckedCreateWithoutApartmentsInput>;
};
export type FloorUpsertWithoutApartmentsInput = {
    update: Prisma.XOR<Prisma.FloorUpdateWithoutApartmentsInput, Prisma.FloorUncheckedUpdateWithoutApartmentsInput>;
    create: Prisma.XOR<Prisma.FloorCreateWithoutApartmentsInput, Prisma.FloorUncheckedCreateWithoutApartmentsInput>;
    where?: Prisma.FloorWhereInput;
};
export type FloorUpdateToOneWithWhereWithoutApartmentsInput = {
    where?: Prisma.FloorWhereInput;
    data: Prisma.XOR<Prisma.FloorUpdateWithoutApartmentsInput, Prisma.FloorUncheckedUpdateWithoutApartmentsInput>;
};
export type FloorUpdateWithoutApartmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutFloorsNestedInput;
};
export type FloorUncheckedUpdateWithoutApartmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FloorCreateManyProjectInput = {
    id?: string;
    number: number;
    label: string;
    createdAt?: Date | string;
};
export type FloorUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    apartments?: Prisma.ApartmentUpdateManyWithoutFloorNestedInput;
};
export type FloorUncheckedUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    apartments?: Prisma.ApartmentUncheckedUpdateManyWithoutFloorNestedInput;
};
export type FloorUncheckedUpdateManyWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FloorCountOutputType = {
    apartments: number;
};
export type FloorCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    apartments?: boolean | FloorCountOutputTypeCountApartmentsArgs;
};
export type FloorCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FloorCountOutputTypeSelect<ExtArgs> | null;
};
export type FloorCountOutputTypeCountApartmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApartmentWhereInput;
};
export type FloorSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    number?: boolean;
    label?: boolean;
    createdAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    apartments?: boolean | Prisma.Floor$apartmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.FloorCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["floor"]>;
export type FloorSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    number?: boolean;
    label?: boolean;
    createdAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["floor"]>;
export type FloorSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    number?: boolean;
    label?: boolean;
    createdAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["floor"]>;
export type FloorSelectScalar = {
    id?: boolean;
    projectId?: boolean;
    number?: boolean;
    label?: boolean;
    createdAt?: boolean;
};
export type FloorOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "projectId" | "number" | "label" | "createdAt", ExtArgs["result"]["floor"]>;
export type FloorInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    apartments?: boolean | Prisma.Floor$apartmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.FloorCountOutputTypeDefaultArgs<ExtArgs>;
};
export type FloorIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
};
export type FloorIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
};
export type $FloorPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Floor";
    objects: {
        project: Prisma.$ProjectPayload<ExtArgs>;
        apartments: Prisma.$ApartmentPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        projectId: string;
        number: number;
        label: string;
        createdAt: Date;
    }, ExtArgs["result"]["floor"]>;
    composites: {};
};
export type FloorGetPayload<S extends boolean | null | undefined | FloorDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FloorPayload, S>;
export type FloorCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FloorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FloorCountAggregateInputType | true;
};
export interface FloorDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Floor'];
        meta: {
            name: 'Floor';
        };
    };
    findUnique<T extends FloorFindUniqueArgs>(args: Prisma.SelectSubset<T, FloorFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FloorClient<runtime.Types.Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FloorFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FloorFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FloorClient<runtime.Types.Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FloorFindFirstArgs>(args?: Prisma.SelectSubset<T, FloorFindFirstArgs<ExtArgs>>): Prisma.Prisma__FloorClient<runtime.Types.Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FloorFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FloorFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FloorClient<runtime.Types.Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FloorFindManyArgs>(args?: Prisma.SelectSubset<T, FloorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FloorCreateArgs>(args: Prisma.SelectSubset<T, FloorCreateArgs<ExtArgs>>): Prisma.Prisma__FloorClient<runtime.Types.Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FloorCreateManyArgs>(args?: Prisma.SelectSubset<T, FloorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends FloorCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FloorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends FloorDeleteArgs>(args: Prisma.SelectSubset<T, FloorDeleteArgs<ExtArgs>>): Prisma.Prisma__FloorClient<runtime.Types.Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FloorUpdateArgs>(args: Prisma.SelectSubset<T, FloorUpdateArgs<ExtArgs>>): Prisma.Prisma__FloorClient<runtime.Types.Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FloorDeleteManyArgs>(args?: Prisma.SelectSubset<T, FloorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FloorUpdateManyArgs>(args: Prisma.SelectSubset<T, FloorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends FloorUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FloorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends FloorUpsertArgs>(args: Prisma.SelectSubset<T, FloorUpsertArgs<ExtArgs>>): Prisma.Prisma__FloorClient<runtime.Types.Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FloorCountArgs>(args?: Prisma.Subset<T, FloorCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FloorCountAggregateOutputType> : number>;
    aggregate<T extends FloorAggregateArgs>(args: Prisma.Subset<T, FloorAggregateArgs>): Prisma.PrismaPromise<GetFloorAggregateType<T>>;
    groupBy<T extends FloorGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FloorGroupByArgs['orderBy'];
    } : {
        orderBy?: FloorGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FloorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFloorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FloorFieldRefs;
}
export interface Prisma__FloorClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    project<T extends Prisma.ProjectDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProjectDefaultArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    apartments<T extends Prisma.Floor$apartmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Floor$apartmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FloorFieldRefs {
    readonly id: Prisma.FieldRef<"Floor", 'String'>;
    readonly projectId: Prisma.FieldRef<"Floor", 'String'>;
    readonly number: Prisma.FieldRef<"Floor", 'Int'>;
    readonly label: Prisma.FieldRef<"Floor", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Floor", 'DateTime'>;
}
export type FloorFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FloorSelect<ExtArgs> | null;
    omit?: Prisma.FloorOmit<ExtArgs> | null;
    include?: Prisma.FloorInclude<ExtArgs> | null;
    where: Prisma.FloorWhereUniqueInput;
};
export type FloorFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FloorSelect<ExtArgs> | null;
    omit?: Prisma.FloorOmit<ExtArgs> | null;
    include?: Prisma.FloorInclude<ExtArgs> | null;
    where: Prisma.FloorWhereUniqueInput;
};
export type FloorFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FloorSelect<ExtArgs> | null;
    omit?: Prisma.FloorOmit<ExtArgs> | null;
    include?: Prisma.FloorInclude<ExtArgs> | null;
    where?: Prisma.FloorWhereInput;
    orderBy?: Prisma.FloorOrderByWithRelationInput | Prisma.FloorOrderByWithRelationInput[];
    cursor?: Prisma.FloorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FloorScalarFieldEnum | Prisma.FloorScalarFieldEnum[];
};
export type FloorFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FloorSelect<ExtArgs> | null;
    omit?: Prisma.FloorOmit<ExtArgs> | null;
    include?: Prisma.FloorInclude<ExtArgs> | null;
    where?: Prisma.FloorWhereInput;
    orderBy?: Prisma.FloorOrderByWithRelationInput | Prisma.FloorOrderByWithRelationInput[];
    cursor?: Prisma.FloorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FloorScalarFieldEnum | Prisma.FloorScalarFieldEnum[];
};
export type FloorFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FloorSelect<ExtArgs> | null;
    omit?: Prisma.FloorOmit<ExtArgs> | null;
    include?: Prisma.FloorInclude<ExtArgs> | null;
    where?: Prisma.FloorWhereInput;
    orderBy?: Prisma.FloorOrderByWithRelationInput | Prisma.FloorOrderByWithRelationInput[];
    cursor?: Prisma.FloorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FloorScalarFieldEnum | Prisma.FloorScalarFieldEnum[];
};
export type FloorCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FloorSelect<ExtArgs> | null;
    omit?: Prisma.FloorOmit<ExtArgs> | null;
    include?: Prisma.FloorInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FloorCreateInput, Prisma.FloorUncheckedCreateInput>;
};
export type FloorCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FloorCreateManyInput | Prisma.FloorCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FloorCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FloorSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FloorOmit<ExtArgs> | null;
    data: Prisma.FloorCreateManyInput | Prisma.FloorCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.FloorIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type FloorUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FloorSelect<ExtArgs> | null;
    omit?: Prisma.FloorOmit<ExtArgs> | null;
    include?: Prisma.FloorInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FloorUpdateInput, Prisma.FloorUncheckedUpdateInput>;
    where: Prisma.FloorWhereUniqueInput;
};
export type FloorUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FloorUpdateManyMutationInput, Prisma.FloorUncheckedUpdateManyInput>;
    where?: Prisma.FloorWhereInput;
    limit?: number;
};
export type FloorUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FloorSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FloorOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FloorUpdateManyMutationInput, Prisma.FloorUncheckedUpdateManyInput>;
    where?: Prisma.FloorWhereInput;
    limit?: number;
    include?: Prisma.FloorIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type FloorUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FloorSelect<ExtArgs> | null;
    omit?: Prisma.FloorOmit<ExtArgs> | null;
    include?: Prisma.FloorInclude<ExtArgs> | null;
    where: Prisma.FloorWhereUniqueInput;
    create: Prisma.XOR<Prisma.FloorCreateInput, Prisma.FloorUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FloorUpdateInput, Prisma.FloorUncheckedUpdateInput>;
};
export type FloorDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FloorSelect<ExtArgs> | null;
    omit?: Prisma.FloorOmit<ExtArgs> | null;
    include?: Prisma.FloorInclude<ExtArgs> | null;
    where: Prisma.FloorWhereUniqueInput;
};
export type FloorDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FloorWhereInput;
    limit?: number;
};
export type Floor$apartmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FloorDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FloorSelect<ExtArgs> | null;
    omit?: Prisma.FloorOmit<ExtArgs> | null;
    include?: Prisma.FloorInclude<ExtArgs> | null;
};
