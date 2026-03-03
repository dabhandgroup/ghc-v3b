"use client";

import { useState } from "react";

export default function InvestorButton() {
  const [submitted, setSubmitted] = useState(false);

  const handleClick = () => {
    setSubmitted(true);
  };

  return (
    <button
      className="btn btn-s"
      style={{ justifyContent: "center", width: "100%", fontSize: 12 }}
      onClick={handleClick}
      disabled={submitted}
    >
      {submitted
        ? "\u2713 Received \u2014 we'll be in touch within 48 hours."
        : "Request Access"}
    </button>
  );
}
