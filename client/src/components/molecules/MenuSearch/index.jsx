import Image from '../../atoms/Image'
import Input from '../../atoms/Input'
import searchIcon from '../../assets/search.png'
import miniLogo from '../../assets/mini_logo.png'
import menuIcon from '../../assets/menu.png'
import Button from '../../atoms/Button'
import { Link, useHistory } from 'react-router-dom'

const MenuSearch = ({ logo, searchPlaceHolder, icon, sideToggle, setSideToggle, inputValue, setInputValue, setLoading, getResults }) => {
    const history = useHistory()

    const searchProducts = async (e) => {

        try {
            setLoading(true)
            getResults(e)
            setInputValue('')
            history.push("/")
        } catch (error) {
            console.log(error)
        }
    }
    const handleEnter = (e, value) => {
        if (e.key === "Enter") {
            searchProducts(value)
        }
    }

    return (
        <div className="d-flex flex-md-fill flex-row p-1 align-items-md-center justify-content-md-center">
            <div className="first-menu-mobile d-flex justify-content-center align-items-center pl-4 pl-md-0">
                <Link to="/">
                    <Image src={miniLogo} className="menu-meli-miniLogo" />
                </Link>
            </div>
            <Link to="/">
                <Image src={logo} className="menu-meli-logo" />
            </Link>
            <div className="seachBar d-flex flex-fill">
                <Input placeholder={searchPlaceHolder} className="w-100 ml-5 menu-meli-search" setInputValue={setInputValue} inputValue={inputValue} onKeyDown={(e) => handleEnter(e, inputValue)} />
                <div className="icon d-flex h-100 justify-content-center align-items-center p-3 bg-white cursor-pointer" onClick={() => searchProducts(inputValue)}>
                    <img src={searchIcon} alt={searchPlaceHolder} className="icon-search" />
                </div>
            </div>
            <div className="d-flex align-items-md-center justify-content-md-center align-content-end">
                <Image src={icon} className="menu-meli-ad" />
                <Button type="sideMenu" clickFunction={() => setSideToggle(!sideToggle)} className="d-block d-md-none btn align-content-end">
                    <Image src={menuIcon} className="icon-search" />
                </Button>
            </div>
        </div>
    )
}

export default MenuSearch
