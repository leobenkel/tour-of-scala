import {
  useEffect,
  useState,
} from 'react'

import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import { isDev } from 'lib/environment'


const PopUp = dynamic(() => import('components/pop-up'))

function initSW(enablePopUp) {
    // https://github.com/shadowwalker/next-pwa/blob/e1d312927c43f45bbb9b07633513dd2c64d5ff79/examples/lifecycle/pages/index.js#L27-L46
    if (!isDev && typeof window !== 'undefined' && 'serviceWorker' in navigator && window.workbox !== undefined) {
        const wb = window.workbox

        // A common UX pattern for progressive web apps is to show a banner when a service worker has updated and waiting to install.
        // NOTE: MUST set skipWaiting to false in next.config.js pwa object
        // https://developers.google.com/web/tools/workbox/guides/advanced-recipes#offer_a_page_reload_for_users
        const promptNewVersionAvailable = event => {
            // `event.wasWaitingBeforeRegister` will be false if this is the first time the updated service worker is waiting.
            // When `event.wasWaitingBeforeRegister` is true, a previously updated service worker is still waiting.
            // You may want to customize the UI prompt accordingly.
            // if (confirm('A newer version of this web app is available, reload to update?')) {
            //     wb.addEventListener('controlling', event => {
            //         router.reload()
            //     })

            //     // Send a message to the waiting service worker, instructing it to activate.
            //     wb.messageSkipWaiting()
            // } else {
            //     console.log(
            //         'User rejected to reload the web app, keep using old version. New version will be automatically load when user open the app next time.'
            //     )
            // }
            enablePopUp()
        }

        wb.addEventListener('waiting', promptNewVersionAvailable)

        // never forget to call register as auto register is turned off in next.config.js
        wb.register()
    }
}

function reloadPage(router) {
    const wb = window.workbox

    setTimeout(() => router.reload(), 1500)

    wb.addEventListener('controlling', event => {
        console.log('wasWaitingBeforeRegister', event.wasWaitingBeforeRegister)
        router.reload()
    })

    // Send a message to the waiting service worker, instructing it to activate.
    wb.messageSkipWaiting()
}

export default function RefreshPopUp() {
    const router = useRouter()

    const [visible, setVisible] = useState(false)

    useEffect(() => initSW(() => setVisible(true)), [])

    if (visible) {
        return <PopUp
            displayTop
            cta="RELOAD"
            onCta={() => {
                setVisible(false)
                reloadPage(router)
            }}
        >
            <p>A newer version of this web app is available, reload to update.</p>
        </PopUp>
    } else {
        return null
    }
}
