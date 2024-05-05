/* eslint-disable import/no-anonymous-default-export */

import { API_URL } from "@/libs/contentApi";

export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, name } = req.body;

  if (!email || !name) {
    return res.status(400).json({ error: "Email and Name is required" });
  }

  const _res = await fetch(API_URL + "/members/api/send-magic-link/", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      name,
      emailType: "subscribe",
      labels: [],
      autoRedirect: true,
      urlHistory: [],
      newsletters: [{ name: "BrifHQ" }],
    }),
  });

  const data = await _res.text();

  if (data === "Created") {
    res.status(200);
  } else {
    res.status(400);
  }
};
