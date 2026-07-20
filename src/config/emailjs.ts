/**
 * EmailJS Configuration
 *
 * To set up EmailJS for your portfolio:
 * 1. Go to https://www.emailjs.com/ and sign up (it's free)
 * 2. Create an email service (connect your email provider)
 * 3. Create an email template with variables:
 *    - {{from_name}} - sender name
 *    - {{from_email}} - sender email
 *    - {{subject}} - message subject
 *    - {{message}} - message body
 * 4. Copy your credentials from EmailJS dashboard:
 *    - Service ID (looks like "service_xxxxx")
 *    - Template ID (looks like "template_xxxxx")
 *    - Public Key (looks like "xxxxx")
 * 5. Paste them in the fields below
 *
 * WARNING: Keep these credentials safe. The public key is meant to be public,
 * but never commit sensitive credentials to git.
 */

export const EMAILJS_CONFIG = {
  // Paste your Service ID here
  SERVICE_ID: "service_ahz3wjp",

  // Paste your Template ID here
  TEMPLATE_ID: "template_1i7dzqa",

  // Paste your Public Key here
  PUBLIC_KEY: "lZ7Mtqx4YQwODZXW5",
};

// Validate that credentials are configured
export const isEmailJSConfigured = (): boolean => {
  return (
    EMAILJS_CONFIG.SERVICE_ID !== "service_YOUR_SERVICE_ID_HERE" &&
    EMAILJS_CONFIG.TEMPLATE_ID !== "template_YOUR_TEMPLATE_ID_HERE" &&
    EMAILJS_CONFIG.PUBLIC_KEY !== "YOUR_PUBLIC_KEY_HERE"
  );
};
