import dynamic from 'next/dynamic'
import Head from 'next/head'

import * as Routes from 'lib/routes'

import Layout from 'components/layout'


const Nav = dynamic(() => import('components/nav'))
const ContentContainer = dynamic(() => import('components/content-container'))
const MadeBy = dynamic(() => import('components/made-by'))
const L = dynamic(() => import('components/link'))
const Header = dynamic(() => import('components/header'))
const Top = dynamic(() => import('components/top-container'))

// error page : https://nextjs.org/docs/advanced-features/custom-error-page
// pages/404.js
export default function My404() {

    return (
        <Layout
            title="404"
            description=""
            fullScreen
        >
            <Head>
                <meta name="robots" content="noindex, nosnippet" />
            </Head>
            <Top>
                <Header />
                <MadeBy />
                <ContentContainer fullscreen>
                    <h2>404</h2>
                    <p>Sorry the page you are looking for does not exist.</p>
                    <p><L to={Routes.home} prefetch>Back home</L></p>
                </ContentContainer>
            </Top>
            <Nav />
        </Layout>
    )
}
