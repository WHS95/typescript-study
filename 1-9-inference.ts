{
    /**
     * Type Inference
     * 굳이 type을 명명하지 않아도 typeScript가 알아서 type을 부여하는것을 말한다.
     * 단순 변수에 타입의 원시타입의 타입선엉은 바로바로 파악이 되어 생략해도 큰문제가 없을수도있지만.
     * 그외 함수나 객체같은 참조형 타입은 얼마든지 코드가 길어져 한눈에 결과를 파악하기 힘듦으로 
     * type Inferece가 가능하다 해도 명시하는편이 좋다고 판단되어진다.
     */

    let text = 'hello';
    function print(message = "hello"){
        console.log(message);
        
    }
    print("hell123o");

    function add(x: number, y: number): number {
        return x + y;
    }
    const result = add (1,2)

}