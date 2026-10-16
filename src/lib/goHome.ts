import type { MouseEvent } from 'react'

// Name click = "home": drop the #anchor from the URL (so a reload no longer jumps back to it) and go to the top.
// Plain "/" is kept as the href so middle-click / copy link still gives the clean URL.
export function goHome(e: MouseEvent) {
  e.preventDefault()
  window.history.replaceState(null, '', window.location.pathname + window.location.search)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
