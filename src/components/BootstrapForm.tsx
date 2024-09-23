"use client";

import { useState } from "react";

export default function BootstrapForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    message: "",
  });

  // Type for input and textarea change events
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Type for form submission event
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-3">
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
          className="form-control form-control-lg "
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
