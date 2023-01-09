

import Skb from 'components/skb-page'

export const id = "constraint-inheritance"
const title = " Scala constraint inheritance"

const date = "2020-12-07T17:01:22"

const scastieId = "1rovwDJFTRaHBS7e2c2ofg"

const mainInfoBox = <>
  <p>
More inheritance today, more specifically how to get help from the compiler in complex inheritance patterns
</p>

<p>
The example here is simple to illustrate the feature but imagine what it would look like in a much more complex project.
</p>
</>

const detailedInfoBox = <>
  <p>
We saw multiple inheritance last time, but it can quickly become messy if a lot of your <code>trait</code> are depending on each other.
</p>

<p>
It would be great if we could ask the compiler to remind us that two or more trait needs to always be together for the code to work well.
</p>

<p>
Well, guess what? It is !
</p>

<p>
It is possible in Scala to create a <code>trait</code> that cannot be used if not mixed in with a selection of other <code>trait</code>. Let’s look at the syntax:
</p>

<pre>trait MyTrait { name: DependencyTrait =&gt; 
    ...
}
</pre>

<p>
The <code>name</code> can be any variable name if you need to disambiguates two or more trait that might have same function names. It can also be <code>this</code> if you do not need an extra handler for it.  
</p>

<p>
And <code>DependencyTrait</code> can be one <code>trait</code> that is required to create <code>MyTrait</code> but it can more than one if you replace it by <code>trait1 with trait2 with trait3 ...</code>. 
</p>

<p>
In case of failure to comply those constraint, the compiler will give you the following error:
</p>

<pre>illegal inheritance;
 self-type [Class you are working on] does not conform to [MyTrait]'s selftype [MyTrait] with [DependencyTrait]
</pre>

<p>
You should have seen this error message in the exercise and you now know how to fix it. 
</p>

<p>
You also now know how to befriend the compiler and making sure you don’t forget a critical <code>trait</code> in the mix for your classes.
</p>
</>

const description = "Scala Knowledge Bits - Scala constraint inheritance - Periodic exercise to learn bits of knowledge about Scala. Scala constraint inheritance here."

const canonical_url = "https://leobenkel.com/2020/12/skb-scala-constraint-inheritance/"

const prevUrl = "multiple-inheritance"
const nextUrl = "higher-kind"

const pageData = {
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
 