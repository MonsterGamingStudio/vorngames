"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonNullValueFilter = exports.NullsOrder = exports.QueryMode = exports.NullableJsonNullValueInput = exports.SortOrder = exports.PaymentScalarFieldEnum = exports.NotificationScalarFieldEnum = exports.SupportMessageScalarFieldEnum = exports.SupportTicketScalarFieldEnum = exports.CommentScalarFieldEnum = exports.ScriptClickScalarFieldEnum = exports.ScriptViewScalarFieldEnum = exports.PurchaseScalarFieldEnum = exports.ScriptVersionScalarFieldEnum = exports.ScriptMediaScalarFieldEnum = exports.ScriptScalarFieldEnum = exports.IpBlockScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    User: 'User',
    IpBlock: 'IpBlock',
    Script: 'Script',
    ScriptMedia: 'ScriptMedia',
    ScriptVersion: 'ScriptVersion',
    Purchase: 'Purchase',
    ScriptView: 'ScriptView',
    ScriptClick: 'ScriptClick',
    Comment: 'Comment',
    SupportTicket: 'SupportTicket',
    SupportMessage: 'SupportMessage',
    Notification: 'Notification',
    Payment: 'Payment'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    id: 'id',
    steamId: 'steamId',
    username: 'username',
    avatarUrl: 'avatarUrl',
    balance: 'balance',
    role: 'role',
    isBlocked: 'isBlocked',
    blockedReason: 'blockedReason',
    lastLoginIp: 'lastLoginIp',
    lastLoginAt: 'lastLoginAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.IpBlockScalarFieldEnum = {
    id: 'id',
    ip: 'ip',
    reason: 'reason',
    createdById: 'createdById',
    createdAt: 'createdAt'
};
exports.ScriptScalarFieldEnum = {
    id: 'id',
    slug: 'slug',
    title: 'title',
    shortDescription: 'shortDescription',
    gameCategory: 'gameCategory',
    priceRub: 'priceRub',
    priceUsd: 'priceUsd',
    discountPercent: 'discountPercent',
    badge: 'badge',
    instructionHtml: 'instructionHtml',
    isPublished: 'isPublished',
    featuredOnHome: 'featuredOnHome',
    publishedAt: 'publishedAt',
    fileUpdatedAt: 'fileUpdatedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ScriptMediaScalarFieldEnum = {
    id: 'id',
    scriptId: 'scriptId',
    type: 'type',
    url: 'url',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt'
};
exports.ScriptVersionScalarFieldEnum = {
    id: 'id',
    scriptId: 'scriptId',
    versionLabel: 'versionLabel',
    storageKey: 'storageKey',
    fileName: 'fileName',
    fileSize: 'fileSize',
    checksum: 'checksum',
    releasedAt: 'releasedAt',
    isCurrent: 'isCurrent',
    createdAt: 'createdAt'
};
exports.PurchaseScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    scriptId: 'scriptId',
    paymentId: 'paymentId',
    pricePaid: 'pricePaid',
    currency: 'currency',
    purchasedAt: 'purchasedAt',
    lastDownloadedVersionId: 'lastDownloadedVersionId',
    grantedByAdmin: 'grantedByAdmin'
};
exports.ScriptViewScalarFieldEnum = {
    id: 'id',
    scriptId: 'scriptId',
    userId: 'userId',
    ipHash: 'ipHash',
    createdAt: 'createdAt'
};
exports.ScriptClickScalarFieldEnum = {
    id: 'id',
    scriptId: 'scriptId',
    userId: 'userId',
    ipHash: 'ipHash',
    createdAt: 'createdAt'
};
exports.CommentScalarFieldEnum = {
    id: 'id',
    scriptId: 'scriptId',
    userId: 'userId',
    text: 'text',
    status: 'status',
    moderatedAt: 'moderatedAt',
    moderatedById: 'moderatedById',
    createdAt: 'createdAt'
};
exports.SupportTicketScalarFieldEnum = {
    id: 'id',
    ticketNumber: 'ticketNumber',
    userId: 'userId',
    subject: 'subject',
    status: 'status',
    closedAt: 'closedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SupportMessageScalarFieldEnum = {
    id: 'id',
    ticketId: 'ticketId',
    authorId: 'authorId',
    isStaff: 'isStaff',
    body: 'body',
    createdAt: 'createdAt'
};
exports.NotificationScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    type: 'type',
    title: 'title',
    body: 'body',
    payload: 'payload',
    readAt: 'readAt',
    createdAt: 'createdAt'
};
exports.PaymentScalarFieldEnum = {
    id: 'id',
    orderId: 'orderId',
    type: 'type',
    game: 'game',
    steamId: 'steamId',
    userId: 'userId',
    scriptId: 'scriptId',
    amount: 'amount',
    description: 'description',
    status: 'status',
    paymentUrl: 'paymentUrl',
    unitpayId: 'unitpayId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    paidAt: 'paidAt',
    wsNotifiedAt: 'wsNotifiedAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.NullableJsonNullValueInput = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map