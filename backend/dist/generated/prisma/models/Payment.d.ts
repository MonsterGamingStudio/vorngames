import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type PaymentModel = runtime.Types.Result.DefaultSelection<Prisma.$PaymentPayload>;
export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null;
    _avg: PaymentAvgAggregateOutputType | null;
    _sum: PaymentSumAggregateOutputType | null;
    _min: PaymentMinAggregateOutputType | null;
    _max: PaymentMaxAggregateOutputType | null;
};
export type PaymentAvgAggregateOutputType = {
    amount: number | null;
};
export type PaymentSumAggregateOutputType = {
    amount: number | null;
};
export type PaymentMinAggregateOutputType = {
    id: string | null;
    orderId: string | null;
    game: string | null;
    steamId: string | null;
    amount: number | null;
    description: string | null;
    status: $Enums.PaymentStatus | null;
    paymentUrl: string | null;
    unitpayId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    paidAt: Date | null;
    wsNotifiedAt: Date | null;
};
export type PaymentMaxAggregateOutputType = {
    id: string | null;
    orderId: string | null;
    game: string | null;
    steamId: string | null;
    amount: number | null;
    description: string | null;
    status: $Enums.PaymentStatus | null;
    paymentUrl: string | null;
    unitpayId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    paidAt: Date | null;
    wsNotifiedAt: Date | null;
};
export type PaymentCountAggregateOutputType = {
    id: number;
    orderId: number;
    game: number;
    steamId: number;
    amount: number;
    description: number;
    status: number;
    paymentUrl: number;
    unitpayId: number;
    createdAt: number;
    updatedAt: number;
    paidAt: number;
    wsNotifiedAt: number;
    _all: number;
};
export type PaymentAvgAggregateInputType = {
    amount?: true;
};
export type PaymentSumAggregateInputType = {
    amount?: true;
};
export type PaymentMinAggregateInputType = {
    id?: true;
    orderId?: true;
    game?: true;
    steamId?: true;
    amount?: true;
    description?: true;
    status?: true;
    paymentUrl?: true;
    unitpayId?: true;
    createdAt?: true;
    updatedAt?: true;
    paidAt?: true;
    wsNotifiedAt?: true;
};
export type PaymentMaxAggregateInputType = {
    id?: true;
    orderId?: true;
    game?: true;
    steamId?: true;
    amount?: true;
    description?: true;
    status?: true;
    paymentUrl?: true;
    unitpayId?: true;
    createdAt?: true;
    updatedAt?: true;
    paidAt?: true;
    wsNotifiedAt?: true;
};
export type PaymentCountAggregateInputType = {
    id?: true;
    orderId?: true;
    game?: true;
    steamId?: true;
    amount?: true;
    description?: true;
    status?: true;
    paymentUrl?: true;
    unitpayId?: true;
    createdAt?: true;
    updatedAt?: true;
    paidAt?: true;
    wsNotifiedAt?: true;
    _all?: true;
};
export type PaymentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentWhereInput;
    orderBy?: Prisma.PaymentOrderByWithRelationInput | Prisma.PaymentOrderByWithRelationInput[];
    cursor?: Prisma.PaymentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PaymentCountAggregateInputType;
    _avg?: PaymentAvgAggregateInputType;
    _sum?: PaymentSumAggregateInputType;
    _min?: PaymentMinAggregateInputType;
    _max?: PaymentMaxAggregateInputType;
};
export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
    [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePayment[P]> : Prisma.GetScalarType<T[P], AggregatePayment[P]>;
};
export type PaymentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentWhereInput;
    orderBy?: Prisma.PaymentOrderByWithAggregationInput | Prisma.PaymentOrderByWithAggregationInput[];
    by: Prisma.PaymentScalarFieldEnum[] | Prisma.PaymentScalarFieldEnum;
    having?: Prisma.PaymentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PaymentCountAggregateInputType | true;
    _avg?: PaymentAvgAggregateInputType;
    _sum?: PaymentSumAggregateInputType;
    _min?: PaymentMinAggregateInputType;
    _max?: PaymentMaxAggregateInputType;
};
export type PaymentGroupByOutputType = {
    id: string;
    orderId: string;
    game: string;
    steamId: string | null;
    amount: number;
    description: string;
    status: $Enums.PaymentStatus;
    paymentUrl: string | null;
    unitpayId: string | null;
    createdAt: Date;
    updatedAt: Date;
    paidAt: Date | null;
    wsNotifiedAt: Date | null;
    _count: PaymentCountAggregateOutputType | null;
    _avg: PaymentAvgAggregateOutputType | null;
    _sum: PaymentSumAggregateOutputType | null;
    _min: PaymentMinAggregateOutputType | null;
    _max: PaymentMaxAggregateOutputType | null;
};
export type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PaymentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PaymentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PaymentGroupByOutputType[P]>;
}>>;
export type PaymentWhereInput = {
    AND?: Prisma.PaymentWhereInput | Prisma.PaymentWhereInput[];
    OR?: Prisma.PaymentWhereInput[];
    NOT?: Prisma.PaymentWhereInput | Prisma.PaymentWhereInput[];
    id?: Prisma.StringFilter<"Payment"> | string;
    orderId?: Prisma.StringFilter<"Payment"> | string;
    game?: Prisma.StringFilter<"Payment"> | string;
    steamId?: Prisma.StringNullableFilter<"Payment"> | string | null;
    amount?: Prisma.IntFilter<"Payment"> | number;
    description?: Prisma.StringFilter<"Payment"> | string;
    status?: Prisma.EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus;
    paymentUrl?: Prisma.StringNullableFilter<"Payment"> | string | null;
    unitpayId?: Prisma.StringNullableFilter<"Payment"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Payment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Payment"> | Date | string;
    paidAt?: Prisma.DateTimeNullableFilter<"Payment"> | Date | string | null;
    wsNotifiedAt?: Prisma.DateTimeNullableFilter<"Payment"> | Date | string | null;
};
export type PaymentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    game?: Prisma.SortOrder;
    steamId?: Prisma.SortOrderInput | Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paymentUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    unitpayId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    wsNotifiedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    orderId?: string;
    AND?: Prisma.PaymentWhereInput | Prisma.PaymentWhereInput[];
    OR?: Prisma.PaymentWhereInput[];
    NOT?: Prisma.PaymentWhereInput | Prisma.PaymentWhereInput[];
    game?: Prisma.StringFilter<"Payment"> | string;
    steamId?: Prisma.StringNullableFilter<"Payment"> | string | null;
    amount?: Prisma.IntFilter<"Payment"> | number;
    description?: Prisma.StringFilter<"Payment"> | string;
    status?: Prisma.EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus;
    paymentUrl?: Prisma.StringNullableFilter<"Payment"> | string | null;
    unitpayId?: Prisma.StringNullableFilter<"Payment"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Payment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Payment"> | Date | string;
    paidAt?: Prisma.DateTimeNullableFilter<"Payment"> | Date | string | null;
    wsNotifiedAt?: Prisma.DateTimeNullableFilter<"Payment"> | Date | string | null;
}, "id" | "orderId">;
export type PaymentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    game?: Prisma.SortOrder;
    steamId?: Prisma.SortOrderInput | Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paymentUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    unitpayId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    wsNotifiedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.PaymentCountOrderByAggregateInput;
    _avg?: Prisma.PaymentAvgOrderByAggregateInput;
    _max?: Prisma.PaymentMaxOrderByAggregateInput;
    _min?: Prisma.PaymentMinOrderByAggregateInput;
    _sum?: Prisma.PaymentSumOrderByAggregateInput;
};
export type PaymentScalarWhereWithAggregatesInput = {
    AND?: Prisma.PaymentScalarWhereWithAggregatesInput | Prisma.PaymentScalarWhereWithAggregatesInput[];
    OR?: Prisma.PaymentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PaymentScalarWhereWithAggregatesInput | Prisma.PaymentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Payment"> | string;
    orderId?: Prisma.StringWithAggregatesFilter<"Payment"> | string;
    game?: Prisma.StringWithAggregatesFilter<"Payment"> | string;
    steamId?: Prisma.StringNullableWithAggregatesFilter<"Payment"> | string | null;
    amount?: Prisma.IntWithAggregatesFilter<"Payment"> | number;
    description?: Prisma.StringWithAggregatesFilter<"Payment"> | string;
    status?: Prisma.EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus;
    paymentUrl?: Prisma.StringNullableWithAggregatesFilter<"Payment"> | string | null;
    unitpayId?: Prisma.StringNullableWithAggregatesFilter<"Payment"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Payment"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Payment"> | Date | string;
    paidAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null;
    wsNotifiedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null;
};
export type PaymentCreateInput = {
    id?: string;
    orderId: string;
    game: string;
    steamId?: string | null;
    amount: number;
    description: string;
    status?: $Enums.PaymentStatus;
    paymentUrl?: string | null;
    unitpayId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    paidAt?: Date | string | null;
    wsNotifiedAt?: Date | string | null;
};
export type PaymentUncheckedCreateInput = {
    id?: string;
    orderId: string;
    game: string;
    steamId?: string | null;
    amount: number;
    description: string;
    status?: $Enums.PaymentStatus;
    paymentUrl?: string | null;
    unitpayId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    paidAt?: Date | string | null;
    wsNotifiedAt?: Date | string | null;
};
export type PaymentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    game?: Prisma.StringFieldUpdateOperationsInput | string;
    steamId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    paymentUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unitpayId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    wsNotifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PaymentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    game?: Prisma.StringFieldUpdateOperationsInput | string;
    steamId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    paymentUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unitpayId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    wsNotifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PaymentCreateManyInput = {
    id?: string;
    orderId: string;
    game: string;
    steamId?: string | null;
    amount: number;
    description: string;
    status?: $Enums.PaymentStatus;
    paymentUrl?: string | null;
    unitpayId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    paidAt?: Date | string | null;
    wsNotifiedAt?: Date | string | null;
};
export type PaymentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    game?: Prisma.StringFieldUpdateOperationsInput | string;
    steamId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    paymentUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unitpayId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    wsNotifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PaymentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    game?: Prisma.StringFieldUpdateOperationsInput | string;
    steamId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    paymentUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unitpayId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    wsNotifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PaymentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    game?: Prisma.SortOrder;
    steamId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paymentUrl?: Prisma.SortOrder;
    unitpayId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    wsNotifiedAt?: Prisma.SortOrder;
};
export type PaymentAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type PaymentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    game?: Prisma.SortOrder;
    steamId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paymentUrl?: Prisma.SortOrder;
    unitpayId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    wsNotifiedAt?: Prisma.SortOrder;
};
export type PaymentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    game?: Prisma.SortOrder;
    steamId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paymentUrl?: Prisma.SortOrder;
    unitpayId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    wsNotifiedAt?: Prisma.SortOrder;
};
export type PaymentSumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type PaymentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    game?: boolean;
    steamId?: boolean;
    amount?: boolean;
    description?: boolean;
    status?: boolean;
    paymentUrl?: boolean;
    unitpayId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    paidAt?: boolean;
    wsNotifiedAt?: boolean;
}, ExtArgs["result"]["payment"]>;
export type PaymentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    game?: boolean;
    steamId?: boolean;
    amount?: boolean;
    description?: boolean;
    status?: boolean;
    paymentUrl?: boolean;
    unitpayId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    paidAt?: boolean;
    wsNotifiedAt?: boolean;
}, ExtArgs["result"]["payment"]>;
export type PaymentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    game?: boolean;
    steamId?: boolean;
    amount?: boolean;
    description?: boolean;
    status?: boolean;
    paymentUrl?: boolean;
    unitpayId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    paidAt?: boolean;
    wsNotifiedAt?: boolean;
}, ExtArgs["result"]["payment"]>;
export type PaymentSelectScalar = {
    id?: boolean;
    orderId?: boolean;
    game?: boolean;
    steamId?: boolean;
    amount?: boolean;
    description?: boolean;
    status?: boolean;
    paymentUrl?: boolean;
    unitpayId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    paidAt?: boolean;
    wsNotifiedAt?: boolean;
};
export type PaymentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "orderId" | "game" | "steamId" | "amount" | "description" | "status" | "paymentUrl" | "unitpayId" | "createdAt" | "updatedAt" | "paidAt" | "wsNotifiedAt", ExtArgs["result"]["payment"]>;
export type $PaymentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Payment";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        orderId: string;
        game: string;
        steamId: string | null;
        amount: number;
        description: string;
        status: $Enums.PaymentStatus;
        paymentUrl: string | null;
        unitpayId: string | null;
        createdAt: Date;
        updatedAt: Date;
        paidAt: Date | null;
        wsNotifiedAt: Date | null;
    }, ExtArgs["result"]["payment"]>;
    composites: {};
};
export type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PaymentPayload, S>;
export type PaymentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PaymentCountAggregateInputType | true;
};
export interface PaymentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Payment'];
        meta: {
            name: 'Payment';
        };
    };
    findUnique<T extends PaymentFindUniqueArgs>(args: Prisma.SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PaymentFindFirstArgs>(args?: Prisma.SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PaymentFindManyArgs>(args?: Prisma.SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PaymentCreateArgs>(args: Prisma.SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PaymentCreateManyArgs>(args?: Prisma.SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PaymentDeleteArgs>(args: Prisma.SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PaymentUpdateArgs>(args: Prisma.SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PaymentDeleteManyArgs>(args?: Prisma.SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PaymentUpdateManyArgs>(args: Prisma.SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PaymentUpsertArgs>(args: Prisma.SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PaymentCountArgs>(args?: Prisma.Subset<T, PaymentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PaymentCountAggregateOutputType> : number>;
    aggregate<T extends PaymentAggregateArgs>(args: Prisma.Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>;
    groupBy<T extends PaymentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PaymentGroupByArgs['orderBy'];
    } : {
        orderBy?: PaymentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PaymentFieldRefs;
}
export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PaymentFieldRefs {
    readonly id: Prisma.FieldRef<"Payment", 'String'>;
    readonly orderId: Prisma.FieldRef<"Payment", 'String'>;
    readonly game: Prisma.FieldRef<"Payment", 'String'>;
    readonly steamId: Prisma.FieldRef<"Payment", 'String'>;
    readonly amount: Prisma.FieldRef<"Payment", 'Int'>;
    readonly description: Prisma.FieldRef<"Payment", 'String'>;
    readonly status: Prisma.FieldRef<"Payment", 'PaymentStatus'>;
    readonly paymentUrl: Prisma.FieldRef<"Payment", 'String'>;
    readonly unitpayId: Prisma.FieldRef<"Payment", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Payment", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Payment", 'DateTime'>;
    readonly paidAt: Prisma.FieldRef<"Payment", 'DateTime'>;
    readonly wsNotifiedAt: Prisma.FieldRef<"Payment", 'DateTime'>;
}
export type PaymentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    where: Prisma.PaymentWhereUniqueInput;
};
export type PaymentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    where: Prisma.PaymentWhereUniqueInput;
};
export type PaymentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    where?: Prisma.PaymentWhereInput;
    orderBy?: Prisma.PaymentOrderByWithRelationInput | Prisma.PaymentOrderByWithRelationInput[];
    cursor?: Prisma.PaymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentScalarFieldEnum | Prisma.PaymentScalarFieldEnum[];
};
export type PaymentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    where?: Prisma.PaymentWhereInput;
    orderBy?: Prisma.PaymentOrderByWithRelationInput | Prisma.PaymentOrderByWithRelationInput[];
    cursor?: Prisma.PaymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentScalarFieldEnum | Prisma.PaymentScalarFieldEnum[];
};
export type PaymentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    where?: Prisma.PaymentWhereInput;
    orderBy?: Prisma.PaymentOrderByWithRelationInput | Prisma.PaymentOrderByWithRelationInput[];
    cursor?: Prisma.PaymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentScalarFieldEnum | Prisma.PaymentScalarFieldEnum[];
};
export type PaymentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentCreateInput, Prisma.PaymentUncheckedCreateInput>;
};
export type PaymentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PaymentCreateManyInput | Prisma.PaymentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PaymentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    data: Prisma.PaymentCreateManyInput | Prisma.PaymentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PaymentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentUpdateInput, Prisma.PaymentUncheckedUpdateInput>;
    where: Prisma.PaymentWhereUniqueInput;
};
export type PaymentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PaymentUpdateManyMutationInput, Prisma.PaymentUncheckedUpdateManyInput>;
    where?: Prisma.PaymentWhereInput;
    limit?: number;
};
export type PaymentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentUpdateManyMutationInput, Prisma.PaymentUncheckedUpdateManyInput>;
    where?: Prisma.PaymentWhereInput;
    limit?: number;
};
export type PaymentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    where: Prisma.PaymentWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentCreateInput, Prisma.PaymentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PaymentUpdateInput, Prisma.PaymentUncheckedUpdateInput>;
};
export type PaymentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    where: Prisma.PaymentWhereUniqueInput;
};
export type PaymentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentWhereInput;
    limit?: number;
};
export type PaymentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
};
