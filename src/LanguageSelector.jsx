import React from "react";
import { useLanguage } from "./LanguageContext";
const LanguageSelector = () => {
    const {language, changeLanguage} = useLanguage();
    const handleChangeLanguage = (e) => {
        changeLanguage(e.target.value);
    };
    return (
        <>
        <label>Select Languaje:</label>
        <select value={language} onChange={handleChangeLanguage}>
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
        </select>
        </>
    );
};
export default LanguageSelector;