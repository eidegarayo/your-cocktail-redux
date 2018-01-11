/* http://www.thecocktaildb.com/api.php
** Filtrado por ingredientes
** http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin
** Filtrado por categoría
** http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink
** Detalles por id
** http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=13060
** Lista de ingredientes
** http://www.thecocktaildb.com/api/json/v1/1/list.php?i=list
** Lista de categorias
** http://www.thecocktaildb.com/api/json/v1/1/list.php?c=list
** Imagenes
** http://www.thecocktaildb.com/images/ingredients/ice.png
 */

const apiBaseUrl = 'http://www.thecocktaildb.com/api/json/v1/1/'
const categoriesListUrl = `${apiBaseUrl}list.php?c=list`
const ingredientsListUrl = `${apiBaseUrl}list.php?i=list`

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

export async function getCocktailsList (cat, ingr) {
  let cocktailsList = []

  const category = cat.replace(' ', '_')
  const ingredients = ingr.map(ingr => ingr.replace(' ', '_'))

  if (category) {
    const getCocktailsListByCat = await fetch(`http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)
    const cocktailsListByCat = await getCocktailsListByCat.json()
    cocktailsList = cocktailsListByCat
  }

  if (ingredients.length > 0) {
    let cocktailsListByIngs = {}

    for (let i = 0; i < ingredients.length; i++) {
      let ingQuery = `i=${ingredients[i]}`
      const getCocktailsByIngs = await fetch(`http://www.thecocktaildb.com/api/json/v1/1/filter.php?${ingQuery}`)
      const cocktailsByIngs = await getCocktailsByIngs.json()
      cocktailsListByIngs = {...cocktailsListByIngs, cocktailsByIngs}        
    }
    cocktailsList = cocktailsListByIngs.cocktailsByIngs
  }
  return cocktailsList
}
