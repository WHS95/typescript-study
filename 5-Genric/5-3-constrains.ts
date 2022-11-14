interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log("full time!!");
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log("Part time!!");
  }
  workPartTime() {}
}

//세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 지양 해야한다.
function paybad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const alex = new FullTimeEmployee();
const kim = new PartTimeEmployee();

alex.workFullTime();
kim.workPartTime();

const alexAfterPay = pay(alex);
const kimAfterPay = pay(kim);
alexAfterPay.workFullTime;
