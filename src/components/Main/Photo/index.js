import React from 'react'
import { connect } from 'react-redux'

import { cocktailIngrs } from '../../../utils'

import './Photo.css'

const Photo = props => {
  if (props.cocktail[0]) {
    const cocktail = props.cocktail[0]
    const ingredients = cocktailIngrs(cocktail)
    return (
      <div className='cocktail-detail'>
        <img className='cocktail-img img-fluid' src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
        <div className='cocktail-desc'>
          <div className='cocktail-desc-text mb-5'>
            <h3>{cocktail.strDrink}</h3>
            <hr />
            <p>{cocktail.strInstructions}</p>
          </div>
        </div>
        <div className='cocktail-ingrs'>
          <ul>
            {
              ingredients.map((ingr, i) => <li key={i}>{ingr}</li>)
            }
          </ul>
        </div>
      </div>
    )
  } else {
    return (
      <div className='cocktail-detail'>
        <img className='cocktail-img img-fluid' src='http://www.thecocktaildb.com/images/media/drink/2t9r6w1504374811.jpg' alt='cocktail' />
        <div className='cocktail-desc'>
          <div className='cocktail-desc-text mb-5'>
            <h3>YOUR COCKTAIL</h3>
            <hr />
            <p className='lead'>Find the moment</p>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    cocktail: state.cocktail
  }
}

export default connect(mapStateToProps)(Photo)
