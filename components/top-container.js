import { createUseStyles } from 'react-jss'


const useStyles = createUseStyles(
    {
        top: {
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            justifyContent: 'left',
            maxHeight: 'calc(100% - 34px)',
            padding: '0',
            boxSizing: 'border-box'
        }
    },
    {
        name: "Top"
    }
)

export default function Top({ children }) {
    const styles = useStyles()

    return <div className={styles.top}>{children}</div>
}