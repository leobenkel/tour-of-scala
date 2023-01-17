import Skb from 'components/skb-page'


export const id = "case-class-copy"
export const title = "Scala case class copy"

export const date = "2020-11-16T17:00:16"

const scastieId = "zJFFFqP7S5Gym4PZzKLVXA"

const mainInfoBox = <>
  <p>
    We learned about <code>case class</code> in previous SKBs, but we haven't seen the full spectrum of features that this special structure offers.
  </p>
  <p>One of the use case for this structure is to represent a row in a database. In some other languages, <code>case class</code> are even called <i>Record</i>.</p>
  <p>We are now going to learn how to modify the values of the column of this record.</p>
</>

const detailedInfoBox = <>
  <p>
    Introducing <code>copy</code> !
  </p>

  <p>
    <code>copy</code> is this generated method that all <code>case class</code> have. It allows to make a copy of the case class instance while modifying zero, one, more or all the fields that the <code>case class</code> has.
  </p>

  <p>
    Remember than in functional programming and in Scala, we want to only work with immutable entities. It would be very tedious to have to manually recreate the case class, which could have dozens of fields, when all we want is, for instance, to modify the <i>last updated date</i>. The is the reason for the method, <code>copy</code>.
  </p>

  <p>
    But how does this magic mathod works !
  </p>
  <p>
    Well, look at the method in the example called <code>updateContent</code>. You can see that the arguments have default values set for them. The trick is to use the current value of the fields of the case class as default value and voila!
  </p>
  <p>Look at how it is used lower in the exercise, you can omit some of the arguments of the method, which means it will use the default value. This allow us to modify only the part we want and keep the rest the same.
  </p>
</>

const description = "Scala Knowledge Bits - Scala case class copy - Periodic exercise to learn bits of knowledge about Scala. Scala case class copy here."

const canonical_url = "https://leobenkel.com/2020/11/skb-scala-case-class-copy/"

const prevUrl = "upper-constraint"
const nextUrl = "implicit-conversion"

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
