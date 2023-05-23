import { EMPRESAS } from "data/fixtures/empresa";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(req, res) {
  const session = getServerSession(req, res, authOptions);

  if (!session) {
    res.status(401).json({ message: "unauthorized" });
    return;
  }

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(EMPRESAS));
}
