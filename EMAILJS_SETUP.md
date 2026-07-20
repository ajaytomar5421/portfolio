# EmailJS Contact Form Setup Guide

## Overview

Your portfolio contact section is now integrated with **EmailJS**, a free email service that allows you to send emails directly from your portfolio without a backend server.

## Step-by-Step Setup

### 1. Create an EmailJS Account

1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign up for a free account (no credit card required)
3. Verify your email

### 2. Create an Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add Service** and select your email provider:
   - Gmail (recommended - easiest setup)
   - Outlook
   - Yahoo Mail
   - Or your custom SMTP server
3. Complete the connection setup following EmailJS's guide
4. **Copy your Service ID** (looks like `service_xxxxx`)

### 3. Create an Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Name your template (e.g., "Portfolio Contact Form")
4. Set the recipient email (where you want to receive messages)
5. In the **email content**, use these template variables:

```
Subject: {{subject}} - New message from {{from_name}}

Message from: {{from_name}}
Email: {{from_email}}
---

{{message}}
```

6. After saving, **copy your Template ID** (looks like `template_xxxxx`)

### 4. Get Your Public Key

1. Go to **Account** > **API Keys** in the dashboard
2. **Copy your Public Key** (looks like `xxxxx` - usually 20-25 characters)

### 5. Add Credentials to Your Portfolio

Open `src/config/emailjs.ts` and paste your credentials:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: "service_YOUR_SERVICE_ID_HERE", // Paste here
  TEMPLATE_ID: "template_YOUR_TEMPLATE_ID_HERE", // Paste here
  PUBLIC_KEY: "YOUR_PUBLIC_KEY_HERE", // Paste here
};
```

### 6. Test Your Setup

1. Run your portfolio in development:

   ```bash
   npm run dev
   ```

2. Navigate to the Contact section
3. You should see the amber alert message disappear once credentials are added
4. Fill out the form and submit a test message
5. Check if you receive the email

## How It Works

- **Frontend Only**: All email sending happens in the browser using EmailJS's API
- **No Backend**: Your personal email credentials stay safe - only the public API key is used in the browser
- **Free Tier**: EmailJS offers 200 emails/month on the free plan
- **Validation**: Form fields are validated before sending using Zod
- **Error Handling**: Failed emails show toast notifications with error details

## Files Modified/Created

- **New**: `src/config/emailjs.ts` - Configuration file for credentials
- **New**: `src/hooks/useEmailJS.ts` - React hook handling email logic
- **Updated**: `src/components/portfolio/Contact.tsx` - Integrated EmailJS into form

## Testing Without Credentials

The form will show an amber warning if EmailJS isn't configured. This is perfect for:

- Testing form validation locally
- Developing without committing credentials
- Sharing code with others safely

## Security Notes

⚠️ **Important**:

- The **Public Key** is safe to be public - it's designed to be used in browsers
- Never commit your credentials to git
- The validation happens both client-side and on EmailJS servers
- EmailJS has built-in rate limiting and spam protection

## Troubleshooting

### "Email service not configured" warning shows

- ✅ Paste your credentials in `src/config/emailjs.ts`
- ✅ Make sure there are no placeholder values remaining

### "Failed to send message" error

- Check that your EmailJS Service and Template IDs are correct
- Verify your email service is active in EmailJS dashboard
- Check the browser console for detailed error messages

### Not receiving emails

- Check spam/junk folders
- Verify the recipient email in your EmailJS template
- Test by sending from EmailJS dashboard directly

### Rate limiting issues

- Free tier: 200 emails/month
- Check EmailJS dashboard usage stats
- Consider upgrading plan if needed

## Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS API Reference](https://www.emailjs.com/docs/api/send/)
- [EmailJS Templates Guide](https://www.emailjs.com/docs/user-guide/templates/)

## Next Steps (Optional Enhancements)

1. **Add file attachments** - Users can upload resumes/portfolios
2. **Email notifications** - Get notified via Discord/Slack when emails arrive
3. **Rate limiting** - Add custom rate limiting per IP
4. **Email preview** - Show a preview before sending
5. **Internationalization** - Support multiple languages

---

**Your contact form is ready to use!** 🚀
