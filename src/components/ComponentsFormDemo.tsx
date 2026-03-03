"use client";

import CustomSelect from "./CustomSelect";
import IntlPhoneInput from "./IntlPhoneInput";

export default function ComponentsFormDemo() {
  return (
    <div style={{ maxWidth: 420 }}>
      <div className="fi-wrap">
        <div>
          <label className="fi-lbl">Text Input</label>
          <input className="fi" type="text" placeholder="Placeholder text" />
        </div>
        <div>
          <label className="fi-lbl">Email Input</label>
          <input className="fi" type="email" placeholder="you@example.com" />
        </div>
        <div>
          <label className="fi-lbl">Custom Select</label>
          <CustomSelect
            placeholder="Choose an option\u2026"
            options={[
              { label: "Option One", value: "one" },
              { label: "Option Two", value: "two" },
              { label: "Option Three", value: "three" },
            ]}
          />
        </div>
        <div>
          <label className="fi-lbl">International Phone</label>
          <IntlPhoneInput />
        </div>
        <div>
          <label className="fi-lbl">Textarea</label>
          <textarea className="fi" rows={3} placeholder="Write something..." style={{ resize: "vertical" }} />
        </div>
      </div>
      <button className="btn btn-s" style={{ width: "100%", justifyContent: "center", marginTop: 8 }}>
        Submit
      </button>
    </div>
  );
}
