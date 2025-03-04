import { useState } from 'react';
import './App.css'
import { AboutMe } from './components/AboutMe';
import { ParticlesBackground } from './components/ParticlesBackground'
import { LanguageSelect } from './components/LanguageSelect';
import { ThemeMode } from './components/ThemeMode';
import { InformationContainer } from './components/InformationContainer';
import { InformationCard } from './components/InformationCard';

export const App = () => {
  const [theme, setTheme] = useState(false);
  const [style, setStyle] = useState('dark');

  const handleThemeChange = () => {
    setTheme(!theme);
    setStyle(theme ? "dark" : "light");
  }

  return (
    <div className="container-page relative py-25 relative">
      <ParticlesBackground theme={theme}/>
      <div className='flex items-end justify-between'>
        <div>
          <LanguageSelect theme={style}/>
          <InformationContainer theme={style}>
            <AboutMe />
          </InformationContainer>
        </div>
        <InformationContainer theme={style}>
          <InformationCard theme={style}/>
        </InformationContainer>
      </div>
      <ThemeMode theme={style} themeChange={handleThemeChange}/>
    </div>
  );
};