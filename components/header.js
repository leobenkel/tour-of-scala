import cn from 'classnames'
import { createUseStyles } from 'react-jss'

import useDiscordLink from 'lib/discord-link'

import ImageFull from 'components/image-full'
import L from 'components/link'


const useStyles = createUseStyles(
    {
        title: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px',
            paddingBottom: '0'
        },
        articleTitle: {
            display: 'flex',
            margin: 0,
            paddingRight: '8px',
        },
        tourOfScalaLogo: {
            height: 'fit-content'
        },
        titleLinks: {
            '& a': {
                textDecoration: 'none',
                color: 'black'
            }
        },
        discordLink: {
            display: 'inline-block',
            height: '2em',
            '& svg': {
                height: '2em',
                display: 'block'
            }
        },
        sourceLink: {
            display: 'inline-block',
        },
        sourceLinkIcon: {
            fontSize: '2em',
            transform: 'rotate(-45deg)'
        },
    },
    {
        name: "Header"
    }
)

export default function Header({ title, sourceLink }) {
    const styles = useStyles()
    const discordLink = useDiscordLink()

    return <div>
        <div className={styles.title}>
            <h1 className={styles.articleTitle}>
                {title ? title : (<><ImageFull className={styles.tourOfScalaLogo} src="/assets/tour-of-scala-logo.png" alt="Tour of Scala Logo" />Tour of Scala</>)}
            </h1>
            <div className={styles.titleLinks}>
                <L to={discordLink} className={styles.discordLink}>
                    <ImageFull src="/assets/Discord-Logo+Wordmark-Black.svg" />
                </L>
                <L to={sourceLink ? sourceLink : "https://leobenkel.com/category/scala/knowledge-bits/"} className={styles.sourceLink}>
                    <i className={cn("material-icons", styles.sourceLinkIcon)}>link</i>
                </L>
            </div>
        </div>
    </div>
}