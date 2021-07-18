import axios from 'axios'
import find from 'lodash/find'


function extractNextLink(headers) {
    function parse(input) {
        const total_articles = parseInt(input['x-wp-total'])

        // input:
        // "<https://leobenkel.com/wp-json/wp/v2/posts?categories%5B0%5D=171&page=2> rel="next""
        const rx = /<([^,]*)> rel="next"/g
        const arr = rx.exec(input['link']) || [null, null]
        const link_to_next_page = arr[1]
        return { link_to_next_page: link_to_next_page, total_articles: total_articles }
    }
    let match = parse(headers)
    return match
}
function buildName(slug) {
    return slug.replace('skb-', '')
}

function filterData(data) {
    const fieldToRemove = [
        "modified",
        "_links",
        "amp_enabled",
        "author",
        "categories",
        "comment_status",
        "featured_media",
        "format",
        "jetpack-related-posts",
        "jetpack_featured_media_url",
        "jetpack_likes_enabled",
        "jetpack_publicize_connections",
        "jetpack_sharing_enabled",
        "jetpack_shortlink",
        "meta",
        "new_scheduled_revision",
        "ping_status",
        "save_as_revision",
        "sticky",
        "tags",
        "template",
        "type",
        "yoast_head",
        "yoast_head_json",
        "guid"
    ]

    return data
        .filter(({ status }) => status == "publish")
        .map(d => {
            const correctSlug = buildName(d.slug)
            fieldToRemove.forEach(f => {
                delete d[f]
            })
            return {
                ...d,
                slug: correctSlug
            }
        })
}

export async function fetchLessons() {
    const util = require('util');
    const fs = require('fs')
    const path = require('path')
    const destinationFile = path.join(process.cwd(), 'lessonsData', 'data.json')
    const listPostsUrl = "https://leobenkel.com/wp-json/wp/v2/posts?categories=171&per_page=1"

    let fetchRecursive = function (url) {
        if (fs.existsSync(destinationFile)) {
            return util.promisify(fs.readFile)(destinationFile)
                .then((data) => {
                    const jsonData = JSON.parse(data)
                    return jsonData
                })
        } else {
            return axios({
                url: url,
                method: "GET"
            })
                .then(({ status, headers, data }) => {
                    if (status == 200) {
                        const results = extractNextLink(headers)
                        const nextUrl = results.link_to_next_page
                        const filteredData = filterData(data)

                        if (nextUrl) {
                            return fetchRecursive(nextUrl)
                                .then((newData) => filteredData.concat(newData))
                        } else return Promise.resolve(filteredData)
                    } else {
                        return Promise.reject(response.data)
                    }
                })
                .catch((data) => {
                    console.error('ERROR: ', data.response && data.response.data ? data.response.data : data, 'catch')
                })
        }
    }

    return fetchRecursive(listPostsUrl)
        .then((data) => {
            fs.writeFileSync(destinationFile, JSON.stringify(data, null, 2))
            return Promise.resolve(data)
        })
}

export async function getLessonBySlug(inputSlug) {
    return fetchLessons()
        .then((data) => {
            return find(data, ({ slug }) => slug == inputSlug)
        })
}