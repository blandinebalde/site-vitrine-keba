import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import formidable from 'formidable';

// Configure API route to handle form data
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Parse form data
    const form = formidable({ multiples: true });
    const [fields, files] = await new Promise<[formidable.Fields, formidable.Files]>((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        resolve([fields, files]);
      });
    });

    // Create email transporter
    const transporter = nodemailer.createTransport({
      // Configure your email service here
      service: 'gmail', // or your preferred service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Prepare email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'blandinebalde@gmail.com',
      subject: 'New Investment Request',
      text: `
        New Investment Request:
        
        First Name: ${fields.firstName}
        Last Name: ${fields.lastName}
        Nationality: ${fields.nationality}
        Country of Residence: ${fields.countryOfResidence}
        Professional Activity: ${fields.profession}
        Email: ${fields.email}
        Phone: ${fields.phone}
        Investment Amount: $${fields.investmentAmount}
      `,
      attachments: files.proofOfFunds ? [
        {
          filename: files.proofOfFunds[0].originalFilename || 'proof-of-funds',
          path: files.proofOfFunds[0].filepath,
        }
      ] : [],
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Request submitted successfully' });
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ message: 'Error processing request' });
  }
} 