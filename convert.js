#! /usr/local/bin/node

const fs = require('fs')
const path = require('path')

//


///

const filePath = process.argv[2]

if (!fs.existsSync(filePath)) {
  console.log('File not found', filePath)
  return;
} else {
  console.log('File found', filePath)
}

const parentFilePath = path.dirname(filePath)
const fileContent = fs.readFileSync(filePath, 'utf8')


const parsedFileContent = JSON.parse(fileContent)

parsedFileContent.forEach((data) => {
  console.log(data.slug)


  delete data['content']
  delete data['status']
  data['date'] = data['date_gmt']
  delete data['date_gmt']
  delete data['id']
  delete data['modified']
  delete data['modified_gmt']

  data['canonical_url'] = data['link']
  delete data['link']
  data['id'] = data['slug']
  delete data['slug']
  delete data['excerpt']


  const dataContent = JSON.stringify(data, null, 2)

  const fileContent = `

import Skb from 'components/skb-page'

export const id = "${data.id.trim()}"
export const title = "${data.title.trim()}"

export const date = "${data.date.trim()}"

const scastieId = "${data.scastieId.trim()}"

const mainInfoBox = <>
  ${data.mainInfoBox}
</>

const detailedInfoBox = <>
  ${data.detailedInfoBox}
</>

const description = "${data.description.replaceAll("–", "-")}"

const canonical_url = "${data.canonical_url.trim()}"

const prevUrl = ${data.prevUrl ? `"${data.prevUrl.trim()}"` : null}
const nextUrl = ${data.nextUrl ? `"${data.nextUrl.trim()}"` : null}

export const pageData = {
  id,
  title,
  date,
  scastieId,
  mainInfoBox,
  detailedInfoBox,
  description,
  canonical_url,
  prevUrl,
  nextUrl
}

export default function Page() {
  return <Skb lesson={pageData} />
}
 `

  fs.writeFileSync(path.join(parentFilePath, '..', 'pages/scala', `${data.id}.js`), fileContent)
})


/*
export const pageData = ${dataContent}
`.replace(/"mainInfoBox": "(.+)",/, `"mainInfoBox": <>
$1
</>,`)
        .replace(/"detailedInfoBox": "(.+)",/, `"detailedInfoBox": <>
$1
</>,`)
        .replaceAll("\\n", `
`)
        .replaceAll("–", "-")
    */