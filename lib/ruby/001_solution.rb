# Find the sum of all the multiples of 3 or 5 below 1000.
require 'benchmark'
total = 0
execution_time = Benchmark.realtime{  
  x = 3
  until x >= 100000000
    if x % 3 == 0 || x % 5 == 0
      total += x
    end
    x += 1
  end}
puts "The sum is #{total}"
puts "Execution Time: #{"%1.12f" % execution_time} seconds"