// Learn more about Scala on https://leobenkel.com

trait Animal {
  // try to uncomment this
  // def weight: Double
}

trait CanWalk {
  def numberOfLegs: Int
}

trait CanSwim {}

trait HasFur {
  def color: String
}

trait Mammal {
  final lazy val layEgg: Boolean = false
}

trait IsPet {
  def name: String
  def color: String
}

trait HasNumber {
  def name: Int
}

type MammalAnimal = Animal with Mammal

// Try to replace 'Animal with Mammal' with 'MammalAnimal'
trait LandMammal extends Animal with Mammal with CanWalk with HasFur {}

trait SeaMammal extends Animal with Mammal with CanSwim {}

abstract class Pet(override final val name: String) extends IsPet
abstract class WildLife(override final val name: Int) extends HasNumber

// Try to add 'WildLife' to the mix
case class Dog(givenName: String, override val color: String)
    extends Pet(name = ???)
    with LandMammal {}

// try to add the trait 'IsPet' to the mix
// try to switch the order and put the abstract class after the trait
case class Whale(id: Int) extends WildLife(name = ???) with SeaMammal {}

////////

val input: List[Animal] = List(
  ???
)
println(input)
assert(input.length == 5)

import scala.util.Try
val mammalAnimals: List[MammalAnimal] =
  input.flatMap(a => Try(a.asInstanceOf[MammalAnimal]).toOption)
println(input)
assert(mammalAnimals.length == 5)

val pets: List[IsPet] =
  mammalAnimals.flatMap(a => Try(a.asInstanceOf[IsPet]).toOption)
println(pets)
assert(pets.length == 3)

println(
  "Congratulations ! 'Dream as if you’ll live forever. Live as if you’ll die today.' - James Dean"
)
