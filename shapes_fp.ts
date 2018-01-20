// FP version of classical OOP example - Shapes

// kind property is the descriminant
// called a literal types (a type that can only hold a single value)

type Shape =
  //{ kind: "oval", r1: number, r2: number } |
  { kind: "circle", radius: number } |
  { kind: "rectangle", w: number, h: number } |
  { kind: "square", size: number }

function assertNever(obj: never): never {
  throw new Error("never");
}

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      return shape.w * shape.h;
    case "square":
      return shape.size ** 2;
    //default:
    //  throw new Error("invalid shape");
  }
  assertNever(shape);
}

const shape: Shape = { kind: "circle", radius: 10 };
const area: number = getArea(shape);

console.log(`area of ${shape.kind} shape is ${area}`);
