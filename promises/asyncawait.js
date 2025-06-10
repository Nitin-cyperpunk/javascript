function setTimeoutpromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
    }
async function solve() {
    await setTimeoutpromisified(1000);
    console.log("1 second has passed");
    await setTimeoutpromisified(3000);
    console.log("3 seconds have passed");
    await setTimeoutpromisified(5000);
    console.log("5 seconds have passed");
  }
solve();