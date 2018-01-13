/*  global fetch */
/* http://www.thecocktaildb.com/api.php */

const apiBaseUrl = 'http://www.thecocktaildb.com/api/json/v1/1/'
const categoriesListUrl = `${apiBaseUrl}list.php?c=list`
const ingredientsListUrl = `${apiBaseUrl}list.php?i=list`
const cocktailByIdBaseUrl = `${apiBaseUrl}lookup.php?i=`
const listByCatBaseUrl = `${apiBaseUrl}filter.php?c=`
const listByIngrBaseUrl = `${apiBaseUrl}filter.php?i=`

export async function getCategoriesList () {
  const getCategoriesList = await fetch(categoriesListUrl)
  const categoriesList = await getCategoriesList.json()
  return categoriesList.drinks
}

export async function getIngredientsList () {
  const getIngredientsList = await fetch(ingredientsListUrl)
  const ingredientsList = await getIngredientsList.json()
  return ingredientsList.drinks
}

export async function getCocktailsByCat (cat) {
  if (cat) {
    const category = cat.replace(' ', '_')
    const getCocktailsListByCat = await fetch(`${listByCatBaseUrl}${category}`)
    const cocktailsListByCat = await getCocktailsListByCat.json()
    return cocktailsListByCat.drinks
  }
}

export async function getCocktailsByIngrs (ingr) {
  const ingredients = ingr.replace(' ', '_')
  const getCocktailsByIngrs = await fetch(`${listByIngrBaseUrl}${ingredients}`)
  const cocktailsByIngrsDrinks = await getCocktailsByIngrs.json()
  return cocktailsByIngrsDrinks.drinks
}

export async function getCocktailById (cocktailId) {
  const getCocktailById = await fetch(`${cocktailByIdBaseUrl}${cocktailId}`)
  const cocktailById = await getCocktailById.json()
  return cocktailById.drinks
}
