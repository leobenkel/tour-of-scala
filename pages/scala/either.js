

import Skb from 'components/skb-page'

export const id = "either"
const title = " Scala Either"

const date = "2020-10-12T17:00:24"

const scastieId = "bzjEzMzhQmSOiJm2bejFkw"

const mainInfoBox = <>
  <p><code>Either</code>, you will see, is kind of a in-between <code>Try</code> and <code>Option</code>.</p>

<p>Try to experiment to see the similarity and differences.</p>
</>

const detailedInfoBox = <>
  <p>
Similar to <code>Option</code>, you can create <code>Either</code> in two ways:
</p><ul>
<li><code>Right</code> which would be similar to <code>Some</code></li>
<li><code>Left</code> which, over time, became similar to <code>None</code>, except you can store information. I am saying “over time” because up until Scala v2.12+, <code>Either</code> was not <i>Right-bias</i>. <code>Left</code> and <code>Right</code> were just two Types. But now, <code>Left</code> is accepting to carry error messages and <code>Right</code> to be the channel for successes.</li>
</ul>
<p></p>

<p>
You can test which Type is <code>Either</code> using <code>isLeft</code> and <code>isRight</code>. You can also use <code>map</code>, <code>flatMap</code>, etc… once again. You must be starting to know those functions pretty well by now. This is where the <i>Right-bias</i> come into play. <code>map</code> will take a function that modify the type contained in <code>Right</code> and will not do anything if the <code>Either</code> contains a <code>Left</code>.
</p>

<p>
If you would like to specifically act on <code>Left</code> or <code>Right</code>, you can use the <code>.left</code> and <code>.right</code> methods to project the <code>Either</code> on one side of the other. For instance, to modify the content of the <code>Left</code> when it is there, you can do <code>.left.map(...)</code>.
</p>

<p>
One major difference with <code>Try</code> is that <code>Either</code> will not catch the Exception. If an exception is thrown inside an <code>Either</code> it will propagate. Inside a <code>Try</code> it will be captured inside the <code>Failure</code> channel.
</p>
</>

const description = "Scala Knowledge Bits - Scala Either - Periodic exercise to learn bits of knowledge about Scala. Scala Either here."

const canonical_url = "https://leobenkel.com/2020/10/skb-scala-either/"

const prevUrl = "trait"
const nextUrl = "string-format"

const pageData = {
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
 