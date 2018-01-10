import React from 'react'
import { Media } from 'reactstrap'

import './List.css'

const List = (props) => {
  let category
  (typeof props.category === 'string') ? category = props.category : category = 'select one'
  console.log(props.cocktails)
  return (
    <div className='cocktails-list mt-5'>
      <h3 className='mb-4'>COCKTAILS</h3>
      {
        (props.cocktails.drinks)
        ? props.cocktails.drinks.map((cocktail, i) => {
          if (cocktail.strDrinkThumb !== null) {
            return (
              <Media key={i} className='mb-4' >
                <Media object className='mr-2 img-thumbnail' src={cocktail.strDrinkThumb} onClick={props.select} data-cocktailid={cocktail.idDrink} />
                <Media body>
                  <Media heading onClick={props.select} data-cocktailid={cocktail.idDrink}>
                    {cocktail.strDrink}
                  </Media>
                </Media>
              </Media>
            )
          }
        })
        : <div>lista vacia </div>
      }
    </div>
  )
}

export default List
