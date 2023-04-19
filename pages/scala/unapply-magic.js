import Skb from 'components/skb-page'


export const id = "unapply-magic"
export const title = "Scala unapply magic"

export const date = "2020-12-02T17:00:24"

const scastieId = "3dUlzSLfRMqUFGOQ1Ms8vA"

const mainInfoBox = <>
  <p>
    I personally love the <code>unapply</code> method. Not many people talk about it but I think it has really cool features.
  </p>

  <p>
    A somewhat long exercise today but it will give you a great tool to use in the future !
  </p>
</>

const detailedInfoBox = <>
  <p>
    Let's recap quickly what <code>unapply</code> was used for as far as we know for the moment.
  </p>

  <p>In the previous episodes, we saw <code>unapply</code> in the context of <code>case class</code> to be able to extract the fields.
  </p>
  <p>
    The syntax is:</p>

  <pre>
    <p>object HANDLER &#123;</p>
    <p>  def unapply(input: INPUT_TYPE): Option[OUTPUT_TYPE] = &#123;</p>
    <p>    // when return value is "some", it is outputed</p>
    <p>    // when return value is "none", this match is pass</p>
    <p>  &#125;</p>
    <p>&#125;</p>
  </pre>

  <p>And how it is used:</p>
  <pre>
    <p>input match &#123;</p>
    <p>  case HANDLER(OUTPUT_TYPE) =&gt; ???</p>
    <p>&#125;</p>
  </pre>

  <p>
    As you can see, the input of <code>unapply</code> is what enter the pattern matching structure and the output is an <code>Option</code> of what is being returned from the match.
  </p>

  <p>
    Several interesting things that you can do with <code>unapply</code>:
  </p>
  <ul>
    <li>Customize the input</li>
    <li>Customize the output</li>
    <li>Customize the name</li>
    <li>And the most interesting part to me, you can yield the match to the next matching condition. </li>
  </ul>

  <p>
    The last bullet to me is the most important one.
    It is a great tool to contain responsibilities. The <code>Option</code> output allows you to return something when you know what to do with it or return <code>None</code> when you don't know and the higher abstraction level will make decisions on how to handle the situation. It is really powerful to me because that allows you to “fail” without failing. And try several things before giving up. Let me go into details.
  </p>

  <pre>
    <p>val output: OUTPUT_TYPE = input match &#123;</p>
    <p>  case Attempt1(result) =&gt; result</p>
    <p>  case Attempt2(result) =&gt; result</p>
    <p>  case Attempt3(result) =&gt; result</p>
    <p>  case n =&gt; // when all else has failed</p>
    <p>&#125;</p>
  </pre>

  <p>
    This pattern that I use often in parser for examples, allows you to add new handler very easily. Also, each parser should be very simple, returning <code>None</code> when nothing can be done without having to care for the rest.
  </p>

  <p>
    One thing to be very aware/careful about is the order, because in this structure, the first match that works will be the results. If one of your matcher is more specific than an other one, lift it up first in the order of test or a larger condition might yield true before it.
  </p>

  <p>If you want to talk more about one of my favorite Scala method: <code>unapply</code>, jump on the Discord channel!</p>
</>

const description = "Scala Knowledge Bits - Scala unapply magic - Periodic exercise to learn bits of knowledge about Scala. Scala unapply magic here."

const prevUrl = "implicit-proof"
const nextUrl = "multiple-inheritance"

export const pageData = {
  id,
  title,
  date,
  scastieId,
  mainInfoBox,
  detailedInfoBox,
  description,
  prevUrl,
  nextUrl
}

export default function Page() {
  return <Skb lesson={pageData} />
}
