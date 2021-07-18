import dynamic from 'next/dynamic'
import Head from 'next/head'

import cn from 'classnames'
import { createUseStyles } from 'react-jss'


const Legal = dynamic(() => import('components/legal'))


const useStyles = createUseStyles(
    {
        content: {
            display: 'flex',
            width: '100%',
            height: '100%',
            minHeight: '100%',
            maxHeight: '100%'
        },
        fullScreen: {
            flexDirection: 'column',
            display: 'flex',
            height: '100%',
            minHeight: '100%',
            maxHeight: '100%',
            backgroundColor: '#ececec',
            padding: '0',
            webkitBoxSizing: 'border-box',
            mozBoxSizing: 'border-box',
            boxSizing: 'border-box',
            flexWrap: 'nowrap',
            justifyContent: 'space-between',
            borderRight: '2px #7c7c7c2f solid'
        }
    },
    {
        name: "Layout"
    }
)

export default function Layout({ children, title, description, fullScreen }) {
    const styles = useStyles()
    const titleToUse = title ? `${title} | Tour of Scala` : 'Tour of Scala'

    return <>
        <Head>
            {/* <!-- Favicon --> */}
            <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
            <link rel="manifest" href="/favicon/manifest.json" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
            <meta name="theme-color" content="#ececec" />

            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name='viewport' content='width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
            <meta name="robots" content="index, follow" />

            {/* <!-- needs to be 'summary' --> */}
            <meta name="twitter:card" content="summary" />

            <meta name="twitter:site" content="@TourOfScala" />
            <meta name="twitter:creator" content="@LeoBenkel" />
            <meta property="og:description" name="og:description" content={description} />
            {/* 
            TODO: Image when shared
            <meta property="og:image" name="og:image" content="https://purelambda.com/assets/pure-lambda-logo-10-square.png" /> 
            <meta property="og:image:secure_url" content="https://purelambda.com/assets/pure-lambda-logo-10-square.png" />
            <meta property="og:image:width" name="og:image:width" content="2000" />
            <meta property="og:image:height" name="og:image:height" content="1047" />
            <meta property="og:image:alt" content="Tour of Scala Logo" />
            <meta property="og:image:type" content="image/png" />
            */}

            <meta property="og:site_name" content="Tour of Scala" />
            <meta property="og:locale" content="en_US" />
            {/* <!-- https://www.freecodecamp.org/news/what-is-open-graph-and-how-can-i-use-it-for-my-website/ --> */}
            <meta property="og:type" name="og:type" content="website" />



            {/* <!-- CSS --> */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/6.0.0/normalize.min.css" />

            {/* <!-- fonts --> */}
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&family=Roboto:wght@500&display=swap"
                rel="stylesheet" />

            {/* <!-- icons --> */}
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

            <title>{titleToUse}</title>
            <meta name="og:title" property="og:title" content={titleToUse} />
            <meta name="description" content={description} />
            <meta name="author" content="Leo Benkel" />
        </Head>
        <div className={cn(styles.content, { [styles.fullScreen]: fullScreen })}>
            {children}
        </div>
        <Legal />
    </>
}