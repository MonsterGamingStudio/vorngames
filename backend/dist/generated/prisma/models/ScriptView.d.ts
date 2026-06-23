import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type ScriptViewModel = runtime.Types.Result.DefaultSelection<Prisma.$ScriptViewPayload>;
export type AggregateScriptView = {
    _count: ScriptViewCountAggregateOutputType | null;
    _min: ScriptViewMinAggregateOutputType | null;
    _max: ScriptViewMaxAggregateOutputType | null;
};
export type ScriptViewMinAggregateOutputType = {
    id: string | null;
    scriptId: string | null;
    userId: string | null;
    ipHash: string | null;
    createdAt: Date | null;
};
export type ScriptViewMaxAggregateOutputType = {
    id: string | null;
    scriptId: string | null;
    userId: string | null;
    ipHash: string | null;
    createdAt: Date | null;
};
export type ScriptViewCountAggregateOutputType = {
    id: number;
    scriptId: number;
    userId: number;
    ipHash: number;
    createdAt: number;
    _all: number;
};
export type ScriptViewMinAggregateInputType = {
    id?: true;
    scriptId?: true;
    userId?: true;
    ipHash?: true;
    createdAt?: true;
};
export type ScriptViewMaxAggregateInputType = {
    id?: true;
    scriptId?: true;
    userId?: true;
    ipHash?: true;
    createdAt?: true;
};
export type ScriptViewCountAggregateInputType = {
    id?: true;
    scriptId?: true;
    userId?: true;
    ipHash?: true;
    createdAt?: true;
    _all?: true;
};
export type ScriptViewAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScriptViewWhereInput;
    orderBy?: Prisma.ScriptViewOrderByWithRelationInput | Prisma.ScriptViewOrderByWithRelationInput[];
    cursor?: Prisma.ScriptViewWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ScriptViewCountAggregateInputType;
    _min?: ScriptViewMinAggregateInputType;
    _max?: ScriptViewMaxAggregateInputType;
};
export type GetScriptViewAggregateType<T extends ScriptViewAggregateArgs> = {
    [P in keyof T & keyof AggregateScriptView]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateScriptView[P]> : Prisma.GetScalarType<T[P], AggregateScriptView[P]>;
};
export type ScriptViewGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScriptViewWhereInput;
    orderBy?: Prisma.ScriptViewOrderByWithAggregationInput | Prisma.ScriptViewOrderByWithAggregationInput[];
    by: Prisma.ScriptViewScalarFieldEnum[] | Prisma.ScriptViewScalarFieldEnum;
    having?: Prisma.ScriptViewScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ScriptViewCountAggregateInputType | true;
    _min?: ScriptViewMinAggregateInputType;
    _max?: ScriptViewMaxAggregateInputType;
};
export type ScriptViewGroupByOutputType = {
    id: string;
    scriptId: string;
    userId: string | null;
    ipHash: string;
    createdAt: Date;
    _count: ScriptViewCountAggregateOutputType | null;
    _min: ScriptViewMinAggregateOutputType | null;
    _max: ScriptViewMaxAggregateOutputType | null;
};
export type GetScriptViewGroupByPayload<T extends ScriptViewGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ScriptViewGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ScriptViewGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ScriptViewGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ScriptViewGroupByOutputType[P]>;
}>>;
export type ScriptViewWhereInput = {
    AND?: Prisma.ScriptViewWhereInput | Prisma.ScriptViewWhereInput[];
    OR?: Prisma.ScriptViewWhereInput[];
    NOT?: Prisma.ScriptViewWhereInput | Prisma.ScriptViewWhereInput[];
    id?: Prisma.StringFilter<"ScriptView"> | string;
    scriptId?: Prisma.StringFilter<"ScriptView"> | string;
    userId?: Prisma.StringNullableFilter<"ScriptView"> | string | null;
    ipHash?: Prisma.StringFilter<"ScriptView"> | string;
    createdAt?: Prisma.DateTimeFilter<"ScriptView"> | Date | string;
    script?: Prisma.XOR<Prisma.ScriptScalarRelationFilter, Prisma.ScriptWhereInput>;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
};
export type ScriptViewOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    scriptId?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    ipHash?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    script?: Prisma.ScriptOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type ScriptViewWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ScriptViewWhereInput | Prisma.ScriptViewWhereInput[];
    OR?: Prisma.ScriptViewWhereInput[];
    NOT?: Prisma.ScriptViewWhereInput | Prisma.ScriptViewWhereInput[];
    scriptId?: Prisma.StringFilter<"ScriptView"> | string;
    userId?: Prisma.StringNullableFilter<"ScriptView"> | string | null;
    ipHash?: Prisma.StringFilter<"ScriptView"> | string;
    createdAt?: Prisma.DateTimeFilter<"ScriptView"> | Date | string;
    script?: Prisma.XOR<Prisma.ScriptScalarRelationFilter, Prisma.ScriptWhereInput>;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
}, "id">;
export type ScriptViewOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    scriptId?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    ipHash?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ScriptViewCountOrderByAggregateInput;
    _max?: Prisma.ScriptViewMaxOrderByAggregateInput;
    _min?: Prisma.ScriptViewMinOrderByAggregateInput;
};
export type ScriptViewScalarWhereWithAggregatesInput = {
    AND?: Prisma.ScriptViewScalarWhereWithAggregatesInput | Prisma.ScriptViewScalarWhereWithAggregatesInput[];
    OR?: Prisma.ScriptViewScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ScriptViewScalarWhereWithAggregatesInput | Prisma.ScriptViewScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ScriptView"> | string;
    scriptId?: Prisma.StringWithAggregatesFilter<"ScriptView"> | string;
    userId?: Prisma.StringNullableWithAggregatesFilter<"ScriptView"> | string | null;
    ipHash?: Prisma.StringWithAggregatesFilter<"ScriptView"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ScriptView"> | Date | string;
};
export type ScriptViewCreateInput = {
    id?: string;
    ipHash: string;
    createdAt?: Date | string;
    script: Prisma.ScriptCreateNestedOneWithoutViewsInput;
    user?: Prisma.UserCreateNestedOneWithoutScriptViewsInput;
};
export type ScriptViewUncheckedCreateInput = {
    id?: string;
    scriptId: string;
    userId?: string | null;
    ipHash: string;
    createdAt?: Date | string;
};
export type ScriptViewUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ipHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    script?: Prisma.ScriptUpdateOneRequiredWithoutViewsNestedInput;
    user?: Prisma.UserUpdateOneWithoutScriptViewsNestedInput;
};
export type ScriptViewUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scriptId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ipHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScriptViewCreateManyInput = {
    id?: string;
    scriptId: string;
    userId?: string | null;
    ipHash: string;
    createdAt?: Date | string;
};
export type ScriptViewUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ipHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScriptViewUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scriptId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ipHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScriptViewListRelationFilter = {
    every?: Prisma.ScriptViewWhereInput;
    some?: Prisma.ScriptViewWhereInput;
    none?: Prisma.ScriptViewWhereInput;
};
export type ScriptViewOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ScriptViewCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    scriptId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    ipHash?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ScriptViewMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    scriptId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    ipHash?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ScriptViewMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    scriptId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    ipHash?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ScriptViewCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ScriptViewCreateWithoutUserInput, Prisma.ScriptViewUncheckedCreateWithoutUserInput> | Prisma.ScriptViewCreateWithoutUserInput[] | Prisma.ScriptViewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ScriptViewCreateOrConnectWithoutUserInput | Prisma.ScriptViewCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ScriptViewCreateManyUserInputEnvelope;
    connect?: Prisma.ScriptViewWhereUniqueInput | Prisma.ScriptViewWhereUniqueInput[];
};
export type ScriptViewUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ScriptViewCreateWithoutUserInput, Prisma.ScriptViewUncheckedCreateWithoutUserInput> | Prisma.ScriptViewCreateWithoutUserInput[] | Prisma.ScriptViewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ScriptViewCreateOrConnectWithoutUserInput | Prisma.ScriptViewCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ScriptViewCreateManyUserInputEnvelope;
    connect?: Prisma.ScriptViewWhereUniqueInput | Prisma.ScriptViewWhereUniqueInput[];
};
export type ScriptViewUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ScriptViewCreateWithoutUserInput, Prisma.ScriptViewUncheckedCreateWithoutUserInput> | Prisma.ScriptViewCreateWithoutUserInput[] | Prisma.ScriptViewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ScriptViewCreateOrConnectWithoutUserInput | Prisma.ScriptViewCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ScriptViewUpsertWithWhereUniqueWithoutUserInput | Prisma.ScriptViewUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ScriptViewCreateManyUserInputEnvelope;
    set?: Prisma.ScriptViewWhereUniqueInput | Prisma.ScriptViewWhereUniqueInput[];
    disconnect?: Prisma.ScriptViewWhereUniqueInput | Prisma.ScriptViewWhereUniqueInput[];
    delete?: Prisma.ScriptViewWhereUniqueInput | Prisma.ScriptViewWhereUniqueInput[];
    connect?: Prisma.ScriptViewWhereUniqueInput | Prisma.ScriptViewWhereUniqueInput[];
    update?: Prisma.ScriptViewUpdateWithWhereUniqueWithoutUserInput | Prisma.ScriptViewUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ScriptViewUpdateManyWithWhereWithoutUserInput | Prisma.ScriptViewUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ScriptViewScalarWhereInput | Prisma.ScriptViewScalarWhereInput[];
};
export type ScriptViewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ScriptViewCreateWithoutUserInput, Prisma.ScriptViewUncheckedCreateWithoutUserInput> | Prisma.ScriptViewCreateWithoutUserInput[] | Prisma.ScriptViewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ScriptViewCreateOrConnectWithoutUserInput | Prisma.ScriptViewCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ScriptViewUpsertWithWhereUniqueWithoutUserInput | Prisma.ScriptViewUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ScriptViewCreateManyUserInputEnvelope;
    set?: Prisma.ScriptViewWhereUniqueInput | Prisma.ScriptViewWhereUniqueInput[];
    disconnect?: Prisma.ScriptViewWhereUniqueInput | Prisma.ScriptViewWhereUniqueInput[];
    delete?: Prisma.ScriptViewWhereUniqueInput | Prisma.ScriptViewWhereUniqueInput[];
    connect?: Prisma.ScriptViewWhereUniqueInput | Prisma.ScriptViewWhereUniqueInput[];
    update?: Prisma.ScriptViewUpdateWithWhereUniqueWithoutUserInput | Prisma.ScriptViewUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ScriptViewUpdateManyWithWhereWithoutUserInput | Prisma.ScriptViewUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ScriptViewScalarWhereInput | Prisma.ScriptViewScalarWhereInput[];
};
export type ScriptViewCreateNestedManyWithoutScriptInput = {
    create?: Prisma.XOR<Prisma.ScriptViewCreateWithoutScriptInput, Prisma.ScriptViewUncheckedCreateWithoutScriptInput> | Prisma.ScriptViewCreateWithoutScriptInput[] | Prisma.ScriptViewUncheckedCreateWithoutScriptInput[];
    connectOrCreate?: Prisma.ScriptViewCreateOrConnectWithoutScriptInput | Prisma.ScriptViewCreateOrConnectWithoutScriptInput[];
    createMany?: Prisma.ScriptViewCreateManyScriptInputEnvelope;
    connect?: Prisma.ScriptViewWhereUniqueInput | Prisma.ScriptViewWhereUniqueInput[];
};
export type ScriptViewUncheckedCreateNestedManyWithoutScriptInput = {
    create?: Prisma.XOR<Prisma.ScriptViewCreateWithoutScriptInput, Prisma.ScriptViewUncheckedCreateWithoutScriptInput> | Prisma.ScriptViewCreateWithoutScriptInput[] | Prisma.ScriptViewUncheckedCreateWithoutScriptInput[];
    connectOrCreate?: Prisma.ScriptViewCreateOrConnectWithoutScriptInput | Prisma.ScriptViewCreateOrConnectWithoutScriptInput[];
    createMany?: Prisma.ScriptViewCreateManyScriptInputEnvelope;
    connect?: Prisma.ScriptViewWhereUniqueInput | Prisma.ScriptViewWhereUniqueInput[];
};
export type ScriptViewUpdateManyWithoutScriptNestedInput = {
    create?: Prisma.XOR<Prisma.ScriptViewCreateWithoutScriptInput, Prisma.ScriptViewUncheckedCreateWithoutScriptInput> | Prisma.ScriptViewCreateWithoutScriptInput[] | Prisma.ScriptViewUncheckedCreateWithoutScriptInput[];
    connectOrCreate?: Prisma.ScriptViewCreateOrConnectWithoutScriptInput | Prisma.ScriptViewCreateOrConnectWithoutScriptInput[];
    upsert?: Prisma.ScriptViewUpsertWithWhereUniqueWithoutScriptInput | Prisma.ScriptViewUpsertWithWhereUniqueWithoutScriptInput[];
    createMany?: Prisma.ScriptViewCreateManyScriptInputEnvelope;
    set?: Prisma.ScriptViewWhereUniqueInput | Prisma.ScriptViewWhereUniqueInput[];
    disconnect?: Prisma.ScriptViewWhereUniqueInput | Prisma.ScriptViewWhereUniqueInput[];
    delete?: Prisma.ScriptViewWhereUniqueInput | Prisma.ScriptViewWhereUniqueInput[];
    connect?: Prisma.ScriptViewWhereUniqueInput | Prisma.ScriptViewWhereUniqueInput[];
    update?: Prisma.ScriptViewUpdateWithWhereUniqueWithoutScriptInput | Prisma.ScriptViewUpdateWithWhereUniqueWithoutScriptInput[];
    updateMany?: Prisma.ScriptViewUpdateManyWithWhereWithoutScriptInput | Prisma.ScriptViewUpdateManyWithWhereWithoutScriptInput[];
    deleteMany?: Prisma.ScriptViewScalarWhereInput | Prisma.ScriptViewScalarWhereInput[];
};
export type ScriptViewUncheckedUpdateManyWithoutScriptNestedInput = {
    create?: Prisma.XOR<Prisma.ScriptViewCreateWithoutScriptInput, Prisma.ScriptViewUncheckedCreateWithoutScriptInput> | Prisma.ScriptViewCreateWithoutScriptInput[] | Prisma.ScriptViewUncheckedCreateWithoutScriptInput[];
    connectOrCreate?: Prisma.ScriptViewCreateOrConnectWithoutScriptInput | Prisma.ScriptViewCreateOrConnectWithoutScriptInput[];
    upsert?: Prisma.ScriptViewUpsertWithWhereUniqueWithoutScriptInput | Prisma.ScriptViewUpsertWithWhereUniqueWithoutScriptInput[];
    createMany?: Prisma.ScriptViewCreateManyScriptInputEnvelope;
    set?: Prisma.ScriptViewWhereUniqueInput | Prisma.ScriptViewWhereUniqueInput[];
    disconnect?: Prisma.ScriptViewWhereUniqueInput | Prisma.ScriptViewWhereUniqueInput[];
    delete?: Prisma.ScriptViewWhereUniqueInput | Prisma.ScriptViewWhereUniqueInput[];
    connect?: Prisma.ScriptViewWhereUniqueInput | Prisma.ScriptViewWhereUniqueInput[];
    update?: Prisma.ScriptViewUpdateWithWhereUniqueWithoutScriptInput | Prisma.ScriptViewUpdateWithWhereUniqueWithoutScriptInput[];
    updateMany?: Prisma.ScriptViewUpdateManyWithWhereWithoutScriptInput | Prisma.ScriptViewUpdateManyWithWhereWithoutScriptInput[];
    deleteMany?: Prisma.ScriptViewScalarWhereInput | Prisma.ScriptViewScalarWhereInput[];
};
export type ScriptViewCreateWithoutUserInput = {
    id?: string;
    ipHash: string;
    createdAt?: Date | string;
    script: Prisma.ScriptCreateNestedOneWithoutViewsInput;
};
export type ScriptViewUncheckedCreateWithoutUserInput = {
    id?: string;
    scriptId: string;
    ipHash: string;
    createdAt?: Date | string;
};
export type ScriptViewCreateOrConnectWithoutUserInput = {
    where: Prisma.ScriptViewWhereUniqueInput;
    create: Prisma.XOR<Prisma.ScriptViewCreateWithoutUserInput, Prisma.ScriptViewUncheckedCreateWithoutUserInput>;
};
export type ScriptViewCreateManyUserInputEnvelope = {
    data: Prisma.ScriptViewCreateManyUserInput | Prisma.ScriptViewCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type ScriptViewUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.ScriptViewWhereUniqueInput;
    update: Prisma.XOR<Prisma.ScriptViewUpdateWithoutUserInput, Prisma.ScriptViewUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ScriptViewCreateWithoutUserInput, Prisma.ScriptViewUncheckedCreateWithoutUserInput>;
};
export type ScriptViewUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.ScriptViewWhereUniqueInput;
    data: Prisma.XOR<Prisma.ScriptViewUpdateWithoutUserInput, Prisma.ScriptViewUncheckedUpdateWithoutUserInput>;
};
export type ScriptViewUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.ScriptViewScalarWhereInput;
    data: Prisma.XOR<Prisma.ScriptViewUpdateManyMutationInput, Prisma.ScriptViewUncheckedUpdateManyWithoutUserInput>;
};
export type ScriptViewScalarWhereInput = {
    AND?: Prisma.ScriptViewScalarWhereInput | Prisma.ScriptViewScalarWhereInput[];
    OR?: Prisma.ScriptViewScalarWhereInput[];
    NOT?: Prisma.ScriptViewScalarWhereInput | Prisma.ScriptViewScalarWhereInput[];
    id?: Prisma.StringFilter<"ScriptView"> | string;
    scriptId?: Prisma.StringFilter<"ScriptView"> | string;
    userId?: Prisma.StringNullableFilter<"ScriptView"> | string | null;
    ipHash?: Prisma.StringFilter<"ScriptView"> | string;
    createdAt?: Prisma.DateTimeFilter<"ScriptView"> | Date | string;
};
export type ScriptViewCreateWithoutScriptInput = {
    id?: string;
    ipHash: string;
    createdAt?: Date | string;
    user?: Prisma.UserCreateNestedOneWithoutScriptViewsInput;
};
export type ScriptViewUncheckedCreateWithoutScriptInput = {
    id?: string;
    userId?: string | null;
    ipHash: string;
    createdAt?: Date | string;
};
export type ScriptViewCreateOrConnectWithoutScriptInput = {
    where: Prisma.ScriptViewWhereUniqueInput;
    create: Prisma.XOR<Prisma.ScriptViewCreateWithoutScriptInput, Prisma.ScriptViewUncheckedCreateWithoutScriptInput>;
};
export type ScriptViewCreateManyScriptInputEnvelope = {
    data: Prisma.ScriptViewCreateManyScriptInput | Prisma.ScriptViewCreateManyScriptInput[];
    skipDuplicates?: boolean;
};
export type ScriptViewUpsertWithWhereUniqueWithoutScriptInput = {
    where: Prisma.ScriptViewWhereUniqueInput;
    update: Prisma.XOR<Prisma.ScriptViewUpdateWithoutScriptInput, Prisma.ScriptViewUncheckedUpdateWithoutScriptInput>;
    create: Prisma.XOR<Prisma.ScriptViewCreateWithoutScriptInput, Prisma.ScriptViewUncheckedCreateWithoutScriptInput>;
};
export type ScriptViewUpdateWithWhereUniqueWithoutScriptInput = {
    where: Prisma.ScriptViewWhereUniqueInput;
    data: Prisma.XOR<Prisma.ScriptViewUpdateWithoutScriptInput, Prisma.ScriptViewUncheckedUpdateWithoutScriptInput>;
};
export type ScriptViewUpdateManyWithWhereWithoutScriptInput = {
    where: Prisma.ScriptViewScalarWhereInput;
    data: Prisma.XOR<Prisma.ScriptViewUpdateManyMutationInput, Prisma.ScriptViewUncheckedUpdateManyWithoutScriptInput>;
};
export type ScriptViewCreateManyUserInput = {
    id?: string;
    scriptId: string;
    ipHash: string;
    createdAt?: Date | string;
};
export type ScriptViewUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ipHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    script?: Prisma.ScriptUpdateOneRequiredWithoutViewsNestedInput;
};
export type ScriptViewUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scriptId?: Prisma.StringFieldUpdateOperationsInput | string;
    ipHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScriptViewUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scriptId?: Prisma.StringFieldUpdateOperationsInput | string;
    ipHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScriptViewCreateManyScriptInput = {
    id?: string;
    userId?: string | null;
    ipHash: string;
    createdAt?: Date | string;
};
export type ScriptViewUpdateWithoutScriptInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ipHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneWithoutScriptViewsNestedInput;
};
export type ScriptViewUncheckedUpdateWithoutScriptInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ipHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScriptViewUncheckedUpdateManyWithoutScriptInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ipHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScriptViewSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    scriptId?: boolean;
    userId?: boolean;
    ipHash?: boolean;
    createdAt?: boolean;
    script?: boolean | Prisma.ScriptDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.ScriptView$userArgs<ExtArgs>;
}, ExtArgs["result"]["scriptView"]>;
export type ScriptViewSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    scriptId?: boolean;
    userId?: boolean;
    ipHash?: boolean;
    createdAt?: boolean;
    script?: boolean | Prisma.ScriptDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.ScriptView$userArgs<ExtArgs>;
}, ExtArgs["result"]["scriptView"]>;
export type ScriptViewSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    scriptId?: boolean;
    userId?: boolean;
    ipHash?: boolean;
    createdAt?: boolean;
    script?: boolean | Prisma.ScriptDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.ScriptView$userArgs<ExtArgs>;
}, ExtArgs["result"]["scriptView"]>;
export type ScriptViewSelectScalar = {
    id?: boolean;
    scriptId?: boolean;
    userId?: boolean;
    ipHash?: boolean;
    createdAt?: boolean;
};
export type ScriptViewOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "scriptId" | "userId" | "ipHash" | "createdAt", ExtArgs["result"]["scriptView"]>;
export type ScriptViewInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    script?: boolean | Prisma.ScriptDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.ScriptView$userArgs<ExtArgs>;
};
export type ScriptViewIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    script?: boolean | Prisma.ScriptDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.ScriptView$userArgs<ExtArgs>;
};
export type ScriptViewIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    script?: boolean | Prisma.ScriptDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.ScriptView$userArgs<ExtArgs>;
};
export type $ScriptViewPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ScriptView";
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
    }, ExtArgs["result"]["scriptView"]>;
    composites: {};
};
export type ScriptViewGetPayload<S extends boolean | null | undefined | ScriptViewDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ScriptViewPayload, S>;
export type ScriptViewCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ScriptViewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ScriptViewCountAggregateInputType | true;
};
export interface ScriptViewDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ScriptView'];
        meta: {
            name: 'ScriptView';
        };
    };
    findUnique<T extends ScriptViewFindUniqueArgs>(args: Prisma.SelectSubset<T, ScriptViewFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ScriptViewClient<runtime.Types.Result.GetResult<Prisma.$ScriptViewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ScriptViewFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ScriptViewFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ScriptViewClient<runtime.Types.Result.GetResult<Prisma.$ScriptViewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ScriptViewFindFirstArgs>(args?: Prisma.SelectSubset<T, ScriptViewFindFirstArgs<ExtArgs>>): Prisma.Prisma__ScriptViewClient<runtime.Types.Result.GetResult<Prisma.$ScriptViewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ScriptViewFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ScriptViewFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ScriptViewClient<runtime.Types.Result.GetResult<Prisma.$ScriptViewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ScriptViewFindManyArgs>(args?: Prisma.SelectSubset<T, ScriptViewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScriptViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ScriptViewCreateArgs>(args: Prisma.SelectSubset<T, ScriptViewCreateArgs<ExtArgs>>): Prisma.Prisma__ScriptViewClient<runtime.Types.Result.GetResult<Prisma.$ScriptViewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ScriptViewCreateManyArgs>(args?: Prisma.SelectSubset<T, ScriptViewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ScriptViewCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ScriptViewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScriptViewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ScriptViewDeleteArgs>(args: Prisma.SelectSubset<T, ScriptViewDeleteArgs<ExtArgs>>): Prisma.Prisma__ScriptViewClient<runtime.Types.Result.GetResult<Prisma.$ScriptViewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ScriptViewUpdateArgs>(args: Prisma.SelectSubset<T, ScriptViewUpdateArgs<ExtArgs>>): Prisma.Prisma__ScriptViewClient<runtime.Types.Result.GetResult<Prisma.$ScriptViewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ScriptViewDeleteManyArgs>(args?: Prisma.SelectSubset<T, ScriptViewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ScriptViewUpdateManyArgs>(args: Prisma.SelectSubset<T, ScriptViewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ScriptViewUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ScriptViewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScriptViewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ScriptViewUpsertArgs>(args: Prisma.SelectSubset<T, ScriptViewUpsertArgs<ExtArgs>>): Prisma.Prisma__ScriptViewClient<runtime.Types.Result.GetResult<Prisma.$ScriptViewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ScriptViewCountArgs>(args?: Prisma.Subset<T, ScriptViewCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ScriptViewCountAggregateOutputType> : number>;
    aggregate<T extends ScriptViewAggregateArgs>(args: Prisma.Subset<T, ScriptViewAggregateArgs>): Prisma.PrismaPromise<GetScriptViewAggregateType<T>>;
    groupBy<T extends ScriptViewGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ScriptViewGroupByArgs['orderBy'];
    } : {
        orderBy?: ScriptViewGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ScriptViewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScriptViewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ScriptViewFieldRefs;
}
export interface Prisma__ScriptViewClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    script<T extends Prisma.ScriptDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ScriptDefaultArgs<ExtArgs>>): Prisma.Prisma__ScriptClient<runtime.Types.Result.GetResult<Prisma.$ScriptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.ScriptView$userArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ScriptView$userArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ScriptViewFieldRefs {
    readonly id: Prisma.FieldRef<"ScriptView", 'String'>;
    readonly scriptId: Prisma.FieldRef<"ScriptView", 'String'>;
    readonly userId: Prisma.FieldRef<"ScriptView", 'String'>;
    readonly ipHash: Prisma.FieldRef<"ScriptView", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ScriptView", 'DateTime'>;
}
export type ScriptViewFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptViewSelect<ExtArgs> | null;
    omit?: Prisma.ScriptViewOmit<ExtArgs> | null;
    include?: Prisma.ScriptViewInclude<ExtArgs> | null;
    where: Prisma.ScriptViewWhereUniqueInput;
};
export type ScriptViewFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptViewSelect<ExtArgs> | null;
    omit?: Prisma.ScriptViewOmit<ExtArgs> | null;
    include?: Prisma.ScriptViewInclude<ExtArgs> | null;
    where: Prisma.ScriptViewWhereUniqueInput;
};
export type ScriptViewFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptViewSelect<ExtArgs> | null;
    omit?: Prisma.ScriptViewOmit<ExtArgs> | null;
    include?: Prisma.ScriptViewInclude<ExtArgs> | null;
    where?: Prisma.ScriptViewWhereInput;
    orderBy?: Prisma.ScriptViewOrderByWithRelationInput | Prisma.ScriptViewOrderByWithRelationInput[];
    cursor?: Prisma.ScriptViewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScriptViewScalarFieldEnum | Prisma.ScriptViewScalarFieldEnum[];
};
export type ScriptViewFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptViewSelect<ExtArgs> | null;
    omit?: Prisma.ScriptViewOmit<ExtArgs> | null;
    include?: Prisma.ScriptViewInclude<ExtArgs> | null;
    where?: Prisma.ScriptViewWhereInput;
    orderBy?: Prisma.ScriptViewOrderByWithRelationInput | Prisma.ScriptViewOrderByWithRelationInput[];
    cursor?: Prisma.ScriptViewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScriptViewScalarFieldEnum | Prisma.ScriptViewScalarFieldEnum[];
};
export type ScriptViewFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptViewSelect<ExtArgs> | null;
    omit?: Prisma.ScriptViewOmit<ExtArgs> | null;
    include?: Prisma.ScriptViewInclude<ExtArgs> | null;
    where?: Prisma.ScriptViewWhereInput;
    orderBy?: Prisma.ScriptViewOrderByWithRelationInput | Prisma.ScriptViewOrderByWithRelationInput[];
    cursor?: Prisma.ScriptViewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScriptViewScalarFieldEnum | Prisma.ScriptViewScalarFieldEnum[];
};
export type ScriptViewCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptViewSelect<ExtArgs> | null;
    omit?: Prisma.ScriptViewOmit<ExtArgs> | null;
    include?: Prisma.ScriptViewInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScriptViewCreateInput, Prisma.ScriptViewUncheckedCreateInput>;
};
export type ScriptViewCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ScriptViewCreateManyInput | Prisma.ScriptViewCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ScriptViewCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptViewSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ScriptViewOmit<ExtArgs> | null;
    data: Prisma.ScriptViewCreateManyInput | Prisma.ScriptViewCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ScriptViewIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ScriptViewUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptViewSelect<ExtArgs> | null;
    omit?: Prisma.ScriptViewOmit<ExtArgs> | null;
    include?: Prisma.ScriptViewInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScriptViewUpdateInput, Prisma.ScriptViewUncheckedUpdateInput>;
    where: Prisma.ScriptViewWhereUniqueInput;
};
export type ScriptViewUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ScriptViewUpdateManyMutationInput, Prisma.ScriptViewUncheckedUpdateManyInput>;
    where?: Prisma.ScriptViewWhereInput;
    limit?: number;
};
export type ScriptViewUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptViewSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ScriptViewOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScriptViewUpdateManyMutationInput, Prisma.ScriptViewUncheckedUpdateManyInput>;
    where?: Prisma.ScriptViewWhereInput;
    limit?: number;
    include?: Prisma.ScriptViewIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ScriptViewUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptViewSelect<ExtArgs> | null;
    omit?: Prisma.ScriptViewOmit<ExtArgs> | null;
    include?: Prisma.ScriptViewInclude<ExtArgs> | null;
    where: Prisma.ScriptViewWhereUniqueInput;
    create: Prisma.XOR<Prisma.ScriptViewCreateInput, Prisma.ScriptViewUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ScriptViewUpdateInput, Prisma.ScriptViewUncheckedUpdateInput>;
};
export type ScriptViewDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptViewSelect<ExtArgs> | null;
    omit?: Prisma.ScriptViewOmit<ExtArgs> | null;
    include?: Prisma.ScriptViewInclude<ExtArgs> | null;
    where: Prisma.ScriptViewWhereUniqueInput;
};
export type ScriptViewDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScriptViewWhereInput;
    limit?: number;
};
export type ScriptView$userArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type ScriptViewDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptViewSelect<ExtArgs> | null;
    omit?: Prisma.ScriptViewOmit<ExtArgs> | null;
    include?: Prisma.ScriptViewInclude<ExtArgs> | null;
};
