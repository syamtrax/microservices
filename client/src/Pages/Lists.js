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
                            data.map(({id, product_name, price, rating, location, sold}, index) =>(
                                <tr key={id}>
                                    <td>{ index+1}</td>
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
      </div>
  )
}

export default Lists