import { Link } from 'react-router-dom'
import Button from '../../atoms/Button'

const MenuList = ({ items, profile }) => {

    const formatLinksURL = (e) => {
        let newLinkUrl = e.replace(/\s/g, '').toLowerCase()
        return newLinkUrl
    }
    return (
        <div className="d-flex flex-fill flex-row p-1 justify-content-between">
            <div className="position">

            </div>
            <div className="buttons d-none d-md-block">
                {items && items.length > 0 ? items.map((v, i) => (
                    <Link key={i} to={`/${formatLinksURL(v)}`} className="btn btn-menu-meli">{v}</Link>
                )) : 'MenuList is empty'}
            </div>
            <div className="account d-none d-md-block">
                <Link to="/profile" className="btn btn-menu-meli">{profile}</Link>
            </div>
        </div>
    )
}

export default MenuList
