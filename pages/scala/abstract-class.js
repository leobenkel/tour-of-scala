

import Skb from 'components/skb-page'

export const id = "abstract-class"
const title = " Scala abstract class"

const date = "2020-10-16T17:00:18"

const scastieId = "fwuSQ1sSRhC5rURpo5vdvw"

const mainInfoBox = <>
  <p>This SKB is going to continue our progress in the Object Oriented Programming aspect of Scala.</p>
<p><code>abstract class</code> are pretty similar to <code>trait</code> we saw before. But there are some slight differences.</p>
</>

const detailedInfoBox = <>
  <p>
You recognize the same keywords we learned about when we learned about <code>trait</code>. You can see <code>extends</code>, <code>protected</code> and <code>override</code>.
</p>

<p>
There are more differences but for the moment let’s go one step at a time.
</p>
<p>
The main difference you can notice compare to <code>trait</code> is that you are able to have a constructor directly when you <code>extends</code> the <code>abstract class</code>. This is pretty convenient to build simple pattern. We are going to see more about this in the context of <code>enumeration</code>.
</p>
<p>
To practice the concepts of Object Oriented Programming, Try to access the fields of <code>Shape</code> in the child classes. You notice that only <code>lengthOfSides</code> is <code>protected</code> and not the other ones. Remember <code>class</code> ? By default fields are <code>private</code> in a <code>class</code>. Try to add methods, maybe the area ?
</p>
</>

const description = "Scala Knowledge Bits - Scala abstract class - Periodic exercise to learn bits of knowledge about Scala. Scala abstract class here."

const canonical_url = "https://leobenkel.com/2020/10/skb-scala-abstract-class/"

const prevUrl = "string-format"
const nextUrl = "recursion"

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
 