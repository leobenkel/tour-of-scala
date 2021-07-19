import Document, {
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'

import {
  JssProvider,
  SheetsRegistry,
} from 'react-jss'


const createGenerateId = (rule, sheet) => {
    return `ToS--${sheet.options.classNamePrefix}_-${rule.key}`
}

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        // https://github.com/vercel/next.js/blob/ad56e81f4d90d11c7f15b3a6b7b25324ce63844a/examples/with-react-jss/pages/_document.js#L5-L29
        const registry = new SheetsRegistry()
        const originalRenderPage = ctx.renderPage
        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => (props) => (
                    <JssProvider registry={registry} generateId={createGenerateId}>
                        <App {...props} />
                    </JssProvider>
                ),
            })

        const initialProps = await Document.getInitialProps(ctx)

        return {
            ...initialProps,
            styles: (
                <>
                    {initialProps.styles}
                    <style id="server-side-styles">{registry.toString()}</style>
                </>
            ),
        }
    }

    render() {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
