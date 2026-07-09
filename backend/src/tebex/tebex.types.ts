import { GameCategory, TebexStore } from '../generated/prisma/client';

export type TebexWebhookEnvelope = {
  id: string;
  type: string;
  date: string;
  subject: TebexPaymentSubject | Record<string, never>;
};

export type TebexPaymentSubject = {
  transaction_id: string;
  status?: { id: number; description: string };
  created_at: string;
  price?: { amount: number; currency: string };
  price_paid?: { amount: number; currency: string };
  customer?: {
    first_name?: string;
    last_name?: string;
    email?: string;
    username?: { id?: string; username?: string };
  };
  products?: TebexProduct[];
  custom?: Record<string, unknown>;
};

export type TebexProduct = {
  id: number;
  name: string;
  quantity?: number;
  paid_price?: { amount: number; currency: string };
  base_price?: { amount: number; currency: string };
  variables?: Array<{ identifier: string; option: string }>;
  username?: { id?: string; username?: string };
  custom?: Record<string, unknown>;
};

export type TebexStoreConfig = {
  store: TebexStore;
  secret: string;
};

export type TebexCheckoutCredentials = {
  projectId: string;
  privateKey: string;
};

export type TebexCheckoutBasket = {
  ident: string;
  links?: {
    checkout?: string;
  };
};

export type TebexHeadlessBasket = {
  ident: string;
  links?: {
    checkout?: string;
    payment?: string;
  };
};

export type TebexBuyBasketInput = {
  scriptId: string;
  scriptTitle: string;
  tebexPackageId: number;
  priceUsd: number;
  gameCategory: GameCategory;
  steamId: string;
  clientIp?: string;
};
