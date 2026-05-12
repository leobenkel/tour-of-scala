// Learn more about Scala on https://leobenkel.com

sealed trait Shape

case object Square extends Shape
case object Triangle extends Shape
case object Circle extends Shape
case object Rectangle extends Shape
case object Hexagone extends Shape

val shape: Shape = ???

val output: String = shape match {
  case s @ (Square | Circle)           => s"The $s is perfect"
  case Hexagone | Triangle | Rectangle => "This shape is ok"
  case s                               => s"I dont know this shape: $s"
}

println(output)

assert(output == s"I dont know this shape: $shape")

println("Congratulations ! 'Impossible is just an opinion.' – Paulo Coelho")
