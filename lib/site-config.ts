export const siteConfig = {
  name: "KM FINCO",
  url: "https://kmfinco.com",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@kmfinco.com",
  phoneDisplay: "+356 7942 8604",
  phoneE164: "+35679428604",
  whatsappUrl: "https://wa.me/35679428604",
  linkedInUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
  bookingUrl: "/book",
  appointmentScheduleUrl: process.env.NEXT_PUBLIC_GOOGLE_BOOKING_URL || "",
  serviceArea:
    "Serving international organisations, investors and privately held businesses across borders. Meetings are available online and by appointment.",
} as const;

export function googleCalendarTemplateUrl({
  start,
  end,
  name,
  email,
  context,
}: {
  start: Date;
  end: Date;
  name: string;
  email: string;
  context: string;
}) {
  const compactUtc = (date: Date) => date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: "KM FINCO advisory conversation",
    dates: `${compactUtc(start)}/${compactUtc(end)}`,
    details: `Requested by ${name} (${email}).\n\nContext: ${context || "Advisory conversation"}\n\nPlease add Google Meet before sending if it is not added automatically.`,
    location: "Google Meet",
    add: siteConfig.email,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
