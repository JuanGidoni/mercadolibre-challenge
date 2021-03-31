import { useState } from 'react'
import MenuList from '../../molecules/MenuList'
import MenuSearch from '../../molecules/MenuSearch'
import Button from '../../atoms/Button'
import { Link } from 'react-router-dom'
import { useDataContext } from '../../settings/DataContext'

const MenuContainer = () => {

    const { setLoading, sideToggle, setSideToggle, meLiData, getResults } = useDataContext()
    const [inputValue, setInputValue] = useState('')

    return (
        <div className="container">
            <div className="d-flex flex-column flex-grow-1 pt-2 h-100">
                <div className="first-menu">
                    <MenuSearch
                        logo={meLiData.header.logo}
                        searchPlaceHolder={meLiData.header.search}
                        icon={meLiData.header.ad_image}
                        sideToggle={sideToggle}
                        setSideToggle={setSideToggle}
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        setLoading={setLoading}
                        getResults={getResults} />
                </div>
                <div className="second-menu">
                    <MenuList profile={meLiData.header.profile} items={meLiData.header.links && meLiData.header.links.length > 0 ? meLiData.header.links : 'No items set'} sideToggle={sideToggle} setSideToggle={setSideToggle} />
                </div>

                <div className={`sidebar-menu h-100 d-flex flex-column justify-content-center ${sideToggle === true ? 'open' : ''} d-md-none`}>
                    <Button typeBtn="withClick" clickFunction={() => setSideToggle(!sideToggle)} className="btn text-Close mb-3 text-center"> Close Menu</Button>
                    {meLiData.header.links && meLiData.header.links.length > 0 ? meLiData.header.links.map(
                        (v, i) => <Link key={i} onClick={() => setSideToggle(!sideToggle)} to="/" className="btn text-center text-sideMenu">{v}</Link>
                    ) : 'No menu items'}
                </div>
            </div>
        </div>
    )
}

export default MenuContainer
