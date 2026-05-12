// Learn more about Scala on https://leobenkel.com

case class Tracker(name: String)

object Utils {
  def add(a: Int, b: Int)(implicit t: Tracker): Int = {
    println(s"${t.name} add")
    a + b
  }

  def multiply(a: Int, b: Int)(implicit t: Tracker): Int = {
    println(s"${t.name} multiply")
    a * b
  }
}

object Foo {
  implicit private val t: Tracker = Tracker("[Foo]")

  private val a: Int = ???
  private val b: Int = ???
  val out = Utils.add(a, b)
}

object Bar {
  implicit private val t: Tracker = Tracker("[Bar]")

  private val a: Int = ???
  private val b: Int = ???
  val out = Utils.multiply(a, b)
}

val fooOut = Foo.out
val barOut = Bar.out

assert(fooOut == 8, fooOut)
assert(barOut == 60, barOut)

val oneOff = Utils.add(10, ???)(Tracker(???))
assert(oneOff == 34, oneOff)

println(
  "Congratulations ! 'When something is important enough, you do it even if the odds are not in your favor.' – Elon Musk"
)
