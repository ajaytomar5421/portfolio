import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Section } from "./Section";
import { personal } from "@/data/portfolio";
import { useEmailJS } from "@/hooks/useEmailJS";
import { toast } from "sonner";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiCheck,
  FiLoader,
  FiAlertCircle,
} from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const schema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  subject: z.string().trim().min(3, "Subject is too short").max(120),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(1000),
});

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Errors = Partial<Record<keyof FormState, string>>;

const initial: FormState = { name: "", email: "", subject: "", message: "" };

export function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const { status, sendEmail, reset, isConfigured } = useEmailJS();

  // Reset form after successful send
  useEffect(() => {
    if (status === "sent") {
      setForm(initial);
      const timer = setTimeout(() => reset(), 3000);
      return () => clearTimeout(timer);
    }
  }, [status, reset]);

  const onChange =
    (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [k]: e.target.value }));
      if (errors[k]) setErrors((prev) => ({ ...prev, [k]: undefined }));
    };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const errs: Errors = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof FormState;
        if (!errs[k]) errs[k] = issue.message;
      }
      setErrors(errs);
      return;
    }

    if (!isConfigured) {
      toast.error(
        "Email service not configured. Please add your EmailJS credentials to src/config/emailjs.ts",
      );
      return;
    }

    await sendEmail(form);
  };

  const info = [
    {
      Icon: FiMail,
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      Icon: FiPhone,
      label: "Phone",
      value: personal.phone,
      href: `tel:${personal.phone.replace(/\s/g, "")}`,
    },
    { Icon: FiMapPin, label: "Location", value: personal.location },
    {
      Icon: FaLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ajay-tec",
      href: personal.linkedin,
    },
    {
      Icon: FaGithub,
      label: "GitHub",
      value: "github.com/ajaytomar5421",
      href: personal.github,
    },
  ];

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something together"
      subtitle="Have an opportunity, a question, or just want to say hi? Drop a message."
    >
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6">
        {!isConfigured && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 flex items-start gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30"
          >
            <FiAlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-medium text-amber-500">
                EmailJS not configured
              </p>
              <p className="text-amber-500/80 mt-1">
                Add your EmailJS credentials to{" "}
                <code className="bg-black/30 px-1.5 py-0.5 rounded">
                  src/config/emailjs.ts
                </code>{" "}
                to enable email sending. Follow the setup guide in that file.
              </p>
            </div>
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-6 sm:p-8 space-y-4"
        >
          <h3 className="text-lg font-semibold">Contact Information</h3>
          <p className="text-sm text-muted-foreground">
            Reach out through any of the channels below. I'll get back within a
            day.
          </p>
          <ul className="space-y-3 pt-2">
            {info.map(({ Icon, label, value, href }) => {
              const content = (
                <div className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-lg grid place-items-center bg-[image:var(--gradient-brand-soft)]">
                    <Icon />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-muted-foreground">{label}</div>
                    <div className="text-sm truncate">{value}</div>
                  </div>
                </div>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </li>
              );
            })}
          </ul>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={onSubmit}
          className="glass rounded-2xl p-6 sm:p-8 space-y-4"
          noValidate
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field
              label="Name"
              name="name"
              value={form.name}
              onChange={onChange("name")}
              error={errors.name}
              placeholder="Your name"
            />
            <Field
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={onChange("email")}
              error={errors.email}
              placeholder="you@example.com"
            />
          </div>
          <Field
            label="Subject"
            name="subject"
            value={form.subject}
            onChange={onChange("subject")}
            error={errors.subject}
            placeholder="What's this about?"
          />
          <Field
            label="Message"
            name="message"
            as="textarea"
            rows={5}
            value={form.message}
            onChange={onChange("message")}
            error={errors.message}
            placeholder="Tell me a bit more..."
          />

          <button
            type="submit"
            disabled={status === "sending" || !isConfigured}
            className="btn-primary w-full sm:w-auto disabled:opacity-70"
          >
            {status === "sending" && <FiLoader className="animate-spin" />}
            {status === "sent" && <FiCheck />}
            {status === "error" && <FiAlertCircle />}
            {status === "idle" && <FiSend />}
            {status === "sent"
              ? "Message sent"
              : status === "sending"
                ? "Sending..."
                : status === "error"
                  ? "Error - Try again"
                  : "Send Message"}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

interface FieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  error?: string;
  placeholder?: string;
  type?: string;
  as?: "input" | "textarea";
  rows?: number;
}

function Field({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
  as = "input",
  rows,
}: FieldProps) {
  const base =
    "peer w-full rounded-xl bg-white/5 border px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:bg-white/10 focus:border-[color-mix(in_oklab,var(--brand-blue)_60%,transparent)] focus:ring-2 focus:ring-[color-mix(in_oklab,var(--brand-blue)_25%,transparent)]";
  const borderClass = error ? "border-red-400/60" : "border-white/10";
  return (
    <label className="block">
      <span className="block text-xs text-muted-foreground mb-1.5">
        {label}
      </span>
      {as === "textarea" ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          rows={rows}
          placeholder={placeholder}
          className={`${base} ${borderClass} resize-none`}
        />
      ) : (
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${base} ${borderClass}`}
        />
      )}
      {error && (
        <span className="mt-1 block text-xs text-red-400">{error}</span>
      )}
    </label>
  );
}
