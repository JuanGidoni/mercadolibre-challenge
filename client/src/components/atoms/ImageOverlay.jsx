import { FaHeart } from 'react-icons/fa'

const ImageOverlay = () => {
    return (
        <div className="card-img-overlay d-flex justify-content-end">
            <button className="card-link text-danger like">
                <FaHeart />
            </button>
        </div>
    )
}

export default ImageOverlay
