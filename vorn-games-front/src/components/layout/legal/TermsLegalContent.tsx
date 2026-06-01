import {
  LegalDocHeader,
  LegalDocument,
  LegalLink,
  LegalP,
  LegalSection,
} from './LegalDocument'

const SITE_URL = 'https://www.vorngames.com'

export function TermsLegalContent() {
  return (
    <LegalDocument>
      <LegalDocHeader title="Условия предоставления услуг" />

      <LegalP>
        Настоящие условия регулируют порядок приобретения внутриигровой валюты и цифровых игровых
        привилегий на сайте <LegalLink href={SITE_URL}>{SITE_URL}</LegalLink>.
      </LegalP>

      <LegalSection number={1} title="Предмет покупки">
        <LegalP>
          Пользователь может приобрести внутриигровую валюту и иные цифровые игровые привилегии для
          использования в игровых проектах VornGames.
        </LegalP>
        <LegalP>
          Все товары являются цифровыми и не имеют материального носителя.
        </LegalP>
      </LegalSection>

      <LegalSection number={2} title="Порядок предоставления услуг">
        <LegalP>
          После успешного подтверждения оплаты приобретенная внутриигровая валюта автоматически
          начисляется на игровой аккаунт пользователя.
        </LegalP>
        <LegalP>
          Стандартный срок предоставления услуги составляет от нескольких минут до 24 часов с момента
          оплаты.
        </LegalP>
        <LegalP>
          В случае возникновения технических сбоев срок обработки может быть увеличен.
        </LegalP>
      </LegalSection>

      <LegalSection number={3} title="Стоимость услуг">
        <LegalP>
          Стоимость внутриигровой валюты и иных цифровых товаров указывается на страницах сайта
          непосредственно перед оформлением заказа.
        </LegalP>
        <LegalP>Все цены указаны в долларах США и российских рублях.</LegalP>
      </LegalSection>

      <LegalSection number={4} title="Возврат денежных средств">
        <LegalP>
          Цифровые товары и услуги после их предоставления пользователю возврату и обмену не подлежат.
        </LegalP>
        <LegalP>
          Возврат денежных средств возможен исключительно в случаях, когда оплаченная услуга не была
          предоставлена по вине продавца.
        </LegalP>
        <LegalP>
          Для рассмотрения спорных ситуаций пользователь может обратиться в службу поддержки.
        </LegalP>
      </LegalSection>

      <LegalSection number={5} title="Ответственность сторон">
        <LegalP>
          Администрация проекта не несет ответственности за невозможность использования приобретенных
          цифровых товаров по причинам, не зависящим от нее, включая перебои в работе сети Интернет,
          оборудования пользователя или сторонних сервисов.
        </LegalP>
      </LegalSection>

      <LegalSection number={6} title="Контакты">
        <LegalP>
          По всем вопросам пользователь может обратиться по электронной почте:{' '}
          <LegalLink href="mailto:help@starlakedigital.pro">help@starlakedigital.pro</LegalLink>
        </LegalP>
      </LegalSection>
    </LegalDocument>
  )
}
