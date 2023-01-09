import map from 'lodash/map'


export function fetchLessons() {
    const fs = require('fs')
    const path = require('path')

    const files = fs.readdirSync(path.join(process.cwd(), '/pages/scala/'))

    return map(files, (f) => {
        try {
            const fullFileName = path.join(process.cwd(), '/pages/scala/', f)
            // const data = require()

            if (!fs.existsSync(fullFileName)) {
                console.log('File not found', fullFileName)
                return;
            }

            const fileContent = fs.readFileSync(fullFileName, 'utf8')

            const search = (field) => {
                const regex = new RegExp(`^export const ${field} = "(.+)"$`, 'gm')
                const r = regex.exec(fileContent) || [null, null]
                return r[1]
            }

            const data = {
                id: search('id'),
                title: search('title'),
                date: search('date')
            }

            console.log(data)
            return data
        } catch (error) {
            console.error(f, error)
            return null
        }
    })
}

// module.exports = { fetchLessons: fetchLessons() }