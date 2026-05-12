// Learn more about Scala on https://leobenkel.com

trait Extractor[A] {
  // Try to remove the 'import' as well as ': ClassTag'
  import scala.reflect.ClassTag
  def apply[B <: A: ClassTag](input: List[A]): List[B] = {
    input.collect { case b: B => b }
  }
}

trait Animal

object AnimalExtract extends Extractor[Animal]

case class Dog(name: String) extends Animal
case class Cat(name: String) extends Animal

val animals: List[Animal] = ???
println(animals)
assert(animals.length == 5)

// Try removing '[Dog]'
val dogs: List[Dog] = AnimalExtract[Dog](animals)
println(dogs)
assert(dogs.length == 2)

val cats: List[Cat] = ???
println(cats)
assert(cats.length == 3)

println(
  "Congratulations ! 'Start where you are. Use what you have. Do what you can.' - Arthur Ashe"
)
