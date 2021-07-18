import cn from 'classnames'
import { createUseStyles } from 'react-jss'

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


export default function Nav({ }) {
    const styles = useStyles()

    return <div className={styles.nav}>
        <L to={Routes.home} className={styles.navLink}>
            <i className={cn("material-icons", styles.materialIcons)}>list</i>
        </L>
        <L to={Routes.about} className={styles.navLink}>
            <i className={cn("material-icons", styles.materialIcons)}>engineering</i>
        </L>
    </div>
}