// Learn more about Scala on https://leobenkel.com

val inputList1 = (0 to 50)
println(inputList1)
val result1: Int = inputList1.sum
val expected1: Int = ???
assert(result1 == expected1, result1)

val step: Int = ???
val inputList2 = (0 until 20 by step).toList
println(inputList2)
val result2: Int = inputList2.length
val expected2: Int = 7
assert(result2 == expected2, result2)

println("Congratulations ! 'Happiness is when what you think, what you say, and what you do are in harmony.' - Mahatma Ghandi")
