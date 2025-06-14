/*function setTimeoutPromisified(duration) {
    return new Promise(function(resolve) {
        setTimeout(resolve, duration);
    });
}
function callback() {
    console.log("Callback function executed after delay.");
}
setTimeoutPromisified(2000).then(callback); */

/*function callback() {
    console.log("Callback function executed after delay.");
}
setTimeout(callback, 2000); */

function callback() {
  console.log("Callback function executed after delay.");
}
setTimeout(function () {
  console.log("Executing callback after 5 seconds");
  setTimeout(function () {
    console.log("Executing callback after another 3 seconds");
    setTimeout(function () {
      console.log("Executing callback after another 1 seconds");
    }, 5000);
  }, 3000);
}, 1000);
