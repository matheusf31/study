// interface LabeledValue {
//   label: string;
// }

// function printLabel(labeledObj: LabeledValue) {
//   console.log(labeledObj.label);
// }

// /** se eu passar o objeto não tem problema, */
// /** mas se eu passar o objeto com suas propriedades e alguma delas não tiver na interface dá erro */

// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);
// printLabel({ size: 10, label: "Size 10 Object" });

/** --- */

// interface SquareConfig {
//   color?: string;
//   width?: number;
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//   let newSquare = { color: "white", area: 100 };
//   if (config.test) {
//     // Error: Property 'clor' does not exist on type 'SquareConfig'
//     newSquare.color = config.test;
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width;
//   }
//   return newSquare;
// }

// let mySquare = createSquare({ color: "black" });

// console.log(mySquare);
