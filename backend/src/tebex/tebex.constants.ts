export const TEBEX_SIGNATURE_HEADER = 'x-signature';

export const TEBEX_ALLOWED_IPS = ['18.209.80.3', '54.87.231.232'] as const;

export const TEBEX_WEBHOOK_TYPES = {
  validation: 'validation.webhook',
  paymentCompleted: 'payment.completed',
  paymentRefunded: 'payment.refunded',
} as const;
