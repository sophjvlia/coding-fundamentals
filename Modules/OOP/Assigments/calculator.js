class Calculator {
    constructor(i) {
        this.i = i;
    }

    value() {
        console.log(this.i);
    }

    add(j) {
        let initial = this.i;
        this.i = this.i + j;
        console.log(`${initial} + ${j} = ${this.i}`);
        return this;
    } 

    subtract(j) {
        let initial = this.i;
        this.i = this.i - j;
        console.log(`${initial} - ${j} = ${this.i}`);
        return this;
    }

    multiply(j) {
        let initial = this.i;
        this.i = this.i * j;
        console.log(`${initial} × ${j} = ${this.i}`);
        return this;
    }

    divide(j) {
        let initial = this.i;
        this.i = this.i / j;
        console.log(`${initial} ÷ ${j} = ${this.i}`);
        return this;
    } 

    value() {
        console.log(this.i);
    }
}

let calculator = new Calculator(0)

calculator.add(5).subtract(2).multiply(5).divide(3)
calculator.value() 