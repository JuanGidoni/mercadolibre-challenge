import Button from '../../atoms/Button'

const MenuList = ({ items, profile, sideToggle, setSideToggle }) => {
    return (
        <div className="d-flex flex-fill flex-row p-1 justify-content-between">
            <div className="position">

            </div>
            <div className="buttons d-none d-md-block">
                {items && items.length > 0 ? items.map((v, i) => (
                    <Button key={i} className="btn-menu-meli">{v}</Button>
                )) : 'MenuList is empty'}
            </div>
            <div className="account d-none d-md-block">
                <Button className="btn-menu-meli">{profile}</Button>
            </div>
        </div>
    )
}

export default MenuList
