'use server';

import { emailTemplate } from 'libs';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail() {
  try {
    const data = await resend.emails.send({
      from: 'Comprice Info <onboarding@resend.dev>',
      to: ['kuru.emre@hotmail.com'],
      subject: 'You got a new message!',
      react: emailTemplate()
    });
  } catch (error) {
    console.log('shit');
  }
}
