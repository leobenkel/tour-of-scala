import React from 'react'

import Head from 'next/head'

import HtmlToReact from 'html-to-react'

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
import Top from 'components/top-container'


export default function Skb({ lesson }) {
    // console.log(lesson)
    registerLastSeenLesson(lesson.slug)

    const HtmlToReactParser = HtmlToReact.Parser
    const htmlToReactParser = new HtmlToReactParser(React)


    return <Layout title={lesson.title} >
        <Head>
            <link rel="canonical" href={lesson.link} />
        </Head>

        <LeftSide>
            <Top>
                <Header title={lesson.title} sourceLink={lesson.link} />
                {/* <div>
                    {htmlToReactParser.parse(lesson.content)}
                </div> */}
            </Top>
            <Nav navigation={[lesson.prevUrl, lesson.nextUrl]} />
        </LeftSide>

        <RightSide>
            {/* TODO: <Scastie /> */}
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