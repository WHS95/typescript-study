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

  interface CoffeeMaker {
    //명세서와 같은 것
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    //Coffemaker보단 좀더 많은 기능 할 수있게 구현
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    //CoffeMaker, CommercialCoffeMaker 이 2가지 기능들을 할 수있다.
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

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makerCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makerCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }

    //추상화를 할수있는 방법
  //1) 정보 은닉 여기서는 private를 사용해보자 사용했으면하기만 하는것들만 보여지게
  //2) interface이용
  //2-1) 동일 object의 instance일지라도 interface에 규약된 것에따라 작동할수있다.
  const maker: CoffeMachine = CoffeMachine.makeMachine(32);
  const amateur = new AmateurUser(maker);
  const pro = new ProBarista(maker);
  amateur.makerCoffee();
  pro.makerCoffee();

}
