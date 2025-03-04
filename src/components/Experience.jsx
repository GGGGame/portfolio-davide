import { Develhope } from "./Companies/Develhope"
import { UniWix } from "./Companies/UniWix"
import { WonderfulItaly } from "./Companies/WonderfulItaly"

export const Experience = ({ theme }) => {
    return (
        <div className={`py-5 container-description ${theme}`}>
            <UniWix theme={theme}/>
            <Develhope theme={theme}/>
            <WonderfulItaly theme={theme}/>
        </div>
    )
}