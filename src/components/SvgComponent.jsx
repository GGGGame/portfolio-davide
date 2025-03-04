import { useEffect, useState } from 'react';

export const SvgComponent = () => {
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
    <div>
      {svgs}
    </div>
  );
};