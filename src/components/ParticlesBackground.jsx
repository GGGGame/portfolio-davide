import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import particlesWhite from "../assets/json/particles-white.json";
import particlesBlack from "../assets/json/particles-black.json";
import { loadAll } from "@tsparticles/all";

export const ParticlesBackground = ({ theme }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine);

    }).then(() => {
      setInit(true);
    });
  }, []);

  // const particlesLoaded = (container) => {
  //   console.log(container);
  //   console.log(theme);
  // };

  const options = useMemo(
    () => (theme ? particlesWhite : particlesBlack),
    [theme],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        // particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};