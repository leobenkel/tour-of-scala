// Learn more about Scala on https://leobenkel.com

object A {
  lazy val a: String = "a"
}

case object Foo {}

val a: A.type = A
val foo: Foo.type = Foo

assert(a == A)
assert(foo == Foo)

println(s"'a' is ${a.toString}")
println(s"'foo' is ${foo.toString}")

assert(a.a == "a")
assert(foo.foo == "foo")

val expectedName: String = ???
assert(foo.toString == expectedName)

println(
  "Congratulations ! 'Failure will never overtake me if my determination to succeed is strong enough.' - Og Mandino"
)
