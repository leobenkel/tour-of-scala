import Skb from 'components/skb-page'


export const id = "objects"
export const title = "Scala objects"

export const date = "2020-08-12T17:03:24"

const scastieId = "1b36QjJlRVi02lvrXSLrgw"

const mainInfoBox = <>
  <p>After seeing about <code>class</code> and <code>case class</code>, we are going to learn about <code>object</code>.</p>
  <p>I know, it is confusing, because we learned that an <code>object</code> is what we create when we instantiate a <code>class</code>, but this term can also be used to talk about a <code>class</code> that do not need to be instantiated. I know, confusing…</p>
  <p>To make it clearer, let's just focus on those <code>object</code>. If you know other programming languages, you might have heard of <code>static</code>, it means that the <code>field</code> and <code>method</code> can be accessed without instantiating the <code>class</code>. Let's talk about it more in the section after the exercise.</p>
</>

const detailedInfoBox = <>
  <p>Did you notice how the <code>field</code> and <code>method</code> are being accessed ?</p>
  <p>You use the name of the <code>object</code>, for instance: <code>Configuration</code>.To access <code>KeyNumberOfFoos</code> that is defined inside of <code>Configuration</code>, you just have to do: <code>Configuration.KeyNumberOfFoos</code>. No need for  <code>new</code> or anything special, you can just call the <code>member</code> of the <code>Object</code> directly.</p>
  <p><code>Object</code> are most commonly used when you want to defined constants values that are common for several systems or <code>classes</code>, like the <code>Configuration</code> one we have here. <code>Object</code> are also used to stored “<i>utility methods</i>” or also called “<i>helper methods</i>“. </p>

  <p>This <i>helper methods</i> are common tools for several systems that do not have dependencies defined at runtime. That means that you can define the behavior of this <code>method</code> only based on the input parameters, no need to know any more parameters. For instance, a method to sum two numbers <code>a + b</code>, you do not need to know more than the two inputs: <code>a</code> and <code>b</code>. They are self contained systems and can often be reused from one project to another as a library.</p>

</>

const description = "Scala Knowledge Bits - Scala objects - Periodic exercise to learn bits of knowledge about Scala. Scala objects here."

const canonical_url = "https://leobenkel.com/2020/08/skb-scala-objects/"

const prevUrl = "case-class"
const nextUrl = "visibility"

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
