import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Filter from './Filter/Filter'
import List from './List/List'
import Photo from './Photo/Photo'

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
    const getCategoriesList = await fetch('http://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
    const categoriesList = await getCategoriesList.json()
    // const getIngredientsList = await fetch('http://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
    // const ingredientsList = await getIngredientsList.json()
    this.setState({
     categoriesList: categoriesList.drinks,
     category: categoriesList.drinks
    })

  }

  handleCategoryChange = async (event) => {
    await this.setState({
      category: event.target.value
    })
   this.theCocktailsListByCat() 
  }

  handleCocktailOnClick = async (event) => {
    const cocktailOnClick = event.target
    const cocktailId = cocktailOnClick.getAttribute('data-cocktailid')
    await this.setState({
      cocktailId: cocktailId
    })
    this.theCocktailById()
  }

  async theCocktailsListByCat () {
    const category = this.state.category
    const cat = category.replace(' ', '_')
    const getCocktailsListByCat = await fetch(`http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${cat}`)
    const cocktailsListByCat = await getCocktailsListByCat.json()
    this.setState({
      cocktailsList: cocktailsListByCat
    })
  }

  async theCocktailById () {
    const cocktailId = this.state.cocktailId
    const getCocktailById = await fetch(`http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`)
    const cocktailById = await getCocktailById.json()
    this.setState({
      cocktail: cocktailById.drinks
    })
    console.log(this.state.cocktail)
  }

  render () {
    return (
      <section className='cocktails'>
        <Container fluid>
          <Row>
            <Col md='3'>
              <Filter categories={this.state.categoriesList} select={this.handleCategoryChange} />
            </Col>
            <Col md='3'>
              <List category={this.state.category} cocktails={this.state.cocktailsList} select={this.handleCocktailOnClick} />
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
