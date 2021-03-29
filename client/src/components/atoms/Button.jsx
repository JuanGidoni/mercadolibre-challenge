import { useHistory } from 'react-router-dom'

const Button = ({ children, className, icon, typeBtn, clickFunction, getResults, setLoading}) => {

    const history = useHistory()

    const fetchOffers = (e) => {
        getResults(e)
        setLoading(true)
        history.push('/')
    }


    return (
        icon  ? (
            <button className={className} onClick={() => fetchOffers(children)} >
                <img src={icon} className="offers-icon" alt={children} />
                { children}
            </button >
        )       
        : typeBtn === 'withClick' ?
        (
            <button className={className} onClick={clickFunction}>
                {children}
            </button>
        ) :typeBtn === 'offerBtn' ?
        (
            <button className={className} onClick={ () => fetchOffers(children)}>
                {children}
            </button>
        ) : (
            <button className={className} onClick={clickFunction}>
                {children}
            </button>
        )
    )
}

export default Button
