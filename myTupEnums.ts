/* const user: (string | number)[] = [ 1, "hc", ] */
let tUser: [string, number, boolean];
tUser = ["hc", 131, true];

let trgb: [number, number, number] = [255, 255, 255];

type User = [number, string, boolean];

const newUser: User = [112, "example@google.com", false];

newUser[1] = "hc.com";
/* console.log(newUser[1]); */
newUser.push(true);
export {};
