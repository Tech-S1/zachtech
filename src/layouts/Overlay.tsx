import { useEffect } from 'react'

const Overlay = ({
  children,
  dismiss,
  dismissKey,
}: {
  children: string | JSX.Element | JSX.Element[]
  dismiss: () => void
  dismissKey: string
}) => {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === dismissKey) {
        dismiss()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return function cleanup() {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return <>{children}</>
}

export default Overlay
