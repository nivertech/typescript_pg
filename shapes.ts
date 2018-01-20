abstract class Shape {
  abstract getArea(): number;
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }
  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Rectange extends Shape {
  constructor(public width: number, public height: number) {
    super();
  }

  getArea(): number {
    return this.width * this.height;
  }
}

class Square extends Rectange {
  constructor(public size: number) {
    super(size, size);
  }
}

let s = new Square(100);
console.log("area = ", s.getArea());
