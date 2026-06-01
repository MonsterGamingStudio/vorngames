import type { ComponentType } from 'react'
import type { LegalModalId } from '../../../layout/constants'
import { OfferLegalContent } from './OfferLegalContent'
import { PaymentLegalContent } from './PaymentLegalContent'
import { PrivacyLegalContent } from './PrivacyLegalContent'
import { ProductsLegalContent } from './ProductsLegalContent'
import { TermsLegalContent } from './TermsLegalContent'

export const legalModalContentById: Record<LegalModalId, ComponentType> = {
  offer: OfferLegalContent,
  terms: TermsLegalContent,
  payment: PaymentLegalContent,
  products: ProductsLegalContent,
  privacy: PrivacyLegalContent,
}
