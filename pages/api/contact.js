export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }
  const { name, email, message } = JSON.parse(req.body || "{}");
  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: "Missing fields" });
  }

  // TODO: integrate email service or store in a sheet/db
  console.log("Contact submission:", { name, email, message });

  return res.status(200).json({ ok: true });
}

