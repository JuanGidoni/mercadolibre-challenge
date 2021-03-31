import { useHistory } from 'react-router-dom'

const Button = ({ children, className, icon, typeBtn, clickFunction, getResults, setLoading, testId }) => {

    const history = useHistory()

    const fetchOffers = (e) => {
        getResults(e)
        setLoading(true)
        history.push('/')
    }


    return (
        icon && testId ?
            <button className={className} onClick={() => fetchOffers(children)} data-testid={testId} >
                <img src={icon} className="offers-icon" alt={children} data-testid={`${testId}Img`} />
                {children}
            </button>
            : typeBtn === "withClick" && testId ?
                <button className={className} onClick={clickFunction} data-testid={testId}>
                    {children}
                </button>
                : typeBtn === "offerBtn" && testId ?
                    <button className={className} onClick={() => fetchOffers(children)} data-testid={testId}>
                        {children}
                    </button>
                    : icon ?
                        <button className={className} onClick={() => fetchOffers(children)} >
                            <img src={icon} className="offers-icon" alt={children} />
                            {children}
                        </button >
                        : typeBtn === "withClick" ?
                            <button className={className} onClick={() => fetchOffers(children)} >
                                <img src={icon} className="offers-icon" alt={children} />
                                {children}
                            </button >
                            : <button className={className} >
                                {children}
                            </button >
    )
}

export default Button
