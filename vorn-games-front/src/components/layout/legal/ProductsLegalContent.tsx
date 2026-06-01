import { LegalDocHeader, LegalDocument, LegalLi, LegalLink, LegalP, LegalUl } from './LegalDocument'

const SITE_URL = 'https://www.vorngames.com'

export function ProductsLegalContent() {
  return (
    <LegalDocument>
      <LegalDocHeader title="Описание товаров и услуг" />

      <LegalP>
        На сайте <LegalLink href={SITE_URL}>{SITE_URL}</LegalLink> предоставляется возможность
        приобретения цифровых игровых товаров для проектов VornGames.
      </LegalP>

      <LegalP>Доступные товары могут включать:</LegalP>

      <LegalUl>
        <LegalLi>внутриигровую валюту;</LegalLi>
        <LegalLi>игровые привилегии;</LegalLi>
        <LegalLi>специальные игровые наборы;</LegalLi>
        <LegalLi>иные цифровые игровые возможности.</LegalLi>
      </LegalUl>

      <LegalP>
        После оплаты товары предоставляются пользователю в электронном виде путем автоматического
        начисления на игровой аккаунт.
      </LegalP>
      <LegalP>
        Срок предоставления цифровых товаров составляет до 24 часов с момента подтверждения оплаты.
      </LegalP>
      <LegalP>
        Все товары предназначены исключительно для использования внутри игровых проектов VornGames и не
        являются реальными денежными средствами, ценными бумагами или финансовыми инструментами.
      </LegalP>
    </LegalDocument>
  )
}
