// FP version of classical OOP example - Shapes

// kind property is the descriminant
// called a literal types (a type that can only hold a single value)

// https://blogs.msdn.microsoft.com/typescript/2018/01/31/announcing-typescript-2-7/
// scroll down for "Symbol"

import * as ShapeKind from "./ShapeKind";

interface Circle {
  kind: typeof ShapeKind.Circle;
  radius: number;
}

interface Rectange {
  kind: typeof ShapeKind.Rectange;
  w: number;
  h: number;
}

interface Square {
  kind: typeof ShapeKind.Square;
  size: number;
}

type Shape = Circle | Rectange | Square;

// type Shape =
//   //{ kind: eShape.Oval, r1: number, r2: number } |
//   { kind: eShape.Circle, radius: number } |
//   { kind: eShape.Rectangle, w: number, h: number } |
//   { kind: eShape.Square, size: number }

function assertNever(obj: never): never {
  throw new Error("never");
}

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case ShapeKind.Circle:
      return Math.PI * shape.radius ** 2;
    case ShapeKind.Rectangle:
      return shape.w * shape.h;
    case ShapeKind.Square:
      return shape.size ** 2;
    //default:
    //  throw new Error("invalid shape");
  }
  //assertNever(shape);
}

const shape: Shape = { kind: ShapeKind.Circle, radius: 10 };
const area: number = getArea(shape);

console.log(`area of ${shape.kind} shape is ${area}`);
