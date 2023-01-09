

import Skb from 'components/skb-page'

export const id = "operators"
export const title = "Scala operators"

export const date = "2020-12-28T17:00:23"

const scastieId = "i2ZSLmI0R7egM6vkvJqKug"

const mainInfoBox = <>
  <p>
Have you ever wondered how <code>!</code> and <code>+</code> operator works ?
</p>
<p>
Let’s make your own !
</p>
</>

const detailedInfoBox = <>
  <p>
Long exercise but I wanted to make sure to see several examples to get a good knowledge about Operators for you !
</p>

<p>
The first section (<code>{...}</code>) is about traditional, easy operator such as <code>+</code> and <code>*</code>. In Scala, you can use pretty much any characters to create a method name so it is not too hard at this point. Sorry for the math about complex numbers ! 
</p>

<p>
Next we see weirder ones with backslash <code>\</code> and one famous one, the combine operator : <code>|+|</code>, present in many libraries such as <i>Cats</i>.
</p>

<p>
And finally even weirder ones. Operator that goes <i>before</i> the caller ! Those are called <code>unary</code> and the syntax is : 
</p>

<pre>
class MyClass(...) {
   // ... other fields and methods ...
    
    def unary_[prefix_name] = ???

   // ... more things ...
}

val a : MyClass = ???

[prefix_name] a
</pre>

<p>
It is worth noting that only a selected list of characters and names are authorized for <code>unary</code> methods. For example, <code>+</code>, <code>*</code>, <code>~</code>, and <code>!</code> are allowed. You can find a lot of example of people using <code>unary</code> on <a href="https://github.com/search?l=Scala&amp;q=%22def+unary%22&amp;type=Code" target="_blank">GitHub</a>.
</p>
</>

const description = "Scala Knowledge Bits - Scala operators - Periodic exercise to learn bits of knowledge about Scala. Scala operators here."

const canonical_url = "https://leobenkel.com/2020/12/skb-scala-operators/"

const prevUrl = "list-of-option-flatten"
const nextUrl = "literal-identifiers"

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
 