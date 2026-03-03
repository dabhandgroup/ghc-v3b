"use client";

import { PhoneInput, defaultCountries, parseCountry } from "react-international-phone";
import "react-international-phone/style.css";

interface IntlPhoneInputProps {
  value?: string;
  onChange?: (phone: string) => void;
  msMember?: string;
  name?: string;
}

/* Show only popular countries at the top, then the rest */
const preferred = ["au", "us", "gb", "nz", "sg", "hk", "ae"];

const countries = defaultCountries.filter((c) => {
  const parsed = parseCountry(c);
  return !preferred.includes(parsed.iso2);
});

const orderedCountries = [
  ...defaultCountries.filter((c) => preferred.includes(parseCountry(c).iso2)),
  ...countries,
];

export default function IntlPhoneInput({ value, onChange, msMember, name }: IntlPhoneInputProps) {
  return (
    <div className="intl-phone-wrap">
      <PhoneInput
        defaultCountry="au"
        value={value}
        onChange={(phone) => onChange?.(phone)}
        countries={orderedCountries}
        inputClassName="fi intl-phone-input"
        countrySelectorStyleProps={{
          buttonClassName: "intl-phone-btn",
          dropdownStyleProps: {
            className: "intl-phone-dropdown",
            listItemClassName: "intl-phone-item",
          },
        }}
        inputProps={{
          name: name || "phone",
          ...(msMember ? { "data-ms-member": msMember } : {}),
        }}
      />
    </div>
  );
}
