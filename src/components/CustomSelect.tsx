"use client";

import { useState, useRef, useEffect } from "react";

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps {
  options: Option[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  /** MemberStack attribute name, e.g. "investor-type" */
  msMember?: string;
  name?: string;
}

export default function CustomSelect({
  options,
  placeholder = "Select\u2026",
  value,
  onChange,
  msMember,
  name,
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(value || "");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value !== undefined) setSelected(value);
  }, [value]);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const current = options.find((o) => o.value === selected);

  return (
    <div className={`cs${open ? " cs-open" : ""}`} ref={ref}>
      <button type="button" className="cs-trigger" onClick={() => setOpen(!open)}>
        <span className={current ? "cs-val" : "cs-ph"}>{current ? current.label : placeholder}</span>
        <svg className="cs-chevron" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <ul className="cs-menu">
          {options.map((opt) => (
            <li key={opt.value}>
              <button
                type="button"
                className={`cs-opt${selected === opt.value ? " cs-active" : ""}`}
                onClick={() => {
                  setSelected(opt.value);
                  onChange?.(opt.value);
                  setOpen(false);
                }}
              >
                {opt.label}
                {selected === opt.value && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
      {/* Hidden input for MemberStack / native form compatibility */}
      <input type="hidden" name={name} value={selected} {...(msMember ? { "data-ms-member": msMember } : {})} />
    </div>
  );
}
