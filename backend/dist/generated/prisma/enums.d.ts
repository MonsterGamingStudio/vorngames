export declare const PaymentStatus: {
    readonly pending: "pending";
    readonly paid: "paid";
    readonly failed: "failed";
    readonly canceled: "canceled";
};
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];
export declare const PaymentType: {
    readonly donate: "donate";
    readonly script: "script";
};
export type PaymentType = (typeof PaymentType)[keyof typeof PaymentType];
export declare const UserRole: {
    readonly user: "user";
    readonly admin: "admin";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const GameCategory: {
    readonly gmod: "gmod";
    readonly fivem: "fivem";
};
export type GameCategory = (typeof GameCategory)[keyof typeof GameCategory];
export declare const ScriptBadge: {
    readonly none: "none";
    readonly bestseller: "bestseller";
    readonly popular: "popular";
    readonly new: "new";
    readonly preorder: "preorder";
};
export type ScriptBadge = (typeof ScriptBadge)[keyof typeof ScriptBadge];
export declare const ScriptMediaType: {
    readonly image: "image";
    readonly youtube: "youtube";
};
export type ScriptMediaType = (typeof ScriptMediaType)[keyof typeof ScriptMediaType];
export declare const CommentStatus: {
    readonly pending: "pending";
    readonly approved: "approved";
    readonly rejected: "rejected";
};
export type CommentStatus = (typeof CommentStatus)[keyof typeof CommentStatus];
export declare const SupportTicketStatus: {
    readonly open: "open";
    readonly closed: "closed";
};
export type SupportTicketStatus = (typeof SupportTicketStatus)[keyof typeof SupportTicketStatus];
export declare const NotificationType: {
    readonly comment_submitted: "comment_submitted";
    readonly comment_approved: "comment_approved";
    readonly purchase_completed: "purchase_completed";
    readonly support_reply: "support_reply";
    readonly support_ticket_created: "support_ticket_created";
    readonly script_update: "script_update";
};
export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];
export declare const Currency: {
    readonly RUB: "RUB";
    readonly USD: "USD";
};
export type Currency = (typeof Currency)[keyof typeof Currency];
