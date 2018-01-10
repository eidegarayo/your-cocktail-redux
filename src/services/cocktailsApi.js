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

const apiUrlBase = 'http://www.thecocktaildb.com/api/json/v1/1/'
const imgUrlBase = 'http://www.thecocktaildb.com/images/'
const ingredientsListUrl = 'http://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'

export const ingredientsList = () => {
  fetch(ingredientsListUrl)
  .then((response) => {
    return response.json()
  })
}
