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
            width: '100%',
            '& .scastie.embedded,& .scastie.embedded .main-panel,& .scastie.embedded .main-panel .content,& .scastie.embedded .main-panel .content .editor-container.inner-container,& .scastie.embedded .main-panel .content .editor-container.inner-container .code': {
                display: 'inline-block',
                width: '100%',
                minWidth: '100%',
                maxWidth: '100%',
                height: '100%',
                minHeight: '100%',
                maxHeight: '100%',
                boxSizing: 'border-box'
            },
            '& .scastie.embedded, & .scastie.embedded .app': {
                display: 'inline-block',
                width: '100%',
                minWidth: '100%',
                maxWidth: '100%',
                height: '100%',
                minHeight: '100%',
                maxHeight: '100%',
                boxSizing: 'border-box',
                margin: '0',
                padding: '0'
            },
            '& .scastie.embedded .main-panel .content .editor-container .editor-wrapper': {
                height: 'calc(100% - 50px)',
                paddingTop: '8px',
                boxSizing: 'border-box'
            },

            '& .scastie.embedded .main-panel .content .editor-container.inner-container .code': {
                height: '100%'
            },
            '& .scastie.embedded .main-panel .content .editor-container.inner-container .code.console-open': {
                height: '65%',
                minHeight: 'auto'
            },
            '& .scastie.embedded .console-container.console-open': {
                height: '35%'
            },
            '& .scastie ul.embedded-menu': {
                position: 'inherit',
                display: 'inline-block',
                margin: '0px auto'
            },
            '& .scastie ul.embedded-menu li': {
                display: 'inline-block',
                margin: '5px 5px',
                width: '120px',
                padding: '6px'
            },
            '& .scastie .runtime-error, & .scastie .runtime-error pre': {
                width: 'auto',
            },
            '& .scastie.embedded .output-console pre': {
                backgroundColor: 'unset'
            },
            '& .scastie.embedded pre.inline[title = "Unit"]': {
                display: 'none'
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
