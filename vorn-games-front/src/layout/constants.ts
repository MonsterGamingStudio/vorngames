import type { ButtonProps } from '../components/ui/Button'

export const PAGE_CONTAINER_CLASS =
  'mx-auto w-full max-w-6xl px-6 py-10 2xl:max-w-[80%]'

export const TELEGRAM_URL = 'https://t.me/vorngames'

export const PLAY_GAME_URL = 'https://sbox.game/vorngames/shop_tycoon/'

export const legalModalIds = ['offer', 'terms', 'payment', 'products', 'privacy'] as const

export type LegalModalId = (typeof legalModalIds)[number]

export type DonatPackId =
  | 'pack10k'
  | 'pack40k'
  | 'pack80k'
  | 'pack150k'
  | 'pack250k'
  | 'pack500k'

export type DonatPack = {
  id: DonatPackId
  image: string
  buttonSize: NonNullable<ButtonProps['size']>
  featured: boolean
}

export const donatPacks: DonatPack[] = [
  { id: 'pack500k', image: '/case_6.png', buttonSize: '62', featured: true },
  { id: 'pack250k', image: '/case_5.png', buttonSize: '62', featured: true },
  { id: 'pack150k', image: '/case_4.png', buttonSize: '44', featured: false },
  { id: 'pack80k', image: '/case_3.png', buttonSize: '44', featured: false },
  { id: 'pack40k', image: '/case_2.png', buttonSize: '44', featured: false },
  { id: 'pack10k', image: '/case_1.png', buttonSize: '44', featured: false },
]

export const footerRequisiteKeys = ['ip', 'inn', 'ogrnip'] as const
export type FooterRequisiteKey = (typeof footerRequisiteKeys)[number]

export const footerContactEmails = ['hello@starlakedigital.pro'] as const

export const footerLegalLinkIds: LegalModalId[] = [...legalModalIds]
