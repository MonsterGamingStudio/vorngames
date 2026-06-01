import type { ButtonProps } from '../components/ui/Button'

export const PAGE_CONTAINER_CLASS =
  'mx-auto w-full max-w-6xl px-6 py-10 2xl:max-w-[80%]'

export const LEGAL_MODAL_CONTENT = `Lorem ipsum dolor sit amet consectetur. Quam faucibus faucibus magna ultrices habitant scelerisque eu arcu interdum. Pellentesque quis eget nulla pellentesque vitae enim nibh egestas nec. Enim et at phasellus consectetur velit. Quis ut fames dignissim adipiscing elit amet aliquam. Pellentesque eu viverra vitae molestie vel.`

export const TELEGRAM_URL = 'https://t.me/vorngames'

export const legalModals = {
  offer: { title: 'Договор офёрты' },
  privacy: { title: 'Политики конфиденциальности' },
  terms: { title: 'Пользовательское соглашение' },
  payment: { title: 'Правило оплаты' },
} as const

export type LegalModalId = keyof typeof legalModals

export type DonatPack = {
  image: string
  amount: string
  price: string
  buttonSize: NonNullable<ButtonProps['size']>
  featured: boolean
}

export const donatPacks: DonatPack[] = [
  { image: '/case_6.png', amount: '$ 5 000 000', price: '₽ 15,000', buttonSize: '62', featured: true },
  { image: '/case_5.png', amount: '$ 2 500 000', price: '₽ 8,800', buttonSize: '62', featured: true },
  { image: '/case_4.png', amount: '$ 1 000 000', price: '₽ 5,000', buttonSize: '44', featured: false },
  { image: '/case_3.png', amount: '$ 500 000', price: '₽ 5,000', buttonSize: '44', featured: false },
  { image: '/case_2.png', amount: '$ 100 000', price: '₽ 5,000', buttonSize: '44', featured: false },
  { image: '/case_1.png', amount: '$ 50 000', price: '₽ 5,000', buttonSize: '44', featured: false },
]

export const footerRequisites = [
  { label: 'ИП', value: '- Липатников Елисей Николаевич' },
  { label: 'ИНН', value: '- 662334140502' },
  { label: 'ОГРНИП', value: '- 32566580030414' },
] as const

export const footerContacts = [
  // { title: 'Телефон', value: '+7 (999) 999-99-99' },
  { title: 'Email', value: 'hello@starlakedigital.pro' },
] as const

export const footerLegalLinks: { id: LegalModalId; label: string }[] = [
  { id: 'offer', label: 'Договор офёрты' },
  { id: 'privacy', label: 'Политики конфиденциальности' },
  { id: 'terms', label: 'Пользовательское соглашение' },
  { id: 'payment', label: 'Правила оплаты' },
]
