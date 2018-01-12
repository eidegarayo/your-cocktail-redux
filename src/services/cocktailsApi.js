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

export async function getCocktailsByCat (list, cat) {
  let cocktailsList = list
  const category = cat.replace(' ', '_')

  const getCocktailsListByCat = await fetch(`${listByCatBaseUrl}${category}`)
  const cocktailsListByCatDrinks = await getCocktailsListByCat.json()
  const cocktailsListByCat = cocktailsListByCatDrinks.drinks

  if (cocktailsList.length < 1) {
    cocktailsList = cocktailsListByCat
  } else {
    let filteredCocktailsList = []
    for (let i = 0; i < cocktailsList.length; i++) {
      for (let index = 0; index < cocktailsListByCat.length; index++) {
        if (cocktailsList[i].idDrink === cocktailsListByCat[index].idDrink) {
          filteredCocktailsList.push(cocktailsList[i])
        }
      }
    }
    cocktailsList = filteredCocktailsList
  }
  return cocktailsList
}

export async function getCocktailsByIngrs (list, ingrs) {
  let cocktailsList = list
  const ingredients = ingrs.pop().replace(' ', '_')

  const getCocktailsByIngrs = await fetch(`${listByIngrBaseUrl}${ingredients}`)
  const cocktailsByIngrsDrinks = await getCocktailsByIngrs.json()
  const cocktailsByIngrs = cocktailsByIngrsDrinks.drinks

  if (cocktailsList.length < 1) {
    cocktailsList = cocktailsByIngrs
  } else {
    let filteredCocktailsList = []
    for (let i = 0; i < cocktailsList.length; i++) {
      for (let index = 0; index < cocktailsByIngrs.length; index++) {
        if (cocktailsList[i].idDrink === cocktailsByIngrs[index].idDrink) {
          filteredCocktailsList.push(cocktailsList[i])
        }
      }
    }
    cocktailsList = filteredCocktailsList
  }
  return cocktailsList
}

export async function getCocktailById (cocktailId) {
  const getCocktailById = await fetch(`${cocktailByIdBaseUrl}${cocktailId}`)
  const cocktailById = await getCocktailById.json()
  return cocktailById.drinks
}
