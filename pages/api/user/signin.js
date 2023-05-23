import prisma from "@/prisma/client";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    if (user) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(user);
    } else {
      res.status(400).end("Invalid credentials");
    }
  }
}
