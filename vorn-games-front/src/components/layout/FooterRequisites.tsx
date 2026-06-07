import { useTranslation } from 'react-i18next'
import { footerRequisiteKeys } from '../../layout/constants'
import { FooterRequisiteLine } from './FooterRequisiteLine'

export function FooterRequisites() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-[14px]">
      <span className="text-[16px] font-gilroy-medium text-outline">{t('footer.requisitesTitle')}</span>
      <div className="flex flex-col gap-[10px] text-[16px] text-secondary sm:text-[20px]">
        {footerRequisiteKeys.map((key) => (
          <FooterRequisiteLine
            key={key}
            label={t(`footer.requisites.${key}`)}
            value={t(`footer.requisites.${key}Value`)}
          />
        ))}
      </div>
    </div>
  )
}
