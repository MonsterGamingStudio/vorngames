import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type ScriptVersionModel = runtime.Types.Result.DefaultSelection<Prisma.$ScriptVersionPayload>;
export type AggregateScriptVersion = {
    _count: ScriptVersionCountAggregateOutputType | null;
    _avg: ScriptVersionAvgAggregateOutputType | null;
    _sum: ScriptVersionSumAggregateOutputType | null;
    _min: ScriptVersionMinAggregateOutputType | null;
    _max: ScriptVersionMaxAggregateOutputType | null;
};
export type ScriptVersionAvgAggregateOutputType = {
    fileSize: number | null;
};
export type ScriptVersionSumAggregateOutputType = {
    fileSize: number | null;
};
export type ScriptVersionMinAggregateOutputType = {
    id: string | null;
    scriptId: string | null;
    versionLabel: string | null;
    storageKey: string | null;
    fileName: string | null;
    fileSize: number | null;
    checksum: string | null;
    releasedAt: Date | null;
    isCurrent: boolean | null;
    createdAt: Date | null;
};
export type ScriptVersionMaxAggregateOutputType = {
    id: string | null;
    scriptId: string | null;
    versionLabel: string | null;
    storageKey: string | null;
    fileName: string | null;
    fileSize: number | null;
    checksum: string | null;
    releasedAt: Date | null;
    isCurrent: boolean | null;
    createdAt: Date | null;
};
export type ScriptVersionCountAggregateOutputType = {
    id: number;
    scriptId: number;
    versionLabel: number;
    storageKey: number;
    fileName: number;
    fileSize: number;
    checksum: number;
    releasedAt: number;
    isCurrent: number;
    createdAt: number;
    _all: number;
};
export type ScriptVersionAvgAggregateInputType = {
    fileSize?: true;
};
export type ScriptVersionSumAggregateInputType = {
    fileSize?: true;
};
export type ScriptVersionMinAggregateInputType = {
    id?: true;
    scriptId?: true;
    versionLabel?: true;
    storageKey?: true;
    fileName?: true;
    fileSize?: true;
    checksum?: true;
    releasedAt?: true;
    isCurrent?: true;
    createdAt?: true;
};
export type ScriptVersionMaxAggregateInputType = {
    id?: true;
    scriptId?: true;
    versionLabel?: true;
    storageKey?: true;
    fileName?: true;
    fileSize?: true;
    checksum?: true;
    releasedAt?: true;
    isCurrent?: true;
    createdAt?: true;
};
export type ScriptVersionCountAggregateInputType = {
    id?: true;
    scriptId?: true;
    versionLabel?: true;
    storageKey?: true;
    fileName?: true;
    fileSize?: true;
    checksum?: true;
    releasedAt?: true;
    isCurrent?: true;
    createdAt?: true;
    _all?: true;
};
export type ScriptVersionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScriptVersionWhereInput;
    orderBy?: Prisma.ScriptVersionOrderByWithRelationInput | Prisma.ScriptVersionOrderByWithRelationInput[];
    cursor?: Prisma.ScriptVersionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ScriptVersionCountAggregateInputType;
    _avg?: ScriptVersionAvgAggregateInputType;
    _sum?: ScriptVersionSumAggregateInputType;
    _min?: ScriptVersionMinAggregateInputType;
    _max?: ScriptVersionMaxAggregateInputType;
};
export type GetScriptVersionAggregateType<T extends ScriptVersionAggregateArgs> = {
    [P in keyof T & keyof AggregateScriptVersion]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateScriptVersion[P]> : Prisma.GetScalarType<T[P], AggregateScriptVersion[P]>;
};
export type ScriptVersionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScriptVersionWhereInput;
    orderBy?: Prisma.ScriptVersionOrderByWithAggregationInput | Prisma.ScriptVersionOrderByWithAggregationInput[];
    by: Prisma.ScriptVersionScalarFieldEnum[] | Prisma.ScriptVersionScalarFieldEnum;
    having?: Prisma.ScriptVersionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ScriptVersionCountAggregateInputType | true;
    _avg?: ScriptVersionAvgAggregateInputType;
    _sum?: ScriptVersionSumAggregateInputType;
    _min?: ScriptVersionMinAggregateInputType;
    _max?: ScriptVersionMaxAggregateInputType;
};
export type ScriptVersionGroupByOutputType = {
    id: string;
    scriptId: string;
    versionLabel: string;
    storageKey: string;
    fileName: string;
    fileSize: number;
    checksum: string | null;
    releasedAt: Date;
    isCurrent: boolean;
    createdAt: Date;
    _count: ScriptVersionCountAggregateOutputType | null;
    _avg: ScriptVersionAvgAggregateOutputType | null;
    _sum: ScriptVersionSumAggregateOutputType | null;
    _min: ScriptVersionMinAggregateOutputType | null;
    _max: ScriptVersionMaxAggregateOutputType | null;
};
export type GetScriptVersionGroupByPayload<T extends ScriptVersionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ScriptVersionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ScriptVersionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ScriptVersionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ScriptVersionGroupByOutputType[P]>;
}>>;
export type ScriptVersionWhereInput = {
    AND?: Prisma.ScriptVersionWhereInput | Prisma.ScriptVersionWhereInput[];
    OR?: Prisma.ScriptVersionWhereInput[];
    NOT?: Prisma.ScriptVersionWhereInput | Prisma.ScriptVersionWhereInput[];
    id?: Prisma.StringFilter<"ScriptVersion"> | string;
    scriptId?: Prisma.StringFilter<"ScriptVersion"> | string;
    versionLabel?: Prisma.StringFilter<"ScriptVersion"> | string;
    storageKey?: Prisma.StringFilter<"ScriptVersion"> | string;
    fileName?: Prisma.StringFilter<"ScriptVersion"> | string;
    fileSize?: Prisma.IntFilter<"ScriptVersion"> | number;
    checksum?: Prisma.StringNullableFilter<"ScriptVersion"> | string | null;
    releasedAt?: Prisma.DateTimeFilter<"ScriptVersion"> | Date | string;
    isCurrent?: Prisma.BoolFilter<"ScriptVersion"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"ScriptVersion"> | Date | string;
    script?: Prisma.XOR<Prisma.ScriptScalarRelationFilter, Prisma.ScriptWhereInput>;
    purchasesLastDownloaded?: Prisma.PurchaseListRelationFilter;
};
export type ScriptVersionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    scriptId?: Prisma.SortOrder;
    versionLabel?: Prisma.SortOrder;
    storageKey?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    fileSize?: Prisma.SortOrder;
    checksum?: Prisma.SortOrderInput | Prisma.SortOrder;
    releasedAt?: Prisma.SortOrder;
    isCurrent?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    script?: Prisma.ScriptOrderByWithRelationInput;
    purchasesLastDownloaded?: Prisma.PurchaseOrderByRelationAggregateInput;
};
export type ScriptVersionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ScriptVersionWhereInput | Prisma.ScriptVersionWhereInput[];
    OR?: Prisma.ScriptVersionWhereInput[];
    NOT?: Prisma.ScriptVersionWhereInput | Prisma.ScriptVersionWhereInput[];
    scriptId?: Prisma.StringFilter<"ScriptVersion"> | string;
    versionLabel?: Prisma.StringFilter<"ScriptVersion"> | string;
    storageKey?: Prisma.StringFilter<"ScriptVersion"> | string;
    fileName?: Prisma.StringFilter<"ScriptVersion"> | string;
    fileSize?: Prisma.IntFilter<"ScriptVersion"> | number;
    checksum?: Prisma.StringNullableFilter<"ScriptVersion"> | string | null;
    releasedAt?: Prisma.DateTimeFilter<"ScriptVersion"> | Date | string;
    isCurrent?: Prisma.BoolFilter<"ScriptVersion"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"ScriptVersion"> | Date | string;
    script?: Prisma.XOR<Prisma.ScriptScalarRelationFilter, Prisma.ScriptWhereInput>;
    purchasesLastDownloaded?: Prisma.PurchaseListRelationFilter;
}, "id">;
export type ScriptVersionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    scriptId?: Prisma.SortOrder;
    versionLabel?: Prisma.SortOrder;
    storageKey?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    fileSize?: Prisma.SortOrder;
    checksum?: Prisma.SortOrderInput | Prisma.SortOrder;
    releasedAt?: Prisma.SortOrder;
    isCurrent?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ScriptVersionCountOrderByAggregateInput;
    _avg?: Prisma.ScriptVersionAvgOrderByAggregateInput;
    _max?: Prisma.ScriptVersionMaxOrderByAggregateInput;
    _min?: Prisma.ScriptVersionMinOrderByAggregateInput;
    _sum?: Prisma.ScriptVersionSumOrderByAggregateInput;
};
export type ScriptVersionScalarWhereWithAggregatesInput = {
    AND?: Prisma.ScriptVersionScalarWhereWithAggregatesInput | Prisma.ScriptVersionScalarWhereWithAggregatesInput[];
    OR?: Prisma.ScriptVersionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ScriptVersionScalarWhereWithAggregatesInput | Prisma.ScriptVersionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ScriptVersion"> | string;
    scriptId?: Prisma.StringWithAggregatesFilter<"ScriptVersion"> | string;
    versionLabel?: Prisma.StringWithAggregatesFilter<"ScriptVersion"> | string;
    storageKey?: Prisma.StringWithAggregatesFilter<"ScriptVersion"> | string;
    fileName?: Prisma.StringWithAggregatesFilter<"ScriptVersion"> | string;
    fileSize?: Prisma.IntWithAggregatesFilter<"ScriptVersion"> | number;
    checksum?: Prisma.StringNullableWithAggregatesFilter<"ScriptVersion"> | string | null;
    releasedAt?: Prisma.DateTimeWithAggregatesFilter<"ScriptVersion"> | Date | string;
    isCurrent?: Prisma.BoolWithAggregatesFilter<"ScriptVersion"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ScriptVersion"> | Date | string;
};
export type ScriptVersionCreateInput = {
    id?: string;
    versionLabel: string;
    storageKey: string;
    fileName: string;
    fileSize: number;
    checksum?: string | null;
    releasedAt?: Date | string;
    isCurrent?: boolean;
    createdAt?: Date | string;
    script: Prisma.ScriptCreateNestedOneWithoutVersionsInput;
    purchasesLastDownloaded?: Prisma.PurchaseCreateNestedManyWithoutLastDownloadedVersionInput;
};
export type ScriptVersionUncheckedCreateInput = {
    id?: string;
    scriptId: string;
    versionLabel: string;
    storageKey: string;
    fileName: string;
    fileSize: number;
    checksum?: string | null;
    releasedAt?: Date | string;
    isCurrent?: boolean;
    createdAt?: Date | string;
    purchasesLastDownloaded?: Prisma.PurchaseUncheckedCreateNestedManyWithoutLastDownloadedVersionInput;
};
export type ScriptVersionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    versionLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    fileSize?: Prisma.IntFieldUpdateOperationsInput | number;
    checksum?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    releasedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    script?: Prisma.ScriptUpdateOneRequiredWithoutVersionsNestedInput;
    purchasesLastDownloaded?: Prisma.PurchaseUpdateManyWithoutLastDownloadedVersionNestedInput;
};
export type ScriptVersionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scriptId?: Prisma.StringFieldUpdateOperationsInput | string;
    versionLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    fileSize?: Prisma.IntFieldUpdateOperationsInput | number;
    checksum?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    releasedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    purchasesLastDownloaded?: Prisma.PurchaseUncheckedUpdateManyWithoutLastDownloadedVersionNestedInput;
};
export type ScriptVersionCreateManyInput = {
    id?: string;
    scriptId: string;
    versionLabel: string;
    storageKey: string;
    fileName: string;
    fileSize: number;
    checksum?: string | null;
    releasedAt?: Date | string;
    isCurrent?: boolean;
    createdAt?: Date | string;
};
export type ScriptVersionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    versionLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    fileSize?: Prisma.IntFieldUpdateOperationsInput | number;
    checksum?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    releasedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScriptVersionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scriptId?: Prisma.StringFieldUpdateOperationsInput | string;
    versionLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    fileSize?: Prisma.IntFieldUpdateOperationsInput | number;
    checksum?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    releasedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScriptVersionListRelationFilter = {
    every?: Prisma.ScriptVersionWhereInput;
    some?: Prisma.ScriptVersionWhereInput;
    none?: Prisma.ScriptVersionWhereInput;
};
export type ScriptVersionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ScriptVersionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    scriptId?: Prisma.SortOrder;
    versionLabel?: Prisma.SortOrder;
    storageKey?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    fileSize?: Prisma.SortOrder;
    checksum?: Prisma.SortOrder;
    releasedAt?: Prisma.SortOrder;
    isCurrent?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ScriptVersionAvgOrderByAggregateInput = {
    fileSize?: Prisma.SortOrder;
};
export type ScriptVersionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    scriptId?: Prisma.SortOrder;
    versionLabel?: Prisma.SortOrder;
    storageKey?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    fileSize?: Prisma.SortOrder;
    checksum?: Prisma.SortOrder;
    releasedAt?: Prisma.SortOrder;
    isCurrent?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ScriptVersionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    scriptId?: Prisma.SortOrder;
    versionLabel?: Prisma.SortOrder;
    storageKey?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    fileSize?: Prisma.SortOrder;
    checksum?: Prisma.SortOrder;
    releasedAt?: Prisma.SortOrder;
    isCurrent?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ScriptVersionSumOrderByAggregateInput = {
    fileSize?: Prisma.SortOrder;
};
export type ScriptVersionNullableScalarRelationFilter = {
    is?: Prisma.ScriptVersionWhereInput | null;
    isNot?: Prisma.ScriptVersionWhereInput | null;
};
export type ScriptVersionCreateNestedManyWithoutScriptInput = {
    create?: Prisma.XOR<Prisma.ScriptVersionCreateWithoutScriptInput, Prisma.ScriptVersionUncheckedCreateWithoutScriptInput> | Prisma.ScriptVersionCreateWithoutScriptInput[] | Prisma.ScriptVersionUncheckedCreateWithoutScriptInput[];
    connectOrCreate?: Prisma.ScriptVersionCreateOrConnectWithoutScriptInput | Prisma.ScriptVersionCreateOrConnectWithoutScriptInput[];
    createMany?: Prisma.ScriptVersionCreateManyScriptInputEnvelope;
    connect?: Prisma.ScriptVersionWhereUniqueInput | Prisma.ScriptVersionWhereUniqueInput[];
};
export type ScriptVersionUncheckedCreateNestedManyWithoutScriptInput = {
    create?: Prisma.XOR<Prisma.ScriptVersionCreateWithoutScriptInput, Prisma.ScriptVersionUncheckedCreateWithoutScriptInput> | Prisma.ScriptVersionCreateWithoutScriptInput[] | Prisma.ScriptVersionUncheckedCreateWithoutScriptInput[];
    connectOrCreate?: Prisma.ScriptVersionCreateOrConnectWithoutScriptInput | Prisma.ScriptVersionCreateOrConnectWithoutScriptInput[];
    createMany?: Prisma.ScriptVersionCreateManyScriptInputEnvelope;
    connect?: Prisma.ScriptVersionWhereUniqueInput | Prisma.ScriptVersionWhereUniqueInput[];
};
export type ScriptVersionUpdateManyWithoutScriptNestedInput = {
    create?: Prisma.XOR<Prisma.ScriptVersionCreateWithoutScriptInput, Prisma.ScriptVersionUncheckedCreateWithoutScriptInput> | Prisma.ScriptVersionCreateWithoutScriptInput[] | Prisma.ScriptVersionUncheckedCreateWithoutScriptInput[];
    connectOrCreate?: Prisma.ScriptVersionCreateOrConnectWithoutScriptInput | Prisma.ScriptVersionCreateOrConnectWithoutScriptInput[];
    upsert?: Prisma.ScriptVersionUpsertWithWhereUniqueWithoutScriptInput | Prisma.ScriptVersionUpsertWithWhereUniqueWithoutScriptInput[];
    createMany?: Prisma.ScriptVersionCreateManyScriptInputEnvelope;
    set?: Prisma.ScriptVersionWhereUniqueInput | Prisma.ScriptVersionWhereUniqueInput[];
    disconnect?: Prisma.ScriptVersionWhereUniqueInput | Prisma.ScriptVersionWhereUniqueInput[];
    delete?: Prisma.ScriptVersionWhereUniqueInput | Prisma.ScriptVersionWhereUniqueInput[];
    connect?: Prisma.ScriptVersionWhereUniqueInput | Prisma.ScriptVersionWhereUniqueInput[];
    update?: Prisma.ScriptVersionUpdateWithWhereUniqueWithoutScriptInput | Prisma.ScriptVersionUpdateWithWhereUniqueWithoutScriptInput[];
    updateMany?: Prisma.ScriptVersionUpdateManyWithWhereWithoutScriptInput | Prisma.ScriptVersionUpdateManyWithWhereWithoutScriptInput[];
    deleteMany?: Prisma.ScriptVersionScalarWhereInput | Prisma.ScriptVersionScalarWhereInput[];
};
export type ScriptVersionUncheckedUpdateManyWithoutScriptNestedInput = {
    create?: Prisma.XOR<Prisma.ScriptVersionCreateWithoutScriptInput, Prisma.ScriptVersionUncheckedCreateWithoutScriptInput> | Prisma.ScriptVersionCreateWithoutScriptInput[] | Prisma.ScriptVersionUncheckedCreateWithoutScriptInput[];
    connectOrCreate?: Prisma.ScriptVersionCreateOrConnectWithoutScriptInput | Prisma.ScriptVersionCreateOrConnectWithoutScriptInput[];
    upsert?: Prisma.ScriptVersionUpsertWithWhereUniqueWithoutScriptInput | Prisma.ScriptVersionUpsertWithWhereUniqueWithoutScriptInput[];
    createMany?: Prisma.ScriptVersionCreateManyScriptInputEnvelope;
    set?: Prisma.ScriptVersionWhereUniqueInput | Prisma.ScriptVersionWhereUniqueInput[];
    disconnect?: Prisma.ScriptVersionWhereUniqueInput | Prisma.ScriptVersionWhereUniqueInput[];
    delete?: Prisma.ScriptVersionWhereUniqueInput | Prisma.ScriptVersionWhereUniqueInput[];
    connect?: Prisma.ScriptVersionWhereUniqueInput | Prisma.ScriptVersionWhereUniqueInput[];
    update?: Prisma.ScriptVersionUpdateWithWhereUniqueWithoutScriptInput | Prisma.ScriptVersionUpdateWithWhereUniqueWithoutScriptInput[];
    updateMany?: Prisma.ScriptVersionUpdateManyWithWhereWithoutScriptInput | Prisma.ScriptVersionUpdateManyWithWhereWithoutScriptInput[];
    deleteMany?: Prisma.ScriptVersionScalarWhereInput | Prisma.ScriptVersionScalarWhereInput[];
};
export type ScriptVersionCreateNestedOneWithoutPurchasesLastDownloadedInput = {
    create?: Prisma.XOR<Prisma.ScriptVersionCreateWithoutPurchasesLastDownloadedInput, Prisma.ScriptVersionUncheckedCreateWithoutPurchasesLastDownloadedInput>;
    connectOrCreate?: Prisma.ScriptVersionCreateOrConnectWithoutPurchasesLastDownloadedInput;
    connect?: Prisma.ScriptVersionWhereUniqueInput;
};
export type ScriptVersionUpdateOneWithoutPurchasesLastDownloadedNestedInput = {
    create?: Prisma.XOR<Prisma.ScriptVersionCreateWithoutPurchasesLastDownloadedInput, Prisma.ScriptVersionUncheckedCreateWithoutPurchasesLastDownloadedInput>;
    connectOrCreate?: Prisma.ScriptVersionCreateOrConnectWithoutPurchasesLastDownloadedInput;
    upsert?: Prisma.ScriptVersionUpsertWithoutPurchasesLastDownloadedInput;
    disconnect?: Prisma.ScriptVersionWhereInput | boolean;
    delete?: Prisma.ScriptVersionWhereInput | boolean;
    connect?: Prisma.ScriptVersionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ScriptVersionUpdateToOneWithWhereWithoutPurchasesLastDownloadedInput, Prisma.ScriptVersionUpdateWithoutPurchasesLastDownloadedInput>, Prisma.ScriptVersionUncheckedUpdateWithoutPurchasesLastDownloadedInput>;
};
export type ScriptVersionCreateWithoutScriptInput = {
    id?: string;
    versionLabel: string;
    storageKey: string;
    fileName: string;
    fileSize: number;
    checksum?: string | null;
    releasedAt?: Date | string;
    isCurrent?: boolean;
    createdAt?: Date | string;
    purchasesLastDownloaded?: Prisma.PurchaseCreateNestedManyWithoutLastDownloadedVersionInput;
};
export type ScriptVersionUncheckedCreateWithoutScriptInput = {
    id?: string;
    versionLabel: string;
    storageKey: string;
    fileName: string;
    fileSize: number;
    checksum?: string | null;
    releasedAt?: Date | string;
    isCurrent?: boolean;
    createdAt?: Date | string;
    purchasesLastDownloaded?: Prisma.PurchaseUncheckedCreateNestedManyWithoutLastDownloadedVersionInput;
};
export type ScriptVersionCreateOrConnectWithoutScriptInput = {
    where: Prisma.ScriptVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ScriptVersionCreateWithoutScriptInput, Prisma.ScriptVersionUncheckedCreateWithoutScriptInput>;
};
export type ScriptVersionCreateManyScriptInputEnvelope = {
    data: Prisma.ScriptVersionCreateManyScriptInput | Prisma.ScriptVersionCreateManyScriptInput[];
    skipDuplicates?: boolean;
};
export type ScriptVersionUpsertWithWhereUniqueWithoutScriptInput = {
    where: Prisma.ScriptVersionWhereUniqueInput;
    update: Prisma.XOR<Prisma.ScriptVersionUpdateWithoutScriptInput, Prisma.ScriptVersionUncheckedUpdateWithoutScriptInput>;
    create: Prisma.XOR<Prisma.ScriptVersionCreateWithoutScriptInput, Prisma.ScriptVersionUncheckedCreateWithoutScriptInput>;
};
export type ScriptVersionUpdateWithWhereUniqueWithoutScriptInput = {
    where: Prisma.ScriptVersionWhereUniqueInput;
    data: Prisma.XOR<Prisma.ScriptVersionUpdateWithoutScriptInput, Prisma.ScriptVersionUncheckedUpdateWithoutScriptInput>;
};
export type ScriptVersionUpdateManyWithWhereWithoutScriptInput = {
    where: Prisma.ScriptVersionScalarWhereInput;
    data: Prisma.XOR<Prisma.ScriptVersionUpdateManyMutationInput, Prisma.ScriptVersionUncheckedUpdateManyWithoutScriptInput>;
};
export type ScriptVersionScalarWhereInput = {
    AND?: Prisma.ScriptVersionScalarWhereInput | Prisma.ScriptVersionScalarWhereInput[];
    OR?: Prisma.ScriptVersionScalarWhereInput[];
    NOT?: Prisma.ScriptVersionScalarWhereInput | Prisma.ScriptVersionScalarWhereInput[];
    id?: Prisma.StringFilter<"ScriptVersion"> | string;
    scriptId?: Prisma.StringFilter<"ScriptVersion"> | string;
    versionLabel?: Prisma.StringFilter<"ScriptVersion"> | string;
    storageKey?: Prisma.StringFilter<"ScriptVersion"> | string;
    fileName?: Prisma.StringFilter<"ScriptVersion"> | string;
    fileSize?: Prisma.IntFilter<"ScriptVersion"> | number;
    checksum?: Prisma.StringNullableFilter<"ScriptVersion"> | string | null;
    releasedAt?: Prisma.DateTimeFilter<"ScriptVersion"> | Date | string;
    isCurrent?: Prisma.BoolFilter<"ScriptVersion"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"ScriptVersion"> | Date | string;
};
export type ScriptVersionCreateWithoutPurchasesLastDownloadedInput = {
    id?: string;
    versionLabel: string;
    storageKey: string;
    fileName: string;
    fileSize: number;
    checksum?: string | null;
    releasedAt?: Date | string;
    isCurrent?: boolean;
    createdAt?: Date | string;
    script: Prisma.ScriptCreateNestedOneWithoutVersionsInput;
};
export type ScriptVersionUncheckedCreateWithoutPurchasesLastDownloadedInput = {
    id?: string;
    scriptId: string;
    versionLabel: string;
    storageKey: string;
    fileName: string;
    fileSize: number;
    checksum?: string | null;
    releasedAt?: Date | string;
    isCurrent?: boolean;
    createdAt?: Date | string;
};
export type ScriptVersionCreateOrConnectWithoutPurchasesLastDownloadedInput = {
    where: Prisma.ScriptVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ScriptVersionCreateWithoutPurchasesLastDownloadedInput, Prisma.ScriptVersionUncheckedCreateWithoutPurchasesLastDownloadedInput>;
};
export type ScriptVersionUpsertWithoutPurchasesLastDownloadedInput = {
    update: Prisma.XOR<Prisma.ScriptVersionUpdateWithoutPurchasesLastDownloadedInput, Prisma.ScriptVersionUncheckedUpdateWithoutPurchasesLastDownloadedInput>;
    create: Prisma.XOR<Prisma.ScriptVersionCreateWithoutPurchasesLastDownloadedInput, Prisma.ScriptVersionUncheckedCreateWithoutPurchasesLastDownloadedInput>;
    where?: Prisma.ScriptVersionWhereInput;
};
export type ScriptVersionUpdateToOneWithWhereWithoutPurchasesLastDownloadedInput = {
    where?: Prisma.ScriptVersionWhereInput;
    data: Prisma.XOR<Prisma.ScriptVersionUpdateWithoutPurchasesLastDownloadedInput, Prisma.ScriptVersionUncheckedUpdateWithoutPurchasesLastDownloadedInput>;
};
export type ScriptVersionUpdateWithoutPurchasesLastDownloadedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    versionLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    fileSize?: Prisma.IntFieldUpdateOperationsInput | number;
    checksum?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    releasedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    script?: Prisma.ScriptUpdateOneRequiredWithoutVersionsNestedInput;
};
export type ScriptVersionUncheckedUpdateWithoutPurchasesLastDownloadedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scriptId?: Prisma.StringFieldUpdateOperationsInput | string;
    versionLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    fileSize?: Prisma.IntFieldUpdateOperationsInput | number;
    checksum?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    releasedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScriptVersionCreateManyScriptInput = {
    id?: string;
    versionLabel: string;
    storageKey: string;
    fileName: string;
    fileSize: number;
    checksum?: string | null;
    releasedAt?: Date | string;
    isCurrent?: boolean;
    createdAt?: Date | string;
};
export type ScriptVersionUpdateWithoutScriptInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    versionLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    fileSize?: Prisma.IntFieldUpdateOperationsInput | number;
    checksum?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    releasedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    purchasesLastDownloaded?: Prisma.PurchaseUpdateManyWithoutLastDownloadedVersionNestedInput;
};
export type ScriptVersionUncheckedUpdateWithoutScriptInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    versionLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    fileSize?: Prisma.IntFieldUpdateOperationsInput | number;
    checksum?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    releasedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    purchasesLastDownloaded?: Prisma.PurchaseUncheckedUpdateManyWithoutLastDownloadedVersionNestedInput;
};
export type ScriptVersionUncheckedUpdateManyWithoutScriptInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    versionLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    fileSize?: Prisma.IntFieldUpdateOperationsInput | number;
    checksum?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    releasedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScriptVersionCountOutputType = {
    purchasesLastDownloaded: number;
};
export type ScriptVersionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    purchasesLastDownloaded?: boolean | ScriptVersionCountOutputTypeCountPurchasesLastDownloadedArgs;
};
export type ScriptVersionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptVersionCountOutputTypeSelect<ExtArgs> | null;
};
export type ScriptVersionCountOutputTypeCountPurchasesLastDownloadedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PurchaseWhereInput;
};
export type ScriptVersionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    scriptId?: boolean;
    versionLabel?: boolean;
    storageKey?: boolean;
    fileName?: boolean;
    fileSize?: boolean;
    checksum?: boolean;
    releasedAt?: boolean;
    isCurrent?: boolean;
    createdAt?: boolean;
    script?: boolean | Prisma.ScriptDefaultArgs<ExtArgs>;
    purchasesLastDownloaded?: boolean | Prisma.ScriptVersion$purchasesLastDownloadedArgs<ExtArgs>;
    _count?: boolean | Prisma.ScriptVersionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["scriptVersion"]>;
