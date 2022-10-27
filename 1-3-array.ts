{
    //Array
    const fruits : string[] = ['apple','banna'];
    const scores : Array<number> = [1,2,3];
    function printArray1(fruits: readonly Array<number>[]){
        // return fruits.push//readonly옵션을 설정하였기에 에러발생
    }
    function printArray2(fruits: readonly string[]){
        // return fruits.push//readonly옵션을 설정하였기에 에러발생
    }

    //Tuple -> interface, type alias, class
    //서로다른 타입의 배열을 담을 수있음
    let student : [number, string];
    student = [14, "Jack"];
    student[0];// 14
    student[1];// Jack

    //배열의 인덱스를 통해서 값을 가졍 오는것은 가독성 다운 배열 데이터를 파악해야함으로

    const [age, name] = student;//object destructure을 사용함으로써 좀더 명확히 파악가능
    console.log(age);
    console.log(name);
    
}