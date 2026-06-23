import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type SupportTicketModel = runtime.Types.Result.DefaultSelection<Prisma.$SupportTicketPayload>;
export type AggregateSupportTicket = {
    _count: SupportTicketCountAggregateOutputType | null;
    _min: SupportTicketMinAggregateOutputType | null;
    _max: SupportTicketMaxAggregateOutputType | null;
};
export type SupportTicketMinAggregateOutputType = {
    id: string | null;
    ticketNumber: string | null;
    userId: string | null;
    subject: string | null;
    status: $Enums.SupportTicketStatus | null;
    closedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SupportTicketMaxAggregateOutputType = {
    id: string | null;
    ticketNumber: string | null;
    userId: string | null;
    subject: string | null;
    status: $Enums.SupportTicketStatus | null;
    closedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SupportTicketCountAggregateOutputType = {
    id: number;
    ticketNumber: number;
    userId: number;
    subject: number;
    status: number;
    closedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SupportTicketMinAggregateInputType = {
    id?: true;
    ticketNumber?: true;
    userId?: true;
    subject?: true;
    status?: true;
    closedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SupportTicketMaxAggregateInputType = {
    id?: true;
    ticketNumber?: true;
    userId?: true;
    subject?: true;
    status?: true;
    closedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SupportTicketCountAggregateInputType = {
    id?: true;
    ticketNumber?: true;
    userId?: true;
    subject?: true;
    status?: true;
    closedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SupportTicketAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupportTicketWhereInput;
    orderBy?: Prisma.SupportTicketOrderByWithRelationInput | Prisma.SupportTicketOrderByWithRelationInput[];
    cursor?: Prisma.SupportTicketWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SupportTicketCountAggregateInputType;
    _min?: SupportTicketMinAggregateInputType;
    _max?: SupportTicketMaxAggregateInputType;
};
export type GetSupportTicketAggregateType<T extends SupportTicketAggregateArgs> = {
    [P in keyof T & keyof AggregateSupportTicket]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSupportTicket[P]> : Prisma.GetScalarType<T[P], AggregateSupportTicket[P]>;
};
export type SupportTicketGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupportTicketWhereInput;
    orderBy?: Prisma.SupportTicketOrderByWithAggregationInput | Prisma.SupportTicketOrderByWithAggregationInput[];
    by: Prisma.SupportTicketScalarFieldEnum[] | Prisma.SupportTicketScalarFieldEnum;
    having?: Prisma.SupportTicketScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SupportTicketCountAggregateInputType | true;
    _min?: SupportTicketMinAggregateInputType;
    _max?: SupportTicketMaxAggregateInputType;
};
export type SupportTicketGroupByOutputType = {
    id: string;
    ticketNumber: string;
    userId: string;
    subject: string;
    status: $Enums.SupportTicketStatus;
    closedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: SupportTicketCountAggregateOutputType | null;
    _min: SupportTicketMinAggregateOutputType | null;
    _max: SupportTicketMaxAggregateOutputType | null;
};
export type GetSupportTicketGroupByPayload<T extends SupportTicketGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SupportTicketGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SupportTicketGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SupportTicketGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SupportTicketGroupByOutputType[P]>;
}>>;
export type SupportTicketWhereInput = {
    AND?: Prisma.SupportTicketWhereInput | Prisma.SupportTicketWhereInput[];
    OR?: Prisma.SupportTicketWhereInput[];
    NOT?: Prisma.SupportTicketWhereInput | Prisma.SupportTicketWhereInput[];
    id?: Prisma.StringFilter<"SupportTicket"> | string;
    ticketNumber?: Prisma.StringFilter<"SupportTicket"> | string;
    userId?: Prisma.StringFilter<"SupportTicket"> | string;
    subject?: Prisma.StringFilter<"SupportTicket"> | string;
    status?: Prisma.EnumSupportTicketStatusFilter<"SupportTicket"> | $Enums.SupportTicketStatus;
    closedAt?: Prisma.DateTimeNullableFilter<"SupportTicket"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"SupportTicket"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SupportTicket"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    messages?: Prisma.SupportMessageListRelationFilter;
};
export type SupportTicketOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    ticketNumber?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    closedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    messages?: Prisma.SupportMessageOrderByRelationAggregateInput;
};
export type SupportTicketWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    ticketNumber?: string;
    AND?: Prisma.SupportTicketWhereInput | Prisma.SupportTicketWhereInput[];
    OR?: Prisma.SupportTicketWhereInput[];
    NOT?: Prisma.SupportTicketWhereInput | Prisma.SupportTicketWhereInput[];
    userId?: Prisma.StringFilter<"SupportTicket"> | string;
    subject?: Prisma.StringFilter<"SupportTicket"> | string;
    status?: Prisma.EnumSupportTicketStatusFilter<"SupportTicket"> | $Enums.SupportTicketStatus;
    closedAt?: Prisma.DateTimeNullableFilter<"SupportTicket"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"SupportTicket"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SupportTicket"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    messages?: Prisma.SupportMessageListRelationFilter;
}, "id" | "ticketNumber">;
export type SupportTicketOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    ticketNumber?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    closedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SupportTicketCountOrderByAggregateInput;
    _max?: Prisma.SupportTicketMaxOrderByAggregateInput;
    _min?: Prisma.SupportTicketMinOrderByAggregateInput;
};
export type SupportTicketScalarWhereWithAggregatesInput = {
    AND?: Prisma.SupportTicketScalarWhereWithAggregatesInput | Prisma.SupportTicketScalarWhereWithAggregatesInput[];
    OR?: Prisma.SupportTicketScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SupportTicketScalarWhereWithAggregatesInput | Prisma.SupportTicketScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"SupportTicket"> | string;
    ticketNumber?: Prisma.StringWithAggregatesFilter<"SupportTicket"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"SupportTicket"> | string;
    subject?: Prisma.StringWithAggregatesFilter<"SupportTicket"> | string;
    status?: Prisma.EnumSupportTicketStatusWithAggregatesFilter<"SupportTicket"> | $Enums.SupportTicketStatus;
    closedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"SupportTicket"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SupportTicket"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"SupportTicket"> | Date | string;
};
export type SupportTicketCreateInput = {
    id?: string;
    ticketNumber: string;
    subject: string;
    status?: $Enums.SupportTicketStatus;
    closedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutSupportTicketsInput;
    messages?: Prisma.SupportMessageCreateNestedManyWithoutTicketInput;
};
export type SupportTicketUncheckedCreateInput = {
    id?: string;
    ticketNumber: string;
    userId: string;
    subject: string;
    status?: $Enums.SupportTicketStatus;
    closedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    messages?: Prisma.SupportMessageUncheckedCreateNestedManyWithoutTicketInput;
};
export type SupportTicketUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSupportTicketStatusFieldUpdateOperationsInput | $Enums.SupportTicketStatus;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutSupportTicketsNestedInput;
    messages?: Prisma.SupportMessageUpdateManyWithoutTicketNestedInput;
};
export type SupportTicketUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSupportTicketStatusFieldUpdateOperationsInput | $Enums.SupportTicketStatus;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: Prisma.SupportMessageUncheckedUpdateManyWithoutTicketNestedInput;
};
export type SupportTicketCreateManyInput = {
    id?: string;
    ticketNumber: string;
    userId: string;
    subject: string;
    status?: $Enums.SupportTicketStatus;
    closedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SupportTicketUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSupportTicketStatusFieldUpdateOperationsInput | $Enums.SupportTicketStatus;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupportTicketUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSupportTicketStatusFieldUpdateOperationsInput | $Enums.SupportTicketStatus;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupportTicketListRelationFilter = {
    every?: Prisma.SupportTicketWhereInput;
    some?: Prisma.SupportTicketWhereInput;
    none?: Prisma.SupportTicketWhereInput;
};
export type SupportTicketOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SupportTicketCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ticketNumber?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    closedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SupportTicketMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ticketNumber?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    closedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SupportTicketMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ticketNumber?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    closedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SupportTicketScalarRelationFilter = {
    is?: Prisma.SupportTicketWhereInput;
    isNot?: Prisma.SupportTicketWhereInput;
};
export type SupportTicketCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.SupportTicketCreateWithoutUserInput, Prisma.SupportTicketUncheckedCreateWithoutUserInput> | Prisma.SupportTicketCreateWithoutUserInput[] | Prisma.SupportTicketUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SupportTicketCreateOrConnectWithoutUserInput | Prisma.SupportTicketCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.SupportTicketCreateManyUserInputEnvelope;
    connect?: Prisma.SupportTicketWhereUniqueInput | Prisma.SupportTicketWhereUniqueInput[];
};
export type SupportTicketUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.SupportTicketCreateWithoutUserInput, Prisma.SupportTicketUncheckedCreateWithoutUserInput> | Prisma.SupportTicketCreateWithoutUserInput[] | Prisma.SupportTicketUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SupportTicketCreateOrConnectWithoutUserInput | Prisma.SupportTicketCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.SupportTicketCreateManyUserInputEnvelope;
    connect?: Prisma.SupportTicketWhereUniqueInput | Prisma.SupportTicketWhereUniqueInput[];
};
export type SupportTicketUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.SupportTicketCreateWithoutUserInput, Prisma.SupportTicketUncheckedCreateWithoutUserInput> | Prisma.SupportTicketCreateWithoutUserInput[] | Prisma.SupportTicketUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SupportTicketCreateOrConnectWithoutUserInput | Prisma.SupportTicketCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.SupportTicketUpsertWithWhereUniqueWithoutUserInput | Prisma.SupportTicketUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.SupportTicketCreateManyUserInputEnvelope;
    set?: Prisma.SupportTicketWhereUniqueInput | Prisma.SupportTicketWhereUniqueInput[];
    disconnect?: Prisma.SupportTicketWhereUniqueInput | Prisma.SupportTicketWhereUniqueInput[];
    delete?: Prisma.SupportTicketWhereUniqueInput | Prisma.SupportTicketWhereUniqueInput[];
    connect?: Prisma.SupportTicketWhereUniqueInput | Prisma.SupportTicketWhereUniqueInput[];
    update?: Prisma.SupportTicketUpdateWithWhereUniqueWithoutUserInput | Prisma.SupportTicketUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.SupportTicketUpdateManyWithWhereWithoutUserInput | Prisma.SupportTicketUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.SupportTicketScalarWhereInput | Prisma.SupportTicketScalarWhereInput[];
};
export type SupportTicketUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.SupportTicketCreateWithoutUserInput, Prisma.SupportTicketUncheckedCreateWithoutUserInput> | Prisma.SupportTicketCreateWithoutUserInput[] | Prisma.SupportTicketUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SupportTicketCreateOrConnectWithoutUserInput | Prisma.SupportTicketCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.SupportTicketUpsertWithWhereUniqueWithoutUserInput | Prisma.SupportTicketUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.SupportTicketCreateManyUserInputEnvelope;
    set?: Prisma.SupportTicketWhereUniqueInput | Prisma.SupportTicketWhereUniqueInput[];
    disconnect?: Prisma.SupportTicketWhereUniqueInput | Prisma.SupportTicketWhereUniqueInput[];
    delete?: Prisma.SupportTicketWhereUniqueInput | Prisma.SupportTicketWhereUniqueInput[];
    connect?: Prisma.SupportTicketWhereUniqueInput | Prisma.SupportTicketWhereUniqueInput[];
    update?: Prisma.SupportTicketUpdateWithWhereUniqueWithoutUserInput | Prisma.SupportTicketUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.SupportTicketUpdateManyWithWhereWithoutUserInput | Prisma.SupportTicketUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.SupportTicketScalarWhereInput | Prisma.SupportTicketScalarWhereInput[];
};
export type EnumSupportTicketStatusFieldUpdateOperationsInput = {
    set?: $Enums.SupportTicketStatus;
};
export type SupportTicketCreateNestedOneWithoutMessagesInput = {
    create?: Prisma.XOR<Prisma.SupportTicketCreateWithoutMessagesInput, Prisma.SupportTicketUncheckedCreateWithoutMessagesInput>;
    connectOrCreate?: Prisma.SupportTicketCreateOrConnectWithoutMessagesInput;
    connect?: Prisma.SupportTicketWhereUniqueInput;
};
export type SupportTicketUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: Prisma.XOR<Prisma.SupportTicketCreateWithoutMessagesInput, Prisma.SupportTicketUncheckedCreateWithoutMessagesInput>;
    connectOrCreate?: Prisma.SupportTicketCreateOrConnectWithoutMessagesInput;
    upsert?: Prisma.SupportTicketUpsertWithoutMessagesInput;
    connect?: Prisma.SupportTicketWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SupportTicketUpdateToOneWithWhereWithoutMessagesInput, Prisma.SupportTicketUpdateWithoutMessagesInput>, Prisma.SupportTicketUncheckedUpdateWithoutMessagesInput>;
};
export type SupportTicketCreateWithoutUserInput = {
    id?: string;
    ticketNumber: string;
    subject: string;
    status?: $Enums.SupportTicketStatus;
    closedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    messages?: Prisma.SupportMessageCreateNestedManyWithoutTicketInput;
};
export type SupportTicketUncheckedCreateWithoutUserInput = {
    id?: string;
    ticketNumber: string;
    subject: string;
    status?: $Enums.SupportTicketStatus;
    closedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    messages?: Prisma.SupportMessageUncheckedCreateNestedManyWithoutTicketInput;
};
export type SupportTicketCreateOrConnectWithoutUserInput = {
    where: Prisma.SupportTicketWhereUniqueInput;
    create: Prisma.XOR<Prisma.SupportTicketCreateWithoutUserInput, Prisma.SupportTicketUncheckedCreateWithoutUserInput>;
};
export type SupportTicketCreateManyUserInputEnvelope = {
    data: Prisma.SupportTicketCreateManyUserInput | Prisma.SupportTicketCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type SupportTicketUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.SupportTicketWhereUniqueInput;
    update: Prisma.XOR<Prisma.SupportTicketUpdateWithoutUserInput, Prisma.SupportTicketUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.SupportTicketCreateWithoutUserInput, Prisma.SupportTicketUncheckedCreateWithoutUserInput>;
};
export type SupportTicketUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.SupportTicketWhereUniqueInput;
    data: Prisma.XOR<Prisma.SupportTicketUpdateWithoutUserInput, Prisma.SupportTicketUncheckedUpdateWithoutUserInput>;
};
export type SupportTicketUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.SupportTicketScalarWhereInput;
    data: Prisma.XOR<Prisma.SupportTicketUpdateManyMutationInput, Prisma.SupportTicketUncheckedUpdateManyWithoutUserInput>;
};
export type SupportTicketScalarWhereInput = {
    AND?: Prisma.SupportTicketScalarWhereInput | Prisma.SupportTicketScalarWhereInput[];
    OR?: Prisma.SupportTicketScalarWhereInput[];
    NOT?: Prisma.SupportTicketScalarWhereInput | Prisma.SupportTicketScalarWhereInput[];
    id?: Prisma.StringFilter<"SupportTicket"> | string;
    ticketNumber?: Prisma.StringFilter<"SupportTicket"> | string;
    userId?: Prisma.StringFilter<"SupportTicket"> | string;
    subject?: Prisma.StringFilter<"SupportTicket"> | string;
    status?: Prisma.EnumSupportTicketStatusFilter<"SupportTicket"> | $Enums.SupportTicketStatus;
    closedAt?: Prisma.DateTimeNullableFilter<"SupportTicket"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"SupportTicket"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SupportTicket"> | Date | string;
};
export type SupportTicketCreateWithoutMessagesInput = {
    id?: string;
    ticketNumber: string;
    subject: string;
    status?: $Enums.SupportTicketStatus;
    closedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutSupportTicketsInput;
};
export type SupportTicketUncheckedCreateWithoutMessagesInput = {
    id?: string;
    ticketNumber: string;
    userId: string;
    subject: string;
    status?: $Enums.SupportTicketStatus;
    closedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SupportTicketCreateOrConnectWithoutMessagesInput = {
    where: Prisma.SupportTicketWhereUniqueInput;
    create: Prisma.XOR<Prisma.SupportTicketCreateWithoutMessagesInput, Prisma.SupportTicketUncheckedCreateWithoutMessagesInput>;
};
export type SupportTicketUpsertWithoutMessagesInput = {
    update: Prisma.XOR<Prisma.SupportTicketUpdateWithoutMessagesInput, Prisma.SupportTicketUncheckedUpdateWithoutMessagesInput>;
    create: Prisma.XOR<Prisma.SupportTicketCreateWithoutMessagesInput, Prisma.SupportTicketUncheckedCreateWithoutMessagesInput>;
    where?: Prisma.SupportTicketWhereInput;
};
export type SupportTicketUpdateToOneWithWhereWithoutMessagesInput = {
    where?: Prisma.SupportTicketWhereInput;
    data: Prisma.XOR<Prisma.SupportTicketUpdateWithoutMessagesInput, Prisma.SupportTicketUncheckedUpdateWithoutMessagesInput>;
};
export type SupportTicketUpdateWithoutMessagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSupportTicketStatusFieldUpdateOperationsInput | $Enums.SupportTicketStatus;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutSupportTicketsNestedInput;
};
export type SupportTicketUncheckedUpdateWithoutMessagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSupportTicketStatusFieldUpdateOperationsInput | $Enums.SupportTicketStatus;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupportTicketCreateManyUserInput = {
    id?: string;
    ticketNumber: string;
    subject: string;
    status?: $Enums.SupportTicketStatus;
    closedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SupportTicketUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSupportTicketStatusFieldUpdateOperationsInput | $Enums.SupportTicketStatus;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: Prisma.SupportMessageUpdateManyWithoutTicketNestedInput;
};
export type SupportTicketUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSupportTicketStatusFieldUpdateOperationsInput | $Enums.SupportTicketStatus;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: Prisma.SupportMessageUncheckedUpdateManyWithoutTicketNestedInput;
};
export type SupportTicketUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSupportTicketStatusFieldUpdateOperationsInput | $Enums.SupportTicketStatus;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupportTicketCountOutputType = {
    messages: number;
};
export type SupportTicketCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    messages?: boolean | SupportTicketCountOutputTypeCountMessagesArgs;
};
export type SupportTicketCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupportTicketCountOutputTypeSelect<ExtArgs> | null;
};
export type SupportTicketCountOutputTypeCountMessagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupportMessageWhereInput;
};
export type SupportTicketSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ticketNumber?: boolean;
    userId?: boolean;
    subject?: boolean;
    status?: boolean;
    closedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    messages?: boolean | Prisma.SupportTicket$messagesArgs<ExtArgs>;
    _count?: boolean | Prisma.SupportTicketCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["supportTicket"]>;
