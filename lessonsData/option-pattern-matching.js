

export const id = "option-pattern-matching"
const title = " Scala Option pattern matching"

const date = "2020-12-21T17:02:35"

const scastieId = "PDLP0wHGQKqN5oS2yt6R4g"

const mainInfoBox = <>
  <p>Easy one today.</p>
<p>We are going to see how the concepts of <code>unapply</code>, <i>pattern matching</i> and <code>Option</code> work together.</p>
</>

const detailedInfoBox = <>
  <p>
Under the hood <code>Option</code> is a <i>sealed trait</i> that we saw before. It has two implementations: <code>Some</code> and <code>None</code>. 
</p>

<p>
The <code>Some</code> has an <code>unapply</code> method that let you extract the value out. You can see it being used in <code>case Some(n) =&gt;</code>. The <code>None</code> do not since it defines the case when the <code>Option</code> is empty.
</p>

<p>
On the <i>pattern matching</i> sides of things, because it is a <i>sealed trait</i>, the compiler knows how many possible cases there are: 2. If you remove the <code>Some</code> case or the <code>None</code> one, the compiler will give you a warning related to the completeness of the match cases. 
</p>
</>

const description = "Scala Knowledge Bits - Scala Option pattern matching - Periodic exercise to learn bits of knowledge about Scala. Scala Option pattern matching here."

const canonical_url = "https://leobenkel.com/2020/12/skb-scala-option-pattern-matching/"

const prevUrl = "self-referred-type"
const nextUrl = "list-pattern-matching"

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
 