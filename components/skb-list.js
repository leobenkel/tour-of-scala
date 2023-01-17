import { useState } from 'react'

import dynamic from 'next/dynamic'

import cn from 'classnames'
import { createUseStyles } from 'react-jss'

import { useHover } from 'lib/hover'
import { useActiveLesson } from 'lib/lesson-save'
import * as Routes from 'lib/routes'

import RightSide from 'components/right-side'


const L = dynamic(() => import('components/link'))


const useStyles = createUseStyles(
    {
        listWrapper: {
            backgroundColor: '#ececec',
            overflowY: 'auto',
            overflowX: 'hidden',
            flex: '1'
        },
        listSkb: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            flexWrap: 'nowrap'
        },
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

        },
        activeSkb: {
            marginRight: '10px',
            margin: '0',
            padding: '0',
            width: '20px',
            height: '20px',
            display: 'block',
            fontSize: '20px',
            textDecoration: 'none',

            '& i': {
                margin: '0',
                padding: '0',
                width: '20px',
                height: '20px',
                display: 'block',
                fontSize: '20px',
                textDecoration: 'none'
            }
        }
    },
    {
        name: "SkbList"
    }
)

function SkbRow({ id, title }) {
    const styles = useStyles()
    const { hover, hoverProps } = useHover()
    const activeLesson = useActiveLesson()

    return <L
        to={Routes.skbFromSlug(id)}
        className={styles.linkToSkb}
        {...hoverProps}
    >
        <span className={styles.activeSkb}> {activeLesson == id ? <i className="material-icons">play_arrow</i> : null}</span>
        <span className={cn(styles.skbListTitle, { [styles.titleHovered]: hover })}>{title}</span>
    </L>
}

function SearchBar({ allLessons, setDisplayedLessons }) {
    const styles = useStyles()

    return <div className={styles.searchBar}>
        <span className={styles.searchLabel}>Search:</span>
        <input
            type="text"
            placeholder="Search..."
            className={styles.searchInput}
            onChange={(event) => {
                event.preventDefault()
                const search = event.target.value
                setDisplayedLessons(search ?
                    allLessons
                        .filter(skb => {
                            return skb.title.toLowerCase().includes(search.toLowerCase()) ||
                                skb.id.toLowerCase().includes(search.toLowerCase())
                        }) :
                    allLessons
                )
            }}
        />
    </div>
}

export default function SkbList({ allLessons }) {
    const [displayedLessons, setDisplayedLessons] = useState(allLessons)
    const styles = useStyles()

    return <RightSide forList>
        <SearchBar
            allLessons={allLessons}
            setDisplayedLessons={setDisplayedLessons}
        />
        <div className={styles.listWrapper}>
            <div className={styles.listSkb}>
                {displayedLessons.map((d, i) => <SkbRow key={i} {...d} />)}
            </div>
        </div>
    </RightSide>
}
