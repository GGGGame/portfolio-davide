import { useTranslation } from "react-i18next";

export const AboutMe = () => {
    const { t } = useTranslation();
    return (
        <>
        <h2 className="text-bold">Davide Ricca</h2>
        <h4>{t('description.title')}</h4>
        <div className="py-10">
            <p>
                {t("description.text_1")}
            </p>
            <p>
                {t("description.text_2")}
            </p>
            <p>
                {t("description.text_3")}
            </p>
        </div>
        </>
    )
}