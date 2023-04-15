const nodemailer = require("nodemailer");

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email-address@gmail.com",
    pass: "your-email-password",
  },
});

// setup email data with unicode symbols
let mailOptions = {
  from: "your-email-address@gmail.com", // sender address
  to: "recipient-email-address@example.com", // list of receivers
  subject: "Test Email", // Subject line
  text: "Hello from Node.js", // plain text body
  html: "<b>Hello from Node.js Akinbuwa Emmanuel olayinka the bad ass developer is this is you this lovely email with warm regards </b>", // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("Message sent: %s", info.messageId);
});
