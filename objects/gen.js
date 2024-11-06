const allUsers = [
    {
        firstName: "Nitin",
        gender: "male"
    },
    {
        firstName: "Gauri",
        gender: "female"
    },
    {
        firstName: "Abhishek",
        gender: "male"
    }
    
];

for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i].gender === "male") {
        console.log(allUsers[i].firstName);
    }
}
