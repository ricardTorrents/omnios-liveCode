export const TEST='app_test'

export const AppTest = (actionData) => ({
    type: TEST,
    actionData
  })



export function setAppTest(info) {
    let test=info
    console.log("info",info)
    return (dispatch) => {
        dispatch(AppTest({test}));
    }
  }