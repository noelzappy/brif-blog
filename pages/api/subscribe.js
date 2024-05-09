/* eslint-disable import/no-anonymous-default-export */

import { API_URL } from "@/libs/contentApi";

export default async (req, res) => {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const { email, name } = req.body;

    if (!email || !name) {
      return res.status(400).json({ error: "Email and Name is required" });
    }

    await fetch(API_URL + "/members/api/send-magic-link/", {
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

    return res.status(200).json({ success: true });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Failed to add you up. Please try again" });
  }
};
