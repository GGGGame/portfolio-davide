import '../assets/styles/themeMode.css';

export const ThemeMode = ({ theme, themeChange }) => {
    return (
        <div className="theme-container absolute bottom-20 right-0">
            <div>
                <label className="switch-theme">
                    <input
                        type="checkbox"
                        className="switch-input"
                        onChange={themeChange}
                    />
                    <div className={`slider-container ${theme}`}>
                        <p className="slider-theme">{theme === 'dark' ? '⏾' : '🌣'}</p>
                    </div>
                </label>
            </div>
        </div>
    );
}