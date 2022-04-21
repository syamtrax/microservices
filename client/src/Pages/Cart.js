
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

    const total_price =  cart.reduce((acc, curr) => acc + parseFloat(curr.price.slice(1)), 0)


    return <>
        <div>
        <table id="products-tb" className='animate-fade-in display table-auto border-separate w-full'>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama Product</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            cart.map(({ id, product_name, price, rating, location, sold }, index) => (
                                <tr key={id} className={`${index % 2 ? 'bg-gray-100' : 'bg-white'}
                                gap-4`}>
                                    <td className='text-center'>{index + 1}</td>
                                    <td className='py-3 px-2 ' > {product_name} </td>
                                    <td className='py-3 px-2 text-center' >{price}</td>
                                </tr>
                            ))
                    }
                    <tr >
                        <td colSpan={2} className="py-3 px-2 text-center font-bold">Total</td>
                        <td className="py-3 px-2 text-center font-bold">${total_price }</td>
                    </tr>
                    <tr >
                        <td colSpan={2} className="py-3 px-2 text-center font-bold"></td>
                        <td className="py-3 px-2 text-center font-bold"><input type="submit" value="checkout" className="ml-auto text-center bg-green-500 py-2 px-4 text-white font-bold rounded-lg hover:cursor-pointer" form="checkout"></input></td>
                    </tr>
                    
                    </tbody>
                </table>
        </div>
        <form action="/checkout" method="POST" className="flex" id="checkout" >
            <input type="hidden" name="cart" value={cart.map(item => item.id)} />
            
            </form>
    </>
}

export default Cart