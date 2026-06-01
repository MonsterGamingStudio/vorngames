import { HeaderAuth } from './HeaderAuth'
import { HeaderBrand } from './HeaderBrand'

export function AppHeader() {
  return (
    <header className="flex gap-4 w-full justify-between pb-[28px] max-md:flex-col">
      <HeaderBrand />
      <HeaderAuth />
    </header>
  )
}
