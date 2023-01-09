import map from 'lodash/map'


// const map = require('lodash/map')


export function fetchLessons() {
    const fs = require('fs')
    const path = require('path')

    const files = fs.readdirSync(path.join(process.cwd(), '/pages/scala/'))


    return map(files, (f) => {
        try {
            const data = require(path.join(process.cwd(), '/pages/scala/', f))
            return {
                id: data.id,
                title: data.title,
                date: data.date
            }
        } catch (error) {
            console.error(f, error)
            return null
        }
    })
}

// module.exports = { fetchLessons: fetchLessons() }