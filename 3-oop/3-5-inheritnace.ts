{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    //명세서와 같은 것
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; //class level
    private coffeeBeans: number = 0; //instance (object) level

    public constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeMachine {
      return new CoffeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("커피콩을 갯수는 0보다 커야한다.");
      }
      this.coffeeBeans += beans;
    }

    clean(): void {
      console.log("clean coffe machine");
    }
    private grindBeans(shots: number) {
      //커피 콩을 가는 것
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      //커피기계를 따뜻하게 하는 것
      console.log("heating up...");
    }

    private extract(shots: number): CoffeeCup {
      //커피 추출
      console.log(`pulling ${shots} shots...`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      //커피를 만들기위한 과정
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeLateMachine extends CoffeMachine {
    constructor(beans: number, public serialNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log("Steaming milk..");
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  const machine = new CoffeMachine(43);
  const latteMachine = new CaffeLateMachine(20,"SSS");
  const coffee = latteMachine.makeCoffee(2);
  console.log(coffee);
  console.log(latteMachine.serialNumber);
  
}
