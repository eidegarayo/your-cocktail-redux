import React from 'react'
import { Media } from 'reactstrap'

import './List.css'

const List = (props) => {
  return (
    <div className='cocktails-list mt-5'>
      <h3 className='mb-4'>COCKTAILS</h3>
      {
        (props.cocktails)
        ? props.cocktails.map((cocktail, i) => {
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
        : <div>Choose category or ingredients to find your perfect cocktail</div>
      }
    </div>
  )
}

export default List
