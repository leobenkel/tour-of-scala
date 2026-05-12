// Learn more about Scala on https://leobenkel.com

trait Animal {
  def name: String
  def makeCuddles: Boolean
}

trait Pet { self: Animal =>
  def petId: Int

  override final lazy val makeCuddles: Boolean = true

  override def toString: String =
    s"I am $name[$petId] and I cuddle: $makeCuddles"
}

// Try adding the 'Animal' trait
case class Dog(override val name: String, override val petId: Int)
    extends Pet {}

val dog: Dog = ???
println(dog)
assert(dog.name == "Snuffles")

println(
  "Congratulations ! 'Creativity Is Intelligence Having Fun.' – Albert Einstein"
)
