/* eslint-disable import/no-anonymous-default-export */

//Submit form
export default (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  console.log(req.body);

  res.status(200).json(JSON.stringify(posts));
};
