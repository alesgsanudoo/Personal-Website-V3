'use server'

import {z} from 'zod'
import {Resend} from 'resend'
import {getLocale} from "next-intl/server";


const schema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    subject: z.string().min(1, 'Subject is required'),
    message: z.string().min(1, 'Message is required'),
})

export async function sendEmail(formData: FormData) {
    const locale = getLocale()
    try {
        const resend = new Resend(process.env.RESEND_API_KEY)
        const validatedFields = schema.parse({
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
        })

        const notificationHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
          h1 { color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px; }
          .content { background-color: #f0f9ff; border-radius: 8px; padding: 20px; margin-top: 20px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #1e40af; }
          .value { margin-top: 5px; }
          .message { white-space: pre-wrap; background-color: #e0f2fe; padding: 10px; border-radius: 4px; }
        </style>
      </head>
      <body>
        <h1>New Contact Form Submission</h1>
        <div class="content">
          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${validatedFields.name}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${validatedFields.email}</div>
          </div>
          <div class="field">
            <div class="label">Subject:</div>
            <div class="value">${validatedFields.subject}</div>
          </div>
          <div class="field">
            <div class="label">Message:</div>
            <div class="value message">${validatedFields.message}</div>
          </div>
        </div>
      </body>
      </html>
    `
        const autoResponseHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${locale === 'en' ? 'Thank You for Contacting Me' : 'Gracias por Contactarme'}</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
          h1 { color: #d97706; border-bottom: 2px solid #d97706; padding-bottom: 10px; }
          .content { background-color: #fffbeb; border-radius: 8px; padding: 20px; margin-top: 20px; }
          p { margin-bottom: 15px; }
        </style>
      </head>
      <body>
        <h1>${locale === 'en' ? 'Thank You for Reaching Out!' : '¡Gracias por Ponerte en Contacto!'}</h1>
        <div class="content">
            ${locale === 'en' ? `
                <p>Hey ${validatedFields.name},</p>
                <p>Thank you for contacting me. I really appreciate your interest and the time you've taken to reach out.</p>
                <p>I have received your message regarding "${validatedFields.subject}" and will review it as soon as possible. You can expect to hear back from me within the next 24-48 hours.</p>
                <p>If you have any urgent matters or additional information to share, please don't hesitate to reply to this email.</p>
                <p>Once again, thank you for your message. I look forward to connecting with you soon!</p>
                ` : `
                <p>Hola ${validatedFields.name},</p>
                <p>Gracias por contactarme. Realmente aprecio tu interés y el tiempo que has tomado para comunicarte conmigo.</p>
                <p>He recibido tu mensaje sobre "${validatedFields.subject}" y lo revisaré lo antes posible. Puedes esperar una respuesta mía dentro de las próximas 24-48 horas.</p>
                <p>Si tienes algún asunto urgente o información adicional para compartir, por favor no dudes en responder a este correo electrónico.</p>
                <p>Una vez más, gracias por tu mensaje. ¡Espero poder conectarme contigo pronto!</p>
            `}
        </div>
        <br><br>
        <table>
       
    <tr>
        <td>
            <img src="https://i.imgur.com/VYvH4Pk.png" alt="email_logo" style="width: 120px; height: auto;">
        </td>
        <td style="padding-left: 15px;">
            <p style="font-family: Arial, sans-serif; font-size: 22px; margin: 0;">
                <b> Alejandro S. Griffith</b>
            </p>
            <p style="font-family: Arial, sans-serif; font-size: 16px; margin: 0;">
                Purdue University '26
            </p>
            <p style="font-family: Arial, sans-serif; font-size: 14px; margin: 0;">
                Computer Science
            </p>
            <br>
            <a href="https://github.com/alesgsanudoo" target="_blank" style="text-decoration: none">
                <img src="https://i.imgur.com/Kisw8gU.png"
                     alt="GitHub" style="height: 20px; width: 80px">
            </a>
            <a href="https://www.linkedin.com/in/alejandro-s-griffith-13b210261/" target="_blank" style="text-decoration: none;">
                <img src="https://i.imgur.com/nzSmvTE.png"
                     alt="LinkedIn" style="height: 20px; width: 80px">
            </a>
            <a href="https://alesgsanudoo.com" target="_blank" style="text-decoration: none">
                <img src="https://i.imgur.com/KlAlNWC.png"
                     alt="Website" style="height: 20px; width: 80px">
            </a>
        </td>
    </tr>
</table>
      </body>
      </html>
    `

        // Send notification email
        await resend.emails.send({
            from: 'Contact Form <contact@alesgsanudoo.com>',
            to: 'contact@alesgsanudoo.com',
            subject: `New Contact: ${validatedFields.subject}`,
            html: notificationHtml,
        })

        // Send auto-response email
        await resend.emails.send({
            from: 'Alejandro Griffith <contact@alesgsanudoo.com>',
            to: validatedFields.email,
            subject: locale === 'en' ? 'Thank You for Contacting Me' : '¡Gracias por Ponerte en Contacto!',
            html: autoResponseHtml,
        })

        return {success: true, message: 'Email sent successfully!'}
    } catch (error) {
        if (error instanceof z.ZodError) {
            return {success: false, message: 'Please fill in all fields correctly.'}
        }
        return {success: false, message: 'Failed to send email. Please try again.'}
    }
}

