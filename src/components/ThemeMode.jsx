import '../assets/styles/themeMode.css';
import Moon from '../assets/moon-1.svg';
import Sun from '../assets/sun.svg';

export const ThemeMode = ({ theme, themeChange }) => {
    return (
        <div className='links-container absolute bottom-20 right-0'>
            <div className={`svgLink theme ${theme}`} onClick={themeChange}>
                <img src={theme === 'dark' ? Moon : Sun} alt='svg-theme'/>
            </div>
        </div>
    )
}