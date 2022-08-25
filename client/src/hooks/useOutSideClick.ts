import { Ref, useEffect } from 'react'

const useOnClickOutside = (ref:HTMLDivElement, handler: () => void) => {
    useEffect(
        () => {
            const listener = (event:Event) => {
                // Do nothing if clicking ref's element or descendent elements
                if (!ref.current || ref.current.contains(event.target)) {
                    return
                }
                handler(event)
            }
            document.addEventListener('mousedown', listener)
            document.addEventListener('touchstart', listener)
            return () => {
                document.removeEventListener('mousedown', listener)
                document.removeEventListener('touchstart', listener)
            }
        },

        [ref, handler]
    )
}

export default useOnClickOutside
