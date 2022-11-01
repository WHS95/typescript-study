{
    //function: login -> success, fail
    type successResult = {
            result:"success",
            response:{
                body:string
            }
    }
    type failResult = {
        result:"fail"
        reason: string;
    }
    type loginResult = successResult | failResult;

    // function login():loginResult{
    //     return{
    //         result:"success",
    //         response:{
    //             body:'login success'
    //         }
    //     }
    // }

    //printLoginState(state: loginResult)
    //success -> body
    //fail -> reason
    // function printLoginState(state:loginResult){
    //     if(state.result === 'success'){
    //         console.log(`${state.response.body}`);
    //     } else {
    //         console.log(`${state.reason}`);
    //     }
    // }
}