import { useTranslation } from "react-i18next"

export const Develhope = ({ theme }) => {
    const { t } = useTranslation();
    return (
        <div className={`py-1 px-2 exp-single ${theme}`}>
            <h4 className="py-1">Develhope <span className="ml-3">Tutor Full-Stack</span></h4>
            <h5>03 / 2024 - 09 / 2024</h5>
            <div className="py-2">
                <p>{t("experience.develhope")}</p>
            </div>
        </div>
    )
}