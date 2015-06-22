 // What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function Number(){
  this.start = 20
  this.testNumber();
  this.answer = 1
};

Number.prototype.testNumber = function(){
  var i = 1;
  var start = this.start;
  while(i <= 20){
    if(this.start % i != 0){
      // console.log(i)
      return false
      }
    else{
      i ++;
    }
  }
}



Number.prototype.getAnswer = function(){
  var self = this
  if(this.testNumber() !== false){  
  this.answer = this.start
  console.log(this.answer);
  }
  else{
  this.start += 20
  setImmediate(function(){self.getAnswer()})  
  }

}



var n = new Number();

n.getAnswer();