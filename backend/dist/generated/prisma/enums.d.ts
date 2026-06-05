export declare const PaymentStatus: {
    readonly pending: "pending";
    readonly paid: "paid";
    readonly failed: "failed";
    readonly canceled: "canceled";
};
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];
