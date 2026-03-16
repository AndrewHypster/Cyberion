import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { text } = body;

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: text.trim(),
        parse_mode: "HTML",
      }),
    });

    if (!response.ok) {
      throw new Error("Telegram API error");
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Помилка при відправці" },
      { status: 500 }
    );
  }
}
