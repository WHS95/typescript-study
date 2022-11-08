{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    //명세서와 같은 것
    makeCoffee(shots: number): CoffeeCup;
  }

  //싸구려 우유 거품기
  class CheapMilkSteamer {
    private steamMilk(): void {
      console.log("Steam some milk..");
    }
    makemilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  //설탕 제조기
  class AutomaticSugarMixer {
    private getSugar() {
      console.log("getting some sugar from candy");
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
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
    constructor(
      beans: number,
      public readonly serialNumber: string,
      private milkFother: CheapMilkSteamer
    ) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milkFother.makemilk(coffee);
    }
  }

  class SweetCoffeeMachine extends CoffeMachine {
    constructor(private beans: number, private sugar: AutomaticSugarMixer) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.sugar.addSugar(coffee);
    }
  }

  class SweetCaffeLatteMachine extends CoffeMachine {
    constructor(
      private beans: number,
      private milk: CheapMilkSteamer,
      private sugar: AutomaticSugarMixer
    ) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makemilk(sugarAdded);
    }
  }

  const SweetCaffeLatte = SweetCaffeLatteMachine.makeMachine(30);
  console.log(SweetCaffeLatte.makeCoffee(2));
}
