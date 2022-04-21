import { useState } from 'react';

const Search = () => {
    const [search, setSearch] = useState('');
    const [notFirstTime, setNotFirstTime] = useState(false);

    const [searchResult, setSearchResult] = useState([]);

    function handleChange(e) {
        setSearch(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault()
        console.log(search)
        fetch(`/search?name=${search}`).then(
            res => res.json()
        ).then(data => setSearchResult(data))

        setNotFirstTime(true)
    }


    return (
        <div className='flex justify-center flex-col'>
            <h1 className='text-2xl font-bold text-center'>Search Product</h1>
            <form onSubmit={handleSubmit} className="flex flex-row justify-center m-10">
                <input placeholder="search product" className='border-2 px-2 rounded-l-lg border-gray-500' value={search} onChange={handleChange}></input>
                <input className='border-2 rounded-r-lg border-gray-500 hover:cursor-pointer
                bg-gray-500 text-white' type="submit" value="search" />
            </form>

            {searchResult.length > 0 && <div className='table-containter'>
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
                            searchResult.map(({ id, product_name, price, rating, location, sold }, index) => (
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
            </div>}
            {searchResult.length === 0 && notFirstTime && <div className='text-center'>no products found</div>}
        </div>
    );
}

export default Search