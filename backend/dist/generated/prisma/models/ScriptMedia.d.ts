import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type ScriptMediaModel = runtime.Types.Result.DefaultSelection<Prisma.$ScriptMediaPayload>;
export type AggregateScriptMedia = {
    _count: ScriptMediaCountAggregateOutputType | null;
    _avg: ScriptMediaAvgAggregateOutputType | null;
    _sum: ScriptMediaSumAggregateOutputType | null;
    _min: ScriptMediaMinAggregateOutputType | null;
    _max: ScriptMediaMaxAggregateOutputType | null;
};
export type ScriptMediaAvgAggregateOutputType = {
    sortOrder: number | null;
};
export type ScriptMediaSumAggregateOutputType = {
    sortOrder: number | null;
};
export type ScriptMediaMinAggregateOutputType = {
    id: string | null;
    scriptId: string | null;
    type: $Enums.ScriptMediaType | null;
    url: string | null;
    sortOrder: number | null;
    createdAt: Date | null;
};
export type ScriptMediaMaxAggregateOutputType = {
    id: string | null;
    scriptId: string | null;
    type: $Enums.ScriptMediaType | null;
    url: string | null;
    sortOrder: number | null;
    createdAt: Date | null;
};
export type ScriptMediaCountAggregateOutputType = {
    id: number;
    scriptId: number;
    type: number;
    url: number;
    sortOrder: number;
    createdAt: number;
    _all: number;
};
export type ScriptMediaAvgAggregateInputType = {
    sortOrder?: true;
};
export type ScriptMediaSumAggregateInputType = {
    sortOrder?: true;
};
export type ScriptMediaMinAggregateInputType = {
    id?: true;
    scriptId?: true;
    type?: true;
    url?: true;
    sortOrder?: true;
    createdAt?: true;
};
export type ScriptMediaMaxAggregateInputType = {
    id?: true;
    scriptId?: true;
    type?: true;
    url?: true;
    sortOrder?: true;
    createdAt?: true;
};
export type ScriptMediaCountAggregateInputType = {
    id?: true;
    scriptId?: true;
    type?: true;
    url?: true;
    sortOrder?: true;
    createdAt?: true;
    _all?: true;
};
export type ScriptMediaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScriptMediaWhereInput;
    orderBy?: Prisma.ScriptMediaOrderByWithRelationInput | Prisma.ScriptMediaOrderByWithRelationInput[];
    cursor?: Prisma.ScriptMediaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ScriptMediaCountAggregateInputType;
    _avg?: ScriptMediaAvgAggregateInputType;
    _sum?: ScriptMediaSumAggregateInputType;
    _min?: ScriptMediaMinAggregateInputType;
    _max?: ScriptMediaMaxAggregateInputType;
};
export type GetScriptMediaAggregateType<T extends ScriptMediaAggregateArgs> = {
    [P in keyof T & keyof AggregateScriptMedia]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateScriptMedia[P]> : Prisma.GetScalarType<T[P], AggregateScriptMedia[P]>;
};
export type ScriptMediaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScriptMediaWhereInput;
    orderBy?: Prisma.ScriptMediaOrderByWithAggregationInput | Prisma.ScriptMediaOrderByWithAggregationInput[];
    by: Prisma.ScriptMediaScalarFieldEnum[] | Prisma.ScriptMediaScalarFieldEnum;
    having?: Prisma.ScriptMediaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ScriptMediaCountAggregateInputType | true;
    _avg?: ScriptMediaAvgAggregateInputType;
    _sum?: ScriptMediaSumAggregateInputType;
    _min?: ScriptMediaMinAggregateInputType;
    _max?: ScriptMediaMaxAggregateInputType;
};
export type ScriptMediaGroupByOutputType = {
    id: string;
    scriptId: string;
    type: $Enums.ScriptMediaType;
    url: string;
    sortOrder: number;
    createdAt: Date;
    _count: ScriptMediaCountAggregateOutputType | null;
    _avg: ScriptMediaAvgAggregateOutputType | null;
    _sum: ScriptMediaSumAggregateOutputType | null;
    _min: ScriptMediaMinAggregateOutputType | null;
    _max: ScriptMediaMaxAggregateOutputType | null;
};
export type GetScriptMediaGroupByPayload<T extends ScriptMediaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ScriptMediaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ScriptMediaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ScriptMediaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ScriptMediaGroupByOutputType[P]>;
}>>;
export type ScriptMediaWhereInput = {
    AND?: Prisma.ScriptMediaWhereInput | Prisma.ScriptMediaWhereInput[];
    OR?: Prisma.ScriptMediaWhereInput[];
    NOT?: Prisma.ScriptMediaWhereInput | Prisma.ScriptMediaWhereInput[];
    id?: Prisma.StringFilter<"ScriptMedia"> | string;
    scriptId?: Prisma.StringFilter<"ScriptMedia"> | string;
    type?: Prisma.EnumScriptMediaTypeFilter<"ScriptMedia"> | $Enums.ScriptMediaType;
    url?: Prisma.StringFilter<"ScriptMedia"> | string;
    sortOrder?: Prisma.IntFilter<"ScriptMedia"> | number;
    createdAt?: Prisma.DateTimeFilter<"ScriptMedia"> | Date | string;
    script?: Prisma.XOR<Prisma.ScriptScalarRelationFilter, Prisma.ScriptWhereInput>;
};
export type ScriptMediaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    scriptId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    script?: Prisma.ScriptOrderByWithRelationInput;
};
export type ScriptMediaWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ScriptMediaWhereInput | Prisma.ScriptMediaWhereInput[];
    OR?: Prisma.ScriptMediaWhereInput[];
    NOT?: Prisma.ScriptMediaWhereInput | Prisma.ScriptMediaWhereInput[];
    scriptId?: Prisma.StringFilter<"ScriptMedia"> | string;
    type?: Prisma.EnumScriptMediaTypeFilter<"ScriptMedia"> | $Enums.ScriptMediaType;
    url?: Prisma.StringFilter<"ScriptMedia"> | string;
    sortOrder?: Prisma.IntFilter<"ScriptMedia"> | number;
    createdAt?: Prisma.DateTimeFilter<"ScriptMedia"> | Date | string;
    script?: Prisma.XOR<Prisma.ScriptScalarRelationFilter, Prisma.ScriptWhereInput>;
}, "id">;
export type ScriptMediaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    scriptId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ScriptMediaCountOrderByAggregateInput;
    _avg?: Prisma.ScriptMediaAvgOrderByAggregateInput;
    _max?: Prisma.ScriptMediaMaxOrderByAggregateInput;
    _min?: Prisma.ScriptMediaMinOrderByAggregateInput;
    _sum?: Prisma.ScriptMediaSumOrderByAggregateInput;
};
export type ScriptMediaScalarWhereWithAggregatesInput = {
    AND?: Prisma.ScriptMediaScalarWhereWithAggregatesInput | Prisma.ScriptMediaScalarWhereWithAggregatesInput[];
    OR?: Prisma.ScriptMediaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ScriptMediaScalarWhereWithAggregatesInput | Prisma.ScriptMediaScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ScriptMedia"> | string;
    scriptId?: Prisma.StringWithAggregatesFilter<"ScriptMedia"> | string;
    type?: Prisma.EnumScriptMediaTypeWithAggregatesFilter<"ScriptMedia"> | $Enums.ScriptMediaType;
    url?: Prisma.StringWithAggregatesFilter<"ScriptMedia"> | string;
    sortOrder?: Prisma.IntWithAggregatesFilter<"ScriptMedia"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ScriptMedia"> | Date | string;
};
export type ScriptMediaCreateInput = {
    id?: string;
    type: $Enums.ScriptMediaType;
    url: string;
    sortOrder?: number;
    createdAt?: Date | string;
    script: Prisma.ScriptCreateNestedOneWithoutMediaInput;
};
export type ScriptMediaUncheckedCreateInput = {
    id?: string;
    scriptId: string;
    type: $Enums.ScriptMediaType;
    url: string;
    sortOrder?: number;
    createdAt?: Date | string;
};
export type ScriptMediaUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumScriptMediaTypeFieldUpdateOperationsInput | $Enums.ScriptMediaType;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    script?: Prisma.ScriptUpdateOneRequiredWithoutMediaNestedInput;
};
export type ScriptMediaUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scriptId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumScriptMediaTypeFieldUpdateOperationsInput | $Enums.ScriptMediaType;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScriptMediaCreateManyInput = {
    id?: string;
    scriptId: string;
    type: $Enums.ScriptMediaType;
    url: string;
    sortOrder?: number;
    createdAt?: Date | string;
};
export type ScriptMediaUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumScriptMediaTypeFieldUpdateOperationsInput | $Enums.ScriptMediaType;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScriptMediaUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scriptId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumScriptMediaTypeFieldUpdateOperationsInput | $Enums.ScriptMediaType;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScriptMediaListRelationFilter = {
    every?: Prisma.ScriptMediaWhereInput;
    some?: Prisma.ScriptMediaWhereInput;
    none?: Prisma.ScriptMediaWhereInput;
};
export type ScriptMediaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ScriptMediaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    scriptId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ScriptMediaAvgOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type ScriptMediaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    scriptId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ScriptMediaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    scriptId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ScriptMediaSumOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type ScriptMediaCreateNestedManyWithoutScriptInput = {
    create?: Prisma.XOR<Prisma.ScriptMediaCreateWithoutScriptInput, Prisma.ScriptMediaUncheckedCreateWithoutScriptInput> | Prisma.ScriptMediaCreateWithoutScriptInput[] | Prisma.ScriptMediaUncheckedCreateWithoutScriptInput[];
    connectOrCreate?: Prisma.ScriptMediaCreateOrConnectWithoutScriptInput | Prisma.ScriptMediaCreateOrConnectWithoutScriptInput[];
    createMany?: Prisma.ScriptMediaCreateManyScriptInputEnvelope;
    connect?: Prisma.ScriptMediaWhereUniqueInput | Prisma.ScriptMediaWhereUniqueInput[];
};
export type ScriptMediaUncheckedCreateNestedManyWithoutScriptInput = {
    create?: Prisma.XOR<Prisma.ScriptMediaCreateWithoutScriptInput, Prisma.ScriptMediaUncheckedCreateWithoutScriptInput> | Prisma.ScriptMediaCreateWithoutScriptInput[] | Prisma.ScriptMediaUncheckedCreateWithoutScriptInput[];
    connectOrCreate?: Prisma.ScriptMediaCreateOrConnectWithoutScriptInput | Prisma.ScriptMediaCreateOrConnectWithoutScriptInput[];
    createMany?: Prisma.ScriptMediaCreateManyScriptInputEnvelope;
    connect?: Prisma.ScriptMediaWhereUniqueInput | Prisma.ScriptMediaWhereUniqueInput[];
};
export type ScriptMediaUpdateManyWithoutScriptNestedInput = {
    create?: Prisma.XOR<Prisma.ScriptMediaCreateWithoutScriptInput, Prisma.ScriptMediaUncheckedCreateWithoutScriptInput> | Prisma.ScriptMediaCreateWithoutScriptInput[] | Prisma.ScriptMediaUncheckedCreateWithoutScriptInput[];
    connectOrCreate?: Prisma.ScriptMediaCreateOrConnectWithoutScriptInput | Prisma.ScriptMediaCreateOrConnectWithoutScriptInput[];
    upsert?: Prisma.ScriptMediaUpsertWithWhereUniqueWithoutScriptInput | Prisma.ScriptMediaUpsertWithWhereUniqueWithoutScriptInput[];
    createMany?: Prisma.ScriptMediaCreateManyScriptInputEnvelope;
    set?: Prisma.ScriptMediaWhereUniqueInput | Prisma.ScriptMediaWhereUniqueInput[];
    disconnect?: Prisma.ScriptMediaWhereUniqueInput | Prisma.ScriptMediaWhereUniqueInput[];
    delete?: Prisma.ScriptMediaWhereUniqueInput | Prisma.ScriptMediaWhereUniqueInput[];
    connect?: Prisma.ScriptMediaWhereUniqueInput | Prisma.ScriptMediaWhereUniqueInput[];
    update?: Prisma.ScriptMediaUpdateWithWhereUniqueWithoutScriptInput | Prisma.ScriptMediaUpdateWithWhereUniqueWithoutScriptInput[];
    updateMany?: Prisma.ScriptMediaUpdateManyWithWhereWithoutScriptInput | Prisma.ScriptMediaUpdateManyWithWhereWithoutScriptInput[];
    deleteMany?: Prisma.ScriptMediaScalarWhereInput | Prisma.ScriptMediaScalarWhereInput[];
};
export type ScriptMediaUncheckedUpdateManyWithoutScriptNestedInput = {
    create?: Prisma.XOR<Prisma.ScriptMediaCreateWithoutScriptInput, Prisma.ScriptMediaUncheckedCreateWithoutScriptInput> | Prisma.ScriptMediaCreateWithoutScriptInput[] | Prisma.ScriptMediaUncheckedCreateWithoutScriptInput[];
    connectOrCreate?: Prisma.ScriptMediaCreateOrConnectWithoutScriptInput | Prisma.ScriptMediaCreateOrConnectWithoutScriptInput[];
    upsert?: Prisma.ScriptMediaUpsertWithWhereUniqueWithoutScriptInput | Prisma.ScriptMediaUpsertWithWhereUniqueWithoutScriptInput[];
    createMany?: Prisma.ScriptMediaCreateManyScriptInputEnvelope;
    set?: Prisma.ScriptMediaWhereUniqueInput | Prisma.ScriptMediaWhereUniqueInput[];
    disconnect?: Prisma.ScriptMediaWhereUniqueInput | Prisma.ScriptMediaWhereUniqueInput[];
    delete?: Prisma.ScriptMediaWhereUniqueInput | Prisma.ScriptMediaWhereUniqueInput[];
    connect?: Prisma.ScriptMediaWhereUniqueInput | Prisma.ScriptMediaWhereUniqueInput[];
    update?: Prisma.ScriptMediaUpdateWithWhereUniqueWithoutScriptInput | Prisma.ScriptMediaUpdateWithWhereUniqueWithoutScriptInput[];
    updateMany?: Prisma.ScriptMediaUpdateManyWithWhereWithoutScriptInput | Prisma.ScriptMediaUpdateManyWithWhereWithoutScriptInput[];
    deleteMany?: Prisma.ScriptMediaScalarWhereInput | Prisma.ScriptMediaScalarWhereInput[];
};
export type EnumScriptMediaTypeFieldUpdateOperationsInput = {
    set?: $Enums.ScriptMediaType;
};
export type ScriptMediaCreateWithoutScriptInput = {
    id?: string;
    type: $Enums.ScriptMediaType;
    url: string;
    sortOrder?: number;
    createdAt?: Date | string;
};
export type ScriptMediaUncheckedCreateWithoutScriptInput = {
    id?: string;
    type: $Enums.ScriptMediaType;
    url: string;
    sortOrder?: number;
    createdAt?: Date | string;
};
export type ScriptMediaCreateOrConnectWithoutScriptInput = {
    where: Prisma.ScriptMediaWhereUniqueInput;
    create: Prisma.XOR<Prisma.ScriptMediaCreateWithoutScriptInput, Prisma.ScriptMediaUncheckedCreateWithoutScriptInput>;
};
export type ScriptMediaCreateManyScriptInputEnvelope = {
    data: Prisma.ScriptMediaCreateManyScriptInput | Prisma.ScriptMediaCreateManyScriptInput[];
    skipDuplicates?: boolean;
};
export type ScriptMediaUpsertWithWhereUniqueWithoutScriptInput = {
    where: Prisma.ScriptMediaWhereUniqueInput;
    update: Prisma.XOR<Prisma.ScriptMediaUpdateWithoutScriptInput, Prisma.ScriptMediaUncheckedUpdateWithoutScriptInput>;
    create: Prisma.XOR<Prisma.ScriptMediaCreateWithoutScriptInput, Prisma.ScriptMediaUncheckedCreateWithoutScriptInput>;
};
export type ScriptMediaUpdateWithWhereUniqueWithoutScriptInput = {
    where: Prisma.ScriptMediaWhereUniqueInput;
    data: Prisma.XOR<Prisma.ScriptMediaUpdateWithoutScriptInput, Prisma.ScriptMediaUncheckedUpdateWithoutScriptInput>;
};
export type ScriptMediaUpdateManyWithWhereWithoutScriptInput = {
    where: Prisma.ScriptMediaScalarWhereInput;
    data: Prisma.XOR<Prisma.ScriptMediaUpdateManyMutationInput, Prisma.ScriptMediaUncheckedUpdateManyWithoutScriptInput>;
};
export type ScriptMediaScalarWhereInput = {
    AND?: Prisma.ScriptMediaScalarWhereInput | Prisma.ScriptMediaScalarWhereInput[];
    OR?: Prisma.ScriptMediaScalarWhereInput[];
    NOT?: Prisma.ScriptMediaScalarWhereInput | Prisma.ScriptMediaScalarWhereInput[];
    id?: Prisma.StringFilter<"ScriptMedia"> | string;
    scriptId?: Prisma.StringFilter<"ScriptMedia"> | string;
    type?: Prisma.EnumScriptMediaTypeFilter<"ScriptMedia"> | $Enums.ScriptMediaType;
    url?: Prisma.StringFilter<"ScriptMedia"> | string;
    sortOrder?: Prisma.IntFilter<"ScriptMedia"> | number;
    createdAt?: Prisma.DateTimeFilter<"ScriptMedia"> | Date | string;
};
export type ScriptMediaCreateManyScriptInput = {
    id?: string;
    type: $Enums.ScriptMediaType;
    url: string;
    sortOrder?: number;
    createdAt?: Date | string;
};
export type ScriptMediaUpdateWithoutScriptInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumScriptMediaTypeFieldUpdateOperationsInput | $Enums.ScriptMediaType;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScriptMediaUncheckedUpdateWithoutScriptInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumScriptMediaTypeFieldUpdateOperationsInput | $Enums.ScriptMediaType;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScriptMediaUncheckedUpdateManyWithoutScriptInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumScriptMediaTypeFieldUpdateOperationsInput | $Enums.ScriptMediaType;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScriptMediaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    scriptId?: boolean;
    type?: boolean;
    url?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    script?: boolean | Prisma.ScriptDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["scriptMedia"]>;
