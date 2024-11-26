import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import multiparty from 'multiparty';
import { promises as fs } from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

interface FormFields {
  firstName: string[];
  lastName: string[];
  nationality: string[];
  countryOfResidence: string[];
  profession: string[];
  email: string[];
  phone: string[];
  investorStatus: string[];
}

interface FormFiles {
  proofOfFunds?: {
    originalFilename: string;
    path: string;
  }[];
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const form = new multiparty.Form();
    const { fields, files } = await new Promise<{fields: FormFields, files: FormFiles}>((resolve, reject) => {
      form.parse(req, (err: Error | null, fields: any, files: any) => {
        if (err) reject(err);
        resolve({ fields, files } as { fields: FormFields, files: FormFiles });
      });
    });

    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Prepare email content
    const emailContent = `
      <h2>New Investment Request</h2>
      <p><strong>Name:</strong> ${fields.firstName[0]} ${fields.lastName[0]}</p>
      <p><strong>Nationality:</strong> ${fields.nationality[0]}</p>
      <p><strong>Country of Residence:</strong> ${fields.countryOfResidence[0]}</p>
      <p><strong>Profession:</strong> ${fields.profession[0]}</p>
      <p><strong>Email:</strong> ${fields.email[0]}</p>
      <p><strong>Phone:</strong> ${fields.phone[0]}</p>
      <p><strong>Investor Status:</strong> Category ${fields.investorStatus[0]}</p>
    `;

    // Prepare email attachments
    const attachments = [];
    if (files.proofOfFunds) {
      const file = files.proofOfFunds[0];
      attachments.push({
        filename: file.originalFilename,
        content: await fs.readFile(file.path),
      });
    }

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: 'New Investment Request',
      html: emailContent,
      attachments,
    });

    // Clean up temporary files
    if (files.proofOfFunds) {
      await fs.unlink(files.proofOfFunds[0].path);
    }

    res.status(200).json({ message: 'Request sent successfully' });
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ message: 'Error processing request' });
  }
};

export default handler;