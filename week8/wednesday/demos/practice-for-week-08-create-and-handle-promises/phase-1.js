function stretch(time) {
  // Your code here
  return new Promise((resolve, reject) => {
    if (time < 1000) {
      reject("Not enough time to run on mill");
    } else {
      time -= 1000;
      setTimeout(() => {
        console.log("done stretching");
        resolve();
      }, 1000);
   }
  });
}

function runOnTreadmill() {
  // Your code here
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done running on treadmill");
      resolve();
    }, 500);
  });
}

function liftWeights() {
  // Your code here
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done lifting weights");
      resolve();
    }, 2000);
  });
}

function workout(time) {
  // Your code here
  stretch(time)
    .then(runOnTreadmill)
    .then(liftWeights)
    .then(() => console.log("done working out"));
}

/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/

workout(1000);
// should print out the following:
// done stretching
// done running on treadmill
// done lifting weights
// done working out
