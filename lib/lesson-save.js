import {
  useEffect,
  useState,
} from 'react'

import {
  readStorage,
  writeStorage,
} from 'lib/local-storage'


function getCurrentLesson() { }

export function useActiveLesson() {
    const [lastSeenSkb, setLastSeenSkb] = useState(null)
    useEffect(() => {
        setLastSeenSkb(readStorage('last-seen-skb', null))
    }, [])

    return lastSeenSkb
}

export function registerLastSeenLesson(slug) {
    useEffect(() => writeStorage('last-seen-skb', slug), [])
}