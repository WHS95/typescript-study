{
    /**
     * Type Assertions🤦🏻‍♀️ 
     * 타입을 강요할때 쓰는것 
     */
     function jsStringFunction():any{
        return 2;
     }
     const result = jsStringFunction();
     console.log((result as string).length);//undefined

     const wrong : any = 5;
     console.log((wrong as Array<number>).push(1));//🤦🏻‍♀️

     function findNumbers(): number[] | undefined{
        return undefined;
     }
     const numbers =findNumbers();
     numbers!.push(2)//number[]만 나온다고 확신을 할때🤦🏻‍♀️
}
     