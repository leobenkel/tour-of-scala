// Learn more about Scala on https://leobenkel.com

abstract class Shape(
    name: String,
    protected val lengthOfSides: Int,
    numberOfSides: Int
) {
  def circumference: Double = numberOfSides * lengthOfSides

  override def toString: String =
    s"$name shape of size $lengthOfSides " +
      f"with $numberOfSides sides have a circumference of $circumference%1.2f"
}

case class Square(size: Int) extends Shape("Square", ???, ???)
case class Triangle(size: Int) extends Shape("Triangle", ???, ???)

case class Circle(radius: Int) extends Shape("Circle", ???, 0) {
  override lazy val circumference: Double = scala.math.Pi * 2.0 * lengthOfSides
}

val square: Square = Square(size = ???)
val triangle: Triangle = Triangle(size = ???)
val circle: Circle = Circle(radius = ???)

val shapes: List[Shape] = List(
  square,
  triangle,
  circle
)

shapes.foreach(println)

assert(square.circumference == 16)
assert(triangle.circumference == 9)
assert(Math.abs(circle.circumference - 12) <= 1)

println(
  "Congratulations ! 'Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.' - Samuel Beckett"
)
