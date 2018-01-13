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
    console.log('componentWillMount')
    const categoriesList = await getCategoriesList()
    const ingredientsList = await getIngredientsList()
    this.setState({
     categoriesList: categoriesList,
     ingredientsList: ingredientsList
    })

  }

  handleCategoryOnChange = async event => {
    console.log('handleCategoryOnChange')
    const category = await event.target.value
    this.setState({
      category: category
    }, () => this.cocktailsByCat() )
  }

  handleIngredientOnChange = event => {
    console.log('handleIngredientOnChange')
    const ingredient = event.target.value
    this.setState({
      ingredients: [...this.state.ingredients, ingredient]
    }, () => this.cocktailsByIngrs(ingredient) )
  }

  handleCocktailOnClick = async event => {
    console.log('handleCocktailOnClick')
    const cocktailOnClick = event.target
    const cocktailId = cocktailOnClick.getAttribute('data-cocktailid')
    await this.setState({
      cocktailId: cocktailId
    })
    this.cocktailById() 
  }

  handleReset = () => {
    console.log('handleReset')
    this.setState({
      category: '',
      ingredients: [],
      cocktailsList: [],
      cocktailId: 0,
      cocktail: {}
    })
  }

  async cocktailsByCat () {
    console.log('cocktailsByCat')
    const cat = this.state.category
    const cocktailsListByCat = await getCocktailsByCat(cat)
    this.setState({
        ingredients: [],
        cocktailsList: cocktailsListByCat
    })
  }

  async cocktailsByIngrs (ingr) {
    console.log('cocktailsByIngrs')
    const list = this.state.cocktailsList || []
    const listByIngr = await getCocktailsByIngrs(ingr)
    const cocktailsList = await filterListByIngrs(list, listByIngr)
    
    let ingredients
    (cocktailsList.length > 0) ? ingredients = this.state.ingredients : ingredients = []
    
    this.setState({
        cocktailsList: cocktailsList,
        ingredients: ingredients
    })
  }

  async cocktailById () {
    console.log('cocktailById')
    const cocktailId = this.state.cocktailId
    const cocktail = await getCocktailById(cocktailId)
    this.setState({
      cocktail: cocktail
    })
  }

  render () {
    console.log(this.state.category)
    return (
      <section className='cocktails'>
        <Container fluid>
          <Row>
            <Col xs="12" sm="5" md='3'>
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
            <Col xs="12" sm="7" md='5'>
              <List
              cocktails={this.state.cocktailsList}
              select={this.handleCocktailOnClick}
              />
            </Col>
            <Col xs="12" sm="12" md='4' className='pr-0'>
              <Photo cocktail={this.state.cocktail} />
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default Main
