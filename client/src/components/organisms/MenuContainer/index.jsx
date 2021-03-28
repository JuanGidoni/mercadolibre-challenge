import { useState } from 'react'
import MenuList from '../../molecules/MenuList'
import MenuSearch from '../../molecules/MenuSearch'
import Button from '../../atoms/Button'

const MenuContainer = ({ items, logo, searchPlaceHolder, icon, profile, setProducts }) => {
    
    const [sideToggle, setSideToggle] = useState(false)
    const [inputValue, setInputValue] = useState('')

    return (
        <div className="container">
            <div className="d-flex flex-column flex-grow-1 pt-2 h-100">
                <div className="first-menu">
                <MenuSearch logo={logo} searchPlaceHolder={searchPlaceHolder} icon={icon} sideToggle={sideToggle} setSideToggle={setSideToggle} setProducts={setProducts} inputValue={inputValue} setInputValue={setInputValue} />
                </div>
                <div className="second-menu">
                <MenuList profile={profile} items={items && items.length > 0 ? items : 'No items set'}  sideToggle={sideToggle} setSideToggle={setSideToggle} /> 
                </div>
                
            <div className={`sidebar-menu h-100 bg-dark ${sideToggle === true ? 'open' : ''} d-md-none`}>
                <Button type="sideMenu" onClick={() => setSideToggle(!sideToggle)} className="d-block d-md-none"> MENU</Button>
                <ul className="vertical menu">
                    <li><Button>Menu Item</Button></li>
                    <li><Button>Menu Item</Button></li>
                    <li><Button>Menu Item</Button></li>
                    <li><Button>Menu Item</Button></li>
                    <li><Button>Menu Item</Button></li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default MenuContainer
