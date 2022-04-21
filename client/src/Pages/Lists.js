import React, {useState, useEffect} from 'react'

function Lists(){
    const [data, setData] = useState([{}])

    useEffect(() => {
        console.log()
        fetch("/products").then(
            res => res.json()
        ).then(
            data => {
                setData(data)
            }
        )
        console.log(data)
    })
    return(
        <div>
            <div>
                test
            </div>
            {(typeof data === 'undefined')? (
                <p>Loading ... </p>
            ): (
            data.map(({id, title, price, rating, location, sold}) =>(
                <>
                    <h2 key={id}> {title} </h2>
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