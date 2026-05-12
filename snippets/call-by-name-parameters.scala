// Learn more about Scala on https://leobenkel.com

def myIf(predicate: Boolean, ifTrue: => Int, ifFalse: => Int): Int = {
  if(predicate) ifTrue else ifFalse
}


lazy val a: Int = {
  throw new Exception("Wrong path")
}

lazy val b: Int = {
  println("creating 'b'")
  ???
}

val decision: Boolean = ???

val result: Int = myIf(
  decision,
  ifTrue = a,
  ifFalse = b
)


assert(result == 567)

println("Congratulations ! 'Do what you have to do, until you can do what you want to do.' Oprah Winfrey")
