import { createUseStyles } from 'react-jss'


const useStyles = createUseStyles(
    {
        left: {
            display: 'flex',
            height: '100%',
            minHeight: '100%',
            maxHeight: '100%',
            backgroundColor: '#ececec',
            padding: '0',
            boxSizing: 'border-box',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            justifyContent: 'space-between',
            borderRight: '2px #7c7c7c2f solid',
            width: 'auto',
            flex: '1 1 45vw',
            overflow: 'auto'
        }
    },
    {
        name: "LeftSide"
    }
)

export default function LeftSide({ children }) {
    const styles = useStyles()

    return <div className={styles.left}>
        {children}
    </div>
}