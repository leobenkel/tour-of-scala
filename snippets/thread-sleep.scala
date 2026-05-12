// Learn more about Scala on https://leobenkel.com

/**
  * Simple function to get current time
  */
def now = {
  import java.util.Calendar
  Calendar.getInstance().getTime()
}

println(s"$now - Start")

val seconds: Int = ???
val milliSeconds: Int = seconds * 1000

println(s"$now - Waiting $seconds seconds")

Thread.sleep(milliSeconds)

println(s"$now - Done")

println("Congratulations ! You are the best You there is, so far !")
