"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency = exports.NotificationType = exports.SupportTicketStatus = exports.CommentStatus = exports.ScriptMediaType = exports.ScriptBadge = exports.GameCategory = exports.UserRole = exports.PaymentType = exports.PaymentStatus = void 0;
exports.PaymentStatus = {
    pending: 'pending',
    paid: 'paid',
    failed: 'failed',
    canceled: 'canceled'
};
exports.PaymentType = {
    donate: 'donate',
    script: 'script'
};
exports.UserRole = {
    user: 'user',
    admin: 'admin'
};
exports.GameCategory = {
    gmod: 'gmod',
    fivem: 'fivem'
};
exports.ScriptBadge = {
    none: 'none',
    bestseller: 'bestseller',
    popular: 'popular',
    new: 'new',
    preorder: 'preorder'
};
exports.ScriptMediaType = {
    image: 'image',
    youtube: 'youtube'
};
exports.CommentStatus = {
    pending: 'pending',
    approved: 'approved',
    rejected: 'rejected'
};
exports.SupportTicketStatus = {
    open: 'open',
    closed: 'closed'
};
exports.NotificationType = {
    comment_submitted: 'comment_submitted',
    comment_approved: 'comment_approved',
    purchase_completed: 'purchase_completed',
    support_reply: 'support_reply',
    support_ticket_created: 'support_ticket_created',
    script_update: 'script_update'
};
exports.Currency = {
    RUB: 'RUB',
    USD: 'USD'
};
//# sourceMappingURL=enums.js.map