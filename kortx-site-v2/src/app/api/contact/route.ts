import { NextResponse } from "next/server";
import { z } from "zod";
import { sendContactNotification, sendContactConfirmation } from "@/lib/email";

const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Dados inválidos", details: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = result.data;

    const [notification, confirmation] = await Promise.all([
      sendContactNotification(data),
      sendContactConfirmation(data),
    ]);

    if (!notification.success) {
      console.error("[API Contact] Notification failed:", notification.error);
    }

    if (!confirmation.success) {
      console.error("[API Contact] Confirmation failed:", confirmation.error);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[API Contact] Unexpected error:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