export type SupportTicketSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ticketNumber?: boolean;
    userId?: boolean;
    subject?: boolean;
    status?: boolean;
    closedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["supportTicket"]>;
export type SupportTicketSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ticketNumber?: boolean;
    userId?: boolean;
    subject?: boolean;
    status?: boolean;
    closedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["supportTicket"]>;
export type SupportTicketSelectScalar = {
    id?: boolean;
    ticketNumber?: boolean;
    userId?: boolean;
    subject?: boolean;
    status?: boolean;
    closedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SupportTicketOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "ticketNumber" | "userId" | "subject" | "status" | "closedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["supportTicket"]>;
export type SupportTicketInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    messages?: boolean | Prisma.SupportTicket$messagesArgs<ExtArgs>;
    _count?: boolean | Prisma.SupportTicketCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SupportTicketIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type SupportTicketIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $SupportTicketPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SupportTicket";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        messages: Prisma.$SupportMessagePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        ticketNumber: string;
        userId: string;
        subject: string;
        status: $Enums.SupportTicketStatus;
        closedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["supportTicket"]>;
    composites: {};
};
export type SupportTicketGetPayload<S extends boolean | null | undefined | SupportTicketDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SupportTicketPayload, S>;
export type SupportTicketCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SupportTicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SupportTicketCountAggregateInputType | true;
};
export interface SupportTicketDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SupportTicket'];
        meta: {
            name: 'SupportTicket';
        };
    };
    findUnique<T extends SupportTicketFindUniqueArgs>(args: Prisma.SelectSubset<T, SupportTicketFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SupportTicketClient<runtime.Types.Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SupportTicketFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SupportTicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SupportTicketClient<runtime.Types.Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SupportTicketFindFirstArgs>(args?: Prisma.SelectSubset<T, SupportTicketFindFirstArgs<ExtArgs>>): Prisma.Prisma__SupportTicketClient<runtime.Types.Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SupportTicketFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SupportTicketFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SupportTicketClient<runtime.Types.Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SupportTicketFindManyArgs>(args?: Prisma.SelectSubset<T, SupportTicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SupportTicketCreateArgs>(args: Prisma.SelectSubset<T, SupportTicketCreateArgs<ExtArgs>>): Prisma.Prisma__SupportTicketClient<runtime.Types.Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SupportTicketCreateManyArgs>(args?: Prisma.SelectSubset<T, SupportTicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SupportTicketCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SupportTicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SupportTicketDeleteArgs>(args: Prisma.SelectSubset<T, SupportTicketDeleteArgs<ExtArgs>>): Prisma.Prisma__SupportTicketClient<runtime.Types.Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SupportTicketUpdateArgs>(args: Prisma.SelectSubset<T, SupportTicketUpdateArgs<ExtArgs>>): Prisma.Prisma__SupportTicketClient<runtime.Types.Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SupportTicketDeleteManyArgs>(args?: Prisma.SelectSubset<T, SupportTicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SupportTicketUpdateManyArgs>(args: Prisma.SelectSubset<T, SupportTicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SupportTicketUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SupportTicketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SupportTicketUpsertArgs>(args: Prisma.SelectSubset<T, SupportTicketUpsertArgs<ExtArgs>>): Prisma.Prisma__SupportTicketClient<runtime.Types.Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SupportTicketCountArgs>(args?: Prisma.Subset<T, SupportTicketCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SupportTicketCountAggregateOutputType> : number>;
    aggregate<T extends SupportTicketAggregateArgs>(args: Prisma.Subset<T, SupportTicketAggregateArgs>): Prisma.PrismaPromise<GetSupportTicketAggregateType<T>>;
    groupBy<T extends SupportTicketGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SupportTicketGroupByArgs['orderBy'];
    } : {
        orderBy?: SupportTicketGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SupportTicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupportTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SupportTicketFieldRefs;
}
export interface Prisma__SupportTicketClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    messages<T extends Prisma.SupportTicket$messagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SupportTicket$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupportMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SupportTicketFieldRefs {
    readonly id: Prisma.FieldRef<"SupportTicket", 'String'>;
    readonly ticketNumber: Prisma.FieldRef<"SupportTicket", 'String'>;
    readonly userId: Prisma.FieldRef<"SupportTicket", 'String'>;
    readonly subject: Prisma.FieldRef<"SupportTicket", 'String'>;
    readonly status: Prisma.FieldRef<"SupportTicket", 'SupportTicketStatus'>;
    readonly closedAt: Prisma.FieldRef<"SupportTicket", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"SupportTicket", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"SupportTicket", 'DateTime'>;
}
export type SupportTicketFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupportTicketSelect<ExtArgs> | null;
    omit?: Prisma.SupportTicketOmit<ExtArgs> | null;
    include?: Prisma.SupportTicketInclude<ExtArgs> | null;
    where: Prisma.SupportTicketWhereUniqueInput;
};
export type SupportTicketFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupportTicketSelect<ExtArgs> | null;
    omit?: Prisma.SupportTicketOmit<ExtArgs> | null;
    include?: Prisma.SupportTicketInclude<ExtArgs> | null;
    where: Prisma.SupportTicketWhereUniqueInput;
};
export type SupportTicketFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupportTicketSelect<ExtArgs> | null;
    omit?: Prisma.SupportTicketOmit<ExtArgs> | null;
    include?: Prisma.SupportTicketInclude<ExtArgs> | null;
    where?: Prisma.SupportTicketWhereInput;
    orderBy?: Prisma.SupportTicketOrderByWithRelationInput | Prisma.SupportTicketOrderByWithRelationInput[];
    cursor?: Prisma.SupportTicketWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SupportTicketScalarFieldEnum | Prisma.SupportTicketScalarFieldEnum[];
};
export type SupportTicketFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupportTicketSelect<ExtArgs> | null;
    omit?: Prisma.SupportTicketOmit<ExtArgs> | null;
    include?: Prisma.SupportTicketInclude<ExtArgs> | null;
    where?: Prisma.SupportTicketWhereInput;
    orderBy?: Prisma.SupportTicketOrderByWithRelationInput | Prisma.SupportTicketOrderByWithRelationInput[];
    cursor?: Prisma.SupportTicketWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SupportTicketScalarFieldEnum | Prisma.SupportTicketScalarFieldEnum[];
};
export type SupportTicketFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupportTicketSelect<ExtArgs> | null;
    omit?: Prisma.SupportTicketOmit<ExtArgs> | null;
    include?: Prisma.SupportTicketInclude<ExtArgs> | null;
    where?: Prisma.SupportTicketWhereInput;
    orderBy?: Prisma.SupportTicketOrderByWithRelationInput | Prisma.SupportTicketOrderByWithRelationInput[];
    cursor?: Prisma.SupportTicketWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SupportTicketScalarFieldEnum | Prisma.SupportTicketScalarFieldEnum[];
};
export type SupportTicketCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupportTicketSelect<ExtArgs> | null;
    omit?: Prisma.SupportTicketOmit<ExtArgs> | null;
    include?: Prisma.SupportTicketInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SupportTicketCreateInput, Prisma.SupportTicketUncheckedCreateInput>;
};
export type SupportTicketCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SupportTicketCreateManyInput | Prisma.SupportTicketCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SupportTicketCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupportTicketSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SupportTicketOmit<ExtArgs> | null;
    data: Prisma.SupportTicketCreateManyInput | Prisma.SupportTicketCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SupportTicketIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SupportTicketUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupportTicketSelect<ExtArgs> | null;
    omit?: Prisma.SupportTicketOmit<ExtArgs> | null;
    include?: Prisma.SupportTicketInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SupportTicketUpdateInput, Prisma.SupportTicketUncheckedUpdateInput>;
    where: Prisma.SupportTicketWhereUniqueInput;
};
export type SupportTicketUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SupportTicketUpdateManyMutationInput, Prisma.SupportTicketUncheckedUpdateManyInput>;
    where?: Prisma.SupportTicketWhereInput;
    limit?: number;
};
export type SupportTicketUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupportTicketSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SupportTicketOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SupportTicketUpdateManyMutationInput, Prisma.SupportTicketUncheckedUpdateManyInput>;
    where?: Prisma.SupportTicketWhereInput;
    limit?: number;
    include?: Prisma.SupportTicketIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SupportTicketUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupportTicketSelect<ExtArgs> | null;
    omit?: Prisma.SupportTicketOmit<ExtArgs> | null;
    include?: Prisma.SupportTicketInclude<ExtArgs> | null;
    where: Prisma.SupportTicketWhereUniqueInput;
    create: Prisma.XOR<Prisma.SupportTicketCreateInput, Prisma.SupportTicketUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SupportTicketUpdateInput, Prisma.SupportTicketUncheckedUpdateInput>;
};
export type SupportTicketDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupportTicketSelect<ExtArgs> | null;
    omit?: Prisma.SupportTicketOmit<ExtArgs> | null;
    include?: Prisma.SupportTicketInclude<ExtArgs> | null;
    where: Prisma.SupportTicketWhereUniqueInput;
};
export type SupportTicketDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupportTicketWhereInput;
    limit?: number;
};
export type SupportTicket$messagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SupportTicketDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SupportTicketSelect<ExtArgs> | null;
    omit?: Prisma.SupportTicketOmit<ExtArgs> | null;
    include?: Prisma.SupportTicketInclude<ExtArgs> | null;
};
