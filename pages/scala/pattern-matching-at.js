import Skb from 'components/skb-page'


export const id = "pattern-matching-at"
export const title = "Scala pattern matching @"

export const date = "2020-11-06T17:00:49"

const scastieId = "xsycVjGaSwubwwjAYM688w"

const mainInfoBox = <>
  <p>
    A little more about <i>pattern matching</i> !
  </p>

  <p>And we are going to learn about a new operator: <code>@</code> !
  </p>
</>

const detailedInfoBox = <>
  <p>
    The operator <code>@</code> allows you to capture the full entity the pattern matching has matched on.
  </p>
  <p>It is convenient in numerous use case but here is a few examples.
  </p>
  <pre>case a @ "something" =&gt; // something with a
  </pre>

  <p>
    It is also very convenient in cases with <code>Option</code>:
  </p>
  <pre>
    <p>opt match &#123;</p>
    <p>  case s @ Some("abc") =&gt; s</p>
    <p>  case _ =&gt; Some(default)</p>
    <p>&#125;</p>
  </pre>

  <p>
    Without it you would have to recreate a new object instead of reusing the one we already have.
  </p>
</>

const description = "Scala Knowledge Bits - pattern matching '@' - Periodic exercise to learn bits of knowledge about Scala. pattern matching '@' here."

const canonical_url = "https://leobenkel.com/2020/11/skb-scala-pattern-matching-at/"

const prevUrl = "infix-notation"
const nextUrl = "pattern-matching-or"

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
