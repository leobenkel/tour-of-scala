import dynamic from 'next/dynamic'

import { fetchLessons } from 'lib/fetch-local-lessons'

import Layout from 'components/layout'
import LeftSide from 'components/left-side'


const Nav = dynamic(() => import('components/nav'))
const ContentContainer = dynamic(() => import('components/content-container'))
const MadeBy = dynamic(() => import('components/made-by'))
const L = dynamic(() => import('components/link'))
const Header = dynamic(() => import('components/header'))
const Top = dynamic(() => import('components/top-container'))
const SkbList = dynamic(() => import('components/skb-list'))

export default function Index({ allLessons }) {
    return <Layout description="Tour of Scala is a place to learn Scala easily by solving exercises.">
        <LeftSide>
            <Top>
                <Header />
                <MadeBy />

                <ContentContainer>
                    {/* <!-- TODO: Better description ! --> */}
                    <p>Here, you can slowly build up knowledge about Scala.</p>
                    <p>Each exercises are designed to be done in a very short amount of time and learn a little bit each day, just to
                        create a routine.</p>
                    <p>Each episode will teach you about one specific thing and rely on the previous exercises to be solved.</p>
                    <p>Hope you are going to enjoy it! It is designed for anyone to learn Scala from scratch and slowly
                        learn, one Bit at a time.</p>

                    <p>For each exercise, you should be able to guess by yourself the
                        solution based on what you previously learned and based on the introduction. If you get stuck don't hesitate to reveal the extra clues.</p>
                    <p>The goal of the exercise is to replace the <code>???</code> by some of your own code.
                        When you are done, click to reveal the extra information and clues to get a better
                        understanding of the concept.</p>
                    <p>Don't hesitate to experiment by editing the code to anything you like.</p>
                    <p>If you have any comments, suggestions or feedback, make sure to message me on Discord, or LinkedIn,
                        or submit an issue on GitHub, or submit a PR on GitHub.</p>
                </ContentContainer>
            </Top>
            <Nav />
        </LeftSide>

        <SkbList allLessons={allLessons} />
    </Layout>
}

export async function getStaticProps() {
    const allLessons = await fetchLessons()

    return {
        props: { allLessons },
    }
}
