import { useTranslation } from 'react-i18next'
import { cn } from '../../utils/cn'
import type { DonatPack } from '../../layout/constants'
import { DonatPackAmount } from './DonatPackAmount'
import { DonatPackBuyButton } from './DonatPackBuyButton'

type DonatPackDetailsProps = {
  pack: DonatPack
}

export function DonatPackDetails({ pack }: DonatPackDetailsProps) {
  const { t } = useTranslation()
  const amount = t(`donat.packs.${pack.id}.amount`)

  return (
    <div
      className={cn(
        'vorn-case-block-donat-item p-[30px] border-t border-gray/20 flex flex-col gap-[10px]',
        pack.featured && 'items-center',
      )}
    >
      <span className="font-gilroy-medium text-[16px] text-outline">{t('donat.packLabel')}</span>
      <DonatPackAmount amount={amount} featured={pack.featured} />
      <DonatPackBuyButton pack={pack} />
    </div>
  )
}
