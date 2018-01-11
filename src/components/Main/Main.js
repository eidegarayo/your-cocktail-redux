import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Filter from './Filter/Filter'
import List from './List/List'
import Photo from './Photo/Photo'

import { getCategoriesList, getIngredientsList, getCocktailsList } from '../../services/cocktailsApi'

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

  handleCategoryOnChange = async (event) => {
    const category = event.target.value
    await this.setState({
      category: category
    })
   this.cocktailsList() 
  }

  handleIngredientOnChange = async (event) => {
    const ingredient = event.target.value
    await this.setState({
      ingredients: [...this.state.ingredients, ingredient]
    })
    this.cocktailsList()
  }

  handleCocktailOnClick = async (event) => {
    const cocktailOnClick = event.target
    const cocktailId = cocktailOnClick.getAttribute('data-cocktailid')
    await this.setState({
      cocktailId: cocktailId
    })
    this.theCocktailById()
  }

  async cocktailsList () {
    const cat = this.state.category
    const ingr = this.state.ingredients
    const cocktailsList = await getCocktailsList(cat, ingr)

    this.setState({
        cocktailsList: cocktailsList
    })
    
  }

  async theCocktailById () {
    const cocktailId = this.state.cocktailId
    const getCocktailById = await fetch(`http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`)
    const cocktailById = await getCocktailById.json()
    this.setState({
      cocktail: cocktailById.drinks
    })
  }

  render () {
    return (
      <section className='cocktails'>
        <Container fluid>
          <Row>
            <Col md='3'>
              <Filter categories={this.state.categoriesList} category={this.handleCategoryOnChange} ingredients={this.state.ingredientsList} ingredient={this.handleIngredientOnChange} />
            </Col>
            <Col md='3'>
              <List cocktails={this.state.cocktailsList} select={this.handleCocktailOnClick} />
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
