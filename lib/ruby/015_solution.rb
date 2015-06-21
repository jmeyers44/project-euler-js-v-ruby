# The following iterative sequence is defined for the set of positive integers:

# n → n/2 (n is even)
# n → 3n + 1 (n is odd)

# Using the rule above and starting with 13, we generate the following sequence:

# 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
# It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

# Which starting number, under one million, produces the longest chain?
class Collatz
  attr_accessor :length

  def initialize(starting_number)  
    @collatz_sequence_holder = []
    @last_number = starting_number
    @collatz_sequence_holder << @last_number
    collatz_sequence
  end
  
  def collatz_sequence
    while @last_number != 1
      @last_number = find_next_number
      @collatz_sequence_holder << @last_number
    end
  end

  def find_next_number
    if @last_number % 2 == 0
      next_even
    elsif @last_number % 2 != 0
      next_odd
    end
  end

  def next_even
    @last_number / 2
  end

  def next_odd
    (3 * @last_number) + 1
  end

  def length
    @collatz_sequence_holder.length
  end

end



def find_longest
  longest_sequence = {0 => 0}
  sequence = 0
  999999.downto(2) do |number|
    sequence = Collatz.new(number).length
    if sequence > longest_sequence.values[0]
      longest_sequence = {number => sequence}
    end
  end
  puts "the longest number is #{longest_sequence.keys[0]} and the length is #{longest_sequence.values[0]}"
end

find_longest
