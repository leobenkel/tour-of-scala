// Learn more about Scala on https://leobenkel.com

// comment it out ( start the line with '//')
throw new Exception("Something is broken")

val badBadMath = 5 / 0

import scala.util.Random
import scala.util.{Try, Success, Failure}

val rand = new Random(0)

val numerator: Int = ???

def denominator(): Int = if (rand.nextBoolean()) 0 else 1

def mightFail(): Try[Int] = Try(numerator / denominator())

def results(): Int = mightFail() match {
  case Success(v) => ???
  case Failure(ex) =>
    println(s"It failed but we are trying again: $ex")
    results()
}

assert(results() == 12)

def badMethod(): Try[Int] = Try(throw new Exception("Bad method"))

val alternativeResults: Int = badMethod().getOrElse(???)

assert(alternativeResults == 8)

println("Congratulations ! Go beyond.")
