// Learn more about Scala on https://leobenkel.com

class Person(firstName: String, lastName: String) {
  lazy val fullName: String = s"$firstName ${???}"
  
  def sayMyName(): Unit = println(s"My name is $fullName.")
}

val p: Person = new Person(???, "Benkel")

p.sayMyName()

assert(p.fullName == "Leo Benkel")

println("Congratulations ! 'Everything has beauty, but not everyone can see.' - Confucius")
