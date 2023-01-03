var superHeros = [];
/* const heroPowers: number[] = []; */
var heroPowers = [];
var allUsers = [];
var MLModels = [
    [255, 255, 255],
    /* "string" */
];
superHeros.push("spiderman");
heroPowers.push(2);
allUsers.push({ name: "", isActive: true });

let user = {
  role: [
    {
      greet() {
        console.log("Hello");
      },
    },
  ],
};

console.log(user.role[0].greet());
console.log(user.role[0].greet());
console.log(user?.role?[0]?.greet());

