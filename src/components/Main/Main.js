import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Filter from './Filter/Filter'
import List from './List/List'
import Photo from './Photo/Photo'

import { getCategoriesList, getIngredientsList, getCocktailsByCat, getCocktailsByIngrs,  getCocktailById } from '../../services/cocktailsApi'

import { filterListByIngrs } from '../../utils/utils'

import './Main.css'

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      categoriesList: [],
      category: '',
      ingredientsList: [],
      ingredients: [],
      cocktailsList: [],
      cocktailId: 0,
      cocktail: {}
    }
  }
  async componentWillMount () {
    const categoriesList = await getCategoriesList()
    const ingredientsList = await getIngredientsList()
    this.setState({
     categoriesList: categoriesList,
     ingredientsList: ingredientsList
    })

  }

  handleCategoryOnChange = async event => {
    const category = await event.target.value
    this.setState({
      category: category
    }, () => this.cocktailsByCat() )
  }

  handleIngredientOnChange = event => {
    const ingredient = event.target.value
    if (this.state.ingredients.includes(ingredient)) return
    this.setState({
      ingredients: [...this.state.ingredients, ingredient]
    }, () => this.cocktailsByIngrs(ingredient) )
  }

  handleCocktailOnClick = async event => {
    const cocktailOnClick = event.target
    const cocktailId = cocktailOnClick.getAttribute('data-cocktailid')
    await this.setState({
      cocktailId: cocktailId
    })
    this.cocktailById() 
  }

  handleReset = () => {
    this.setState({
      category: '',
      ingredients: [],
      cocktailsList: [],
      cocktailId: 0,
      cocktail: {}
    })
  }

  async cocktailsByCat () {
    const cat = this.state.category
    const cocktailsListByCat = await getCocktailsByCat(cat)
    this.setState({
        ingredients: [],
        cocktailsList: cocktailsListByCat
    })
  }

  async cocktailsByIngrs (ingr) {
    const list = this.state.cocktailsList || []
    const listByIngr = await getCocktailsByIngrs(ingr)
    const cocktailsList = await filterListByIngrs(list, listByIngr)
    
    // Remove ingredients and category when no cocktails found
    let ingredients
    let category
    if (cocktailsList.length > 0) {
      ingredients = this.state.ingredients
      category = this.state.category
    } else {
      ingredients = []
      category = ''
    }
    
    this.setState({
        cocktailsList: cocktailsList,
        ingredients: ingredients,
        category: category
    })
  }

  async cocktailById () {
    const cocktailId = this.state.cocktailId
    const cocktail = await getCocktailById(cocktailId)
    this.setState({
      cocktail: cocktail
    })
  }

  render () {
    return (
      <section className='cocktails'>
        <Container fluid>
          <Row>
            <Col xs='12' sm='5' md='5' lg='3'>
              <Filter
              categories={this.state.categoriesList}
              category={this.handleCategoryOnChange}
              selectedCat={this.state.category}
              ingredients={this.state.ingredientsList}
              selectIngr={this.handleIngredientOnChange}
              selectedIngr={this.state.ingredients}
              reset={this.handleReset}
              />
            </Col>
            <Col xs='12' sm='7' md='7' lg='5'>
              <List
              cocktails={this.state.cocktailsList}
              select={this.handleCocktailOnClick}
              />
            </Col>
            <Col xs='12' sm='12' md='12' lg='4'  className='pr-0'>
              <Photo cocktail={this.state.cocktail} />
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default Main
