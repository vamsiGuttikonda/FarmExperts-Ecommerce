import React from 'react'
import CategoryList from './CategoryList'




const CategorySIdebar = ({categories}) => {
  
  return (
    <div>
      <h1>categories</h1>
      {
        categories.map((Category,index)=>(
            <CategoryList
            key={index}
                productname={Category.productName}
                subCategories={Category.subCategories}
            />
        ))
      }     
    </div>
  )
}

export default CategorySIdebar