export type ScriptMediaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    scriptId?: boolean;
    type?: boolean;
    url?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    script?: boolean | Prisma.ScriptDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["scriptMedia"]>;
export type ScriptMediaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    scriptId?: boolean;
    type?: boolean;
    url?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    script?: boolean | Prisma.ScriptDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["scriptMedia"]>;
export type ScriptMediaSelectScalar = {
    id?: boolean;
    scriptId?: boolean;
    type?: boolean;
    url?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
};
export type ScriptMediaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "scriptId" | "type" | "url" | "sortOrder" | "createdAt", ExtArgs["result"]["scriptMedia"]>;
export type ScriptMediaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    script?: boolean | Prisma.ScriptDefaultArgs<ExtArgs>;
};
export type ScriptMediaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    script?: boolean | Prisma.ScriptDefaultArgs<ExtArgs>;
};
export type ScriptMediaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    script?: boolean | Prisma.ScriptDefaultArgs<ExtArgs>;
};
export type $ScriptMediaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ScriptMedia";
    objects: {
        script: Prisma.$ScriptPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        scriptId: string;
        type: $Enums.ScriptMediaType;
        url: string;
        sortOrder: number;
        createdAt: Date;
    }, ExtArgs["result"]["scriptMedia"]>;
    composites: {};
};
export type ScriptMediaGetPayload<S extends boolean | null | undefined | ScriptMediaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ScriptMediaPayload, S>;
export type ScriptMediaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ScriptMediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ScriptMediaCountAggregateInputType | true;
};
export interface ScriptMediaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ScriptMedia'];
        meta: {
            name: 'ScriptMedia';
        };
    };
    findUnique<T extends ScriptMediaFindUniqueArgs>(args: Prisma.SelectSubset<T, ScriptMediaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ScriptMediaClient<runtime.Types.Result.GetResult<Prisma.$ScriptMediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ScriptMediaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ScriptMediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ScriptMediaClient<runtime.Types.Result.GetResult<Prisma.$ScriptMediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ScriptMediaFindFirstArgs>(args?: Prisma.SelectSubset<T, ScriptMediaFindFirstArgs<ExtArgs>>): Prisma.Prisma__ScriptMediaClient<runtime.Types.Result.GetResult<Prisma.$ScriptMediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ScriptMediaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ScriptMediaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ScriptMediaClient<runtime.Types.Result.GetResult<Prisma.$ScriptMediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ScriptMediaFindManyArgs>(args?: Prisma.SelectSubset<T, ScriptMediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScriptMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ScriptMediaCreateArgs>(args: Prisma.SelectSubset<T, ScriptMediaCreateArgs<ExtArgs>>): Prisma.Prisma__ScriptMediaClient<runtime.Types.Result.GetResult<Prisma.$ScriptMediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ScriptMediaCreateManyArgs>(args?: Prisma.SelectSubset<T, ScriptMediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ScriptMediaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ScriptMediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScriptMediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ScriptMediaDeleteArgs>(args: Prisma.SelectSubset<T, ScriptMediaDeleteArgs<ExtArgs>>): Prisma.Prisma__ScriptMediaClient<runtime.Types.Result.GetResult<Prisma.$ScriptMediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ScriptMediaUpdateArgs>(args: Prisma.SelectSubset<T, ScriptMediaUpdateArgs<ExtArgs>>): Prisma.Prisma__ScriptMediaClient<runtime.Types.Result.GetResult<Prisma.$ScriptMediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ScriptMediaDeleteManyArgs>(args?: Prisma.SelectSubset<T, ScriptMediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ScriptMediaUpdateManyArgs>(args: Prisma.SelectSubset<T, ScriptMediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ScriptMediaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ScriptMediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScriptMediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ScriptMediaUpsertArgs>(args: Prisma.SelectSubset<T, ScriptMediaUpsertArgs<ExtArgs>>): Prisma.Prisma__ScriptMediaClient<runtime.Types.Result.GetResult<Prisma.$ScriptMediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ScriptMediaCountArgs>(args?: Prisma.Subset<T, ScriptMediaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ScriptMediaCountAggregateOutputType> : number>;
    aggregate<T extends ScriptMediaAggregateArgs>(args: Prisma.Subset<T, ScriptMediaAggregateArgs>): Prisma.PrismaPromise<GetScriptMediaAggregateType<T>>;
    groupBy<T extends ScriptMediaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ScriptMediaGroupByArgs['orderBy'];
    } : {
        orderBy?: ScriptMediaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ScriptMediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScriptMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ScriptMediaFieldRefs;
}
export interface Prisma__ScriptMediaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    script<T extends Prisma.ScriptDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ScriptDefaultArgs<ExtArgs>>): Prisma.Prisma__ScriptClient<runtime.Types.Result.GetResult<Prisma.$ScriptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ScriptMediaFieldRefs {
    readonly id: Prisma.FieldRef<"ScriptMedia", 'String'>;
    readonly scriptId: Prisma.FieldRef<"ScriptMedia", 'String'>;
    readonly type: Prisma.FieldRef<"ScriptMedia", 'ScriptMediaType'>;
    readonly url: Prisma.FieldRef<"ScriptMedia", 'String'>;
    readonly sortOrder: Prisma.FieldRef<"ScriptMedia", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"ScriptMedia", 'DateTime'>;
}
export type ScriptMediaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptMediaSelect<ExtArgs> | null;
    omit?: Prisma.ScriptMediaOmit<ExtArgs> | null;
    include?: Prisma.ScriptMediaInclude<ExtArgs> | null;
    where: Prisma.ScriptMediaWhereUniqueInput;
};
export type ScriptMediaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptMediaSelect<ExtArgs> | null;
    omit?: Prisma.ScriptMediaOmit<ExtArgs> | null;
    include?: Prisma.ScriptMediaInclude<ExtArgs> | null;
    where: Prisma.ScriptMediaWhereUniqueInput;
};
export type ScriptMediaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptMediaSelect<ExtArgs> | null;
    omit?: Prisma.ScriptMediaOmit<ExtArgs> | null;
    include?: Prisma.ScriptMediaInclude<ExtArgs> | null;
    where?: Prisma.ScriptMediaWhereInput;
    orderBy?: Prisma.ScriptMediaOrderByWithRelationInput | Prisma.ScriptMediaOrderByWithRelationInput[];
    cursor?: Prisma.ScriptMediaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScriptMediaScalarFieldEnum | Prisma.ScriptMediaScalarFieldEnum[];
};
export type ScriptMediaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptMediaSelect<ExtArgs> | null;
    omit?: Prisma.ScriptMediaOmit<ExtArgs> | null;
    include?: Prisma.ScriptMediaInclude<ExtArgs> | null;
    where?: Prisma.ScriptMediaWhereInput;
    orderBy?: Prisma.ScriptMediaOrderByWithRelationInput | Prisma.ScriptMediaOrderByWithRelationInput[];
    cursor?: Prisma.ScriptMediaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScriptMediaScalarFieldEnum | Prisma.ScriptMediaScalarFieldEnum[];
};
export type ScriptMediaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptMediaSelect<ExtArgs> | null;
    omit?: Prisma.ScriptMediaOmit<ExtArgs> | null;
    include?: Prisma.ScriptMediaInclude<ExtArgs> | null;
    where?: Prisma.ScriptMediaWhereInput;
    orderBy?: Prisma.ScriptMediaOrderByWithRelationInput | Prisma.ScriptMediaOrderByWithRelationInput[];
    cursor?: Prisma.ScriptMediaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScriptMediaScalarFieldEnum | Prisma.ScriptMediaScalarFieldEnum[];
};
export type ScriptMediaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptMediaSelect<ExtArgs> | null;
    omit?: Prisma.ScriptMediaOmit<ExtArgs> | null;
    include?: Prisma.ScriptMediaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScriptMediaCreateInput, Prisma.ScriptMediaUncheckedCreateInput>;
};
export type ScriptMediaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ScriptMediaCreateManyInput | Prisma.ScriptMediaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ScriptMediaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptMediaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ScriptMediaOmit<ExtArgs> | null;
    data: Prisma.ScriptMediaCreateManyInput | Prisma.ScriptMediaCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ScriptMediaIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ScriptMediaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptMediaSelect<ExtArgs> | null;
    omit?: Prisma.ScriptMediaOmit<ExtArgs> | null;
    include?: Prisma.ScriptMediaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScriptMediaUpdateInput, Prisma.ScriptMediaUncheckedUpdateInput>;
    where: Prisma.ScriptMediaWhereUniqueInput;
};
export type ScriptMediaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ScriptMediaUpdateManyMutationInput, Prisma.ScriptMediaUncheckedUpdateManyInput>;
    where?: Prisma.ScriptMediaWhereInput;
    limit?: number;
};
export type ScriptMediaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptMediaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ScriptMediaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScriptMediaUpdateManyMutationInput, Prisma.ScriptMediaUncheckedUpdateManyInput>;
    where?: Prisma.ScriptMediaWhereInput;
    limit?: number;
    include?: Prisma.ScriptMediaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ScriptMediaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptMediaSelect<ExtArgs> | null;
    omit?: Prisma.ScriptMediaOmit<ExtArgs> | null;
    include?: Prisma.ScriptMediaInclude<ExtArgs> | null;
    where: Prisma.ScriptMediaWhereUniqueInput;
    create: Prisma.XOR<Prisma.ScriptMediaCreateInput, Prisma.ScriptMediaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ScriptMediaUpdateInput, Prisma.ScriptMediaUncheckedUpdateInput>;
};
export type ScriptMediaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptMediaSelect<ExtArgs> | null;
    omit?: Prisma.ScriptMediaOmit<ExtArgs> | null;
    include?: Prisma.ScriptMediaInclude<ExtArgs> | null;
    where: Prisma.ScriptMediaWhereUniqueInput;
};
export type ScriptMediaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScriptMediaWhereInput;
    limit?: number;
};
export type ScriptMediaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScriptMediaSelect<ExtArgs> | null;
    omit?: Prisma.ScriptMediaOmit<ExtArgs> | null;
    include?: Prisma.ScriptMediaInclude<ExtArgs> | null;
};
