import prisma from "@/prisma/client";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const user = await prisma.user.create({
      data: {
        email,
        password,
      },
    });

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(user);
  }
}
