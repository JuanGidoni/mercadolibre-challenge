import Parragraph from '../../atoms/Parragraph'
const OffersHeader = ({ title, subtitle }) => {
    return (
        <div className="p-2">
            <Parragraph titleType="h2">{title}</Parragraph>
            <Parragraph titleType="p">{subtitle}</Parragraph>
        </div>
    )
}

export default OffersHeader
