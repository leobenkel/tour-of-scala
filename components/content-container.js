import cn from 'classnames'
import { createUseStyles } from 'react-jss'


const useStyles = createUseStyles(
    {
        skbInstructions: {
            overflow: 'auto',
            padding: '12px',
            paddingTop: '0',
            fontSize: '1em',
        },
        fullscreen: {
            paddingLeft: '10%',
            paddingRight: '10%'
        }
    },
    {
        name: "ContentContainer"
    }
)

export default function ContentContainer({ children, fullscreen }) {
    const styles = useStyles()

    return <div className={cn(styles.skbInstructions, { [styles.fullscreen]: fullscreen })}>{children}</div>
}