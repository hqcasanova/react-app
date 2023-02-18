export default class {
  min: number;
  max: number;

  constructor(min: number, max?: number) {
    const currYear = new Date().getFullYear();

    this.min = min;
    this.max = max || currYear;
  }

  toDates() {
    return {
      min: `${this.min}-01-01`,
      max: `${this.max}-12-31`,
    };
  }
}
