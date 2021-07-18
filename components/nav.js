import { useRouter } from 'next/router'

import cn from 'classnames'
import { createUseStyles } from 'react-jss'

import { useActiveLesson } from 'lib/lesson-save'
import * as Routes from 'lib/routes'

import L from 'components/link'


const useStyles = createUseStyles(
    {
        nav: {
            display: 'flex',
            width: '100%',
            flexWrap: 'nowrap',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            borderTop: '2px #7c7c7c2f solid'
        },
        navLink: {
            display: 'inline-block',
            width: '100%',
            height: '32px',
            textAlign: 'center',

            '&:hover': {
                backgroundColor: '#bbc0c4'
            },
        },
        materialIcons: {
            width: '32px',
            height: '32px',
            fontSize: '2em'
        }
    },
    {
        name: "Nav"
    }
)


export default function Nav({ }) {
    const styles = useStyles()
    const router = useRouter()
    const currentPath = router.pathname
    const currentLesson = useActiveLesson()

    const pages = [
        {
            to: Routes.home,
            icon: 'list'
        },
        {
            to: Routes.about,
            icon: 'help_outline'
        },
        currentLesson ? {
            to: currentLesson,
            icon: 'engineering'
        } : null
    ].filter(e => e)

    return <div className={styles.nav}>
        {
            pages.map(({ to, icon }, i) => {
                if (currentPath == to) return null

                return <L key={i} to={to} className={styles.navLink}>
                    <i className={cn("material-icons", styles.materialIcons)}>{icon}</i>
                </L>
            })
        }
    </div>
}
