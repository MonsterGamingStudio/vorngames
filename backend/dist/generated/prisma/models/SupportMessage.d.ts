import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type SupportMessageModel = runtime.Types.Result.DefaultSelection<Prisma.$SupportMessagePayload>;
export type AggregateSupportMessage = {
    _count: SupportMessageCountAggregateOutputType | null;
    _min: SupportMessageMinAggregateOutputType | null;
    _max: SupportMessageMaxAggregateOutputType | null;
};
export type SupportMessageMinAggregateOutputType = {
    id: string | null;
    ticketId: string | null;
    authorId: string | null;
    isStaff: boolean | null;
    body: string | null;
    createdAt: Date | null;
};
export type SupportMessageMaxAggregateOutputType = {
    id: string | null;
    ticketId: string | null;
    authorId: string | null;
    isStaff: boolean | null;
    body: string | null;
    createdAt: Date | null;
};
export type SupportMessageCountAggregateOutputType = {
    id: number;
    ticketId: number;
    authorId: number;
    isStaff: number;
    body: number;
    createdAt: number;
    _all: number;
};
export type SupportMessageMinAggregateInputType = {
    id?: true;
    ticketId?: true;
    authorId?: true;
    isStaff?: true;
    body?: true;
    createdAt?: true;
};
export type SupportMessageMaxAggregateInputType = {
    id?: true;
    ticketId?: true;
    authorId?: true;
    isStaff?: true;
    body?: true;
    createdAt?: true;
};
export type SupportMessageCountAggregateInputType = {
    id?: true;
    ticketId?: true;
    authorId?: true;
    isStaff?: true;
    body?: true;
    createdAt?: true;
    _all?: true;
};
export type SupportMessageAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupportMessageWhereInput;
    orderBy?: Prisma.SupportMessageOrderByWithRelationInput | Prisma.SupportMessageOrderByWithRelationInput[];
    cursor?: Prisma.SupportMessageWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SupportMessageCountAggregateInputType;
    _min?: SupportMessageMinAggregateInputType;
    _max?: SupportMessageMaxAggregateInputType;
};
export type GetSupportMessageAggregateType<T extends SupportMessageAggregateArgs> = {
    [P in keyof T & keyof AggregateSupportMessage]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSupportMessage[P]> : Prisma.GetScalarType<T[P], AggregateSupportMessage[P]>;
};
export type SupportMessageGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupportMessageWhereInput;
    orderBy?: Prisma.SupportMessageOrderByWithAggregationInput | Prisma.SupportMessageOrderByWithAggregationInput[];
    by: Prisma.SupportMessageScalarFieldEnum[] | Prisma.SupportMessageScalarFieldEnum;
    having?: Prisma.SupportMessageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SupportMessageCountAggregateInputType | true;
    _min?: SupportMessageMinAggregateInputType;
    _max?: SupportMessageMaxAggregateInputType;
};
export type SupportMessageGroupByOutputType = {
    id: string;
    ticketId: string;
    authorId: string;
    isStaff: boolean;
    body: string;
    createdAt: Date;
    _count: SupportMessageCountAggregateOutputType | null;
    _min: SupportMessageMinAggregateOutputType | null;
    _max: SupportMessageMaxAggregateOutputType | null;
};
export type GetSupportMessageGroupByPayload<T extends SupportMessageGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SupportMessageGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SupportMessageGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SupportMessageGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SupportMessageGroupByOutputType[P]>;
}>>;
export type SupportMessageWhereInput = {
    AND?: Prisma.SupportMessageWhereInput | Prisma.SupportMessageWhereInput[];
    OR?: Prisma.SupportMessageWhereInput[];
    NOT?: Prisma.SupportMessageWhereInput | Prisma.SupportMessageWhereInput[];
    id?: Prisma.StringFilter<"SupportMessage"> | string;
    ticketId?: Prisma.StringFilter<"SupportMessage"> | string;
    authorId?: Prisma.StringFilter<"SupportMessage"> | string;
    isStaff?: Prisma.BoolFilter<"SupportMessage"> | boolean;
    body?: Prisma.StringFilter<"SupportMessage"> | string;
    createdAt?: Prisma.DateTimeFilter<"SupportMessage"> | Date | string;
    ticket?: Prisma.XOR<Prisma.SupportTicketScalarRelationFilter, Prisma.SupportTicketWhereInput>;
    author?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type SupportMessageOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    ticketId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    isStaff?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    ticket?: Prisma.SupportTicketOrderByWithRelationInput;
    author?: Prisma.UserOrderByWithRelationInput;
};
export type SupportMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.SupportMessageWhereInput | Prisma.SupportMessageWhereInput[];
    OR?: Prisma.SupportMessageWhereInput[];
    NOT?: Prisma.SupportMessageWhereInput | Prisma.SupportMessageWhereInput[];
    ticketId?: Prisma.StringFilter<"SupportMessage"> | string;
    authorId?: Prisma.StringFilter<"SupportMessage"> | string;
    isStaff?: Prisma.BoolFilter<"SupportMessage"> | boolean;
    body?: Prisma.StringFilter<"SupportMessage"> | string;
    createdAt?: Prisma.DateTimeFilter<"SupportMessage"> | Date | string;
    ticket?: Prisma.XOR<Prisma.SupportTicketScalarRelationFilter, Prisma.SupportTicketWhereInput>;
    author?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type SupportMessageOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    ticketId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    isStaff?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.SupportMessageCountOrderByAggregateInput;
    _max?: Prisma.SupportMessageMaxOrderByAggregateInput;
    _min?: Prisma.SupportMessageMinOrderByAggregateInput;
};
export type SupportMessageScalarWhereWithAggregatesInput = {
    AND?: Prisma.SupportMessageScalarWhereWithAggregatesInput | Prisma.SupportMessageScalarWhereWithAggregatesInput[];
    OR?: Prisma.SupportMessageScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SupportMessageScalarWhereWithAggregatesInput | Prisma.SupportMessageScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"SupportMessage"> | string;
    ticketId?: Prisma.StringWithAggregatesFilter<"SupportMessage"> | string;
    authorId?: Prisma.StringWithAggregatesFilter<"SupportMessage"> | string;
    isStaff?: Prisma.BoolWithAggregatesFilter<"SupportMessage"> | boolean;
    body?: Prisma.StringWithAggregatesFilter<"SupportMessage"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SupportMessage"> | Date | string;
};
export type SupportMessageCreateInput = {
    id?: string;
    isStaff?: boolean;
    body: string;
    createdAt?: Date | string;
    ticket: Prisma.SupportTicketCreateNestedOneWithoutMessagesInput;
    author: Prisma.UserCreateNestedOneWithoutSupportMessagesInput;
};
export type SupportMessageUncheckedCreateInput = {
    id?: string;
    ticketId: string;
    authorId: string;
    isStaff?: boolean;
    body: string;
    createdAt?: Date | string;
};
export type SupportMessageUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    isStaff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ticket?: Prisma.SupportTicketUpdateOneRequiredWithoutMessagesNestedInput;
    author?: Prisma.UserUpdateOneRequiredWithoutSupportMessagesNestedInput;
};
export type SupportMessageUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketId?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    isStaff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupportMessageCreateManyInput = {
    id?: string;
    ticketId: string;
    authorId: string;
    isStaff?: boolean;
    body: string;
    createdAt?: Date | string;
};
export type SupportMessageUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    isStaff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupportMessageUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketId?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    isStaff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupportMessageListRelationFilter = {
    every?: Prisma.SupportMessageWhereInput;
    some?: Prisma.SupportMessageWhereInput;
    none?: Prisma.SupportMessageWhereInput;
};
export type SupportMessageOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SupportMessageCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ticketId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    isStaff?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SupportMessageMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ticketId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    isStaff?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SupportMessageMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ticketId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    isStaff?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SupportMessageCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.SupportMessageCreateWithoutAuthorInput, Prisma.SupportMessageUncheckedCreateWithoutAuthorInput> | Prisma.SupportMessageCreateWithoutAuthorInput[] | Prisma.SupportMessageUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.SupportMessageCreateOrConnectWithoutAuthorInput | Prisma.SupportMessageCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.SupportMessageCreateManyAuthorInputEnvelope;
    connect?: Prisma.SupportMessageWhereUniqueInput | Prisma.SupportMessageWhereUniqueInput[];
};
export type SupportMessageUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.SupportMessageCreateWithoutAuthorInput, Prisma.SupportMessageUncheckedCreateWithoutAuthorInput> | Prisma.SupportMessageCreateWithoutAuthorInput[] | Prisma.SupportMessageUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.SupportMessageCreateOrConnectWithoutAuthorInput | Prisma.SupportMessageCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.SupportMessageCreateManyAuthorInputEnvelope;
    connect?: Prisma.SupportMessageWhereUniqueInput | Prisma.SupportMessageWhereUniqueInput[];
};
export type SupportMessageUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.SupportMessageCreateWithoutAuthorInput, Prisma.SupportMessageUncheckedCreateWithoutAuthorInput> | Prisma.SupportMessageCreateWithoutAuthorInput[] | Prisma.SupportMessageUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.SupportMessageCreateOrConnectWithoutAuthorInput | Prisma.SupportMessageCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.SupportMessageUpsertWithWhereUniqueWithoutAuthorInput | Prisma.SupportMessageUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.SupportMessageCreateManyAuthorInputEnvelope;
    set?: Prisma.SupportMessageWhereUniqueInput | Prisma.SupportMessageWhereUniqueInput[];
    disconnect?: Prisma.SupportMessageWhereUniqueInput | Prisma.SupportMessageWhereUniqueInput[];
    delete?: Prisma.SupportMessageWhereUniqueInput | Prisma.SupportMessageWhereUniqueInput[];
    connect?: Prisma.SupportMessageWhereUniqueInput | Prisma.SupportMessageWhereUniqueInput[];
    update?: Prisma.SupportMessageUpdateWithWhereUniqueWithoutAuthorInput | Prisma.SupportMessageUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.SupportMessageUpdateManyWithWhereWithoutAuthorInput | Prisma.SupportMessageUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.SupportMessageScalarWhereInput | Prisma.SupportMessageScalarWhereInput[];
};
export type SupportMessageUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.SupportMessageCreateWithoutAuthorInput, Prisma.SupportMessageUncheckedCreateWithoutAuthorInput> | Prisma.SupportMessageCreateWithoutAuthorInput[] | Prisma.SupportMessageUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.SupportMessageCreateOrConnectWithoutAuthorInput | Prisma.SupportMessageCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.SupportMessageUpsertWithWhereUniqueWithoutAuthorInput | Prisma.SupportMessageUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.SupportMessageCreateManyAuthorInputEnvelope;
    set?: Prisma.SupportMessageWhereUniqueInput | Prisma.SupportMessageWhereUniqueInput[];
    disconnect?: Prisma.SupportMessageWhereUniqueInput | Prisma.SupportMessageWhereUniqueInput[];
    delete?: Prisma.SupportMessageWhereUniqueInput | Prisma.SupportMessageWhereUniqueInput[];
    connect?: Prisma.SupportMessageWhereUniqueInput | Prisma.SupportMessageWhereUniqueInput[];
    update?: Prisma.SupportMessageUpdateWithWhereUniqueWithoutAuthorInput | Prisma.SupportMessageUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.SupportMessageUpdateManyWithWhereWithoutAuthorInput | Prisma.SupportMessageUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.SupportMessageScalarWhereInput | Prisma.SupportMessageScalarWhereInput[];
};
export type SupportMessageCreateNestedManyWithoutTicketInput = {
    create?: Prisma.XOR<Prisma.SupportMessageCreateWithoutTicketInput, Prisma.SupportMessageUncheckedCreateWithoutTicketInput> | Prisma.SupportMessageCreateWithoutTicketInput[] | Prisma.SupportMessageUncheckedCreateWithoutTicketInput[];
    connectOrCreate?: Prisma.SupportMessageCreateOrConnectWithoutTicketInput | Prisma.SupportMessageCreateOrConnectWithoutTicketInput[];
    createMany?: Prisma.SupportMessageCreateManyTicketInputEnvelope;
    connect?: Prisma.SupportMessageWhereUniqueInput | Prisma.SupportMessageWhereUniqueInput[];
};
export type SupportMessageUncheckedCreateNestedManyWithoutTicketInput = {
    create?: Prisma.XOR<Prisma.SupportMessageCreateWithoutTicketInput, Prisma.SupportMessageUncheckedCreateWithoutTicketInput> | Prisma.SupportMessageCreateWithoutTicketInput[] | Prisma.SupportMessageUncheckedCreateWithoutTicketInput[];
    connectOrCreate?: Prisma.SupportMessageCreateOrConnectWithoutTicketInput | Prisma.SupportMessageCreateOrConnectWithoutTicketInput[];
    createMany?: Prisma.SupportMessageCreateManyTicketInputEnvelope;
    connect?: Prisma.SupportMessageWhereUniqueInput | Prisma.SupportMessageWhereUniqueInput[];
};
export type SupportMessageUpdateManyWithoutTicketNestedInput = {
    create?: Prisma.XOR<Prisma.SupportMessageCreateWithoutTicketInput, Prisma.SupportMessageUncheckedCreateWithoutTicketInput> | Prisma.SupportMessageCreateWithoutTicketInput[] | Prisma.SupportMessageUncheckedCreateWithoutTicketInput[];
    connectOrCreate?: Prisma.SupportMessageCreateOrConnectWithoutTicketInput | Prisma.SupportMessageCreateOrConnectWithoutTicketInput[];
    upsert?: Prisma.SupportMessageUpsertWithWhereUniqueWithoutTicketInput | Prisma.SupportMessageUpsertWithWhereUniqueWithoutTicketInput[];
    createMany?: Prisma.SupportMessageCreateManyTicketInputEnvelope;
    set?: Prisma.SupportMessageWhereUniqueInput | Prisma.SupportMessageWhereUniqueInput[];
    disconnect?: Prisma.SupportMessageWhereUniqueInput | Prisma.SupportMessageWhereUniqueInput[];
    delete?: Prisma.SupportMessageWhereUniqueInput | Prisma.SupportMessageWhereUniqueInput[];
    connect?: Prisma.SupportMessageWhereUniqueInput | Prisma.SupportMessageWhereUniqueInput[];
    update?: Prisma.SupportMessageUpdateWithWhereUniqueWithoutTicketInput | Prisma.SupportMessageUpdateWithWhereUniqueWithoutTicketInput[];
    updateMany?: Prisma.SupportMessageUpdateManyWithWhereWithoutTicketInput | Prisma.SupportMessageUpdateManyWithWhereWithoutTicketInput[];
    deleteMany?: Prisma.SupportMessageScalarWhereInput | Prisma.SupportMessageScalarWhereInput[];
};
export type SupportMessageUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: Prisma.XOR<Prisma.SupportMessageCreateWithoutTicketInput, Prisma.SupportMessageUncheckedCreateWithoutTicketInput> | Prisma.SupportMessageCreateWithoutTicketInput[] | Prisma.SupportMessageUncheckedCreateWithoutTicketInput[];
    connectOrCreate?: Prisma.SupportMessageCreateOrConnectWithoutTicketInput | Prisma.SupportMessageCreateOrConnectWithoutTicketInput[];
    upsert?: Prisma.SupportMessageUpsertWithWhereUniqueWithoutTicketInput | Prisma.SupportMessageUpsertWithWhereUniqueWithoutTicketInput[];
    createMany?: Prisma.SupportMessageCreateManyTicketInputEnvelope;
    set?: Prisma.SupportMessageWhereUniqueInput | Prisma.SupportMessageWhereUniqueInput[];
    disconnect?: Prisma.SupportMessageWhereUniqueInput | Prisma.SupportMessageWhereUniqueInput[];
    delete?: Prisma.SupportMessageWhereUniqueInput | Prisma.SupportMessageWhereUniqueInput[];
    connect?: Prisma.SupportMessageWhereUniqueInput | Prisma.SupportMessageWhereUniqueInput[];
    update?: Prisma.SupportMessageUpdateWithWhereUniqueWithoutTicketInput | Prisma.SupportMessageUpdateWithWhereUniqueWithoutTicketInput[];
    updateMany?: Prisma.SupportMessageUpdateManyWithWhereWithoutTicketInput | Prisma.SupportMessageUpdateManyWithWhereWithoutTicketInput[];
    deleteMany?: Prisma.SupportMessageScalarWhereInput | Prisma.SupportMessageScalarWhereInput[];
};
export type SupportMessageCreateWithoutAuthorInput = {
    id?: string;
    isStaff?: boolean;
    body: string;
    createdAt?: Date | string;
    ticket: Prisma.SupportTicketCreateNestedOneWithoutMessagesInput;
};
export type SupportMessageUncheckedCreateWithoutAuthorInput = {
    id?: string;
    ticketId: string;
    isStaff?: boolean;
    body: string;
    createdAt?: Date | string;
};
export type SupportMessageCreateOrConnectWithoutAuthorInput = {
    where: Prisma.SupportMessageWhereUniqueInput;
    create: Prisma.XOR<Prisma.SupportMessageCreateWithoutAuthorInput, Prisma.SupportMessageUncheckedCreateWithoutAuthorInput>;
};
export type SupportMessageCreateManyAuthorInputEnvelope = {
    data: Prisma.SupportMessageCreateManyAuthorInput | Prisma.SupportMessageCreateManyAuthorInput[];
    skipDuplicates?: boolean;
};
export type SupportMessageUpsertWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.SupportMessageWhereUniqueInput;
    update: Prisma.XOR<Prisma.SupportMessageUpdateWithoutAuthorInput, Prisma.SupportMessageUncheckedUpdateWithoutAuthorInput>;
    create: Prisma.XOR<Prisma.SupportMessageCreateWithoutAuthorInput, Prisma.SupportMessageUncheckedCreateWithoutAuthorInput>;
};
export type SupportMessageUpdateWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.SupportMessageWhereUniqueInput;
    data: Prisma.XOR<Prisma.SupportMessageUpdateWithoutAuthorInput, Prisma.SupportMessageUncheckedUpdateWithoutAuthorInput>;
};
export type SupportMessageUpdateManyWithWhereWithoutAuthorInput = {
    where: Prisma.SupportMessageScalarWhereInput;
    data: Prisma.XOR<Prisma.SupportMessageUpdateManyMutationInput, Prisma.SupportMessageUncheckedUpdateManyWithoutAuthorInput>;
};
export type SupportMessageScalarWhereInput = {
    AND?: Prisma.SupportMessageScalarWhereInput | Prisma.SupportMessageScalarWhereInput[];
    OR?: Prisma.SupportMessageScalarWhereInput[];
    NOT?: Prisma.SupportMessageScalarWhereInput | Prisma.SupportMessageScalarWhereInput[];
    id?: Prisma.StringFilter<"SupportMessage"> | string;
    ticketId?: Prisma.StringFilter<"SupportMessage"> | string;
    authorId?: Prisma.StringFilter<"SupportMessage"> | string;
    isStaff?: Prisma.BoolFilter<"SupportMessage"> | boolean;
    body?: Prisma.StringFilter<"SupportMessage"> | string;
    createdAt?: Prisma.DateTimeFilter<"SupportMessage"> | Date | string;
};
export type SupportMessageCreateWithoutTicketInput = {
    id?: string;
    isStaff?: boolean;
    body: string;
    createdAt?: Date | string;
    author: Prisma.UserCreateNestedOneWithoutSupportMessagesInput;
};
export type SupportMessageUncheckedCreateWithoutTicketInput = {
    id?: string;
    authorId: string;
    isStaff?: boolean;
    body: string;
    createdAt?: Date | string;
};
export type SupportMessageCreateOrConnectWithoutTicketInput = {
    where: Prisma.SupportMessageWhereUniqueInput;
    create: Prisma.XOR<Prisma.SupportMessageCreateWithoutTicketInput, Prisma.SupportMessageUncheckedCreateWithoutTicketInput>;
};
export type SupportMessageCreateManyTicketInputEnvelope = {
    data: Prisma.SupportMessageCreateManyTicketInput | Prisma.SupportMessageCreateManyTicketInput[];
    skipDuplicates?: boolean;
};
export type SupportMessageUpsertWithWhereUniqueWithoutTicketInput = {
    where: Prisma.SupportMessageWhereUniqueInput;
    update: Prisma.XOR<Prisma.SupportMessageUpdateWithoutTicketInput, Prisma.SupportMessageUncheckedUpdateWithoutTicketInput>;
    create: Prisma.XOR<Prisma.SupportMessageCreateWithoutTicketInput, Prisma.SupportMessageUncheckedCreateWithoutTicketInput>;
};
export type SupportMessageUpdateWithWhereUniqueWithoutTicketInput = {
    where: Prisma.SupportMessageWhereUniqueInput;
    data: Prisma.XOR<Prisma.SupportMessageUpdateWithoutTicketInput, Prisma.SupportMessageUncheckedUpdateWithoutTicketInput>;
};
export type SupportMessageUpdateManyWithWhereWithoutTicketInput = {
    where: Prisma.SupportMessageScalarWhereInput;
    data: Prisma.XOR<Prisma.SupportMessageUpdateManyMutationInput, Prisma.SupportMessageUncheckedUpdateManyWithoutTicketInput>;
};
export type SupportMessageCreateManyAuthorInput = {
    id?: string;
    ticketId: string;
    isStaff?: boolean;
    body: string;
    createdAt?: Date | string;
};
export type SupportMessageUpdateWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    isStaff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ticket?: Prisma.SupportTicketUpdateOneRequiredWithoutMessagesNestedInput;
};
export type SupportMessageUncheckedUpdateWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketId?: Prisma.StringFieldUpdateOperationsInput | string;
    isStaff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupportMessageUncheckedUpdateManyWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketId?: Prisma.StringFieldUpdateOperationsInput | string;
    isStaff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupportMessageCreateManyTicketInput = {
    id?: string;
    authorId: string;
    isStaff?: boolean;
    body: string;
    createdAt?: Date | string;
};
export type SupportMessageUpdateWithoutTicketInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    isStaff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    author?: Prisma.UserUpdateOneRequiredWithoutSupportMessagesNestedInput;
};
export type SupportMessageUncheckedUpdateWithoutTicketInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    isStaff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupportMessageUncheckedUpdateManyWithoutTicketInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    isStaff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupportMessageSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ticketId?: boolean;
    authorId?: boolean;
    isStaff?: boolean;
    body?: boolean;
    createdAt?: boolean;
    ticket?: boolean | Prisma.SupportTicketDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["supportMessage"]>;
