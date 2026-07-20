import { useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG, isEmailJSConfigured } from "@/config/emailjs";
import { toast } from "sonner";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type EmailStatus = "idle" | "sending" | "sent" | "error";

interface UseEmailJSReturn {
  status: EmailStatus;
  sendEmail: (data: ContactFormData) => Promise<void>;
  reset: () => void;
  isConfigured: boolean;
}

/**
 * Hook to handle EmailJS email sending
 * Manages loading states and error handling
 */
export function useEmailJS(): UseEmailJSReturn {
  const [status, setStatus] = useState<EmailStatus>("idle");
  const isConfigured = isEmailJSConfigured();

  // Initialize EmailJS on first use
  if (isConfigured && !emailjs.init) {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }

  const sendEmail = async (data: ContactFormData): Promise<void> => {
    // Check if EmailJS is configured
    if (!isConfigured) {
      toast.error(
        "Email service not configured. Please add your EmailJS credentials.",
      );
      console.warn(
        "EmailJS credentials not configured. Check src/config/emailjs.ts",
      );
      return;
    }

    try {
      setStatus("sending");

      // Send email through EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
          // Additional field for reply-to email
          reply_to: data.email,
        },
        EMAILJS_CONFIG.PUBLIC_KEY,
      );

      if (result.status === 200) {
        setStatus("sent");
        toast.success("Message sent successfully! I'll get back to you soon.");
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      setStatus("error");
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again.";
      toast.error(errorMessage);
      console.error("EmailJS error:", error);
    }
  };

  const reset = () => setStatus("idle");

  return {
    status,
    sendEmail,
    reset,
    isConfigured,
  };
}
