# A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

# Find the largest palindrome made from the product of two 3-digit numbers.

class LargestPalindrome
  def initialize
    @answer = 0
  end

  def runner
    array = (100..999).to_a
    array.each do |num1|
      array.each do |num2|
        product = num1 * num2
        if palindrome?(product) && product > @answer
          @answer = product 
        end
      end
    end
    @answer
  end

  def palindrome?(product)
    product == product.to_s.reverse.to_i
  end
end

l = LargestPalindrome.new()
puts l.runner