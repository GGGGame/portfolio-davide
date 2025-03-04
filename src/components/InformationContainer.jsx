export const InformationContainer = ({ theme, children }) => {
    return (
        <div className={`w-100 h-100 bg-slate-1000 container-about ${theme} my-5 flex align-start relative`}>
            <div className="p-5">
                {children}
            </div>
        </div>
    )
}