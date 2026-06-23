import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type ScriptClickModel = runtime.Types.Result.DefaultSelection<Prisma.$ScriptClickPayload>;
export type AggregateScriptClick = {
    _count: ScriptClickCountAggregateOutputType | null;
    _min: ScriptClickMinAggregateOutputType | null;
    _max: ScriptClickMaxAggregateOutputType | null;
};
export type ScriptClickMinAggregateOutputType = {
    id: string | null;
    scriptId: string | null;
    userId: string | null;
    ipHash: string | null;
    createdAt: Date | null;
};
export type ScriptClickMaxAggregateOutputType = {
    id: string | null;
    scriptId: string | null;
    userId: string | null;
    ipHash: string | null;
    createdAt: Date | null;
};
export type ScriptClickCountAggregateOutputType = {
    id: number;
    scriptId: number;
    userId: number;
    ipHash: number;
    createdAt: number;
    _all: number;
};
export type ScriptClickMinAggregateInputType = {
    id?: true;
    scriptId?: true;
    userId?: true;
    ipHash?: true;
    createdAt?: true;
};
export type ScriptClickMaxAggregateInputType = {
    id?: true;
    scriptId?: true;
    userId?: true;
    ipHash?: true;
    createdAt?: true;
};
export type ScriptClickCountAggregateInputType = {
    id?: true;
    scriptId?: true;
    userId?: true;
    ipHash?: true;
    createdAt?: true;
    _all?: true;
};
export type ScriptClickAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScriptClickWhereInput;
    orderBy?: Prisma.ScriptClickOrderByWithRelationInput | Prisma.ScriptClickOrderByWithRelationInput[];
    cursor?: Prisma.ScriptClickWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ScriptClickCountAggregateInputType;
    _min?: ScriptClickMinAggregateInputType;
    _max?: ScriptClickMaxAggregateInputType;
};
export type GetScriptClickAggregateType<T extends ScriptClickAggregateArgs> = {
    [P in keyof T & keyof AggregateScriptClick]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateScriptClick[P]> : Prisma.GetScalarType<T[P], AggregateScriptClick[P]>;
};
export type ScriptClickGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScriptClickWhereInput;
    orderBy?: Prisma.ScriptClickOrderByWithAggregationInput | Prisma.ScriptClickOrderByWithAggregationInput[];
    by: Prisma.ScriptClickScalarFieldEnum[] | Prisma.ScriptClickScalarFieldEnum;
    having?: Prisma.ScriptClickScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ScriptClickCountAggregateInputType | true;
    _min?: ScriptClickMinAggregateInputType;
    _max?: ScriptClickMaxAggregateInputType;
};
export type ScriptClickGroupByOutputType = {
    id: string;
    scriptId: string;
    userId: string | null;
    ipHash: string;
    createdAt: Date;
    _count: ScriptClickCountAggregateOutputType | null;
    _min: ScriptClickMinAggregateOutputType | null;
    _max: ScriptClickMaxAggregateOutputType | null;
};
export type GetScriptClickGroupByPayload<T extends ScriptClickGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ScriptClickGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ScriptClickGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ScriptClickGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ScriptClickGroupByOutputType[P]>;
}>>;
export type ScriptClickWhereInput = {
    AND?: Prisma.ScriptClickWhereInput | Prisma.ScriptClickWhereInput[];
    OR?: Prisma.ScriptClickWhereInput[];
    NOT?: Prisma.ScriptClickWhereInput | Prisma.ScriptClickWhereInput[];
    id?: Prisma.StringFilter<"ScriptClick"> | string;
    scriptId?: Prisma.StringFilter<"ScriptClick"> | string;
    userId?: Prisma.StringNullableFilter<"ScriptClick"> | string | null;
    ipHash?: Prisma.StringFilter<"ScriptClick"> | string;
    createdAt?: Prisma.DateTimeFilter<"ScriptClick"> | Date | string;
    script?: Prisma.XOR<Prisma.ScriptScalarRelationFilter, Prisma.ScriptWhereInput>;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
};
export type ScriptClickOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    scriptId?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    ipHash?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    script?: Prisma.ScriptOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type ScriptClickWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ScriptClickWhereInput | Prisma.ScriptClickWhereInput[];
    OR?: Prisma.ScriptClickWhereInput[];
    NOT?: Prisma.ScriptClickWhereInput | Prisma.ScriptClickWhereInput[];
    scriptId?: Prisma.StringFilter<"ScriptClick"> | string;
    userId?: Prisma.StringNullableFilter<"ScriptClick"> | string | null;
    ipHash?: Prisma.StringFilter<"ScriptClick"> | string;
    createdAt?: Prisma.DateTimeFilter<"ScriptClick"> | Date | string;
    script?: Prisma.XOR<Prisma.ScriptScalarRelationFilter, Prisma.ScriptWhereInput>;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
}, "id">;
export type ScriptClickOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    scriptId?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    ipHash?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ScriptClickCountOrderByAggregateInput;
    _max?: Prisma.ScriptClickMaxOrderByAggregateInput;
    _min?: Prisma.ScriptClickMinOrderByAggregateInput;
};
export type ScriptClickScalarWhereWithAggregatesInput = {
    AND?: Prisma.ScriptClickScalarWhereWithAggregatesInput | Prisma.ScriptClickScalarWhereWithAggregatesInput[];
    OR?: Prisma.ScriptClickScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ScriptClickScalarWhereWithAggregatesInput | Prisma.ScriptClickScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ScriptClick"> | string;
    scriptId?: Prisma.StringWithAggregatesFilter<"ScriptClick"> | string;
    userId?: Prisma.StringNullableWithAggregatesFilter<"ScriptClick"> | string | null;
    ipHash?: Prisma.StringWithAggregatesFilter<"ScriptClick"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ScriptClick"> | Date | string;
};
export type ScriptClickCreateInput = {
    id?: string;
    ipHash: string;
    createdAt?: Date | string;
    script: Prisma.ScriptCreateNestedOneWithoutClicksInput;
    user?: Prisma.UserCreateNestedOneWithoutScriptClicksInput;
};
export type ScriptClickUncheckedCreateInput = {
    id?: string;
    scriptId: string;
    userId?: string | null;
    ipHash: string;
    createdAt?: Date | string;
};
export type ScriptClickUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ipHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    script?: Prisma.ScriptUpdateOneRequiredWithoutClicksNestedInput;
    user?: Prisma.UserUpdateOneWithoutScriptClicksNestedInput;
};
export type ScriptClickUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scriptId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ipHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScriptClickCreateManyInput = {
    id?: string;
    scriptId: string;
    userId?: string | null;
    ipHash: string;
    createdAt?: Date | string;
};
export type ScriptClickUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ipHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScriptClickUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scriptId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ipHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScriptClickListRelationFilter = {
    every?: Prisma.ScriptClickWhereInput;
    some?: Prisma.ScriptClickWhereInput;
    none?: Prisma.ScriptClickWhereInput;
};
export type ScriptClickOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ScriptClickCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    scriptId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    ipHash?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ScriptClickMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    scriptId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    ipHash?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ScriptClickMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    scriptId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    ipHash?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ScriptClickCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ScriptClickCreateWithoutUserInput, Prisma.ScriptClickUncheckedCreateWithoutUserInput> | Prisma.ScriptClickCreateWithoutUserInput[] | Prisma.ScriptClickUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ScriptClickCreateOrConnectWithoutUserInput | Prisma.ScriptClickCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ScriptClickCreateManyUserInputEnvelope;
    connect?: Prisma.ScriptClickWhereUniqueInput | Prisma.ScriptClickWhereUniqueInput[];
};
export type ScriptClickUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ScriptClickCreateWithoutUserInput, Prisma.ScriptClickUncheckedCreateWithoutUserInput> | Prisma.ScriptClickCreateWithoutUserInput[] | Prisma.ScriptClickUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ScriptClickCreateOrConnectWithoutUserInput | Prisma.ScriptClickCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ScriptClickCreateManyUserInputEnvelope;
    connect?: Prisma.ScriptClickWhereUniqueInput | Prisma.ScriptClickWhereUniqueInput[];
};
export type ScriptClickUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ScriptClickCreateWithoutUserInput, Prisma.ScriptClickUncheckedCreateWithoutUserInput> | Prisma.ScriptClickCreateWithoutUserInput[] | Prisma.ScriptClickUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ScriptClickCreateOrConnectWithoutUserInput | Prisma.ScriptClickCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ScriptClickUpsertWithWhereUniqueWithoutUserInput | Prisma.ScriptClickUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ScriptClickCreateManyUserInputEnvelope;
    set?: Prisma.ScriptClickWhereUniqueInput | Prisma.ScriptClickWhereUniqueInput[];
    disconnect?: Prisma.ScriptClickWhereUniqueInput | Prisma.ScriptClickWhereUniqueInput[];
    delete?: Prisma.ScriptClickWhereUniqueInput | Prisma.ScriptClickWhereUniqueInput[];
    connect?: Prisma.ScriptClickWhereUniqueInput | Prisma.ScriptClickWhereUniqueInput[];
    update?: Prisma.ScriptClickUpdateWithWhereUniqueWithoutUserInput | Prisma.ScriptClickUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ScriptClickUpdateManyWithWhereWithoutUserInput | Prisma.ScriptClickUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ScriptClickScalarWhereInput | Prisma.ScriptClickScalarWhereInput[];
};
export type ScriptClickUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ScriptClickCreateWithoutUserInput, Prisma.ScriptClickUncheckedCreateWithoutUserInput> | Prisma.ScriptClickCreateWithoutUserInput[] | Prisma.ScriptClickUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ScriptClickCreateOrConnectWithoutUserInput | Prisma.ScriptClickCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ScriptClickUpsertWithWhereUniqueWithoutUserInput | Prisma.ScriptClickUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ScriptClickCreateManyUserInputEnvelope;
    set?: Prisma.ScriptClickWhereUniqueInput | Prisma.ScriptClickWhereUniqueInput[];
    disconnect?: Prisma.ScriptClickWhereUniqueInput | Prisma.ScriptClickWhereUniqueInput[];
    delete?: Prisma.ScriptClickWhereUniqueInput | Prisma.ScriptClickWhereUniqueInput[];
    connect?: Prisma.ScriptClickWhereUniqueInput | Prisma.ScriptClickWhereUniqueInput[];
    update?: Prisma.ScriptClickUpdateWithWhereUniqueWithoutUserInput | Prisma.ScriptClickUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ScriptClickUpdateManyWithWhereWithoutUserInput | Prisma.ScriptClickUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ScriptClickScalarWhereInput | Prisma.ScriptClickScalarWhereInput[];
};
export type ScriptClickCreateNestedManyWithoutScriptInput = {
    create?: Prisma.XOR<Prisma.ScriptClickCreateWithoutScriptInput, Prisma.ScriptClickUncheckedCreateWithoutScriptInput> | Prisma.ScriptClickCreateWithoutScriptInput[] | Prisma.ScriptClickUncheckedCreateWithoutScriptInput[];
    connectOrCreate?: Prisma.ScriptClickCreateOrConnectWithoutScriptInput | Prisma.ScriptClickCreateOrConnectWithoutScriptInput[];
    createMany?: Prisma.ScriptClickCreateManyScriptInputEnvelope;
    connect?: Prisma.ScriptClickWhereUniqueInput | Prisma.ScriptClickWhereUniqueInput[];
};
export type ScriptClickUncheckedCreateNestedManyWithoutScriptInput = {
    create?: Prisma.XOR<Prisma.ScriptClickCreateWithoutScriptInput, Prisma.ScriptClickUncheckedCreateWithoutScriptInput> | Prisma.ScriptClickCreateWithoutScriptInput[] | Prisma.ScriptClickUncheckedCreateWithoutScriptInput[];
    connectOrCreate?: Prisma.ScriptClickCreateOrConnectWithoutScriptInput | Prisma.ScriptClickCreateOrConnectWithoutScriptInput[];
    createMany?: Prisma.ScriptClickCreateManyScriptInputEnvelope;
    connect?: Prisma.ScriptClickWhereUniqueInput | Prisma.ScriptClickWhereUniqueInput[];
};
export type ScriptClickUpdateManyWithoutScriptNestedInput = {
    create?: Prisma.XOR<Prisma.ScriptClickCreateWithoutScriptInput, Prisma.ScriptClickUncheckedCreateWithoutScriptInput> | Prisma.ScriptClickCreateWithoutScriptInput[] | Prisma.ScriptClickUncheckedCreateWithoutScriptInput[];
    connectOrCreate?: Prisma.ScriptClickCreateOrConnectWithoutScriptInput | Prisma.ScriptClickCreateOrConnectWithoutScriptInput[];
    upsert?: Prisma.ScriptClickUpsertWithWhereUniqueWithoutScriptInput | Prisma.ScriptClickUpsertWithWhereUniqueWithoutScriptInput[];
    createMany?: Prisma.ScriptClickCreateManyScriptInputEnvelope;
    set?: Prisma.ScriptClickWhereUniqueInput | Prisma.ScriptClickWhereUniqueInput[];
    disconnect?: Prisma.ScriptClickWhereUniqueInput | Prisma.ScriptClickWhereUniqueInput[];
    delete?: Prisma.ScriptClickWhereUniqueInput | Prisma.ScriptClickWhereUniqueInput[];
    connect?: Prisma.ScriptClickWhereUniqueInput | Prisma.ScriptClickWhereUniqueInput[];
    update?: Prisma.ScriptClickUpdateWithWhereUniqueWithoutScriptInput | Prisma.ScriptClickUpdateWithWhereUniqueWithoutScriptInput[];
    updateMany?: Prisma.ScriptClickUpdateManyWithWhereWithoutScriptInput | Prisma.ScriptClickUpdateManyWithWhereWithoutScriptInput[];
    deleteMany?: Prisma.ScriptClickScalarWhereInput | Prisma.ScriptClickScalarWhereInput[];
};
export type ScriptClickUncheckedUpdateManyWithoutScriptNestedInput = {
    create?: Prisma.XOR<Prisma.ScriptClickCreateWithoutScriptInput, Prisma.ScriptClickUncheckedCreateWithoutScriptInput> | Prisma.ScriptClickCreateWithoutScriptInput[] | Prisma.ScriptClickUncheckedCreateWithoutScriptInput[];
    connectOrCreate?: Prisma.ScriptClickCreateOrConnectWithoutScriptInput | Prisma.ScriptClickCreateOrConnectWithoutScriptInput[];
    upsert?: Prisma.ScriptClickUpsertWithWhereUniqueWithoutScriptInput | Prisma.ScriptClickUpsertWithWhereUniqueWithoutScriptInput[];
    createMany?: Prisma.ScriptClickCreateManyScriptInputEnvelope;
    set?: Prisma.ScriptClickWhereUniqueInput | Prisma.ScriptClickWhereUniqueInput[];
    disconnect?: Prisma.ScriptClickWhereUniqueInput | Prisma.ScriptClickWhereUniqueInput[];
    delete?: Prisma.ScriptClickWhereUniqueInput | Prisma.ScriptClickWhereUniqueInput[];
    connect?: Prisma.ScriptClickWhereUniqueInput | Prisma.ScriptClickWhereUniqueInput[];
    update?: Prisma.ScriptClickUpdateWithWhereUniqueWithoutScriptInput | Prisma.ScriptClickUpdateWithWhereUniqueWithoutScriptInput[];
    updateMany?: Prisma.ScriptClickUpdateManyWithWhereWithoutScriptInput | Prisma.ScriptClickUpdateManyWithWhereWithoutScriptInput[];
    deleteMany?: Prisma.ScriptClickScalarWhereInput | Prisma.ScriptClickScalarWhereInput[];
};
export type ScriptClickCreateWithoutUserInput = {
    id?: string;
    ipHash: string;
    createdAt?: Date | string;
    script: Prisma.ScriptCreateNestedOneWithoutClicksInput;
};
export type ScriptClickUncheckedCreateWithoutUserInput = {
    id?: string;
    scriptId: string;
    ipHash: string;
    createdAt?: Date | string;
};
export type ScriptClickCreateOrConnectWithoutUserInput = {
    where: Prisma.ScriptClickWhereUniqueInput;
    create: Prisma.XOR<Prisma.ScriptClickCreateWithoutUserInput, Prisma.ScriptClickUncheckedCreateWithoutUserInput>;
};
export type ScriptClickCreateManyUserInputEnvelope = {
    data: Prisma.ScriptClickCreateManyUserInput | Prisma.ScriptClickCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type ScriptClickUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.ScriptClickWhereUniqueInput;
    update: Prisma.XOR<Prisma.ScriptClickUpdateWithoutUserInput, Prisma.ScriptClickUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ScriptClickCreateWithoutUserInput, Prisma.ScriptClickUncheckedCreateWithoutUserInput>;
};
export type ScriptClickUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.ScriptClickWhereUniqueInput;
    data: Prisma.XOR<Prisma.ScriptClickUpdateWithoutUserInput, Prisma.ScriptClickUncheckedUpdateWithoutUserInput>;
};
export type ScriptClickUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.ScriptClickScalarWhereInput;
    data: Prisma.XOR<Prisma.ScriptClickUpdateManyMutationInput, Prisma.ScriptClickUncheckedUpdateManyWithoutUserInput>;
};
export type ScriptClickScalarWhereInput = {
    AND?: Prisma.ScriptClickScalarWhereInput | Prisma.ScriptClickScalarWhereInput[];
    OR?: Prisma.ScriptClickScalarWhereInput[];
    NOT?: Prisma.ScriptClickScalarWhereInput | Prisma.ScriptClickScalarWhereInput[];
    id?: Prisma.StringFilter<"ScriptClick"> | string;
    scriptId?: Prisma.StringFilter<"ScriptClick"> | string;
    userId?: Prisma.StringNullableFilter<"ScriptClick"> | string | null;
    ipHash?: Prisma.StringFilter<"ScriptClick"> | string;
    createdAt?: Prisma.DateTimeFilter<"ScriptClick"> | Date | string;
};
export type ScriptClickCreateWithoutScriptInput = {
    id?: string;
    ipHash: string;
    createdAt?: Date | string;
    user?: Prisma.UserCreateNestedOneWithoutScriptClicksInput;
};
export type ScriptClickUncheckedCreateWithoutScriptInput = {
    id?: string;
    userId?: string | null;
    ipHash: string;
    createdAt?: Date | string;
};
export type ScriptClickCreateOrConnectWithoutScriptInput = {
    where: Prisma.ScriptClickWhereUniqueInput;
    create: Prisma.XOR<Prisma.ScriptClickCreateWithoutScriptInput, Prisma.ScriptClickUncheckedCreateWithoutScriptInput>;
};
export type ScriptClickCreateManyScriptInputEnvelope = {
    data: Prisma.ScriptClickCreateManyScriptInput | Prisma.ScriptClickCreateManyScriptInput[];
    skipDuplicates?: boolean;
};
export type ScriptClickUpsertWithWhereUniqueWithoutScriptInput = {
    where: Prisma.ScriptClickWhereUniqueInput;
    update: Prisma.XOR<Prisma.ScriptClickUpdateWithoutScriptInput, Prisma.ScriptClickUncheckedUpdateWithoutScriptInput>;
    create: Prisma.XOR<Prisma.ScriptClickCreateWithoutScriptInput, Prisma.ScriptClickUncheckedCreateWithoutScriptInput>;
};
export type ScriptClickUpdateWithWhereUniqueWithoutScriptInput = {
    where: Prisma.ScriptClickWhereUniqueInput;
    data: Prisma.XOR<Prisma.ScriptClickUpdateWithoutScriptInput, Prisma.ScriptClickUncheckedUpdateWithoutScriptInput>;
};
export type ScriptClickUpdateManyWithWhereWithoutScriptInput = {
    where: Prisma.ScriptClickScalarWhereInput;
    data: Prisma.XOR<Prisma.ScriptClickUpdateManyMutationInput, Prisma.ScriptClickUncheckedUpdateManyWithoutScriptInput>;
};
export type ScriptClickCreateManyUserInput = {
    id?: string;
    scriptId: string;
    ipHash: string;
    createdAt?: Date | string;
};
export type ScriptClickUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ipHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    script?: Prisma.ScriptUpdateOneRequiredWithoutClicksNestedInput;
};
export type ScriptClickUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scriptId?: Prisma.StringFieldUpdateOperationsInput | string;
    ipHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScriptClickUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scriptId?: Prisma.StringFieldUpdateOperationsInput | string;
    ipHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScriptClickCreateManyScriptInput = {
    id?: string;
    userId?: string | null;
    ipHash: string;
    createdAt?: Date | string;
};
export type ScriptClickUpdateWithoutScriptInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ipHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneWithoutScriptClicksNestedInput;
};
export type ScriptClickUncheckedUpdateWithoutScriptInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ipHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScriptClickUncheckedUpdateManyWithoutScriptInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ipHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScriptClickSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    scriptId?: boolean;
    userId?: boolean;
    ipHash?: boolean;
    createdAt?: boolean;
    script?: boolean | Prisma.ScriptDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.ScriptClick$userArgs<ExtArgs>;
}, ExtArgs["result"]["scriptClick"]>;
export type ScriptClickSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    scriptId?: boolean;
    userId?: boolean;
    ipHash?: boolean;
    createdAt?: boolean;
    script?: boolean | Prisma.ScriptDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.ScriptClick$userArgs<ExtArgs>;
}, ExtArgs["result"]["scriptClick"]>;
export type ScriptClickSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    scriptId?: boolean;
    userId?: boolean;
    ipHash?: boolean;
    createdAt?: boolean;
    script?: boolean | Prisma.ScriptDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.ScriptClick$userArgs<ExtArgs>;
}, ExtArgs["result"]["scriptClick"]>;
export type ScriptClickSelectScalar = {
    id?: boolean;
    scriptId?: boolean;
    userId?: boolean;
    ipHash?: boolean;
    createdAt?: boolean;
};
export type ScriptClickOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "scriptId" | "userId" | "ipHash" | "createdAt", ExtArgs["result"]["scriptClick"]>;
export type ScriptClickInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    script?: boolean | Prisma.ScriptDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.ScriptClick$userArgs<ExtArgs>;
};
export type ScriptClickIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    script?: boolean | Prisma.ScriptDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.ScriptClick$userArgs<ExtArgs>;
};
export type ScriptClickIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    script?: boolean | Prisma.ScriptDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.ScriptClick$userArgs<ExtArgs>;
};
export type $ScriptClickPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ScriptClick";
    objects: {
        script: Prisma.$ScriptPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        scriptId: string;
        userId: string | null;
        ipHash: string;
        createdAt: Date;
    }, ExtArgs["result"]["scriptClick"]>;
    composites: {};
};
export type ScriptClickGetPayload<S extends boolean | null | undefined | ScriptClickDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ScriptClickPayload, S>;
export type ScriptClickCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ScriptClickFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ScriptClickCountAggregateInputType | true;
};
export interface ScriptClickDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ScriptClick'];
        meta: {
            name: 'ScriptClick';
        };
    };
    findUnique<T extends ScriptClickFindUniqueArgs>(args: Prisma.SelectSubset<T, ScriptClickFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ScriptClickClient<runtime.Types.Result.GetResult<Prisma.$ScriptClickPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ScriptClickFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ScriptClickFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ScriptClickClient<runtime.Types.Result.GetResult<Prisma.$ScriptClickPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ScriptClickFindFirstArgs>(args?: Prisma.SelectSubset<T, ScriptClickFindFirstArgs<ExtArgs>>): Prisma.Prisma__ScriptClickClient<runtime.Types.Result.GetResult<Prisma.$ScriptClickPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ScriptClickFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ScriptClickFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ScriptClickClient<runtime.Types.Result.GetResult<Prisma.$ScriptClickPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ScriptClickFindManyArgs>(args?: Prisma.SelectSubset<T, ScriptClickFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScriptClickPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ScriptClickCreateArgs>(args: Prisma.SelectSubset<T, ScriptClickCreateArgs<ExtArgs>>): Prisma.Prisma__ScriptClickClient<runtime.Types.Result.GetResult<Prisma.$ScriptClickPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ScriptClickCreateManyArgs>(args?: Prisma.SelectSubset<T, ScriptClickCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ScriptClickCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ScriptClickCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScriptClickPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ScriptClickDeleteArgs>(args: Prisma.SelectSubset<T, ScriptClickDeleteArgs<ExtArgs>>): Prisma.Prisma__ScriptClickClient<runtime.Types.Result.GetResult<Prisma.$ScriptClickPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ScriptClickUpdateArgs>(args: Prisma.SelectSubset<T, ScriptClickUpdateArgs<ExtArgs>>): Prisma.Prisma__ScriptClickClient<runtime.Types.Result.GetResult<Prisma.$ScriptClickPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ScriptClickDeleteManyArgs>(args?: Prisma.SelectSubset<T, ScriptClickDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ScriptClickUpdateManyArgs>(args: Prisma.SelectSubset<T, ScriptClickUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ScriptClickUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ScriptClickUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScriptClickPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ScriptClickUpsertArgs>(args: Prisma.SelectSubset<T, ScriptClickUpsertArgs<ExtArgs>>): Prisma.Prisma__ScriptClickClient<runtime.Types.Result.GetResult<Prisma.$ScriptClickPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ScriptClickCountArgs>(args?: Prisma.Subset<T, ScriptClickCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ScriptClickCountAggregateOutputType> : number>;
    aggregate<T extends ScriptClickAggregateArgs>(args: Prisma.Subset<T, ScriptClickAggregateArgs>): Prisma.PrismaPromise<GetScriptClickAggregateType<T>>;
    groupBy<T extends ScriptClickGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ScriptClickGroupByArgs['orderBy'];
    } : {
        orderBy?: ScriptClickGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ScriptClickGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScriptClickGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ScriptClickFieldRefs;
}
export interface Prisma__ScriptClickClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    script<T extends Prisma.ScriptDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ScriptDefaultArgs<ExtArgs>>): Prisma.Prisma__ScriptClient<runtime.Types.Result.GetResult<Prisma.$ScriptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.ScriptClick$userArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ScriptClick$userArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ScriptClickFieldRefs {
    readonly id: Prisma.FieldRef<"ScriptClick", 'String'>;
    readonly scriptId: Prisma.FieldRef<"ScriptClick", 'String'>;
    readonly userId: Prisma.FieldRef<"ScriptClick", 'String'>;
    readonly ipHash: Prisma.FieldRef<"ScriptClick", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ScriptClick", 'DateTime'>;
}
export type ScriptClickFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptClickSelect<ExtArgs> | null;
    omit?: Prisma.ScriptClickOmit<ExtArgs> | null;
    include?: Prisma.ScriptClickInclude<ExtArgs> | null;
    where: Prisma.ScriptClickWhereUniqueInput;
};
export type ScriptClickFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptClickSelect<ExtArgs> | null;
    omit?: Prisma.ScriptClickOmit<ExtArgs> | null;
    include?: Prisma.ScriptClickInclude<ExtArgs> | null;
    where: Prisma.ScriptClickWhereUniqueInput;
};
export type ScriptClickFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptClickSelect<ExtArgs> | null;
    omit?: Prisma.ScriptClickOmit<ExtArgs> | null;
    include?: Prisma.ScriptClickInclude<ExtArgs> | null;
    where?: Prisma.ScriptClickWhereInput;
    orderBy?: Prisma.ScriptClickOrderByWithRelationInput | Prisma.ScriptClickOrderByWithRelationInput[];
    cursor?: Prisma.ScriptClickWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScriptClickScalarFieldEnum | Prisma.ScriptClickScalarFieldEnum[];
};
export type ScriptClickFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptClickSelect<ExtArgs> | null;
    omit?: Prisma.ScriptClickOmit<ExtArgs> | null;
    include?: Prisma.ScriptClickInclude<ExtArgs> | null;
    where?: Prisma.ScriptClickWhereInput;
    orderBy?: Prisma.ScriptClickOrderByWithRelationInput | Prisma.ScriptClickOrderByWithRelationInput[];
    cursor?: Prisma.ScriptClickWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScriptClickScalarFieldEnum | Prisma.ScriptClickScalarFieldEnum[];
};
export type ScriptClickFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptClickSelect<ExtArgs> | null;
    omit?: Prisma.ScriptClickOmit<ExtArgs> | null;
    include?: Prisma.ScriptClickInclude<ExtArgs> | null;
    where?: Prisma.ScriptClickWhereInput;
    orderBy?: Prisma.ScriptClickOrderByWithRelationInput | Prisma.ScriptClickOrderByWithRelationInput[];
    cursor?: Prisma.ScriptClickWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScriptClickScalarFieldEnum | Prisma.ScriptClickScalarFieldEnum[];
};
export type ScriptClickCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptClickSelect<ExtArgs> | null;
    omit?: Prisma.ScriptClickOmit<ExtArgs> | null;
    include?: Prisma.ScriptClickInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScriptClickCreateInput, Prisma.ScriptClickUncheckedCreateInput>;
};
export type ScriptClickCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ScriptClickCreateManyInput | Prisma.ScriptClickCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ScriptClickCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptClickSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ScriptClickOmit<ExtArgs> | null;
    data: Prisma.ScriptClickCreateManyInput | Prisma.ScriptClickCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ScriptClickIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ScriptClickUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptClickSelect<ExtArgs> | null;
    omit?: Prisma.ScriptClickOmit<ExtArgs> | null;
    include?: Prisma.ScriptClickInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScriptClickUpdateInput, Prisma.ScriptClickUncheckedUpdateInput>;
    where: Prisma.ScriptClickWhereUniqueInput;
};
export type ScriptClickUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ScriptClickUpdateManyMutationInput, Prisma.ScriptClickUncheckedUpdateManyInput>;
    where?: Prisma.ScriptClickWhereInput;
    limit?: number;
};
export type ScriptClickUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptClickSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ScriptClickOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScriptClickUpdateManyMutationInput, Prisma.ScriptClickUncheckedUpdateManyInput>;
    where?: Prisma.ScriptClickWhereInput;
    limit?: number;
    include?: Prisma.ScriptClickIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ScriptClickUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptClickSelect<ExtArgs> | null;
    omit?: Prisma.ScriptClickOmit<ExtArgs> | null;
    include?: Prisma.ScriptClickInclude<ExtArgs> | null;
    where: Prisma.ScriptClickWhereUniqueInput;
    create: Prisma.XOR<Prisma.ScriptClickCreateInput, Prisma.ScriptClickUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ScriptClickUpdateInput, Prisma.ScriptClickUncheckedUpdateInput>;
};
export type ScriptClickDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptClickSelect<ExtArgs> | null;
    omit?: Prisma.ScriptClickOmit<ExtArgs> | null;
    include?: Prisma.ScriptClickInclude<ExtArgs> | null;
    where: Prisma.ScriptClickWhereUniqueInput;
};
export type ScriptClickDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScriptClickWhereInput;
    limit?: number;
};
export type ScriptClick$userArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type ScriptClickDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptClickSelect<ExtArgs> | null;
    omit?: Prisma.ScriptClickOmit<ExtArgs> | null;
    include?: Prisma.ScriptClickInclude<ExtArgs> | null;
};
