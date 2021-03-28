import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import MenuContainer from './organisms/MenuContainer'
import Offers from './organisms/Offers'
import Data from './settings/data.json'
import './templates/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Products from './pages/Products'
import Categories from './pages/Categories'
import E404 from './pages/E404'

const App = () => {
  const URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost'
  const PORT = process.env.REACT_APP_BACKEND_PORT || 5000

  const [products, setProducts] = useState([])
  const [filters, setFilters] = useState([])
  const [errorMsg, setErrorMsg] = useState(null)

  const getResults = async () => {
    try {
      const results = await fetch(`${URL}:${PORT}/v1/`)
      const response = await results.json()
      setProducts(response)
    } catch (error) {
      setErrorMsg('Error getting the results from backend...')
    }
  }

  const getFilters = async () => {
    try {
      const results = await fetch(`${URL}:${PORT}/v1/categories`)
      const response = await results.json()
      setFilters(response)
    } catch (error) {
      setErrorMsg('Error getting the filters from backend...')
    }
  }

  useEffect(() => {
    const getData = () => {
      getResults()
      getFilters()
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
          />
        </div>
        <div className="ofertas-meli h-100 container">
          <Offers offersData={Data.shortcuts} title={Data.title} subtitle={Data.subtitle} />
        </div>

        <div className="container-fluid home">
          <div className="container">
            <div className="row pt-4">
              {errorMsg && <div className="alert alert-danger w-100">{errorMsg}</div>}
              <div className="col-3 pr-0 pl-0">
                <ul className="d-flex flex-column w-100 justify-content-center align-items-start">
                  {filters && filters.length > 0 ? filters.map(
                    (v, i) => (
                      <Link key={i} to={`/categories/${v.id}`} className="text-dark"> {v.name} </Link>
                    )
                  ) : 'No filters found'}
                </ul>
              </div>

              <div className="col-9 pr-0 pl-0">
                <Switch>
                  <Route
                    exact
                    path='/'>
                    <Home products={products} />
                  </Route>
                  <Route
                    exact
                    path='/product/:id'>
                    <Products products={products} />
                  </Route>
                  <Route
                    exact
                    path='/categories/:id'>
                    <Categories url={URL} port={PORT} setProducts={setProducts} setErrorMsg={setErrorMsg} products={products} />
                  </Route>
                  <Route
                    exact
                    path='*'>
                    <E404 />
                  </Route>

                </Switch>
              </div>

            </div>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
