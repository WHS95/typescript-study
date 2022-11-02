{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  //public
  //defalut 값으로 외부에서 직접적으로 접근 가능
  //private
  //은닉을하여 외부에서 직접적으로 접근 불가능
  //protected
  //현 클래스 자체에서는 건들수는 없지만 상속을 받은 자식객체에서는 접근 가능
  class CoffeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; //class level
    private coffeeBeans: number = 0; //instance (object) level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeMaker {
      return new CoffeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("커피콩을 갯수는 0보다 커야한다.");
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots: shots,
        hasMilk: false,
      };
    }
  }
  const maker = CoffeMaker.makeMachine(32);
  maker.fillCoffeeBeans(32);

  class UserInformation {
    constructor(private firstName: string, private lastName: string) {}

    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge = 4;

    get age(): number {
        console.log("get이 작동");
      return this.internalAge;
    }

    set age(num: number) {
        console.log("set이 작동");
        
        if(num<0){
            throw new Error('num is not under 0')
        }
      this.internalAge = num;
    }
  }
  const userInformation = new UserInformation("steve", "jobs");
  console.log(userInformation);
  console.log(userInformation.age);
  console.log(userInformation.age = 7);
  
}
