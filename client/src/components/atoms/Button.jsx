import { useHistory } from 'react-router-dom'
import { useDataContext } from '../settings/DataContext'

const Button = ({ children, className, icon, typeBtn, clickFunction, getResults, setLoading, testId, productId, idFromParams }) => {

    const history = useHistory()
    const { setFav, fav, setAddStatus, setAdded, added } = useDataContext()

    const fetchOffers = (e) => {
        getResults(e)
        setLoading(true)
        history.push('/')
    }

    const handleRemoveItem = (idx) => {
        // assigning the list to temp variable
        const temp = [...fav];

        // removing the element using splice
        temp.splice(idx, 1);

        // updating the list
        setFav(temp);
    }

    const addFav = (e) => {
        if (fav && fav.length > 0) {
            const itemIndex = fav.indexOf(e)
            if (fav.includes(e)) {
                setAdded(false)
                setAddStatus({
                    status: false,
                    id: null,
                    error: 'Item removed'
                })
                console.log('Item removed from favorites line 39')
                return handleRemoveItem(itemIndex)
            } else {
                setFav([...fav, e])
                setAddStatus({
                    status: true,
                    id: e,
                    error: null
                })
                setAdded(true)
            }
        } else {
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
