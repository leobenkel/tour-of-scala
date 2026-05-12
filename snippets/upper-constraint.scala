// Learn more about Scala on https://leobenkel.com

trait Shape

case object Square extends Shape
case object Triangle extends Shape
case object Circle extends Shape

abstract class Color(r: Int, g: Int, b: Int) {
  final lazy val display: String = s"$this($r,$g,$b)"
}

case object Red extends Color(255, 0, 0)
case object Blue extends Color(0, 0, 255)

case class Canvas[S <: Shape, C <: ???](shape: S, color: C) {
  override def toString: String = s"${color.display} $shape".toLowerCase
}

val c1 = Canvas(???, Blue)
println(c1)
assert(c1.shape == Triangle)
assert(c1.color == Blue)

val c2 = Canvas(Rectangle, Yellow)
println(c2)
assert(c2.shape == Rectangle)
assert(c2.color == Yellow)

println(
  "Congratulations ! 'Whether you think you can, or you think you can’t – you’re right.' — Henry Ford"
)
