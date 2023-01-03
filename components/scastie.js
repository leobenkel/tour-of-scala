import {
  useEffect,
  useRef,
  useState,
} from 'react'

// import Head from 'next/head'
import { createUseStyles } from 'react-jss'


const useStyles = createUseStyles(
    {
        scastieContainer: {
            position: 'relative',
            height: '100%',
            margin: '0',
            width: '100%',
            '& .scastie.embedded,& .scastie.embedded .app, & .scastie.embedded  .main-panel,& .scastie.embedded .content,& .scastie.embedded .code': {
                display: 'inline-block',
                width: '100%',
                minWidth: '100%',
                maxWidth: '100%',
                height: '100%',
                boxSizing: 'border-box'
            },
            '& .editor-container': {
              display: 'flex !important',
              flexDirection: 'column',
              height: '100%',
              width: '100%',
            },
            '& .scastie.embedded': {
              margin: '0',
              padding: '0',
            }
        },
        scastieLoading: {
            position: 'absolute',
            height: '100%',
            width: '100%',
            top: '0',
            left: '0',
            zIndex: '999',
            backgroundColor: '#ececec'
        },
        fullScastie: {
            width: '100%',
            height: '100%',
        },
        loadScastie: {
            position: 'absolute',
            top: 0,
            left: 0,
            display: 'flex',
            cursor: 'pointer',
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyItems: 'center',
            justifyContent: 'space-evenly',
            fontWeight: 'bold',
            '&:hover': {
                backgroundColor: '#bbc0c4'
            }
        }
    },
    {
        name: "Scastie"
    }
)

const scastieLibUrl = "https://scastie.scala-lang.org/embedded.js"
const scastieCSS = "https://scastie.scala-lang.org/public/embedded.css"

export default function Scastie({ scastieId }) {
    const styles = useStyles()

    const [isLaunch, setIsLaunch] = useState(false)
    const [isReady, setIsReady] = useState(false)
    const containerRef = useRef()

    const divId = `id-scastie-${scastieId}`

    let isLaunchedLive = false

    useEffect(() => {
        if (containerRef.current && !isLaunch && !isReady) {
            // https://betterprogramming.pub/4-ways-of-adding-external-js-files-in-reactjs-823f85de3668
            const script = document.createElement("script")
            script.src = scastieLibUrl
            script.crossOrigin = "anonymous"
            script.async = true
            containerRef.current.appendChild(script)

            return () => {
                const cssLink = document.querySelector(`link[href="${scastieCSS}"]`)
                script.remove()
                if (cssLink) cssLink.remove()
            }
        }
    }, [containerRef])

    const launchScastie = () => {
        if (isLaunch || isLaunchedLive || isReady) return
        setIsLaunch(true)
        isLaunchedLive = true

        window.scastie.EmbeddedResource({
            base64UUID: scastieId,
            injectId: divId,
            serverUrl: 'https://scastie.scala-lang.org'
        })

        setTimeout(() => {
            const $ = require('jquery')

            $(".switcher-hide").trigger("click")
            $('.console-open').removeClass('console-open')

            setIsReady(true)
        }, 1000)
    }

    return <div
        className={styles.scastieContainer}
        onClick={launchScastie}
        ref={containerRef}
    >
        <div className={styles.fullScastie} id={divId} />

        {isLaunch ?
            <>{isReady ? null : <div className={styles.scastieLoading}>Loading...</div>}</>
            :
            <div className={styles.loadScastie}>
                <div id="load-scastie-text">Load Exercise</div>
            </div>
        }
    </div>
}
