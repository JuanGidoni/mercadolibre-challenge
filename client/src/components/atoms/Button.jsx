import { useHistory } from 'react-router-dom'
import { useDataContext } from '../settings/DataContext'

const Button = ({ children, className, icon, typeBtn, clickFunction, getResults, setLoading, testId, productId }) => {

    const history = useHistory()
    const { setFav, fav, setAddStatus, setAdded } = useDataContext()

    const fetchOffers = (e) => {
        getResults(e)
        setLoading(true)
        history.push('/')
    }

    const addFav = (e) => {
        if (fav && fav.length > 0) {
            fav.map(
                (v) => {
                    if (v === e) {
                        return setAddStatus(
                            {
                                status: true,
                                id: null,
                                error: 'Item already added to favorite'
                            }
                        )
                    } else {
                        setAdded(true)
                        setAddStatus({
                            status: true,
                            id: e,
                            error: null
                        })
                        setTimeout(() => {
                            setAddStatus({
                                status: false,
                                id: null,
                                error: null
                            })
                        }, 3000);
                        return setFav([...fav, e])  
                    }
                }
            )

        }else {
            setFav([...fav, e])  
            setAddStatus({
                status: true,
                id: e,
                error: null
            })
            setAdded(true)
        }
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
                            : typeBtn === "addFav" ?
                                <button className={className} onClick={() => addFav(productId)} >
                                    {children}
                                </button >
                                : <button className={className} >
                                    {children}
                                </button >
    )
}

export default Button