export type SupportMessageSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ticketId?: boolean;
    authorId?: boolean;
    isStaff?: boolean;
    body?: boolean;
    createdAt?: boolean;
    ticket?: boolean | Prisma.SupportTicketDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["supportMessage"]>;
export type SupportMessageSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ticketId?: boolean;
    authorId?: boolean;
    isStaff?: boolean;
    body?: boolean;
    createdAt?: boolean;
    ticket?: boolean | Prisma.SupportTicketDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["supportMessage"]>;
export type SupportMessageSelectScalar = {
    id?: boolean;
    ticketId?: boolean;
    authorId?: boolean;
    isStaff?: boolean;
    body?: boolean;
    createdAt?: boolean;
};
export type SupportMessageOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "ticketId" | "authorId" | "isStaff" | "body" | "createdAt", ExtArgs["result"]["supportMessage"]>;
export type SupportMessageInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ticket?: boolean | Prisma.SupportTicketDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type SupportMessageIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ticket?: boolean | Prisma.SupportTicketDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type SupportMessageIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ticket?: boolean | Prisma.SupportTicketDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $SupportMessagePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SupportMessage";
    objects: {
        ticket: Prisma.$SupportTicketPayload<ExtArgs>;
        author: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        ticketId: string;
        authorId: string;
        isStaff: boolean;
        body: string;
        createdAt: Date;
    }, ExtArgs["result"]["supportMessage"]>;
    composites: {};
};
export type SupportMessageGetPayload<S extends boolean | null | undefined | SupportMessageDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SupportMessagePayload, S>;
export type SupportMessageCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SupportMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SupportMessageCountAggregateInputType | true;
};
export interface SupportMessageDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SupportMessage'];
        meta: {
            name: 'SupportMessage';
        };
    };
    findUnique<T extends SupportMessageFindUniqueArgs>(args: Prisma.SelectSubset<T, SupportMessageFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SupportMessageClient<runtime.Types.Result.GetResult<Prisma.$SupportMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SupportMessageFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SupportMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SupportMessageClient<runtime.Types.Result.GetResult<Prisma.$SupportMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SupportMessageFindFirstArgs>(args?: Prisma.SelectSubset<T, SupportMessageFindFirstArgs<ExtArgs>>): Prisma.Prisma__SupportMessageClient<runtime.Types.Result.GetResult<Prisma.$SupportMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SupportMessageFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SupportMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SupportMessageClient<runtime.Types.Result.GetResult<Prisma.$SupportMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SupportMessageFindManyArgs>(args?: Prisma.SelectSubset<T, SupportMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupportMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SupportMessageCreateArgs>(args: Prisma.SelectSubset<T, SupportMessageCreateArgs<ExtArgs>>): Prisma.Prisma__SupportMessageClient<runtime.Types.Result.GetResult<Prisma.$SupportMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SupportMessageCreateManyArgs>(args?: Prisma.SelectSubset<T, SupportMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SupportMessageCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SupportMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupportMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SupportMessageDeleteArgs>(args: Prisma.SelectSubset<T, SupportMessageDeleteArgs<ExtArgs>>): Prisma.Prisma__SupportMessageClient<runtime.Types.Result.GetResult<Prisma.$SupportMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SupportMessageUpdateArgs>(args: Prisma.SelectSubset<T, SupportMessageUpdateArgs<ExtArgs>>): Prisma.Prisma__SupportMessageClient<runtime.Types.Result.GetResult<Prisma.$SupportMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SupportMessageDeleteManyArgs>(args?: Prisma.SelectSubset<T, SupportMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SupportMessageUpdateManyArgs>(args: Prisma.SelectSubset<T, SupportMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SupportMessageUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SupportMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupportMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SupportMessageUpsertArgs>(args: Prisma.SelectSubset<T, SupportMessageUpsertArgs<ExtArgs>>): Prisma.Prisma__SupportMessageClient<runtime.Types.Result.GetResult<Prisma.$SupportMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SupportMessageCountArgs>(args?: Prisma.Subset<T, SupportMessageCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SupportMessageCountAggregateOutputType> : number>;
    aggregate<T extends SupportMessageAggregateArgs>(args: Prisma.Subset<T, SupportMessageAggregateArgs>): Prisma.PrismaPromise<GetSupportMessageAggregateType<T>>;
    groupBy<T extends SupportMessageGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SupportMessageGroupByArgs['orderBy'];
    } : {
        orderBy?: SupportMessageGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SupportMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupportMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SupportMessageFieldRefs;
}
export interface Prisma__SupportMessageClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    ticket<T extends Prisma.SupportTicketDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SupportTicketDefaultArgs<ExtArgs>>): Prisma.Prisma__SupportTicketClient<runtime.Types.Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    author<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SupportMessageFieldRefs {
    readonly id: Prisma.FieldRef<"SupportMessage", 'String'>;
    readonly ticketId: Prisma.FieldRef<"SupportMessage", 'String'>;
    readonly authorId: Prisma.FieldRef<"SupportMessage", 'String'>;
    readonly isStaff: Prisma.FieldRef<"SupportMessage", 'Boolean'>;
    readonly body: Prisma.FieldRef<"SupportMessage", 'String'>;
    readonly createdAt: Prisma.FieldRef<"SupportMessage", 'DateTime'>;
}
export type SupportMessageFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupportMessageSelect<ExtArgs> | null;
    omit?: Prisma.SupportMessageOmit<ExtArgs> | null;
    include?: Prisma.SupportMessageInclude<ExtArgs> | null;
    where: Prisma.SupportMessageWhereUniqueInput;
};
export type SupportMessageFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupportMessageSelect<ExtArgs> | null;
    omit?: Prisma.SupportMessageOmit<ExtArgs> | null;
    include?: Prisma.SupportMessageInclude<ExtArgs> | null;
    where: Prisma.SupportMessageWhereUniqueInput;
};
export type SupportMessageFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupportMessageSelect<ExtArgs> | null;
    omit?: Prisma.SupportMessageOmit<ExtArgs> | null;
    include?: Prisma.SupportMessageInclude<ExtArgs> | null;
    where?: Prisma.SupportMessageWhereInput;
    orderBy?: Prisma.SupportMessageOrderByWithRelationInput | Prisma.SupportMessageOrderByWithRelationInput[];
    cursor?: Prisma.SupportMessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SupportMessageScalarFieldEnum | Prisma.SupportMessageScalarFieldEnum[];
};
export type SupportMessageFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupportMessageSelect<ExtArgs> | null;
    omit?: Prisma.SupportMessageOmit<ExtArgs> | null;
    include?: Prisma.SupportMessageInclude<ExtArgs> | null;
    where?: Prisma.SupportMessageWhereInput;
    orderBy?: Prisma.SupportMessageOrderByWithRelationInput | Prisma.SupportMessageOrderByWithRelationInput[];
    cursor?: Prisma.SupportMessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SupportMessageScalarFieldEnum | Prisma.SupportMessageScalarFieldEnum[];
};
export type SupportMessageFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupportMessageSelect<ExtArgs> | null;
    omit?: Prisma.SupportMessageOmit<ExtArgs> | null;
    include?: Prisma.SupportMessageInclude<ExtArgs> | null;
    where?: Prisma.SupportMessageWhereInput;
    orderBy?: Prisma.SupportMessageOrderByWithRelationInput | Prisma.SupportMessageOrderByWithRelationInput[];
    cursor?: Prisma.SupportMessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SupportMessageScalarFieldEnum | Prisma.SupportMessageScalarFieldEnum[];
};
export type SupportMessageCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupportMessageSelect<ExtArgs> | null;
    omit?: Prisma.SupportMessageOmit<ExtArgs> | null;
    include?: Prisma.SupportMessageInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SupportMessageCreateInput, Prisma.SupportMessageUncheckedCreateInput>;
};
export type SupportMessageCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SupportMessageCreateManyInput | Prisma.SupportMessageCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SupportMessageCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupportMessageSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SupportMessageOmit<ExtArgs> | null;
    data: Prisma.SupportMessageCreateManyInput | Prisma.SupportMessageCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SupportMessageIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SupportMessageUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupportMessageSelect<ExtArgs> | null;
    omit?: Prisma.SupportMessageOmit<ExtArgs> | null;
    include?: Prisma.SupportMessageInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SupportMessageUpdateInput, Prisma.SupportMessageUncheckedUpdateInput>;
    where: Prisma.SupportMessageWhereUniqueInput;
};
export type SupportMessageUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SupportMessageUpdateManyMutationInput, Prisma.SupportMessageUncheckedUpdateManyInput>;
    where?: Prisma.SupportMessageWhereInput;
    limit?: number;
};
export type SupportMessageUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupportMessageSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SupportMessageOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SupportMessageUpdateManyMutationInput, Prisma.SupportMessageUncheckedUpdateManyInput>;
    where?: Prisma.SupportMessageWhereInput;
    limit?: number;
    include?: Prisma.SupportMessageIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SupportMessageUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupportMessageSelect<ExtArgs> | null;
    omit?: Prisma.SupportMessageOmit<ExtArgs> | null;
    include?: Prisma.SupportMessageInclude<ExtArgs> | null;
    where: Prisma.SupportMessageWhereUniqueInput;
    create: Prisma.XOR<Prisma.SupportMessageCreateInput, Prisma.SupportMessageUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SupportMessageUpdateInput, Prisma.SupportMessageUncheckedUpdateInput>;
};
export type SupportMessageDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupportMessageSelect<ExtArgs> | null;
    omit?: Prisma.SupportMessageOmit<ExtArgs> | null;
    include?: Prisma.SupportMessageInclude<ExtArgs> | null;
    where: Prisma.SupportMessageWhereUniqueInput;
};
export type SupportMessageDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupportMessageWhereInput;
    limit?: number;
};
export type SupportMessageDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupportMessageSelect<ExtArgs> | null;
    omit?: Prisma.SupportMessageOmit<ExtArgs> | null;
    include?: Prisma.SupportMessageInclude<ExtArgs> | null;
};
