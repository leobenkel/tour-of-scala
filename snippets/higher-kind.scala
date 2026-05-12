// Learn more about Scala on https://leobenkel.com

trait CounterT[A] {
  def elements: List[A]
  def latest: A
}

case class Counter(override val elements: List[Int]) extends CounterT[Int] {
  override final lazy val latest: Int = elements.last
}

trait CountUtil[F[_]] {
  def apply[A](input: F[A]): Long
}

object Count {
  object ForSet extends CountUtil[Set] {
    def apply[A](input: Set[A]): Long = ???
  }

  object ForList extends CountUtil[List] {
    def apply[A](input: List[A]): Long = ???
  }

  object ForCounter extends CountUtil[CounterT] {
    def apply[A](input: CounterT[A]): Long = input.elements.length
  }
}

val s: Set[Int] = ???
val sCount: Long = Count.ForSet(s)
assert(sCount == 3, sCount)

val l: List[Int] = ???
val lCount: Long = Count.ForList(l)
assert(lCount == 4, lCount)

val c: Counter = ???
val cCount: Long = Count.ForCounter(c)
assert(cCount == 4, cCount)

println(
  "Congratulations ! 'Nothing will work unless you do' - Maya Angelou"
)
