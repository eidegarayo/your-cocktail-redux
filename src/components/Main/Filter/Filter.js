import React from 'react'
import { Button } from 'reactstrap'

import ByCategory from './ByCategory'
import ByIngredients from './ByIngredients'

import './Filter.css'

const Filter = props => {
  return (
    <div className='cocktails-filters mt-5 pr-2'>
      <h3 className='mb-4'>SEARCH</h3>
      <Button onClick={props.reset} className='active text-white'>reset</Button>
      <ByCategory categories={props.categories} category={props.category} />
      <ul>
        {
          props.selectedCat ? <li>{props.selectedCat}</li> : <li className='empty' />
        }
      </ul>
      <ByIngredients ingredients={props.ingredients} selectIngr={props.selectIngr} />
      <ul>
        {
          props.selectedIngr.map((ingr, i) => <li key={i}>{ingr}</li>)
        }
      </ul>
    </div>
  )
}

export default Filter
