import {
  LegalDocHeader,
  LegalDocument,
  LegalLi,
  LegalLink,
  LegalOl,
  LegalP,
  LegalRequisites,
  LegalSection,
  LegalUl,
} from './LegalDocument'

const SITE_URL = 'https://www.vorngames.com'

export function OfferLegalContent() {
  return (
    <LegalDocument>
      <LegalDocHeader title="Публичная оферта" />

      <LegalSection number={1} title="Общие положения">
        <LegalOl>
          <LegalLi>
            Настоящий документ является официальным предложением Индивидуального предпринимателя Липатников
            Елисей Николаевич, ИНН 662334140502, ОГРНИП 325665800304141, далее — «Исполнитель», заключить
            договор на условиях настоящей Оферты.
          </LegalLi>
          <LegalLi>
            Акцептом Оферты считается совершение Пользователем оплаты на сайте{' '}
            <LegalLink href={SITE_URL}>{SITE_URL}</LegalLink>.
          </LegalLi>
          <LegalLi>
            С момента оплаты Пользователь считается принявшим условия настоящей Оферты в полном объеме.
          </LegalLi>
        </LegalOl>
      </LegalSection>

      <LegalSection number={2} title="Предмет договора">
        <LegalOl>
          <LegalLi>
            Исполнитель предоставляет Пользователю доступ к цифровым внутриигровым товарам и виртуальным
            ценностям для игровых режимов проекта VornGames.
          </LegalLi>
          <LegalLi>
            Цифровыми товарами могут являться:
            <LegalUl>
              <LegalLi>внутриигровая валюта;</LegalLi>
              <LegalLi>игровые привилегии;</LegalLi>
              <LegalLi>игровые предметы;</LegalLi>
              <LegalLi>косметические улучшения;</LegalLi>
              <LegalLi>иные цифровые объекты, отображаемые на сайте.</LegalLi>
            </LegalUl>
          </LegalLi>
          <LegalLi>
            Приобретенные цифровые товары используются исключительно внутри игровых проектов VornGames и не
            являются платежным средством.
          </LegalLi>
          <LegalLi>
            После оплаты цифровые товары автоматически зачисляются на игровой аккаунт Пользователя.
          </LegalLi>
        </LegalOl>
      </LegalSection>

      <LegalSection number={3} title="Порядок оплаты">
        <LegalOl>
          <LegalLi>Стоимость цифровых товаров указывается на сайте.</LegalLi>
          <LegalLi>Оплата производится способами, доступными на сайте.</LegalLi>
          <LegalLi>
            Обязательство Исполнителя считается исполненным с момента успешного зачисления цифрового товара
            на аккаунт Пользователя.
          </LegalLi>
        </LegalOl>
      </LegalSection>

      <LegalSection number={4} title="Порядок предоставления цифрового товара">
        <LegalOl>
          <LegalLi>Выдача цифрового товара осуществляется автоматически.</LegalLi>
          <LegalLi>В отдельных случаях срок предоставления может составлять до 24 часов.</LegalLi>
          <LegalLi>Пользователь обязан корректно указать данные игрового аккаунта.</LegalLi>
          <LegalLi>
            Исполнитель не несет ответственности за ошибки, допущенные Пользователем при указании данных
            аккаунта.
          </LegalLi>
        </LegalOl>
      </LegalSection>

      <LegalSection number={5} title="Возврат денежных средств">
        <LegalOl>
          <LegalLi>
            Пользователь соглашается с тем, что приобретаемые цифровые товары предоставляются немедленно после
            оплаты.
          </LegalLi>
          <LegalLi>
            После активации, зачисления или получения цифрового товара возврат денежных средств не
            производится.
          </LegalLi>
          <LegalLi>
            Возврат возможен исключительно в случае технической ошибки, приведшей к невозможности получения
            оплаченного товара.
          </LegalLi>
        </LegalOl>
      </LegalSection>

      <LegalSection number={6} title="Ответственность сторон">
        <LegalOl>
          <LegalLi>
            Исполнитель не несет ответственности за невозможность использования цифровых товаров по причинам,
            не зависящим от него.
          </LegalLi>
          <LegalLi>Пользователь обязуется соблюдать правила игровых проектов VornGames.</LegalLi>
          <LegalLi>
            Нарушение игровых правил может привести к ограничению доступа к игровому аккаунту без
            компенсации ранее приобретенных цифровых товаров.
          </LegalLi>
        </LegalOl>
      </LegalSection>

      <LegalSection number={7} title="Конфиденциальность">
        <LegalP>
          Обработка персональных данных осуществляется в соответствии с Политикой конфиденциальности,
          размещенной на сайте.
        </LegalP>
      </LegalSection>

      <LegalSection number={8} title="Реквизиты Исполнителя">
        <LegalRequisites
          items={[
            { label: 'Полное наименование', value: 'Липатников Елисей Николаевич' },
            { label: 'ИНН', value: '662334140502' },
            { label: 'ОГРН/ОГРНИП', value: '325665800304141' },
            { label: 'Телефон', value: '+7 995 223-88-93' },
            {
              label: 'E-mail',
              value: (
                <LegalLink href="mailto:hello@starlakedigital.pro">
                  hello@starlakedigital.pro
                </LegalLink>
              ),
            },
          ]}
        />
      </LegalSection>
    </LegalDocument>
  )
}
