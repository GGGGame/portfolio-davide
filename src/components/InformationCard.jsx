import { useState } from "react"
import { DynamicCards } from "./DynamicCards";
import { ButtonCards } from "./ButtonCards";

export const InformationCard = ({ theme }) => {
    const [component, setComponent] = useState('experience');

    const handleComponentChange = (comp) => {
        setComponent(comp)
    }

    return (
        <>
        <ButtonCards changeComponent={handleComponentChange} component={component} theme={theme}/>
        <DynamicCards comp={component} theme={theme} />
        </>
    )
}