import {
  useEffect,
  useState,
} from 'react'

import dynamic from 'next/dynamic'

import { isDev } from 'lib/environment'
import {
  readStorage,
  writeStorage,
} from 'lib/local-storage'


const Head = dynamic(() => import('next/head'))
const PopUp = dynamic(() => import('components/pop-up'))

export default function Legal() {
    const [isUndefined, setIsUndefined] = useState(true)
    const [shouldShowLegal, setShouldShowLegal] = useState(false)

    // date to be able to void in case of legal update
    const storageKey = 'legal-banner-accepted-202106-15'

    useEffect(() => {
        const storageRead = readStorage(storageKey, false)
        updateStatus(storageRead)
    }, [])

    const updateStatus = (isRead) => {
        writeStorage(storageKey, isRead, 24 * 365)
        setShouldShowLegal(!isRead)
        setIsUndefined(false)
    }

    const acknowledge = () => updateStatus(true)

    if (shouldShowLegal) {
        return <PopUp
            cta="Acknowledge"
            onCta={acknowledge}
        >
            <p>
                <span>By continuing to be using this website, you are allowing the use of anonymized tracking data.</span>
            </p>
        </PopUp>
    } else if (isUndefined) {
        return null
    } else if (isDev) {
        return (
            <Head>
                <meta name="tracking" content="enable_but_dev" />
            </Head>
        )
    } else {
        return (
            <Head>
                {/* <!-- Google tracking --> */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-177056861-1" />
                <script src="/scripts/google.js" type="text/javascript" />
            </Head>
        )
    }
}
