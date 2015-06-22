# What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20
require 'benchmark'
@answer = 0


def check_num(number)
  range = (1..19)
  range.each do |x|
    if number % x != 0
      return false
    end
  end
end

def find_smallest_number
  number = 20
  until check_num(number) != false
    number+=20
  end
  @answer = number
end

execution_time = Benchmark.realtime{find_smallest_number}  

puts "The answer is #{@answer}"
puts "Execution Time: #{"%1.12f" % execution_time} seconds"



