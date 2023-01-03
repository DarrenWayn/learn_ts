let score: number | string | boolean = 33;

score = 44;
score = "string";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let hitesh: User | Admin = { name: "hitesh", id: 334 };

hitesh = { name: "hc", id: 334 };

hitesh = { username: "hc", id: 334 };

/* function getDbId =(id: number | string) { */
// making some API calls
/*   console.log(`DB id is: ${id}`) */
/* } */

getDbId(3);
getDbId("3");

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  } else {
    id + 1;
  }
}

// array

const data: (string | number | boolean)[] = [1, 2, 3, "4", true];

/* let pi: 3.14 = 3.14 */
/* pi 3.145 */

let seatAllotment: "aisle" | "middle" | "window";
seatAllotment = "aisle";
/* seatAllotment = "crew" */
console.log(seatAllotment);
