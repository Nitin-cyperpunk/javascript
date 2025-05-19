function sum(n) {
    let ans = 0
    for ( let i = 1; i <= n; i++){
        ans = ans + i
    }
    return ans;
}
const ans = sum(100);
console.log(ans); 

function add(n){
    return (n * (n + 1)) / 2;

}
const ans2 = add(100);
console.log(ans2); 