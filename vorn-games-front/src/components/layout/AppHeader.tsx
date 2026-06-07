import { HeaderAuth } from './HeaderAuth'
import { HeaderBrand } from './HeaderBrand'

export function AppHeader() {
  return (
    <header className="flex w-full justify-between gap-4 pb-[28px] max-md:min-w-0 max-md:flex-col max-md:gap-4 max-md:pb-6">
      <HeaderBrand />
      <HeaderAuth />
    </header>
  )
}
