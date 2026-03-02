import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      { error: "Notification service not configured." },
      { status: 500 }
    );
  }

  const { type, name, contact, message } = await req.json();

  let payload: object;

  if (type === "connect") {
    payload = {
      embeds: [
        {
          title: "🙋 New Connection Request",
          color: 0xa93f55, // cherry rose
          fields: [
            { name: "Name", value: name || "—", inline: true },
            { name: "Contact", value: contact || "—", inline: true },
            ...(message ? [{ name: "Message", value: message }] : []),
          ],
          footer: { text: "satishsomarouthu.me" },
          timestamp: new Date().toISOString(),
        },
      ],
    };
  } else {
    // type === "vm"
    payload = {
      embeds: [
        {
          title: "🔴 VM Alert — Portfolio Visitor",
          description:
            "Someone visited your portfolio and noticed your VM appears to be off. They want you to turn it on.",
          color: 0xff0000,
          footer: { text: "satishsomarouthu.me" },
          timestamp: new Date().toISOString(),
        },
      ],
    };
  }

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Failed to send notification." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
