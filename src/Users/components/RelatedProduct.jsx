import React, { useContext, useEffect, useState } from 'react'
import ResponseContext from '../../ContextApi/responseContext';
import Card from './Card';

function RelatedProduct({ items }) {

    const { response } = useContext(ResponseContext)
    const [related, setRelated] = useState([])
    useEffect(() => {
        if (response.length > 0) {
            let productCopy = response
            productCopy = productCopy.filter(item => items === item.color)
            // productCopy=productCopy.filter(item=>colors=item.color)
            setRelated(productCopy.slice(0, 5));



        }
    }, [response, items])

    return (
        <div className='my-24'>
            <div className='grid gap-2 lg:grid-cols-5 md:grid-cols-3 grid-cols-2'>
                
                    {
                        related.map((pro) => (
                            <Card item={pro} />
                        ))
                    }
                
            </div>

        </div>
    )
}

export default RelatedProduct
