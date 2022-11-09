{
  //들어온 값의 데이터 타입이 숫자가 아니면 에러 처리
  //문제 본래의 목적은 null이 아닌경우 에러처러할 함수를 만들어야함
  //그렇다면 아래와 같이 모든 타입 별로 함수를 만들어야 하는건가???
  //number, string, ...
  function checkNotNullNumberBadCase(arg: number | null): number {
    if (arg == null) {
      throw new Error("not vaild number!");
    }
    return arg;
  }

  //아래 함수는 null | undifiend의 경우를 제외하고 입력가능하며
  //null | undifiend의 경우에러 처리해준다.
  //문제: 결과에 대한 타입이 'any'라는 점
  function checkNotNullAnyBadCase(arg: any | null): any {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }
  const result = checkNotNullAnyBadCase(123);

  //Generic을 사용하게 되면 데이터를 입력하는 순간 타입이 결정된다.
  //T=Generic인경우로 사용되는 경우가 많다.
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }
  const genericNumberResult = checkNotNull(123);
  const genericBoolResult: boolean = checkNotNull(true);
}
