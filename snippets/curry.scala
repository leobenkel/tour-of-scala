// Learn more about Scala on https://leobenkel.com

def add(a: Int)(b: Int): Int = a + b

val add2: Int => Int = add(???)

val r1: Int = add2(???)

assert(r1 == 6)

val r2 = add(???)(???)

assert(r2 == 7)

val r3 = add(???) {
  3 + 4
}

assert(r3 == 10)

println("Congratulations ! Don't stop going forward!")
