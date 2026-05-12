// Learn more about Scala on https://leobenkel.com

case class Foo(a: Int, b: String, c: Double)

val f: Foo = Foo(a = ???, b = ???, c = ???)

// little reminder on 
// what pattern matching for a case class look like
val rF = f match {
  case Foo(n, "a", d) if n > 1 => n
  case Foo(1, s, d)            => Math.ceil(d)
  case Foo(n, s, d @ 0.3)      => Math.floor(n + d)
  case f                       => throw new Exception(s"Unknown $f")
}

assert(rF == 2, rF)

// 'val' is necessary to make , 'a', 'b' and 'c' accessible. 
// Try removing it.
class Bar(val a: Int, b: String, c: Double)

// after you are done with the exercise, 
// comment out the companion object to test.
object Bar {
  // and try commenting out the 'unapply' method
  def unapply(bar: Bar): Option[(Int, String, Double)] = {
    Some((bar.a, ???, ???))
  }
}

val b: Bar = new Bar(a = ???, b = ???, c = ???)

val rB = b match {
  case Bar(n, "a", d) if n > 1 => n
  case Bar(1, s, d)            => Math.ceil(d)
  case Bar(n, s, d @ 0.3)      => Math.floor(n + d)
  case f                       => throw new Exception(s"Unknown $f")
}

assert(rB == 4, rB)

println(
  "Congratulations ! 'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.' – Winston Churchill"
)
