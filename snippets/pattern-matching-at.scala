// Learn more about Scala on https://leobenkel.com

case class Person(firstName: String, lastName: String) {
  override lazy val toString: String = s"[$firstName $lastName]"
}

object Person {
  def apply(fullName: String): Person = {
    val splited = fullName.split(" ")
    Person(splited(0), splited(1))
  }
}

// Generated with https://www.randomlists.com/fake-name-generator
val people = Seq(
  Person("Adriana Zhang"),
  Person("Jerome Serrano"),
  Person("Jakayla Gomez"),
  Person(???),
  Person("Anabel Rowe"),
  Person("Lara Dudley"),
  Person("Malaki Sullivan"),
  Person(???),
  Person(???),
  Person("Eugene Gaines"),
  Person("Derrick Pace"),
  Person("Rylee Ayers")
)

val output = people
  .flatMap {
    case p @ Person(firstName, _) if firstName.startsWith("A") => Some(p)
    case p @ (Person("Rylee", _) | Person(_, "Pace"))          => Some(p)
    case Person(firstName, "Terrell")                          => Some(Person(firstName, "Doe"))
    case p @ Person("Lara", _)                                 => Some(p.copy(firstName = "John"))
    case _                                                     => None
  }
  .sortBy(_.toString)

output.foreach(println)

val expectedLength: Int = ???
assert(output.length == expectedLength)

println(
  "Congratulations ! 'Do one thing every day that scares you.' ― Eleanor Roosevelt"
)
