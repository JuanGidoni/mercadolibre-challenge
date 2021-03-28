const PriceBox = ({
    price, original_price, className
}) => {

    function numberWithCommas(x) {
        if (!isNaN(x) && x % 1 !== 0) {
            return x
        } else if (!isNaN(x)) {
            return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
        } else {
            return false
        }
    }
    /* 
    function test(x, expect) {
        const result = numberWithCommas(x)
        const pass = result === expect
        console.log(`${pass ? "✓" : "ERROR ====>"} ${x} => ${result}`)
 
    } */

    return (
        <div className={className}>
            <p>$ {numberWithCommas(price)}</p>
        </div>
    )
}

export default PriceBox
