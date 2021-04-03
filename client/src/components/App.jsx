import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// Import Data Provider
import { DataProvider } from './settings/DataContext'
// Custom Componentes imports
import Home from './pages/Home'
import MenuContainer from './organisms/MenuContainer'
import Offers from './organisms/Offers'
import Footer from './organisms/Footer'
import ProductBox from './pages/ProductBox'
import Categories from './pages/Categories'
import Favorites from './pages/Favorites'
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
            <MenuContainer />
          </div>
          <div className="ofertas-meli h-100 container-lg">
            <Offers />
          </div>

          <div className="container-fluid home">
            <div className="container">
              <div className="row pt-4">

                <div className="col-12">
                  <Switch>
                    <Route
                      exact
                      path='/'>
                      <Home />
                    </Route>
                    <Route
                      exact
                      path='/product/:id'>
                      <ProductBox />
                    </Route>
                    <Route
                      exact
                      path='/categories/:id'>
                      <Categories />
                    </Route>
                    <Route
                      exact
                      path='/favorites'>
                      <Favorites />
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
          <Footer />
        </DataProvider>
      </Router>
    </div>
  )
}

export default App
