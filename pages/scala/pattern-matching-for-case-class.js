

import Skb from 'components/skb-page'

export const id = "pattern-matching-for-case-class"
const title = " Scala pattern matching for case class"

const date = "2020-11-11T17:01:22"

const scastieId = "v70vPtVcTWmJb6NBzSAnDg"

const mainInfoBox = <>
  <p>We learned about pattern matching in the past and there were a lot of “<i>we will learn about this later</i>“.</p>

<p>
Some of the <i>later</i> is today !
</p>
</>

const detailedInfoBox = <>
  <p>
One of the big advantage of <code>case class</code> over <code>class</code> is the built-in support for pattern matching. We are going to see the same advantage with <code>case object</code> in a later SKB.
</p>

<p>
Coming back to <code>case class</code>. You can perform several test using pattern matching:
</p><p>

</p><ul>

<li>Extraction of field: <code>case Person(firstName, lastName) =&gt; ???</code></li>

<li>Extraction of field with condition: <code>case Person(firstName, lastName) if firstName.startsWith("L") =&gt; ???</code></li>

<li>Filter with exact match: <code>case Person("Leo", lastName) =&gt; ???</code></li>

<li>Filter with exact match and handle on case class: <code>case p @ Person("Leo", lastName) =&gt; ???</code></li>

<li>Several filters: <code>case p @ (Person("a", _) | Person(_, "b")) =&gt; ???</code></li>

</ul>

</>

const description = "Scala Knowledge Bits - Scala pattern matching for case class - Periodic exercise to learn bits of knowledge about Scala. Scala pattern matching for case class here."

const canonical_url = "https://leobenkel.com/2020/11/skb-scala-pattern-matching-for-case-class/"

const prevUrl = "pattern-matching-or"
const nextUrl = "upper-constraint"

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
 