// Learn more about Scala on https://leobenkel.com

import scala.util.matching.Regex
import java.util.regex.{Matcher, Pattern}
import scala.util.Try

// simple and quick use case
val testPhoneNumber: String = ???
val isPhoneNumber = "[0-9]{3}-[0-9]{3}-[0-9]{4}".r.matches(testPhoneNumber)
println(s"is phone number: $isPhoneNumber")

// longer, more efficient
object FindEmail {
  private val regex: Regex = new Regex("([a-z]+)@([a-z]+)\\.([a-z]+)")
  private val pattern: Pattern = regex.pattern

  def apply(input: String): RegexFind = RegexFind(pattern.matcher(input))

  case class RegexFind(private val m: Matcher) {
    private lazy val find: Boolean = m.find()
    private lazy val groupCount: Int = m.groupCount()

    private lazy val matches: List[String] = (for {
      n <- 1 to groupCount
      group = Try(m.group(n))
      if group.isSuccess
    } yield group.get).toList

    override lazy val toString: String = s"match: $find, matches: $matches"
  }
}

val testEmail: String = ???
val matches = FindEmail(testEmail)
println(s"Matches: $matches")

// with pattern matching
val testAddress: String = ???
val isAddress = "([0-9]+) ([a-z]+) (st|blvd)\\.".r
testAddress match {
  case isAddress(number, streetName, streetType) =>
    println(s"streetName: $streetName $streetType , at: $number")
    assert(number.toInt == 123, number)
}

println(
  "Congratulations ! 'The most effective way to do it, is to do it.' - Amelia Earhart"
)
