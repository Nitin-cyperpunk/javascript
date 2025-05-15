const mysym = Symbol("key1");

const JsUser = {
    name: "Nitin",
    age: 20,
    location: "Nashik",
    email: "singhnitin9975@gmail.com",
    isLoggedIn: true,
    [mysym]: "mykey1"      // by using [] only we get symbol key otherwise it will be string
}

//console.log(JsUser.name);

//console.log(JsUser[mysym]);

//JsUser.email = "Singhnitin7718@gmail.com";
//console.log(JsUser.email);

// Object.freeze(JsUser); /// we get email changes till above only because we used freeze property
//JsUser.email = "nitinsingh98461@gmail.com";
//console.log(JsUser);

JsUser.Greeting = function () {
    console.log("Hello from JsUser");
}

JsUser.GreetingTwo = function () {
    console.log(`Hello from JsUser, ${this.name}`);
}
console.log(JsUser.GreetingTwo()); // this will give undefined because we are not using this keyword
console.log(JsUser.Greeting()); // if we use () then only it will callled otherwise without() it will return as [Function (anonymous)]