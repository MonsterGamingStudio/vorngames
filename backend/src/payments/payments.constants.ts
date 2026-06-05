export const PAYMENTS_API_SECRET_HEADER = 'x-webhook-secret';

export const SUPPORTED_GAMES = ['shop_tycoon'] as const;
export type SupportedGame = (typeof SUPPORTED_GAMES)[number];

export const UNITPAY_API_URL = 'https://unitpay.ru/api';
