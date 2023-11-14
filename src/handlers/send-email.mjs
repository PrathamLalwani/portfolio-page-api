import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
const ses = new SESClient({ region: "ca-central-1" });

export const handler = async (event) => {
  try {
    const { name, email, message } = event;
    const command = new SendEmailCommand({
      Destination: {
        ToAddresses: ["prathamlalwani33@gmail.com"],
      },
      Message: {
        Body: {
          Text: { Data: `Message from ${email} \n\n${message}` },
        },

        Subject: { Data: `Email from ${name} - ${email}` },
      },
      Source: "prathamlalwani33@gmail.com",
      ReplyToAddresses: [email],
    });

    const emailResponse = await ses.send(command);
    const response = {
      statusCode: 200,

      body: event,
    };
    return response;
  } catch (error) {
    const response = {
      statusCode: 200,

      body: event,
    };
    return response;
  }
};
