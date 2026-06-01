import { LegalDocHeader, LegalDocument, LegalLink, LegalP, LegalSubsection } from './LegalDocument'

export function PaymentLegalContent() {
  return (
    <LegalDocument>
      <LegalDocHeader title="Оплата и возврат" />

      <LegalP>
        Оплата товаров и услуг на сайте осуществляется через платежный сервис Robokassa.
      </LegalP>
      <LegalP>
        После успешного проведения платежа информация автоматически передается в систему проекта для
        начисления приобретенной внутриигровой валюты либо активации цифровой привилегии.
      </LegalP>
      <LegalP>
        Пользователь обязан внимательно проверять корректность выбранного товара и данных игрового
        аккаунта перед оплатой.
      </LegalP>

      <LegalSubsection title="Возврат денежных средств">
        <LegalP>
          Цифровые товары и услуги после их предоставления пользователю возврату и обмену не подлежат.
        </LegalP>
        <LegalP>
          Возврат денежных средств возможен исключительно в случаях, когда оплаченная услуга не была
          предоставлена по вине продавца.
        </LegalP>
        <LegalP>
          При возникновении вопросов, связанных с оплатой или начислением товаров, пользователь может
          обратиться в службу поддержки:{' '}
          <LegalLink href="mailto:hello@starlakedigital.pro">hello@starlakedigital.pro</LegalLink>
        </LegalP>
      </LegalSubsection>
    </LegalDocument>
  )
}
