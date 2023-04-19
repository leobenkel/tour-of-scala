import Skb from 'components/skb-page'


export const id = "trait"
export const title = "Scala trait"

export const date = "2020-10-09T17:00:40"

const scastieId = "PcemiDBSR1ejWZaPaVxjqQ"

const mainInfoBox = <>
  <p><code>trait</code> are like <code>interface</code> from other languages.</p>

  <p>Have fun with it !</p>
</>

const detailedInfoBox = <>
  <p>
    <code>trait</code> allows you to describe what a class should look like.
  </p>

  <p>
    You can implement functions that can be overridden. You can describe functions that have to be overridden.
  </p>

  <p>
    New terms:

  </p><ul>

    <li><strong>to inherit</strong>: the action of extending a class</li>

    <li><strong>Child</strong>: the class that inherit from a trait</li>

    <li><strong>Parent</strong>: the class that is inherited from</li>

  </ul>
  <p></p>

  <p>
    Several new keywords today:
  </p><ul>

    <li>
      <code>extends</code>: is the keyword to be able to inherit from a class
    </li>

    <li>
      <code>override</code>: tell that this element has been overridden.
    </li>

    <li>
      <code>final</code>: tell that this cannot be overridden
    </li>

    <li>
      <code>protected</code>: similar to <code>private</code> but allow the child class to see this element. <code>private</code> would not allow the child to see it.
    </li>

  </ul>
  <p></p>
</>

const description = "Scala Knowledge Bits - Scala trait - Periodic exercise to learn bits of knowledge about Scala. Scala trait here."

const prevUrl = "future"
const nextUrl = "either"

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
