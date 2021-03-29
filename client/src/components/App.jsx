import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// Import Data Provider
import { DataProvider } from './settings/DataContext'
// Custom Componentes imports
import Home from './pages/Home'
import MenuContainer from './organisms/MenuContainer'
import Offers from './organisms/Offers'
import Data from './settings/data.json'
import Products from './pages/Products'
import Categories from './pages/Categories'
import E404 from './pages/E404'
// CSS imports
import './templates/App.css'
import './templates/Menu.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => {

  return (
    <div className="App">
      <Router>
        <DataProvider>
        <div className="menu-meli h-100">
          <MenuContainer
            items={Data.header.links}
            logo={Data.header.logo}
            searchPlaceHolder={Data.header.search}
            icon={Data.header.ad_image}
            profile={Data.header.profile}
          />
        </div>
        <div className="ofertas-meli h-100 container-lg">
          <Offers />
        </div>

        <div className="container-fluid home">
          <div className="container">
            <div className="row pt-4">
              {/* {errorMsg && <div className="alert alert-danger w-100">{errorMsg}</div>} */}

              {/* {loading ? <Loader /> : */}
                <div className="col-12">
                  <Switch>
                    <Route
                      exact
                      path='/'>
                      {/* <Home products={products} filters={filters} setLoading={setLoading} /> */}
                      <Home />
                    </Route>
                    <Route
                      exact
                      path='/product/:id'>
                      {/* <Products products={products} /> */}
                      <Products />
                    </Route>
                    <Route
                      exact
                      path='/categories/:id'>
                      {/* <Categories products={products} setLoading={setLoading} url={URL} port={PORT} setErrorMsg={setErrorMsg} setProducts={setProducts} filters={filters} /> */}
                      <Categories />
                    </Route>
                    <Route
                      exact
                      path='*'>
                      <E404 />
                    </Route>
                  </Switch>
                </div>
              {/* } */}
            </div>
          </div>
        </div>
      </DataProvider>
      </Router>
    </div>
  )
}

export default App
