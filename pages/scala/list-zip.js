import Skb from 'components/skb-page'


export const id = "list-zip"
export const title = "Scala List zip"

export const date = "2020-11-25T17:01:50"

const scastieId = "lMLBr2JBQZGtHCaAoZnlRg"

const mainInfoBox = <>
  <p>
    I just realized we forgot to talk about <code>zip</code>.
  </p>

  <p>Today should be an easy one.</p>

  <p>Don't forget, you can use <code>Range</code> to create List more easily.</p>
</>

const detailedInfoBox = <>
  <p>
    Easy ?
  </p>
  <p>
    <code>zip</code> allows you to combine two list into one. The syntax is
  </p>
  <pre>List[A].zip(List[B]) =&gt; List[(A, B)]
  </pre>
  <p>
    It will return a list with both type as a <code>tuple</code>
  </p>

  <p>
    I also introduce a little new function: <code>swap</code>. It is a function available for <code>Tuple[A, B]</code>. It allows to flip a <code>tuple(a, b)</code> into a <code>tuple(b, a)</code>.
  </p>

  <p>Extra exercise:</p>
  <p>
    What happen if you zip several times in a row ?
  </p>
  <p>
    Try out: <code>l1.zip(l2).zip(l3).zip(l4)</code>
  </p>
  <p>
    And then try to combine it all with
    <code>.map{ case ??? =&gt; }</code>
  </p>
  <p>
    What will be the case pattern here ?
  </p>
</>

const description = "Scala Knowledge Bits - Scala List zip - Periodic exercise to learn bits of knowledge about Scala. Scala List zip here."

const canonical_url = "https://leobenkel.com/2020/11/skb-scala-list-zip/"

const prevUrl = "challenge-1"
const nextUrl = "_-placeholder"

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
