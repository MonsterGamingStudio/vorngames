import { Link } from 'react-router-dom'
import { ThemeSwitcher } from '../components/ThemeSwitcher'

export default function NotFoundPage() {
  return (
    <main className="min-h-dvh">
      <div className="mx-auto w-full max-w-2xl px-6 py-10">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-[24px] text-secondary">Not found</h2>
            <p className="font-gilroy-medium text-[14px] text-outline leading-[120%]">
              The page you requested doesn’t exist.
            </p>
          </div>
          <ThemeSwitcher />
        </div>

        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex h-10 items-center justify-center rounded-full border border-gray/20 bg-surface px-6 text-[14px] text-secondary transition hover:bg-black/5"
          >
            Go home
          </Link>
        </div>
      </div>
    </main>
  )
}

