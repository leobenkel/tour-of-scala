// Learn more about Scala on https://leobenkel.com

sealed trait Element {
  def serialize: String
  def display: String
}

object Elements {
  case object EndOfParse extends Element {
    def serialize: String = ""
    override final lazy val display: String = ???
    override final lazy val toString: String = this.display
  }

  sealed abstract class Word(nextElement: Element) extends Element {
    def serializeSelf: String
    override final def serialize: String =
      this.serializeSelf + nextElement.serialize

    override final lazy val toString: String =
      s"${this.display}, ${nextElement.toString}"
  }

  case class Number(n: Int, nextElement: Element) extends Word(nextElement) {
    override final lazy val serializeSelf: String = n.toString
    override final lazy val display: String = s"N($n)"
  }
  case class Letter(c: Char, nextElement: Element) extends Word(nextElement) {
    override final lazy val serializeSelf: String = ???
    override final lazy val display: String = ???
  }
  case class Space(nextElement: Element) extends Word(nextElement) {
    override final lazy val serializeSelf: String = ???
    override final lazy val display: String = ???
  }
}

object Parser {
  import Elements._

  private object NumberParser {
    private val regex = "([0-9])(.*)".r

    def unapply(s: String): Option[Number] = {
      s match {
        case regex(n, rest) => Some(Number(???, Parser(???)))
        case _              => None
      }
    }
  }

  private object LetterParser {
    private val regex = "([a-zA-Z])(.*)".r

    def unapply(s: String): Option[Letter] = {
      s match {
        case regex(n, rest) => Some(Letter(n.head, Parser(rest)))
        case _              => None
      }
    }
  }

  private object SpaceParser {
    private val regex = "( )(.*)".r

    def unapply(s: String): Option[Space] = {
      s match {
        case regex(n, rest) => Some(Space(Parser(???)))
        case _              => None
      }
    }
  }

  private object EndOfParserParser {
    def unapply(s: String): Option[EndOfParse.type] = {
      if (???) {
        Some(EndOfParse)
      } else {
        None
      }
    }
  }

  def apply(input: String): Element = {
    input match {
      case NumberParser(n)        => n
      case LetterParser(l)        => ???
      case SpaceParser(s)         => s
      case EndOfParserParser(eof) => ???
      case i =>
        val errorMessage: String = s"Do not know how to parse $i"
        throw new Exception(errorMessage)
    }
  }
}

{
  println(">>> Test eof")
  val input: String = ""
  val parsed = Parser(input)
  println(s"parsed: $parsed")
  val serialized = parsed.serialize
  println(s"output: $serialized")
  assert(input == serialized, serialized)
  assert(parsed.display == "EOF", parsed.display)
}

{
  println(">>> Test space")
  val input: String = " "
  val parsed = Parser(input)
  println(s"parsed: $parsed")
  val serialized = parsed.serialize
  println(s"output: $serialized")
  assert(input == serialized, serialized)
  assert(parsed.display == "SPACE", parsed.display)
}

{
  println(">>> Test letter")
  val input: String = "a"
  val parsed = Parser(input)
  println(s"parsed: $parsed")
  val serialized = parsed.serialize
  println(s"output: $serialized")
  assert(input == serialized, serialized)
  assert(parsed.display == "L(a)", parsed.display)
}

{
  println(">>> Test number")
  val input: String = "2"
  val parsed = Parser(input)
  println(s"parsed: $parsed")
  val serialized = parsed.serialize
  println(s"output: $serialized")
  assert(input == serialized, serialized)
  assert(parsed.display == "N(2)", parsed.display)
}

{
  println(">>> Test 3 element")
  val input: String = "4 b"
  val parsed = Parser(input)
  println(s"parsed: $parsed")
  val serialized = parsed.serialize
  println(s"output: $serialized")
  assert(input == serialized, serialized)
  assert(parsed.toString == "N(4), SPACE, L(b), EOF", parsed.toString)
}

{
  println(">>> Test text")
  val input: String = "Hello World 123"
  println(s"input:  $input")
  val parsed = Parser(input)
  println(s"parsed: $parsed")
  val serialized = parsed.serialize
  println(s"output: $serialized")

  assert(input == serialized, serialized)
}

println(
  "Congratulations ! 'Don’t let what you cannot do interfere with what you can do.' — John Wooden"
)
