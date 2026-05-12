// Learn more about Scala on https://leobenkel.com

val lEi: List[Either[String, Int]] = List(
  Left("abc"),
  Right(12)
)

println(lEi)

def divide(a: Double, b: Double): Either[String, Double] = {
  if (b == 0) Left(???) else Right(???)
}

val a1: Double = ???
val b1: Double = ???
val badResult: Either[String, Double] = divide(a1, b1)
assert(badResult.isLeft)
badResult.left.foreach(l => println(s"Error: $l"))

val a2: Double = ???
val b2: Double = ???
val goodResult: Either[String, Double] = divide(a2, b2)

// Either is Right-bias, map is applied on Right by default
val resultModified: Either[String, Double] = goodResult.map(r => r + 1)
val resultGet: Double = resultModified.getOrElse(1.0)
assert(resultGet == 13)
assert(goodResult.isRight)



println(
  "Congratulations ! 'No bird soars too high if he soars with his own wings.' - William Blake"
)
