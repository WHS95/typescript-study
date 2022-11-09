{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };
  //명세서와 같은 것
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface MilkFrother {
    makemilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  //싸구려 우유 거품기
  class CheapMilkSteamer implements MilkFrother {
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

  class FancyMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("Fancy Steam some milk..");
    }
    makemilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class ColdMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("Cold Steam some milk..");
    }
    makemilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class NoMilk implements MilkFrother {
    makemilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  //설탕 제조기
  class CandySugarMixer implements SugarProvider {
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

  class SugarMixer implements SugarProvider {
    private getSugar() {
      console.log("getting some sugar from jar!!");
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

  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  //커피 제조기
  class CoffeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; //class level
    private coffeeBeans: number = 0; //instance (object) level

    public constructor(
      coffeeBeans: number,
      private milk: MilkFrother,
      private sugar: SugarProvider
    ) {
      this.coffeeBeans = coffeeBeans;
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
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makemilk(sugarAdded);
    }
  }

  //Milk
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const ColdMilkMaker = new ColdMilkSteamer();
  const noMilk = new NoMilk();

  //Sugar
  const candySugar = new CandySugarMixer();
  const sugar = new SugarMixer();
  const noSugar = new NoSugar();

  //Machine
  const sweetCandyMachine = new CoffeMachine(30, noMilk, candySugar);
  const sweetMachine = new CoffeMachine(30, noMilk, sugar);

  const latteMachine = new CoffeMachine(30, cheapMilkMaker, noSugar);
  const fancylatteMachine = new CoffeMachine(30, fancyMilkMaker, noSugar);
  const coldlatteMachine = new CoffeMachine(30, ColdMilkMaker, noSugar);
  const sweetLatteMachine = new CoffeMachine(30, cheapMilkMaker, candySugar);

  console.log(coldlatteMachine.makeCoffee(2));
}
