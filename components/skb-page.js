import React, {
  useEffect,
  useState,
} from 'react'

import Head from 'next/head'

import cn from 'classnames'
import HtmlToReact from 'html-to-react'
import { createUseStyles } from 'react-jss'

import { registerLastSeenLesson } from 'lib/lesson-save'

import Header from 'components/header'
import Layout from 'components/layout'
import LeftSide from 'components/left-side'
import Nav from 'components/nav'
import RightSide from 'components/right-side'
import Scastie from 'components/scastie'
import Top from 'components/top-container'


const HtmlToReactParser = HtmlToReact.Parser
const htmlToReactParser = new HtmlToReactParser(React)

const useStyles = createUseStyles(
    {
        skbContent: {
            overflow: 'auto',
            padding: '12px',
            paddingTop: '0',
            '& pre, & code': {
                whiteSpace: 'break-space'
            }
        },
        skbClue: {
            border: '1px solid #7c7c7c2f',
            padding: '0px 8px',
            borderRadius: '12px',
            position: 'relative'
        },
        skbContentHidden: {
            opacity: 0,
            transition: 'opacity 0.01s ease'
        },
        skbContentVisible: {
            opacity: 1,
            transition: 'opacity .5s ease'
        },
        learnMore: {
            cursor: 'pointer',
            display: 'flex',
            textAlign: 'center',
            margin: '0',
            fontWeight: 'bolder',
            zIndex: '999',
            position: 'absolute',
            height: '100%',
            width: '100%',
            top: '0',
            left: '0',
            borderRadius: '12px',
            alignItems: 'start',
            justifyContent: 'center',
            webkitBoxSizing: 'border-box',
            mozBoxSizing: 'border-box',
            boxSizing: 'border-box',
            paddingTop: '32px',

            '&:hover': {
                backgroundColor: '#bbc0c4'
            }
        }
    },
    {
        name: "SKB"
    }
)

function SkbContent({ children, className, ...props }) {
    return <div className={cn('skbContent', className)} {...props}>{children}</div>
}

function HiddenClues({ children }) {
    const styles = useStyles()
    const [isRevealed, setIsRevealed] = useState(false)

    useEffect(() => {
        setIsRevealed(false)
    }, [children])

    return <div className={styles.skbClue} onClick={() => setIsRevealed(true)}>
        <SkbContent className={isRevealed ? styles.skbContentVisible : styles.skbContentHidden} >{children}</SkbContent>
        {isRevealed ? null : <div className={styles.learnMore}>Reveal more information and clues</div>}
    </div>
}

export default function Skb({ lesson }) {
    const styles = useStyles()
    registerLastSeenLesson(lesson.id)

    return <Layout
        title={lesson.title}
        key={`Layout-${lesson.scastieId}`}
        description={lesson.description}
    >
        <Head>
            {lesson.canonical_url ? <link rel="canonical" href={lesson.canonical_url} /> : null}
        </Head>

        <LeftSide key={`Left-${lesson.scastieId}`}>
            <Top>
                <Header title={lesson.title} sourceLink={lesson.canonical_url} />
                <div className={styles.skbContent}>
                    <SkbContent>{lesson.mainInfoBox}</SkbContent>
                    <HiddenClues>{lesson.detailedInfoBox}</HiddenClues>
                </div>
            </Top>
            <Nav navigation={[lesson.prevUrl, lesson.nextUrl]} />
        </LeftSide>

        <RightSide key={`Right-${lesson.scastieId}`} >
            <Scastie scastieId={lesson.scastieId} key={`Scastie-${lesson.scastieId}`} />
        </RightSide>
    </Layout>
}