// FP version of classical OOP example - Shapes

// kind property is the descriminant
// called a literal types (a type that can only hold a single value)

// enums numbered from 0 (i.e. ints), so strings are better for backward/future compatibility
enum eShape {
  Circle    = "Circle",
  Rectangle = "Rectangle",
  Square    = "Square"
};

type Shape =
  //{ kind: eShape.Oval, r1: number, r2: number } |
  { kind: eShape.Circle, radius: number } |
  { kind: eShape.Rectangle, w: number, h: number } |
  { kind: eShape.Square, size: number }

function assertNever(obj: never): never {
  throw new Error("never");
}

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case eShape.Circle:
      return Math.PI * shape.radius ** 2;
    case eShape.Rectangle:
      return shape.w * shape.h;
    case eShape.Square:
      return shape.size ** 2;
    //default:
    //  throw new Error("invalid shape");
  }
  assertNever(shape);
}

const shape: Shape = { kind: eShape.Circle, radius: 10 };
const area: number = getArea(shape);

console.log(`area of ${eShape[shape.kind]} shape is ${area}`);
