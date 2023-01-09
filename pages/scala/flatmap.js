

import Skb from 'components/skb-page'

export const id = "flatmap"
const title = " Scala flatMap"

const date = "2020-09-02T17:10:15"

const scastieId = "ldCLOORGSEGwvfDOlUKDWA"

const mainInfoBox = <>
  <p>
I want to introduce you slowly to more complex problems. This one is still fun, as you know, the main topic is <code>flatMap</code> but you are going to get an intuition for a little more.</p>

<p>Enjoy the ride.
</p>
</>

const detailedInfoBox = <>
  <p>
Did you get <code>flatMap</code> ? It is <code>map</code> followed by <code>flatten</code>. Try to replace the <code>flatMap</code> in the code above by <code>map</code> and add <code>flatten</code> after it.
</p>
<p>
Ok, now that the topic of today’s episode is done. What is the wizardry with all the <code>case</code> ?! This is called <i>pattern matching</i>. I am sure that, right now, you have a good intuition about it, but we are going to dive more into it, soon.</p>
<p>Stay tuned! 
</p>
</>

const description = "Scala Knowledge Bits - Scala flatMap - Periodic exercise to learn bits of knowledge about Scala. Scala flatMap here."

const canonical_url = "https://leobenkel.com/2020/09/skb-scala-flatmap/"

const prevUrl = "random"
const nextUrl = "curry"

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
 