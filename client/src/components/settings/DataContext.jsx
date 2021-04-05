import React, { useContext, useState, useEffect } from "react"
import Loader from '../atoms/Loader'

const DataContext = React.createContext()

export function useDataContext() {
    return useContext(DataContext)
}

const _MeLiData = {
    "title": "Ofertas",
    "subtitle": "¡Encontrá precios increíbles cada día!",
    "fonts": [
        "https://http2.mlstatic.com/ui/webfonts/v3.0.0/proxima-nova/proximanova-light.woff2",
        "https://http2.mlstatic.com/ui/webfonts/v3.0.0/proxima-nova/proximanova-regular.woff2",
        "https://http2.mlstatic.com/ui/webfonts/v3.0.0/proxima-nova/proximanova-semibold.woff2"
    ],
    "header": {
        "logo": "https://http2.mlstatic.com/frontend-assets/ui-navigation/5.11.0/mercadolibre/logo__large_plus@2x.png",
        "search": "Buscar productos, marcas y más...",
        "links": [
            "Ofertas",
            "Historial",
            "Supermercado",
            "Tiendas oficiales",
            "Vender",
            "Ayuda"
        ],
        "profile": "Mi cuenta",
        "ad_image": "https://http2.mlstatic.com/resources/deals/exhibitors_resources/mla-menu-desktop-notification-picture-e6c46c2b-5591-4b43-94e4-a48dbbefaed7.png"
    },
}
const _MeliShortcuts = [
    {
        "image_src": "https://http2.mlstatic.com/storage/splinter-admin/1583341146061-todas-las-ofertas@3x.png",
        "name": "Todas las ofertas",
        "filter": {
            "domain_id": ""
        },
        "isDefault": true,
        "fixedPosition": true
    },
    {
        "image_src": "https://http2.mlstatic.com/storage/splinter-admin/1585847817557-speaker@3x.png",
        "name": "Parlantes",
        "filter": {
            "domain_id": "MLA-SPEAKERS"
        },
        "isRecommendedDomain": true
    },
    {
        "image_src": "https://http2.mlstatic.com/storage/splinter-admin/1592947702168-herramientas@3x.png",
        "filter": {
            "domain_id": "MLA-WELDING_MACHINES$MLA-TOOLS$MLA-WELDING_BLOWTORCHES$MLA-WELDING_RODS$MLA-DRILLS_SCREWDRIVERS$MLA-ELECTRIC_DRILLS$MLA-DRILL_BITS$MLA-POWER_GRINDERS$MLA-COMBINED_TOOL_SETS$MLA-ELECTRIC_CIRCULAR_SAWS$MLA-TOOL_ACCESSORIES_AND_SPARES$MLA-WRENCHES$MLA-WRENCH_SETS"
        },
        "name": "Herramientas",
        "isRecommendedDomain": true
    },
    {
        "image_src": "https://http2.mlstatic.com/storage/splinter-admin/1583354134276-notebooks@3x.png",
        "filter": {
            "domain_id": "MLA-NOTEBOOKS"
        },
        "name": "Notebooks",
        "isRecommendedDomain": true
    },
    {
        "image_src": "https://http2.mlstatic.com/storage/splinter-admin/1583341349527-celulares@3x.png",
        "filter": {
            "domain_id": "MLA-CELLPHONES"
        },
        "name": "Celulares",
        "isRecommendedDomain": true
    },
    {
        "image_src": "https://http2.mlstatic.com/storage/splinter-admin/1583354080423-zapatillas@3x.png",
        "name": "Zapatillas",
        "filter": {
            "domain_id": "MLA-SNEAKERS"
        }
    }
]

