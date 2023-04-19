import Skb from 'components/skb-page'


export const id = "pattern-matching-or"
export const title = "Scala pattern matching OR"

export const date = "2020-11-09T17:00:54"

const scastieId = "L2xDjw3yTfeVu8BvTlvJuw"

const mainInfoBox = <>
  <p>Let's continue the pattern matching exploration.</p>

  <p>
    How would you match several conditions at once ? We are going to learn this today.
  </p>
</>

const detailedInfoBox = <>
  <p>
    Once you know the syntax, it is pretty straight forward, you have to use the symbol <code>|</code>. Like the boolean operator <code>OR</code>: <code>||</code>.
  </p>

  <p>The syntax is:</p>
  <pre>case valueName @ ( enum1 | enum2 | enum3 ) =&gt; ...
  </pre>

  <p>You can also do the same thing without the <code>@</code>:
  </p>

  <pre>case ( enum1 | enum2 | enum3 ) =&gt; ...
  </pre>

  <p>
    And you can do the same thing with <code>case class</code>:
  </p>

  <pre>case valueName @ ( CaseClass(_, exactMatch) | CaseClass(match2, _) ) =&gt; ...
  </pre>

  <p>
    Next time, we are going to dive more into the <code>case class</code> use case.</p>
</>

const description = "Scala Knowledge Bits - Scala pattern matching OR - Periodic exercise to learn bits of knowledge about Scala. Scala pattern matching OR here."

const prevUrl = "pattern-matching-at"
const nextUrl = "pattern-matching-for-case-class"

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
