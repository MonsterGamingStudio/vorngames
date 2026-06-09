import './PageLoader.css'

type PageLoaderProps = {
  exiting: boolean
}

export function PageLoader({ exiting }: PageLoaderProps) {
  return (
    <div
      className={exiting ? 'page-loader page-loader--exit' : 'page-loader'}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="page-loader__glow" aria-hidden />
      <div className="page-loader__logo">
        <img src="/logo.png" alt="" className="page-loader__logo-image" />
        <div className="page-loader__logo-text" aria-hidden>
          <span className="page-loader__logo-vorn">vorn</span>
          <span className="page-loader__logo-games">Games</span>
        </div>
      </div>
    </div>
  )
}
