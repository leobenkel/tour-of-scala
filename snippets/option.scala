// Learn more about Scala on https://leobenkel.com

val choice1: Boolean = ???

val result1: Option[Int] = if(choice1) None else Some(1)

assert(result1.isEmpty)

val choice2: Boolean = ???

val result2: Option[Int] = if(choice2) None else Some(1)

assert(result2.isDefined)

println("Congratulations ! Believe in yourself !")