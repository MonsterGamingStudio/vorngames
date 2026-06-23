import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type PurchaseModel = runtime.Types.Result.DefaultSelection<Prisma.$PurchasePayload>;
export type AggregatePurchase = {
    _count: PurchaseCountAggregateOutputType | null;
    _avg: PurchaseAvgAggregateOutputType | null;
    _sum: PurchaseSumAggregateOutputType | null;
    _min: PurchaseMinAggregateOutputType | null;
    _max: PurchaseMaxAggregateOutputType | null;
};
export type PurchaseAvgAggregateOutputType = {
    pricePaid: number | null;
};
export type PurchaseSumAggregateOutputType = {
    pricePaid: number | null;
};
export type PurchaseMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    scriptId: string | null;
    paymentId: string | null;
    pricePaid: number | null;
    currency: $Enums.Currency | null;
    purchasedAt: Date | null;
    lastDownloadedVersionId: string | null;
    grantedByAdmin: boolean | null;
};
export type PurchaseMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    scriptId: string | null;
    paymentId: string | null;
    pricePaid: number | null;
    currency: $Enums.Currency | null;
    purchasedAt: Date | null;
    lastDownloadedVersionId: string | null;
    grantedByAdmin: boolean | null;
};
export type PurchaseCountAggregateOutputType = {
    id: number;
    userId: number;
    scriptId: number;
    paymentId: number;
    pricePaid: number;
    currency: number;
    purchasedAt: number;
    lastDownloadedVersionId: number;
    grantedByAdmin: number;
    _all: number;
};
export type PurchaseAvgAggregateInputType = {
    pricePaid?: true;
};
export type PurchaseSumAggregateInputType = {
    pricePaid?: true;
};
export type PurchaseMinAggregateInputType = {
    id?: true;
    userId?: true;
    scriptId?: true;
    paymentId?: true;
    pricePaid?: true;
    currency?: true;
    purchasedAt?: true;
    lastDownloadedVersionId?: true;
    grantedByAdmin?: true;
};
export type PurchaseMaxAggregateInputType = {
    id?: true;
    userId?: true;
    scriptId?: true;
    paymentId?: true;
    pricePaid?: true;
    currency?: true;
    purchasedAt?: true;
    lastDownloadedVersionId?: true;
    grantedByAdmin?: true;
};
export type PurchaseCountAggregateInputType = {
    id?: true;
    userId?: true;
    scriptId?: true;
    paymentId?: true;
    pricePaid?: true;
    currency?: true;
    purchasedAt?: true;
    lastDownloadedVersionId?: true;
    grantedByAdmin?: true;
    _all?: true;
};
export type PurchaseAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PurchaseWhereInput;
    orderBy?: Prisma.PurchaseOrderByWithRelationInput | Prisma.PurchaseOrderByWithRelationInput[];
    cursor?: Prisma.PurchaseWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PurchaseCountAggregateInputType;
    _avg?: PurchaseAvgAggregateInputType;
    _sum?: PurchaseSumAggregateInputType;
    _min?: PurchaseMinAggregateInputType;
    _max?: PurchaseMaxAggregateInputType;
};
export type GetPurchaseAggregateType<T extends PurchaseAggregateArgs> = {
    [P in keyof T & keyof AggregatePurchase]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePurchase[P]> : Prisma.GetScalarType<T[P], AggregatePurchase[P]>;
};
export type PurchaseGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PurchaseWhereInput;
    orderBy?: Prisma.PurchaseOrderByWithAggregationInput | Prisma.PurchaseOrderByWithAggregationInput[];
    by: Prisma.PurchaseScalarFieldEnum[] | Prisma.PurchaseScalarFieldEnum;
    having?: Prisma.PurchaseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PurchaseCountAggregateInputType | true;
    _avg?: PurchaseAvgAggregateInputType;
    _sum?: PurchaseSumAggregateInputType;
    _min?: PurchaseMinAggregateInputType;
    _max?: PurchaseMaxAggregateInputType;
};
export type PurchaseGroupByOutputType = {
    id: string;
    userId: string;
    scriptId: string;
    paymentId: string | null;
    pricePaid: number;
    currency: $Enums.Currency;
    purchasedAt: Date;
    lastDownloadedVersionId: string | null;
    grantedByAdmin: boolean;
    _count: PurchaseCountAggregateOutputType | null;
    _avg: PurchaseAvgAggregateOutputType | null;
    _sum: PurchaseSumAggregateOutputType | null;
    _min: PurchaseMinAggregateOutputType | null;
    _max: PurchaseMaxAggregateOutputType | null;
};
export type GetPurchaseGroupByPayload<T extends PurchaseGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PurchaseGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PurchaseGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PurchaseGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PurchaseGroupByOutputType[P]>;
}>>;
export type PurchaseWhereInput = {
    AND?: Prisma.PurchaseWhereInput | Prisma.PurchaseWhereInput[];
    OR?: Prisma.PurchaseWhereInput[];
    NOT?: Prisma.PurchaseWhereInput | Prisma.PurchaseWhereInput[];
    id?: Prisma.StringFilter<"Purchase"> | string;
    userId?: Prisma.StringFilter<"Purchase"> | string;
    scriptId?: Prisma.StringFilter<"Purchase"> | string;
    paymentId?: Prisma.StringNullableFilter<"Purchase"> | string | null;
    pricePaid?: Prisma.IntFilter<"Purchase"> | number;
    currency?: Prisma.EnumCurrencyFilter<"Purchase"> | $Enums.Currency;
    purchasedAt?: Prisma.DateTimeFilter<"Purchase"> | Date | string;
    lastDownloadedVersionId?: Prisma.StringNullableFilter<"Purchase"> | string | null;
    grantedByAdmin?: Prisma.BoolFilter<"Purchase"> | boolean;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    script?: Prisma.XOR<Prisma.ScriptScalarRelationFilter, Prisma.ScriptWhereInput>;
    payment?: Prisma.XOR<Prisma.PaymentNullableScalarRelationFilter, Prisma.PaymentWhereInput> | null;
    lastDownloadedVersion?: Prisma.XOR<Prisma.ScriptVersionNullableScalarRelationFilter, Prisma.ScriptVersionWhereInput> | null;
};
export type PurchaseOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    scriptId?: Prisma.SortOrder;
    paymentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    pricePaid?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    purchasedAt?: Prisma.SortOrder;
    lastDownloadedVersionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    grantedByAdmin?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    script?: Prisma.ScriptOrderByWithRelationInput;
    payment?: Prisma.PaymentOrderByWithRelationInput;
    lastDownloadedVersion?: Prisma.ScriptVersionOrderByWithRelationInput;
};
export type PurchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    paymentId?: string;
    userId_scriptId?: Prisma.PurchaseUserIdScriptIdCompoundUniqueInput;
    AND?: Prisma.PurchaseWhereInput | Prisma.PurchaseWhereInput[];
    OR?: Prisma.PurchaseWhereInput[];
    NOT?: Prisma.PurchaseWhereInput | Prisma.PurchaseWhereInput[];
    userId?: Prisma.StringFilter<"Purchase"> | string;
    scriptId?: Prisma.StringFilter<"Purchase"> | string;
    pricePaid?: Prisma.IntFilter<"Purchase"> | number;
    currency?: Prisma.EnumCurrencyFilter<"Purchase"> | $Enums.Currency;
    purchasedAt?: Prisma.DateTimeFilter<"Purchase"> | Date | string;
    lastDownloadedVersionId?: Prisma.StringNullableFilter<"Purchase"> | string | null;
    grantedByAdmin?: Prisma.BoolFilter<"Purchase"> | boolean;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    script?: Prisma.XOR<Prisma.ScriptScalarRelationFilter, Prisma.ScriptWhereInput>;
    payment?: Prisma.XOR<Prisma.PaymentNullableScalarRelationFilter, Prisma.PaymentWhereInput> | null;
    lastDownloadedVersion?: Prisma.XOR<Prisma.ScriptVersionNullableScalarRelationFilter, Prisma.ScriptVersionWhereInput> | null;
}, "id" | "paymentId" | "userId_scriptId">;
export type PurchaseOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    scriptId?: Prisma.SortOrder;
    paymentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    pricePaid?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    purchasedAt?: Prisma.SortOrder;
    lastDownloadedVersionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    grantedByAdmin?: Prisma.SortOrder;
    _count?: Prisma.PurchaseCountOrderByAggregateInput;
    _avg?: Prisma.PurchaseAvgOrderByAggregateInput;
    _max?: Prisma.PurchaseMaxOrderByAggregateInput;
    _min?: Prisma.PurchaseMinOrderByAggregateInput;
    _sum?: Prisma.PurchaseSumOrderByAggregateInput;
};
export type PurchaseScalarWhereWithAggregatesInput = {
    AND?: Prisma.PurchaseScalarWhereWithAggregatesInput | Prisma.PurchaseScalarWhereWithAggregatesInput[];
    OR?: Prisma.PurchaseScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PurchaseScalarWhereWithAggregatesInput | Prisma.PurchaseScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Purchase"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Purchase"> | string;
    scriptId?: Prisma.StringWithAggregatesFilter<"Purchase"> | string;
    paymentId?: Prisma.StringNullableWithAggregatesFilter<"Purchase"> | string | null;
    pricePaid?: Prisma.IntWithAggregatesFilter<"Purchase"> | number;
    currency?: Prisma.EnumCurrencyWithAggregatesFilter<"Purchase"> | $Enums.Currency;
    purchasedAt?: Prisma.DateTimeWithAggregatesFilter<"Purchase"> | Date | string;
    lastDownloadedVersionId?: Prisma.StringNullableWithAggregatesFilter<"Purchase"> | string | null;
    grantedByAdmin?: Prisma.BoolWithAggregatesFilter<"Purchase"> | boolean;
};
export type PurchaseCreateInput = {
    id?: string;
    pricePaid: number;
    currency: $Enums.Currency;
    purchasedAt?: Date | string;
    grantedByAdmin?: boolean;
    user: Prisma.UserCreateNestedOneWithoutPurchasesInput;
    script: Prisma.ScriptCreateNestedOneWithoutPurchasesInput;
    payment?: Prisma.PaymentCreateNestedOneWithoutPurchaseInput;
    lastDownloadedVersion?: Prisma.ScriptVersionCreateNestedOneWithoutPurchasesLastDownloadedInput;
};
export type PurchaseUncheckedCreateInput = {
    id?: string;
    userId: string;
    scriptId: string;
    paymentId?: string | null;
    pricePaid: number;
    currency: $Enums.Currency;
    purchasedAt?: Date | string;
    lastDownloadedVersionId?: string | null;
    grantedByAdmin?: boolean;
};
export type PurchaseUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pricePaid?: Prisma.IntFieldUpdateOperationsInput | number;
    currency?: Prisma.EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    purchasedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    grantedByAdmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    user?: Prisma.UserUpdateOneRequiredWithoutPurchasesNestedInput;
    script?: Prisma.ScriptUpdateOneRequiredWithoutPurchasesNestedInput;
    payment?: Prisma.PaymentUpdateOneWithoutPurchaseNestedInput;
    lastDownloadedVersion?: Prisma.ScriptVersionUpdateOneWithoutPurchasesLastDownloadedNestedInput;
};
export type PurchaseUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    scriptId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pricePaid?: Prisma.IntFieldUpdateOperationsInput | number;
    currency?: Prisma.EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    purchasedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastDownloadedVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grantedByAdmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PurchaseCreateManyInput = {
    id?: string;
    userId: string;
    scriptId: string;
    paymentId?: string | null;
    pricePaid: number;
    currency: $Enums.Currency;
    purchasedAt?: Date | string;
    lastDownloadedVersionId?: string | null;
    grantedByAdmin?: boolean;
};
export type PurchaseUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pricePaid?: Prisma.IntFieldUpdateOperationsInput | number;
    currency?: Prisma.EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    purchasedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    grantedByAdmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PurchaseUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    scriptId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pricePaid?: Prisma.IntFieldUpdateOperationsInput | number;
    currency?: Prisma.EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    purchasedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastDownloadedVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grantedByAdmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PurchaseListRelationFilter = {
    every?: Prisma.PurchaseWhereInput;
    some?: Prisma.PurchaseWhereInput;
    none?: Prisma.PurchaseWhereInput;
};
export type PurchaseOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PurchaseUserIdScriptIdCompoundUniqueInput = {
    userId: string;
    scriptId: string;
};
export type PurchaseCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    scriptId?: Prisma.SortOrder;
    paymentId?: Prisma.SortOrder;
    pricePaid?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    purchasedAt?: Prisma.SortOrder;
    lastDownloadedVersionId?: Prisma.SortOrder;
    grantedByAdmin?: Prisma.SortOrder;
};
export type PurchaseAvgOrderByAggregateInput = {
    pricePaid?: Prisma.SortOrder;
};
export type PurchaseMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    scriptId?: Prisma.SortOrder;
    paymentId?: Prisma.SortOrder;
    pricePaid?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    purchasedAt?: Prisma.SortOrder;
    lastDownloadedVersionId?: Prisma.SortOrder;
    grantedByAdmin?: Prisma.SortOrder;
};
export type PurchaseMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    scriptId?: Prisma.SortOrder;
    paymentId?: Prisma.SortOrder;
    pricePaid?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    purchasedAt?: Prisma.SortOrder;
    lastDownloadedVersionId?: Prisma.SortOrder;
    grantedByAdmin?: Prisma.SortOrder;
};
export type PurchaseSumOrderByAggregateInput = {
    pricePaid?: Prisma.SortOrder;
};
export type PurchaseNullableScalarRelationFilter = {
    is?: Prisma.PurchaseWhereInput | null;
    isNot?: Prisma.PurchaseWhereInput | null;
};
export type PurchaseCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutUserInput, Prisma.PurchaseUncheckedCreateWithoutUserInput> | Prisma.PurchaseCreateWithoutUserInput[] | Prisma.PurchaseUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutUserInput | Prisma.PurchaseCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PurchaseCreateManyUserInputEnvelope;
    connect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
};
export type PurchaseUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutUserInput, Prisma.PurchaseUncheckedCreateWithoutUserInput> | Prisma.PurchaseCreateWithoutUserInput[] | Prisma.PurchaseUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutUserInput | Prisma.PurchaseCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PurchaseCreateManyUserInputEnvelope;
    connect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
};
export type PurchaseUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutUserInput, Prisma.PurchaseUncheckedCreateWithoutUserInput> | Prisma.PurchaseCreateWithoutUserInput[] | Prisma.PurchaseUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutUserInput | Prisma.PurchaseCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PurchaseUpsertWithWhereUniqueWithoutUserInput | Prisma.PurchaseUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PurchaseCreateManyUserInputEnvelope;
    set?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    disconnect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    delete?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    connect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    update?: Prisma.PurchaseUpdateWithWhereUniqueWithoutUserInput | Prisma.PurchaseUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PurchaseUpdateManyWithWhereWithoutUserInput | Prisma.PurchaseUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PurchaseScalarWhereInput | Prisma.PurchaseScalarWhereInput[];
};
export type PurchaseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutUserInput, Prisma.PurchaseUncheckedCreateWithoutUserInput> | Prisma.PurchaseCreateWithoutUserInput[] | Prisma.PurchaseUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutUserInput | Prisma.PurchaseCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PurchaseUpsertWithWhereUniqueWithoutUserInput | Prisma.PurchaseUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PurchaseCreateManyUserInputEnvelope;
    set?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    disconnect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    delete?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    connect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    update?: Prisma.PurchaseUpdateWithWhereUniqueWithoutUserInput | Prisma.PurchaseUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PurchaseUpdateManyWithWhereWithoutUserInput | Prisma.PurchaseUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PurchaseScalarWhereInput | Prisma.PurchaseScalarWhereInput[];
};
export type PurchaseCreateNestedManyWithoutScriptInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutScriptInput, Prisma.PurchaseUncheckedCreateWithoutScriptInput> | Prisma.PurchaseCreateWithoutScriptInput[] | Prisma.PurchaseUncheckedCreateWithoutScriptInput[];
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutScriptInput | Prisma.PurchaseCreateOrConnectWithoutScriptInput[];
    createMany?: Prisma.PurchaseCreateManyScriptInputEnvelope;
    connect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
};
export type PurchaseUncheckedCreateNestedManyWithoutScriptInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutScriptInput, Prisma.PurchaseUncheckedCreateWithoutScriptInput> | Prisma.PurchaseCreateWithoutScriptInput[] | Prisma.PurchaseUncheckedCreateWithoutScriptInput[];
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutScriptInput | Prisma.PurchaseCreateOrConnectWithoutScriptInput[];
    createMany?: Prisma.PurchaseCreateManyScriptInputEnvelope;
    connect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
};
export type PurchaseUpdateManyWithoutScriptNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutScriptInput, Prisma.PurchaseUncheckedCreateWithoutScriptInput> | Prisma.PurchaseCreateWithoutScriptInput[] | Prisma.PurchaseUncheckedCreateWithoutScriptInput[];
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutScriptInput | Prisma.PurchaseCreateOrConnectWithoutScriptInput[];
    upsert?: Prisma.PurchaseUpsertWithWhereUniqueWithoutScriptInput | Prisma.PurchaseUpsertWithWhereUniqueWithoutScriptInput[];
    createMany?: Prisma.PurchaseCreateManyScriptInputEnvelope;
    set?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    disconnect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    delete?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    connect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    update?: Prisma.PurchaseUpdateWithWhereUniqueWithoutScriptInput | Prisma.PurchaseUpdateWithWhereUniqueWithoutScriptInput[];
    updateMany?: Prisma.PurchaseUpdateManyWithWhereWithoutScriptInput | Prisma.PurchaseUpdateManyWithWhereWithoutScriptInput[];
    deleteMany?: Prisma.PurchaseScalarWhereInput | Prisma.PurchaseScalarWhereInput[];
};
export type PurchaseUncheckedUpdateManyWithoutScriptNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutScriptInput, Prisma.PurchaseUncheckedCreateWithoutScriptInput> | Prisma.PurchaseCreateWithoutScriptInput[] | Prisma.PurchaseUncheckedCreateWithoutScriptInput[];
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutScriptInput | Prisma.PurchaseCreateOrConnectWithoutScriptInput[];
    upsert?: Prisma.PurchaseUpsertWithWhereUniqueWithoutScriptInput | Prisma.PurchaseUpsertWithWhereUniqueWithoutScriptInput[];
    createMany?: Prisma.PurchaseCreateManyScriptInputEnvelope;
    set?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    disconnect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    delete?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    connect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    update?: Prisma.PurchaseUpdateWithWhereUniqueWithoutScriptInput | Prisma.PurchaseUpdateWithWhereUniqueWithoutScriptInput[];
    updateMany?: Prisma.PurchaseUpdateManyWithWhereWithoutScriptInput | Prisma.PurchaseUpdateManyWithWhereWithoutScriptInput[];
    deleteMany?: Prisma.PurchaseScalarWhereInput | Prisma.PurchaseScalarWhereInput[];
};
export type PurchaseCreateNestedManyWithoutLastDownloadedVersionInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutLastDownloadedVersionInput, Prisma.PurchaseUncheckedCreateWithoutLastDownloadedVersionInput> | Prisma.PurchaseCreateWithoutLastDownloadedVersionInput[] | Prisma.PurchaseUncheckedCreateWithoutLastDownloadedVersionInput[];
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutLastDownloadedVersionInput | Prisma.PurchaseCreateOrConnectWithoutLastDownloadedVersionInput[];
    createMany?: Prisma.PurchaseCreateManyLastDownloadedVersionInputEnvelope;
    connect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
};
export type PurchaseUncheckedCreateNestedManyWithoutLastDownloadedVersionInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutLastDownloadedVersionInput, Prisma.PurchaseUncheckedCreateWithoutLastDownloadedVersionInput> | Prisma.PurchaseCreateWithoutLastDownloadedVersionInput[] | Prisma.PurchaseUncheckedCreateWithoutLastDownloadedVersionInput[];
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutLastDownloadedVersionInput | Prisma.PurchaseCreateOrConnectWithoutLastDownloadedVersionInput[];
    createMany?: Prisma.PurchaseCreateManyLastDownloadedVersionInputEnvelope;
    connect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
};
export type PurchaseUpdateManyWithoutLastDownloadedVersionNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutLastDownloadedVersionInput, Prisma.PurchaseUncheckedCreateWithoutLastDownloadedVersionInput> | Prisma.PurchaseCreateWithoutLastDownloadedVersionInput[] | Prisma.PurchaseUncheckedCreateWithoutLastDownloadedVersionInput[];
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutLastDownloadedVersionInput | Prisma.PurchaseCreateOrConnectWithoutLastDownloadedVersionInput[];
    upsert?: Prisma.PurchaseUpsertWithWhereUniqueWithoutLastDownloadedVersionInput | Prisma.PurchaseUpsertWithWhereUniqueWithoutLastDownloadedVersionInput[];
    createMany?: Prisma.PurchaseCreateManyLastDownloadedVersionInputEnvelope;
    set?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    disconnect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    delete?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    connect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    update?: Prisma.PurchaseUpdateWithWhereUniqueWithoutLastDownloadedVersionInput | Prisma.PurchaseUpdateWithWhereUniqueWithoutLastDownloadedVersionInput[];
    updateMany?: Prisma.PurchaseUpdateManyWithWhereWithoutLastDownloadedVersionInput | Prisma.PurchaseUpdateManyWithWhereWithoutLastDownloadedVersionInput[];
    deleteMany?: Prisma.PurchaseScalarWhereInput | Prisma.PurchaseScalarWhereInput[];
};
export type PurchaseUncheckedUpdateManyWithoutLastDownloadedVersionNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutLastDownloadedVersionInput, Prisma.PurchaseUncheckedCreateWithoutLastDownloadedVersionInput> | Prisma.PurchaseCreateWithoutLastDownloadedVersionInput[] | Prisma.PurchaseUncheckedCreateWithoutLastDownloadedVersionInput[];
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutLastDownloadedVersionInput | Prisma.PurchaseCreateOrConnectWithoutLastDownloadedVersionInput[];
    upsert?: Prisma.PurchaseUpsertWithWhereUniqueWithoutLastDownloadedVersionInput | Prisma.PurchaseUpsertWithWhereUniqueWithoutLastDownloadedVersionInput[];
    createMany?: Prisma.PurchaseCreateManyLastDownloadedVersionInputEnvelope;
    set?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    disconnect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    delete?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    connect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    update?: Prisma.PurchaseUpdateWithWhereUniqueWithoutLastDownloadedVersionInput | Prisma.PurchaseUpdateWithWhereUniqueWithoutLastDownloadedVersionInput[];
    updateMany?: Prisma.PurchaseUpdateManyWithWhereWithoutLastDownloadedVersionInput | Prisma.PurchaseUpdateManyWithWhereWithoutLastDownloadedVersionInput[];
    deleteMany?: Prisma.PurchaseScalarWhereInput | Prisma.PurchaseScalarWhereInput[];
};
export type EnumCurrencyFieldUpdateOperationsInput = {
    set?: $Enums.Currency;
};
export type PurchaseCreateNestedOneWithoutPaymentInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutPaymentInput, Prisma.PurchaseUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutPaymentInput;
    connect?: Prisma.PurchaseWhereUniqueInput;
};
export type PurchaseUncheckedCreateNestedOneWithoutPaymentInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutPaymentInput, Prisma.PurchaseUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutPaymentInput;
    connect?: Prisma.PurchaseWhereUniqueInput;
};
export type PurchaseUpdateOneWithoutPaymentNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutPaymentInput, Prisma.PurchaseUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutPaymentInput;
    upsert?: Prisma.PurchaseUpsertWithoutPaymentInput;
    disconnect?: Prisma.PurchaseWhereInput | boolean;
    delete?: Prisma.PurchaseWhereInput | boolean;
    connect?: Prisma.PurchaseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PurchaseUpdateToOneWithWhereWithoutPaymentInput, Prisma.PurchaseUpdateWithoutPaymentInput>, Prisma.PurchaseUncheckedUpdateWithoutPaymentInput>;
};
export type PurchaseUncheckedUpdateOneWithoutPaymentNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutPaymentInput, Prisma.PurchaseUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutPaymentInput;
    upsert?: Prisma.PurchaseUpsertWithoutPaymentInput;
    disconnect?: Prisma.PurchaseWhereInput | boolean;
    delete?: Prisma.PurchaseWhereInput | boolean;
    connect?: Prisma.PurchaseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PurchaseUpdateToOneWithWhereWithoutPaymentInput, Prisma.PurchaseUpdateWithoutPaymentInput>, Prisma.PurchaseUncheckedUpdateWithoutPaymentInput>;
};
export type PurchaseCreateWithoutUserInput = {
    id?: string;
    pricePaid: number;
    currency: $Enums.Currency;
    purchasedAt?: Date | string;
    grantedByAdmin?: boolean;
    script: Prisma.ScriptCreateNestedOneWithoutPurchasesInput;
    payment?: Prisma.PaymentCreateNestedOneWithoutPurchaseInput;
    lastDownloadedVersion?: Prisma.ScriptVersionCreateNestedOneWithoutPurchasesLastDownloadedInput;
};
export type PurchaseUncheckedCreateWithoutUserInput = {
    id?: string;
    scriptId: string;
    paymentId?: string | null;
    pricePaid: number;
    currency: $Enums.Currency;
    purchasedAt?: Date | string;
    lastDownloadedVersionId?: string | null;
    grantedByAdmin?: boolean;
};
export type PurchaseCreateOrConnectWithoutUserInput = {
    where: Prisma.PurchaseWhereUniqueInput;
    create: Prisma.XOR<Prisma.PurchaseCreateWithoutUserInput, Prisma.PurchaseUncheckedCreateWithoutUserInput>;
};
export type PurchaseCreateManyUserInputEnvelope = {
    data: Prisma.PurchaseCreateManyUserInput | Prisma.PurchaseCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type PurchaseUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.PurchaseWhereUniqueInput;
    update: Prisma.XOR<Prisma.PurchaseUpdateWithoutUserInput, Prisma.PurchaseUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.PurchaseCreateWithoutUserInput, Prisma.PurchaseUncheckedCreateWithoutUserInput>;
};
export type PurchaseUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.PurchaseWhereUniqueInput;
    data: Prisma.XOR<Prisma.PurchaseUpdateWithoutUserInput, Prisma.PurchaseUncheckedUpdateWithoutUserInput>;
};
export type PurchaseUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.PurchaseScalarWhereInput;
    data: Prisma.XOR<Prisma.PurchaseUpdateManyMutationInput, Prisma.PurchaseUncheckedUpdateManyWithoutUserInput>;
};
export type PurchaseScalarWhereInput = {
    AND?: Prisma.PurchaseScalarWhereInput | Prisma.PurchaseScalarWhereInput[];
    OR?: Prisma.PurchaseScalarWhereInput[];
    NOT?: Prisma.PurchaseScalarWhereInput | Prisma.PurchaseScalarWhereInput[];
    id?: Prisma.StringFilter<"Purchase"> | string;
    userId?: Prisma.StringFilter<"Purchase"> | string;
    scriptId?: Prisma.StringFilter<"Purchase"> | string;
    paymentId?: Prisma.StringNullableFilter<"Purchase"> | string | null;
    pricePaid?: Prisma.IntFilter<"Purchase"> | number;
    currency?: Prisma.EnumCurrencyFilter<"Purchase"> | $Enums.Currency;
    purchasedAt?: Prisma.DateTimeFilter<"Purchase"> | Date | string;
    lastDownloadedVersionId?: Prisma.StringNullableFilter<"Purchase"> | string | null;
    grantedByAdmin?: Prisma.BoolFilter<"Purchase"> | boolean;
};
export type PurchaseCreateWithoutScriptInput = {
    id?: string;
    pricePaid: number;
    currency: $Enums.Currency;
    purchasedAt?: Date | string;
    grantedByAdmin?: boolean;
    user: Prisma.UserCreateNestedOneWithoutPurchasesInput;
    payment?: Prisma.PaymentCreateNestedOneWithoutPurchaseInput;
    lastDownloadedVersion?: Prisma.ScriptVersionCreateNestedOneWithoutPurchasesLastDownloadedInput;
};
export type PurchaseUncheckedCreateWithoutScriptInput = {
    id?: string;
    userId: string;
    paymentId?: string | null;
    pricePaid: number;
    currency: $Enums.Currency;
    purchasedAt?: Date | string;
    lastDownloadedVersionId?: string | null;
    grantedByAdmin?: boolean;
};
export type PurchaseCreateOrConnectWithoutScriptInput = {
    where: Prisma.PurchaseWhereUniqueInput;
    create: Prisma.XOR<Prisma.PurchaseCreateWithoutScriptInput, Prisma.PurchaseUncheckedCreateWithoutScriptInput>;
};
export type PurchaseCreateManyScriptInputEnvelope = {
    data: Prisma.PurchaseCreateManyScriptInput | Prisma.PurchaseCreateManyScriptInput[];
    skipDuplicates?: boolean;
};
export type PurchaseUpsertWithWhereUniqueWithoutScriptInput = {
    where: Prisma.PurchaseWhereUniqueInput;
    update: Prisma.XOR<Prisma.PurchaseUpdateWithoutScriptInput, Prisma.PurchaseUncheckedUpdateWithoutScriptInput>;
    create: Prisma.XOR<Prisma.PurchaseCreateWithoutScriptInput, Prisma.PurchaseUncheckedCreateWithoutScriptInput>;
};
export type PurchaseUpdateWithWhereUniqueWithoutScriptInput = {
    where: Prisma.PurchaseWhereUniqueInput;
    data: Prisma.XOR<Prisma.PurchaseUpdateWithoutScriptInput, Prisma.PurchaseUncheckedUpdateWithoutScriptInput>;
};
export type PurchaseUpdateManyWithWhereWithoutScriptInput = {
    where: Prisma.PurchaseScalarWhereInput;
    data: Prisma.XOR<Prisma.PurchaseUpdateManyMutationInput, Prisma.PurchaseUncheckedUpdateManyWithoutScriptInput>;
};
export type PurchaseCreateWithoutLastDownloadedVersionInput = {
    id?: string;
    pricePaid: number;
    currency: $Enums.Currency;
    purchasedAt?: Date | string;
    grantedByAdmin?: boolean;
    user: Prisma.UserCreateNestedOneWithoutPurchasesInput;
    script: Prisma.ScriptCreateNestedOneWithoutPurchasesInput;
    payment?: Prisma.PaymentCreateNestedOneWithoutPurchaseInput;
};
export type PurchaseUncheckedCreateWithoutLastDownloadedVersionInput = {
    id?: string;
    userId: string;
    scriptId: string;
    paymentId?: string | null;
    pricePaid: number;
    currency: $Enums.Currency;
    purchasedAt?: Date | string;
    grantedByAdmin?: boolean;
};
export type PurchaseCreateOrConnectWithoutLastDownloadedVersionInput = {
    where: Prisma.PurchaseWhereUniqueInput;
    create: Prisma.XOR<Prisma.PurchaseCreateWithoutLastDownloadedVersionInput, Prisma.PurchaseUncheckedCreateWithoutLastDownloadedVersionInput>;
};
export type PurchaseCreateManyLastDownloadedVersionInputEnvelope = {
    data: Prisma.PurchaseCreateManyLastDownloadedVersionInput | Prisma.PurchaseCreateManyLastDownloadedVersionInput[];
    skipDuplicates?: boolean;
};
export type PurchaseUpsertWithWhereUniqueWithoutLastDownloadedVersionInput = {
    where: Prisma.PurchaseWhereUniqueInput;
    update: Prisma.XOR<Prisma.PurchaseUpdateWithoutLastDownloadedVersionInput, Prisma.PurchaseUncheckedUpdateWithoutLastDownloadedVersionInput>;
    create: Prisma.XOR<Prisma.PurchaseCreateWithoutLastDownloadedVersionInput, Prisma.PurchaseUncheckedCreateWithoutLastDownloadedVersionInput>;
};
export type PurchaseUpdateWithWhereUniqueWithoutLastDownloadedVersionInput = {
    where: Prisma.PurchaseWhereUniqueInput;
    data: Prisma.XOR<Prisma.PurchaseUpdateWithoutLastDownloadedVersionInput, Prisma.PurchaseUncheckedUpdateWithoutLastDownloadedVersionInput>;
};
export type PurchaseUpdateManyWithWhereWithoutLastDownloadedVersionInput = {
    where: Prisma.PurchaseScalarWhereInput;
    data: Prisma.XOR<Prisma.PurchaseUpdateManyMutationInput, Prisma.PurchaseUncheckedUpdateManyWithoutLastDownloadedVersionInput>;
};
export type PurchaseCreateWithoutPaymentInput = {
    id?: string;
    pricePaid: number;
    currency: $Enums.Currency;
    purchasedAt?: Date | string;
    grantedByAdmin?: boolean;
    user: Prisma.UserCreateNestedOneWithoutPurchasesInput;
    script: Prisma.ScriptCreateNestedOneWithoutPurchasesInput;
    lastDownloadedVersion?: Prisma.ScriptVersionCreateNestedOneWithoutPurchasesLastDownloadedInput;
};
export type PurchaseUncheckedCreateWithoutPaymentInput = {
    id?: string;
    userId: string;
    scriptId: string;
    pricePaid: number;
    currency: $Enums.Currency;
    purchasedAt?: Date | string;
    lastDownloadedVersionId?: string | null;
    grantedByAdmin?: boolean;
};
export type PurchaseCreateOrConnectWithoutPaymentInput = {
    where: Prisma.PurchaseWhereUniqueInput;
    create: Prisma.XOR<Prisma.PurchaseCreateWithoutPaymentInput, Prisma.PurchaseUncheckedCreateWithoutPaymentInput>;
};
export type PurchaseUpsertWithoutPaymentInput = {
    update: Prisma.XOR<Prisma.PurchaseUpdateWithoutPaymentInput, Prisma.PurchaseUncheckedUpdateWithoutPaymentInput>;
    create: Prisma.XOR<Prisma.PurchaseCreateWithoutPaymentInput, Prisma.PurchaseUncheckedCreateWithoutPaymentInput>;
    where?: Prisma.PurchaseWhereInput;
};
export type PurchaseUpdateToOneWithWhereWithoutPaymentInput = {
    where?: Prisma.PurchaseWhereInput;
    data: Prisma.XOR<Prisma.PurchaseUpdateWithoutPaymentInput, Prisma.PurchaseUncheckedUpdateWithoutPaymentInput>;
};
export type PurchaseUpdateWithoutPaymentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pricePaid?: Prisma.IntFieldUpdateOperationsInput | number;
    currency?: Prisma.EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    purchasedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    grantedByAdmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    user?: Prisma.UserUpdateOneRequiredWithoutPurchasesNestedInput;
    script?: Prisma.ScriptUpdateOneRequiredWithoutPurchasesNestedInput;
    lastDownloadedVersion?: Prisma.ScriptVersionUpdateOneWithoutPurchasesLastDownloadedNestedInput;
};
export type PurchaseUncheckedUpdateWithoutPaymentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    scriptId?: Prisma.StringFieldUpdateOperationsInput | string;
    pricePaid?: Prisma.IntFieldUpdateOperationsInput | number;
    currency?: Prisma.EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    purchasedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastDownloadedVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grantedByAdmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PurchaseCreateManyUserInput = {
    id?: string;
    scriptId: string;
    paymentId?: string | null;
    pricePaid: number;
    currency: $Enums.Currency;
    purchasedAt?: Date | string;
    lastDownloadedVersionId?: string | null;
    grantedByAdmin?: boolean;
};
export type PurchaseUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pricePaid?: Prisma.IntFieldUpdateOperationsInput | number;
    currency?: Prisma.EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    purchasedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    grantedByAdmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    script?: Prisma.ScriptUpdateOneRequiredWithoutPurchasesNestedInput;
    payment?: Prisma.PaymentUpdateOneWithoutPurchaseNestedInput;
    lastDownloadedVersion?: Prisma.ScriptVersionUpdateOneWithoutPurchasesLastDownloadedNestedInput;
};
export type PurchaseUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scriptId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pricePaid?: Prisma.IntFieldUpdateOperationsInput | number;
    currency?: Prisma.EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    purchasedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastDownloadedVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grantedByAdmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PurchaseUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scriptId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pricePaid?: Prisma.IntFieldUpdateOperationsInput | number;
    currency?: Prisma.EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    purchasedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastDownloadedVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grantedByAdmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PurchaseCreateManyScriptInput = {
    id?: string;
    userId: string;
    paymentId?: string | null;
    pricePaid: number;
    currency: $Enums.Currency;
    purchasedAt?: Date | string;
    lastDownloadedVersionId?: string | null;
    grantedByAdmin?: boolean;
};
export type PurchaseUpdateWithoutScriptInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pricePaid?: Prisma.IntFieldUpdateOperationsInput | number;
    currency?: Prisma.EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    purchasedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    grantedByAdmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    user?: Prisma.UserUpdateOneRequiredWithoutPurchasesNestedInput;
    payment?: Prisma.PaymentUpdateOneWithoutPurchaseNestedInput;
    lastDownloadedVersion?: Prisma.ScriptVersionUpdateOneWithoutPurchasesLastDownloadedNestedInput;
};
export type PurchaseUncheckedUpdateWithoutScriptInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pricePaid?: Prisma.IntFieldUpdateOperationsInput | number;
    currency?: Prisma.EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    purchasedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastDownloadedVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grantedByAdmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PurchaseUncheckedUpdateManyWithoutScriptInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pricePaid?: Prisma.IntFieldUpdateOperationsInput | number;
    currency?: Prisma.EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    purchasedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastDownloadedVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grantedByAdmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PurchaseCreateManyLastDownloadedVersionInput = {
    id?: string;
    userId: string;
    scriptId: string;
    paymentId?: string | null;
    pricePaid: number;
    currency: $Enums.Currency;
    purchasedAt?: Date | string;
    grantedByAdmin?: boolean;
};
export type PurchaseUpdateWithoutLastDownloadedVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pricePaid?: Prisma.IntFieldUpdateOperationsInput | number;
    currency?: Prisma.EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    purchasedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    grantedByAdmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    user?: Prisma.UserUpdateOneRequiredWithoutPurchasesNestedInput;
    script?: Prisma.ScriptUpdateOneRequiredWithoutPurchasesNestedInput;
    payment?: Prisma.PaymentUpdateOneWithoutPurchaseNestedInput;
};
export type PurchaseUncheckedUpdateWithoutLastDownloadedVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    scriptId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pricePaid?: Prisma.IntFieldUpdateOperationsInput | number;
    currency?: Prisma.EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    purchasedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    grantedByAdmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PurchaseUncheckedUpdateManyWithoutLastDownloadedVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    scriptId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pricePaid?: Prisma.IntFieldUpdateOperationsInput | number;
    currency?: Prisma.EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
    purchasedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    grantedByAdmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PurchaseSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    scriptId?: boolean;
    paymentId?: boolean;
    pricePaid?: boolean;
    currency?: boolean;
    purchasedAt?: boolean;
    lastDownloadedVersionId?: boolean;
    grantedByAdmin?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    script?: boolean | Prisma.ScriptDefaultArgs<ExtArgs>;
    payment?: boolean | Prisma.Purchase$paymentArgs<ExtArgs>;
    lastDownloadedVersion?: boolean | Prisma.Purchase$lastDownloadedVersionArgs<ExtArgs>;
}, ExtArgs["result"]["purchase"]>;
export type PurchaseSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    scriptId?: boolean;
    paymentId?: boolean;
    pricePaid?: boolean;
    currency?: boolean;
    purchasedAt?: boolean;
    lastDownloadedVersionId?: boolean;
    grantedByAdmin?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    script?: boolean | Prisma.ScriptDefaultArgs<ExtArgs>;
    payment?: boolean | Prisma.Purchase$paymentArgs<ExtArgs>;
    lastDownloadedVersion?: boolean | Prisma.Purchase$lastDownloadedVersionArgs<ExtArgs>;
}, ExtArgs["result"]["purchase"]>;
export type PurchaseSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    scriptId?: boolean;
    paymentId?: boolean;
    pricePaid?: boolean;
    currency?: boolean;
    purchasedAt?: boolean;
    lastDownloadedVersionId?: boolean;
    grantedByAdmin?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    script?: boolean | Prisma.ScriptDefaultArgs<ExtArgs>;
    payment?: boolean | Prisma.Purchase$paymentArgs<ExtArgs>;
    lastDownloadedVersion?: boolean | Prisma.Purchase$lastDownloadedVersionArgs<ExtArgs>;
}, ExtArgs["result"]["purchase"]>;
export type PurchaseSelectScalar = {
    id?: boolean;
    userId?: boolean;
    scriptId?: boolean;
    paymentId?: boolean;
    pricePaid?: boolean;
    currency?: boolean;
    purchasedAt?: boolean;
    lastDownloadedVersionId?: boolean;
    grantedByAdmin?: boolean;
};
export type PurchaseOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "scriptId" | "paymentId" | "pricePaid" | "currency" | "purchasedAt" | "lastDownloadedVersionId" | "grantedByAdmin", ExtArgs["result"]["purchase"]>;
export type PurchaseInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    script?: boolean | Prisma.ScriptDefaultArgs<ExtArgs>;
    payment?: boolean | Prisma.Purchase$paymentArgs<ExtArgs>;
    lastDownloadedVersion?: boolean | Prisma.Purchase$lastDownloadedVersionArgs<ExtArgs>;
};
export type PurchaseIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    script?: boolean | Prisma.ScriptDefaultArgs<ExtArgs>;
    payment?: boolean | Prisma.Purchase$paymentArgs<ExtArgs>;
    lastDownloadedVersion?: boolean | Prisma.Purchase$lastDownloadedVersionArgs<ExtArgs>;
};
export type PurchaseIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    script?: boolean | Prisma.ScriptDefaultArgs<ExtArgs>;
    payment?: boolean | Prisma.Purchase$paymentArgs<ExtArgs>;
    lastDownloadedVersion?: boolean | Prisma.Purchase$lastDownloadedVersionArgs<ExtArgs>;
};
export type $PurchasePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Purchase";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        script: Prisma.$ScriptPayload<ExtArgs>;
        payment: Prisma.$PaymentPayload<ExtArgs> | null;
        lastDownloadedVersion: Prisma.$ScriptVersionPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        scriptId: string;
        paymentId: string | null;
        pricePaid: number;
        currency: $Enums.Currency;
        purchasedAt: Date;
        lastDownloadedVersionId: string | null;
        grantedByAdmin: boolean;
    }, ExtArgs["result"]["purchase"]>;
    composites: {};
};
export type PurchaseGetPayload<S extends boolean | null | undefined | PurchaseDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PurchasePayload, S>;
export type PurchaseCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PurchaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PurchaseCountAggregateInputType | true;
};
export interface PurchaseDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Purchase'];
        meta: {
            name: 'Purchase';
        };
    };
    findUnique<T extends PurchaseFindUniqueArgs>(args: Prisma.SelectSubset<T, PurchaseFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PurchaseClient<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PurchaseFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PurchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PurchaseClient<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PurchaseFindFirstArgs>(args?: Prisma.SelectSubset<T, PurchaseFindFirstArgs<ExtArgs>>): Prisma.Prisma__PurchaseClient<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PurchaseFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PurchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PurchaseClient<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PurchaseFindManyArgs>(args?: Prisma.SelectSubset<T, PurchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PurchaseCreateArgs>(args: Prisma.SelectSubset<T, PurchaseCreateArgs<ExtArgs>>): Prisma.Prisma__PurchaseClient<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PurchaseCreateManyArgs>(args?: Prisma.SelectSubset<T, PurchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PurchaseCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PurchaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PurchaseDeleteArgs>(args: Prisma.SelectSubset<T, PurchaseDeleteArgs<ExtArgs>>): Prisma.Prisma__PurchaseClient<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PurchaseUpdateArgs>(args: Prisma.SelectSubset<T, PurchaseUpdateArgs<ExtArgs>>): Prisma.Prisma__PurchaseClient<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PurchaseDeleteManyArgs>(args?: Prisma.SelectSubset<T, PurchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PurchaseUpdateManyArgs>(args: Prisma.SelectSubset<T, PurchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PurchaseUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PurchaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PurchaseUpsertArgs>(args: Prisma.SelectSubset<T, PurchaseUpsertArgs<ExtArgs>>): Prisma.Prisma__PurchaseClient<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PurchaseCountArgs>(args?: Prisma.Subset<T, PurchaseCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PurchaseCountAggregateOutputType> : number>;
    aggregate<T extends PurchaseAggregateArgs>(args: Prisma.Subset<T, PurchaseAggregateArgs>): Prisma.PrismaPromise<GetPurchaseAggregateType<T>>;
    groupBy<T extends PurchaseGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PurchaseGroupByArgs['orderBy'];
    } : {
        orderBy?: PurchaseGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PurchaseFieldRefs;
}
export interface Prisma__PurchaseClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    script<T extends Prisma.ScriptDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ScriptDefaultArgs<ExtArgs>>): Prisma.Prisma__ScriptClient<runtime.Types.Result.GetResult<Prisma.$ScriptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    payment<T extends Prisma.Purchase$paymentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Purchase$paymentArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    lastDownloadedVersion<T extends Prisma.Purchase$lastDownloadedVersionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Purchase$lastDownloadedVersionArgs<ExtArgs>>): Prisma.Prisma__ScriptVersionClient<runtime.Types.Result.GetResult<Prisma.$ScriptVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PurchaseFieldRefs {
    readonly id: Prisma.FieldRef<"Purchase", 'String'>;
    readonly userId: Prisma.FieldRef<"Purchase", 'String'>;
    readonly scriptId: Prisma.FieldRef<"Purchase", 'String'>;
    readonly paymentId: Prisma.FieldRef<"Purchase", 'String'>;
    readonly pricePaid: Prisma.FieldRef<"Purchase", 'Int'>;
    readonly currency: Prisma.FieldRef<"Purchase", 'Currency'>;
    readonly purchasedAt: Prisma.FieldRef<"Purchase", 'DateTime'>;
    readonly lastDownloadedVersionId: Prisma.FieldRef<"Purchase", 'String'>;
    readonly grantedByAdmin: Prisma.FieldRef<"Purchase", 'Boolean'>;
}
export type PurchaseFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    include?: Prisma.PurchaseInclude<ExtArgs> | null;
    where: Prisma.PurchaseWhereUniqueInput;
};
export type PurchaseFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    include?: Prisma.PurchaseInclude<ExtArgs> | null;
    where: Prisma.PurchaseWhereUniqueInput;
};
export type PurchaseFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    include?: Prisma.PurchaseInclude<ExtArgs> | null;
    where?: Prisma.PurchaseWhereInput;
    orderBy?: Prisma.PurchaseOrderByWithRelationInput | Prisma.PurchaseOrderByWithRelationInput[];
    cursor?: Prisma.PurchaseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PurchaseScalarFieldEnum | Prisma.PurchaseScalarFieldEnum[];
};
export type PurchaseFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    include?: Prisma.PurchaseInclude<ExtArgs> | null;
    where?: Prisma.PurchaseWhereInput;
    orderBy?: Prisma.PurchaseOrderByWithRelationInput | Prisma.PurchaseOrderByWithRelationInput[];
    cursor?: Prisma.PurchaseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PurchaseScalarFieldEnum | Prisma.PurchaseScalarFieldEnum[];
};
export type PurchaseFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    include?: Prisma.PurchaseInclude<ExtArgs> | null;
    where?: Prisma.PurchaseWhereInput;
    orderBy?: Prisma.PurchaseOrderByWithRelationInput | Prisma.PurchaseOrderByWithRelationInput[];
    cursor?: Prisma.PurchaseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PurchaseScalarFieldEnum | Prisma.PurchaseScalarFieldEnum[];
};
export type PurchaseCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    include?: Prisma.PurchaseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PurchaseCreateInput, Prisma.PurchaseUncheckedCreateInput>;
};
export type PurchaseCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PurchaseCreateManyInput | Prisma.PurchaseCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PurchaseCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    data: Prisma.PurchaseCreateManyInput | Prisma.PurchaseCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PurchaseIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PurchaseUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    include?: Prisma.PurchaseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PurchaseUpdateInput, Prisma.PurchaseUncheckedUpdateInput>;
    where: Prisma.PurchaseWhereUniqueInput;
};
export type PurchaseUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PurchaseUpdateManyMutationInput, Prisma.PurchaseUncheckedUpdateManyInput>;
    where?: Prisma.PurchaseWhereInput;
    limit?: number;
};
export type PurchaseUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PurchaseUpdateManyMutationInput, Prisma.PurchaseUncheckedUpdateManyInput>;
    where?: Prisma.PurchaseWhereInput;
    limit?: number;
    include?: Prisma.PurchaseIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PurchaseUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    include?: Prisma.PurchaseInclude<ExtArgs> | null;
    where: Prisma.PurchaseWhereUniqueInput;
    create: Prisma.XOR<Prisma.PurchaseCreateInput, Prisma.PurchaseUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PurchaseUpdateInput, Prisma.PurchaseUncheckedUpdateInput>;
};
export type PurchaseDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    include?: Prisma.PurchaseInclude<ExtArgs> | null;
    where: Prisma.PurchaseWhereUniqueInput;
};
export type PurchaseDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PurchaseWhereInput;
    limit?: number;
};
export type Purchase$paymentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    where?: Prisma.PaymentWhereInput;
};
export type Purchase$lastDownloadedVersionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptVersionSelect<ExtArgs> | null;
    omit?: Prisma.ScriptVersionOmit<ExtArgs> | null;
    include?: Prisma.ScriptVersionInclude<ExtArgs> | null;
    where?: Prisma.ScriptVersionWhereInput;
};
export type PurchaseDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    include?: Prisma.PurchaseInclude<ExtArgs> | null;
};
