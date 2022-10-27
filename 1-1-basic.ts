{
  /**
   * JavaScript
   * Primitive: number, bigint,string, boolean, symbol , null, undefined
   * Object: function, array...
   */

  //number
  const num: number = -6;

  //string
  const str: string = "hello";

  //boolean
  const boal: boolean = false;

  //undefined
  //값이 비어졌는지, 아닌지 결정이 아직 안된것
  let name: undefined; //🤦🏻‍♀️
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  //null
  //값이 비어졌다고 결정이된것
  let person: null; //🤦🏻‍♀️
  let person2: string | null;

  //unknown 🤦🏻‍♀️
  let notSure: unknown = 0;
  notSure = "he";
  notSure = 123;

  //any 🤦🏻‍♀️
  let anything: any = 0;
  anything = "hello";

  //void
  //아무것도 리턴하지않는경우
  function print(): void {
    console.log("hello");
    return;
  }
  let unusable: void = undefined; //🤦🏻‍♀️

  //never
  //절대적으로 아무것도 리턴하지 않는다.
  function throwError(message: string): never {
    //message -> server(log)
    throw new Error(message);
    while (true) {}
  }

  let neverEnding: never; //🤦🏻‍♀️

  //object
  let obj: object;//🤦🏻‍♀️ 어떠한 obj 형태로든 다 들어가기 때문
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "ellie" });
  acceptSomeObject({ animal: "dog" });
}
