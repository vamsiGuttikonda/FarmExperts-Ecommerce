
import React from 'react';

const CategoryList = ({ key,productname,subCategories }) => {
  return (
   <div className=' dropdown categpries-inner-component'>
    <h2>{productname}</h2>
    <div className='categories-inner-subcategories-list'>
        <ul>
          {
            subCategories.map((subcategory,index)=>(
              <li key={index}>{subcategory}</li>
            ))
          }
        </ul>
    </div>

   </div>
  );
};

export default CategoryList;
