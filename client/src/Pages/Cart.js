
import $ from 'jquery'

// eslint-disable-next-line no-empty-pattern
const Cart = ({ }) => {
    const cart = [
        { "id": 990, "product_name": "Cabbage - Red", "price": "$59.94", "rating": 4.3, "location": "Coyah", "sold": 50 },
        { "id": 991, "product_name": "Table Cloth 72x144 White", "price": "$94.36", "rating": 4.8, "location": "Houping", "sold": 68 },
        { "id": 992, "product_name": "Pasta - Fettuccine, Egg, Fresh", "price": "$85.14", "rating": 3.1, "location": "Mariatana", "sold": 57 },
        { "id": 993, "product_name": "Lemonade - Kiwi, 591 Ml", "price": "$59.79", "rating": 4.9, "location": "Hongmei", "sold": 32 },
        { "id": 994, "product_name": "Beef - Tenderloin - Aa", "price": "$33.75", "rating": 3.0, "location": "Yunji", "sold": 28 },
        { "id": 995, "product_name": "Basil - Dry, Rubbed", "price": "$21.33", "rating": 4.7, "location": "Belém", "sold": 48 },
        { "id": 996, "product_name": "Cookies - Oreo, 4 Pack", "price": "$52.57", "rating": 3.6, "location": "Muramatsu", "sold": 104 },
        { "id": 997, "product_name": "Chicken - Ground", "price": "$97.82", "rating": 3.6, "location": "Ołpiny", "sold": 65 },
        { "id": 998, "product_name": "Steam Pan - Half Size Deep", "price": "$44.37", "rating": 4.9, "location": "Arras", "sold": 15 },
        { "id": 999, "product_name": "Lamb - Pieces, Diced", "price": "$60.72", "rating": 3.8, "location": "Trollhättan", "sold": 60 },
    ]


    return <>
        <div>
            <h1>Your Cart</h1>
            <table id="products-tb" className='display'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama Product</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>City</th>
                        <th>Sold</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map(({ id, product_name, price, rating, location, sold }, index) => (
                            <tr key={id}>
                                <td>{index + 1}</td>
                                <td > {product_name} </td>
                                <td >{price}</td>
                                <td >{rating}</td>
                                <td >{location}</td>
                                <td >{sold}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        <form action="/checkout" method="POST">
            <input type="hidden" name="cart" value={cart.map(item => item.id)} />
            <input type="submit" value="checkout" />
            </form>
    </>
}

export default Cart