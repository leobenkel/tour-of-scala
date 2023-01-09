

import Skb from 'components/skb-page'

export const id = "stream"
const title = " Scala Stream"

const date = "2020-09-25T17:00:35"

const scastieId = "HXLsbXJQSVSKmS333hXm6w"

const mainInfoBox = <>
  <p>
An other data structure today ! After seeing <code>List</code>, <code>Set</code>. Let’s talk about <code>Stream</code>, now called <code>LazyList</code> in Scala 2.13+.
</p>

<p>This is a bit of a longer exercise because there are several ways to create a <code>LazyList</code> and several ways to use it. Remember, this is <strong>your</strong> journey. If you only have the time to complete the beginning, you can move on or come back to it later.</p>
</>

const detailedInfoBox = <>
  <p>
In the first section, you saw how to create a <code>LazyList</code> recursively using the symbol <code>#::</code>. You also learned that you can <code>take</code> as many elements as you want, but since Scala values <i>immutability</i>, doing it several times in a row will always returns the same elements. Make sure to read the log statements carefully.
</p>

<p>
In the second section, we are using <code>LazyList.from</code> to use the build-in tools that allow you to start a sequential <code>stream</code> starting at <code>n</code> and increasing one by one. You also see that <code>map</code> can be used to modify the outcome of the <code>LazyList</code>. And finally, <code>take</code> can only reduce the size of the stream.
</p>

<p>
In the third and final section, we are implementing <code>factorial</code>, once recursively and then using a <code>LazyList</code>. Have you notice the use of the <code>foldLeft</code> from previous SKB !?
</p>

</>

const description = "Scala Knowledge Bits - Scala Stream - Periodic exercise to learn bits of knowledge about Scala. Scala Stream here."

const canonical_url = "https://leobenkel.com/2020/09/skb-scala-stream/"

const prevUrl = "foldleft"
const nextUrl = "for-comprehension"

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
 