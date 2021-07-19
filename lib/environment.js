
/**
    console.log(process.env)
    console.log(process.env['NODE_ENV'], process.env['CONTEXT'], process.env['NETLIFY_DEV'])
    NODE_ENV - development / production
    CONTEXT - dev / undefined
    NETLIFY_DEV - true / undefined
 */
export const isDev = process.env['NODE_ENV'] == "development"

// console.log(process.env['NODE_ENV'], isDev)
