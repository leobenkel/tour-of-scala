import { createUseStyles } from 'react-jss'

import RightSide from 'components/right-side'


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
        }
    },
    {
        name: "SkbList"
    }
)

export default function SkbList({ allLessons }) {
    const styles = useStyles()


    return <RightSide>
        <div className={styles.searchBar}>
            <span className={styles.searchLabel}>Search:</span>
            <input type="text" placeholder="Search..." className={styles.searchInput} />
        </div>
        <div className="list-wrapper"></div>
    </RightSide>
}
