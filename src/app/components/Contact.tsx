import { motion } from "motion/react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const ownerEmail = "alshamasnehrama@gmail.com";
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(ownerEmail)}`;
  const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;
  const githubUrl = "https://github.com/ramasham";
  const linkedInUrl = "https://linkedin.com/in/ramasham";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setStatusMessage("");

    if (!formEndpoint) {
      setIsSubmitting(false);
      setSubmitStatus("error");
      setStatusMessage(
        "The contact form is not connected yet. Add VITE_FORMSPREE_ENDPOINT to your env file or use the email button below.",
      );
      return;
    }

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error("Too many messages were sent recently. Please wait a minute and try again.");
        }
        throw new Error(`Form request failed with status ${response.status}`);
      }

      setSubmitStatus("success");
      setStatusMessage(`Message sent successfully. I'll receive it at ${ownerEmail}.`);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (error) {
      setSubmitStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong while sending your message. Please try again or use the email button below.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: ownerEmail,
      href: gmailComposeUrl,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/ramasham",
      href: githubUrl,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ramasham",
      href: linkedInUrl,
    },
  ];

  return (
    <div className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <h1 className="mb-3 text-4xl font-bold text-[#E5E7EB] sm:text-5xl">
            Get In Touch
          </h1>
          <div className="mx-auto mb-5 h-1 w-16 bg-[linear-gradient(90deg,#EC4899,#8B5CF6)]" />
          <p className="mx-auto max-w-2xl text-base text-[#9CA3AF] sm:text-lg">
            Let's discuss your next project or collaboration opportunity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-[#141427] p-5 backdrop-blur-sm sm:p-6 md:p-8"
        >
          <h2 className="mb-6 text-center text-2xl font-bold text-[#E5E7EB] sm:text-3xl">
            Send a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#9CA3AF]">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[#E5E7EB] placeholder-[#6B7280] transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#9CA3AF]">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[#E5E7EB] placeholder-[#6B7280] transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="mb-2 block text-sm font-medium text-[#9CA3AF]">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[#E5E7EB] placeholder-[#6B7280] transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#9CA3AF]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={3}
                className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[#E5E7EB] placeholder-[#6B7280] transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
                placeholder="Tell me about your project or question..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[linear-gradient(90deg,#8B5CF6,#EC4899)] px-8 py-3.5 font-medium text-[#E5E7EB] shadow-lg shadow-[#EC4899]/20 transition-all duration-300 hover:shadow-[#EC4899]/35 disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Send Message
                </>
              )}
            </button>

            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-lg border border-green-500/30 bg-green-500/20 p-4 text-center text-green-300"
              >
                {statusMessage}
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-lg border border-red-500/30 bg-red-500/15 p-4 text-center text-red-200"
              >
                {statusMessage}
              </motion.div>
            )}
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 + index * 0.08 }}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/10 bg-[#141427]/80 px-4 py-3 transition-all duration-300 hover:border-[#EC4899]/35 hover:bg-[linear-gradient(135deg,rgba(139,92,246,0.10),rgba(236,72,153,0.08))] sm:w-auto"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(139,92,246,0.16),rgba(236,72,153,0.14))]">
                  <Icon className="h-5 w-5 text-[#F5D0FE]" />
                </span>
                <span className="text-sm font-medium text-[#E5E7EB]">{method.label}</span>
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-6 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-lg border border-[#EC4899]/24 bg-[linear-gradient(135deg,rgba(139,92,246,0.10),rgba(236,72,153,0.08))] px-4 py-3 text-center sm:px-5">
            <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            <span className="text-sm text-[#9CA3AF]">Available opportunities</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
