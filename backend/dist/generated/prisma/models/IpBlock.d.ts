import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type IpBlockModel = runtime.Types.Result.DefaultSelection<Prisma.$IpBlockPayload>;
export type AggregateIpBlock = {
    _count: IpBlockCountAggregateOutputType | null;
    _min: IpBlockMinAggregateOutputType | null;
    _max: IpBlockMaxAggregateOutputType | null;
};
export type IpBlockMinAggregateOutputType = {
    id: string | null;
    ip: string | null;
    reason: string | null;
    createdById: string | null;
    createdAt: Date | null;
};
export type IpBlockMaxAggregateOutputType = {
    id: string | null;
    ip: string | null;
    reason: string | null;
    createdById: string | null;
    createdAt: Date | null;
};
export type IpBlockCountAggregateOutputType = {
    id: number;
    ip: number;
    reason: number;
    createdById: number;
    createdAt: number;
    _all: number;
};
export type IpBlockMinAggregateInputType = {
    id?: true;
    ip?: true;
    reason?: true;
    createdById?: true;
    createdAt?: true;
};
export type IpBlockMaxAggregateInputType = {
    id?: true;
    ip?: true;
    reason?: true;
    createdById?: true;
    createdAt?: true;
};
export type IpBlockCountAggregateInputType = {
    id?: true;
    ip?: true;
    reason?: true;
    createdById?: true;
    createdAt?: true;
    _all?: true;
};
export type IpBlockAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IpBlockWhereInput;
    orderBy?: Prisma.IpBlockOrderByWithRelationInput | Prisma.IpBlockOrderByWithRelationInput[];
    cursor?: Prisma.IpBlockWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | IpBlockCountAggregateInputType;
    _min?: IpBlockMinAggregateInputType;
    _max?: IpBlockMaxAggregateInputType;
};
export type GetIpBlockAggregateType<T extends IpBlockAggregateArgs> = {
    [P in keyof T & keyof AggregateIpBlock]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateIpBlock[P]> : Prisma.GetScalarType<T[P], AggregateIpBlock[P]>;
};
export type IpBlockGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IpBlockWhereInput;
    orderBy?: Prisma.IpBlockOrderByWithAggregationInput | Prisma.IpBlockOrderByWithAggregationInput[];
    by: Prisma.IpBlockScalarFieldEnum[] | Prisma.IpBlockScalarFieldEnum;
    having?: Prisma.IpBlockScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: IpBlockCountAggregateInputType | true;
    _min?: IpBlockMinAggregateInputType;
    _max?: IpBlockMaxAggregateInputType;
};
export type IpBlockGroupByOutputType = {
    id: string;
    ip: string;
    reason: string | null;
    createdById: string | null;
    createdAt: Date;
    _count: IpBlockCountAggregateOutputType | null;
    _min: IpBlockMinAggregateOutputType | null;
    _max: IpBlockMaxAggregateOutputType | null;
};
export type GetIpBlockGroupByPayload<T extends IpBlockGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<IpBlockGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof IpBlockGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], IpBlockGroupByOutputType[P]> : Prisma.GetScalarType<T[P], IpBlockGroupByOutputType[P]>;
}>>;
export type IpBlockWhereInput = {
    AND?: Prisma.IpBlockWhereInput | Prisma.IpBlockWhereInput[];
    OR?: Prisma.IpBlockWhereInput[];
    NOT?: Prisma.IpBlockWhereInput | Prisma.IpBlockWhereInput[];
    id?: Prisma.StringFilter<"IpBlock"> | string;
    ip?: Prisma.StringFilter<"IpBlock"> | string;
    reason?: Prisma.StringNullableFilter<"IpBlock"> | string | null;
    createdById?: Prisma.StringNullableFilter<"IpBlock"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"IpBlock"> | Date | string;
    createdBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
};
export type IpBlockOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    ip?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdById?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    createdBy?: Prisma.UserOrderByWithRelationInput;
};
export type IpBlockWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    ip?: string;
    AND?: Prisma.IpBlockWhereInput | Prisma.IpBlockWhereInput[];
    OR?: Prisma.IpBlockWhereInput[];
    NOT?: Prisma.IpBlockWhereInput | Prisma.IpBlockWhereInput[];
    reason?: Prisma.StringNullableFilter<"IpBlock"> | string | null;
    createdById?: Prisma.StringNullableFilter<"IpBlock"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"IpBlock"> | Date | string;
    createdBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
}, "id" | "ip">;
export type IpBlockOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    ip?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdById?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.IpBlockCountOrderByAggregateInput;
    _max?: Prisma.IpBlockMaxOrderByAggregateInput;
    _min?: Prisma.IpBlockMinOrderByAggregateInput;
};
export type IpBlockScalarWhereWithAggregatesInput = {
    AND?: Prisma.IpBlockScalarWhereWithAggregatesInput | Prisma.IpBlockScalarWhereWithAggregatesInput[];
    OR?: Prisma.IpBlockScalarWhereWithAggregatesInput[];
    NOT?: Prisma.IpBlockScalarWhereWithAggregatesInput | Prisma.IpBlockScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"IpBlock"> | string;
    ip?: Prisma.StringWithAggregatesFilter<"IpBlock"> | string;
    reason?: Prisma.StringNullableWithAggregatesFilter<"IpBlock"> | string | null;
    createdById?: Prisma.StringNullableWithAggregatesFilter<"IpBlock"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"IpBlock"> | Date | string;
};
export type IpBlockCreateInput = {
    id?: string;
    ip: string;
    reason?: string | null;
    createdAt?: Date | string;
    createdBy?: Prisma.UserCreateNestedOneWithoutIpBlocksCreatedInput;
};
export type IpBlockUncheckedCreateInput = {
    id?: string;
    ip: string;
    reason?: string | null;
    createdById?: string | null;
    createdAt?: Date | string;
};
export type IpBlockUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ip?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.UserUpdateOneWithoutIpBlocksCreatedNestedInput;
};
export type IpBlockUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ip?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IpBlockCreateManyInput = {
    id?: string;
    ip: string;
    reason?: string | null;
    createdById?: string | null;
    createdAt?: Date | string;
};
export type IpBlockUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ip?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IpBlockUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ip?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IpBlockListRelationFilter = {
    every?: Prisma.IpBlockWhereInput;
    some?: Prisma.IpBlockWhereInput;
    none?: Prisma.IpBlockWhereInput;
};
export type IpBlockOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type IpBlockCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ip?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type IpBlockMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ip?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type IpBlockMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ip?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type IpBlockCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.IpBlockCreateWithoutCreatedByInput, Prisma.IpBlockUncheckedCreateWithoutCreatedByInput> | Prisma.IpBlockCreateWithoutCreatedByInput[] | Prisma.IpBlockUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.IpBlockCreateOrConnectWithoutCreatedByInput | Prisma.IpBlockCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.IpBlockCreateManyCreatedByInputEnvelope;
    connect?: Prisma.IpBlockWhereUniqueInput | Prisma.IpBlockWhereUniqueInput[];
};
export type IpBlockUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.IpBlockCreateWithoutCreatedByInput, Prisma.IpBlockUncheckedCreateWithoutCreatedByInput> | Prisma.IpBlockCreateWithoutCreatedByInput[] | Prisma.IpBlockUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.IpBlockCreateOrConnectWithoutCreatedByInput | Prisma.IpBlockCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.IpBlockCreateManyCreatedByInputEnvelope;
    connect?: Prisma.IpBlockWhereUniqueInput | Prisma.IpBlockWhereUniqueInput[];
};
export type IpBlockUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.IpBlockCreateWithoutCreatedByInput, Prisma.IpBlockUncheckedCreateWithoutCreatedByInput> | Prisma.IpBlockCreateWithoutCreatedByInput[] | Prisma.IpBlockUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.IpBlockCreateOrConnectWithoutCreatedByInput | Prisma.IpBlockCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.IpBlockUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.IpBlockUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.IpBlockCreateManyCreatedByInputEnvelope;
    set?: Prisma.IpBlockWhereUniqueInput | Prisma.IpBlockWhereUniqueInput[];
    disconnect?: Prisma.IpBlockWhereUniqueInput | Prisma.IpBlockWhereUniqueInput[];
    delete?: Prisma.IpBlockWhereUniqueInput | Prisma.IpBlockWhereUniqueInput[];
    connect?: Prisma.IpBlockWhereUniqueInput | Prisma.IpBlockWhereUniqueInput[];
    update?: Prisma.IpBlockUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.IpBlockUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.IpBlockUpdateManyWithWhereWithoutCreatedByInput | Prisma.IpBlockUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.IpBlockScalarWhereInput | Prisma.IpBlockScalarWhereInput[];
};
export type IpBlockUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.IpBlockCreateWithoutCreatedByInput, Prisma.IpBlockUncheckedCreateWithoutCreatedByInput> | Prisma.IpBlockCreateWithoutCreatedByInput[] | Prisma.IpBlockUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.IpBlockCreateOrConnectWithoutCreatedByInput | Prisma.IpBlockCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.IpBlockUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.IpBlockUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.IpBlockCreateManyCreatedByInputEnvelope;
    set?: Prisma.IpBlockWhereUniqueInput | Prisma.IpBlockWhereUniqueInput[];
    disconnect?: Prisma.IpBlockWhereUniqueInput | Prisma.IpBlockWhereUniqueInput[];
    delete?: Prisma.IpBlockWhereUniqueInput | Prisma.IpBlockWhereUniqueInput[];
    connect?: Prisma.IpBlockWhereUniqueInput | Prisma.IpBlockWhereUniqueInput[];
    update?: Prisma.IpBlockUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.IpBlockUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.IpBlockUpdateManyWithWhereWithoutCreatedByInput | Prisma.IpBlockUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.IpBlockScalarWhereInput | Prisma.IpBlockScalarWhereInput[];
};
export type IpBlockCreateWithoutCreatedByInput = {
    id?: string;
    ip: string;
    reason?: string | null;
    createdAt?: Date | string;
};
export type IpBlockUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    ip: string;
    reason?: string | null;
    createdAt?: Date | string;
};
export type IpBlockCreateOrConnectWithoutCreatedByInput = {
    where: Prisma.IpBlockWhereUniqueInput;
    create: Prisma.XOR<Prisma.IpBlockCreateWithoutCreatedByInput, Prisma.IpBlockUncheckedCreateWithoutCreatedByInput>;
};
export type IpBlockCreateManyCreatedByInputEnvelope = {
    data: Prisma.IpBlockCreateManyCreatedByInput | Prisma.IpBlockCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
};
export type IpBlockUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.IpBlockWhereUniqueInput;
    update: Prisma.XOR<Prisma.IpBlockUpdateWithoutCreatedByInput, Prisma.IpBlockUncheckedUpdateWithoutCreatedByInput>;
    create: Prisma.XOR<Prisma.IpBlockCreateWithoutCreatedByInput, Prisma.IpBlockUncheckedCreateWithoutCreatedByInput>;
};
export type IpBlockUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.IpBlockWhereUniqueInput;
    data: Prisma.XOR<Prisma.IpBlockUpdateWithoutCreatedByInput, Prisma.IpBlockUncheckedUpdateWithoutCreatedByInput>;
};
export type IpBlockUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prisma.IpBlockScalarWhereInput;
    data: Prisma.XOR<Prisma.IpBlockUpdateManyMutationInput, Prisma.IpBlockUncheckedUpdateManyWithoutCreatedByInput>;
};
export type IpBlockScalarWhereInput = {
    AND?: Prisma.IpBlockScalarWhereInput | Prisma.IpBlockScalarWhereInput[];
    OR?: Prisma.IpBlockScalarWhereInput[];
    NOT?: Prisma.IpBlockScalarWhereInput | Prisma.IpBlockScalarWhereInput[];
    id?: Prisma.StringFilter<"IpBlock"> | string;
    ip?: Prisma.StringFilter<"IpBlock"> | string;
    reason?: Prisma.StringNullableFilter<"IpBlock"> | string | null;
    createdById?: Prisma.StringNullableFilter<"IpBlock"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"IpBlock"> | Date | string;
};
export type IpBlockCreateManyCreatedByInput = {
    id?: string;
    ip: string;
    reason?: string | null;
    createdAt?: Date | string;
};
export type IpBlockUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ip?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IpBlockUncheckedUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ip?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IpBlockUncheckedUpdateManyWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ip?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IpBlockSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ip?: boolean;
    reason?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    createdBy?: boolean | Prisma.IpBlock$createdByArgs<ExtArgs>;
}, ExtArgs["result"]["ipBlock"]>;
export type IpBlockSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ip?: boolean;
    reason?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    createdBy?: boolean | Prisma.IpBlock$createdByArgs<ExtArgs>;
}, ExtArgs["result"]["ipBlock"]>;
export type IpBlockSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ip?: boolean;
    reason?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    createdBy?: boolean | Prisma.IpBlock$createdByArgs<ExtArgs>;
}, ExtArgs["result"]["ipBlock"]>;
export type IpBlockSelectScalar = {
    id?: boolean;
    ip?: boolean;
    reason?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
};
export type IpBlockOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "ip" | "reason" | "createdById" | "createdAt", ExtArgs["result"]["ipBlock"]>;
export type IpBlockInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.IpBlock$createdByArgs<ExtArgs>;
};
export type IpBlockIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.IpBlock$createdByArgs<ExtArgs>;
};
export type IpBlockIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.IpBlock$createdByArgs<ExtArgs>;
};
export type $IpBlockPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "IpBlock";
    objects: {
        createdBy: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        ip: string;
        reason: string | null;
        createdById: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["ipBlock"]>;
    composites: {};
};
export type IpBlockGetPayload<S extends boolean | null | undefined | IpBlockDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$IpBlockPayload, S>;
export type IpBlockCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<IpBlockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: IpBlockCountAggregateInputType | true;
};
export interface IpBlockDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['IpBlock'];
        meta: {
            name: 'IpBlock';
        };
    };
    findUnique<T extends IpBlockFindUniqueArgs>(args: Prisma.SelectSubset<T, IpBlockFindUniqueArgs<ExtArgs>>): Prisma.Prisma__IpBlockClient<runtime.Types.Result.GetResult<Prisma.$IpBlockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends IpBlockFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, IpBlockFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__IpBlockClient<runtime.Types.Result.GetResult<Prisma.$IpBlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends IpBlockFindFirstArgs>(args?: Prisma.SelectSubset<T, IpBlockFindFirstArgs<ExtArgs>>): Prisma.Prisma__IpBlockClient<runtime.Types.Result.GetResult<Prisma.$IpBlockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends IpBlockFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, IpBlockFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__IpBlockClient<runtime.Types.Result.GetResult<Prisma.$IpBlockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends IpBlockFindManyArgs>(args?: Prisma.SelectSubset<T, IpBlockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IpBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends IpBlockCreateArgs>(args: Prisma.SelectSubset<T, IpBlockCreateArgs<ExtArgs>>): Prisma.Prisma__IpBlockClient<runtime.Types.Result.GetResult<Prisma.$IpBlockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends IpBlockCreateManyArgs>(args?: Prisma.SelectSubset<T, IpBlockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends IpBlockCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, IpBlockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IpBlockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends IpBlockDeleteArgs>(args: Prisma.SelectSubset<T, IpBlockDeleteArgs<ExtArgs>>): Prisma.Prisma__IpBlockClient<runtime.Types.Result.GetResult<Prisma.$IpBlockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends IpBlockUpdateArgs>(args: Prisma.SelectSubset<T, IpBlockUpdateArgs<ExtArgs>>): Prisma.Prisma__IpBlockClient<runtime.Types.Result.GetResult<Prisma.$IpBlockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends IpBlockDeleteManyArgs>(args?: Prisma.SelectSubset<T, IpBlockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends IpBlockUpdateManyArgs>(args: Prisma.SelectSubset<T, IpBlockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends IpBlockUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, IpBlockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IpBlockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends IpBlockUpsertArgs>(args: Prisma.SelectSubset<T, IpBlockUpsertArgs<ExtArgs>>): Prisma.Prisma__IpBlockClient<runtime.Types.Result.GetResult<Prisma.$IpBlockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends IpBlockCountArgs>(args?: Prisma.Subset<T, IpBlockCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], IpBlockCountAggregateOutputType> : number>;
    aggregate<T extends IpBlockAggregateArgs>(args: Prisma.Subset<T, IpBlockAggregateArgs>): Prisma.PrismaPromise<GetIpBlockAggregateType<T>>;
    groupBy<T extends IpBlockGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: IpBlockGroupByArgs['orderBy'];
    } : {
        orderBy?: IpBlockGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, IpBlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIpBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: IpBlockFieldRefs;
}
export interface Prisma__IpBlockClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    createdBy<T extends Prisma.IpBlock$createdByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.IpBlock$createdByArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface IpBlockFieldRefs {
    readonly id: Prisma.FieldRef<"IpBlock", 'String'>;
    readonly ip: Prisma.FieldRef<"IpBlock", 'String'>;
    readonly reason: Prisma.FieldRef<"IpBlock", 'String'>;
    readonly createdById: Prisma.FieldRef<"IpBlock", 'String'>;
    readonly createdAt: Prisma.FieldRef<"IpBlock", 'DateTime'>;
}
export type IpBlockFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IpBlockSelect<ExtArgs> | null;
    omit?: Prisma.IpBlockOmit<ExtArgs> | null;
    include?: Prisma.IpBlockInclude<ExtArgs> | null;
    where: Prisma.IpBlockWhereUniqueInput;
};
export type IpBlockFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IpBlockSelect<ExtArgs> | null;
    omit?: Prisma.IpBlockOmit<ExtArgs> | null;
    include?: Prisma.IpBlockInclude<ExtArgs> | null;
    where: Prisma.IpBlockWhereUniqueInput;
};
export type IpBlockFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IpBlockSelect<ExtArgs> | null;
    omit?: Prisma.IpBlockOmit<ExtArgs> | null;
    include?: Prisma.IpBlockInclude<ExtArgs> | null;
    where?: Prisma.IpBlockWhereInput;
    orderBy?: Prisma.IpBlockOrderByWithRelationInput | Prisma.IpBlockOrderByWithRelationInput[];
    cursor?: Prisma.IpBlockWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IpBlockScalarFieldEnum | Prisma.IpBlockScalarFieldEnum[];
};
export type IpBlockFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IpBlockSelect<ExtArgs> | null;
    omit?: Prisma.IpBlockOmit<ExtArgs> | null;
    include?: Prisma.IpBlockInclude<ExtArgs> | null;
    where?: Prisma.IpBlockWhereInput;
    orderBy?: Prisma.IpBlockOrderByWithRelationInput | Prisma.IpBlockOrderByWithRelationInput[];
    cursor?: Prisma.IpBlockWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IpBlockScalarFieldEnum | Prisma.IpBlockScalarFieldEnum[];
};
export type IpBlockFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IpBlockSelect<ExtArgs> | null;
    omit?: Prisma.IpBlockOmit<ExtArgs> | null;
    include?: Prisma.IpBlockInclude<ExtArgs> | null;
    where?: Prisma.IpBlockWhereInput;
    orderBy?: Prisma.IpBlockOrderByWithRelationInput | Prisma.IpBlockOrderByWithRelationInput[];
    cursor?: Prisma.IpBlockWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IpBlockScalarFieldEnum | Prisma.IpBlockScalarFieldEnum[];
};
export type IpBlockCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IpBlockSelect<ExtArgs> | null;
    omit?: Prisma.IpBlockOmit<ExtArgs> | null;
    include?: Prisma.IpBlockInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IpBlockCreateInput, Prisma.IpBlockUncheckedCreateInput>;
};
export type IpBlockCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.IpBlockCreateManyInput | Prisma.IpBlockCreateManyInput[];
    skipDuplicates?: boolean;
};
export type IpBlockCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IpBlockSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.IpBlockOmit<ExtArgs> | null;
    data: Prisma.IpBlockCreateManyInput | Prisma.IpBlockCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.IpBlockIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type IpBlockUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IpBlockSelect<ExtArgs> | null;
    omit?: Prisma.IpBlockOmit<ExtArgs> | null;
    include?: Prisma.IpBlockInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IpBlockUpdateInput, Prisma.IpBlockUncheckedUpdateInput>;
    where: Prisma.IpBlockWhereUniqueInput;
};
export type IpBlockUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.IpBlockUpdateManyMutationInput, Prisma.IpBlockUncheckedUpdateManyInput>;
    where?: Prisma.IpBlockWhereInput;
    limit?: number;
};
export type IpBlockUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IpBlockSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.IpBlockOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IpBlockUpdateManyMutationInput, Prisma.IpBlockUncheckedUpdateManyInput>;
    where?: Prisma.IpBlockWhereInput;
    limit?: number;
    include?: Prisma.IpBlockIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type IpBlockUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IpBlockSelect<ExtArgs> | null;
    omit?: Prisma.IpBlockOmit<ExtArgs> | null;
    include?: Prisma.IpBlockInclude<ExtArgs> | null;
    where: Prisma.IpBlockWhereUniqueInput;
    create: Prisma.XOR<Prisma.IpBlockCreateInput, Prisma.IpBlockUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.IpBlockUpdateInput, Prisma.IpBlockUncheckedUpdateInput>;
};
export type IpBlockDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IpBlockSelect<ExtArgs> | null;
    omit?: Prisma.IpBlockOmit<ExtArgs> | null;
    include?: Prisma.IpBlockInclude<ExtArgs> | null;
    where: Prisma.IpBlockWhereUniqueInput;
};
export type IpBlockDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IpBlockWhereInput;
    limit?: number;
};
export type IpBlock$createdByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type IpBlockDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IpBlockSelect<ExtArgs> | null;
    omit?: Prisma.IpBlockOmit<ExtArgs> | null;
    include?: Prisma.IpBlockInclude<ExtArgs> | null;
};
