import * as Sentry from "@sentry/nextjs";

if (process.env.NODE_ENV === "production") {
  Sentry.init({
    dsn: "https://5a5ad5d9846faece0a4727540f810281@o4510149980258304.ingest.de.sentry.io/4510621155983440",

    tracesSampleRate: 1,

    enableLogs: true,

    sendDefaultPii: true,

    integrations: [
      Sentry.vercelAIIntegration,
      Sentry.consoleLoggingIntegration({
        levels: ["log", "warn", "error"],
      }),
    ],
  });
}