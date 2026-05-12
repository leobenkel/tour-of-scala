// Learn more about Scala on https://leobenkel.com

import Animal._

case class Animal(numberOfLegs: Int) {
  lazy val name: String = convertLegNumberToName(numberOfLegs)
}

object Animal {
  val BipedName = "biped"
  val QuadripedName = "quadriped"
  val CentipedName = "centiped"

  private val LegName: Map[Int, String] = Map(
    2 -> BipedName,
    4 -> QuadripedName,
    100 -> CentipedName
  )

  private def convertLegNumberToName(numberOfLegs: Int): String = {
    LegName.get(numberOfLegs).getOrElse(s"$numberOfLegs legged creature")
  }
}

val quadriPed: Animal = ???

val biPed: Animal = ???

// Try uncommenting this: (remove the '//')
// println(Animal.convertLegNumberToName(biPed.numberOfLegs))

assert(quadriPed.name == QuadripedName)
assert(biPed.name == BipedName)

println("Congratulations ! We only live 4000 weeks, live them the fullest.")
