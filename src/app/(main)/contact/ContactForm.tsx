"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="bg-light rounded-1 p-60 relative">
      <form onSubmit={handleSubmit}>
        <div className="row g-4">
          <div className="col-lg-12">
            <h3>Get a Free Quote</h3>
            <p>Tell us about your delivery needs and we will get back to you with a quote within the hour.</p>

            <div className="field-set">
              <input
                type="text"
                name="name"
                className="form-control mb-4"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="field-set">
              <input
                type="email"
                name="email"
                className="form-control mb-4"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="field-set">
              <input
                type="tel"
                name="phone"
                className="form-control mb-4"
                placeholder="Your Phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div className="field-set">
              <select
                name="service"
                className="form-control mb-4"
                required
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              >
                <option value="">Select a Service</option>
                <option value="Medical Courier">Medical Courier</option>
                <option value="Same-Day Delivery">Same-Day Delivery</option>
                <option value="Final-Mile Delivery">Final-Mile Delivery</option>
                <option value="Scheduled Route Delivery">Scheduled Route Delivery</option>
                <option value="Box Truck Freight">Box Truck Freight</option>
                <option value="White Glove Delivery">White Glove Delivery</option>
                <option value="LTL Shipping">LTL Shipping</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="field-set">
              <textarea
                name="message"
                className="form-control mb-4 h-100px"
                placeholder="Tell us about your delivery needs"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <button
            type="submit"
            className="btn-main"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </div>

        {status === "success" && (
          <div className="success mt-3" style={{ display: "block" }}>
            Your message has been sent successfully. We will get back to you within the hour.
          </div>
        )}
        {status === "error" && (
          <div className="error mt-3" style={{ display: "block" }}>
            Sorry, there was an error sending your message. Please call us at (612) 237-7374.
          </div>
        )}
      </form>
    </div>
  );
}
