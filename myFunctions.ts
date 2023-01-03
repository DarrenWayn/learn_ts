function addTwo(num: number): number {
  return num + 2;
  /* return "hello"; */
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {
  if (isPaid === void 0) {
    isPaid = false;
  }
};

addTwo(5);
console.log(getUpper("this is a test"));
signUpUser("darren", "darren@gmail.com", false);
loginUser("h", "h@h.com");

/* function getValue(myValue: number) { */
/*   if (myVal > 5) { */
/*     return value; */
/*   } */
/*   return "200 OK"; */
/* } */
/**/

const gethello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman"];
/* const heros = [1, 2, 3]; */

heros.map((hero): string => {
  return `hero is ${hero}`;
  /* return 1 */
});

function consoleError(errmsg: string): void {
  console.error(errmsg);
}

function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

export {};
