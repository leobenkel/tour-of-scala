import { useRouter } from 'next/router'

import cn from 'classnames'
import concat from 'lodash/concat'
import sortBy from 'lodash/sortBy'
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


export default function Nav({ navigation }) {
    const styles = useStyles()
    const router = useRouter()
    const currentPath = router.pathname
    const isSKBPath = currentPath.startsWith('/skb')
    const currentLesson = useActiveLesson()

    const links = concat([],
        [{
            to: Routes.home,
            icon: 'list',
            priority: 1
        }],
        [!isSKBPath ? {
            to: Routes.about,
            icon: 'help_outline',
            priority: 2
        } : null],
        [currentLesson && !isSKBPath ? {
            to: Routes.skbFromSlug(currentLesson),
            icon: 'engineering',
            priority: 1
        } : null],

        navigation ? concat([],
            [navigation[0] ? {
                to: navigation[0],
                icon: 'navigate_before',
                priority: 0
            } : null],
            [navigation[1] ? {
                to: navigation[1],
                icon: 'navigate_next',
                priority: 10
            } : null]
        ) : null
    ).filter(e => e)

    return <div className={styles.nav}>
        {
            sortBy(links, ['priority']).map(({ to, icon }, i) => {
                if (currentPath == to) return null

                return <L key={i} to={to} className={styles.navLink}>
                    <i className={cn("material-icons", styles.materialIcons)}>{icon}</i>
                </L>
            })
        }
    </div>
}
