import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly IpBlock: "IpBlock";
    readonly Script: "Script";
    readonly ScriptMedia: "ScriptMedia";
    readonly ScriptVersion: "ScriptVersion";
    readonly Purchase: "Purchase";
    readonly ScriptView: "ScriptView";
    readonly ScriptClick: "ScriptClick";
    readonly Comment: "Comment";
    readonly SupportTicket: "SupportTicket";
    readonly SupportMessage: "SupportMessage";
    readonly Notification: "Notification";
    readonly Payment: "Payment";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly steamId: "steamId";
    readonly username: "username";
    readonly avatarUrl: "avatarUrl";
    readonly balance: "balance";
    readonly role: "role";
    readonly isBlocked: "isBlocked";
    readonly blockedReason: "blockedReason";
    readonly lastLoginIp: "lastLoginIp";
    readonly lastLoginAt: "lastLoginAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const IpBlockScalarFieldEnum: {
    readonly id: "id";
    readonly ip: "ip";
    readonly reason: "reason";
    readonly createdById: "createdById";
    readonly createdAt: "createdAt";
};
export type IpBlockScalarFieldEnum = (typeof IpBlockScalarFieldEnum)[keyof typeof IpBlockScalarFieldEnum];
export declare const ScriptScalarFieldEnum: {
    readonly id: "id";
    readonly slug: "slug";
    readonly title: "title";
    readonly shortDescription: "shortDescription";
    readonly gameCategory: "gameCategory";
    readonly priceRub: "priceRub";
    readonly priceUsd: "priceUsd";
    readonly discountPercent: "discountPercent";
    readonly badge: "badge";
    readonly instructionHtml: "instructionHtml";
    readonly isPublished: "isPublished";
    readonly featuredOnHome: "featuredOnHome";
    readonly publishedAt: "publishedAt";
    readonly fileUpdatedAt: "fileUpdatedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ScriptScalarFieldEnum = (typeof ScriptScalarFieldEnum)[keyof typeof ScriptScalarFieldEnum];
export declare const ScriptMediaScalarFieldEnum: {
    readonly id: "id";
    readonly scriptId: "scriptId";
    readonly type: "type";
    readonly url: "url";
    readonly sortOrder: "sortOrder";
    readonly createdAt: "createdAt";
};
export type ScriptMediaScalarFieldEnum = (typeof ScriptMediaScalarFieldEnum)[keyof typeof ScriptMediaScalarFieldEnum];
export declare const ScriptVersionScalarFieldEnum: {
    readonly id: "id";
    readonly scriptId: "scriptId";
    readonly versionLabel: "versionLabel";
    readonly storageKey: "storageKey";
    readonly fileName: "fileName";
    readonly fileSize: "fileSize";
    readonly checksum: "checksum";
    readonly releasedAt: "releasedAt";
    readonly isCurrent: "isCurrent";
    readonly createdAt: "createdAt";
};
export type ScriptVersionScalarFieldEnum = (typeof ScriptVersionScalarFieldEnum)[keyof typeof ScriptVersionScalarFieldEnum];
export declare const PurchaseScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly scriptId: "scriptId";
    readonly paymentId: "paymentId";
    readonly pricePaid: "pricePaid";
    readonly currency: "currency";
    readonly purchasedAt: "purchasedAt";
    readonly lastDownloadedVersionId: "lastDownloadedVersionId";
    readonly grantedByAdmin: "grantedByAdmin";
};
export type PurchaseScalarFieldEnum = (typeof PurchaseScalarFieldEnum)[keyof typeof PurchaseScalarFieldEnum];
export declare const ScriptViewScalarFieldEnum: {
    readonly id: "id";
    readonly scriptId: "scriptId";
    readonly userId: "userId";
    readonly ipHash: "ipHash";
    readonly createdAt: "createdAt";
};
export type ScriptViewScalarFieldEnum = (typeof ScriptViewScalarFieldEnum)[keyof typeof ScriptViewScalarFieldEnum];
export declare const ScriptClickScalarFieldEnum: {
    readonly id: "id";
    readonly scriptId: "scriptId";
    readonly userId: "userId";
    readonly ipHash: "ipHash";
    readonly createdAt: "createdAt";
};
export type ScriptClickScalarFieldEnum = (typeof ScriptClickScalarFieldEnum)[keyof typeof ScriptClickScalarFieldEnum];
export declare const CommentScalarFieldEnum: {
    readonly id: "id";
    readonly scriptId: "scriptId";
    readonly userId: "userId";
    readonly text: "text";
    readonly status: "status";
    readonly moderatedAt: "moderatedAt";
    readonly moderatedById: "moderatedById";
    readonly createdAt: "createdAt";
};
export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum];
export declare const SupportTicketScalarFieldEnum: {
    readonly id: "id";
    readonly ticketNumber: "ticketNumber";
    readonly userId: "userId";
    readonly subject: "subject";
    readonly status: "status";
    readonly closedAt: "closedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SupportTicketScalarFieldEnum = (typeof SupportTicketScalarFieldEnum)[keyof typeof SupportTicketScalarFieldEnum];
export declare const SupportMessageScalarFieldEnum: {
    readonly id: "id";
    readonly ticketId: "ticketId";
    readonly authorId: "authorId";
    readonly isStaff: "isStaff";
    readonly body: "body";
    readonly createdAt: "createdAt";
};
export type SupportMessageScalarFieldEnum = (typeof SupportMessageScalarFieldEnum)[keyof typeof SupportMessageScalarFieldEnum];
export declare const NotificationScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly type: "type";
    readonly title: "title";
    readonly body: "body";
    readonly payload: "payload";
    readonly readAt: "readAt";
    readonly createdAt: "createdAt";
};
export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];
export declare const PaymentScalarFieldEnum: {
    readonly id: "id";
    readonly orderId: "orderId";
    readonly type: "type";
    readonly game: "game";
    readonly steamId: "steamId";
    readonly userId: "userId";
    readonly scriptId: "scriptId";
    readonly amount: "amount";
    readonly description: "description";
    readonly status: "status";
    readonly paymentUrl: "paymentUrl";
    readonly unitpayId: "unitpayId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly paidAt: "paidAt";
    readonly wsNotifiedAt: "wsNotifiedAt";
};
export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
