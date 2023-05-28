const { saveUserData } = require("..");

describe("test seveUserData component", () => {
  let serverResponse;
  test("serverResponseType", () => {
    serverResponse = " ";
    expect(saveUserData(serverResponse, () => {}));
    serverResponse = [];
    expect(saveUserData(serverResponse, () => {}));
    serverResponse = null;
    expect(saveUserData(serverResponse, () => {}));
    serverResponse = { user: "kdfs" };
    expect(saveUserData(serverResponse, () => {}));
    serverResponse = { user: {}, jwt: {} };
    expect(saveUserData(serverResponse, () => {}));
  });
});
