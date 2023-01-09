

export const id = "enumeration"
const title = " Scala Enumeration for 2.x"

const date = "2020-10-30T17:00:57"

const scastieId = "RpzCdEpvSnKsBpI1TsckHw"

const mainInfoBox = <>
  <p>Time to assemble everything we learned in the recent episodes !</p>

<p>We are going to use <code>sealed</code>, <i>pattern matching</i>, <code>trait</code>, <code>case object</code>, <code>map</code>, etc…</p>

<p>What you are about to see here is good knowledge to keep but the exact use case and application showed here will be deprecated in Scala 3. However, the underlying features and logic we are using will still be here so it is not a loss ! </p>
</>

const detailedInfoBox = <>
  <p>
We are writing an Ore management software today. 
</p>
<p>
Notice how we are able to describe the Ores with a finite number of possibilities. If we want a new one, we need to add it ourselves. Did you notice the warning about pattern matching :
</p><pre>warning: match may not be exhaustive.
</pre>
Since we are using <code>sealed</code>, the compiler can know exactly the number of options available for this type. So the compiler can help us !
<p></p>

<p>
We could simply have a <code>ore: String</code> of course. But noticed the typo in <code>Godl</code> instead of <code>Gold</code> ? And the compiler caught it for us ! 
</p>

<p>The rest of the exercise is just to go a bit further and play with what we built.</p>
<p>You can set up a system for reporting, and add handy calculation with <code>lazy val</code>.</p>
<p>You can also set up special case like for Iron in the last example.</p>

<p>Something that needs to be said is that in Scala 3 this pattern will be completely changed. Scala 3 will implement its shortcut version for Enumeration that will pretty much write this boiler plate code for us. But all those features to customize it yourself will still be available so it is not a loss to know about it !</p>

<p>I hope this little exercise with a more applicable example was fun! If you have any feedback, as always, don’t hesitate to comment below or message me on the Discord server. Looking forward to hearing from you.</p>
</>

const description = "Scala Knowledge Bits - Scala Enumeration for 2.x - Periodic exercise to learn bits of knowledge about Scala. Scala Enumeration for 2.x here."

const canonical_url = "https://leobenkel.com/2020/10/skb-scala-enumeration/"

const prevUrl = "case-object"
const nextUrl = "contexts"

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
 