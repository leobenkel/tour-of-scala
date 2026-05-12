// Learn more about Scala on https://leobenkel.com

// simple leading zeros
val i: Int = ???
val outputLeadingZeros = f"$i%04d"
println(outputLeadingZeros)
assert(outputLeadingZeros == "0005")


// customize leading zeros
val length: Int = ???
// try with 0, 1, 2, ' '
val c: Char = '0'
println(s"%${c}${length}d".format(i))

// truncated decimals and leading zeros
val infiniteDouble: Double = 10 / 3.0
println(f"$infiniteDouble%09.4f")

// dynamic truncated decimals and leading zeros
val totalCharacterNumber: Int = ???
val decimalQuantity: Int = ???
assert(totalCharacterNumber > decimalQuantity)
val outputTruncDecimalAndLeadZero = s"%0${totalCharacterNumber}.${decimalQuantity}f".format(infiniteDouble)
println(outputTruncDecimalAndLeadZero)
assert(outputTruncDecimalAndLeadZero == "003.333")

// using locale to format things
import java.util.Locale
import java.text.NumberFormat

val bigNumber: Long = 123345567
val formatNumberFR = NumberFormat.getIntegerInstance(Locale.FRANCE)
println(formatNumberFR.format(bigNumber))
val formatNumberUS = NumberFormat.getIntegerInstance(Locale.US)
println(formatNumberUS.format(bigNumber))

println(
  "Congratulations ! 'With the new day comes new strength and new thoughts.' - Eleanor Roosevelt"
)
