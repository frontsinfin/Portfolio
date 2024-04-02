import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ivangalemov@gmail.com",
    pass: "hlhs beis sese jpig",
  },
});

export const mailOptions = {
  from: "ivangalemov@gmail.com",
  to: "ivangalemov@gmail.com",
};
