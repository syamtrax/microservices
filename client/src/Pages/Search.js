import {useState} from 'react';

const Search = () => { 
    const [search, setSearch] = useState('nice');

    function handleChange(e) {
        setSearch(e.value);
    }
    function handleSubmit(e) {
        e.preventDefault()
        console.log(search)
    }


    return (
        <div>
            <h1>Search</h1>
            <form onSubmit={handleSubmit}>
            <input value={search} onChange={handleChange}></input>
            <input type="submit" value="search"/>
            </form>
            
        </div>
    );
}

export default Search