import axios from 'axios'

export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_INGREDIENTS = 'GET_INGREDIENTS'
export const SELECT_CATEGORY = 'SELECT_CATEGORY'
export const SELECT_INGREDIENT = 'SELECT_INGREDIENT'
export const COCKTAILS_LIST_BY_CAT = 'COCKTAILS_LIST_BY_CAT'
export const COCKTAIL_LIST_BY_INGREDIENT = 'COCKTAIL_LIST_BY_INGREDIENT'
export const COCKTAIL_DETAIL = 'COCKTAIL_DETAIL'
export const RESET = 'RESET'

const apiBaseUrl = 'http://www.thecocktaildb.com/api/json/v1/1/'
const categoriesListUrl = `${apiBaseUrl}list.php?c=list`
const ingredientsListUrl = `${apiBaseUrl}list.php?i=list`
const listByCatBaseUrl = `${apiBaseUrl}filter.php?c=`
const listByIngrBaseUrl = `${apiBaseUrl}filter.php?i=`
const cocktailByIdBaseUrl = `${apiBaseUrl}lookup.php?i=`

export function getCatetoriesList () {
  const categories = axios.get(categoriesListUrl)

  return {
    type: GET_CATEGORIES,
    payload: categories
  }
}

export function getIngredientsList () {
  const ingredients = axios(ingredientsListUrl)

  return {
    type: GET_INGREDIENTS,
    payload: ingredients
  }
}

export function selectCategory (category) {
  return {
    type: SELECT_CATEGORY,
    payload: category
  }
}

export function selectIngredient (ingredient) {
  return {
    type: SELECT_INGREDIENT,
    payload: ingredient
  }
}

export function getCocktailsListByCat (category) {
  const cat = category.replace(' ', '_')
  const cocktails = axios(`${listByCatBaseUrl}${cat}`)
  return {
    type: COCKTAILS_LIST_BY_CAT,
    payload: cocktails
  }
}

export async function getCocktailsByIngr (ingredient) {
  const ingr = ingredient.replace(' ', '_')
  const cocktails = await axios(`${listByIngrBaseUrl}${ingr}`)
  return cocktails.data.drinks
}

export function filterListByIngrs (list, listByIngr) {
  let cocktails = []
  if (list.length < 1) {
    cocktails = listByIngr
  } else {
    for (let i = 0; i < list.length; i++) {
      for (let index = 0; index < listByIngr.length; index++) {
        if (list[i].idDrink === listByIngr[index].idDrink) {
          cocktails.push(list[i])
        }
      }
    }
  }
  return {
    type: COCKTAIL_LIST_BY_INGREDIENT,
    payload: cocktails
  }
}

export function getCocktailById (cocktailId) {
  const cocktail = axios(`${cocktailByIdBaseUrl}${cocktailId}`)
  return {
    type: COCKTAIL_DETAIL,
    payload: cocktail
  }
}

export function reset () {
  return {
    type: RESET
  }
}
