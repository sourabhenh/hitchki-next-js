"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Updated import for useRouter

export default function BootstrapForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    message: "",
  });
  const [error, setError] = useState("");
  const router = useRouter(); // Use Next.js router for redirection

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      // Redirect to the thank you page after a successful submission
      router.push('/thankyou');
    } catch (err) {
      setError("An error occurred while sending the message.");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-3">
      {error && <p className="text-danger">{error}</p>} {/* Display error message */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control form-control-lg"
          id="name"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <input
          type="tel"
          className="form-control form-control-lg"
          id="telephone"
          placeholder="Phone Number"
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <input
          type="email"
          className="form-control form-control-lg"
          id="email"
          placeholder="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <textarea
          className="form-control form-control-lg"
          id="message"
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary fs-4 formbutton mt-2 rounded-pill ps-5 pe-5 pt-2 pb-2 border-0"
      >
        Submit
      </button>
    </form>
  );
}
