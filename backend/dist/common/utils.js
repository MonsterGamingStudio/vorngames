"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashIp = hashIp;
exports.getClientIp = getClientIp;
exports.parsePagination = parsePagination;
exports.slugify = slugify;
exports.generateTicketNumber = generateTicketNumber;
const crypto_1 = require("crypto");
function hashIp(ip) {
    return (0, crypto_1.createHash)('sha256').update(ip).digest('hex');
}
function getClientIp(req) {
    const forwarded = req.headers?.['x-forwarded-for'];
    if (typeof forwarded === 'string' && forwarded.length > 0) {
        return forwarded.split(',')[0]?.trim() ?? 'unknown';
    }
    return req.ip ?? 'unknown';
}
function parsePagination(query) {
    const page = Math.max(1, Number(query.page) || 1);
    const limit = Math.min(100, Math.max(1, Number(query.limit) || 20));
    return { page, limit, skip: (page - 1) * limit };
}
function slugify(text) {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
}
function generateTicketNumber() {
    const now = new Date();
    const date = now.toISOString().slice(0, 10).replace(/-/g, '');
    const rand = Math.floor(Math.random() * 9000) + 1000;
    return `VG-${date}-${rand}`;
}
//# sourceMappingURL=utils.js.map