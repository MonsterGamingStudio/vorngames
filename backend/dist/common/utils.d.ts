export declare function hashIp(ip: string): string;
export declare function getClientIp(req: {
    ip?: string;
    headers?: Record<string, string | string[] | undefined>;
}): string;
export declare function parsePagination(query: {
    page?: string | number;
    limit?: string | number;
}): {
    page: number;
    limit: number;
    skip: number;
};
export declare function slugify(text: string): string;
export declare function generateTicketNumber(): string;
