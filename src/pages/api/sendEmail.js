import { SMTPClient, Message } from 'emailjs';

export default async function handler(req, res) {
  const { messageBody } = req.body;

  const client = new SMTPClient({
    user: process.env.EMAIL,
    password: process.env.PASSWORD,
    host: 'smtp.gmail.com',
    ssl: true,
  });

  const message = new Message({
    text: messageBody,
    from: 'suportepagina10@gmail.com',
    to: 'suportepagina10@gmail.com',
    subject: 'Contato - Achadinhos',
  });

  try {
    const messageResponse = await client.sendAsync(message);
  } catch (e) {
    console.log(e);
  }

  res.status(200).json({ message: 'Sent mail' });
}
