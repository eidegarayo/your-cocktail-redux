import { combineReducers } from 'redux'
import categories from './categories'
import ingredients from './ingredients'
import category from './category'
import ingredient from './ingredient'
import cocktails from './cocktails'
import cocktail from './cocktail'

const rootReducer = combineReducers({
  categories,
  ingredients,
  category,
  ingredient,
  cocktails,
  cocktail
})

export default rootReducer
