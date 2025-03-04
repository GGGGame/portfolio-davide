import React, { useEffect, useState } from "react";

export const Skills = ({ theme }) => {
    const [svgs, setSvgs] = useState([]);

    useEffect(() => {
      // Usa require.context per ottenere tutti i file SVG dalla cartella
      const svgContext = require.context('../path/to/svg/folder', false, /\.svg$/);
  
      // Carica tutti gli SVG
      const loadedSvgs = svgContext.keys().map((key) => {
        const svgPath = svgContext(key).default;
        return <img src={svgPath} alt={key} key={key} />;
      });
  
      setSvgs(loadedSvgs);
    }, []);

    return (
           <div className={`py-5 container-description ${theme}`}>
                {Array.map()}
           </div>
       )
   }