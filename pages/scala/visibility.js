

import Skb from 'components/skb-page'

export const id = "visibility"
const title = " Scala visibility"

const date = "2020-08-14T17:02:32"

const scastieId = "8lBYPLO0RAGZLT1C7idAuw"

const mainInfoBox = <>
  <p>Visibility is about what a <code>class</code> or an <code>object</code> expose to the rest of the world.</p>
</>

const detailedInfoBox = <>
  <p>Let’s review the different kind of visibility: </p>
<p></p><ul>

<li><code>public</code>: In scala, the <code>public</code> keyword does not exist, this is the default behavior. If nothing is specified, the member of this context will be available for all to call.</li>

<li><code>private</code>: This will make the member not visible to the rest of the world (There is an exception about <code>companion object</code>, we are going to learn about it in a future SKB).</li>

<li><code>protected</code>: This was not illustrated in this exercise. It is related to <i>object oriented programming</i> and more specifically about <i>inheritance</i>. We are going to learn more about it in a later SKB.</li>

</ul><p></p>
</>

const description = "Scala Knowledge Bits - Scala visibility - Periodic exercise to learn bits of knowledge about Scala. Scala visibility here."

const canonical_url = "https://leobenkel.com/2020/08/skb-scala-visibility/"

const prevUrl = "objects"
const nextUrl = "companion-objects"

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
 