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
        iconImgIcon: {
            height: '1.7em'
        },
    },
    {
        name: "Header"
    }
)

export default function Header({ title, sourceLink, githubLink }) {
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
                {sourceLink ?
                    <L to={sourceLink} className={styles.sourceLink}>
                        <i className={cn("material-icons", styles.sourceLinkIcon)}>link</i>
                    </L> : null}
                {githubLink ?
                    <L to={githubLink} className={styles.sourceLink}>
                        <ImageFull className={styles.iconImgIcon} src="/assets/GitHub-Mark-64px.png" alt="Github Logo" />
                    </L> : null}
            </div>
        </div>
    </div>
}