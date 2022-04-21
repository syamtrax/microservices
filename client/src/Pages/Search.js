import { useState } from 'react';

const Search = () => {
    const [search, setSearch] = useState('');

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
    }


    return (
        <div>
            <h1>Search</h1>
            <form onSubmit={handleSubmit}>
                <input value={search} onChange={handleChange}></input>
                <input type="submit" value="search" />
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
            {searchResult.length === 0 && <div>no products found</div>}
        </div>
    );
}

export default Search