export type ScriptVersionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    scriptId?: boolean;
    versionLabel?: boolean;
    storageKey?: boolean;
    fileName?: boolean;
    fileSize?: boolean;
    checksum?: boolean;
    releasedAt?: boolean;
    isCurrent?: boolean;
    createdAt?: boolean;
    script?: boolean | Prisma.ScriptDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["scriptVersion"]>;
export type ScriptVersionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    scriptId?: boolean;
    versionLabel?: boolean;
    storageKey?: boolean;
    fileName?: boolean;
    fileSize?: boolean;
    checksum?: boolean;
    releasedAt?: boolean;
    isCurrent?: boolean;
    createdAt?: boolean;
    script?: boolean | Prisma.ScriptDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["scriptVersion"]>;
export type ScriptVersionSelectScalar = {
    id?: boolean;
    scriptId?: boolean;
    versionLabel?: boolean;
    storageKey?: boolean;
    fileName?: boolean;
    fileSize?: boolean;
    checksum?: boolean;
    releasedAt?: boolean;
    isCurrent?: boolean;
    createdAt?: boolean;
};
export type ScriptVersionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "scriptId" | "versionLabel" | "storageKey" | "fileName" | "fileSize" | "checksum" | "releasedAt" | "isCurrent" | "createdAt", ExtArgs["result"]["scriptVersion"]>;
export type ScriptVersionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    script?: boolean | Prisma.ScriptDefaultArgs<ExtArgs>;
    purchasesLastDownloaded?: boolean | Prisma.ScriptVersion$purchasesLastDownloadedArgs<ExtArgs>;
    _count?: boolean | Prisma.ScriptVersionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ScriptVersionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    script?: boolean | Prisma.ScriptDefaultArgs<ExtArgs>;
};
export type ScriptVersionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    script?: boolean | Prisma.ScriptDefaultArgs<ExtArgs>;
};
export type $ScriptVersionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ScriptVersion";
    objects: {
        script: Prisma.$ScriptPayload<ExtArgs>;
        purchasesLastDownloaded: Prisma.$PurchasePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        scriptId: string;
        versionLabel: string;
        storageKey: string;
        fileName: string;
        fileSize: number;
        checksum: string | null;
        releasedAt: Date;
        isCurrent: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["scriptVersion"]>;
    composites: {};
};
export type ScriptVersionGetPayload<S extends boolean | null | undefined | ScriptVersionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ScriptVersionPayload, S>;
export type ScriptVersionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ScriptVersionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ScriptVersionCountAggregateInputType | true;
};
export interface ScriptVersionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ScriptVersion'];
        meta: {
            name: 'ScriptVersion';
        };
    };
    findUnique<T extends ScriptVersionFindUniqueArgs>(args: Prisma.SelectSubset<T, ScriptVersionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ScriptVersionClient<runtime.Types.Result.GetResult<Prisma.$ScriptVersionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ScriptVersionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ScriptVersionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ScriptVersionClient<runtime.Types.Result.GetResult<Prisma.$ScriptVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ScriptVersionFindFirstArgs>(args?: Prisma.SelectSubset<T, ScriptVersionFindFirstArgs<ExtArgs>>): Prisma.Prisma__ScriptVersionClient<runtime.Types.Result.GetResult<Prisma.$ScriptVersionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ScriptVersionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ScriptVersionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ScriptVersionClient<runtime.Types.Result.GetResult<Prisma.$ScriptVersionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ScriptVersionFindManyArgs>(args?: Prisma.SelectSubset<T, ScriptVersionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScriptVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ScriptVersionCreateArgs>(args: Prisma.SelectSubset<T, ScriptVersionCreateArgs<ExtArgs>>): Prisma.Prisma__ScriptVersionClient<runtime.Types.Result.GetResult<Prisma.$ScriptVersionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ScriptVersionCreateManyArgs>(args?: Prisma.SelectSubset<T, ScriptVersionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ScriptVersionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ScriptVersionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScriptVersionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ScriptVersionDeleteArgs>(args: Prisma.SelectSubset<T, ScriptVersionDeleteArgs<ExtArgs>>): Prisma.Prisma__ScriptVersionClient<runtime.Types.Result.GetResult<Prisma.$ScriptVersionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ScriptVersionUpdateArgs>(args: Prisma.SelectSubset<T, ScriptVersionUpdateArgs<ExtArgs>>): Prisma.Prisma__ScriptVersionClient<runtime.Types.Result.GetResult<Prisma.$ScriptVersionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ScriptVersionDeleteManyArgs>(args?: Prisma.SelectSubset<T, ScriptVersionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ScriptVersionUpdateManyArgs>(args: Prisma.SelectSubset<T, ScriptVersionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ScriptVersionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ScriptVersionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScriptVersionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ScriptVersionUpsertArgs>(args: Prisma.SelectSubset<T, ScriptVersionUpsertArgs<ExtArgs>>): Prisma.Prisma__ScriptVersionClient<runtime.Types.Result.GetResult<Prisma.$ScriptVersionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ScriptVersionCountArgs>(args?: Prisma.Subset<T, ScriptVersionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ScriptVersionCountAggregateOutputType> : number>;
    aggregate<T extends ScriptVersionAggregateArgs>(args: Prisma.Subset<T, ScriptVersionAggregateArgs>): Prisma.PrismaPromise<GetScriptVersionAggregateType<T>>;
    groupBy<T extends ScriptVersionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ScriptVersionGroupByArgs['orderBy'];
    } : {
        orderBy?: ScriptVersionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ScriptVersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScriptVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ScriptVersionFieldRefs;
}
export interface Prisma__ScriptVersionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    script<T extends Prisma.ScriptDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ScriptDefaultArgs<ExtArgs>>): Prisma.Prisma__ScriptClient<runtime.Types.Result.GetResult<Prisma.$ScriptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    purchasesLastDownloaded<T extends Prisma.ScriptVersion$purchasesLastDownloadedArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ScriptVersion$purchasesLastDownloadedArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ScriptVersionFieldRefs {
    readonly id: Prisma.FieldRef<"ScriptVersion", 'String'>;
    readonly scriptId: Prisma.FieldRef<"ScriptVersion", 'String'>;
    readonly versionLabel: Prisma.FieldRef<"ScriptVersion", 'String'>;
    readonly storageKey: Prisma.FieldRef<"ScriptVersion", 'String'>;
    readonly fileName: Prisma.FieldRef<"ScriptVersion", 'String'>;
    readonly fileSize: Prisma.FieldRef<"ScriptVersion", 'Int'>;
    readonly checksum: Prisma.FieldRef<"ScriptVersion", 'String'>;
    readonly releasedAt: Prisma.FieldRef<"ScriptVersion", 'DateTime'>;
    readonly isCurrent: Prisma.FieldRef<"ScriptVersion", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"ScriptVersion", 'DateTime'>;
}
export type ScriptVersionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptVersionSelect<ExtArgs> | null;
    omit?: Prisma.ScriptVersionOmit<ExtArgs> | null;
    include?: Prisma.ScriptVersionInclude<ExtArgs> | null;
    where: Prisma.ScriptVersionWhereUniqueInput;
};
export type ScriptVersionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptVersionSelect<ExtArgs> | null;
    omit?: Prisma.ScriptVersionOmit<ExtArgs> | null;
    include?: Prisma.ScriptVersionInclude<ExtArgs> | null;
    where: Prisma.ScriptVersionWhereUniqueInput;
};
export type ScriptVersionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptVersionSelect<ExtArgs> | null;
    omit?: Prisma.ScriptVersionOmit<ExtArgs> | null;
    include?: Prisma.ScriptVersionInclude<ExtArgs> | null;
    where?: Prisma.ScriptVersionWhereInput;
    orderBy?: Prisma.ScriptVersionOrderByWithRelationInput | Prisma.ScriptVersionOrderByWithRelationInput[];
    cursor?: Prisma.ScriptVersionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScriptVersionScalarFieldEnum | Prisma.ScriptVersionScalarFieldEnum[];
};
export type ScriptVersionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptVersionSelect<ExtArgs> | null;
    omit?: Prisma.ScriptVersionOmit<ExtArgs> | null;
    include?: Prisma.ScriptVersionInclude<ExtArgs> | null;
    where?: Prisma.ScriptVersionWhereInput;
    orderBy?: Prisma.ScriptVersionOrderByWithRelationInput | Prisma.ScriptVersionOrderByWithRelationInput[];
    cursor?: Prisma.ScriptVersionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScriptVersionScalarFieldEnum | Prisma.ScriptVersionScalarFieldEnum[];
};
export type ScriptVersionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptVersionSelect<ExtArgs> | null;
    omit?: Prisma.ScriptVersionOmit<ExtArgs> | null;
    include?: Prisma.ScriptVersionInclude<ExtArgs> | null;
    where?: Prisma.ScriptVersionWhereInput;
    orderBy?: Prisma.ScriptVersionOrderByWithRelationInput | Prisma.ScriptVersionOrderByWithRelationInput[];
    cursor?: Prisma.ScriptVersionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScriptVersionScalarFieldEnum | Prisma.ScriptVersionScalarFieldEnum[];
};
export type ScriptVersionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptVersionSelect<ExtArgs> | null;
    omit?: Prisma.ScriptVersionOmit<ExtArgs> | null;
    include?: Prisma.ScriptVersionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScriptVersionCreateInput, Prisma.ScriptVersionUncheckedCreateInput>;
};
export type ScriptVersionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ScriptVersionCreateManyInput | Prisma.ScriptVersionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ScriptVersionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptVersionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ScriptVersionOmit<ExtArgs> | null;
    data: Prisma.ScriptVersionCreateManyInput | Prisma.ScriptVersionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ScriptVersionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ScriptVersionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptVersionSelect<ExtArgs> | null;
    omit?: Prisma.ScriptVersionOmit<ExtArgs> | null;
    include?: Prisma.ScriptVersionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScriptVersionUpdateInput, Prisma.ScriptVersionUncheckedUpdateInput>;
    where: Prisma.ScriptVersionWhereUniqueInput;
};
export type ScriptVersionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ScriptVersionUpdateManyMutationInput, Prisma.ScriptVersionUncheckedUpdateManyInput>;
    where?: Prisma.ScriptVersionWhereInput;
    limit?: number;
};
export type ScriptVersionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptVersionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ScriptVersionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScriptVersionUpdateManyMutationInput, Prisma.ScriptVersionUncheckedUpdateManyInput>;
    where?: Prisma.ScriptVersionWhereInput;
    limit?: number;
    include?: Prisma.ScriptVersionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ScriptVersionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptVersionSelect<ExtArgs> | null;
    omit?: Prisma.ScriptVersionOmit<ExtArgs> | null;
    include?: Prisma.ScriptVersionInclude<ExtArgs> | null;
    where: Prisma.ScriptVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ScriptVersionCreateInput, Prisma.ScriptVersionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ScriptVersionUpdateInput, Prisma.ScriptVersionUncheckedUpdateInput>;
};
export type ScriptVersionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptVersionSelect<ExtArgs> | null;
    omit?: Prisma.ScriptVersionOmit<ExtArgs> | null;
    include?: Prisma.ScriptVersionInclude<ExtArgs> | null;
    where: Prisma.ScriptVersionWhereUniqueInput;
};
export type ScriptVersionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScriptVersionWhereInput;
    limit?: number;
};
export type ScriptVersion$purchasesLastDownloadedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ScriptVersionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptVersionSelect<ExtArgs> | null;
    omit?: Prisma.ScriptVersionOmit<ExtArgs> | null;
    include?: Prisma.ScriptVersionInclude<ExtArgs> | null;
};
