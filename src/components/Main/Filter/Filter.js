import React from 'react'
import ByCategory from './ByCategory'

import './Filter.css'

const Filter = (props) => {
  return (
    <div className='cocktails-filters mt-5 pr-2'>
      <h3 className='mb-4'>SEARCH</h3>
      <ByCategory categories={props.categories} select={props.select} />
      <h3>Find cocktail with these ingredients</h3>
    </div>
  )
}

export default Filter
