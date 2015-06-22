// The following iterative sequence is defined for the set of positive integers:

// n → n/2 (n is even)
// n → 3n + 1 (n is odd)

// Using the rule above and starting with 13, we generate the following sequence:

// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

// Which starting number, under one million, produces the longest chain?

function LongestCollatz(){
  this.answer = 0
  this.currentNumber = 0
  this.longestSequenze = 0
  this.longestStartingInteger = 0 
}

LongestCollatz.prototype.nextNumber = function(){
  if(this.currentNumber % 2 === 0){
    this.nextEven();
  }
  else{
    this.nextOdd();
  }
}

LongestCollatz.prototype.nextEven= function(){
  this.currentNumber = this.currentNumber / 2;
}

LongestCollatz.prototype.nextOdd = function(){
  this.currentNumber = (3 * this.currentNumber) + 1;
}

LongestCollatz.prototype.runner = function(){
  for(var i = 2; i < 1000000; i++){
  var sequenceHolder = [i]
  this.currentNumber = i
  while(this.currentNumber !== 1){
    this.nextNumber();
    sequenceHolder.push(this.currentNumber);
  }
  if(sequenceHolder.length > this.longestSequenze){
    this.longestSequenze = sequenceHolder.length
    this.longestStartingInteger = i
  }

  }
  console.log(this.longestStartingInteger);
}


var l = new LongestCollatz
l.runner();