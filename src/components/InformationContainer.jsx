export const InformationContainer = ({ theme, children }) => {
    return (
        <div className={`w-100 h-100 container-about ${theme} my-5`}>
            <div className="p-5">
                {children}
            </div>
        </div>
    )
}