import { useState } from "react";
import { useLanguage } from "../hooks/useLanguage";
import '../assets/styles/language.css';

export const LanguageSelect = ({ theme }) => {
    const [language, setLanguage] = useState('en');
    const changeLanguage = useLanguage();

    const handleChangeLang = (event) => {
        const lang = event.target.checked ? 'en' : 'it';
        setLanguage(lang);
        changeLanguage(lang);
        localStorage.setItem('lang', lang);
    }

    return (
        <div className="language-switcher">
            <span className={`language-label ${theme}`}><strong>IT</strong></span>
            <label className="switch">
                <input
                    type="checkbox"
                    className="switch-input"
                    checked={language === 'en'}
                    onChange={handleChangeLang}
                />
                <div className={`slider ${theme}`}></div>
            </label>
            <span className={`language-label ${theme}`}><strong>ENG</strong></span>
        </div>
    );
};