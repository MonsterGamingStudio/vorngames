const LOCK_CLASS = 'vorn-scroll-locked'
const SCROLL_UNLOCK_MS = 300

function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth
}

export function lockBodyScroll() {
  const { body, documentElement: html } = document
  const scrollY = window.scrollY
  const scrollbarWidth = getScrollbarWidth()

  const previous = {
    bodyPosition: body.style.position,
    bodyTop: body.style.top,
    bodyLeft: body.style.left,
    bodyRight: body.style.right,
    bodyWidth: body.style.width,
    scrollbarWidth: html.style.getPropertyValue('--vorn-scrollbar-width'),
  }

  let unlockTimer = 0

  html.classList.add(LOCK_CLASS)
  html.style.setProperty('--vorn-scrollbar-width', `${scrollbarWidth}px`)

  body.style.position = 'fixed'
  body.style.top = `-${scrollY}px`
  body.style.left = '0'
  body.style.right = '0'
  body.style.width = '100%'

  return () => {
    if (unlockTimer) window.clearTimeout(unlockTimer)

    body.style.position = previous.bodyPosition
    body.style.top = previous.bodyTop
    body.style.left = previous.bodyLeft
    body.style.right = previous.bodyRight
    body.style.width = previous.bodyWidth

    window.scrollTo(0, scrollY)

    html.style.setProperty('--vorn-scrollbar-width', '0px')

    unlockTimer = window.setTimeout(() => {
      html.classList.remove(LOCK_CLASS)

      if (previous.scrollbarWidth) {
        html.style.setProperty('--vorn-scrollbar-width', previous.scrollbarWidth)
      } else {
        html.style.removeProperty('--vorn-scrollbar-width')
      }

      unlockTimer = 0
    }, SCROLL_UNLOCK_MS)
  }
}
