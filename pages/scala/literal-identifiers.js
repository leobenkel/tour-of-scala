

import Skb from 'components/skb-page'

export const id = "literal-identifiers"
export const title = "Scala literal identifiers"

export const date = "2020-12-30T17:03:03"

const scastieId = "PpMpUMxaSQyPHkYRKmbRIw"

const mainInfoBox = <>
  <p>Super short one today.</p>

<p>But I think it is necessary to know in case you encounter it in the wild</p>
</>

const detailedInfoBox = <>
  <p>
So yes, super short today like I said. 
</p>

<p>
It is possible in Scala to have weird value name that can be sentences. Or pretty much anything for that matter. You can even try to create a value named <code>\n</code> and it works.
</p>

<p>
The syntax is straightforward, just have to start and end the name of the identifier by <code>`</code> backquote.
</p>

<p>It also works for field names in a <code>case class</code> for instance.</p>

<p>
One use case where I have this used pretty often is with <i>giter8</i>. This is a system to create project template. You can learn more on <a href="https://github.com/foundweekends/giter8" target="_blank">their GitHub</a>. In those template, user can enter any input they want so i can be useful to keep the user input inside the <code>`</code> so the rest of the template do not break.
</p>

<p>
Another use case is to be able to use reserved keyword, for instance if you would like to name your value <code>type</code> that wouldn’t work, but you can name it <code>`type`</code>.
</p>
</>

const description = "Scala Knowledge Bits - Scala literal identifiers - Periodic exercise to learn bits of knowledge about Scala. Scala literal identifiers here."

const canonical_url = "https://leobenkel.com/2020/12/skb-scala-literal-identifiers/"

const prevUrl = "operators"
const nextUrl = "extractor-pattern"

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
 