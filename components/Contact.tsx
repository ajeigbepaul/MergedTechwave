"use client"
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
  service: string;
  budget: string;
}

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    service: "",
    budget: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setForm({
          name: "",
          email: "",
          message: "",
          service: "",
          budget: "",
        });
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="rounded-xl w-full border mb-10 border-[#B7CFFF] ">
      <div className="flex p-8 w-full">
        <form onSubmit={handleSubmit} className="mt-0 flex flex-col space-y-4 w-full">
          <label className="space-y-3 flex flex-col w-full">
            <span className="field-label">Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-2 bg-[#F7F7F7]"
              placeholder="ex., John Doe"
            />
          </label>

          <label className="space-y-3 flex flex-col">
            <span className="field-label">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-2 bg-[#F7F7F7]"
              placeholder="ex., johndoe@gmail.com"
            />
          </label>

          <label className="space-y-3 flex flex-col">
            <span className="field-label">What service are you interested in?</span>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              className="w-full p-2 bg-[#F7F7F7]"
            >
              <option value="">Select a service</option>
              <option value="Service 1">Service 1</option>
              <option value="Service 2">Service 2</option>
            </select>
          </label>

          <label className="space-y-3 flex flex-col">
            <span className="field-label">Budget</span>
            <select
              name="budget"
              value={form.budget}
              onChange={handleChange}
              required
              className="w-full p-2 bg-[#F7F7F7]"
            >
              <option value="">Select a budget</option>
              <option value="Budget 1">Budget 1</option>
              <option value="Budget 2">Budget 2</option>
            </select>
          </label>

          <label className="space-y-3 flex flex-col">
            <span className="field-label">Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full p-2 bg-[#F7F7F7]"
              placeholder="Share your thoughts or inquiries..."
            />
          </label>

          <button
            className="field-btn p-3 text-white bg-brandcolor rounded-full"
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
