import { useHistory } from 'react-router-dom'
import { useDataContext } from '../settings/DataContext'

const Button = ({ children, className, icon, typeBtn, clickFunction, testId, product_data }) => {

    // declare const/func from DataContext
    const { fetchOffers, addFav } = useDataContext()
    // declare history from browser to control the redirects or routes (from react router dom)
    const history = useHistory()

    return (
        icon && testId ?
            <button className={className} onClick={() => fetchOffers(children, history)} data-testid={testId} >
                <img src={icon} className="offers-icon" alt={children} data-testid={`${testId}Img`} />
                {children}
            </button>
            : typeBtn === "withClick" && testId ?
                <button className={className} onClick={clickFunction} data-testid={testId}>
                    {children}
                </button>
                : typeBtn === "offerBtn" && testId ?
                    <button className={className} onClick={() => fetchOffers(children, history)} data-testid={testId}>
                        {children}
                    </button>
                    : icon && typeBtn === "withClick" ?
                        <button className={className} onClick={() => fetchOffers(children, history)} >
                            <img src={icon} className="offers-icon" alt={children} />
                            {children}
                        </button >
                        : typeBtn === "withClick" ?
                            <button className={className} onClick={clickFunction} >
                                {children}
                            </button >
                            : typeBtn === "addFav" ?
                                <button className={className} onClick={() => addFav(product_data)} >
                                    {children}
                                </button >
                                : <button className={className} onClick={clickFunction} >
                                    {children}
                                </button >
    )
}

export default Button
