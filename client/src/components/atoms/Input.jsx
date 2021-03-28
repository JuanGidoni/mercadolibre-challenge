const Input = ({ placeholder, className, setInputValue }) => {
    return (
            <input placeholder={placeholder} className={className} onChange={(e) => setInputValue(e.target.value)} /> 
    )
}

export default Input
