// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { EMPRESAS } from "data/fixtures/empresa";

export default function handler(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(EMPRESAS));
}
