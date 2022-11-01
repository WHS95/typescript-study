{
    //JavaScript🤦🏻‍♀️
    function add1(num1, num2){
        return num1 + num2;
    }

    //TypeScript
    function add2(num1:number, num2:number): number{
        return num1 + num2
    }

    //JavaScript🤦🏻‍♀️
    function jsFetchNum(id) {
        //code..
        //code..
        //code..
        return new Promise((resolve, reject)=>{
            resolve(100);
        });
    };

    //TypeScript
    function FetchNum(id:number):Promise<number> {
        //code..
        //code..
        //code..
        return new Promise((resolve, reject)=>{
            resolve(100);
        });
    };
}