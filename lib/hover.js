import {
  useRef,
  useState,
} from 'react'


export function useHover() {
    const [hover, setHover] = useState(false)
    const ref = useRef()

    return {
        hover,
        hoverProps: {
            ref,
            onMouseEnter: () => setHover(true),
            onMouseLeave: () => setHover(false),
        }
    }
}