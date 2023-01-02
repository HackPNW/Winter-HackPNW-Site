const nodemailer = require("nodemailer");

export default async function handler(request, response) {
    if (request.method !== "POST")
        return response.status(405).send("Method not allowed");

    let senderEmail = process.env.EMAIL_USER;
    let recipientEmail = request.query.email;
    let messageText = "This is a test! I Hope it worked";
    let messageHTML = "<p>This is a test! I Hope it worked</p>";
    let subject = "HackPNW Confirmation!"

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // upgrade later with STARTTLS
      auth: {
        user: senderEmail,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const message = {
        from: senderEmail,
        to: recipientEmail,
        subject: subject,
        text: messageText,
        html: messageHTML,
    }

    await transporter.sendMail(message);
    
    return response.status(300).send("SUCCESS");
}