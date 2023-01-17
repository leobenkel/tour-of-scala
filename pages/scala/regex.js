

import Skb from 'components/skb-page'

export const id = "regex"
export const title = "Scala Regex"

export const date = "2020-10-02T17:00:02"

const scastieId = "I7Vt5quwT2OLFVHbrpyHlw"

const mainInfoBox = <>
  <p>This SKB is about Regex, which stand for Regular Expression.</p>
<p>I will not explain the details about Regex in this article but feel free to look at those resources to learn more about it: 
</p><ul>
<li>To learn: <a href="https://github.com/ziishaned/learn-regex" target="_blank">github.com/ziishaned/learn-regex</a></li>
<li>To learn and practice: <a href="https://regexone.com/" target="_blank">Regex One</a></li>
<li>To practice: <a href="https://regexcrossword.com/" target="_blank">Regex Crossword</a></li>
</ul>
<p></p>

</>

const detailedInfoBox = <>
  <p>
The first example is a simple case to check for a match. However the compilation of the regex into an actionable test can be costly. It is recommended to compile the regex once before using it several times. This is when the second example come into play.
</p>

<p>
The second example is more complex and involved. We describe a structure to hold the regex and build a case class from it. We can then build shortcut methods to make the interaction with the regex more intuitive.
</p>

<p>
The third example is leveraging pattern matching. You can see each group match in the regex <code>( ... )</code> is corresponding to a value in the pattern matching.
</p>

</>

const description = "Scala Knowledge Bits - Scala Regex - Periodic exercise to learn bits of knowledge about Scala. Scala Regex here."

const canonical_url = "https://leobenkel.com/2020/10/skb-scala-regex/"

const prevUrl = "implicit-class"
const nextUrl = "implicit-val"

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
 