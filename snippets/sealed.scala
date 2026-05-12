// Learn more about Scala on https://leobenkel.com

sealed trait Shape {
  def name: String
}

object Shapes {
  case class Square() extends Shape {
    override lazy final val name: String = "Square"
  }
  case class Triangle() extends Shape {
    override lazy final val name: String = "Triangle"
  }
  case class Circle() extends Shape {
    override lazy final val name: String = "Circle"
  }
}

val a: Shape = ???

assert(a.name == "Triangle")

println("Congratulations ! Keep on doing great things !")
