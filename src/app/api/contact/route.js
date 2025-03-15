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
      linkedin: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
      github: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      leetcode: "https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png",
      codeforces: "https://cdn.iconscout.com/icon/free/png-256/free-code-forces-3628695-3029920.png",
      instagram: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
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
          <div style="display: grid; grid-template-columns: repeat(5, 1fr); max-width: 300px; margin: 0 auto; gap: 20px; margin-bottom: 20px;">
            ${Object.entries(socialLinks).map(([platform, url]) => `
              <a href="${url}" target="_blank" style="text-decoration: none; display: flex; justify-content: center; align-items: center;">
                <img src="${socialIcons[platform]}" 
                     alt="${platform}" 
                     style="width: 28px; height: 28px; object-fit: contain; transition: transform 0.2s;"
                     onmouseover="this.style.transform='scale(1.1)'"
                     onmouseout="this.style.transform='scale(1)'"
                />
              </a>
            `).join('')}
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #edf2f7;">
            <p style="color: #4a5568; margin: 8px 0;">
              <a href="${contactInfo.website}" 
                 style="color: #3b82f6; text-decoration: none; display: inline-flex; align-items: center; gap: 5px;" 
                 target="_blank">
                <img src="https://img.icons8.com/fluency-systems-regular/24/3b82f6/globe.png" style="width: 16px; height: 16px;"/>
                devesh-mehta.vercel.app
              </a>
            </p>
            <p style="color: #4a5568; margin: 8px 0;">
              <a href="mailto:${contactInfo.email}" 
                 style="color: #3b82f6; text-decoration: none; display: inline-flex; align-items: center; gap: 5px;">
                <img src="https://img.icons8.com/fluency-systems-regular/24/3b82f6/mail.png" style="width: 16px; height: 16px;"/>
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
