// Learn more about Scala on https://leobenkel.com

object Database {
  private lazy val fakeDatabase: Map[Int, String] = Map(
    34 -> "abc",
    12 -> "def"
  )

  def apply(key: Int): Option[String] = fakeDatabase.get(key)
}

// This could be named anything, try !
object Main {

  // Try removing or commenting this method to get familiar with the errors.
  def main(args: Array[String]): Unit = {
    assert(Database(12) == Some("bob"))
    assert(Database(34) == None)
    assert(Database(76) == Some("Leo"))

    println(
      "Congratulations ! 'It does not matter how slowly you go as long as you do not stop.' - Confucius"
    )
  }
}
