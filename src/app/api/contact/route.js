import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'yahoo',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    const socialLinks = {
      linkedin: "https://www.linkedin.com/in/devesh1217/",
      github: "https://github.com/devesh1217",
      leetcode: "https://leetcode.com/devesh1217/",
      codeforces: "https://codeforces.com/profile/devesh1217",
      instagram: "https://www.instagram.com/devesh_1217"
    };

    const contactInfo = {
      email: "devesh1217@yahoo.com",
      website: "https://devesh-mehta.vercel.app"
    };

    const socialIcons = {
      linkedin: "https://img.icons8.com/?size=100&id=8808&format=png&color=000000",
      github: "https://img.icons8.com/?size=100&id=62856&format=png&color=000000",
      leetcode: "https://img.icons8.com/?size=100&id=S22n5FcHWTiO&format=png&color=000000",
      codeforces: "https://img.icons8.com/?size=100&id=iNL6HTqpNVeO&format=png&color=000000",
      instagram: "https://img.icons8.com/?size=100&id=59813&format=png&color=000000"
    };

    // Email template for owner
    const ownerHtml = `
      <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
        <div style="background: linear-gradient(135deg, #14b8a6 0%, #3b82f6 100%); padding: 20px; border-radius: 10px; color: white;">
          <h1 style="margin: 0;">New Contact Form Submission</h1>
        </div>
        <div style="padding: 20px; background-color: #f8f9fa; border-radius: 10px; margin-top: 20px;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <h3>Message:</h3>
          <p style="background-color: white; padding: 15px; border-radius: 5px;">${message}</p>
        </div>
      </div>
    `;

    // Updated email template for sender with improved footer spacing
    const senderHtml = `
      <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
        <div style="background: linear-gradient(135deg, #14b8a6 0%, #3b82f6 100%); padding: 20px; border-radius: 10px 10px 0 0; color: white;">
          <h1 style="margin: 0;">Thank You for Contacting Me!</h1>
        </div>
        
        <div style="padding: 20px; background-color: #f8f9fa; border-radius: 0 0 10px 10px;">
          <p>Hello ${name},</p>
          <p>Thank you for reaching out! I have received your message and will get back to you as soon as possible.</p>
          
          <div style="background-color: white; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <h3>Your Message Details:</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          </div>

          <p style="margin-top: 20px;">Best regards,<br>Devesh</p>
        </div>

        <!-- Footer with Social Icons -->
        <div style="margin-top: 20px; text-align: center; background: #f8f9fa; padding: 20px; border-radius: 10px;">
          <h4 style="color: #4a5568; margin-bottom: 15px; font-size: 16px;">Let's Connect!</h4>
          <table style="width: 100%; max-width: 320px; margin: 0 auto;">
            <tr>
              <td style="text-align: center; padding: 0 10px;">
                ${Object.entries(socialLinks).map(([platform, url]) => `
                  <a href="${url}" target="_blank" style="text-decoration: none; display: inline-block; margin: 0 8px;">
                    <img src="${socialIcons[platform]}" 
                         alt="${platform}" 
                         style="width: 24px; height: 24px; opacity: 0.9;"
                    />
                  </a>
                `).join('')}
              </td>
            </tr>
          </table>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #edf2f7;">
            <p style="color: #4a5568; margin: 8px 0;">
              <a href="${contactInfo.website}" 
                 style="color: #000; text-decoration: underline; display: flex; align-items: center; gap: 5px;" 
                 target="_blank">
                <img src="https://img.icons8.com/?size=100&id=53372&format=png&color=000000" style="width: 16px; height: 16px;"/>
                devesh-mehta.vercel.app
              </a>
            </p>
            <p style="color: #4a5568; margin: 8px 0;">
              <a href="mailto:${contactInfo.email}" 
                 style="color: #000; text-decoration: underline; display: inline-flex; align-items: center; gap: 5px;">
                <img src="https://img.icons8.com/?size=100&id=12623&format=png&color=000000" style="width: 16px; height: 16px;"/>
                ${contactInfo.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    `;

    // Send email to owner
    await transporter.sendMail({
      from: `Devesh Chetan Mehta <${process.env.EMAIL_USER}>`,
      to: `Admin ${process.env.EMAIL_USER}`,
      subject: `New Contact Form Submission: ${subject}`,
      html: ownerHtml,
    });

    // Send confirmation email to sender
    await transporter.sendMail({
      from: `Devesh Chetan Mehta <${process.env.EMAIL_USER}>`,
      to: `${name} <${email}>`,
      subject: 'Thank you for contacting me!',
      html: senderHtml,
    });

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to send email.' },
      { status: 500 }
    );
  }
}
