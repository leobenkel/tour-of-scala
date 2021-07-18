import { useState } from 'react'

import cn from 'classnames'
import { createUseStyles } from 'react-jss'


const useStyles = createUseStyles(
    {
        right: {
            display: 'block',
            height: '100%',
            minHeight: '100%',
            maxHeight: '100%',
            backgroundColor: '#ececec',
            boxSizing: 'border-box',
            transition: 'width .225s ease'
        },
        rightAsListContainer: {
            display: 'flex',
            flexDirection: 'column'
        },
        closed: {
            width: '84px',
            paddingLeft: '84px',
            overflow: 'hidden',
            '& > *': {
                opacity: 0
            }
        },
        expanded: {
            width: '55vw',
            minWidth: '55vw',
            maxWidth: '55vw'
        },
        rightToggle: {
            position: 'absolute',
            top: '16px',
            right: '32px',
            zIndex: '999'
        },
        rightToggleBtn: {
            margin: '0',
            padding: '0',
            display: 'flex',
            cursor: 'pointer',
            border: '0',
            backgroundColor: 'transparent',
            outline: 'none',
            '&:focus': {
                border: '0',
                outline: 'none'
            },
            '& i': {
                fontSize: '2em'
            }
        }
    },
    {
        name: "RightSide"
    }
)

export default function RightSide({ children, forList, className }) {
    const styles = useStyles()
    const [rightExpanded, setRightExpanded] = useState(true)

    return <>
        <div className={cn(
            styles.right,
            className,
            {
                [styles.rightAsListContainer]: forList,
                [styles.expanded]: rightExpanded,
                [styles.closed]: !rightExpanded
            }
        )} >
            {children}
        </div>
        <div className={styles.rightToggle}>
            <button className={styles.rightToggleBtn} onClick={() => setRightExpanded(!rightExpanded)}>
                <i className="material-icons">{rightExpanded ? 'close_fullscreen' : 'open_in_full'}</i>
            </button>
        </div>
    </>
}