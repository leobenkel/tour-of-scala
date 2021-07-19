import cn from 'classnames'
import { createUseStyles } from 'react-jss'


const useStyles = createUseStyles({
    pop_up: {
        zIndex: 500,
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        bottom: 0,
        left: 0,
    },
    pop_up_top: {
        bottom: 'unset',
        top: 0
    },
    content: {
        maxWidth: '1200px',
        backgroundColor: 'white',
        color: 'black',
        margin: '26px',
        padding: '32px',
        border: `1px solid black`,
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    action: {
        margin: '16px',
    },
    text: {
        fontSize: '14pt',

        '& p': {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
        },
        '& a': {
            display: 'inline'
        }
    },
    button: {
        backgroundColor: '#ececec',
        outline: 'none',
        border: '2px #7c7c7c2f solid',
        padding: '8px',
        fontSize: '1.2em',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#bbc0c4'
        }
    }
}, {
    name: 'popUp'
})

export default function PopUp({ children, cta, onCta, displayTop }) {
    const styles = useStyles()

    return <div className={cn(styles.pop_up, { [styles.pop_up_top]: displayTop })}>
        <div className={styles.content}>
            <div className={styles.text}>{children}</div>

            <div className={styles.action}>
                <button
                    className={styles.button}
                    type="button"
                    onClick={onCta}>
                    {cta}
                </button>
            </div>
        </div>
    </div>
}
