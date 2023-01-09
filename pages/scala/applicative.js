

import Skb from 'components/skb-page'

export const id = "applicative"
export const title = "Scala Applicative"

export const date = "2021-01-08T17:00:11"

const scastieId = "Jmp5pWRLQxeXZwTWT7PpRw"

const mainInfoBox = <>
  <p>
Let’s enhance our <i>Functor</i> from few episodes ago !
</p>

<p>
Let’s learn about <i>Applicative</i> which extends what a <i>Functor</i> can do.
</p>
</>

const detailedInfoBox = <>
  <p>
Now we can build more complex things with the structures we know ! 
</p>

<p>
Keep in mind that all the rules from <i>Functor</i> are still true.
</p>

<p>
With <i>Applicative</i> we open the possibility to work with several “Boxes”. With <i>Functor</i> only, it wouldn’t be possible to combine and compose them together. But with <i>Applicative</i>, we can !
</p>

<p>
With <i>Functor</i> only, if we have <code>F[A =&gt; B]</code> and <code>F[A]</code>, with <code>map</code> alone, we wouldn’t be able to combine them together. But with the <code>applicate</code> method (also simply called <code>ap</code>), we can !
</p>

<p>
We are getting closer to <code>flatten</code> and <code>flatMap</code> !
</p>
</>

const description = "Scala Knowledge Bits - Scala Applicative - Periodic exercise to learn bits of knowledge about Scala. Scala Applicative here."

const canonical_url = "https://leobenkel.com/2021/01/skb-scala-applicative/"

const prevUrl = "foldable"
const nextUrl = "covariance"

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
 