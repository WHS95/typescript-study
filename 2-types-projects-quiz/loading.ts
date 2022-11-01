{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  //내가 작성한 것
  function printLoginStates(state:ResourceLoadState){
    switch (state.state) {
      case "loading":
        console.log("👀 loading...");
        break;
      case "success":
        console.log(`😃 ${state.response.body}`);
        break;
      case "fail":
        console.log(`😱 ${state.reason}`);
        break;
      default:
        throw new Error(`unknown Commnand${state}`);
    }
  }
  //강사님의 코드와 동일

  printLoginStates({ state: "loading" }); // 👀 loading...
  printLoginStates({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  printLoginStates({ state: "fail", reason: "no network" }); // 😱 no network
}
