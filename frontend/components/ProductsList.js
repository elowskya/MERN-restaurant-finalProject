import NextImage from "./Image"
import Link from "next/link"
import { useState } from "react"

const ProductsList = ({ products }) => {
  const [filter, setFilter] = useState("");
  return (
<>    
<span>
Search: &nbsp;
<input value={filter} onChange={(e)=>{setFilter(e.target.value)}} style={{ width: '75px', padding: '5px' }} /> 
</span>
<div className="m-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-8">
    {products.filter((product)=> product.title.toLowerCase().includes(filter.toLowerCase())).map((_product) => (
        <div
          key={_product.id}
          className="border rounded-lg bg-gray-100 hover:shadow-lg shadow-md"
        >
          <Link href={`/products/${_product.slug}`}>
            <a>
              <div className="w-full bg-white">
                <div className="rounded-t-lg pt-2 pb-2 w-1/2 mx-auto">
                  <NextImage media={_product.image} />
                </div>
              </div>
              <div className="pl-4 pr-4 pb-4 pt-4 rounded-lg">
                <h4 className="mt-1 font-semibold text-base leading-tight truncate text-gray-700">
                  {_product.title}
                </h4>
                <div className="mt-1 text-sm text-gray-700">
                  {_product.description}
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
    </>
  )
}

export default ProductsList
