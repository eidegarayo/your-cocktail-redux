import React from 'react'

import './Photo.css'

const Photo = (props) => {
  if (props.cocktail[0]) {
    const cocktail = props.cocktail[0]
    return (
      <div className='cocktail-detail'>
        <img className='cocktail-img img-fluid' src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
        <div className='cocktail-description'>
          <h3>{cocktail.strDrink}</h3>
          <hr />
          <p>{cocktail.strInstructions}</p>
        </div>
      </div>
    )
  } else {
    return (
      <div className='cocktail-detail'>
        <img className='cocktail-img img-fluid' src='http://www.thecocktaildb.com/images/media/drink/2t9r6w1504374811.jpg' alt='cocktail' />
        <div className='cocktail-description'>
          <h3>YOUR COCKTAIL</h3>
          <hr />
          <p className='lead'>Find the moment</p>
        </div>
      </div>
    )
  }
}

export default Photo
