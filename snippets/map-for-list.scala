// Learn more about Scala on https://leobenkel.com

val l = List(3, 7, ???)
println(l)

val upOne = l.map(a => a + 1)
println(upOne)

val result = upOne.sum

assert(result == 20)

println("Congratulations ! 'Write it on your heart that every day is the best day in the year.' - Ralph Waldo Emerson")
