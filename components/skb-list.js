import dynamic from 'next/dynamic'

import cn from 'classnames'
import { createUseStyles } from 'react-jss'

import { useHover } from 'lib/hover'
import * as Routes from 'lib/routes'

import RightSide from 'components/right-side'


const L = dynamic(() => import('components/link'))


const useStyles = createUseStyles(
    {
        searchBar: {
            display: 'flex',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '8px',
            paddingRight: '64px',
            fontSize: '18px'
        },
        searchLabel: {
            [`@media screen and (max-width: 532px)`]: {
                display: 'none'
            }
        },
        searchInput: {
            flex: '1',
            marginLeft: '8px',
            borderRadius: '8px',
            border: '#bbc0c4 solid 1px',
            lineHeight: '18px',
            padding: '8px'
        },
        linkToSkb: {
            display: 'flex',
            width: '100%',
            padding: '8px',
            paddingLeft: '5%',
            color: 'black',
            textDecoration: 'none',
            fontWeight: 'bold',
            justifyContent: 'left',
            flexWrap: 'nowrap',
            alignItems: 'center',

            '&:hover': {
                background: '#bbc0c4'
            }
        },
        titleHovered: {
            color: 'black',
            textDecoration: 'underline',
            fontWeight: 'bold'
        },
        skbListTitle: {

        }
    },
    {
        name: "SkbList"
    }
)

function SkbRow({ slug, title }) {
    const styles = useStyles()
    const { hover, hoverProps } = useHover()
    const activeLesson = ''// useActiveLesson()

    return <L
        to={Routes.skbFromSlug(slug)}
        className={styles.linkToSkb}
        {...hoverProps}
    >
        {activeLesson == slug ? <span class="active-skb"><i className="material-icons">play_arrow</i></span> : null}
        <span class={cn(styles.skbListTitle, { [styles.titleHovered]: hover })}>{title.rendered}</span>
    </L>
}

export default function SkbList({ allLessons }) {
    const styles = useStyles()

    return <RightSide>
        <div className={styles.searchBar}>
            <span className={styles.searchLabel}>Search:</span>
            <input type="text" placeholder="Search..." className={styles.searchInput} />
        </div>
        <div className="list-wrapper">
            {allLessons.map((d, i) => <SkbRow key={i} {...d} />)}
        </div>
    </RightSide>
}
