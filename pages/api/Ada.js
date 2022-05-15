export default function handler(req, res) {
  res.status(200).json({ engine: "text-ada-001" });
}
