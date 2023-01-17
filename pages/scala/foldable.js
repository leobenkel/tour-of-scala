

import Skb from 'components/skb-page'

export const id = "foldable"
export const title = "Scala Foldable"

export const date = "2021-01-06T17:00:48"

const scastieId = "q7avzZbtSreqhyrrdrp1kA"

const mainInfoBox = <>
  <p>After learning about <i>Functor</i>, the next piece with no dependency is <i>Foldable</i>.</p>
<p>Similarly to <i>Functor</i>, this concept is taken from Category Theory and used in Functional Programing.</p>
</>

const detailedInfoBox = <>
  <p>
The operation <i>fold</i> allows is an aggregation. It takes a starting element and combine it with the <i>Foldable</i> type following the recipe provided by the method <code>f</code>. 
</p>

<p>
<i>Fold</i> can the used to implement <code>reduce</code>. You should try it ! The difference with <code>reduce</code> is that the start element is either the identity of the operation provided in <code>f</code>, meaning an element that does not change the value, for instance empty string <code>""</code> for the string concatenation operation or the <code>0</code> for the <code>+</code> operation in <code>Int</code> type. It is possible to implement a version of <code>reduce</code> where the start element is simply the first element to be combined in the <code>fold</code> if you have access to a function <code>head</code> for instance. You will have to handle cases when the <code>Foldable</code> provided is empty too. 
</p>

<p>
As you can see <i>fold</i> implementation is relying on recursion. We talked about recursion in a previous episode.
</p>

<p>
Now you have seen <code>Functor</code> and <code>Foldable</code> !
</p>
</>

const description = "Scala Knowledge Bits - Scala Foldable - Periodic exercise to learn bits of knowledge about Scala. Scala Foldable here."

const canonical_url = "https://leobenkel.com/2021/01/skb-scala-foldable/"

const prevUrl = "functor"
const nextUrl = "applicative"

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
 