import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./LanguageSwitcher.module.css";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const languages = [
    { code: "pt", label: "Português", flag: "/src/assets/flag-br.png" },
    { code: "en", label: "English", flag: "/src/assets/flag-us.png" },
  ];
  const current = languages.find((l) => l.code === i18n.language) || languages[0];

  function handleSelect(lang) {
    if (lang !== i18n.language) {
      i18n.changeLanguage(lang);
    }
    setOpen(false);
  }

  return (
    <div className={styles.switcher}>
      <button
        className={styles.current}
        onClick={() => setOpen((o) => !o)}
        aria-label="Alternar idioma"
      >
        <img src={current.flag} alt={current.label} className={styles.flag} />
        <span>{current.label}</span>
        <span className={styles.arrow} aria-hidden>▼</span>
      </button>
      {open && (
        <ul className={styles.dropdown}>
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                className={styles.option}
                onClick={() => handleSelect(lang.code)}
                disabled={lang.code === i18n.language}
              >
                <img src={lang.flag} alt={lang.label} className={styles.flag} />
                {lang.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
