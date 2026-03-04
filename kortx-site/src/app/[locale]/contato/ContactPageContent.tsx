"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactPageContent() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const serviceOptions = Array.from({ length: 12 }, (_, i) =>
    t(`fields.serviceOptions.${i}`)
  );

  const budgetOptions = Array.from({ length: 6 }, (_, i) =>
    t(`fields.budgetOptions.${i}`)
  );

  const offices = Array.from({ length: 2 }, (_, i) => ({
    city: t(`offices.${i}.city`),
    country: t(`offices.${i}.country`),
    email: t(`offices.${i}.email`),
    phone: t(`offices.${i}.phone`),
  }));

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Erro ao enviar");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Erro ao enviar solicitação"
      );
    }
  };

  const inputStyles =
    "w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-[#0A1628] placeholder-gray-400 focus:outline-none focus:border-[#00A3FF] focus:ring-1 focus:ring-[#00A3FF] transition-colors";

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#0A1628] to-[#00A3FF]/20">
        <div className="absolute inset-0 hero-grid-pattern" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              {t("heroTitle")}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t("heroSubtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 pb-24 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card variant="corporate" padding="lg">
                  <h2 className="text-2xl font-bold text-[#0A1628] mb-6">
                    {t("formTitle")}
                  </h2>

                  {status === "success" ? (
                    <div className="text-center py-12">
                      <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-[#0A1628] mb-2">
                        {t("submitSuccess")}
                      </h3>
                      <p className="text-[#64748B]">{t("note")}</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        {/* Name */}
                        <div>
                          <label className="block text-sm font-medium text-[#0A1628] mb-2">
                            {t("fields.name")}
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className={inputStyles}
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-sm font-medium text-[#0A1628] mb-2">
                            {t("fields.email")}
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className={inputStyles}
                          />
                        </div>

                        {/* Company */}
                        <div>
                          <label className="block text-sm font-medium text-[#0A1628] mb-2">
                            {t("fields.company")}
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className={inputStyles}
                          />
                        </div>

                        {/* Phone */}
                        <div>
                          <label className="block text-sm font-medium text-[#0A1628] mb-2">
                            {t("fields.phone")}
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={inputStyles}
                          />
                        </div>

                        {/* Service */}
                        <div>
                          <label className="block text-sm font-medium text-[#0A1628] mb-2">
                            {t("fields.service")}
                          </label>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className={inputStyles}
                          >
                            <option value="">---</option>
                            {serviceOptions.map((option, index) => (
                              <option key={index} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Budget */}
                        <div>
                          <label className="block text-sm font-medium text-[#0A1628] mb-2">
                            {t("fields.budget")}
                          </label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className={inputStyles}
                          >
                            <option value="">---</option>
                            {budgetOptions.map((option, index) => (
                              <option key={index} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-medium text-[#0A1628] mb-2">
                          {t("fields.message")}
                        </label>
                        <textarea
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className={`${inputStyles} resize-none`}
                        />
                      </div>

                      {/* Error message */}
                      {status === "error" && (
                        <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                          <AlertCircle className="w-5 h-5 flex-shrink-0" />
                          <span>{errorMessage}</span>
                        </div>
                      )}

                      {/* Submit */}
                      <Button
                        type="submit"
                        variant="corporate"
                        size="lg"
                        className="w-full group"
                        disabled={status === "loading"}
                      >
                        {status === "loading" ? (
                          <>
                            <span className="btn-spinner mr-2" />
                            Enviando...
                          </>
                        ) : (
                          <>
                            {t("submit")}
                            <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </Button>

                      <p className="text-center text-sm text-[#64748B]">
                        {t("note")}
                      </p>
                    </form>
                  )}
                </Card>
              </motion.div>
            </div>

            {/* Office Cards */}
            <div className="space-y-6">
              {offices.map((office, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <Card variant="corporate" padding="lg">
                    <h3 className="text-lg font-bold text-[#0A1628] mb-1">
                      {office.city}
                    </h3>
                    <p className="text-sm text-[#00A3FF] mb-4">{office.country}</p>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#00A3FF]/10 flex items-center justify-center flex-shrink-0">
                          <Mail className="w-4 h-4 text-[#00A3FF]" />
                        </div>
                        <a
                          href={`mailto:${office.email}`}
                          className="text-sm text-[#64748B] hover:text-[#0A1628] transition-colors"
                        >
                          {office.email}
                        </a>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#00A3FF]/10 flex items-center justify-center flex-shrink-0">
                          <Phone className="w-4 h-4 text-[#00A3FF]" />
                        </div>
                        <a
                          href={`tel:${office.phone}`}
                          className="text-sm text-[#64748B] hover:text-[#0A1628] transition-colors"
                        >
                          {office.phone}
                        </a>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#00A3FF]/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-4 h-4 text-[#00A3FF]" />
                        </div>
                        <span className="text-sm text-[#64748B]">
                          {office.city}
                        </span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
