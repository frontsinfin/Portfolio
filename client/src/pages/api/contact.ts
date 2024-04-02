import { transporter, mailOptions } from "@/config/nodemailer";
import { NextRequest, NextResponse } from "next/server";

const generateEmailContent = (data: {}) => {};

const handler = async (req: NextRequest, res: NextResponse) => {
  if (req.method === "POST") {
    const data = req.body;
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: data.subject,
        text: "12312312312312312",
        html: `<h1>${data.name}</h1><h2>${data.email}</h2><h3>${data.number}</h3><p>${data.question}</p>`,
      });
      return res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Bad request" });
    }
  }
  return res.status(400).json({ message: "Bad request" });
};
export default handler;
