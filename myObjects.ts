/* const User = { */
/*   name: "darren", */
/*   email: "dwayn.dev@gmail.com", */
/*   isActive: true, */
/* }; */
/**/
/* function createUser({ name: string, isPaid: boolean }) {} */
/**/
/* let newUser = { name: "darren", isPaid: false, email: "h@h.com" }; */
/* createUser(newUser); */
/**/
/* function createCourse(): { name: string; price: number } { */
/*   return { */
/*     name: "reactJs", */
/*     price: 388, */
/*   }; */
/* } */

/* type User = { */
/*   name: string; */
/*   email: string; */
/*   isActive: boolean; */
/* }; */
/**/
/* function createUser(user: User): User { */
/*   return { name: "", email: "", isActive: true }; */
/* } */
/**/
/* createUser({ name: "darren", email: "darren@gmail.com", isActive: false }); */

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credCardDetails?: number;
};

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

let myUser: User = {
  _id: "12345",
  name: "d",
  email: "h@h.com",
  isActive: false,
};

myUser.email = "dwayn.dev@gmail.com";
/* myUser._id = 49485 */

export {};
