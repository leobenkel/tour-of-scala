

export const id = "generic-trait"
const title = " Scala Generic Trait"

const date = "2020-10-23T17:01:26"

const scastieId = "1KailbBGTNCH2CDwVFK4fA"

const mainInfoBox = <>
  <p>
Today is a milestone in the <i>Object Oriented Programming</i> journey. In combination with <i>inheritance</i>, that we saw in the past, <i>generics</i> are a key feature of <i>Object Oriented Programming</i>.
</p>

<p>
Once you start using it, you will never be able to live without it !
</p>
</>

const detailedInfoBox = <>
  <p>
I heard the Internet likes potatoes ! 
</p>

<p>
In this example, we want to sum our <code>PotatoBag</code>. But, for some reason, we want to describe the action to <code>Combine</code> anything. We can describe combine easily, it is the action of taking two elements of the same type and producing a new element of the same type. You can see there that we declared a function with the typed signature: <code>A.combineWith(A) =&gt; A</code>.
</p>

<p>
With this in place, we can now combine anything. Try to go back to the exercise and create a different case class that inherit from the <code>Combine[A]</code> trait.
</p>

<p>
What is called <code>generic</code> in this context is the <code>[A]</code>. It means that this will have some kind of type parameter that will be needed at <i>compiled time</i> to create the class. For instance, if you were to create a <code>Combine[Int]</code>, you can imagine the compiler writing code for you and creating a whole new class :

</p><pre>trait CombineInt {
  def combineWith(a: Int): Int
}
</pre>

It is an other way to not have to write almost similar code several times.
<p></p>

<p>Keep in mind that this example has been trim down and simplified for this exercise, in production code we would do things slightly differently but I don’t want to bring too much at once and confuse you. I am trying to make bite size knowledge pieces.</p>

<p>The combine pattern is use often and not far away from it you will almost always find the <code>reduce</code> function. In this case we use <code>reduceOption</code> for safety. <code>reduceOption</code> will return <code>None</code> when the list is empty, <code>reduce</code> will throw an exception.</p>

<p>You can go back to the code and replace <code>reduceOption</code> by <code>reduce</code> and remove all items from the <code>TruckOfPotatoes</code> to see it for yourself.
</p>

<p>
Other thing to try, <code>.reduceOption((a, b) =&gt; a.combineWith(b))</code> can be replaced by <code>.reduceOption(_ combineWith _)</code>. But, this involve <i>infix</i> notation as well as the placeholder <code>_</code>, so we are going to learn more about it later. But at least, you have been exposed to it.
</p>


</>

const description = "Scala Knowledge Bits - Scala Generic Trait - Periodic exercise to learn bits of knowledge about Scala. Scala Generic Trait here."

const canonical_url = "https://leobenkel.com/2020/10/skb-scala-generic-trait/"

const prevUrl = "repeated-parameters"
const nextUrl = "sealed"

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
 