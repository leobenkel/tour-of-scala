import { ReactSVG } from 'react-svg'


export default function ImageFull({ alt, src, className, priority, ...props }) {
    if (src.endsWith('svg')) {
        return (
            <ReactSVG
                src={src}
                {...props}
                className={className}
            />
        )
    } else {
        if (!alt) console.error(`No ALT for image: '${src}'`)
        return (
            <img
                inline="true"
                alt={`Tour of Scala - ${alt}`}
                title={`Tour of Scala - ${alt}`}
                {...props}
                src={src}
                className={className}
            />
        )
    }
}