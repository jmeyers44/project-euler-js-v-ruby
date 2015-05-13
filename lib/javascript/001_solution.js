var aTimer = process.hrtime();
var sum = 0;
for (var x = 3 ; x < 100000000 ; x++) {
  if (x % 3 === 0 || x % 5 === 0) {
    sum += x;
  }
}
console.log('The sum of them is: '+ sum);
var aTimerDiff = process.hrtime(aTimer);
console.info("Execution time: %dseconds", aTimerDiff[1]/1000000000);