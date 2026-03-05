import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  budget?: string;
  message?: string;
}

export async function sendContactNotification(data: ContactFormData) {
  if (!resend) {
    console.log("[Email] Resend not configured, skipping notification email.");
    return { success: true, skipped: true };
  }

  const contactEmail = process.env.CONTACT_EMAIL || "comercial@kortx.pro";

  const { error } = await resend.emails.send({
    from: "KORT.X Website <noreply@kortx.pro>",
    to: contactEmail,
    subject: `Novo lead: ${data.name} - ${data.service || "Sem serviço especificado"}`,
    html: `
      <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #050a12; padding: 24px; text-align: center;">
          <h1 style="color: #6366f1; margin: 0; font-size: 24px;">KORT.X</h1>
          <p style="color: #94A3B8; margin: 8px 0 0;">Novo contato pelo site</p>
        </div>
        <div style="padding: 24px; background: #ffffff;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #64748B; width: 120px;">Nome</td><td style="padding: 8px 0; font-weight: 600;">${data.name}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748B;">Email</td><td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #6366f1;">${data.email}</a></td></tr>
            ${data.company ? `<tr><td style="padding: 8px 0; color: #64748B;">Empresa</td><td style="padding: 8px 0;">${data.company}</td></tr>` : ""}
            ${data.phone ? `<tr><td style="padding: 8px 0; color: #64748B;">Telefone</td><td style="padding: 8px 0;">${data.phone}</td></tr>` : ""}
            ${data.service ? `<tr><td style="padding: 8px 0; color: #64748B;">Serviço</td><td style="padding: 8px 0;">${data.service}</td></tr>` : ""}
            ${data.budget ? `<tr><td style="padding: 8px 0; color: #64748B;">Orçamento</td><td style="padding: 8px 0;">${data.budget}</td></tr>` : ""}
          </table>
          ${data.message ? `<div style="margin-top: 16px; padding: 16px; background: #F8FAFC; border-radius: 8px;"><p style="color: #64748B; margin: 0 0 8px; font-size: 14px;">Mensagem:</p><p style="margin: 0; color: #0A1628;">${data.message}</p></div>` : ""}
        </div>
      </div>
    `,
  });

  if (error) {
    console.error("[Email] Failed to send notification:", error);
    return { success: false, error };
  }

  return { success: true };
}

export async function sendContactConfirmation(data: ContactFormData) {
  if (!resend) {
    console.log("[Email] Resend not configured, skipping confirmation email.");
    return { success: true, skipped: true };
  }

  const { error } = await resend.emails.send({
    from: "KORT.X <noreply@kortx.pro>",
    to: data.email,
    subject: "Recebemos sua solicitação - KORT.X",
    html: `
      <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #050a12; padding: 24px; text-align: center;">
          <h1 style="color: #6366f1; margin: 0; font-size: 24px;">KORT.X</h1>
        </div>
        <div style="padding: 24px; background: #ffffff;">
          <h2 style="color: #0A1628; margin: 0 0 16px;">Olá, ${data.name}!</h2>
          <p style="color: #64748B; line-height: 1.6;">
            Recebemos sua solicitação e nossa equipe entrará em contato em até 24 horas.
          </p>
          <p style="color: #64748B; line-height: 1.6;">
            Enquanto isso, conheça mais sobre nosso trabalho em <a href="https://kortx.pro" style="color: #6366f1;">kortx.pro</a>.
          </p>
          <p style="color: #64748B; line-height: 1.6; margin-top: 24px;">
            Atenciosamente,<br/>
            <strong style="color: #0A1628;">Equipe KORT.X</strong>
          </p>
        </div>
      </div>
    `,
  });

  if (error) {
    console.error("[Email] Failed to send confirmation:", error);
    return { success: false, error };
  }

  return { success: true };
}
