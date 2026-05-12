// Learn more about Scala on https://leobenkel.com

trait Animal {
  def name: String
  protected def sound: String
  final def talk(): Unit = println(s"$name says $sound")
}

case class Dog(override val name: String) extends Animal {
  override protected final lazy val sound = "woof"
}

case class Cat(override val name: String) extends Animal {
  override protected final lazy val sound = "meow"
}

val cat: Cat = Cat(???)
val dog: Dog = Dog(???)
val bird: Bird = Bird(???)

val myAnimals: List[Animal] = List(cat, dog, bird)

myAnimals.foreach(a => a.talk())

assert(myAnimals.map(a => a.name) == List("Kitty", "Snuffles", "Coco"))

println(
  "Congratulations ! 'Set your goals high, and don't stop till you get there.' - Bo Jackson"
)
