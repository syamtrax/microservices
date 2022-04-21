import React, { useState, useEffect } from 'react'


function Lists(){
    const [data, setData] = useState([{}])

    useEffect(() => {
        console.log()
        fetch("/products").then(
            res => res.json()
        ).then(
            data => {
                setData(data.slice(0,100))
            }
        )
    }, [])
    
    return(
        <div>
            <div className='table-containter'>
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
                            data.map(({id, product_name, price, rating, location, sold}) =>(
                                <tr>
                                    <td  key={id}> {product_name} </td>
                                    <td key={id}>{price}</td>
                                    <td key={id}>{rating}</td>
                                    <td key={id}>{location}</td>
                                    <td key={id}>{sold}</td>
                                </tr>
                            ))
                            }
                    </tbody>
                </table>

            </div>

            {(typeof data === 'undefined')? (
                <p>Loading ... </p>
            ): (
            data.map(({id, product_name, price, rating, location, sold}) =>(
                <>
                    <h2 key={id}> {product_name} </h2>
                    <p key={id}>{price}</p>
                    <p key={id}>{rating}</p>
                    <p key={id}>{location}</p>
                    <p key={id}>{sold}</p>
                </>
            ))
            )}
      </div>
  )
}

export default Lists