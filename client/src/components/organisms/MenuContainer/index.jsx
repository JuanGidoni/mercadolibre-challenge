import { useState } from 'react'
import MenuList from '../../molecules/MenuList'
import MenuSearch from '../../molecules/MenuSearch'
import Button from '../../atoms/Button'
import { Link } from 'react-router-dom'

const MenuContainer = ({ items, logo, searchPlaceHolder, icon, profile, setProducts, getResults, setLoading, sideToggle, setSideToggle }) => {
    
    const [inputValue, setInputValue] = useState('')

    return (
        <div className="container">
            <div className="d-flex flex-column flex-grow-1 pt-2 h-100">
                <div className="first-menu">
                <MenuSearch 
                logo={logo} 
                searchPlaceHolder={searchPlaceHolder} 
                icon={icon} 
                sideToggle={sideToggle} 
                setSideToggle={setSideToggle} 
                setProducts={setProducts} 
                inputValue={inputValue} 
                setInputValue={setInputValue} 
                getResults={getResults}
                setLoading={setLoading} />
                </div>
                <div className="second-menu">
                <MenuList profile={profile} items={items && items.length > 0 ? items : 'No items set'}  sideToggle={sideToggle} setSideToggle={setSideToggle} /> 
                </div>
                
            <div className={`sidebar-menu h-100 d-flex flex-column justify-content-center ${sideToggle === true ? 'open' : ''} d-md-none`}>
                <Button type="sideMenu" onClick={() => setSideToggle(!sideToggle)} className="btn text-Close mb-3 text-center"> Close Menu</Button>
                {items && items.length > 0 ? items.map(
                    (v,i) => <Link key={i} onClick={() => setSideToggle(!sideToggle)} to="/" className="btn text-center text-sideMenu">{v}</Link>
                ): 'No menu items'}
            </div>
            </div>
        </div>
    )
}

export default MenuContainer
