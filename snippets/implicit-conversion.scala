// Learn more about Scala on https://leobenkel.com

// Necessary to remove "warnings"
// Try to comment it out to see it for yourself
import scala.language.implicitConversions

case class Foo(number: Int)

case class Bar(txt: String)

// try commenting out this object once you complete the exercise
object Bar {
  implicit def toFoo(bar: Bar): Foo = {
    println(s"[DEBUG] Converting: $bar")
    Foo(number = bar.txt.length)
  }
}

// note that this accept Foo as input
def display(f: Foo): Unit = println(s"Display: $f")

def increase(f: Foo): Foo = f.copy(number = f.number + 1)

val f: Foo = Foo(???)
val b: Bar = Bar(???)

display(f)
display(b)

val f_out: Foo = increase(f)
val b_out: Foo = increase(???)

assert(f_out.number == 3)
assert(b_out.number == 5)

println(
  "Congratulations ! 'Sometimes later becomes never. Do it now.' – Unknown"
)
