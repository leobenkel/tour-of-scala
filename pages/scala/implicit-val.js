

import Skb from 'components/skb-page'

export const id = "implicit-val"
export const title = "Scala implicit val"

export const date = "2020-10-05T17:02:55"

const scastieId = "2u0HgFdmQhmH0WP6aM1dNA"

const mainInfoBox = <>
  <p><code>implicit val</code> can do a lot but, for now, we are just going to learn about the basic use case.</p>

<p>This exercise has a lot of code not related to what we are learning, but I am trying to illustrate some kind of real use case rather than a one line exercise. I think it makes it more exciting. If you disagree, please come let me know on our Discord community !</p>
</>

const detailedInfoBox = <>
  <p>I made sure to reuse only parts we have seen before, and we have seen a lot ! Congratulations for going this far on this series, I hope that it is beneficial to you ! If there are specific things you would like to learn, just let me know and I’ll add to the TODOs of episodes to write.
</p>

<p>You can see the use of <code>case class</code>, methods with <code>def</code>, <code>private</code>, <code>object</code> but the new thing here is <code>implicit val</code>.</p>

<p>In a method, you would declare it like any other argument. Except, all <code>implicit</code> arguments must be in their own “bucket” of arguments and this “bucket” must be the last one of them all for this method. And you have to precede the list of argument by the keyword <code>implicit</code>. Like this: 

</p><pre>def methodName(arg1, arg2, arg3)(arg4, arg5)(implicit arg6, arg7, arg8): OutputType = ???
</pre>

Each <code>argN</code> would be the <code>name: Type</code> combo.
<p></p>

<p>Now, when you actually call the method containing the <code>implicit</code> argument, you do not have to give a specific argument if one is present in the context. You can see it declare like this:

</p><pre>implicit val name: Type = ???
</pre>

Note that in this example it was set to <code>private</code>.

<p></p>

<p>
You can also overwrite or just pass the argument like any other normal arguments.
</p>

<p>
Note that you shouldn’t abuse this feature. In fact, it can become dangerous as well as make the code extremely hard to read. Imagine the extreme case where every arguments are <code>implicit</code>, it would be extremely hard to know what is happening. It makes the code hard to read in static environments like GitHub. And, in case of ambiguous possibilities, it can be tricky to understand what is going on. 
</p>

<p>I would recommend to only use this feature for elements that would be part of a configuration or such. Elements that would have to be copy paste and pass to each and every functions down the line. Only use it if it makes the code more readable.</p>

<p>With great power comes great responsibility.</p>

</>

const description = "Scala Knowledge Bits - Scala implicit val - Periodic exercise to learn bits of knowledge about Scala. Scala implicit val here."

const canonical_url = "https://leobenkel.com/2020/10/skb-scala-implicit-val/"

const prevUrl = "regex"
const nextUrl = "future"

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
 