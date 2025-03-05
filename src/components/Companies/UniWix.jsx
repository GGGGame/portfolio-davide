import { useTranslation } from "react-i18next"

export const UniWix = ({ theme }) => {
    const { t } = useTranslation();
    return (
        <div className={`py-1 px-2 exp-single ${theme}`}>
            <h4 className="py-1">UniWix <span className="ml-3">Full-stack Developer</span></h4>
            <h5>11 / 2024 - 03 / 2025</h5>
            <div className="py-2">
                <p>{t("experience.uniwix")}</p>
            </div>
        </div>
    )
}