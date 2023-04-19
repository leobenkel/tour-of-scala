import Skb from 'components/skb-page'


export const id = "case-object"
export const title = "Scala case object"

export const date = "2020-10-28T17:06:44"

const scastieId = "vzjyjr0WSTOskKtlV1EoDQ"

const mainInfoBox = <>
  <p>
    This one should be pretty quick. </p>
  <p>
    Introducing <code>case object</code>.
  </p>
</>

const detailedInfoBox = <>
  <p>
    There is not much to it at first sight. It is the equivalent of what <code>case class</code> is for <code>class</code> but for <code>object</code>.
  </p>
  <p>
    A <code>case object</code> has everything a <code>object</code> have. Feel free to go back to the corresponding episode. But add also some convenient method. For instance the `<code>toString</code> is a lot nicer, allowing you to get the name of the <code>case object</code> itself which allow for great logging.
  </p>

  <p>
    It was not easy to introduce only <code>case object</code> because their main use case is in the implementation of the Scala v2.x Enumerations which we are going to see next time. I wanted a dedicated episode to Enumeration but couldn't go for it until <code>case object</code> were introduced. Now that it is done, see you next time.
  </p>
</>

const description = "Scala Knowledge Bits - Scala case object - Periodic exercise to learn bits of knowledge about Scala. Scala case object here."

const prevUrl = "sealed"
const nextUrl = "enumeration"

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
