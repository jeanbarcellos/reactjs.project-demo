import React from 'react'
import PageTile from 'core/components/Page/PageTile'
import PageContentDemo from 'core/components/Page/PageContentDemo'

const ProductsPage = () => {
  return (
    <div className='p-24 text-justify'>
      <PageTile>Products</PageTile>
      <PageContentDemo />
    </div>
  )
}

export default ProductsPage
