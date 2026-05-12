// Learn more about Scala on https://leobenkel.com
println("-")
println("Starting")

lazy val thisLazyVal: Int = {
  println("this lazy val")
  ???
}

def thisMethod: Int = {
  println("this method")
  ???
}

val thisValue: Int = {
  println("this value")
  ???
}

println("-")
println("Testing method")
assert(thisMethod + thisMethod == 10)

println("-")
println("Testing Lazy val")
assert(thisLazyVal + thisLazyVal == 20)

println("-")
println("Testing val")
assert(thisValue + thisValue == 40)

println("-")
println("Congratulations ! Stay focused on your journey to greatness !")
