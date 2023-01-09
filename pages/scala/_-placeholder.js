

import Skb from 'components/skb-page'

export const id = "_-placeholder"
const title = " Scala _ placeholder"

const date = "2020-11-27T17:01:59"

const scastieId = "y3LB3ugXQKOR4VhY3aaotA"

const mainInfoBox = <>
  <p>Today we are leveling up !</p>

<p>Introducing several use cases for the mysterious <code>_</code>. I consider all those use cases to fall under the “<i>Placeholder</i>” category but the technical terms can be more granular. In the extra explanation, after the exercise, I will put a link with more in detailed description if you want to dive deeper.</p>
</>

const detailedInfoBox = <>
  <p>
Sorry it was a lengthy exercise !
</p>
<p>
The first use case is related to <i>partial function</i>. It allows you to put a placeholder where an argument of a function would be to create a new function that take as argument the missing argument(s).
</p>
<p>
You can omit more than one argument and the input of the new function will be those omitted arguments.
</p>

<p>
The second use case is during transformations or chained operation such as <code>map</code>, <code>flatMap</code>, <code>filter</code>, etc… 
</p>

<p>
Now, when you see something like <code>a =&gt; a ...</code>, you know you can replace it with <code>_</code>.
</p>
<p>
As a side note, in IntelliJ, you can put your caret on the variable ( the variable name before the <code>=&gt;</code> ), press <i>ALT+ENTER</i> and you should be seeing something like <i>“Convert parameter to underscore section”</i>. That will replace the variable by <code>_</code> for you.
</p>

<p>
The third and last example under the category <i>Placeholder</i> is when you are computing accumulations. Using function such as <code>foldLeft</code> or <code>reduce</code>. Explaining why sometime you have to use <code>a._1 + a._2</code> and sometime <code>_ + _</code> is beyond this lesson. But now you know what it means when you read things like <code>.reduce(_*_)</code> : it is simply <code>.product</code>.
</p>

<p>There are a lot more use case for <code>_</code> that falls under other categories and we are going to see them in later SKBs.</p>

<p>If you want to know more, feel free to check out this <a href="https://stackoverflow.com/questions/8000903/what-are-all-the-uses-of-an-underscore-in-scala" target="_blank">Stackoverflow answer</a>.
</p>
</>

const description = "Scala Knowledge Bits - Scala _ placeholder - Periodic exercise to learn bits of knowledge about Scala. Scala _ placeholder here."

const canonical_url = "https://leobenkel.com/2020/11/skb-scala-_-placeholder/"

const prevUrl = "list-zip"
const nextUrl = "implicit-proof"

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
 