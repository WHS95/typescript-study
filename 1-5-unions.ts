{
    /**
     *  Union Types: OR
     */
    type Direction = 'left'| 'right' | 'up'| 'down';
    //할당될 type의 경우를 전부 적어둔거
    function move(direction: Direction){
        console.log(direction);
    }
    move('down');

    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 16;

    //function: login -> success, fail
    type successResult = {
            response:{
                body:string
            }
    }
    type failResult = {
        reason: string;
    }
    type loginResult = successResult | failResult;

    function login():loginResult{
        return{
            response:{
                body:'login success'
            }
        }
    }

    //printLoginState(state: loginResult)
    //success -> body
    //fail -> reason
    function printLoginState(state:loginResult){
        if('response'in state){
            console.log(`${state.response.body}`);
        } else {
            console.log(`${state.reason}`);
            
        }
    }
}