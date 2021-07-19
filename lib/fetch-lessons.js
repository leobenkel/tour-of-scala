import axios from 'axios'
import find from 'lodash/find'
import sortBy from 'lodash/sortBy'


function extractNextLink(headers) {
    function parse(input) {
        const total_articles = parseInt(input['x-wp-total'])

        // input:
        // "<https://leobenkel.com/wp-json/wp/v2/posts?categories%5B0%5D=171&page=2> rel="next""
        const rx = /<([^,]*)>;? rel="next"/g
        const arr = rx.exec(input['link']) || [null, null]
        const link_to_next_page = arr[1]

        // console.log(input['link'], arr, link_to_next_page)

        return { link_to_next_page: link_to_next_page, total_articles: total_articles }
    }
    const match = parse(headers)
    return match
}

function rebuildSlug(slug) {
    return slug
        .replace('skb-', '')
        .replace('scala-', '')
}

function parseUrl(input) {
    if (input && !input.endsWith('/')) {
        input = input + '/';
    }
    // console.log('process URL: ', input);
    return input ? input
        .split("/")
        .slice(-2, -1)[0]
        .replace(/skb-/i, "")
        .replace(/scala-/i, "")
        .trim()
        : null;
}

function extractInformationFromExcerpt(content) {
    const jsdom = require('jsdom')
    const window = new jsdom.JSDOM().window
    const $ = require('jquery')(window)

    const $content = $(content)

    // console.log('content - ', content, ' - content')
    // console.log('$content - ', $content, ' - $content')
    const $p = $content[0]
    // console.log('$p - ', $p, ' - $p')
    const description = $p.innerHTML
    // console.log('$description - ', $p, ' - $description')

    return description
}

function extractInformationFromContent(content) {
    const jsdom = require('jsdom')
    const window = new jsdom.JSDOM().window
    // window.document.body.innerHTML = content
    const $ = require('jquery')(window)

    const $article = $(content)
    // console.log($article.find("#skb-main-exercise-scastie").length)
    // console.log($article.find("#skb-main-exercise-scastie")[0].text)
    // console.dir($article.find("#skb-main-exercise-scastie")[0])

    // scastie
    const scastieId = $article
        .find("#skb-main-exercise-scastie")
        .attr('src').split("/").pop().split("\.").shift()

    // navigation
    const prevUrl = parseUrl($article.find("#skb-previous-skb").attr('href'))
    const nextUrl = parseUrl($article.find("#skb-next-skb").attr('href'))

    const infoBoxes = $article.find('.skb-focus').toArray().map(function (e) { return e.innerHTML; })

    return { scastieId, prevUrl, nextUrl, mainInfoBox: infoBoxes[0], detailedInfoBox: infoBoxes[1] }
}

function filterData(data) {
    const fieldToRemove = [
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
            const information = extractInformationFromContent(d.content.rendered)
            const description = extractInformationFromExcerpt(d.excerpt.rendered)
            const correctSlug = rebuildSlug(d.slug)
            fieldToRemove.forEach(f => {
                delete d[f]
            })
            return {
                ...d,
                ...information,
                title: d.title.rendered.replace(/^SKB (-|&#8211;)/, ""),
                content: d.content.rendered,
                excerpt: d.excerpt.rendered,
                slug: correctSlug,
                description
            }
        })
}


export async function fetchLessons() {
    const util = require('util');
    const fs = require('fs')
    const path = require('path')
    const localFilePath = 'lessonsData/data.json'
    const destinationFile = path.join(process.cwd(), localFilePath)
    const listPostsUrl = "https://leobenkel.com/wp-json/wp/v2/posts?categories=171&per_page=30"

    const cacheExists = fs.existsSync(destinationFile)

    const fetchCachedData = function () {
        try {
            // Cannot use the variable: https://stackoverflow.com/questions/29051921/why-can-i-not-use-a-variable-as-parameter-in-the-require-function-of-node-js
            const data = require('lessonsData/data.json')
            return Promise.resolve(data)
        }
        catch (e) {
            console.log('cannot find module', e)
            return Promise.reject(e)
        }
    }

    const fetchRecursive = function (url) {
        if (cacheExists) {
            return fetchCachedData()
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
            if (data && data.length > 0) {
                fs.writeFileSync(
                    destinationFile,
                    JSON.stringify(
                        sortBy(data, ['date']),
                        null,
                        2
                    )
                )
            }
            return Promise.resolve(data)
        })
}

export async function getLessonBySlug(inputSlug) {
    return fetchLessons()
        .then((data) => {
            return find(data, ({ slug }) => slug == inputSlug)
        })
}
