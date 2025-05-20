console.log("hello ji");
function timeout() {
    console.log("Timeout");
}
setTimeout(timeout, 1000);
console.log("bas khtm ho gaya");

let c = 0;
for (let i = 0; i < 1000000000; i++) {
    c = c +1;
}
console.log("now check");