import Link from 'next/link'


export default function L({ children, to, prefetch, ref, className, ...props }) {
    const external = to.startsWith('http')

    if (external) {
        return (
            <a
                {...props}
                href={to}
                ref={ref}
                target="_blank"
                rel="noopener"
                className={className}
            >{children}</a>
        )
    } else {
        let attributes = {}
        if (!prefetch) {
            attributes = {
                prefetch: false
            }
        }

        return (
            <Link
                href={to}
                {...attributes}
                {...props}
                ref={ref}
                className={className}
            >
                {children}
            </Link>
        )
    }
}
