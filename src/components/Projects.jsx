import { useTranslation } from "react-i18next";
import links from "../assets/json/links.json";
import nodesvg from '../assets/links/github.svg';
import { linksManager } from '../hooks/linksManager';

export const Projects = ({ theme }) => {
    const { t } = useTranslation();
    const openLink = linksManager();
 return (
        <div className={`py-5 container-description ${theme}`}>
            <div className="">
                <div className="flex flex-wrap justify-center">
                    <div className="py-1 px-2 exp-single flex" onClick={() => openLink(links.sentinelApi)}>
                        <img className={`svgImg projects mx-2 my-3 ${theme}`} src={nodesvg} alt="github" />
                        <div className='project-description'>
                            <h4 className="py-1 pl-3">SentinelApi</h4>
                            <div className="py-2 pl-3">
                                <p>{t('projects.sentinel_api')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}