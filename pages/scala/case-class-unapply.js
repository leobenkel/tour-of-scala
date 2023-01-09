import Skb from 'components/skb-page'


export const id = "case-class-unapply"
export const title = "Scala case class unapply"

export const date = "2020-11-20T17:00:41"

const scastieId = "pDSJjw7QQpSvUqFxWxQDlQ"

const mainInfoBox = <>
  <p>After so many SKBs, you pretty much are an expert !</p>
  <p>So, let's dive into a more advanced concept.</p>
  <p>And particularly, about one more features of the <code>case class</code> related on how pattern matching works.</p>
</>

const detailedInfoBox = <>
  <p>
    We have seen previously how, with <code>case class</code>, you can extract the component of it and match specific values. Have you ever wondered how it was built ? If yes, today is your lucky day ! If not, then you are going to learn it anyway.
  </p>

  <p>
    The answer is the special method <code>unapply</code>. Similarly to <code>apply</code>, <code>unapply</code> has specific use case and behavior.
  </p>

  <p>
    <code>unapply</code> allows you to extract parts of “something” in the context of a <i>pattern matching</i>.
  </p>
  <p>
    The syntax can be very confusing. Let's look at it in details. Everything that needs to be replace for your specific use case is in between <code>[   ]</code>.
  </p>
  <p>Declaration:</p>
  <pre>object [PATTERN_MATCHING_NAME] {
    def unapply(input: [INPUT_TYPE]): Option[[OUTPUT_TYPE]] = {
      // to match, must return:
      Some([output_value])
         // to 'pass'
         None
    }
}
  </pre>
  <p>We are going to see the notion of 'pass' in a later SKB</p>

  <p>How it is used:</p>
  <pre>val input: [INPUT_TYPE] = ???

    input match {
    case [PATTERN_MATCHING_NAME]([OUTPUT_TYPE]) =&gt; ???
}
  </pre>

  <p>
    What is confusing is when <code>[OUTPUT_TYPE]</code> is a tuple. Because in the <code>unapply</code> definition, it will be written something like <code>(Int, String)</code> but in the usage, in the pattern matching, it will be written <code>PATTERN_MATCHING_TYPE(a: Int, b: String)</code> and NOT <code>PATTERN_MATCHING_TYPE(a : (Int, String))</code>.
  </p>

  <p>
    This syntax works for every pattern matching, which means it also works in <code>map</code>, <code>flatMap</code> and all.
  </p>

  <p>
    You might imagine other possible use case for <code>unapply</code> and you are right. In our example, we only reproduced what the <code>case class</code> was doing but we can do much more.  We are going to see more advanced usage of <code>unapply</code> in upcoming SKBs.
  </p>


</>

const description = "Scala Knowledge Bits - Scala Scala case class unapply - Periodic exercise to learn bits of knowledge about Scala. Scala Scala case class unapply here."

const canonical_url = "https://leobenkel.com/2020/11/skb-scala-case-class-unapply/"

const prevUrl = "implicit-conversion"
const nextUrl = "challenge-1"

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
