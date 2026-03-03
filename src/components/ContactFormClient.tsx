"use client";

import { useState } from "react";
import CustomSelect from "./CustomSelect";
import IntlPhoneInput from "./IntlPhoneInput";

const subjects = [
  { label: "Partnership", value: "partnership" },
  { label: "Investment", value: "investment" },
  { label: "Press & Media", value: "press" },
  { label: "Careers", value: "careers" },
  { label: "Other", value: "other" },
];

export default function ContactFormClient() {
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="contact-fg">
      <div className="fr">
        <input className="fi" type="text" placeholder="First name" />
        <input className="fi" type="text" placeholder="Last name" />
      </div>
      <input className="fi" type="email" placeholder="Email address" />
      <IntlPhoneInput value={phone} onChange={setPhone} name="phone" />
      <input className="fi" type="text" placeholder="Company (optional)" />
      <div className="fl">
        <label className="fi-lbl">Subject</label>
        <CustomSelect
          options={subjects}
          placeholder="What is this about?"
          value={subject}
          onChange={setSubject}
          name="subject"
        />
      </div>
      <textarea className="fi" placeholder="Your message" />
      <button className="btn btn-s" style={{ width: "100%", justifyContent: "center", marginTop: 4 }}>
        Send message &rarr;
      </button>
    </div>
  );
}
