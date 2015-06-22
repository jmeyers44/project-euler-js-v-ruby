// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

function LargestPalindrome(){
  this.findGreatest();
  this.greatestProduct = 0
  this.currentProduct = 0
}

LargestPalindrome.prototype.findGreatest = function(){
  if(this.currentProduct > this.greatestProduct && this.reverse() === true){
    this.greatestProduct = this.currentProduct
  }
}

LargestPalindrome.prototype.reverse = function(){
  var num = this.currentProduct
  var string = num.toString();
  var reversed = string.split("").reverse().join("");
  var finalNum = Number(reversed);
  return finalNum === this.currentProduct;
}

LargestPalindrome.prototype.runner = function(){
  var self = this
  var array = []
  for(var i = 100; i < 1000; i++){
    array.push(i)
  }

  for(var i = 0; i < array.length; i++){
    for(var j = 0; j < array.length; j++){
    this.currentProduct = array[i] * array[j];
    this.findGreatest();
    this.firstNum += 1;
    }
  }
  console.log(this.greatestProduct);
}

n = new LargestPalindrome
n.runner();


