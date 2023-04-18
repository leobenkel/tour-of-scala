import Skb from 'components/skb-page'


export const id = "tuple"
export const title = "Scala Tuple"

export const date = "2020-08-26T17:02:11"

const scastieId = "TUuvqIPHTc2A3jHNSYMBBQ"

const mainInfoBox = <>
  <p>Imagine, for instance, you would like to pair together an identification number (<code>Int</code>) and a name (<code>String</code>).
  </p>
  <p>Let's see how to do that in Scala.</p>
</>

const detailedInfoBox = <>
  <p>
    By now, you probably have understood that a Tuple is a way to combine two or more types into one. For instance you can combine a <code>Int</code> and a <code>String</code> into a tuple <code>(Int, String)</code>. You can combine up to 22 Types ! ( You can read more why <a href="https://stackoverflow.com/questions/4152223/why-are-scala-functions-limited-to-22-parameters" target="_blank">on here</a> )
  </p>

  <p>The other important aspect is the accessors. For instance, if you have a Tuple <code>(Double, Int, String)</code>, to access the first element you have to use <code>_1</code>, the second with <code>_2</code>, etc…</p>

  <p>Tuples are also involved in the concept of <i>pattern matching</i> that we are going to learn more about later.</p>

  <p>As a note about good practices: whenever possible, you should use a <code>case class</code> rather than a Tuple. In the long run, it makes things much easier to manage and maintain.</p>


</>

const description = "Scala Knowledge Bits - Scala Tuple - Periodic exercise to learn bits of knowledge about Scala. Scala Tuple here."

const prevUrl = "list-flatten"
const nextUrl = "thread-sleep"

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
