const svgs = import.meta.glob('../assets/skills/*.svg', { eager: true });

const Svgs = Object.fromEntries(
  Object.entries(svgs).map(([path, mod]) => {
    const fileName = path.split('/').pop().replace('.svg', '');
    return [fileName, mod.default];
  })
);

export default Svgs;
