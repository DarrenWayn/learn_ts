/* const AISLE = 0 */
/* const MIDDLE = 1 */
/* CONST WINDOW = 2 */
/*   */
/* if (seat === 0) { */
/*    */
/* } */

/* enum SeatChoice { */
/*   AISLE = 10, */
/*   MIDDLE = 22, */
/*   WINDOW, */
/*   FOURTH = 44, */
/* } */

const enum SeatChoice {
  AISLE = "aisle",
  MIDDLE = "middle",
  WINDOW = "window",
  Fourth = "fourth",
}

const hcFourth = SeatChoice.MIDDLE;
console.log(hcFourth);
const hcSeat = SeatChoice.AISLE;
console.log(hcSeat);

export {};
