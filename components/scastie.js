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

// Snippets are saved under this user's account on Scastie so they persist;
// the embed needs user+update to look up owned snippets by base64UUID.
const scastieUser = "leobenkel"
const scastieUpdate = 0

export default function Scastie({ scastieId }) {
    const styles = useStyles()

    const NEUTRAL = 0
    const IS_STARTING = 1
    const IS_READY = 2

    const [launchingState, setLaunchingState] = useState(NEUTRAL)

    const containerRef = useRef()

    const divId = `id-scastie-${scastieId}`

    useEffect(() => {
        if (!containerRef.current) return
        if (window.scastie) return

        // Fetch + patch + inject instead of <script src>. The current
        // embedded.js assumes any consumer running on a "localhost" hostname
        // is the Scastie dev environment and points tree-sitter/metals/etc.
        // at local backend ports (9000, 8000) instead of the prod URL, even
        // when EmbeddedResource is given a serverUrl. That breaks the embed
        // on this site's `next dev`. Replacements:
        //   (a) the literal "http://localhost:9000" used as the file://
        //       fallback inside SyntaxHighlightingPlugin, and
        //   (b) every  ===\"localhost\"  hostname check, so the production
        //       fallback branches always win.
        // Both are no-ops if Scastie ever fixes this upstream.
        const controller = new AbortController()
        let script
        fetch(scastieLibUrl, { signal: controller.signal })
            .then((r) => r.text())
            .then((src) => {
                const patched = src
                    .replaceAll('"http://localhost:9000"', `"${scastieHost}"`)
                    .replaceAll('==="localhost"', '==="__embed_disabled__"')
                script = document.createElement("script")
                script.textContent = patched
                document.head.appendChild(script)
            })
            .catch(() => {})

        return () => {
            controller.abort()
            if (script) script.remove()
            const cssLink = document.querySelector(`link[href="${scastieCSS}"]`)
            if (cssLink) cssLink.remove()
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
                        user: scastieUser,
                        update: scastieUpdate,
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
