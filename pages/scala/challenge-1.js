

import Skb from 'components/skb-page'

export const id = "challenge-1"
export const title = "Scala Challenge 1"

export const date = "2020-11-23T17:00:23"

const scastieId = "xYbhCpOyRGCalWW4CgA6Iw"

const mainInfoBox = <>
  <p>
Today will be a practice challenge ! I had this idea in the corner of my mind for a while, but today is the day.
</p>

<p>
We have been learning a lot together in those past months. It is time to now apply everything we practiced so far in a little challenge exercise. You will have to implement things yourself and fix the code.
</p>

<p>
If you have trouble, feel free to jump in the Discord server to get help.
</p>
</>

const detailedInfoBox = <>
  <p>
How was it ?! Did you manage to solve all the problems ? 
</p>

<p>
What tools did we use to solve this challenge ? 
</p>

<ul>
<li>Math, for the rounding and totals</li>
<li><code>trait</code> and <code>abstract class</code> for the <code>display</code> and <code>Item</code></li>
<li><code>Case class</code></li>
<li><code>Object</code></li>
<li><code>copy</code></li>
<li>And some fun with text interpolation to display a beautiful receipt.</li>
</ul>

<p>
I hope that was fun. This is the first time, so please let me know if you have any feedback. Was it too easy ? Was it too hard ?
</p>

</>

const description = "Scala Knowledge Bits - Scala Challenge 1 - Periodic exercise to learn bits of knowledge about Scala. Scala Challenge 1 here."

const canonical_url = "https://leobenkel.com/2020/11/skb-scala-challenge-1/"

const prevUrl = "case-class-unapply"
const nextUrl = "list-zip"

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
 