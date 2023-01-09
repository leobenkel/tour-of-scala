import { createUseStyles } from 'react-jss'

import ImageFull from 'components/image-full'
import L from 'components/link'


const useStyles = createUseStyles(
    {
        madeBy: {
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'nowrap',
            alignItems: 'center',
            padding: '4px 12px'
        },
        madeByIconLink: {
            textDecoration: 'none',
            color: 'black',
            marginRight: '4px'
        },
        iconImgIcon: {
            height: '1.3em'
        },
        iconImgIconMaterial: {
            fontSize: '1.3em',
            transform: 'rotate(-45deg)'
        },
    },
    {
        name: 'MadeBy'
    }
)

export default function MadeBy() {
    const styles = useStyles()


    return <div className={styles.madeBy}>
        <div>Made by Leo Benkel</div>
        <div>
            <L to="https://www.patreon.com/leobenkel" className={styles.madeByIconLink} >
                <ImageFull className={styles.iconImgIcon} src="/assets/Patreon-Logo.png" alt="Patreon Logo" />
            </L>
            <L to="https://www.linkedin.com/in/leobenkel/" className={styles.madeByIconLink} >
                <ImageFull className={styles.iconImgIcon} src="/assets/linkedin-xxl.png" alt="LinkedIn Logo" />
            </L>
            <L to="https://github.com/leobenkel/" className={styles.madeByIconLink} >
                <ImageFull className={styles.iconImgIcon} src="/assets/GitHub-Mark-64px.png" alt="Github Logo" />
            </L>
        </div>
    </div>
}