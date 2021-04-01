const Loader = () => {
    return (
        <div className="w-100 h-100 d-flex justify-content-center align-items-center loader-box">
        <div className="spinner-border text-meli" role="status">
            <span className="sr-only" data-testid="__test_loader">Loading...</span>
        </div>
        </div>
    )
}

export default Loader
