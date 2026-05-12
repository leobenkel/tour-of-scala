// Learn more about Scala on https://leobenkel.com

case class Person(firstName: String, lastName: String) {
  override lazy val toString: String = s"[$firstName $lastName]"

  private lazy val firstLetterFirstName: Char = firstName.toUpperCase.head
  private lazy val firstLetterLastName: Char = ???

  lazy val initials: String =
    s"$firstLetterFirstName$firstLetterLastName"

  lazy val isFirstBefore: Boolean = firstLetterFirstName <= firstLetterLastName

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
  Person("Oscar Martinez"),
  Person("Anabel Rowe"),
  Person("Lara Dudley"),
  Person("Malaki Sullivan"),
  Person("Hailey Terrell"),
  Person("Aubree Ferrell"),
  Person("Eugene Gaines"),
  Person("Derrick Pace"),
  Person("Rylee Ayers"),
  Person("Beckham Meadows"),
  Person("Tanner Francis"),
  Person(???),
  Person("Fabian Compton"),
  Person("Kirsten Potter"),
  Person("Kara Jensen"),
  Person("Jasper Ray"),
  Person(???)
)

val output: Seq[(Int, String)] = people.map {
  case Person("Malaki", _) => 1 -> ???
  case p @ Person(_, lastName) if lastName.endsWith("l") =>
    2 -> s"$p's last name end with 'l' and the lastName was $lastName"
  case p @ (Person("Fabian", _) | Person(_, "Potter") |
      Person("Eugene", "Gaines")) =>
    3 -> s"$p was selected by this complex filter"
  case p if p.initials == "JP" => 4 -> s"$p has initial: ${p.initials}"
  case p if p.isFirstBefore =>
    5 -> s"$p has the first name first letter before the last name first letter: ${p.initials}"
  case p => 6 -> s"$p was not catch by any filter"
}.sorted

println("Names processed:")
output.foreach(println)

assert(output.length == people.length)

val groups = output.groupBy(_._1).view.mapValues(_.length)

println("Names grouped:")
groups.foreach(println)

val expectedGroup2: Int = ???
assert(groups(2) == expectedGroup2)

val expectedGroup5: Int = ???
assert(groups(5) == expectedGroup5)

println(
  "Congratulations ! 'The best time to plant a tree was 20 years ago. The second best time is now.' – Chinese Proverb"
)
