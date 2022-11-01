/**
 * Let's make a game 🕹
 */

const position = {
  x: 0,
  y: 0,
};

type MoveCommand = "up" | "down" | "left" | "right";
// 내가 만든 방식
function moveCommand(move: MoveCommand) {
  switch (move) {
    case "up":
      return (position.y = 1);
    case "down":
      return (position["y"] = position.y - 1);
    case "left":
      return (position["x"] = position.x - 1);
    case "right":
      return (position["x"] = position.x + 1);
    default:
      throw Error("unknownMoveCommand");
  }
}

//강사님이 만든방식
// function move(move: MoveCommand) {
//   switch (move) {
//     case "up":
//       position.y += 1;
//       break;
//     case "down":
//       position.y -= 1;
//       break;
//     case "left":
//       position.x -= 1;
//       break;
//     case "right":
//       position.x += 1;
//       break;
//     default:
//       throw new Error(`unknownMoveCommand${move}`);
//   };
// };


console.log(position); // { x: 0, y: 0}
move("up");
console.log(position); // { x: 0, y: 1}
move("down");
console.log(position); // { x: 0, y: 0}
move("left");
console.log(position); // { x: -1, y: 0}
move("right");
console.log(position); // { x: 0, y: 0}

