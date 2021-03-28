const Button = ({ children, className, icon, type, onClick }) => (
   icon ?  (
        <button className={className}>
            <img src={icon} className="offers-icon" alt={children} />
            {children}
        </button>
    ) : type  === 'sideMenu' ?
     (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    ) : (
        <button className={className}>
            {children}
        </button>
    )
)

export default Button
