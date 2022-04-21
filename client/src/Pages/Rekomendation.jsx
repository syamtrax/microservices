import React, { useState, useEffect } from 'react'


function Recommendation(){
    const [data, setData] = useState([])

    useEffect(() => {
        console.log()
        fetch("/rec").then(
            res => res.json()
        ).then(
            data => {
                setTimeout(() => setData(data), 1000)
            }
        )
    }, [])
    
    return(
        <div>
            <h1 className='text-2xl font-bold text-center mb-10'>Product Recommendation</h1>
            <div className='flex table-containter max-w-full justify-center overflow-auto h-[761px]'>
                {data.length > 0 && <table id="products-tb" className='animate-fade-in display table-auto border-separate w-full'>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama Product</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Sold</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            data.map(({ id, product_name, price, rating, location, sold }, index) => (
                                <tr key={id} className={`${index % 2 ? 'bg-gray-100' : 'bg-white'}
                                gap-4`}>
                                    <td className='text-center'>{index + 1}</td>
                                    <td className='py-3 px-2 ' > {product_name} </td>
                                    <td className='py-3 px-2 text-center' >{price}</td>
                                    <td className='py-3 px-2 text-center' >{rating}</td>
                                    <td className='py-3 px-2 text-center' >{sold}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>}

                {data.length === 0 &&
                    <div className='flex flex-col items-center animate-fade-in-up'>
                        <h1 className=' text-xl font-bold mb-2'>Loading</h1>
                        <svg role="status" class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg></div>}
            </div>
      </div>
  )
}

export default Recommendation