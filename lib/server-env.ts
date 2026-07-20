type ServerBindings = {
  GOOGLE_CALENDAR_CLIENT_ID?: string;
  GOOGLE_CALENDAR_CLIENT_SECRET?: string;
  GOOGLE_CALENDAR_ID?: string;
  GOOGLE_CALENDAR_REFRESH_TOKEN?: string;
  GOOGLE_CALENDAR_TIMEZONE?: string;
};

declare global {
  var __KMFINCO_ENV__: Record<string, unknown> | undefined;
}

export function serverEnv(): ServerBindings {
  return (globalThis.__KMFINCO_ENV__ || {}) as ServerBindings;
}
