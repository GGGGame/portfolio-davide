import { Experience } from "./Experience";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

export const DynamicCards = ({ comp, theme }) => {
    const Components = { 
        experience: <Experience theme={theme}/>,
        project: <Projects theme={theme}/>,
        skills: <Skills theme={theme}/> 
    };
    const SelectedComponent = Components[comp];

    return (
        <>
        {SelectedComponent}
        </>
    )
}