class Greeter {
  private greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet(): string {
    return `Hello, ${this.greeting}`;
  }
}

const greeter = new Greeter("world");
const str = greeter.greet();

console.log(str);
