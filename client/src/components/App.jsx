import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom'
// Custom Componentes imports
import Home from './pages/Home'
import MenuContainer from './organisms/MenuContainer'
import Offers from './organisms/Offers'
import Data from './settings/data.json'
import Products from './pages/Products'
import Categories from './pages/Categories'
import E404 from './pages/E404'
import Loader from './atoms/Loader'
// CSS imports
import './templates/App.css'
import './templates/Menu.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => {
  const URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost'
  const PORT = process.env.REACT_APP_BACKEND_PORT || 5000

  const [products, setProducts] = useState([])
  const [filters, setFilters] = useState([])
  const [errorMsg, setErrorMsg] = useState(null)
  const [loading, setLoading] = useState(false)
  const [sideToggle, setSideToggle] = useState(false)

  const getResults = async () => {
    setLoading(true)
    try {
      const results = await fetch(`${URL}:${PORT}/v1/`)
      const response = await results.json()
      setProducts(response)
      setLoading(false)
    } catch (error) {
      setErrorMsg('Error getting the results from backend...')
    }
  }

  const getFilters = async () => {
    setLoading(true)
    try {
      const results = await fetch(`${URL}:${PORT}/v1/categories`)
      const response = await results.json()
      setFilters(response)
    } catch (error) {
      setErrorMsg('Error getting the filters from backend...')
    }
  }

  useEffect(() => {
    const getData = async () => {
      if(products && products.length === 0){
        setLoading(true)
        getResults()
        getFilters()
      }
    }
    return getData()
  }, [])

  return (
    <div className="App">
      <Router>
        <div className="menu-meli h-100">
          <MenuContainer
            items={Data.header.links}
            logo={Data.header.logo}
            searchPlaceHolder={Data.header.search}
            icon={Data.header.ad_image}
            profile={Data.header.profile}
            setProducts={setProducts}
            getResults={getResults}
            setLoading={setLoading}
            setSideToggle={setSideToggle}
            sideToggle={sideToggle}
          />
        </div>
        <div className="ofertas-meli h-100 container-lg">
          <Offers offersData={Data.shortcuts} title={Data.title} subtitle={Data.subtitle} />
        </div>

        <div className="container-fluid home">
          <div className="container">
            <div className="row pt-4">
              {errorMsg && <div className="alert alert-danger w-100">{errorMsg}</div>}

              {loading ? <Loader /> :
                <div className="col-12">
                  <Switch>
                    <Route
                      exact
                      path='/'>
                      <Home products={products} filters={filters} setLoading={setLoading} />
                    </Route>
                    <Route
                      exact
                      path='/product/:id'>
                      <Products products={products} />
                    </Route>
                    <Route
                      exact
                      path='/categories/:id'>
                      <Categories products={products} setLoading={setLoading} url={URL} port={PORT} setErrorMsg={setErrorMsg} setProducts={setProducts} filters={filters} />
                    </Route>
                    <Route
                      exact
                      path='*'>
                      <E404 />
                    </Route>
                  </Switch>
                </div>
              }
            </div>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
