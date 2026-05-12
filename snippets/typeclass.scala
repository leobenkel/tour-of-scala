// Learn more about Scala on https://leobenkel.com

// TRAIT
trait DoubleUp[A] {
  def apply(a: A): A
}

// IMPLICIT IMPLEMENTATIONS
implicit val DoubleUpInt: DoubleUp[Int] = new DoubleUp[Int] {
  def apply(a: Int): Int = ???
}

implicit object DoubleUpString extends DoubleUp[String] {
  def apply(a: String): String = List(a, a).mkString(" ")
}

// USE CASE
def fourTime[A](a: A)(implicit double: DoubleUp[A]): A = double(???)

// EXAMPLES
val i: Int = fourTime[Int](???)
println(i)
assert(i == 32)

val s: String = fourTime[String](???)
println(s)
assert(s == "hello hello hello hello")

case class Square(c: Int) {
  final lazy val area: Int = ???
}

// you might need that ... :)
// implicit ...

val square: Square = Square(???)
println(square)
assert(square.area == 36)

// uncomment those when you get here 
// val bigSquare: Square = fourTime(square)
// println(bigSquare)
// assert(bigSquare.area == 576)

println(
  "Congratulations ! 'Life is short. Don’t be lazy.' - Sophia Amoruso"
)
