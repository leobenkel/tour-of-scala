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

            '& .scastie.embedded, & .scastie.embedded .app, & .scastie.embedded .main-panel, & .scastie.embedded .content, & .scastie.embedded .code': {
                display: 'inline-block',
                width: '100%',
                minWidth: '100%',
                maxWidth: '100%',
                height: '100%',
                boxSizing: 'border-box'
            },
            '& .scastie.embedded .editor-container': {
                display: 'flex !important',
                flexDirection: 'column',
                height: '100%',
                width: '100%',
            },
            '& .scastie.embedded': {
                margin: '0',
                padding: '0',
            },
            '& .scastie.embedded .cm-editor .cm-tooltip': {
                fontSize: '12px',
                zIndex: 999,
                maxHeight: '60vh',
                overflow: 'auto'
            },
            '& .scastie.embedded .embedded-overlay': {
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

const scastieHost = "https://scastie.scala-lang.org"
const scastieLibUrl = `${scastieHost}/embedded.js`
const scastieCSS = `${scastieHost}/public/embedded.css`

export default function Scastie({ scastieId }) {
    const styles = useStyles()

    const NEUTRAL = 0
    const IS_STARTING = 1
    const IS_READY = 2

    const [launchingState, setLaunchingState] = useState(NEUTRAL)

    const containerRef = useRef()

    const divId = `id-scastie-${scastieId}`

    useEffect(() => {
        if (containerRef.current) {
            // https://betterprogramming.pub/4-ways-of-adding-external-js-files-in-reactjs-823f85de3668
            const script = document.createElement("script")
            script.src = scastieLibUrl
            script.crossOrigin = "anonymous"
            script.async = true
            containerRef.current.appendChild(script)

            return () => {
                script.remove()

                const cssLink = document.querySelector(`link[href="${scastieCSS}"]`)
                if (cssLink) cssLink.remove()
            }
        }
    }, [containerRef])

    const launchScastie = () => {
        if (launchingState != NEUTRAL) return

        setLaunchingState(IS_STARTING)

        const launch = () => {
            setTimeout(() => {
                if (!window.scastie) return launch()

                try {
                    window.scastie.EmbeddedResource({
                        base64UUID: scastieId,
                        injectId: divId,
                        serverUrl: scastieHost
                    })
                } catch {
                    return launch()
                }

                setLaunchingState(IS_READY)
            }, 500)
        }

        launch()
    }

    function renderScastieBlock() {
        switch (launchingState) {
            case 0: // NEUTRAL
                return <div className={styles.loadScastie}>
                    <div id="load-scastie-text">Load Exercise</div>
                </div>
            case 1: // IS_STARTING
                return <div className={styles.scastieLoading}>Loading...</div>
            case 2: // IS_READY
                return null
        }
    }

    return <div
        className={styles.scastieContainer}
        onClick={launchScastie}
        ref={containerRef}
    >
        <div className={styles.fullScastie} id={divId} />

        {renderScastieBlock()}
    </div>
}
