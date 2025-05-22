/* function waitFor3s(resolve) {
    setTimeout(resolve, 3000);
    
}
function main() {
    console.log("Starting the promo script...");
};
waitFor3s(main);  */
///promisified version
function waitFor3s(resolve) {
    setTimeout(resolve, 3000);   
}
function setTimeoutpromisified(){
    return new Promise(waitFor3s);
}
function main(){
    console.log("main is called ...");
}

setTimeoutpromisified().then(main);