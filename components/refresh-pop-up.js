import {
  useEffect,
  useRef,
  useState,
} from 'react'

import dynamic from 'next/dynamic'

import { isDev } from 'lib/environment'


const PopUp = dynamic(() => import('components/pop-up'))

// How long to wait for the new worker to take control before reloading anyway.
const TAKEOVER_TIMEOUT_MS = 2000

// The service worker is built by `serwist build` (see serwist.config.mjs) and
// registered here rather than automatically, so a waiting worker can be
// announced to the user instead of silently taking over on the next visit.
async function initSW(onWaiting) {
    if (isDev || typeof window === 'undefined' || !('serviceWorker' in navigator)) return null

    const { Serwist } = await import('@serwist/window')

    const serwist = new Serwist('/sw.js', { scope: '/' })

    serwist.addEventListener('waiting', onWaiting)

    await serwist.register()

    return serwist
}

export default function RefreshPopUp() {
    const [visible, setVisible] = useState(false)

    const serwistRef = useRef(null)

    useEffect(() => {
        let cancelled = false

        initSW(() => setVisible(true))
            .then((serwist) => {
                if (cancelled) return
                serwistRef.current = serwist
            })
            .catch(() => {})

        return () => {
            cancelled = true
        }
    }, [])

    const reloadPage = () => {
        const reload = () => window.location.reload()

        const serwist = serwistRef.current
        if (!serwist) return reload()

        // Reload as soon as the new worker takes over, so the page is served by
        // the version the user just accepted.
        serwist.addEventListener('controlling', reload)
        serwist.messageSkipWaiting()

        // Do not hang on that event. `messageSkipWaiting()` is a no-op if the
        // registration's waiting worker has already moved on, and `controlling`
        // then never fires. Reloading regardless is safe: the new worker is
        // picked up on the next load either way.
        setTimeout(reload, TAKEOVER_TIMEOUT_MS)
    }

    if (!visible) return null

    return <PopUp
        displayTop
        cta="RELOAD"
        onCta={() => {
            setVisible(false)
            reloadPage()
        }}
    >
        <p>A newer version of this web app is available, reload to update.</p>
    </PopUp>
}
