import Svgs from '../config/svgLoader.js';

export const Skills = ({ theme }) => {
    return (
           <div className={`py-5 container-description flex flex-wrap ${theme}`}>
                {Object.entries(Svgs).map(([name, Svg]) => {
                    return (<div key={name}>
                                <img className={`svgImg mx-2 my-3 ${theme}`} src={Svg} alt={name} />
                                <p className='svg-text text-center font-bold'>{name}</p>
                            </div>
                        )
                })}
           </div>
       )
   }