import type { ReactNode } from 'react'
import { PAGE_CONTAINER_CLASS } from '../../layout/constants'

type PageContainerProps = {
  children: ReactNode
}

export function PageContainer({ children }: PageContainerProps) {
  return <div className={PAGE_CONTAINER_CLASS}>{children}</div>
}
