import Skb from 'components/skb-page'


export const id = "string-interpolation"
export const title = "Scala String Interpolation"

export const date = "2020-07-15T17:01:28"

const scastieId = "YvHTOaC8SFCFpKzQLmd9ag"

const mainInfoBox = <>
  <p>Scala String Interpolation is how Strings can be constructed in Scala. It will be the way you can add Values inside a String. </p>
  <p>Strings in programming languages are chains of character, for instance: <code>"Hello World"</code>.</p>
</>

const detailedInfoBox = <>
  <p>You might have noticed the string is contained between quotes: <code>"..."</code>. </p>
  <p>An other thing to notice is the <code>s</code> preceding the first quote. It is necessary to transform <code>$h</code> into the content of the value <code>h</code>.</p>
</>

const description = "Scala Knowledge Bits - Scala String Interpolation - Periodic exercise to learn bits of knowledge about Scala. Scala String Interpolation here."

const prevUrl = "values"
const nextUrl = "methods"

export const pageData = {
  id,
  title,
  date,
  scastieId,
  mainInfoBox,
  detailedInfoBox,
  description,
  prevUrl,
  nextUrl
}

export default function Page() {
  return <Skb lesson={pageData} />
}
