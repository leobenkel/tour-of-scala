// Learn more about Scala on https://leobenkel.com

// parent class
trait Shape
// child class
case class Square() extends Shape
case class Circle() extends Shape

{
  trait NormalSocket[A]
  object NormalSocket {
    def apply[A](): NormalSocket[A] = new NormalSocket[A] {}
  }

  val a: NormalSocket[Square] = ???

  // comment this line
  val b: NormalSocket[Circle] = a
  // comment this line
  val c: NormalSocket[Shape] = a
}

{
  trait CovariantSocket[+A]
  object CovariantSocket {
    def apply[A](): CovariantSocket[A] = new CovariantSocket[A] {}
  }

  val a: CovariantSocket[Square] = ???

  // comment this line
  val b: CovariantSocket[Circle] = a

  val c: CovariantSocket[Shape] = a
  assert(c == a)
}

println(
  "Congratulations ! 'Make it work.' - Tim Gunn"
)
