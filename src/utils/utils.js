export async function filterListByIngrs (list, listByIngr) {
  let cocktailsList = []

  if (list.length < 1) {
    cocktailsList = listByIngr
  } else {
    for (let i = 0; i < list.length; i++) {
      for (let index = 0; index < listByIngr.length; index++) {
        if (list[i].idDrink === listByIngr[index].idDrink) {
          cocktailsList.push(list[i])
        }
      }
    }
  }
  return cocktailsList
}

export function sortIngrsList (a, b) {
  if (a.strIngredient1 > b.strIngredient1) return 1
  if (a.strIngredient1 < b.strIngredient1) return -1
  return 0
}

export function sortCatList (a, b) {
  if (a.strCategory > b.strCategory) return 1
  if (a.strCategory < b.strCategory) return -1
  return 0
}
