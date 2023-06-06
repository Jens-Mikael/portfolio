import { NextResponse } from "next/server";

export async function POST(req) {
  require("dotenv").config();
  let nodemailer = require("nodemailer");
  const data = await req.json();

  const email = process.env.EMAIL;
  const password = process.env.PASSWORD;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: email,
      pass: password,
    },
  });

  const mailOptions = {
    from: email,
    to: email,
  };

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: `${data.name} => ${data.subject}`,
      text: data.message,
      html: `<h2>Message:</h2> <p>${data.message}</p><h2>Email:</h2> <p>${data.email}</p><h2>Name:</h2> <p>${data.name}</p>`,
    });

    return NextResponse.json("email was sent successfully <= res from api");
  } catch (error) {
    console.log(`Error in sendMail method: ${error.message}`);
  }
}