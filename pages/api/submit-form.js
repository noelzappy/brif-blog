/* eslint-disable import/no-anonymous-default-export */

//Submit form
export default (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const API_KEY = process.env.MAILGUN_API_KEY;

  // console.log(req.body, API_KEY);

  // const body = {
  //   from: "info@brifhq.com",

  // }

  // fetch("https://api.mailgun.net/v3/YOUR_DOMAIN_NAME/messages", {
  //   method: "POST",
  //   headers: {
  //     Authorization: "Basic " + API_KEY,
  //   },
  //   body: form,
  // });

  res.status(200).json({
    success: true,
  });
};
