

import Skb from 'components/skb-page'

export const id = "string-format"
const title = " Scala String Format"

const date = "2020-10-14T17:01:13"

const scastieId = "G0GDlJ2GQ2O9w05HPQycGA"

const mainInfoBox = <>
  <p>Little break from the heavy stuff !</p>
<p>Let’s see an example on how some <code>Java</code> features have been integrated in Scala. Specially about String formatting at the moment.</p>
</>

const detailedInfoBox = <>
  <p>
This SKB is about formatting numbers.
</p>
<p>
In the first example, we are seeing how to add leading zeros in front of a number. That can be useful when building some UI or dashboard so the alignment is fix no matter how big the number is. Pretty useful and easy to use !
</p>

<p>
Then formatting <code>Double</code>, how to truncate the decimals as well as adding leading zeros. Play with it to get a good intuition about it.
</p>

<p>
And finally, getting closer to <code>Java</code> with <code>Locale</code> which allow you to display a number the right way based on the location. <code>Locale</code> can also be used to format dates and currencies ! Feel free to search for more information online and try to implement the code in here.
</p>
</>

const description = "Scala Knowledge Bits - Scala String Format - Periodic exercise to learn bits of knowledge about Scala. Scala String Format here."

const canonical_url = "https://leobenkel.com/2020/10/skb-scala-string-format/"

const prevUrl = "either"
const nextUrl = "abstract-class"

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
 