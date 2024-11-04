function greet() {
    console.log("hello world")
}

function greetAlien() {
    console.log("Hello jaddu!!")
}
 
setTimeout(greetAlien, 5*1000)
setInterval(greet, 1*1000)