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
  async componentDidMount () {
    const categoriesList = await getCategoriesList()
    const ingredientsList = await getIngredientsList()
    this.setState({
     categoriesList: categoriesList,
     ingredientsList: ingredientsList
    })

  }

  handleCategoryOnChange = event => {
    const category = event.target.value
    this.setState({
      category: category
    }, () => this.cocktailsByCat() )
  }

  handleIngredientOnChange = event => {
    const ingredient = event.target.value
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

  async cocktailsByCat () {
    const cat = this.state.category
    const cocktailsListByCat = await getCocktailsByCat(cat)  
    this.setState({
        ingredients: [],
        cocktailsList: cocktailsListByCat
    })
  }

  async cocktailsByIngrs (ingr) {
    const list = this.state.cocktailsList
    const listByIngr = await getCocktailsByIngrs(ingr)
    const cocktailsList = await filterListByIngrs(list, listByIngr)
    this.setState({
        cocktailsList: cocktailsList
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
            <Col md='3'>
              <Filter
              categories={this.state.categoriesList}
              category={this.handleCategoryOnChange}
              ingredients={this.state.ingredientsList}
              selectIngr={this.handleIngredientOnChange}
              selectedIngr={this.state.ingredients}
              />
            </Col>
            <Col md='3'>
              <List
              cocktails={this.state.cocktailsList}
              select={this.handleCocktailOnClick}
              />
            </Col>
            <Col md='6' className='pr-0'>
              <Photo cocktail={this.state.cocktail} />
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default Main
