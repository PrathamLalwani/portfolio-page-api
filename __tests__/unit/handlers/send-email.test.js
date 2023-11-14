// Import all functions from hello-from-lambda.js
// import { handler } from "../../../src/handlers/send-email.js";

import { handler } from "../../../src/handlers/send-email.js";

describe("Test for hello-from-lambda", () => {
  // This test invokes the hello-from-lambda Lambda function and compares the result
  it("Verifies successful email response", async () => {
    // Invoke helloFromLambdaHandler
    const body = {
      name: "Pratham Lalwani",
      email: "prathamlalwani33@gmail.com",
      message: "testing update",
    };
    const result = await handler(body);

    /*
            The expected result should match the return from your Lambda function.
            e.g.
                If you change from `const message = 'Hello from Lambda!';` to `const message = 'Hello World!';` in hello-from-lambda.js,
                you should change the following line to `const expectedResult = 'Hello World!';`
        */
    const expectedResult = { statusCode: 200 };

    // Compare the result with the expected result
    expect(result.statusCode).toEqual(expectedResult.statusCode);
  });
});
