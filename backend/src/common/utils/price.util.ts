export function hasActiveDiscount(
  discountPercent: number | null | undefined,
): boolean {
  return discountPercent != null && discountPercent > 0;
}

export function normalizeDiscountPercent(
  discountPercent: number | null | undefined,
): number | null {
  if (discountPercent == null || discountPercent <= 0) {
    return null;
  }
  return discountPercent;
}

export function applyDiscount(
  base: number,
  discountPercent: number | null | undefined,
): number {
  if (!hasActiveDiscount(discountPercent)) {
    return roundPrice(base);
  }
  return roundPrice(base * (1 - discountPercent! / 100));
}

export function roundPrice(value: number): number {
  return Math.round(value * 100) / 100;
}

export function applyDiscountForPayment(
  base: number,
  discountPercent: number | null | undefined,
): number {
  return Math.round(applyDiscount(base, discountPercent));
}
