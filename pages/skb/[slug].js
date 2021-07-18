import React, {
  useEffect,
  useState,
} from 'react'

import Head from 'next/head'

import HtmlToReact from 'html-to-react'
import { createUseStyles } from 'react-jss'

import {
  fetchLessons,
  getLessonBySlug,
} from 'lib/fetch-lessons'
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

function SkbContent({ content, ...props }) {
    return <div {...props}>{htmlToReactParser.parse(content)}</div>
}

function HiddenClues({ content }) {
    const styles = useStyles()
    const [isRevealed, setIsRevealed] = useState(false)

    useEffect(() => {
        setIsRevealed(false)
    }, [content])

    return <div className={styles.skbClue} onClick={() => setIsRevealed(true)}>
        <SkbContent content={content} className={isRevealed ? styles.skbContentVisible : styles.skbContentHidden} />
        {isRevealed ? null : <div className={styles.learnMore}>Reveal more information and clues</div>}
    </div>
}

export default function Skb({ lesson }) {
    // console.log(lesson)
    registerLastSeenLesson(lesson.slug)
    const styles = useStyles()

    return <Layout title={lesson.title} >
        <Head>
            <link rel="canonical" href={lesson.link} />
        </Head>

        <LeftSide key={lesson.scastieId}>
            <Top>
                <Header title={lesson.title} sourceLink={lesson.link} />
                <div className={styles.skbContent}>
                    <SkbContent content={lesson.mainInfoBox} />
                    <HiddenClues content={lesson.detailedInfoBox} />
                </div>
            </Top>
            <Nav navigation={[lesson.prevUrl, lesson.nextUrl]} />
        </LeftSide>

        <RightSide>
            <Scastie scastieId={lesson.scastieId} key={lesson.scastieId} />
        </RightSide>
    </Layout>
}

export async function getStaticProps({ params }) {
    const data = await getLessonBySlug(params.slug)
    return {
        props: {
            lesson: data,
        }
    }
}

export async function getStaticPaths() {
    const allLessons = await fetchLessons()


    return {
        paths: allLessons
            .map(({ slug }) => {
                return { params: { slug } }
            }),
        fallback: false,
    }
}