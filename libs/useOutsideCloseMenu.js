import { useEffect } from 'react'

export function useOutsideCloseMenu(ref, closeMenu) {
  useEffect(() => {
    function handleClickOutside(event) {
      console.log(event.target)
      // console.log(ref.current.contains(event.target))
      if (ref.current && !ref.current.contains(event.target)) {
        closeMenu()
      }
    }
    window.addEventListener('click', handleClickOutside)

    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [ref])
}
