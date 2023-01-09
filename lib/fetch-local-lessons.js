// import map from 'lodash/map'
const map = require('lodash/map')


function fetchLessons() {
    const fs = require('fs')
    const path = require('path')

    const files = fs.readdirSync(path.join(process.cwd(), '/pages/scala/'))


    return map(files, (f) => {
        try {
            return require(path.join(process.cwd(), '/pages/scala/', f))
        } catch (error) {
            console.error(f, error)
            return null
        }
    })
}

module.exports = { fetchLessons: fetchLessons() }