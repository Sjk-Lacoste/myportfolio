import mailchimp from "@mailchimp/mailchimp_marketing";
import axios from "axios";

const getRequestParams = (email) => {
  // Get env variables
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const LIST_ID = process.env.MAILCHIMP_LIST_ID;
  const DATACENTER = API_KEY.split("-")[1];

  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

  const data = {
    email_address: email,
    status: "subscribed",
  };

  // API key needs to be encoded in base 64 format
  const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString("base64");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Basic ${base64ApiKey}`,
  };

  return {
    url,
    data,
    headers,
  };
};

export default async (req, res) => {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email || !email.length) {
      return res.status(400).json({
        error: "Forgot to add your email?",
      });
    }

    try {
      const { url, data, headers } = getRequestParams(email);

      const response = await axios.post(url, data, { headers });

      //   success
      return res.status(201).json({
        error: null,
        success: "Successfully added to subscription list.",
      });
    } catch (error) {
      return res.status(400).json({
        error: `Oops, something went wrong... Send me an email at tmohlatlole@gmail.com and I'll add you to the list.`,
        msg: error,
      });
    }
  }
};
