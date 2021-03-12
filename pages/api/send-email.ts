import { NextApiRequest, NextApiResponse } from "next";
import { GMAILService } from "../../utils/google/gmail/emailService";
const { google } = require("googleapis");

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const OAuth2 = google.auth.OAuth2;
    const myOAuth2Client = new OAuth2(
      process.env.GMAIL_CLIENT_ID,
      process.env.GMAIL_CLIENT_SECRET,
      process.env.GMAIL_AUTH_PLAYGROUND_URL
    );

    myOAuth2Client.setCredentials({
      refresh_token: process.env.GMAIL_REFRESH_TOKEN,
    });

    const myAccessToken = await new Promise((resolve, reject) => {
      myOAuth2Client.getAccessToken((err: any, token: any) => {
        if (err) {
          reject(new Error("Failed to create access token :("));
        }
        resolve(token);
      });
    }).catch((err: any) => {
      throw new Error(JSON.stringify(err));
    });

    const { emailTo, emailFrom, subject, message } = JSON.parse(req.body);

    let gmailService = new GMAILService({
      SmtpFromAddress: emailFrom,
      service: "gmail",
      auth: {
        type: `${process.env.GMAIL_SMTP_AUTH_TYPE}`,
        user: `${process.env.GMAIL_SMTP_USER}`,
        clientId: `${process.env.GMAIL_CLIENT_ID}`,
        clientSecret: `${process.env.GMAIL_CLIENT_SECRET}`,
        refreshToken: `${process.env.GMAIL_REFRESH_TOKEN}`,
        accessToken: `${myAccessToken}`,
      },
    });

    let successMsg;

    gmailService
      .sendMail(emailTo, subject, message)
      .then((msg) => {
        successMsg = msg;
        res.send(JSON.stringify(msg, null, 2));
      })
      .catch((err) => {
        res.send(JSON.stringify(err, null, 2));
      });

    return res.status(200).json({ successMsg });
  }

  return res.status(404).json({
    error: {
      code: "not_found",
      message:
        "The requested endpoint was not found or doesn't support this method.",
    },
  });
};
