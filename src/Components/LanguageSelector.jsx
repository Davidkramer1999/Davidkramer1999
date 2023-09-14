import React, { useState } from "react";
import { useTranslation } from "react-i18next";
const LanguageSelector = () => {
      const {  i18n: { changeLanguage, language } } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language)
  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "sl" : "en";
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
  }

  return (
    <div className="relative">
  <select
    label="Select Language"
    id="language"
    name="language"
    onChange={handleChangeLanguage}
    value={currentLanguage}
    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
  >
    <option value="en">English</option>
    <option value="si">Slovenian</option>
  </select>
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M6.293 9.293a1 1 0 0 1 1.414 0L10 11.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z" />
    </svg>
  </div>
</div>
  );
};

export default LanguageSelector;
