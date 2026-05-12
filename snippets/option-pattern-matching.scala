// Learn more about Scala on https://leobenkel.com

def processOpt(opt: Option[Int]): Int = {
  opt match {
    case Some(n) => n * 2
    case None    => -1
  }
}

val a: Option[Int] = Some(2)
val r1: Int = processOpt(a)
assert(r1 == 4)

val b: Option[Int] = None
val r2: Int = processOpt(b)
assert(r2 == -1)

println(
  "Congratulations ! 'Someday is not a day of the week.' - Denise Brennan-Nelson"
)
