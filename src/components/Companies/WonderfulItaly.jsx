import { useTranslation } from "react-i18next"

export const WonderfulItaly = ({ theme }) => {
    const { t } = useTranslation();
    return (
        <div className={`py-1 px-2 exp-single ${theme}`}>
            <h4 className="py-1">WonderfulItaly <span className="ml-3">Full-stack Developer</span></h4>
            <h5>09 / 2022 - 03 / 2024</h5>
            <div className="py-2">
                <p>{t("experience.wonderfulitaly")}</p>
            </div>
        </div>
    )
}