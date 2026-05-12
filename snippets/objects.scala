// Learn more about Scala on https://leobenkel.com

object Configuration {
  lazy val KeyNumberOfFoos: String = "NumberOfFoos"
  lazy val KeyNumberOfBar: String = "NumberOfBar"
}

object Database {
  private val database: Map[String, Int] = Map(
    Configuration.KeyNumberOfFoos -> ???,
    Configuration.KeyNumberOfBar -> 12
  )

  def getDataFromDatabase(key: String): Option[Int] =
    database.get(key)
}

val configurationFromDatabase: Option[Int] =
  Database.getDataFromDatabase(Configuration.KeyNumberOfFoos)

println(configurationFromDatabase)

assert(configurationFromDatabase.contains(567))

println("Congratulations ! 'Be nice to yourself, you’re doing your best.'")
