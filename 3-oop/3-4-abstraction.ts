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
  
  interface CoffeMaker{//명세서와 같은 것 
    makerCoffee(shots:number):CoffeeCup
  }
  
  class CoffeMachine implements CoffeMaker{
    private static BEANS_GRAMM_PER_SHOT: number = 7; //class level
    private coffeeBeans: number = 0; //instance (object) level

    private constructor(coffeeBeans: number) {
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
    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shorts}`);
      if (this.coffeeBeans < shots * CoffeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log("heating up...");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`pulling ${shots} shots...`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makerCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }
  const maker:CoffeMachine = CoffeMachine.makeMachine(32);
  maker.fillCoffeeBeans(32);
  maker.makerCoffee(2);

  const maker2:CoffeMaker = CoffeMachine.makeMachine(32);
//   maker2.fillCoffeeBeans(32);
  maker2.makerCoffee(2);
  
}
