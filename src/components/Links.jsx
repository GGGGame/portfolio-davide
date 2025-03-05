import '../assets/styles/themeMode.css';
import links from "../assets/json/links.json";
import Linkedin from '../assets/links/linkedin.svg';
import GitHub from '../assets/links/github.svg';
import Discord from '../assets/links/discord.svg';

export const Links = ({ theme }) => {

    const openLink = (link) => {
        const newTab = window.open(link, "_blank");
        if (newTab) {
            newTab.opener = null;
        } else {
            window.location.href = link;
        }
    };
    

    return (
        <div className="links-container absolute bottom-20 left-0">
            <div className='flex space-x-4'>
                <div className={`slider-link ${theme}`} onClick={() => openLink(links.linkedin)}>
                    <img className={`svgLink ${theme}`} src={Linkedin} alt='linkedin-svg'/>
                </div>
                <div className={`slider-link ${theme}`} onClick={() => openLink(links.github)}>
                    <img className={`svgLink ${theme}`} src={GitHub} alt='github-svg'/>
                </div>
                <div className={`slider-link ${theme}`} onClick={() => openLink(links.discord)}>
                    <img className={`svgLink ${theme}`} src={Discord} alt='discord-svg'/>
                </div>
            </div>
        </div>
    );
}