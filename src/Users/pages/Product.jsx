import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getspecific } from '../../services/All_Api';
import { BaseUrl } from '../../services/Base_Url';

function Product() {
    const { id } = useParams()
    console.log(id);
    const [data, setData] = useState([])

    useEffect(() => {
        getProduct()
    }, [])
    const getProduct = async () => {
        const res = await getspecific(id)
        // console.log(res.data);
        setData(res.data);
        console.log(data);


    }

    return (
        <div>
            <div className='grid gird-[1fr_1fr] grid-cols-1 lg:grid-col-2 md:grid-cols-2'>
                <div className='bg-red-200'>
                    <img src="https://m.media-amazon.com/images/I/719SkSU-PgL._SX695_.jpg" alt="" />
                </div>
                <div className='bg-yellow-300'>


                    <table>
                        <thead>
                            <tr>
                                <td>{data.name}</td>
                            </tr>
                            <tr>
                                <td>{data.description}</td>
                            </tr>
                            <tr>
                                <td>{data.gender}</td>
                            </tr>
                            <tr>
                                <td>{data.brand}</td>
                            </tr>
                            <tr>
                                <td>{data.color}</td>
                            </tr>
                            <tr>
                                <td>
                                    
                                        {data.size}
                                  
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Product