export function DataProvider({ children, ...props }) {

    // declare constant for url & port for backend API
    const url = process.env.REACT_APP_BACKEND_URL || 'http://localhost'
    const port = process.env.REACT_APP_BACKEND_PORT || 5000

    // declare constants for globals states
    const [meLiData, setMeLiData] = useState()
    const [meLiShortcuts, setMeLiShortCuts] = useState()
    const [fav, setFav] = useState([])
    const [products, setProducts] = useState([])
    const [filters, setFilters] = useState([])
    const [seller, setSeller] = useState([])
    const [sideToggle, setSideToggle] = useState(false)
    const [loading, setLoading] = useState(true)
    const [categoryLoading, setCategoryLoading] = useState(true)
    const [errorMsg, setErrorMsg] = useState({})
    const [added, setAdded] = useState(false)
    const [totalItems, setTotalItems] = useState(0)
    const [addStatus, setAddStatus] = useState({
        status: false,
        id: null,
        message: null,
        error: null
    })

    // this arrow function works to fetch results by clicking the offers items (OffersList/Button)
    const fetchOffers = (e, history) => {

        // fetch the results with e (query)
        getResults(e)

        // set the loader TRUE
        setLoading(true)

        // push the history url to "/": home page
        history.push('/')
    }

    // this arrow function works to fetch results by clicking the offers items (OffersList/Button)
    const fetchFilters = (e, history) => {

        // fetch the results with e (query)
        getFiltersData(e)

        // set the loader TRUE
        setLoading(true)

        // push the history url to "/": home page
        history.push('/')
    }

    // this arrow function works to format the links url (Remove spaces to fetch correctly on url param
    // example: "tiendasoficiales" (original: "tiendas oficiales"))
    const formatLinksURL = (e) => {

        // replace the sapces and turn it to lowercase from e
        let newLinkUrl = e.replace(/\s/g, '').toLowerCase()

        // return the new link url
        return newLinkUrl

    }

    // this arrow function works for handle the item to be removed with ID
    const handleRemoveItem = (idx, history) => {

        // assigning the list to temp variable
        const temp = [...fav];

        // removing the element using splice
        temp.splice(idx, idx >= 0 ? 1 : 0);

        // updating the list
        setFav(temp);

        // set a status message
        setAddStatus({
            status: false,
            id: null,
            message: 'Item removed',
            error: null,
        })

        // send the user to home page using history
        history.push("/")

    }

    // this arrow function works to add a favorite item to your favorite list (from: Button/Each product)
    const addFav = (p, history) => {

        // if favorite list and the length of it is higher of 0 then check if the item already exists or added to the list
        if (fav && fav.length > 0) {

            // declare constant for index of the favorite to be removed
            const idx = fav.findIndex(v => v.id === p.id);
            // condition if idx exist = 1 then remove the item else added
            if (idx >= 0 ? 1 : 0) {
                setAdded(false)
                return handleRemoveItem(idx, history)
            } else {
                setFav([...fav, p])
                setAddStatus({
                    status: true,
                    id: p.id,
                    message: 'Next item added',
                    error: null
                })
                setAdded(true)
            }
        } else {

            // if favorite array is empty, add the first object 
            setFav([...fav, p])
            setAddStatus({
                status: true,
                id: p.id,
                message: 'First item added',
                error: null
            })
            setAdded(true)
        }
    }
    
    // this arrow function works to get a unique item search (not implemented in the site: future versions)
    const getItem = async (e) => {
        try {
            if (e) {
                const results = await fetch(`${url}:${port}/v1/item/${e}`)
                const response = await results.json()
                setProducts([response])
                setLoading(false)

            } else {
                const results = await fetch(`${url}:${port}/v1/`)
                const response = await results.json()
                setProducts([response])
            }
        } catch (error) {
            setErrorMsg(error)
        }
    }
    
    // this arrow function works to check if a favorite exist to set the Added style to the Favorite Button or none
    const checkifFavExist = (id) => {

        if (fav && fav.length > 0) {
            const itemFound = fav.some(item => item.id === id)
            itemFound ? setAdded(true) : setAdded(false)
        } else if (loading) {
            getItem(id)
            setAdded(false)
        } else {
            setAdded(false)
        }

    }

    // this arrow function works to get all the results from a search
    const getResults = async (e) => {
        try {
            setLoading(true)
            if (e) {
                const results = await fetch(`${url}:${port}/v1/search/${e}`)
                const response = await results.json()
                setProducts(response.results)
                setTotalItems(response.paging.total)

            } else {
                const results = await fetch(`${url}:${port}/v1/`)
                const response = await results.json()
                setProducts(response.results)
                setTotalItems(response.paging.total)
            }
            getFilters()
        } catch (error) {
            setErrorMsg(error)
        }
    }

    // this arrow function works to (in this case) get categories (if you have filters, then this will be for filters in future cases)
    const getFilters = async () => {
        try {
            const results = await fetch(`${url}:${port}/v1/categories`)
            const response = await results.json()
            setFilters(response)
            setLoading(false)
        } catch (error) {
            setErrorMsg(error)
        }
    }
    
    const getFiltersData = async (id) => {
        try {
            const fetchFilter = await fetch(`${url}:${port}/v1/filter/${id}`)
            const response = await fetchFilter.json()
            setProducts(response.results)
            setTotalItems(response.paging.total)
            setLoading(false)
        } catch (error) {
            setErrorMsg('Error fetching filters products or invalid category id.')
        }
    }

    /* const getSellerData = async (id) => {
        try {
            if(id){
                const results = await fetch(`${url}:${port}/v1/seller/${id}`)
                const response = await results.json()
                setSeller(response)
                setLoading(false)
            }
        } catch (error) {
            setErrorMsg(error)
        }
    } */
    
    // this arrow function works to verify and get results from a categorie id (in future cases this will work with filters)
    const verifyCategory = async (id) => {
        try {
            const fetchCategory = await fetch(`${url}:${port}/v1/filter/${id}`)
            const response = await fetchCategory.json()
            setProducts(response.results)
            setTotalItems(response.paging.total)
            setCategoryLoading(false)
        } catch (error) {
            setErrorMsg('Error fetching categories products or invalid category.')
        }
    }

    // useEffect once to get the data then unsuscribe it
    useEffect(() => {
        const unsubscribe = () => {
            setLoading(true)
            getResults()
            setMeLiData(_MeLiData)
            setMeLiShortCuts(_MeliShortcuts)
        }

        return unsubscribe()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    // this constant will be sended to the Provider to be used in all the components with the functions/values
    const value = {
        // getSellerData,
        fetchFilters,
        verifyCategory,
        getResults,
        getFilters,
        setFilters,
        setSeller,
        setProducts,
        setSideToggle,
        setLoading,
        setFav,
        setAddStatus,
        setAdded,
        setCategoryLoading,
        fetchOffers,
        addFav,
        checkifFavExist,
        formatLinksURL,
        setTotalItems,
        categoryLoading,
        added,
        totalItems,
        addStatus,
        seller,
        products,
        filters,
        errorMsg,
        meLiData,
        meLiShortcuts,
        loading,
        sideToggle,
        port,
        url,
        fav
    }

    return (
        <DataContext.Provider value={value} props={props}>
            {loading ? <Loader /> : children}
        </DataContext.Provider>
    )
}

