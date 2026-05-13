type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as ContactPayload | null;

  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message || !isValidEmail(email)) {
    return Response.json(
      { ok: false, error: "Invalid contact form submission." },
      { status: 400 }
    );
  }

  return Response.json({
    ok: true,
    submission: {
      name,
      email,
      message,
      receivedAt: new Date().toISOString(),
    },
  });
}
