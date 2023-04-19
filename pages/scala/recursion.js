import Skb from 'components/skb-page'


export const id = "recursion"
export const title = "Scala Recursion"

export const date = "2020-10-19T17:00:47"

const scastieId = "Cnic9MRTRE2BgIR3NAC5Zg"

const mainInfoBox = <>
  <p>
    <i>Recursion</i> is a major tool in the toolbox of the software engineer.
  </p>
  <p>
    It can allow to describe a problem from a different perspective.
  </p>
  <p>
    In the context of <i>Functional Programming</i> this is also a major trick to avoid using <i>mutable</i> variables.
  </p>
</>

const detailedInfoBox = <>
  <p>
    This is a very basic example to be able to understand the concept of recursion fully. In the future, we will see more complex application of <i>recursion</i>.
  </p>

  <p>
    To build a successful recursion, you need several things:

  </p><ul>

    <li>
      Stopping condition: this is the most important thing. Without it the recursion will keep going for ever and eventually fail with an exception: <code>StackOverflowError</code>.
    </li>

    <li>
      The method needs to call itself. In this example, you can see the <code>loop</code> function is called inside of itself.
    </li>

    <li>
      Increment: something needs to change when calling the function again, otherwise, same as without a stopping condition, the code will never stop running since the stopping condition will never get reached. In this example you can see that when <code>loop</code> is called, it is called with modified arguments.
    </li>

    <li>
      Most of the time you will have some kind of accumulator that hold the final result of the computation. In our example, this would be the argument named <code>acc</code>.
    </li>

    <li>
      Initial condition: we also need a starting value for the accumulator and the other arguments that might be required to perform the computation. In this example, we need to set <code>acc</code> equals to <code>0</code>.
    </li>

  </ul>

  <p></p>

  <p>
    The most famous example of recursion in books are always <code>factorial</code> or <code>Fibonacci</code>. I would love to see your implementation, feel free to submit a Scastie link in the comment section or on Discord.
  </p>
</>

const description = "Scala Knowledge Bits - Scala Recursion - Periodic exercise to learn bits of knowledge about Scala. Scala Recursion here."

const prevUrl = "abstract-class"
const nextUrl = "repeated-parameters"

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
