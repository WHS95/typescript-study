{
    /**
     * Type Assertionsπ€¦π»ββοΈ 
     * νμμ κ°μν λ μ°λκ² 
     */
     function jsStringFunction():any{
        return 2;
     }
     const result = jsStringFunction();
     console.log((result as string).length);//undefined

     const wrong : any = 5;
     console.log((wrong as Array<number>).push(1));//π€¦π»ββοΈ

     function findNumbers(): number[] | undefined{
        return undefined;
     }
     const numbers =findNumbers();
     numbers!.push(2)//number[]λ§ λμ¨λ€κ³  νμ μ ν λπ€¦π»ββοΈ
}
     