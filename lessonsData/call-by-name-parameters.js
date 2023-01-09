

export const id = "call-by-name-parameters"
const title = " Scala Call-by-name Parameters"

const date = "2020-08-07T17:01:43"

const scastieId = "XkgpvxRaQdSnfdO2yWuSOg"

const mainInfoBox = <>
  <p>There are two ways to give parameters to a function in most programming languages: ‘by-value’ and ‘call-by-name’.</p>
<p>The ‘by-value’ way is what we have seen in previous SKBs when we used functions and methods.</p>
<p>In this SKB, focus your attention on the way the parameters of the function are being declared and the syntax, notice anything?</p>
</>

const detailedInfoBox = <>
  <p>Did you notice the <code>=&gt; Int</code> in the parameter list?</p>
<p>You can understand it as if it was <code>() =&gt; Int</code>, meaning a function that will return <code>Int</code> when called.</p>
<p>The content of the parameter will not be evaluated until needed. Be aware that it will be re-evaluated for each time it is called. But we will look into it into a more advanced SKB later on.</p>
</>

const description = "Scala Knowledge Bits - Scala Call-by-name - Periodic exercise to learn bits of knowledge about Scala. Scala Call-by-name here."

const canonical_url = "https://leobenkel.com/2020/08/skb-scala-call-by-name-parameters/"

const prevUrl = "list-filter-method"
const nextUrl = "case-class"

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
 