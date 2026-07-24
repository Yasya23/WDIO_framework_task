declare global {
  interface Boolean {
    should: Chai.Assertion;
  }
  interface String {
    should: Chai.Assertion;
  }
  interface Number {
    should: Chai.Assertion;
  }
}

export {};
