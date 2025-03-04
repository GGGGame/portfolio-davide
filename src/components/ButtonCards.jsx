export const ButtonCards = ({ changeComponent, component, theme }) => {
    return (
        <div className="flex btn-information-card py-5">
            <button className={`card-btn-container ${theme} ${component === 'experience' ? 'active' : ''}`} 
                    onClick={() => changeComponent('experience')}>
                        Experience
            </button>
            <button className={`card-btn-container ${theme} ${component === 'project' ? 'active' : ''}`}
                    onClick={() => changeComponent('project')}>
                        Projects
            </button>
            <button className={`card-btn-container ${theme} ${component === 'skills' ? 'active' : ''}`} 
                    onClick={() => changeComponent('skills')}>
                        Skills
            </button>
        </div>
    )
}