

import Skb from 'components/skb-page'

export const id = "val-pattern-matching"
const title = " Scala val pattern matching"

const date = "2020-12-14T17:00:25"

const scastieId = "aLWSbioJT0ir0qACbt6yCg"

const mainInfoBox = <>
  <p>
Let’s see how <i>pattern matching</i> appear in other aspect of the language.
</p>
<p>
More specifically, how it shows up in <code>val</code> assignment.
</p>
</>

const detailedInfoBox = <>
  <p>
Using <i>pattern matching</i> in conjunction with <code>val</code> can be very useful especially when working with <code>Tuple</code> or other structures such as <code>Option</code>. 
</p>
<p>
It allows you to extract only the part you need and leave behind the rest using the <code>_</code> symbol. 
</p>
<p>
However, you have to be extremely careful using <i>pattern matching</i> with <code>val</code> because you don’t have a <code>case _ =&gt;</code> to catch the not matched cases. Which means, you are going to trigger exception at runtime. 
</p>
<p>
In the last example, if you give anything different than <code>abc</code>, the code is going to fail. But this failure happens at runtime, not at compile time which can be extremely bad and dangerous.
</p>
<p>
Use this carefully !
</p>
</>

const description = "Scala Knowledge Bits - Scala val pattern matching - Periodic exercise to learn bits of knowledge about Scala. Scala val pattern matching here."

const canonical_url = "https://leobenkel.com/2020/12/skb-scala-val-pattern-matching/"

const prevUrl = "_-wildcard"
const nextUrl = "star-parameter"

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
 