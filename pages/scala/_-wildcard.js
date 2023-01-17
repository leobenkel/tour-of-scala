import Skb from 'components/skb-page'


export const id = "_-wildcard"
export const title = "Scala _ wildcard"

export const date = "2020-12-11T17:00:41"

const scastieId = "VJneetExT8uloX6bomOZ7g"

const mainInfoBox = <>
  <p>
    Few episodes ago we talked about <code>_</code> in a context of use cases that I described as <i>placeholder</i>.
  </p>

  <p>
    Now, let's see the other big group of use cases that is the <i>wildcard</i> or the <i>I don't care</i> category.
  </p>
</>

const detailedInfoBox = <>
  <p>Let's review each of the use cases one by one</p>

  <p>
    The first one is one that we have seen before in pattern matching, it is the <i>default</i> or <i>wildcard</i> match. Which is the match that match everything. Most of the time, it is used to catch errors or implement a default behavior when all the other matches have failed. Usually, you might want to put a value name instead of <code>_</code> so that you can include what has failed in your error message.
  </p>

  <p>
    The second one is to match some kind of structure, in this case, match on any <code>Some</code> and we don't care what is inside. As always, you could replace the <code>_</code> by some value name to be able to do something with what is inside, but if you don't care, you can use the <code>_</code> syntax.
  </p>

  <p>
    Next one is related to the previous one, but with case class this time. We talked about <code>unapply</code> before. And so you might understand that the example with <code>Some(_)</code> is actually the same as the <code>CaseClass(_, _, ...)</code>. It basically, ignore some of the return elements of the <code>unapply</code> method.
  </p>

  <p>
    Number 4 is related to imports. It allows you to import everything under a specific package path. Same idea, if <i>you do not care</i> to include specific things, you include it all.
  </p>

  <p>
    Number 5 , even tho it doesn't look like it, is also related. In fact, <code>val</code> behave like a <i>pattern matching</i> structure. We are going to see this more into details in a following episode.
  </p>

  <p>
    Number 6 is similar as well, but the <code>val</code> is hidden inside the <i>for-comprehension</i>. It allows you to handle method that return <code>Unit</code> and still be able to include it inside the structure.
  </p>

  <p>
    Number 7 is similar, it allows you to create behavior that ignores the input.
  </p>

  <p>
    As you can see, <code>_</code> can be used when you want to not care about a particular output.
  </p>


</>

const description = "Scala Knowledge Bits - Scala _ wildcard - Periodic exercise to learn bits of knowledge about Scala. Scala _ wildcard here."

const canonical_url = "https://leobenkel.com/2020/12/skb-scala-_-wildcard/"

const prevUrl = "higher-kind"
const nextUrl = "val-pattern-matching"

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
