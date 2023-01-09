

export const id = "try"
const title = " Scala Try"

const date = "2020-09-07T17:01:03"

const scastieId = "TgKc6NXwSE2LWikrBm4Qtw"

const mainInfoBox = <>
  <p>
One thing to know first is the concept of <code>Exception</code>. An <code>Exception</code>, in java and Scala, is when an error happen. It will stop the execution of the program and <code>throw</code> an <code>Exception</code>.
</p>
</>

const detailedInfoBox = <>
  <p>
The way to manually trigger an <code>Exception</code> is with <code>throw</code>. The code will then spit out what is called a <i>stack trace</i>. The stack trace will display each line of code that was in the stack of operation when the <code>Exception</code> occurred. It is essential to know how to read those when fixing a bug in a software.
</p>

<p>
Sometimes, a code will trigger an unexpected error, not one you decide to trigger. For instance, with bad math or more commonly from a third party library like a database connection. The connection might fail or timeout, etc… And then you need to react from the error. Maybe it is a critical error and you will decide to let the program stop its execution. But sometimes, you might be able to recover, in the case of a database, you could retry until it works, or retries several times until it succeed. 
</p><p>

</p><p>
<code>Try</code> is the way to handle <code>Exception</code> in Scala. It allows you to abstract the potential failure and use the same methods that <code>Option</code> has to manipulate the data that might or might not be there. But instead of <code>None</code> when the <code>Option</code> is empty, you get an <code>Exception</code> when it is not defined which would carry more information about the kind of failure that was encountered. Like <code>Option</code> you can use <code>map</code>, <code>flatMap</code>,<code>get</code>, <code>getOrElse</code> and more.
</p>

<p>
Go back to the editor and try to make some code using <code>map</code> and <code>flatMap</code> with <code>Try</code>.
</p>

<p>You might have noticed the <code>case</code> as well. This is still <i>pattern matching</i>. It is a bit piece of Scala and it is hard to explain, which is why I have been trying to slowly introducing it so when it comes time to dive more into it, you will already have some kind of intuition about it. Patience 🙂</p>
</>

const description = "Scala Knowledge Bits - Scala Try - Periodic exercise to learn bits of knowledge about Scala. Scala Try here."

const canonical_url = "https://leobenkel.com/2020/09/skb-scala-try/"

const prevUrl = "curry"
const nextUrl = "range"

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
 