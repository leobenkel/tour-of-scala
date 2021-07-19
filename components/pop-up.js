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
    content: //utilsStyle.multiSize({
    //    desktop:
    // merge({},
    // utilsStyle.pop_up,
    {
        maxWidth: '1200px',
        backgroundColor: 'white',
        color: 'black',
        margin: '26px',
        padding: '32px',
        borderRadius: '4px',
        border: `1px solid black`,
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    // ),
    //     mobile: {
    //         margin: '12px',
    //         marginBottom: '24px',
    //         flexDirection: 'column',
    //         fontSize: '10pt',
    //         padding: '12px',
    //     },
    // }),
    action: //utilsStyle.multiSize({
    // desktop: 
    {
        margin: '16px',
    },
    //     mobile: {
    //         '& button': {
    //             fontSize: '12pt',
    //         },
    //     },
    // }),
    text: //utilsStyle.multiSize({
    // desktop: 
    {
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
    //     mobile: { fontSize: '11pt' },
    //     small: { fontSize: '10pt' },
    // }),
    // button: merge({},
    //     buttonStyle.submit_btn,
    //     buttonStyle.basic_btn,
    //     buttonStyle.action_btn
    // ),
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
