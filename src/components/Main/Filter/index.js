import React from 'react'

import ByCategory from './ByCategory'
import ByIngredients from './ByIngredients'
import Reset from './Reset'

import './Filter.css'

const Filter = () => (
  <div className='cocktails-filters mt-5 pr-2'>
    <h3 className='mb-4'>SEARCH</h3>
    <Reset />
    <ByCategory />
    <ByIngredients />
  </div>
)

export default Filter
